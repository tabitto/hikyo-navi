import Image from "next/image";
import { spots } from "@/data/spots";
import Link from "next/link";
import SpotCard from "./components/SpotCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-12">
        <div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
          <div className="relative mb-6 h-64 overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="/images/hero.JPG"
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
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/search"
              className="w-full max-w-3xl rounded-lg bg-green-700 px-8 py-4 text-center font-bold text-white transition hover:bg-green-800"
            >
              秘境を探す
            </Link>

            <Link
              href="/favorites"
              className="w-full max-w-3xl rounded-lg bg-red-600 px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              ❤️ 行ってみたい一覧
            </Link>
          </div>
        </div>

        <h2 className="mt-12 text-center text-3xl font-bold text-green-800">
          ⭐ おすすめの秘境
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {spots.slice(0, 3).map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </main>
  );
}