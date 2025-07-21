"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface Product {
  id: number;
  name: string;
  image: string;
  discount?: string | null;
  oldPrice?: number | null;
}

interface Props {
  title: string;
  link: string;
  products: Product[];
  basePath?: string;
}

export default function ProductListSection({
  title,
  link,
  products,
  basePath = "/product",
}: Props) {
  const router = useRouter();

  const sortedProducts = products
    .map((item) => {
      const discountPercent = item.discount
        ? parseFloat(item.discount.replace("%", "").replace("-", "")) / 100
        : 0;

      const price = item.oldPrice
        ? Math.round(item.oldPrice * (1 - discountPercent))
        : item.oldPrice;

      return { ...item, price };
    })
    .sort((a, b) => (a.price || 0) - (b.price || 0));

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        {title}
        <a href={link} className="text-sm font-normal ml-2">
          + Xem thêm
        </a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sortedProducts.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="cursor-pointer bg-white p-4 rounded-lg shadow text-center relative text-black hover:shadow-xl transition"
            onClick={() => router.push(`${basePath}/${item.id}`)}
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
    </section>
  );
}
