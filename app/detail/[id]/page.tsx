import Link from "next/link";
import Image from "next/image";
import { spots } from "@/data/spots";
import FavoriteButton from "@/app/components/FavoriteButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPage({ params }: Props) {
  const { id } = await params;

  const spot = spots.find((spot) => spot.id === Number(id));

  if (!spot) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">
          秘境が見つかりませんでした。
        </h1>

        <Link href="/results" className="text-blue-600 underline">
          検索結果へ戻る
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <Link href="/results" className="text-green-700 underline">
        ← 検索結果へ戻る
      </Link>

      <div className="mt-6 rounded-xl bg-white p-8 shadow">
        <p className="font-bold text-green-700">
          {spot.prefecture}
        </p>

        <Image
  src={spot.image}
  alt={spot.name}
  width={800}
  height={500}
  className="mb-6 w-full rounded-xl object-cover"
/>
        <h1 className="mt-2 text-4xl font-bold">
          {spot.name}
        </h1>

        <div className="mt-6 space-y-2">
          <p>🚆 {spot.train}</p>
          <p>🚶 徒歩 {spot.walking}</p>
          <p>⭐ {spot.difficulty}</p>
        </div>

        <FavoriteButton spotId={spot.id} />
        <hr className="my-8" />

<h2 className="text-2xl font-bold">
  アクセス
</h2>

<p className="mt-3 leading-8">
  {spot.access}
</p>

<h2 className="mt-8 text-2xl font-bold">
  実際に行って分かったこと
</h2>

<p className="mt-3 leading-8">
  {spot.memo}
</p>
<hr className="my-8" />

<h2 className="mb-6 text-2xl font-bold">
  実際に使ったルート
</h2>

<div className="space-y-0">
  {spot.route.map((route, index) => (
    <div
      key={`${route.place}-${index}`}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          {route.icon}
        </div>

        {index < spot.route.length - 1 && (
          <div className="h-16 w-1 bg-green-200" />
        )}
      </div>

      <div className="pb-8">
        <h3 className="text-lg font-bold">
          {route.place}
        </h3>

        <p className="mt-1 text-gray-700">
          {route.detail}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </main>
  );
}