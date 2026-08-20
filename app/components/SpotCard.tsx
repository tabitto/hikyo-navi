import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

type SpotCardProps = {
  spot: {
    id: number;
    name: string;
    prefecture: string;
    walking: string;
    difficulty: string;
    difficultyLevel: number;
    image: string;
    recommended?: boolean;

    visited?: boolean;

dayTrip?: {
  possible: boolean;
  returnToEntrance: boolean;
  lastDeparture: string;
  note: string;
};
  };
};

export default function SpotCard({ spot }: SpotCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-white p-4 shadow">
      {spot.recommended && (
  <div className="mb-3 inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
    ⭐ おすすめ
  </div>
)}
      {spot.visited ? (
  <Image
    src={spot.image}
    alt={spot.name}
    width={400}
    height={250}
    className="h-48 w-full rounded-lg object-contain bg-gray-100"
  />
) : (
  <div className="flex h-48 w-full flex-col items-center justify-center rounded-lg bg-green-50 px-5 text-center">
    <p className="text-sm font-bold text-green-700">
      {spot.prefecture}
    </p>

    <p className="mt-2 text-xl font-bold text-gray-900">
      {spot.name}
    </p>

    <p className="mt-3 text-sm text-gray-600">
      公共交通＋徒歩で行ける場所
    </p>

    <span className="mt-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm">
      未訪問・交通情報のみ調査済み
    </span>
  </div>
)}
      <h2 className="mt-3 text-xl font-bold">{spot.name}</h2>
      <div className="mt-2 flex flex-wrap gap-2 text-sm">
  <span
  className={
    spot.visited
      ? "rounded-full bg-green-100 px-3 py-1 font-bold text-green-800"
      : "rounded-full bg-gray-100 px-3 py-1 font-bold text-gray-700"
  }
>
  {spot.visited
    ? "実際に訪問済み"
    : "未訪問・交通情報のみ調査済み"}
</span>

  {spot.dayTrip && (
    <span
      className={
        spot.dayTrip.possible
          ? "rounded-full bg-blue-100 px-3 py-1 font-bold text-blue-800"
          : "rounded-full bg-gray-100 px-3 py-1 font-bold text-gray-700"
      }
    >
      {spot.dayTrip.possible ? "日帰り可能" : "日帰り困難"}
    </span>
  )}
</div>
      <p className="mt-2 text-gray-600">📍 {spot.prefecture}</p>
<div className="mt-2">
  <p className="text-sm font-bold text-gray-700">
    車なしアクセス難易度
  </p>

  <p className="mt-1 text-lg">
    {spot.difficulty}
  </p>

  <p className="text-sm font-bold text-green-800">
    {spot.difficultyLevel === 1 && "とても行きやすい"}
    {spot.difficultyLevel === 2 && "行きやすい"}
    {spot.difficultyLevel === 3 && "ふつう"}
    {spot.difficultyLevel === 4 && "やや難しい"}
    {spot.difficultyLevel === 5 && "難しい"}
  </p>
</div>
<div className="mt-auto pt-4">
  <Link
    href={`/detail/${spot.id}`}
    className="inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
  >
    詳細を見る
  </Link>

  <div className="mt-3">
    <FavoriteButton spotId={spot.id} />
  </div>
</div>
    </div>
  );
}