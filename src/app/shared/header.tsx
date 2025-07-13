// src/components/layout/Header.tsx
"use client";

import Image from "next/image";
import Login_Buton from "@/app/components/login"; // Điều chỉnh nếu path khác

export default function Header() {
  const contactList = [
    { label: "Mua bán lẻ", phone: "079 778 8882" },
    { label: "Mua bán sỉ", phone: "0906 923 883" },
    { label: "Chăm sóc KH", phone: "077 685 6666" },
  ];
  return (
    <div>
      <header className="bg-blue-600 text-white flex justify-around items-center py-2">
        <div>
          <Image
            src="/picture/logo.png"
            alt="Logo Shop Cầu Lông"
            width={80}
            height={80}
          />
        </div>

        <div className="flex items-center gap-2">
          <select className="p-1 rounded border border-double border-black bg-white text-black">
            <option className="text-black">Tất cả</option>
            <option className="text-black">Vợt Cầu Lông</option>
          </select>

          <div className="bg-lime-300 p-1 rounded-full w-full max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full shadow px-2 py-1">
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
          {contactList.map((item, index) => (
            <div key={index}>
              {item.label}: {item.phone}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Login_Buton />
          <a href="#">
            <Image src="/cart-1.svg" alt="Cart" width={28} height={28} />
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
        <a href="/instruct" className="font-bold">
          HƯỚNG DẪN
        </a>
        <a href="#" className="font-bold">
          HỆ THỐNG CỬA HÀNG
        </a>
      </nav>
    </div>
  );
}
