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
    demandTransport?: {
  available: boolean;
  routeName?: string;
  boardingPlace: string;
  dropoffPlace: string;
  frequency: string;
  fare: string;
  reservationRequired: boolean;
reservationDeadline: string;
reservationMethod: string;
reservationContact: string;
    note: string;
  };

  routeEntrance: string;

  dayTrip?: {
    possible: boolean;
    returnToEntrance: boolean;
    lastDeparture: string;
    note: string;
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
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-3 sm:mt-8 sm:p-6">
      <h2 className="mb-5 text-2xl font-bold text-green-800">
        秘境カルテ
      </h2>
<div className="divide-y divide-green-200">
  {items.map((item) => (
    <div
      key={item.label}
      className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between"
    >
      <span className="font-bold">
        {item.icon} {item.label}
      </span>

      <span className="sm:text-right">
  {item.value ?? "情報なし"}
</span>
    </div>
  ))}
</div>
      
      {/* デマンド交通カード */}
<div className="mt-5 rounded-xl bg-green-100 p-4">
  <p className="font-bold text-green-800">
  🚐 {"routeAlternatives" in spot
    ? "予約制の地域交通："
    : "デマンド交通："}
  {spot.demandTransport?.available ? "あり" : "なし"}
</p>

  {spot.demandTransport?.available && (
    <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">

      {spot.demandTransport.routeName && (
        <p>
          <span className="font-bold">路線名：</span>
          {spot.demandTransport.routeName}
        </p>
      )}

      <p>
        <span className="font-bold">乗車場所：</span>
        {spot.demandTransport.boardingPlace}
      </p>

      <p>
        <span className="font-bold">降車場所：</span>
        {spot.demandTransport.dropoffPlace}
      </p>

      <p>
        <span className="font-bold">1日の本数：</span>
        {spot.demandTransport.frequency}
      </p>

      <p>
        <span className="font-bold">料金：</span>
        {spot.demandTransport.fare}
      </p>

      <p>
        <span className="font-bold">予約：</span>
        {spot.demandTransport.reservationRequired ? "必要" : "不要"}
      </p>

      {spot.demandTransport.reservationDeadline && (
        <p>
          <span className="font-bold">予約期限：</span>
          {spot.demandTransport.reservationDeadline}
        </p>
      )}

      {spot.demandTransport.reservationMethod && (
        <p>
          <span className="font-bold">予約方法：</span>
          {spot.demandTransport.reservationMethod}
        </p>
      )}

      {spot.demandTransport.reservationContact && (
        <p>
          <span className="font-bold">予約先：</span>
          {spot.demandTransport.reservationContact}
        </p>
      )}

      {spot.demandTransport.note && (
        <p className="sm:col-span-2">
          <span className="font-bold">注意：</span>
          {spot.demandTransport.note}
        </p>
      )}

    </div>
  )}
</div>

{/* 日帰り情報カード */}
{spot.dayTrip && (
  <div className="mt-4 rounded-xl bg-blue-50 p-4">
    <p className="font-bold text-blue-900">
      🏠 日帰り・帰宅情報
    </p>

    <div className="mt-3 space-y-1 text-sm text-gray-700">
      <p>
        <span className="font-bold">日帰り：</span>
        {spot.dayTrip.possible ? "可能" : "困難"}
      </p>

      <p>
  <span className="font-bold">
    当日中に戻れる場所：
  </span>
  {spot.dayTrip.returnToEntrance
    ? spot.routeEntrance
    : "入口まで戻るのは困難"}
</p>

      {spot.dayTrip.lastDeparture && (
        <p>
  <span className="font-bold">現地の最終出発目安：</span>
  {spot.dayTrip.lastDeparture}
</p>
      )}

      {spot.dayTrip.note && (
        <p>
          <span className="font-bold">注意：</span>
          {spot.dayTrip.note}
        </p>
      )}
    </div>
  </div>
)}
  </div>
  

);
}