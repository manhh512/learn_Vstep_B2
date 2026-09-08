/* ==========================================================================
   VSTEP B2 PREPARATION SPA - MAIN APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// App State
const state = {
  activeTab: 'topics-tab',
  selectedTopic: null,
  quizTopic: null,
  activeBlurtingTemplate: null,
  blurtingStep: 1,
  blurtingTimer: null,
  blurtingTimeSeconds: 0,
  userTypedText: '',
  theme: localStorage.getItem('vstep_theme') || 'dark',
  scores: JSON.parse(localStorage.getItem('vstep_scores') || '[]')
};

function initApp() {
  applyTheme(state.theme);
  setupNavigation();
  renderTopicsGrid();
  renderTemplateSelector();
  setupEventListeners();
  updateProgressStats();
}

/* -------------------------------------------------------------------------- */
/* THEME MANAGEMENT                                                          */
/* -------------------------------------------------------------------------- */
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vstep_theme', theme);
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* -------------------------------------------------------------------------- */
/* NAVIGATION & TABS                                                          */
/* -------------------------------------------------------------------------- */
function setupNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetTabId = tab.dataset.tab;
      switchTab(targetTabId);
    });
  });
}

function switchTab(tabId) {
  state.activeTab = tabId;
  
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });
}

/* -------------------------------------------------------------------------- */
/* TAB 1: TOPIC MASTER & QUIZ                                                 */
/* -------------------------------------------------------------------------- */
function renderTopicsGrid(filterQuery = '') {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = TOPICS_DATA.filter(t => 
    t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    t.titleVi.toLowerCase().includes(filterQuery.toLowerCase()) ||
    t.keywords.some(k => k.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">Không tìm thấy chủ đề phù hợp.</div>`;
    return;
  }

  filtered.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="topic-card-header">
        <div class="topic-icon">${topic.icon || '📝'}</div>
        <div>
          <div class="topic-title">${topic.title}</div>
          <div class="topic-title-vi">${topic.titleVi}</div>
        </div>
      </div>
      <div class="topic-stats">
        <span class="tag">${topic.keywords.length} Từ khóa</span>
        ${topic.advantages ? `<span class="tag">Ưu điểm</span>` : ''}
        ${topic.disadvantages ? `<span class="tag">Nhược điểm</span>` : ''}
        ${topic.causes ? `<span class="tag">Nguyên nhân</span>` : ''}
      </div>
    `;
    card.addEventListener('click', () => openTopicMindmapModal(topic));
    grid.appendChild(card);
  });
}

function openTopicMindmapModal(topic) {
  state.selectedTopic = topic;
  const modal = document.getElementById('mindmap-modal');
  const modalTitle = document.getElementById('modal-topic-title');
  const modalBody = document.getElementById('modal-mindmap-body');

  modalTitle.innerHTML = `${topic.icon || '📌'} ${topic.title} <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted);">(${topic.titleVi})</span>`;
  
  let html = `<div class="mindmap-tree">`;

  // Keywords Badge Group
  html += `
    <div style="margin-bottom: 1rem;">
      <strong style="color: var(--text-muted); font-size: 0.85rem; display: block; margin-bottom: 0.5rem;">TỪ KHÓA QUAN TRỌNG (KEYWORDS):</strong>
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
        ${topic.keywords.map(k => `<span class="tag" style="background: rgba(20, 184, 166, 0.15); color: var(--accent-teal); border-color: var(--accent-teal-glow);">${k}</span>`).join('')}
      </div>
    </div>
  `;

  // Advantages / Good habits / Benefits
  const advs = topic.advantages || topic.goodHabits || topic.features;
  if (advs && advs.length > 0) {
    html += `
      <div class="mindmap-branch">
        <div class="mindmap-branch-title" style="color: var(--accent-teal);">
          <span>✅</span> ƯU ĐIỂM & ĐIỂM TÍCH CỰC (ADVANTAGES / BENEFITS)
        </div>
        <div class="mindmap-node-list">
          ${advs.map(item => `
            <div class="mindmap-node">
              <div class="mindmap-node-idea">${item.idea}</div>
              <div class="mindmap-node-detail">${item.detail}</div>
              <div style="color: var(--text-dim); font-size: 0.8rem; margin-top: 0.2rem;">👉 ${item.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Disadvantages / Bad habits / Drawbacks
  const disadvs = topic.disadvantages || topic.badHabits || topic.drawbacks;
  if (disadvs && disadvs.length > 0) {
    html += `
      <div class="mindmap-branch disadvantage">
        <div class="mindmap-branch-title" style="color: var(--accent-rose);">
          <span>⚠️</span> NHƯỢC ĐIỂM & TÁC HẠI (DISADVANTAGES / DRAWBACKS)
        </div>
        <div class="mindmap-node-list">
          ${disadvs.map(item => `
            <div class="mindmap-node">
              <div class="mindmap-node-idea">${item.idea}</div>
              <div class="mindmap-node-detail">${item.detail}</div>
              <div style="color: var(--text-dim); font-size: 0.8rem; margin-top: 0.2rem;">👉 ${item.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Causes
  if (topic.causes && topic.causes.length > 0) {
    html += `
      <div class="mindmap-branch" style="border-left-color: var(--accent-amber);">
        <div class="mindmap-branch-title" style="color: var(--accent-amber);">
          <span>🔍</span> NGUYÊN NHÂN (CAUSES)
        </div>
        <div class="mindmap-node-list">
          ${topic.causes.map(item => `
            <div class="mindmap-node">
              <div class="mindmap-node-idea">${item.idea}</div>
              <div class="mindmap-node-detail">${item.detail}</div>
              <div style="color: var(--text-dim); font-size: 0.8rem; margin-top: 0.2rem;">👉 ${item.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Solutions
  if (topic.solutions && topic.solutions.length > 0) {
    html += `
      <div class="mindmap-branch solution">
        <div class="mindmap-branch-title" style="color: var(--accent-cyan);">
          <span>💡</span> GIẢI PHÁP (SOLUTIONS)
        </div>
        <div class="mindmap-node-list">
          ${topic.solutions.map(item => `
            <div class="mindmap-node">
              <div class="mindmap-node-idea">${item.idea}</div>
              <div class="mindmap-node-detail">${item.detail}</div>
              <div style="color: var(--text-dim); font-size: 0.8rem; margin-top: 0.2rem;">👉 ${item.vi}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  html += `</div>`;
  modalBody.innerHTML = html;
  modal.classList.add('active');
}

/* RANDOM TOPIC QUIZ ENGINE */
function startRandomQuiz() {
  const randomIndex = Math.floor(Math.random() * TOPICS_DATA.length);
  state.quizTopic = TOPICS_DATA[randomIndex];
  
  const quizBox = document.getElementById('quiz-box');
  const quizTitle = document.getElementById('quiz-topic-title');
  const quizInputsContainer = document.getElementById('quiz-inputs-container');
  const scorePanel = document.getElementById('quiz-score-panel');

  if (!quizBox) return;

  quizTitle.innerHTML = `Chủ Đề Kiểm Tra Ngẫu Nhiên: <strong>${state.quizTopic.title}</strong> (${state.quizTopic.titleVi})`;
  scorePanel.classList.remove('active');
  scorePanel.innerHTML = '';

  let html = `
    <div class="quiz-input-group">
      <label class="quiz-label">1. Hãy ghi lại các Ưu điểm (Advantages/Benefits) hoặc Ý tưởng chính mà bạn nhớ thuộc chủ đề này:</label>
      <textarea id="quiz-adv-input" class="quiz-textarea" placeholder="Nhập các ý ưu điểm tiếng Anh (ví dụ: safer, feel comfortable, save money...)"></textarea>
    </div>
    <div class="quiz-input-group">
      <label class="quiz-label">2. Hãy ghi lại các Nhược điểm (Disadvantages/Drawbacks) hoặc Nguyên nhân/Tác hại:</label>
      <textarea id="quiz-disadv-input" class="quiz-textarea" placeholder="Nhập các ý nhược điểm tiếng Anh (ví dụ: inconvenient, crowded, polluted...)"></textarea>
    </div>
    <div class="quiz-input-group">
      <label class="quiz-label">3. Hãy nhập các Từ vựng / Keywords thuộc chủ đề này:</label>
      <textarea id="quiz-keywords-input" class="quiz-textarea" placeholder="Nhập từ vựng cách nhau bằng dấu phẩy..."></textarea>
    </div>
    <button class="btn btn-primary" onclick="gradeQuiz()">💯 Nộp Bài & Chấm Điểm</button>
  `;

  quizInputsContainer.innerHTML = html;
  quizBox.style.display = 'block';
  quizBox.scrollIntoView({ behavior: 'smooth' });
}

function gradeQuiz() {
  if (!state.quizTopic) return;

  const advInput = (document.getElementById('quiz-adv-input')?.value || '').toLowerCase();
  const disadvInput = (document.getElementById('quiz-disadv-input')?.value || '').toLowerCase();
  const kwInput = (document.getElementById('quiz-keywords-input')?.value || '').toLowerCase();

  const topic = state.quizTopic;
  let totalScore = 0;
  let maxScore = 100;
  let feedback = [];

  // Grade keywords (30 points)
  const masterKw = topic.keywords.map(k => k.toLowerCase());
  let matchedKwCount = 0;
  masterKw.forEach(kw => {
    if (kwInput.includes(kw) || advInput.includes(kw) || disadvInput.includes(kw)) {
      matchedKwCount++;
    }
  });
  const kwScore = Math.round((matchedKwCount / masterKw.length) * 30);
  totalScore += kwScore;
  feedback.push(`• Từ vựng (Keywords): Đúng ${matchedKwCount}/${masterKw.length} từ (${kwScore}/30 điểm).`);

  // Grade Advantages (35 points)
  const advs = topic.advantages || topic.goodHabits || topic.features || [];
  let matchedAdvCount = 0;
  advs.forEach(adv => {
    const keyIdea = adv.idea.toLowerCase();
    const words = keyIdea.split(' ').filter(w => w.length > 3);
    if (words.some(w => advInput.includes(w))) {
      matchedAdvCount++;
    }
  });
  const advScore = advs.length > 0 ? Math.round((matchedAdvCount / advs.length) * 35) : 35;
  totalScore += advScore;
  feedback.push(`• Ưu điểm / Ý tưởng đúng: ${matchedAdvCount}/${advs.length} ý (${advScore}/35 điểm).`);

  // Grade Disadvantages / Solutions (35 points)
  const disadvs = topic.disadvantages || topic.badHabits || topic.drawbacks || topic.causes || [];
  let matchedDisadvCount = 0;
  disadvs.forEach(dis => {
    const keyIdea = dis.idea.toLowerCase();
    const words = keyIdea.split(' ').filter(w => w.length > 3);
    if (words.some(w => disadvInput.includes(w))) {
      matchedDisadvCount++;
    }
  });
  const disadvScore = disadvs.length > 0 ? Math.round((matchedDisadvCount / disadvs.length) * 35) : 35;
  totalScore += disadvScore;
  feedback.push(`• Nhược điểm / Tác hại đúng: ${matchedDisadvCount}/${disadvs.length} ý (${disadvScore}/35 điểm).`);

  // Render Score Panel
  const scorePanel = document.getElementById('quiz-score-panel');
  scorePanel.classList.add('active');

  const gradeLevel = totalScore >= 80 ? 'Xuất Sắc (B2/C1 Pass)' : totalScore >= 60 ? 'Khá (B1 Pass)' : 'Cần Ôn Lại';
  const gradeColor = totalScore >= 80 ? 'var(--accent-emerald)' : totalScore >= 60 ? 'var(--accent-teal)' : 'var(--accent-rose)';

  scorePanel.innerHTML = `
    <div style="font-size: 1.4rem; font-weight: 800; color: ${gradeColor}; margin-bottom: 0.5rem;">
      🎯 KẾT QUẢ: ${totalScore}/100 ĐIỂM (${gradeLevel})
    </div>
    <div style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
      ${feedback.join('<br>')}
    </div>
    <div style="background: rgba(0, 0, 0, 0.2); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
      <strong>📌 Các từ khóa bạn bỏ sót:</strong> ${masterKw.filter(k => !kwInput.includes(k) && !advInput.includes(k) && !disadvInput.includes(k)).join(', ') || 'Không có (Bạn nhớ rất đầy đủ!)'}
    </div>
  `;

  // Save to history
  state.scores.push({
    date: new Date().toLocaleDateString('vi-VN'),
    topic: topic.title,
    score: totalScore
  });
  localStorage.setItem('vstep_scores', JSON.stringify(state.scores));
  updateProgressStats();
}

/* -------------------------------------------------------------------------- */
/* TAB 2: BLURTING METHOD WRITING TRAINER (LOOK-COVER-WRITE-CHECK)            */
/* -------------------------------------------------------------------------- */
function renderBlurtingTrainer() {
  const container = document.getElementById('blurting-workspace');
  if (!container) return;

  const t = state.activeBlurtingTemplate || TEMPLATES_DATA[0];
  state.activeBlurtingTemplate = t;

  const currentStep = state.blurtingStep;

  // Step Bar UI
  let html = `
    <div class="blurting-step-bar">
      <div class="blurting-step ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}">Bước 1: Đọc & Hiểu Bài Mẫu</div>
      <div class="blurting-step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}">Bước 2: Ghi Nhớ Từ Khóa</div>
      <div class="blurting-step ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''}">Bước 3: Che & Viết Lại</div>
      <div class="blurting-step ${currentStep === 4 ? 'active' : ''}">Bước 4: Đối Soát Bút Đỏ</div>
    </div>

    <!-- Template Selector Header -->
    <div class="glass-card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 700;">${t.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.85rem;">${t.titleVi} | Mục tiêu: ${t.targetWords} từ</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          ${TEMPLATES_DATA.map(item => `
            <button class="btn btn-secondary ${item.id === t.id ? 'btn-primary' : ''}" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="selectBlurtingTemplate('${item.id}')">
              ${item.title.split(' ')[0]} ${item.title.split(' ')[1] || ''}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Workspace Body depending on Step
  if (currentStep === 1) {
    html += `
      <div class="blurting-container">
        <div class="glass-card">
          <h4 style="color: var(--accent-teal); margin-bottom: 1rem;">📖 Bài Mẫu Tiếng Anh (English Sample)</h4>
          <div style="white-space: pre-wrap; line-height: 1.8; font-size: 0.95rem;">${t.sampleText}</div>
        </div>
        <div class="glass-card">
          <h4 style="color: var(--accent-indigo); margin-bottom: 1rem;">🇻🇳 Dịch Nghĩa Tiếng Việt</h4>
          <div style="white-space: pre-wrap; line-height: 1.8; font-size: 0.95rem; color: var(--text-muted);">${t.translationVi}</div>
        </div>
      </div>
      <div style="margin-top: 1.5rem; text-align: right;">
        <button class="btn btn-primary" onclick="setBlurtingStep(2)">Chuyển Sang Bước 2: Xem Từ Khóa 👉</button>
      </div>
    `;
  } else if (currentStep === 2) {
    html += `
      <div class="glass-card">
        <h4 style="color: var(--accent-amber); margin-bottom: 1rem;">📌 Dàn Ý Từ Khóa Theo Câu (Keywords Note)</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Đọc lướt qua dàn ý này 1-2 lần để ghi nhớ mạch văn trước khi che bài mẫu hoàn toàn.</p>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${t.keywordsSentenceMap.map((map, idx) => `
            <div style="background: rgba(255, 255, 255, 0.03); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); display: flex; align-items: center; gap: 1rem;">
              <span style="font-weight: 800; color: var(--accent-teal); min-width: 60px;">Câu ${map.sentenceIndex}:</span>
              <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                ${map.keywords.map(kw => `<span class="tag" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-amber);">${kw}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="margin-top: 1.5rem; display: flex; justify-content: space-between;">
        <button class="btn btn-secondary" onclick="setBlurtingStep(1)">👈 Quay Lại Bước 1</button>
        <button class="btn btn-primary" onclick="setBlurtingStep(3)">Che Bài Mẫu & Bắt Đầu Viết 👉</button>
      </div>
    `;
  } else if (currentStep === 3) {
    html += `
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
          <h4 style="color: var(--accent-teal);">✍️ Che Bài Mẫu & Tự Viết Lại Từ Trí Nhớ</h4>
          <div class="meta-counter">
            <span class="counter-badge" id="live-word-counter">📝 0 / ${t.targetWords} từ</span>
            <span class="counter-badge warning" id="blurting-timer-display">⏱️ 00:00</span>
          </div>
        </div>
        <textarea id="blurting-textarea" class="quiz-textarea" style="min-height: 280px; font-size: 1rem;" placeholder="Gõ lại toàn bộ bài mẫu từ trí nhớ của bạn..." oninput="onBlurtingInput(this)"></textarea>
      </div>
      <div style="margin-top: 1.5rem; display: flex; justify-content: space-between;">
        <button class="btn btn-secondary" onclick="setBlurtingStep(2)">👈 Xem Lại Từ Khóa</button>
        <button class="btn btn-primary" onclick="finishBlurtingAndCheck()">Nộp Bài & Đối Soát Bút Đỏ 👉</button>
      </div>
    `;
  } else if (currentStep === 4) {
    html += renderBlurtingDiffView();
  }

  container.innerHTML = html;

  if (currentStep === 3) {
    startBlurtingTimer();
    const area = document.getElementById('blurting-textarea');
    if (area && state.userTypedText) {
      area.value = state.userTypedText;
      onBlurtingInput(area);
    }
  }
}

function selectBlurtingTemplate(id) {
  const t = TEMPLATES_DATA.find(x => x.id === id);
  if (t) {
    state.activeBlurtingTemplate = t;
    state.blurtingStep = 1;
    state.userTypedText = '';
    renderBlurtingTrainer();
  }
}

function setBlurtingStep(step) {
  state.blurtingStep = step;
  renderBlurtingTrainer();
}

function startBlurtingTimer() {
  if (state.blurtingTimer) clearInterval(state.blurtingTimer);
  state.blurtingTimeSeconds = 0;
  state.blurtingTimer = setInterval(() => {
    state.blurtingTimeSeconds++;
    const mins = String(Math.floor(state.blurtingTimeSeconds / 60)).padStart(2, '0');
    const secs = String(state.blurtingTimeSeconds % 60).padStart(2, '0');
    const display = document.getElementById('blurting-timer-display');
    if (display) display.innerHTML = `⏱️ ${mins}:${secs}`;
  }, 1000);
}

function onBlurtingInput(textarea) {
  state.userTypedText = textarea.value;
  const wordCount = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
  const counter = document.getElementById('live-word-counter');
  const target = state.activeBlurtingTemplate?.targetWords || 120;
  
  if (counter) {
    counter.innerHTML = `📝 ${wordCount} / ${target} từ`;
    counter.className = wordCount >= target ? 'counter-badge success' : 'counter-badge warning';
  }
}

function finishBlurtingAndCheck() {
  if (state.blurtingTimer) clearInterval(state.blurtingTimer);
  state.blurtingStep = 4;
  renderBlurtingTrainer();
}

/* RED-PEN DIFF ENGINE */
function renderBlurtingDiffView() {
  const original = (state.activeBlurtingTemplate?.sampleText || '').trim();
  const userTyped = (state.userTypedText || '').trim();

  const origWords = original.split(/\s+/);
  const userWords = userTyped.split(/\s+/);

  // Compute Word Diff
  let correctCount = 0;
  let missingCount = 0;
  let wrongCount = 0;

  let diffHtml = '';
  let i = 0, j = 0;

  while (i < origWords.length || j < userWords.length) {
    const wOrig = origWords[i] ? origWords[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") : null;
    const wUser = userWords[j] ? userWords[j].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") : null;

    if (wOrig && wUser && wOrig.toLowerCase() === wUser.toLowerCase()) {
      diffHtml += `<span class="diff-correct">${userWords[j]} </span>`;
      correctCount++;
      i++;
      j++;
    } else if (wOrig && wUser && isSimilarWord(wOrig, wUser)) {
      // Minor typo
      diffHtml += `<span class="diff-wrong" title="Từ đúng: ${origWords[i]}">${userWords[j]}</span> `;
      wrongCount++;
      i++;
      j++;
    } else if (wOrig && (!wUser || !userWords.slice(j, j + 4).map(x => x.toLowerCase()).includes(wOrig.toLowerCase()))) {
      // Missing word
      diffHtml += `<span class="diff-missing">${origWords[i]}</span> `;
      missingCount++;
      i++;
    } else if (wUser) {
      // Extra or misspelled word
      diffHtml += `<span class="diff-wrong">${userWords[j]}</span> `;
      wrongCount++;
      j++;
    } else {
      i++;
      j++;
    }
  }

  const totalOrig = origWords.length;
  const accuracy = Math.max(0, Math.round((correctCount / totalOrig) * 100));

  return `
    <div class="glass-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <h4 style="color: var(--accent-teal); font-size: 1.3rem;">🔴 BẢNG ĐỐI SOÁT NÉT BÚT ĐỎ (LOOK-COVER-WRITE-CHECK)</h4>
        <div style="font-size: 1.1rem; font-weight: 800; color: ${accuracy >= 80 ? 'var(--accent-emerald)' : 'var(--accent-amber)'};">
          ĐỘ CHÍNH XÁC: ${accuracy}% (${correctCount}/${totalOrig} từ)
        </div>
      </div>

      <div style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.85rem;">
        <span style="color: var(--accent-emerald);">🟢 Từ đúng chuẩn</span>
        <span style="color: var(--accent-rose);">🔴 Từ bị thiếu (Bút đỏ)</span>
        <span style="color: #fb7185;">⚠️ Từ gõ sai / dư</span>
      </div>

      <div class="diff-box">${diffHtml}</div>

      <div style="margin-top: 1.5rem; background: rgba(255, 255, 255, 0.03); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
        <h5 style="color: var(--accent-amber); margin-bottom: 0.5rem;">📝 LUYỆN TẬP LẠI CÁC CÂU BỊ LỖI (CHÉP LẠI 2 LẦN)</h5>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Theo phương pháp Blurting, bạn hãy chép lại các câu có khoanh đỏ 2 lần để khắc sâu trí nhớ.</p>
        <textarea class="quiz-textarea" placeholder="Gõ lại các câu bị sai 2 lần ở đây..."></textarea>
      </div>

      <div style="margin-top: 1.5rem; display: flex; justify-content: space-between;">
        <button class="btn btn-secondary" onclick="setBlurtingStep(3)">✍️ Viết Lại Từ Đầu</button>
        <button class="btn btn-primary" onclick="setBlurtingStep(1)">🎉 Hoàn Thành Bài Học</button>
      </div>
    </div>
  `;
}

function isSimilarWord(a, b) {
  if (!a || !b) return false;
  if (Math.abs(a.length - b.length) > 2) return false;
  let matches = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i].toLowerCase() === b[i].toLowerCase()) matches++;
  }
  return matches / Math.max(a.length, b.length) >= 0.7;
}

/* -------------------------------------------------------------------------- */
/* TAB 3: UNIFIED MASTER WRITING TEMPLATES                                    */
/* -------------------------------------------------------------------------- */
function renderTemplateSelector() {
  const container = document.getElementById('template-selector-container');
  if (!container) return;

  container.innerHTML = `
    <div class="template-selector">
      ${TEMPLATES_DATA.map((t, idx) => `
        <button class="template-btn ${idx === 0 ? 'active' : ''}" onclick="showTemplateDetails('${t.id}', this)">
          ${t.title}
        </button>
      `).join('')}
    </div>
    <div id="template-detail-view"></div>
  `;

  if (TEMPLATES_DATA.length > 0) {
    renderTemplateDetailContent(TEMPLATES_DATA[0]);
  }
}

function showTemplateDetails(id, btnEl) {
  document.querySelectorAll('.template-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const template = TEMPLATES_DATA.find(t => t.id === id);
  if (template) {
    renderTemplateDetailContent(template);
  }
}

function renderTemplateDetailContent(t) {
  const view = document.getElementById('template-detail-view');
  if (!view) return;

  let html = `
    <div class="glass-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <h3 style="font-size: 1.4rem; color: var(--accent-teal);">${t.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">${t.description} | Target: ${t.targetWords} từ</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${t.skeletonText ? `
            <button class="btn btn-primary copy-btn" onclick="copyTextToClipboard(\`${escapeQuotes(t.skeletonText)}\`, 'Dàn ý khung điền từ')">
              📋 Sao Chép Dàn Ý Khung
            </button>
          ` : ''}
          <button class="btn btn-secondary copy-btn" onclick="copyTextToClipboard(\`${escapeQuotes(t.sampleText)}\`, 'Bài mẫu hoàn chỉnh')">
            📝 Sao Chép Bài Mẫu
          </button>
        </div>
      </div>

      ${t.skeletonText ? `
        <h4 style="color: var(--accent-amber); margin-bottom: 0.75rem;">1. DÀN Ý KHUNG DÙNG CHUNG (SKELETON TEMPLATE - ĐIỀN TỪ [TOPIC])</h4>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.75rem;">Dàn ý mẫu chuẩn có vị trí điền từ [Topic], [Advantage 1], [Disadvantage 1]... dùng làm khung sườn cho mọi bài viết:</p>
        <div class="template-preview-box" style="margin-bottom: 2rem; border-color: rgba(245, 158, 11, 0.3); background: rgba(245, 158, 11, 0.05);">${t.skeletonText}</div>
      ` : ''}

      <h4 style="color: var(--accent-indigo); margin-bottom: 0.75rem;">2. CẤU TRÚC VĂN BẢN CHUẨN (MASTER FORMULA)</h4>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${t.structure.map(s => `
          <div style="background: rgba(255, 255, 255, 0.03); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            <strong style="color: var(--accent-teal); display: block; margin-bottom: 0.5rem;">${s.section}</strong>
            <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-muted);">
              ${(s.phrases || s.options).map(p => `<li style="margin-bottom: 0.25rem;">${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <h4 style="color: var(--accent-teal); margin-bottom: 0.75rem;">3. BÀI MẪU MINH HỌA HOÀN CHỈNH (SAMPLE ESSAY/LETTER)</h4>
      <div class="template-preview-box" style="margin-bottom: 2rem;">${t.sampleText}</div>

      ${t.translationVi ? `
        <h4 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">4. DỊCH NGHĨA TIẾNG VIỆT (VIETNAMESE TRANSLATION)</h4>
        <div class="template-preview-box" style="background: rgba(6, 182, 212, 0.05); border-color: rgba(6, 182, 212, 0.3); color: var(--text-muted);">${t.translationVi}</div>
      ` : ''}
    </div>
  `;

  view.innerHTML = html;
}

function escapeQuotes(str) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function copyTextToClipboard(text, label = 'Nội dung') {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Đã sao chép ${label} vào bộ nhớ tạm!`);
  }).catch(err => {
    console.error('Lỗi khi sao chép:', err);
  });
}

/* -------------------------------------------------------------------------- */
/* EVENT LISTENERS & UTILS                                                    */
/* -------------------------------------------------------------------------- */
function setupEventListeners() {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Search input
  const searchInput = document.getElementById('topic-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderTopicsGrid(e.target.value);
    });
  }

  // Modal close
  const modalClose = document.getElementById('modal-close-btn');
  const modal = document.getElementById('mindmap-modal');
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

function updateProgressStats() {
  const statCount = document.getElementById('completed-quiz-count');
  if (statCount) {
    statCount.textContent = state.scores.length;
  }
}
