"use client";
import { useState, useEffect } from "react";
import "../globals.css";
import MyCarousel from "@/app/components/MyCarousel";
import { rackets, shirts, shoes, shorts } from "@/lib/data/product";
import ProductListSection from "@/app/home/components/ProductListSection";
export default function HomePage() {
  const [, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const totalItems = 3;
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
        <div className="flex mt-4 mb-6 text-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 rounded border border-gray-300 shadow-sm bg-white text-black"
          >
            <option value="Tất cả">Tất cả</option>
            <option value="Vợt">Vợt cầu lông</option>
            <option value="Áo">Áo cầu lông</option>
            <option value="Giày">Giày cầu lông</option>
            <option value="Quần/Váy">Quần / Váy cầu lông</option>
          </select>
        </div>

        {(selectedCategory === "Tất cả" || selectedCategory === "Vợt") && (
          <ProductListSection
            title="VỢT CẦU LÔNG"
            link="/product/badminton-racket"
            products={rackets}
          />
        )}

        {(selectedCategory === "Tất cả" || selectedCategory === "Áo") && (
          <ProductListSection
            title="ÁO CẦU LÔNG"
            link="/product/badminton-shirt"
            products={shirts}
          />
        )}

        {(selectedCategory === "Tất cả" || selectedCategory === "Giày") && (
          <ProductListSection
            title="GIÀY CẦU LÔNG"
            link="/product/badminton-shoes"
            products={shoes}
          />
        )}

        {(selectedCategory === "Tất cả" || selectedCategory === "Quần/Váy") && (
          <ProductListSection
            title="QUẦN VÁY CẦU LÔNG"
            link="/product/badminton-short"
            products={shorts}
          />
        )}
      </div>
      <div className="flex justify-center items-center w-full text-2xl text-black">
        <MyCarousel />
      </div>
    </main>
  );
}
