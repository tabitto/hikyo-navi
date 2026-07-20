import Link from "next/link";

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/results"
          className="mb-6 inline-block text-green-800 underline"
        >
          ← 検索結果へ戻る
        </Link>

        <div className="rounded-2xl bg-white p-8 shadow">
          <p className="mb-2 font-semibold text-green-700">
            長野県
          </p>

          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            下栗の里
          </h1>

          <div className="mb-8 space-y-2">
            <p>🚆 東京駅から約5時間</p>
            <p>🚶 徒歩：約2.4km</p>
            <p>⭐ 難易度：★★★★☆</p>
            <p>🚌 公共交通で訪問可能</p>
          </div>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl font-bold">
              どんな場所？
            </h2>

            <p className="leading-8 text-gray-700">
              下栗の里は、長野県飯田市の山間部にある集落です。
              急斜面に家や畑が広がる景色から、日本のチロルとも呼ばれています。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl font-bold">
              車なしで行くときの注意点
            </h2>

            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>路線バスの本数が少ない</li>
              <li>坂道や徒歩移動がある</li>
              <li>帰りのバス時刻を先に確認する</li>
              <li>飲み物を事前に準備する</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              実際に訪れた感想
            </h2>

            <p className="leading-8 text-gray-700">
              ここには、あとであなた自身の体験談や、
              実際に利用した列車・バス、歩いた距離などを追加します。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}