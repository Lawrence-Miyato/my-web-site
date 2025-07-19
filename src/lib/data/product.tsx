// src/lib/data/products.ts

// 👉 Dành cho giỏ hàng
export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// 👉 Dành cho danh sách sản phẩm
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;           // Giá sau khi áp dụng giảm
  oldPrice?: number | null;
  discount?: string | null;  // ví dụ "-5%"
  describe?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vợt Yonex Astrox Lite",
    image: "/picture/vot2.png",
    price: 712500,
    oldPrice: 750000,
    discount: "-5%",
    describe: "Thông tin của vợt",
  },
  {
    id: 2,
    name: "Vợt Victor Ryuga 2 Pro",
    image: "/picture/vot3.png",
    price: 3690000,
    oldPrice: 3690000,
    discount: null,
    describe: "Vợt siêu cấp cho tay chuyên nghiệp",
  },
  {
    id: 3,
    name: "Vợt Victor AuraSpeed",
    image: "/picture/vot4.png",
    price: 4500000,
    oldPrice: 4500000,
    discount: null,
    describe: "Cảm giác linh hoạt, tốc độ nhanh",
  },
  {
    id: 4,
    name: "Vợt Mizuno JPX 10.3",
    image: "/picture/vot5.png",
    price: 3700000,
    oldPrice: 3700000,
    discount: null,
    describe: "Thương hiệu Nhật nổi bật với độ bền",
  },
];

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
