// next.config.ts / next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** ★ 静的エクスポートを有効化 */
  output: "export",

  /** ★ 画像最適化 API を使わない（GH Pages は Node サーバを持たないため） */
  images: {
    unoptimized: true,

    /* ↓ remotePatterns は残しておいても問題なし。
       unoptimized:true が立っていると build 時には無視されるだけです。 */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;