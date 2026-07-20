type Props = {
  items?: string[];
};

export default function RecommendedItems({ items }: Props) {
  if (!items || items.length === 0) {
  return (
    <p className="mt-8 text-red-600">
      持ち物データが受け取れていません
    </p>
  );
}

  return (
  <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
    

    <h2 className="mb-5 text-2xl font-bold text-blue-800">
      🎒 おすすめの持ち物
    </h2>

    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>✅ {item}</li>
      ))}
    </ul>
  </div>
);
}