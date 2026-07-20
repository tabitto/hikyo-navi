import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          車なし秘境ナビ
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          公共交通だけで行ける秘境を探そう
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/search"
            className="rounded-lg bg-green-700 px-8 py-4 text-white font-bold hover:bg-green-800"
          >
            秘境を探す
          </Link>

          <Link
            href="/favorites"
            className="rounded-lg bg-red-600 px-8 py-4 text-white font-bold hover:bg-red-700"
          >
            ❤️ 行ってみたい一覧
          </Link>
        </div>
      </div>
    </main>
  );
}