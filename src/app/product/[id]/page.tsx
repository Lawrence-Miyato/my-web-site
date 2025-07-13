"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const products = [
  {
    id: 1,
    name: "Vợt Yonex Astrox Lite",
    image: "/picture/vot2.png",
    price: 712500,
    oldPrice: 750000,
    discount: "-5%",
    describe: "Thông tin của vợt",
  },
  // ... các sản phẩm khác
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ Di chuyển kiểm tra product ra ngoài
  if (!product) return <div className="p-10">Không tìm thấy sản phẩm</div>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((item: CartItem) => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto text-black">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Trái: Hình ảnh */}
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="mx-auto mb-4"
          />
        </div>

        {/* Phải: Giá + mô tả + số lượng + giỏ */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-x-3">
            <p className="text-gray-600 line-through">
              {product.oldPrice?.toLocaleString("vi-VN")} ₫
            </p>
            <p className="text-red-600 text-2xl font-bold">
              {product.price?.toLocaleString("vi-VN")} ₫
            </p>
          </div>

          <p>{product.describe}</p>

          {/* Số lượng + nút thêm */}
          <div className="flex items-center gap-4 mt-6">
            {/* Bộ đếm số lượng */}
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                onClick={decrease}
                className="w-10 text-center text-lg font-bold hover:bg-gray-100"
              >
                -
              </button>
              <div className="w-10 text-center border-x border-gray-300">
                {quantity}
              </div>
              <button
                onClick={increase}
                className="w-10 text-center text-lg font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Nút thêm vào giỏ */}
            <button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
