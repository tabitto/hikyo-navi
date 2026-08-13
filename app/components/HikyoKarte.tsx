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
    demandTransport: {
  available: boolean;
  routeName?: string;
  boardingPlace: string;
  dropoffPlace: string;
  frequency: string;
  fare: string;
};
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
      
      <div className="mt-5 rounded-xl bg-green-100 p-4">
      <p className="font-bold text-green-800">
  🚐 デマンド交通：
  {spot.demandTransport?.available ? "あり" : "なし"}
</p>

      {spot.demandTransport?.available && (
        <div className="mt-3 space-y-1 text-sm text-gray-700">
          {spot.demandTransport.routeName && (
            <p>路線名：{spot.demandTransport.routeName}</p>
          )}

          <p>乗車場所：{spot.demandTransport.boardingPlace}</p>
          <p>降車場所：{spot.demandTransport.dropoffPlace}</p>
          <p>1日の本数：{spot.demandTransport.frequency}</p>
          <p>料金：{spot.demandTransport.fare}</p>
        </div>
      )}
    </div>
  </div>
);
}