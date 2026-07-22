"use client";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
const walkingFromUrl = searchParams.get("walkingMax");
  const prefectureFromUrl = searchParams.get("prefecture");
const difficultyFromUrl = searchParams.get("difficulty");
const keywordFromUrl = searchParams.get("keyword");
const sortFromUrl = searchParams.get("sort");
const [prefecture, setPrefecture] = useState(prefectureFromUrl ?? "");
const [walkingMax, setWalkingMax] = useState(walkingFromUrl ?? "");
const [difficulty, setDifficulty] = useState(difficultyFromUrl ?? "");
const [keyword, setKeyword] = useState(keywordFromUrl ?? "");
const [sort, setSort] = useState(sortFromUrl ?? "");
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
if (sort) {
  params.set("sort", sort);
}
    router.push(`/results?${params.toString()}`);
  };
  const handleReset = () => {
  setPrefecture("");
  setWalkingMax("");
  setDifficulty("");
  setKeyword("");
  setSort("");
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
              <option value="高知県">高知県</option>
              <option value="徳島県">徳島県</option>
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

<div>
  <label className="mb-2 block font-semibold">並び替え</label>
  <select
  value={sort}
  onChange={(event) => setSort(event.target.value)}
  className="w-full rounded-lg border p-2"
>
  <option value="">おすすめ順</option>
<option value="walking">徒歩距離が短い順</option>
<option value="difficultyAsc">難易度が低い順</option>
<option value="difficultyDesc">難易度が高い順</option>
<option value="name">名前順</option>
</select>
</div>

          <button
            onClick={handleSearch}
            className="w-full rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800"
          >
            検索する
          </button>
          <button
  type="button"
  onClick={handleReset}
  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-100"
>
  条件をリセット
</button>
        </div>
      </div>
    </main>
  );
}