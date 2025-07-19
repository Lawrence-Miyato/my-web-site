"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../globals.css";
import MyCarousel from "@/app/components/MyCarousel";
import { useRouter } from "next/navigation";
import { products } from "@/lib/data/product";
export default function HomePage() {
  const [, setCurrentIndex] = useState(0);
  const totalItems = 3; 
  const router = useRouter();
  const moveSlide = (step: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + step + totalItems) % totalItems
    );
  };

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
            {products.map((item) => {
              const discountPercent = item.discount
                ? parseFloat(item.discount.replace("%", "").replace("-", "")) /
                  100
                : 0;

              const price = item.oldPrice
                ? Math.round(item.oldPrice * (1 - discountPercent))
                : item.price; 

              return (
                <div
                  key={item.id}
                  className="cursor-pointer bg-white p-4 rounded-lg shadow text-center relative text-black hover:shadow-xl transition"
                  onClick={() => router.push(`/product/${item.id}`)}
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
