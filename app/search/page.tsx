"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const [prefecture, setPrefecture] = useState("");
  const [walkingMax, setWalkingMax] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (prefecture) {
      params.set("prefecture", prefecture);
    }

    if (walkingMax) {
      params.set("walkingMax", walkingMax);
    }
    if (difficulty) {
  params.set("difficulty", difficulty);
}
     if (keyword) {
  params.set("keyword", keyword);
}
    router.push(`/results?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-6 inline-block text-green-700 underline"
        >
          ← ホームへ戻る
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-green-800">
          秘境を探す
        </h1>

        <div className="space-y-6 rounded-xl bg-white p-6 shadow">
          <div>
  <label className="mb-2 block font-bold">
    キーワード
  </label>

  <input
    type="text"
    value={keyword}
    onChange={(event) => setKeyword(event.target.value)}
    placeholder="例：下栗、椎葉、長野"
    className="w-full rounded-lg border p-3"
  />
</div>
          <div>
            <label className="mb-2 block font-bold">
              都道府県
            </label>

            <select
              value={prefecture}
              onChange={(event) => setPrefecture(event.target.value)}
              className="w-full rounded-lg border p-3"
            >
              <option value="">すべて</option>
              <option value="長野県">長野県</option>
              <option value="宮崎県">宮崎県</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-bold">
              徒歩距離
            </label>

            <select
              value={walkingMax}
              onChange={(event) => setWalkingMax(event.target.value)}
              className="w-full rounded-lg border p-3"
            >
              <option value="">指定なし</option>
              <option value="1">1km以内</option>
              <option value="2">2km以内</option>
              <option value="3">3km以内</option>
              <option value="5">5km以内</option>
            </select>
          </div>
          <div>
  <label className="mb-2 block font-bold">
    難易度
  </label>

  <select
    value={difficulty}
    onChange={(event) => setDifficulty(event.target.value)}
    className="w-full rounded-lg border p-3"
  >
    <option value="">指定なし</option>
    <option value="★☆☆☆☆">★☆☆☆☆</option>
    <option value="★★☆☆☆">★★☆☆☆</option>
    <option value="★★★☆☆">★★★☆☆</option>
    <option value="★★★★☆">★★★★☆</option>
    <option value="★★★★★">★★★★★</option>
  </select>
</div>

          <button
            onClick={handleSearch}
            className="w-full rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800"
          >
            検索する
          </button>
        </div>
      </div>
    </main>
  );
}