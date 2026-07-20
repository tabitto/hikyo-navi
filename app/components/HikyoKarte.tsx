type Props = {
  spot: {
    walking: string;
    busFrequency?: string;
    convenienceStore?: string;
    toilet?: string;
    signal?: string;
    vendingMachine?: string;
    restaurant?: string;
    stayTime?: string;
  };
};

export default function HikyoKarte({ spot }: Props) {
  const items = [
  { icon: "🚶", label: "徒歩距離", value: spot.walking },
  { icon: "🚌", label: "バス本数", value: spot.busFrequency },
  { icon: "🏪", label: "コンビニ", value: spot.convenienceStore },
  { icon: "🚻", label: "トイレ", value: spot.toilet },
  { icon: "📶", label: "電波", value: spot.signal },
  { icon: "🥤", label: "自販機", value: spot.vendingMachine },
  { icon: "🍽️", label: "食事処", value: spot.restaurant },
  { icon: "⏰", label: "滞在時間", value: spot.stayTime },
];
    return (
    <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
      <h2 className="mb-5 text-2xl font-bold text-green-800">
        秘境カルテ
      </h2>
<div className="divide-y divide-green-200">
  {items.map((item) => (
    <div
      key={item.label}
      className="flex justify-between py-3"
    >
      <span className="font-bold">
        {item.icon} {item.label}
      </span>

      <span>{item.value ?? "情報なし"}</span>
    </div>
  ))}
</div>
      
      
    </div>
  );
}