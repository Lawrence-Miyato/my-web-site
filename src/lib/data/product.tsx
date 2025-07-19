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
  {
    id: 5,
    name: "Vợt Lining Turbo Charging 75",
    image: "/picture/vot6.png",
    oldPrice: 2890000,
    discount: "-10%",
    describe: "Công nghệ khí động học, smash cực phê",
  },
  {
    id: 6,
    name: "Vợt Yonex Nanoflare 800",
    image: "/picture/vot7.png",
    oldPrice: 4800000,
    discount: null,
    describe: "Vợt nhẹ, tốc độ đánh nhanh như tia chớp ⚡",
  },
  {
    id: 7,
    name: "Vợt Apacs Z-Ziggler",
    image: "/picture/vot8.png",
    oldPrice: 850000,
    discount: "-15%",
    describe: "Ngon - bổ - rẻ, phù hợp cho người mới tập 🐣",
  },
  {
    id: 8,
    name: "Vợt ProKennex Power Pro 706",
    image: "/picture/vot9.png",
    oldPrice: 1290000,
    discount: null,
    describe: "Cứng cáp, lực đập ổn định, xứng đáng giá tiền 💪",
  },
];

// 👟 Giày cầu lông
export const shoes: Product[] = [
  {
    id: 101,
    name: "Giày Yonex SHB 65Z3",
    image: "/picture/giay1.png",
    oldPrice: 1950000,
    discount: "-5%",
    describe: "Êm chân, nhẹ, hỗ trợ bật nhảy tốt",
  },
  {
    id: 102,
    name: "Giày Victor P9200",
    image: "/picture/giay2.png",
    oldPrice: 2100000,
    discount: null,
    describe: "Cứng cáp, ổn định, dành cho chuyên nghiệp",
  },
  {
    id: 103,
    name: "Giày Kawasaki K365",
    image: "/picture/giay3.png",
    oldPrice: 880000,
    discount: "-8%",
    describe: "Thiết kế gọn nhẹ, đế bám sân tốt 🎯",
  },
  {
    id: 104,
    name: "Giày Lining AYAP 009",
    image: "/picture/giay4.png",
    oldPrice: 1450000,
    discount: "-10%",
    describe: "Màu sắc nổi bật, hợp thời trang 🎨",
  },
  {
    id: 105,
    name: "Giày Yonex Eclipsion Z",
    image: "/picture/giay5.png",
    oldPrice: 2950000,
    discount: null,
    describe: "Giày cao cấp, ôm chân, hỗ trợ cực tốt",
  },
  {
    id: 106,
    name: "Giày Victor A950",
    image: "/picture/giay6.png",
    oldPrice: 1850000,
    discount: "-6%",
    describe: "Đệm êm, di chuyển linh hoạt 💨",
  },
  {
    id: 107,
    name: "Giày Apacs Cushion 23",
    image: "/picture/giay7.png",
    oldPrice: 950000,
    discount: null,
    describe: "Phù hợp với người mới chơi, giá dễ chịu 👍",
  },
  {
    id: 108,
    name: "Giày ProKennex Ultra 2",
    image: "/picture/giay8.png",
    oldPrice: 1120000,
    discount: "-12%",
    describe: "Bền bỉ, chống trượt tốt, đáng đồng tiền 💸",
  },
];

