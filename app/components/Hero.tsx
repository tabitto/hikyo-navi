"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero.JPG",
  "/images/shimoguri.jpg",
  "/images/shiiba.jpg",
  "/images/aoni.jpg",
];

export default function Hero() {
  const [heroImage, setHeroImage] = useState("/images/hero.JPG");

  useEffect(() => {
    const randomImage =
      heroImages[Math.floor(Math.random() * heroImages.length)];

    setHeroImage(randomImage);
  }, []);

  return (
    <div className="relative mb-8 h-64 overflow-hidden rounded-2xl sm:h-80">
      <Image
        src={heroImage}
        alt="車なしで行ける秘境の風景"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
            車なし秘境ナビ
          </h1>

          <p className="mt-4 text-base font-medium text-white drop-shadow sm:text-lg">
            車がなくても行ける秘境を探そう。
          </p>

          <Link
            href="/search"
            className="mx-auto mt-8 block w-full max-w-sm rounded-xl bg-white/90 px-8 py-4 font-bold text-green-800 shadow-xl backdrop-blur-sm transition hover:bg-white"
          >
            秘境を探す
          </Link>
        </div>
      </div>
    </div>
  );
}