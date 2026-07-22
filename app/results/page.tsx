import Image from "next/image";
import Link from "next/link";
import { spots } from "@/data/spots";
import FavoriteButton from "../components/FavoriteButton";
import SpotCard from "../components/SpotCard";

type Props = {
  searchParams: Promise<{
    prefecture?: string;
    walkingMax?: string;
    difficulty?: string;
    keyword?: string;
    sort?: string;
  }>;
};
export default async function ResultsPage({ searchParams }: Props) {
  const {
  prefecture,
  walkingMax,
  difficulty,
  keyword,
  sort,
} = await searchParams;

  console.log(spots.map((spot) => ({
  name: spot?.name,
  sortName: spot?.sortName,
})));
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


  const getWalkingDistance = (walking: string) => {
  const match = walking.match(/[\d.]+/);
  return match ? Number(match[0]) : 9999;
};

if (sort === "walking") {
  filteredSpots.sort(
    (a, b) => a.walkingDistance - b.walkingDistance
  );
} else if (sort === "difficultyAsc") {
  filteredSpots.sort(
    (a, b) => a.difficultyLevel - b.difficultyLevel
  );
} else if (sort === "difficultyDesc") {
  filteredSpots.sort(
    (a, b) => b.difficultyLevel - a.difficultyLevel
  );
} else if (sort === "name") {
  filteredSpots.sort((a, b) =>
    (a.sortName ?? a.name).localeCompare(
      b.sortName ?? b.name,
      "ja"
    )
  );
}
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
       {filteredSpots.length === 0 ? (
  <div className="rounded-xl bg-gray-100 p-8 text-center">
    <p className="text-xl font-semibold">
      🔍 該当する秘境が見つかりませんでした
    </p>
    <p className="mt-2 text-gray-600">
      検索条件を変更してもう一度お試しください。
    </p>
  </div>
) : (
  filteredSpots.map((spot) => (
    <SpotCard key={spot.id} spot={spot} />
  ))
)}
          </div>
        )}
      </div>
    </main>
  );
}