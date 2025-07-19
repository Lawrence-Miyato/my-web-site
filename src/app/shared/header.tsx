"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Login_Buton from "@/app/components/login";
import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Tránh hydration mismatch

    const updateCartCount = () => {
      const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalQuantity = cart.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      );
      setCartCount(totalQuantity);
    };

    updateCartCount(); // lần đầu khi mount
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <div>
      <header className="bg-blue-600 text-white flex justify-around items-center py-2">
        <div>
          <Link href="/home">
            <Image
              src="/picture/logo.png"
              alt="Logo Shop Cầu Lông"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
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

        <div className="flex gap-3">
          <Login_Buton />
          <div className="relative">
            <Link href="/cart">
              <Image src="/cart-1.svg" alt="Cart" width={28} height={28} />
              {mounted && cartCount > 0 && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </Badge>
                </div>
              )}
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-blue-800 text-white flex justify-center gap-6 py-3 items-center">
        <div className="relative group">
          <div className="font-bold px-4 py-2 cursor-pointer flex items-center justify-center h-full">
            ☰ Danh mục sản phẩm
          </div>
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-lg min-w-[200px] z-50">
            <Link
              href="/product/badminton-racket"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Vợt cầu lông
            </Link>
            <Link
              href="/product/badminton-shoes"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Giày cầu lông
            </Link>
            <Link
              href="/product/badminton-shirt"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Áo cầu lông
            </Link>
            <Link
              href="/product/badminton-short"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Quần / Váy cầu lông
            </Link>
          </div>
        </div>

        <Link
          href="#"
          className="font-bold px-4 py-2 flex items-center justify-center h-full"
        >
          KHUYẾN MÃI
        </Link>
        <Link
          href="#"
          className="font-bold px-4 py-2 flex items-center justify-center h-full"
        >
          ƯU ĐÃI
        </Link>
        <Link
          href="/instruct"
          className="font-bold px-4 py-2 flex items-center justify-center h-full"
        >
          HƯỚNG DẪN
        </Link>
        <Link
          href="/system"
          className="font-bold px-4 py-2 flex items-center justify-center h-full"
        >
          HỆ THỐNG CỬA HÀNG
        </Link>
      </nav>
    </div>
  );
}
