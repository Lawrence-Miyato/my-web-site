"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false); // 🔥 Dùng để tránh ghi đè cart rỗng

  // ✅ Chỉ load cart từ localStorage một lần khi mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    setMounted(true); // Cho phép ghi sau khi đã set cart đúng
  }, []);

  // ✅ Chỉ ghi localStorage sau khi đã mounted
  useEffect(() => {
    if (!mounted) return; // 🔥 Nếu chưa mounted, không làm gì cả

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart, mounted]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">🛒 Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 items-center border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-red-600 font-bold mt-1">
                      {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right text-xl font-bold">
            Tổng cộng:{" "}
            <span className="text-red-600">
              {total.toLocaleString("vi-VN")} ₫
            </span>
          </div>
        </>
      )}
    </div>
  );
}
