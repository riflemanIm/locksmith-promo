import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Отключаем SSR: экспортируем только статику
  output: "export",
  trailingSlash: false,
};

export default nextConfig;
