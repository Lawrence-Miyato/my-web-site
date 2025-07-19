"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef, JSX } from "react";
import Image from "next/image";

const images: string[] = [
  "/picture/AerusZ-flash-green-2025.jpg",
  "/picture/cfzh.jpg",
  "/picture/dv.png",
];

export default function MyCarousel(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <Carousel className="w-full max-w-4xl mx-auto relative z-10">
      <div className="overflow-hidden relative">
        <CarouselContent
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-full shrink-0 grow-0">
              <div className="p-1">
                <Card>
                  <CardContent className="p-0 overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[400px] object-contain"
                      width={800}
                      height={800}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-50 shadow"
        >
          ◀
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-50 shadow"
        >
          ▶
        </button>
      </div>
    </Carousel>
  );
}
