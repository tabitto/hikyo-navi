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
      <Image
        src={spot.image}
        alt={spot.name}
        width={400}
        height={250}
        className="h-48 w-full rounded-lg object-contain bg-gray-100"
      />

      <h2 className="mt-3 text-xl font-bold">{spot.name}</h2>
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