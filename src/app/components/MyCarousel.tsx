"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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

  // Auto chuyển slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); //10 giây, đơn vị này là milliseconds, 1 miliseconds là 1 giây

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
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
        }}
      >
        {images.map((src: string, index: number) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="p-0 overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover aspect-square"
                    width={400}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious onClick={goToPrevious} />
      <CarouselNext onClick={goToNext} />
    </Carousel>
  );
}
