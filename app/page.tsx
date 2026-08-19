import Image from "next/image";
import { spots } from "@/data/spots";
import Link from "next/link";
import SpotCard from "./components/SpotCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-12">
        <div className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
          <div className="relative mb-6 h-64 overflow-hidden rounded-2xl sm:h-80">
            <Image
              src="/images/hero.JPG"
              alt="車なしで行ける秘境の風景"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <div>
                <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
                  車なし秘境ナビ
                </h1>

                <p className="mt-4 text-base font-medium text-white drop-shadow sm:text-lg">
                  車がなくても行ける秘境を探そう。
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/search"
              className="w-full max-w-3xl rounded-lg bg-green-700 px-8 py-4 text-center font-bold text-white transition hover:bg-green-800"
            >
              秘境を探す
            </Link>

            <section className="mt-10">
  <h2 className="text-center text-2xl font-bold text-green-800 sm:text-3xl">
    秘境ナビなら、ここまで分かる
  </h2>

  <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-gray-600">
    車なしで行けるかだけでなく、
    実際に旅行として成立するかまで確認できます。
  </p>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    🚌 バスの本数
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    「バスはある。でも1日2本だった…」
    そんな見落としを防ぐため、運行本数まで掲載しています。
  </p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    🚐 デマンド交通
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    知らずに行くと乗れないことも。
    乗降場所・料金・予約期限・予約方法までまとめています。
  </p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    🏠 日帰り・帰宅情報
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    行けることより、帰ってこられることが大切。
    日帰り可否や当日中に戻れる場所、現地を出る最終目安を掲載しています。
  </p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    🚃 実際に使ったルート
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    「結局、どの電車とバスに乗ればいい？」
    実際に訪れた場所では、使った交通手段を時刻とともに紹介します。
  </p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    💰 実際にかかった費用
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    電車、バス、デマンド交通……結局いくらかかる？
    実際の旅でかかった費用を項目ごとに載せています。
  </p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
  <p className="text-lg font-bold text-green-800">
    ⚠️ 注意しておきたいポイント
  </p>
  <p className="mt-2 text-sm leading-6 text-gray-600">
    「予約してない」「最終便が終わっていた」を防ぎたい。
    現金・予約・最終便など、出発前に知りたい注意点をまとめています。
  </p>
</div>
  </div>
</section>

<section className="mt-12 rounded-2xl bg-green-50 p-5 sm:p-7">
  <div className="text-center">
    <p className="text-sm font-bold text-green-700">
      実際の掲載例
    </p>

    <h2 className="mt-1 text-2xl font-bold text-green-900">
      例えば、こんなところまで分かります
    </h2>

    <p className="mt-2 text-sm leading-6 text-gray-600">
      実際に車なしで訪れた秘境の情報を見てみましょう。
    </p>
  </div>

  <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-green-200 bg-white p-5 shadow-sm">
    <p className="text-sm font-bold text-green-700">
      宮崎県
    </p>

    <h3 className="mt-1 text-2xl font-bold">
      椎葉村
    </h3>

    <div className="mt-5 space-y-3 text-sm">
      <p>
        <span className="font-bold">🚌 バス：</span>
        本数まで掲載
      </p>

      <p>
        <span className="font-bold">🚐 デマンド交通：</span>
        乗降場所・料金・予約方法まで掲載
      </p>

      <p>
        <span className="font-bold">🏠 日帰り：</span>
        当日どこまで戻れるかまで掲載
      </p>

      <p>
        <span className="font-bold">🚃 実際のルート：</span>
        実際に利用した交通手段・時刻を掲載
      </p>

      <p>
        <span className="font-bold">💰 費用：</span>
        実際にかかった金額を掲載
      </p>
    </div>

    <Link
      href="/detail/2"
      className="mt-6 block rounded-lg bg-green-700 px-5 py-3 text-center font-bold text-white hover:bg-green-800"
    >
      実際の掲載内容を見る →
    </Link>
  </div>
</section>

            <Link
              href="/favorites"
              className="w-full max-w-3xl rounded-lg bg-red-600 px-8 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              ❤️ 行ってみたい一覧
            </Link>
          </div>
        </div>

        <h2 className="mt-12 text-center text-3xl font-bold text-green-800">
          ⭐ おすすめの秘境
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {spots.slice(0, 3).map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </main>
  );
}