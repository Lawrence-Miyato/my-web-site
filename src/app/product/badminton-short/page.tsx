"use client"; 

import { shorts } from "@/lib/data/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

   return (
    <main className="min-h-screen flex flex-col bg-[#f4f9fc] font-sans text-center">
      <div className="max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[...shorts]
            .map((item) => {
              const discountPercent = item.discount
                ? parseFloat(item.discount.replace("%", "").replace("-", "")) /
                  100
                : 0;

              const price = item.oldPrice
                ? Math.round(item.oldPrice * (1 - discountPercent))
                : item.oldPrice;

              return { ...item, price };
            })
            .sort((a, b) => (a.price || 0) - (b.price || 0)) 
            .map((item) => (
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
                  {item.price
                    ? item.price.toLocaleString("vi-VN") + " ₫"
                    : "Liên hệ"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
