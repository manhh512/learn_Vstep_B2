# VSTEP B2 Preparation Master Web Application

> **Lưu ý dành cho AI Assistants / Developers**: File README này chứa toàn bộ kiến trúc dự án, cấu trúc dữ liệu, luồng tính năng và hướng dẫn bảo trì/mở rộng để các AI tiếp theo dễ dàng đọc và tiếp tục phát triển.

---

## 📌 1. Tổng Quan Dự Án (Project Overview)

- **Tên dự án**: VSTEP B2 Preparation Master
- **Mục đích**: Ứng dụng Web đơn trang (SPA - Single Page Application) phục vụ ôn thi tiếng Anh **VSTEP B1/B2** (Writing Task 1, Writing Task 2 và 14 Chủ đề Nói/Viết).
- **Công nghệ**: HTML5, Vanilla CSS3 (Modern Glassmorphism Design, Dark/Light Mode), JavaScript ES6 (Không phụ thuộc framework nặng).
- **Trạng thái Deployment**: Đã xuất bản tự động trên **GitHub Pages** thông qua GitHub Actions (`.github/workflows/static.yml`).
- **Live URL**: `https://manhh512.github.io/learn_Vstep_B2/`
- **GitHub Repository**: `https://github.com/manhh512/learn_Vstep_B2`

---

## 🗂️ 2. Cấu Trúc Thư Mục & Các File Trong Dự Án

```
English_APP/
├── index.html                   # Trang SPA chính (semantic HTML, navbar, tabs, modal, quiz & blurting workspace)
├── styles.css                   # System CSS (Modern Teal Glassmorphic UI, Red-Pen Diff, Dark/Light theme variables)
├── app.js                       # Logic ứng dụng (Mindmap tree, Random Quiz, Blurting 4-step workflow, LocalStorage)
├── js/
│   ├── topics_data.js           # Dataset 14 chủ đề Vstep (Mindmap ideas, Advantages, Disadvantages, Causes, Solutions, Keywords, Dịch Việt)
│   └── templates_data.js        # Dataset Master Templates (Formal/Informal Letter, Advantage & Discussion Essay)
├── .github/
│   └── workflows/
│       └── static.yml           # GitHub Actions tự động build & deploy lên GitHub Pages khi push code lên nhánh main
├── 14_topic_Vstep.xlsx          # File dữ liệu gốc từ Excel (Mindmap 14 topic)
├── formal_letter.txt            # File dàn ý gốc
├── informal_letter.txt          # File dàn ý gốc
├── advantage_essay.txt          # File dàn ý gốc
├── discusstion_essay.txt        # File dàn ý gốc
└── README.md                    # Tài liệu hướng dẫn & Kiến trúc hệ thống
```

---

## 🧠 3. Cấu Trúc Dữ Liệu Cốt Lõi (Data Schemas)

### A. Topic Data Schema (`js/topics_data.js`)
Mỗi topic gồm:
```javascript
{
  id: "transport",               // Unique string key
  title: "Transport & Transit",  // Tên tiếng Anh
  titleVi: "Giao thông...",       // Dịch nghĩa tiếng Việt
  icon: "🚲",                    // Emoji hiển thị
  advantages: [                  // Danh sách ưu điểm (hoặc goodHabits / features)
    { idea: "Be safer", detail: "have fewer accidents", vi: "An toàn hơn - ít tai nạn" }
  ],
  disadvantages: [               // Danh sách nhược điểm (hoặc badHabits / drawbacks)
    { idea: "Be inconvenient", detail: "run slowly", vi: "Bất tiện - chạy chậm" }
  ],
  causes: [...],                 // Nguyên nhân (nếu có, ví dụ chủ đề Crime)
  solutions: [...],              // Giải pháp
  keywords: ["vehicle", ...]     // Từ khóa quan trọng
}
```

