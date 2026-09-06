# VSTEP B2 Preparation Master Web Application

Ứng dụng web học và luyện thi tiếng Anh **VSTEP B1/B2** toàn diện, hiện đại, tối ưu để chạy trực tiếp trên **GitHub Pages** (kho lưu trữ: `https://github.com/manhh512/learn_Vstep_B2`).

---

## 🌟 Tính Năng Nổi Bật

### 1. 📚 Tab 1: 14 Chủ Đề VSTEP B2 & Quiz Ngẫu Nhiên
- **Cơ sở dữ liệu 14 Chủ đề**: Transport, Countryside, City, Crime, Hobbies, Foreign Languages, Health, House/Flat, Machine, Environment, Technology, Holiday, Describe a Person, Education & Career.
- **Sơ đồ tư duy (Mindmap Tree Visualizer)**: Click vào từng chủ đề để mở sơ đồ tư duy chi tiết với các nhánh:
  - ✅ Ưu điểm (Advantages / Benefits)
  - ⚠️ Nhược điểm (Disadvantages / Drawbacks)
  - 🔍 Nguyên nhân (Causes)
  - 💡 Giải pháp (Solutions)
  - 📌 Danh sách từ khóa (Keywords) & Dịch nghĩa tiếng Việt.
- **Hệ thống Kiểm Tra Chấm Điểm Ngẫu Nhiên (VSTEP Quiz Auto-Grader)**: Tự động chọn 1 chủ đề bất kỳ, cho phép bạn tự điền ý tưởng/từ vựng, sau đó tự động chấm điểm trên thang 100, thống kê từ đúng và chỉ ra từ vựng còn thiếu.

### 2. ✍️ Tab 2: Luyện Viết Theo Phương Pháp Blurting (Look-Cover-Write-Check)
Áp dụng quy trình 4 bước kích thích não bộ ghi nhớ sâu:
- **Bước 1 (Đọc & Hiểu)**: Đọc bài mẫu kèm dịch nghĩa tiếng Việt chi tiết.
- **Bước 2 (Ghi nhớ từ khóa)**: Lướt dàn ý từ khóa (2-3 keywords/câu) để nắm mạch bài.
- **Bước 3 (Che & Viết lại)**: Che bài mẫu hoàn toàn, gõ lại từ trí nhớ có tích hợp **Bộ đếm thời gian (Timer)** và **Bộ đếm số từ tự động**.
- **Bước 4 (Đối soát bút đỏ Red-Pen Diff Engine)**: Tự động so sánh từng từ bài gõ với bài mẫu:
  - 🔴 **Khoanh đỏ gạch ngang**: Từ bị thiếu/quên.
  - ⚠️ **Khoanh hồng**: Từ gõ sai chính tả / dư thừa.
  - 🟢 **Chữ xanh**: Từ chuẩn xác.
  - Tính % chính xác và cung cấp ô chép lại câu sai 2 lần.

### 3. 📄 Tab 3: Master Writing Templates Chuẩn VSTEP B1/B2
Hợp nhất các file dàn ý lẻ thành bộ mẫu chuẩn hóa:
- **Writing Task 1**: Formal Letter (Thư trang trọng) & Informal Letter (Thư thân mật).
- **Writing Task 2**: Advantage & Disadvantage Essay (Bài luận lợi ích/tác hại) & Discussion / Opinion Essay (Bài luận bàn luận quan điểm).
- **Tích hợp 1-click Sao chép (Copy to Clipboard)**.

### 4. 🎨 Giao Diện Modern Glassmorphism & Theme Toggle
- Hỗ trợ giao diện **Sáng/Tối (Dark / Light Mode)**.
- Thiết kế responsive hiển thị hoàn hảo trên cả máy tính và điện thoại.
- Tự động lưu tiến độ làm bài và điểm số vào `LocalStorage`.

---

## 🚀 Hướng Dẫn Đẩy Lên GitHub Pages

1. **Commit & Push toàn bộ thư mục lên GitHub**:
   ```bash
   git add .
   git commit -m "Deploy VSTEP B2 Preparation Web App"
   git push origin main
   ```

2. **Kích hoạt GitHub Pages**:
   - Truy cập giao diện Repository trên GitHub: `https://github.com/manhh512/learn_Vstep_B2`
   - Vào **Settings** -> **Pages**.
   - Tại mục **Build and deployment / Source**, chọn **Deploy from a branch**.
   - Chọn nhánh **main** (hoặc `master`) và thư mục `/(root)`, sau đó nhấn **Save**.
   - Đợi 1-2 phút, trang web của bạn sẽ hoạt động tại link: `https://manhh512.github.io/learn_Vstep_B2/`

---

## 💻 Chạy Cục Bộ (Local Development)

Nếu muốn chạy thử trên máy tính cá nhân:
- Sử dụng Python:
  ```bash
  python -m http.server 8080
  ```
- Mở trình duyệt và truy cập: `http://localhost:8080`
