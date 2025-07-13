"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../globals.css";
import MyCarousel from "@/app/components/MyCarousel";
export default function HomePage() {
  const [, setCurrentIndex] = useState(0);
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
