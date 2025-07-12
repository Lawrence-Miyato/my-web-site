"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../globals.css";
import MyCarousel from "@/app/components/MyCarousel";
import Login_Buton from "@/app/components/login"
export default function HomePage() {
  const [,setCurrentIndex] = useState(0);
  const totalItems = 3; // số lượng ảnh carousel

  const moveSlide = (step: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + step + totalItems) % totalItems
    );
  };

  interface Product {
    id: number;
    name: string;
    image: string;
    oldPrice: number | null;
    discount: string | null; // kiểu "-5%"
  }

  const fakeProducts: Product[] = [
    {
      id: 1,
      name: "Vợt Yonex Astrox Lite",
      image: "/picture/vot2.png",
      oldPrice: 750000,
      discount: "-5%",
    },
    {
      id: 2,
      name: "Vợt Victor Ryuga 2 Pro",
      image: "/picture/vot3.png",
      oldPrice: 3690000,
      discount: null,
    },
    {
      id: 3,
      name: "Vợt Victor AuraSpeed",
      image: "/picture/vot4.png",
      oldPrice: 4500000,
      discount: null,
    },
    {
      id: 4,
      name: "Vợt Mizuno JPX 10.3",
      image: "/picture/vot5.png",
      oldPrice: 3700000,
      discount: null,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#f4f9fc] font-sans text-center">
      <header className="bg-blue-600 text-white flex justify-around items-center p-3">
        <div>
          <Image
            src="/logo.png"
            alt="Logo Shop Cầu Lông"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center gap-2">
          <select className="p-1 rounded border border-double border-black bg-white text-black">
            <option className="text-black">Tất cả</option>
            <option className="text-black">Vợt Cầu Lông</option>
          </select>

          <div className="bg-lime-300 p-2 rounded-full w-full max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
              <input
                type="text"
                placeholder="Tìm sản phẩm ..."
                className="flex-grow bg-transparent outline-none text-gray-700"
              />
              <button>
                <svg
                  className="w-5 h-5 text-black hover:text-blue-500 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="text-xs leading-5">
          <div>Mua bán lẻ: 079 778 8882</div>
          <div>Mua bán sỉ: 0906 923 883</div>
          <div>Chăm sóc KH: 077 685 6666</div>
        </div>
        <div className="flex gap-3">
          <Login_Buton/>
          <a href="#">
            <Image src="cart-1.svg" alt="Cart" width={32} height={32} />
          </a>
        </div>
      </header>

      <nav className="bg-blue-800 text-white flex justify-center gap-4 py-3">
        <div className="relative group">
          <div className="relative group z-50">
            <a href="#" className="font-bold">
              ☰ Danh mục sản phẩm
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg min-w-[200px] z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Vợt cầu lông
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Giày cầu lông
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Áo cầu lông
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Quần cầu lông
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="font-bold">
          KHUYẾN MÃI
        </a>
        <a href="#" className="font-bold">
          ƯU ĐÃI
        </a>
        <a href="#" className="font-bold">
          THƯƠNG HIỆU
        </a>
        <a href="#" className="font-bold">
          TIN TỨC
        </a>
        <a href="#" className="font-bold">
          HƯỚNG DẪN
        </a>
        <a href="#" className="font-bold">
          HỆ THỐNG CỬA HÀNG
        </a>
      </nav>

      <div className="max-w-6xl mx-auto p-5">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            VỢT CẦU LÔNG{" "}
            <a href="#" className="text-sm font-normal ml-2">
              + Xem thêm
            </a>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {fakeProducts.map((item) => {
              const discountPercent = item.discount
                ? parseFloat(item.discount.replace("%", "").replace("-", "")) /
                  100
                : 0;

              const price = item.oldPrice
                ? Math.round(item.oldPrice * (1 - discountPercent))
                : null;

              return (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow text-center relative text-black"
                >
                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  )}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <h3 className="mt-2 font-semibold text-black">{item.name}</h3>
                  {item.oldPrice && item.discount && (
                    <p className="line-through text-gray-500">
                      {item.oldPrice.toLocaleString("vi-VN")} ₫
                    </p>
                  )}
                  <p className="text-red-600 font-bold">
                    {price ? price.toLocaleString("vi-VN") + " ₫" : "Liên hệ"}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center w-full text-2xl text-black">
        <MyCarousel />
      </div>
    </main>
  );
}
