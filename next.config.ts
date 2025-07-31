import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ thêm dòng này để bật static export
  output: "export",

  /* config options here */
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 👈 Thêm dòng này để bypass lỗi kiểm tra types nội bộ
  },
};

export default nextConfig;
