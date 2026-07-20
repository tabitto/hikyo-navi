"use client";

import Image from "next/image";
import Link from "next/link";
import { spots } from "@/data/spots";
import FavoriteButton from "../components/FavoriteButton";
import { useSearchParams } from "next/navigation";

type Props = {
  searchParams: Promise<{
    prefecture?: string;
    walkingMax?: string;
    difficulty?: string;
    keyword?: string;
  }>;
};
export default async function ResultsPage({ searchParams }: Props) {
  const { prefecture, walkingMax, difficulty, keyword } =
  await searchParams;

  const filteredSpots = spots.filter((spot) => {
    const matchesPrefecture =
      !prefecture || spot.prefecture === prefecture;

    const walkingDistance = Number.parseFloat(spot.walking);

const matchesWalking =
  !walkingMax || walkingDistance <= Number(walkingMax);

const matchesDifficulty =
  !difficulty || spot.difficulty === difficulty;

const matchesKeyword =
  !keyword ||
  spot.name.includes(keyword) ||
  spot.prefecture.includes(keyword);

return (
  matchesPrefecture &&
  matchesWalking &&
  matchesDifficulty &&
  matchesKeyword
);
  });

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex gap-4">
          <Link href="/" className="text-green-700 underline">
            ← ホームへ戻る
          </Link>

          <Link href="/search" className="text-green-700 underline">
            検索条件を変更
          </Link>
        </div>

        <h1 className="mb-8 text-4xl font-bold text-green-800">
          検索結果
        </h1>
        <p className="mb-6 text-gray-700">
  {filteredSpots.length}件見つかりました
</p>

        {filteredSpots.length === 0 ? (
          <div className="rounded-xl bg-white p-8 shadow">
            <p className="text-lg font-bold">
              条件に合う秘境が見つかりませんでした。
            </p>

            <Link
              href="/search"
              className="mt-4 inline-block text-green-700 underline"
            >
              検索条件を変更する
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSpots.map((spot) => (
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

                <FavoriteButton spotId={spot.id} />
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