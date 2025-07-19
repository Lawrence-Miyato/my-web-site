// 👉 Dành cho giỏ hàng
export interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
}

// 👉 Dành cho danh sách sản phẩm
export interface Product {
  id: number;
  name: string;
  image: string; // Giá sau khi áp dụng giảm
  oldPrice?: number | null;
  discount?: string | null;
  describe?: string;
}

// 🏸 Vợt cầu lông
export const rackets: Product[] = [
  {
    id: 1,
    name: "Vợt Yonex Astrox Lite",
    image: "/picture/vot2.png",
    oldPrice: 750000,
    discount: "-5%",
    describe: "Thông tin của vợt",
  },
  {
    id: 2,
    name: "Vợt Victor Ryuga 2 Pro",
    image: "/picture/vot3.png",
    oldPrice: 3690000,
    discount: null,
    describe: "Vợt siêu cấp cho tay chuyên nghiệp",
  },
  {
    id: 3,
    name: "Vợt Victor AuraSpeed",
    image: "/picture/vot4.png",
    oldPrice: 4500000,
    discount: null,
    describe: "Cảm giác linh hoạt, tốc độ nhanh",
  },
  {
    id: 4,
    name: "Vợt Mizuno JPX 10.3",
    image: "/picture/vot5.png",
    oldPrice: 3700000,
    discount: null,
    describe: "Thương hiệu Nhật nổi bật với độ bền",
  },
];

// 👟 Giày cầu lông
export const shoes: Product[] = [
  {
    id: 5,
    name: "Giày Yonex SHB 65Z3",
    image: "/picture/giay1.png",
    oldPrice: 1950000,
    discount: "-5%",
    describe: "Êm chân, nhẹ, hỗ trợ bật nhảy tốt",
  },
  {
    id: 6,
    name: "Giày Victor P9200",
    image: "/picture/giay2.png",
    oldPrice: 2100000,
    discount: null,
    describe: "Cứng cáp, ổn định, dành cho chuyên nghiệp",
  },
];

// 👕 Áo cầu lông
export const shirts: Product[] = [
  {
    id: 7,
    name: "Áo cầu lông Yonex 2024",
    image: "/picture/ao1.png",
    oldPrice: 390000,
    discount: "-10%",
    describe: "Chất vải thấm hút mồ hôi, co giãn tốt",
  },
  {
    id: 8,
    name: "Áo Victor nam nữ Unisex",
    image: "/picture/ao2.png",
    oldPrice: 320000,
    discount: null,
    describe: "Mẫu basic, thoải mái khi vận động",
  },
];

// 👖 Quần / Váy cầu lông
export const shorts: Product[] = [
  {
    id: 9,
    name: "Quần cầu lông Yonex Pro",
    image: "/picture/quan1.png",
    oldPrice: 290000,
    discount: null,
    describe: "Form slim, nhẹ, thoáng khí",
  },
  {
    id: 10,
    name: "Váy cầu lông nữ Victor",
    image: "/picture/vay1.png",
    oldPrice: 420000,
    discount: "-12%",
    describe: "Thiết kế nữ tính, năng động và mát mẻ",
  },
];

// 🧃 Gộp tất cả nếu cần render chung
export const allProducts: Product[] = [
  ...rackets,
  ...shoes,
  ...shirts,
  ...shorts,
];

// 📹 Hướng dẫn video
export const huongDanVideos = [
  {
    id: 1,
    title: "Hướng dẫn kỹ thuật cầu lông",
    videoSrc: "/videos/huong-dan-co-ban.mp4",
  },
  {
    id: 2,
    title: "hướng dẫn di chuyển",
    videoSrc: "/videos/huong-dan-di-chuyen.mp4",
  },
  {
    id: 3,
    title: "cách đập cầu cho người mới",
    videoSrc: "/videos/huong-dan-dap-cau.mp4",
  },
];
