# 🚀 Khởi tạo dự án Next.js dành cho người mới bắt đầu

Đây là hướng dẫn từng bước để tạo một dự án **Next.js** kèm các thư viện phổ biến như **Tailwind CSS**, **Shadcn UI**, và **Heroicons**.

---

## 🛠️ Bước 1: Tạo Project Next.js

Mở Terminal và chạy lệnh sau:

```bash
npx create-next-app@latest

Khi chạy lệnh, hệ thống sẽ hỏi một số câu hỏi. Bạn hãy chọn như sau:

Câu hỏi	Câu trả lời nên chọn
What is your project named?	my-app (hoặc tên bạn muốn)
Would you like to use TypeScript?	Yes
Would you like to use ESLint?	Yes
Would you like to use Tailwind CSS?	Yes
Would you like your code inside a src/ directory?	Yes
Would you like to use App Router? (recommended)	Yes
Would you like to use Turbopack for next dev?	No (dành cho người mới)
Would you like to customize the import alias?	Yes
What import alias would you like configured?	@/*

Ẩn/Hiện Mật khẩu (Password Toggle) với Heroicons

chạy-lệnh  npm install @heroicons/react

sau-đó-import  import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

Thêm Carousel (slide hình ảnh) với Shadcn UI

chạy-lệnh npx shadcn-ui@latest add carousel để thêm thư viện carousel

chạy-lệnh npx shadcn@latest add card để thêm thư viện card

---

```

# 🚀 CÁCH CHẠY WEB

    npm run dev

# 🎯 Vị trí lưu Fake Data

    src/lib/data/product.tsx
