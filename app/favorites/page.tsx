"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { spots } from "@/data/spots";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteSpots");

    const ids: number[] = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    setFavoriteIds(ids);
  }, []);

  const favoriteSpots = spots
  .filter((spot) => favoriteIds.includes(spot.id))
  .sort((a, b) => parseFloat(a.walking) - parseFloat(b.walking));
  function removeFavorite(id: number) {
  const updatedFavorites = favoriteIds.filter(
    (favoriteId) => favoriteId !== id
  );

  setFavoriteIds(updatedFavorites);

  localStorage.setItem(
    "favoriteSpots",
    JSON.stringify(updatedFavorites)
  );
}

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-green-700 underline"
        >
          ← ホームへ戻る
        </Link>

        <h1 className="mb-8 mt-6 text-4xl font-bold text-green-800">
          ❤️ 行ってみたい一覧
        </h1>

        {favoriteSpots.length === 0 ? (
          <div className="rounded-xl bg-white p-8 shadow">
            <p className="text-lg font-bold">
              まだ秘境が登録されていません。
            </p>

            <Link
              href="/search"
              className="mt-4 inline-block text-green-700 underline"
            >
              秘境を探しに行く
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {favoriteSpots.map((spot) => (
              <div
                key={spot.id}
                className="rounded-xl bg-white p-6 shadow"
              >
                <Image
                  src={spot.image}
                  alt={spot.name}
                  width={800}
                  height={500}
                  className="mb-4 w-full rounded-lg"
                />

                <h2 className="text-2xl font-bold">
                  {spot.name}
                </h2>

                <p className="mt-2">{spot.prefecture}</p>
                <p>🚶 徒歩 {spot.walking}</p>
                <p>🚆 {spot.train}</p>
                <p>⭐ {spot.difficulty}</p>

                <button
  onClick={() => removeFavorite(spot.id)}
  className="mt-4 mr-3 rounded-lg bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700"
>
  登録を解除
</button>
                <Link
                  href={`/detail/${spot.id}`}
                  className="mt-4 inline-block rounded-lg bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}