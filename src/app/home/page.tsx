"use client";
import { useState, useEffect } from "react";
import "../globals.css";
import MyCarousel from "@/app/components/MyCarousel";
import { rackets, shirts, shoes, shorts } from "@/lib/data/product";
import ProductListSection from "@/app/home/components/ProductListSection";
export default function HomePage() {
  const [, setCurrentIndex] = useState(0);
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
        <ProductListSection
          title="VỢT CẦU LÔNG"
          link="/product/badminton-racket"
          products={rackets}
        />
        <ProductListSection
          title="ÁO CẦU LÔNG"
          link="/product/badminton-shirt"
          products={shirts}
        />
        <ProductListSection
          title="GIÀU CẦU LÔNG"
          link="/product/badminton-shoes"
          products={shoes}
        />
        <ProductListSection
          title="QUẦN VÁY CẦU LÔNG"
          link="/product/badminton-short"
          products={shorts}
        />
      </div>
      <div className="flex justify-center items-center w-full text-2xl text-black">
        <MyCarousel />
      </div>
    </main>
  );
}
