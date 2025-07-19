"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { fakeUsers } from "@/lib/data/product";

export default function UserButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Trạng thái đăng nhập
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [, setMessage] = useState("");
  const [, setShowToast] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setError("");
    setEmail("");
    setPassword("");
  };

  const showNotification = (msg: string) => {
    setMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // auto tắt sau 3s
  };

  const handleLogin = () => {
    const foundUser = fakeUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setIsLoggedIn(true);
      setIsPopupOpen(false);
      showNotification(`🎉 Chào mừng, ${foundUser.name}!`);
    } else {
      setError("❌ Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  const handleLogout = () => {
    setShowConfirmLogout(true);
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setShowConfirmLogout(false);
    showNotification("👋 Đã đăng xuất thành công!");
  };

  const cancelLogout = () => {
    setShowConfirmLogout(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>
          <Image src="/logout.svg" alt="Logout" width={32} height={32} />
        </button>
      ) : (
        <button onClick={togglePopup}>
          <Image src="/user-4.svg" alt="Login" width={32} height={32} />
        </button>
      )}

      {isPopupOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={togglePopup}
          />

          <div className="relative z-[1000] bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            <label className="block text-sm font-semibold mb-1 text-black text-start">
              Email *
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-3 border rounded outline-none placeholder-gray-400 text-black"
            />

            <label className="block text-sm font-semibold mb-1 text-black text-start">
              Mật khẩu *
            </label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-12 outline-none text-black placeholder-gray-400"
              />

              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer px-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5 text-black" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-black" />
                )}
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              ĐĂNG NHẬP
            </button>

            <p className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline">
              Quên mật khẩu?
            </p>
          </div>
        </div>
      )}
      {showConfirmLogout && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4 text-black">
              ⚠️ Bạn có chắc muốn đăng xuất?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Có
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
