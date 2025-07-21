"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Login_Buton from "@/app/components/login";
import { useEffect, useRef, useState } from "react";
import { allProducts } from "@/lib/data/product";
import { useRouter } from "next/navigation";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(allProducts);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    const filteredList = allProducts.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );

    setFiltered(filteredList);
  };

  const handleClickProduct = (id: number) => {
    setSearchTerm(""); // clear search input
    router.push(`/product/${id}`);
  };

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
          <div className="relative w-full max-w-md mx-auto">
            <div className="bg-lime-300 p-1 rounded-full w-full">
              <div className="flex items-center bg-white rounded-full shadow px-2 py-1">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Tìm sản phẩm ..."
                  value={searchTerm}
                  onChange={handleSearch}
                  onFocus={() => setShowDropdown(true)}
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

            {searchTerm && showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute z-50 top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-lg max-h-64 overflow-y-auto"
              >
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleClickProduct(product.id)}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 border-b"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-800">
                        {product.name}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm p-2">
                    Không tìm thấy sản phẩm nào 😢
                  </div>
                )}
              </div>
            )}
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
