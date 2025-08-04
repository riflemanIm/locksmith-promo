import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Отключаем SSR: экспортируем только статику
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true, // отключаем API оптимизации изображений
  },
};

export default nextConfig;
