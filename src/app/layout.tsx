import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "拾用 · ReuseFlow — AI 生活资源规划助手",
  description: "识别食材与闲置物品，生成可执行的菜单、旧物改造方案与缺料替代建议。TRAE 比赛 Demo，已停止维护。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
