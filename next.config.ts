// next.config.ts
// next.config.js
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const repoName = 'shoshohh.github.io'; // ← あなたのリポジトリ名（ユーザー名.github.io）を設定

module.exports = {
  output: 'export',
  trailingSlash: true,
};

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '.',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // ✅ 以下のように publicPath を相対パスにしたい場合、basePath 設定は不要です
  // basePath: "/ShoShohh.github.io" // サブディレクトリにホストするなら必要
}

export default nextConfig