// 👕 Áo cầu lông
export const shirts: Product[] = [
  {
    id: 301,
    name: "Áo cầu lông Yonex 2024",
    image: "/picture/ao1.png",
    oldPrice: 390000,
    discount: "-10%",
    describe: "Chất vải thấm hút mồ hôi, co giãn tốt",
  },
  {
    id: 302,
    name: "Áo Victor nam nữ Unisex",
    image: "/picture/ao2.png",
    oldPrice: 320000,
    discount: null,
    describe: "Mẫu basic, thoải mái khi vận động",
  },
  {
    id: 303,
    name: "Áo cầu lông Lining CoolMax",
    image: "/picture/ao3.png",
    oldPrice: 350000,
    discount: "-8%",
    describe: "Thoáng khí, phù hợp chơi thể thao cường độ cao 💦",
  },
  {
    id: 304,
    name: "Áo Yonex Aerodry Pro",
    image: "/picture/ao4.png",
    oldPrice: 420000,
    discount: "-12%",
    describe: "Co giãn 4 chiều, giúp di chuyển linh hoạt 🌀",
  },
  {
    id: 305,
    name: "Áo Victor Team Spirit 2024",
    image: "/picture/ao5.png",
    oldPrice: 390000,
    discount: null,
    describe: "Màu sắc nổi bật, phong cách thi đấu chuyên nghiệp 🔥",
  },
  {
    id: 306,
    name: "Áo Apacs Basic Fit",
    image: "/picture/ao6.png",
    oldPrice: 290000,
    discount: "-5%",
    describe: "Giá mềm, chất lượng ổn định cho người mới 🐣",
  },
  {
    id: 307,
    name: "Áo Yonex Training Tee",
    image: "/picture/ao7.png",
    oldPrice: 370000,
    discount: null,
    describe: "Phong cách trẻ trung, hợp xu hướng 🎽",
  },
  {
    id: 308,
    name: "Áo cầu lông ProKennex PowerFit",
    image: "/picture/ao8.png",
    oldPrice: 410000,
    discount: "-7%",
    describe: "Được thiết kế tối ưu cho vận động mạnh 💪",
  },
];

// 👖 Quần / Váy cầu lông
export const shorts: Product[] = [
  {
    id: 401,
    name: "Quần cầu lông Yonex Pro",
    image: "/picture/quan1.png",
    oldPrice: 290000,
    discount: null,
    describe: "Form slim, nhẹ, thoáng khí",
  },
  {
    id: 402,
    name: "Váy cầu lông nữ Victor",
    image: "/picture/vay1.png",
    oldPrice: 420000,
    discount: "-12%",
    describe: "Thiết kế nữ tính, năng động và mát mẻ",
  },
  {
    id: 403,
    name: "Quần cầu lông Lining FlexShort",
    image: "/picture/quan2.png",
    oldPrice: 310000,
    discount: "-10%",
    describe: "Chất vải co giãn, thoáng khí, chơi cả ngày vẫn mát 🍃",
  },
  {
    id: 404,
    name: "Quần cầu lông Victor Training",
    image: "/picture/quan3.png",
    oldPrice: 350000,
    discount: "-5%",
    describe: "Dành cho tập luyện chuyên sâu, bền và nhẹ 🏋️",
  },
  {
    id: 405,
    name: "Váy cầu lông Yonex SweetSport",
    image: "/picture/vay2.png",
    oldPrice: 450000,
    discount: "-8%",
    describe: "Phong cách thể thao năng động, siêu xinh 🌸",
  },
  {
    id: 406,
    name: "Quần cầu lông Apacs Basic Fit",
    image: "/picture/quan4.png",
    oldPrice: 270000,
    discount: null,
    describe: "Giá dễ chịu, thích hợp cho người mới tập luyện 👟",
  },
  {
    id: 407,
    name: "Váy Lining Lady Pro 2024",
    image: "/picture/vay3.png",
    oldPrice: 480000,
    discount: "-15%",
    describe: "Tôn dáng, chất vải cao cấp, siêu êm ái 👗",
  },
  {
    id: 408,
    name: "Quần cầu lông Yonex CoolDry",
    image: "/picture/quan5.png",
    oldPrice: 330000,
    discount: "-6%",
    describe: "Công nghệ làm mát, chơi lâu không bí bách ❄️",
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

// 📞 thông tin liên lạc
export const CONTACT_INFO = {
  email: "support@badmintonstore.vn",
  hotline: "0909 123 456",
  facebook: "fb.com/BadmintonStoreVN",
};

// tài khoản

export interface FakeUser {
  email: string;
  password: string;
  name: string;
}

export const fakeUsers: FakeUser[] = [
  {
    email: "admin@123",
    password: "123456",
    name: "Admin",
  },
  {
    email: "user@demo.com",
    password: "654321",
    name: "Demo User",
  },
  {
    email: "test@abc.com",
    password: "111111",
    name: "Test Account",
  },
];
