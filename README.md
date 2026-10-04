# Lab 03 - Dicee
Sinh viên: **Nguyễn Anh Tuấn**  
MSSV: **23IT297**  
Lớp: **23SE2**  


---

## 1. Mục tiêu Lab
Làm quen và thực hành quản lý State trong React Native bằng `useState`, cập nhật giao diện người dùng tự động theo dữ liệu ngẫu nhiên khi người dùng tương tác với nút bấm hoặc xúc xắc.

## 2. Công nghệ sử dụng
- **React Native** (v0.86.3)
- **TypeScript**
- **Expo SDK** (~57.0.25)
- **Expo Status Bar**
- React Hooks: `useState`
- Các component cơ bản: `View`, `Text`, `Image`, `Pressable`, `StyleSheet`

## 3. Chức năng chính
- Hiển thị 2 viên xúc xắc ở giữa màn hình với các chấm điểm từ 1 đến 6.
- Bộ 6 asset xúc xắc (`dice1.png` -> `dice6.png`) chuẩn vector pips, lưu trữ local trong project.
- Nút bấm `ROLL` với hiệu ứng xúc giác (`Pressable` scale & ripple).
- Nhấn trực tiếp vào từng viên xúc xắc cũng kích hoạt hàm lắc xúc xắc.
- Tính toán và hiển thị tự động tổng điểm `Total: X`.
- Đảm bảo giá trị random luôn là số nguyên hợp lệ trong đoạn `[1, 6]`.

## 4. Cách chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Khởi chạy ứng dụng:
```bash
npx expo start
```

- Nhấn phím `a` trên terminal để mở trực tiếp trên **Android Emulator**.
- Hoặc quét mã QR bằng ứng dụng **Expo Go** trên thiết bị thật.
"# Lab3_Dicee" 