### B. Template Data Schema (`js/templates_data.js`)
Mỗi template gồm:
```javascript
{
  id: "formal_letter",
  type: "task1",                // task1 (Thư) hoặc task2 (Bài luận)
  title: "Formal Letter",
  titleVi: "Thư Trang Trọng",
  targetWords: 120,             // Số từ mục tiêu (120 cho Task 1, 250 cho Task 2)
  sampleText: "...",            // Bài mẫu Tiếng Anh hoàn chỉnh
  translationVi: "...",         // Dịch nghĩa Tiếng Việt tương ứng
  keywordsSentenceMap: [...],   // Dàn ý từ khóa theo từng câu phục vụ Blurting Step 2
  structure: [...]              // Công thức cấu trúc từng phần
}
```

---

## ⚙️ 4. Các Tính Năng Cốt Lõi & Luồng Xử Lý (Core Workflows)

### 🔹 Tab 1: 14 Topic Mindmap & Smart Quiz
- **Search & Grid**: Lọc chủ đề theo tên hoặc từ khóa tìm kiếm.
- **Mindmap Modal**: Render sơ đồ tư duy dạng cây phân nhánh (Ưu điểm, Nhược điểm, Nguyên nhân, Giải pháp).
- **Random Quiz Auto-Grader (`gradeQuiz()`)**:
  - Chọn ngẫu nhiên 1 topic. Người dùng nhập ý tưởng và từ vựng.
  - Thuật toán chấm điểm trên thang 100 dựa trên số từ khóa khớp và ý tưởng chính.
  - Chỉ ra các từ khóa bị bỏ sót và lưu kết quả vào `LocalStorage`.

### 🔹 Tab 2: Luyện Viết Theo Phương Pháp Blurting (Look-Cover-Write-Check)
Quy trình 4 bước rèn luyện trí nhớ:
1. **Bước 1 (Đọc & Hiểu)**: Xem bài mẫu kèm dịch nghĩa tiếng Việt.
2. **Bước 2 (Ghi nhớ từ khóa)**: Đọc dàn ý từ khóa 2-3 words/câu.
3. **Bước 3 (Che & Viết lại)**: Che toàn bộ bài mẫu. Có bộ đếm thời gian (`Timer`) và đếm số từ tự động (`Live Word Counter`).
4. **Bước 4 (Đối soát Bút Đỏ - Red-Pen Diff Engine)**:
   - Thuật toán so sánh từng từ giữa bài gõ và bài mẫu:
     - 🔴 **Khoanh đỏ gạch ngang**: Từ bị quên/thiếu.
     - ⚠️ **Khoanh hồng**: Từ gõ sai chính tả / thừa.
     - 🟢 **Chữ xanh**: Từ gõ chuẩn xác.
   - Tính % độ chính xác và cung cấp ô chép lại câu sai 2 lần.

### 🔹 Tab 3: Master Templates
- Hợp nhất 4 mẫu thư & luận lẻ thành bộ **Master Templates VSTEP B2** chuẩn mực.
- Đã sửa toàn bộ lỗi chính tả và chuẩn hóa ngữ pháp B2/C1.
- Tích hợp công cụ sao chép 1-click (`copyTextToClipboard`).

---

## 🚀 5. Hướng Dẫn Kích Hoạt & Deploy (GitHub Pages)

- **Workflow File**: `.github/workflows/static.yml`
- Khi commit/push code mới lên nhánh `main`, GitHub Actions sẽ tự động thực hiện build và publish lên GitHub Pages tại URL:
  👉 **`https://manhh512.github.io/learn_Vstep_B2/`**

### Lệnh Git chuẩn bị cập nhật:
```bash
git add .
git commit -m "Cập nhật tính năng mới"
git push origin main
```

---

## 🛠️ 6. Hướng Dẫn Dành Cho AI Assistants Phân Tích & Bảo Trì Sau

Khi người dùng yêu cầu thêm tính năng hoặc sửa đổi dự án:
1. **Thêm Topic mới**: Thêm object mới vào mảng `TOPICS_DATA` trong `js/topics_data.js`.
2. **Thêm Template mới**: Thêm object mới vào mảng `TEMPLATES_DATA` trong `js/templates_data.js`.
3. **Thay đổi giao diện/style**: Sửa biến màu CSS trong `:root` và `[data-theme="light"]` trong `styles.css`.
4. **Giữ nguyên tính tương thích SPA**: Không chia nhỏ thành các trang HTML khác nhau vì ứng dụng cần chạy mượt mà trên Mobile dưới dạng SPA duy nhất (`index.html`).
