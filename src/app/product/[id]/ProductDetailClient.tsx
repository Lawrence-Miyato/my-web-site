"use client";
import { useState } from "react";
import Image from "next/image";
import { allProducts, promotions, CartItem } from "@/lib/data/product";

export default function ProductDetailClient({ id }: { id: string }) {
  const product = allProducts.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: CartItem) => item.id === product?.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setShowPopup(true);
  };

  if (!product) return <div className="p-10">Không tìm thấy sản phẩm</div>;

  return (
    <div className="p-10 max-w-5xl mx-auto text-black">
      <div className="flex flex-col md:flex-row gap-10">
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

        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-x-3">
            {product.discount ? (
              <>
                <p className="text-gray-600 line-through">
                  {product.oldPrice?.toLocaleString("vi-VN")} ₫
                </p>
                <p className="text-red-600 text-2xl font-bold">
                  {Math.round(
                    product.oldPrice! *
                      (1 -
                        parseFloat(
                          product.discount.replace("%", "").replace("-", "")
                        ) /
                          100)
                  ).toLocaleString("vi-VN")}{" "}
                  ₫
                </p>
              </>
            ) : (
              <p className="text-red-600 text-2xl font-bold">
                {product.oldPrice?.toLocaleString("vi-VN")} ₫
              </p>
            )}
          </div>

          <p>{product.describe}</p>

          <section className="my-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              🎉 Chương trình khuyến mãi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-4 text-black">
                    <h3 className="font-semibold text-lg mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-sm mb-2">{promo.description}</p>
                    <p className="text-xs text-red-500 font-medium">
                      ⏰ Hạn đến: {promo.validUntil}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-4 mt-6">
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

            <button
              onClick={handleAddToCart}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              ✅ Đã thêm {quantity} x {product.name} vào giỏ hàng!
            </h2>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
