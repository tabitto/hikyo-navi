import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "車なし秘境ナビ｜車がなくても行ける秘境を探そう",
  description:
    "車なし・公共交通で行ける秘境を紹介。徒歩距離やアクセス難易度から、自分に合った秘境を探せます。",
  applicationName: "車なし秘境ナビ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "車なし秘境ナビ",
        alternateName: "秘境ナビ",
        url: "https://hikyo-navi-phi.vercel.app/",
      }),
    }}
  />

  {children}
</body>
    </html>
  );
}
