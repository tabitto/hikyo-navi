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
  page?: string;
}>;
};
export default async function ResultsPage({ searchParams }: Props) {
  const {
  prefecture,
  walkingMax,
  difficulty,
  keyword,
  sort,
  page,
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
  const itemsPerPage = 2;

const currentPage = Number(page ?? "1");

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const paginatedSpots = filteredSpots.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredSpots.length / itemsPerPage);
const pageNumbers = Array.from(
  { length: totalPages },
  (_, index) => index + 1
);
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

          <Link
  href={`/search?prefecture=${encodeURIComponent(
    prefecture ?? ""
  )}&walkingMax=${encodeURIComponent(
    walkingMax ?? ""
  )}&difficulty=${encodeURIComponent(
    difficulty ?? ""
  )}&keyword=${encodeURIComponent(
    keyword ?? ""
  )}&sort=${encodeURIComponent(sort ?? "")}`}
  className="text-green-700 underline hover:text-green-900"
>
  検索条件を変更する
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
  href={`/search?prefecture=${encodeURIComponent(prefecture ?? "")}&walkingMax=${encodeURIComponent(
    walkingMax ?? ""
  )}&difficulty=${encodeURIComponent(
    difficulty ?? ""
  )}&keyword=${encodeURIComponent(keyword ?? "")}&sort=${encodeURIComponent(
    sort ?? ""
  )}`}
>
  検索条件をリセットする
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
    <Link
  href="/search"
  className="mt-4 inline-block rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
>
  検索条件を変更する
</Link>
  </div>
) : (
  paginatedSpots.map((spot) => (
    <SpotCard key={spot.id} spot={spot} />
  ))
)}
<div className="mt-8 flex justify-center gap-4">
  {currentPage > 1 && (
    <Link
      href={`/results?prefecture=${encodeURIComponent(
        prefecture ?? ""
      )}&walkingMax=${encodeURIComponent(
        walkingMax ?? ""
      )}&difficulty=${encodeURIComponent(
        difficulty ?? ""
      )}&keyword=${encodeURIComponent(
        keyword ?? ""
      )}&sort=${encodeURIComponent(
        sort ?? ""
      )}&page=${currentPage - 1}`}
      className="rounded-lg border bg-white px-4 py-2 text-green-700"
    >
      前へ
    </Link>
  )}
  <div className="flex gap-2">
  {pageNumbers.map((pageNumber) => (
    <Link
      key={pageNumber}
      href={`/results?prefecture=${encodeURIComponent(
        prefecture ?? ""
      )}&walkingMax=${encodeURIComponent(
        walkingMax ?? ""
      )}&difficulty=${encodeURIComponent(
        difficulty ?? ""
      )}&keyword=${encodeURIComponent(
        keyword ?? ""
      )}&sort=${encodeURIComponent(
        sort ?? ""
      )}&page=${pageNumber}`}
      className={`rounded-lg px-4 py-2 ${
        currentPage === pageNumber
          ? "bg-green-700 text-white"
          : "border bg-white text-green-700"
      }`}
    >
      {pageNumber}
    </Link>
  ))}
</div>

  {currentPage < totalPages && (
    <Link
      href={`/results?prefecture=${encodeURIComponent(
        prefecture ?? ""
      )}&walkingMax=${encodeURIComponent(
        walkingMax ?? ""
      )}&difficulty=${encodeURIComponent(
        difficulty ?? ""
      )}&keyword=${encodeURIComponent(
        keyword ?? ""
      )}&sort=${encodeURIComponent(
        sort ?? ""
      )}&page=${currentPage + 1}`}
      className="rounded-lg bg-green-700 px-4 py-2 text-white"
    >
      次へ
    </Link>
  )}
</div>
     </div>
  )}
</div>
</main>
);
}