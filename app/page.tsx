import Image from "next/image";
import { spots } from "@/data/spots";
import Link from "next/link";
import FavoriteButton from "@/app/components/FavoriteButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-800">
  車なし秘境ナビ
</h1>

<p className="mt-4 text-lg text-gray-600">
  車がなくても行ける秘境を探そう。
</p>


        <div className="flex flex-col gap-4">
          <Link
            href="/search"
            className="rounded-lg bg-green-700 px-8 py-4 text-white font-bold hover:bg-green-800"
          >
            秘境を探す
          </Link>

          <Link
            href="/favorites"
            className="rounded-lg bg-red-600 px-8 py-4 text-white font-bold hover:bg-red-700"
          >
            ❤️ 行ってみたい一覧
          </Link>
          
  <h2 className="mt-12 text-3xl font-bold text-green-800">
  🚶 徒歩距離から探す
</h2>

<div className="mt-6 flex flex-wrap gap-3">
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
    <Link
      key={spot.id}
      href={`/detail/${spot.id}`}
      className="block rounded-xl border bg-white p-4 shadow hover:shadow-lg"
    >
      <div className="relative mb-4">
  <Image
    src={spot.image}
    alt={spot.name}
    width={600}
    height={300}
    className="h-48 w-full rounded-lg object-cover"
  />

  {spot.id === 1 && (
    <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">
      👑 人気No.1
    </span>
  )}
</div>
      <div className="flex items-center justify-between">
  <h3 className="text-xl font-bold">
    {spot.name}
  </h3>

  <FavoriteButton spotId={spot.id} />
</div>

      <p className="mt-1 text-gray-600">
        📍 {spot.prefecture}
      </p>

      <p className="mt-1 text-gray-600">
        🚶 {spot.walking}
      </p>
      <p className="mt-1 text-gray-600">
  ⭐ 難易度 {spot.difficulty}
</p>
      <p className="mt-4 font-bold text-green-700">
  詳細を見る →
</p>
    </Link>
  ))}
</div>
        </div>
      </div>
    </main>
  );
}