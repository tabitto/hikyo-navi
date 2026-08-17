import RouteToEntranceButton from "@/app/components/RouteToEntranceButton";
import Link from "next/link";
import Image from "next/image";
import { spots } from "@/data/spots";
import FavoriteButton from "@/app/components/FavoriteButton";
import HikyoKarte from "@/app/components/HikyoKarte";
import RecommendedItems from "@/app/components/RecommendedItems";

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

        <Link
  href="/results"
  className="font-extrabold text-green-700 hover:underline"
>
  ← 検索結果に戻る
</Link>
      </main>
    );
  }

  return (
    <main
  id="top"
  className="min-h-screen bg-white sm:bg-green-50"
>
      <div className="mx-auto max-w-5xl px-1 py-2 sm:p-8">
        <Link href="/results" className="text-green-700 underline">
          ← 検索結果へ戻る
        </Link>

        <div className="mt-4 rounded-xl bg-white p-4 shadow sm:mt-6 sm:p-8">
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

          <FavoriteButton spotId={spot.id} />

<div className="mt-6 rounded-xl border bg-white p-4">
  <p className="mb-3 font-bold">このページの情報</p>

  <div className="grid grid-cols-2 gap-2 text-sm">
    <a
      href="#karte"
      className="rounded-lg bg-green-50 px-3 py-2 text-center font-bold text-green-800"
    >
      📝 秘境カルテ
    </a>

    <a
      href="#access"
      className="rounded-lg bg-green-50 px-3 py-2 text-center font-bold text-green-800"
    >
      🚃 アクセス
    </a>

    <a
  href="#course"
  className="rounded-lg bg-green-50 px-3 py-2 text-center font-bold text-green-800"
>
  🚃 実際に使ったルート
</a>


<a
  href="#hikyo-route"
  className="rounded-lg bg-green-50 px-3 py-2 text-center font-bold text-green-800"
>
  🗺️ モデルコース
</a>
    <a
      href="#cost"
      className="rounded-lg bg-green-50 px-3 py-2 text-center font-bold text-green-800"
    >
      💰 費用
    </a>

    <a
      href="#warning"
      className="rounded-lg bg-yellow-50 px-3 py-2 text-center font-bold text-yellow-800"
    >
      ⚠️ 注意点
    </a>
  </div>
</div>

<div id="karte" className="scroll-mt-4">
  <HikyoKarte spot={spot} />
</div>

          <RecommendedItems items={spot.recommendedItems} />

          <h2 className="mt-8 text-2xl font-bold">
            地図
          </h2>

          <iframe
            src={spot.mapUrl}
            width="100%"
            height="400"
            loading="lazy"
            className="mt-4 rounded-xl border"
          />

          <hr className="my-8" />

          <h2
  id="access"
  className="scroll-mt-4 text-2xl font-bold"
>
  アクセス
</h2>

          <p className="mt-3 leading-8">
            {spot.access}
          </p>
          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 sm:mt-6 sm:p-6">
  <h2 className="text-xl font-bold text-blue-900">
    🚉 秘境への入口
  </h2>

  <p className="mt-2 text-gray-700">
    まずは公共交通で「{spot.routeEntrance}」を目指します。
    ここから先は、秘境ナビの実体験ルートを参考にしてください。
  </p>

  <RouteToEntranceButton
  entranceName={spot.routeEntrance}
/>

<div className="mt-6 border-t border-blue-200 pt-5">
  <p className="font-bold text-green-800">
    ここから先は秘境ナビで案内します
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-700">
    Googleマップでは表示されないデマンド交通や、
    予約が必要な移動手段を含めて紹介しています。
  </p>

  <a
    href="#hikyo-route"
    className="mt-4 inline-block rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
  >
    入口から先のルートを見る ↓
  </a>
</div>

</div>
          <div className="mt-6 rounded-xl border bg-white p-4 shadow-sm sm:mt-8 sm:p-6">
  <h2
  id="course"
  className="scroll-mt-4 text-2xl font-bold"
>
  実際に使ったルート
</h2>

  <ol className="mt-6">
  {spot.modelCourse?.map((item, index) => (
    <li key={index} className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-green-600" />

        {index < spot.modelCourse.length - 1 && (
          <div className="h-12 w-0.5 bg-green-200" />
        )}
      </div>

      {typeof item === "string" ? (
        <p className="min-w-0 flex-1 pb-6 text-sm leading-7 sm:text-base">
          {item}
        </p>
      ) : (
        <div className="min-w-0 flex-1 pb-6">
          <p className="text-sm font-bold text-green-700">
            {item.time}
          </p>

          <p className="mt-1 font-bold">
            {item.title}
          </p>

          {item.detail && (
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {item.detail}
            </p>
          )}
        </div>
      )}
    </li>
  ))}
</ol>
</div>
<div className="mt-6 rounded-xl border bg-white p-4 shadow-sm sm:mt-8 sm:p-6">
  <h2 className="text-2xl font-bold">
    持ち物チェックリスト
  </h2>

  <ul className="mt-4 space-y-3">
    {spot.checklist?.map((item, index) => (
      <li key={index} className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded border border-green-600 text-green-700">
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
<div className="mt-6 rounded-xl border bg-white p-4 shadow-sm sm:mt-8 sm:p-6">
  <h2
  id="cost"
  className="scroll-mt-4 text-2xl font-bold"
>
  実際にかかった費用
</h2>

  <div className="mt-4 divide-y">
    {spot.costs?.map((cost, index) => (
      <div
        key={index}
        className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between"
      >
        <span>{cost.item}</span>

        <span className="font-bold sm:text-right">
  {cost.price}
</span>
      </div>
    ))}
  </div>
</div>

          <h2 className="mt-8 text-2xl font-bold">
            実際に行って分かったこと
          </h2>

          <p className="mt-3 leading-8">
            {spot.memo}
          </p>

          <div className="mt-8 rounded-xl border border-yellow-300 bg-yellow-50 p-4 sm:p-6">
  <h2
  id="warning"
  className="scroll-mt-4 text-xl font-bold text-yellow-900"
>
  注意しておきたいポイント
</h2>

  <ul className="mt-4 space-y-3 text-yellow-950">
    {spot.pitfalls?.map((pitfall, index) => (
      <li key={index} className="flex gap-3">
        <span>・</span>
        <span>{pitfall}</span>
      </li>
    ))}
  </ul>
</div>
{spot.noteUrl && (
  <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
    <h2 className="text-xl font-bold text-yellow-900">
      📖 実際に行った体験をもっと詳しく知りたい方へ
    </h2>

    <p className="mt-3 text-gray-700">
      現地で困ったことや、公共交通でスムーズに行くコツ、
      実際の旅の流れをnoteにまとめています。
    </p>

    <a
      href={spot.noteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600"
    >
      車なしで行くための完全ガイドを見る →
    </a>
  </div>
)}

          <hr className="my-8" />

          <h2
  id="hikyo-route"
  className="mb-3 scroll-mt-6 text-2xl font-bold"
>
  🗺️ モデルコース
</h2>

<p className="mb-6 text-gray-700">
  秘境への行き方や現地での過ごし方の一例です。
</p>

          <div className="space-y-0">
            {spot.route.map((route, index) => (
              <div
                key={`${route.place}-${index}`}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full">
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
      </div>
      <a
  href="#top"
  className="fixed bottom-5 right-4 z-50 flex flex-col items-center justify-center rounded-xl bg-green-700 px-4 py-2 text-white shadow-lg transition hover:bg-green-800 sm:bottom-6 sm:right-6"
  aria-label="ページの最初に戻る"
>
  <span className="text-xs font-bold">
    ページの最初に戻る
  </span>
  <span className="text-xl leading-none">
    ↑
  </span>
</a>
    </main>
  );
}