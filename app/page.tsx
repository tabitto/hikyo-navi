import Image from "next/image";
import { spots } from "@/data/spots";
import Link from "next/link";
import FavoriteButton from "@/app/components/FavoriteButton";
import SpotCard from "./components/SpotCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
  <div className="mx-auto max-w-6xl px-4 pt-12 pb-8">
      <div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
<div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm"></div>
<div className="relative mb-8 h-64 overflow-hidden rounded-2xl sm:h-80">
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

      <Link
        href="/search"
        className="mx-auto mt-8 block w-full max-w-sm rounded-xl bg-white/90 px-8 py-4 font-bold text-green-800 shadow-xl backdrop-blur-sm transition hover:bg-white"
      >
        秘境を探す
      </Link>
    </div>
  </div>
</div>
        <div className="mt-8 flex flex-col items-center gap-4">
          

          <Link
            href="/favorites"
            className="w-full max-w-3xl rounded-lg bg-red-600 px-8 py-4 text-center text-white ..."
          >
            ❤️ 行ってみたい一覧
          </Link>
          </div>
          
  <h2 className="mt-12 text-3xl font-bold text-green-800">
  🚶 徒歩距離から探す
</h2>

<div className="flex flex-wrap justify-center gap-4">
  <Link
    href="/results?walkingMax=1"
    className="rounded-full bg-green-100 px-5 py-2 hover:bg-green-200"
  >
    ～1km
  </Link>

  <Link
    href="/results?walkingMax=3"
    className="rounded-full bg-yellow-100 px-5 py-2 hover:bg-yellow-200"
  >
    1〜3km
  </Link>

  <Link
    href="/results?walkingMax=99"
    className="rounded-full bg-red-100 px-5 py-2 hover:bg-red-200"
  >
    3km以上
  </Link>
</div>

<h2 className="mt-12 text-3xl font-bold text-green-800">
  ⭐ おすすめの秘境
</h2>
<div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {spots.slice(0, 3).map((spot) => (
    <SpotCard key={spot.id} spot={spot} />
  ))}
</div>
        </div>
    
    </div>
    </main>
  );
}