"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  discount?: string | null;
  oldPrice?: number | null;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    if (item.quantity === 1) {
      setDeleteId(id);
      setShowConfirm(true);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      const updatedCart = cart.filter((item) => item.id !== deleteId);
      setCart(updatedCart);
    }
    setShowConfirm(false);
    setDeleteId(null);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  const getDiscountedPrice = (item: CartItem) => {
    const price = item.oldPrice ?? 0;
    const discountPercent = item.discount
      ? parseFloat(item.discount.replace("%", "").replace("-", "")) / 100
      : 0;

    return Math.round(price * (1 - discountPercent));
  };

  const total = cart.reduce((sum, item) => {
    const price = getDiscountedPrice(item);
    return sum + price * item.quantity;
  }, 0);

  const getFinalPrice = (item: CartItem) => {
    const discountPercent = item.discount
      ? parseFloat(item.discount.replace("%", "").replace("-", "")) / 100
      : 0;

    return item.oldPrice
      ? Math.round(item.oldPrice * (1 - discountPercent))
      : 0;
  };

  const sortedCart = [...cart].sort(
    (a, b) => getFinalPrice(a) * a.quantity - getFinalPrice(b) * b.quantity
  );

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart, mounted]);

  return (
    <div className="max-w-4xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">🛒 Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <>
          <div className="space-y-4">
            {sortedCart.map((item) => {
              return (
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
                        {(
                          getDiscountedPrice(item) * item.quantity
                        ).toLocaleString("vi-VN")}{" "}
                        ₫
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
              );
            })}
          </div>

          <div className="mt-6 text-right text-xl font-bold">
            Tổng cộng:{" "}
            <span className="text-red-600">
              {total.toLocaleString("vi-VN")} ₫
            </span>
          </div>
        </>
      )}

      {showConfirm && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Bạn có chắc muốn xóa sản phẩm này?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
