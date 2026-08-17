export const spots = [
  {
    id: 1,
    name: "下栗の里",
    sortName: "しもぐりのさと",
    prefecture: "長野県",
    walking: "0km",
    walkingDistance: 0,
    train: "新宿から約8時間",
    difficulty: "★★★★☆",
    difficultyLevel: 4,
    routeEntrance: "飯田駅",

dayTrip: {
  possible: false,
  returnToEntrance: false,
  lastDeparture: "",
  note: "公共交通のみでは日帰り困難。宿泊推奨",
},

recommendedItems: [
  "飲み物",
  "食べ物",
  "歩きやすい靴",
  "レインコートなどの雨具",
],
demandTransport: {
  available: true,
   routeName: "下栗線",
  boardingPlace: "学校前",
  dropoffPlace: "半場",
  frequency: "水曜日2本、木曜日1本",
  fare: "300円",
　 reservationRequired: true,
  reservationDeadline: "前日から利用当日の1時間15分前まで",
  reservationMethod: "電話",
  reservationContact: "",
  note: "当日予約可能",
},
    image: "/images/shimoguri-new.jpg",
    mapUrl: "https://www.google.com/maps?q=下栗の里&output=embed",
    busFrequency: "1日4本",
convenienceStore: "なし",
toilet: "あり",
signal: "○",
vendingMachine: "なし",
restaurant: "あり（不定期休業）",
stayTime: "2〜3時間",
    access: "飯田駅 → バス「かぐらの湯」行き乗車 → 学校前バス停下車 → デマンドタクシー乗車 → 半場で下車",
    memo: "デマンドタクシーは水、木のみの運行です。あらかじめ予約をしないと乗れないので注意",
    pitfalls: [
  "デマンドタクシーは水、木のみ運行。事前予約が必要",
  "行きのバスを逃すと山を登ることになる",
  "途中にコンビニはない",
  "現金・小銭を用意しておくと安心",
],
noteUrl: "https://note.com/tabibitotubyaki/n/n5f48e66e69ec",
modelCourse: [
  {
    time: "07:00",
    title: "新宿駅 出発",
    detail: "特急あずさ",
  },
  {
    time: "09:13",
    title: "上諏訪駅 到着",
    detail: "",
  },
  {
    time: "09:22",
    title: "飯田線へ乗り換え",
    detail: "",
  },
  {
    time: "12:18",
    title: "飯田駅 到着",
    detail: "バスまでの時間を利用してランチ",
  },
  {
    time: "13:30",
    title: "「かぐらの湯」行きのバスに乗車",
    detail: "信南交通",
  },
  {
    time: "14:34",
    title: "学校前バス停 到着",
    detail: "",
  },
  {
    time: "14:40",
    title: "デマンドタクシー乗車",
    detail: "",
  },
  {
    time: "15:00",
    title: "下栗の里 到着",
    detail: "",
  },
],
checklist: [
  "履きなれた靴",
  "飲み物と食べ物",
  "現金（特に小銭）",
  "雨具",
],
costs: [
  { item: "新宿駅から飯田駅の乗車券代", price: "5,280円" },
  { item: "特急あずさの指定席代", price: "2,140円" },
  { item: "路線バス", price: "700円" },
  { item: "デマンドタクシー", price: "300円" },
  { item: "高原ロッジ下栗 宿泊", price: "12,760円" },
  { item: "合計", price: "21,180円" },
],
    route: [
      {
        icon: "🚌",
        place: "飯田駅",
        detail: "飯田駅からバス（信南交通）で学校前バス停へ",
      },
      {
        icon: "🚕",
        place: "学校前バス停",
        detail: "学校前バス停からデマンドタクシーで半場（下栗の里）",
      },
      {
        icon: "🏡",
        place: "下栗の里",
        detail: "到着",
      },
    ],
  },
  {
    id: 2,
    name: "椎葉村",
    sortName: "しいばそん",
    recommended: true,
    prefecture: "宮崎県",
    walking: "1.8km",
    walkingDistance: 1.8,
    train: "宮崎空港から約4時間20分",
    difficulty: "★★★★★",
　　difficultyLevel: 5,
   routeEntrance: "日向市駅",
    image: "/images/shiiba.JPG",
    access: "日向市駅 → 路線バス → 椎葉村",
    memo: "バスの本数が1日2本と少ないため、事前に時刻表を確認しておくと安心です。",
    pitfalls: [
  "バスの本数が少ない",
  "村の中心部までは予約制タクシーの利用が必要",
  "宮交バス1日乗車券がお得",
  "村の中の村営バスは現金支払いのみ",
],
noteUrl: "https://note.com/tabibitotubyaki/n/n9c990d5718c9",
modelCourse: [
  {
    time: "13:09",
    title: "宮崎空港駅 出発",
    detail: "特急ひゅうが4号",
  },
  {
    time: "14:19",
    title: "日向市駅 到着",
    detail: "",
  },
  {
    time: "15:08",
    title: "日向市駅東口から宮交バス乗車",
    detail: "椎葉行き乗車（現在は途中のおし谷止まり）",
  },
  {
    time: "17:06",
    title: "おし谷バス停 到着",
    detail: "デマンドタクシーに乗り換え",
  },
  {
    time: "17:18",
    title: "旧岩屋戸バス停 到着",
    detail: "徒歩で民宿へ",
  },
  {
    time: "17:30",
    title: "民宿 到着",
    detail: "",
  },
],

checklist: [
  "現金（特に小銭）",
  "飲み物",
  "雨具",
  "モバイルバッテリー",
  "歩きやすい靴",
],
demandTransport: {
  available: true,
   routeName: "",
  boardingPlace: "おし谷",
  dropoffPlace: "旧岩屋戸",
  frequency: "1日2本",
  fare: "200円",
　 reservationRequired: true,
  reservationDeadline: "利用3日前まで",
  reservationMethod: "電話",
  reservationContact: "",
  note: "当日予約不可",
},

dayTrip: {
  possible: true,
  returnToEntrance: true,
  lastDeparture: "おし谷13：25発",
  note: "最終便を逃すと当日中に日向市駅まで帰れません",
},

costs: [
  { item: "宮崎空港から日向市の乗車券代", price: "1,640円" },
  { item: "特急ひゅうが指定券代", price: "1,530円" },
  { item: "日向市駅東口から旧岩屋戸のバス代", price: "約2,200円" },
  { item: "民宿孫兵衛 宿泊代", price: "9,900円" },
  { item: "合計", price: "15,270円" },
],
    route: [
       {
        icon: "🚌",
        place: "日向市駅",
        detail: "椎葉村へ向けて路線バスに乗車",
      },
      {
        icon: "🚕",
        place: "おし谷",
        detail: "デマンドタクシーに乗り換え",
      },
      {
        icon: "🏡",
        place: "椎葉村",
        detail: "到着",
      },
    ],
    mapUrl:"https://www.google.com/maps?q=宮崎県椎葉村&output=embed",
  busFrequency: "1日2本",
convenienceStore: "なし",
toilet: "あり",
signal: "△",
vendingMachine: "あり",
restaurant: "あり",
stayTime: "1泊",
    recommendedItems: [
  "現金（特に小銭）",
  "飲み物",
  "ポケットWi-Fi",
  "レインコート",
],
  },
  {
  id: 3,
  name: "青鬼集落",
  sortName: "あおにしゅうらく",
  prefecture: "長野県",
  walking: "2km",
  walkingDistance: 2,
  train: "新宿から約6時間",
  difficulty: "★★★☆☆",
  difficultyLevel: 3,
  routeEntrance: "信濃森上駅",
  image: "/images/aoni.JPG",
  access: "信濃森上駅 → デマンド交通 → 青鬼集落",
  memo: "デマンド交通は事前予約が必要です。アプリから予約することができます。",
  pitfalls: [
  "デマンドタクシーは事前予約が必要",
  "集落入口にあるマップで立ち入っていいところをチェック",
  "集落に食事ができるお店はない",
  
],
noteUrl: "https://note.com/tabibitotubyaki/n/n52b0276e6554",
modelCourse: [
  {
    time: "10:00",
    title: "新宿駅 出発",
    detail: "特急あずさ松本行き",
  },
  {
    time: "12:37",
    title: "松本駅 到着",
    detail: "乗り換え時間を利用してランチ",
  },
  {
    time: "14:11",
    title: "松本駅 出発",
    detail: "大糸線普通信濃大町行き",
  },
  {
    time: "15:07",
    title: "信濃大町駅 到着",
    detail: "信濃大町駅前のルートインで前泊",
  },
  {
    time: "7:06",
    title: "信濃大町駅 出発",
    detail: "大糸線普通南小谷行き",
  },
  {
    time: "7:49",
    title: "信濃森上駅 到着",
    detail: "",
  },
  {
    time: "8:00",
    title: "デマンドタクシー乗車",
    detail: "",
  },
  {
    time: "8:15",
    title: "青鬼集落 到着",
    detail: "",
  },
],

checklist: [
  "現金（特に小銭）",
  "食べ物",
  "履きなれた靴",
],

costs: [
  { item: "新宿駅から信濃森上駅の乗車券代", price: "5,720円" },
  { item: "特急あずさ号の指定券代", price: "2,550円" },
  { item: "ルートイン宿泊代", price: "8,050円" },
  { item: "デマンドタクシー代", price: "300円" },
  { item: "合計", price: "16,620円" },
],
  route: [
  
    {
      icon: "🚐",
      place: "信濃森上駅",
      detail: "予約したデマンド交通に乗車",
    },
    {
      icon: "🏘️",
      place: "青鬼集落",
      detail: "到着",
    }, 
  ],
mapUrl: "https://www.google.com/maps?q=長野県白馬村青鬼集落&output=embed",
busFrequency: "アプリからの予約制",
convenienceStore: "なし",
toilet: "あり",
signal: "◎",
vendingMachine: "あり",
restaurant: "なし",
stayTime: "2〜3時間",

recommendedItems: [
  "食べ物",
  "モバイルバッテリー",
  "歩きやすい靴",
],
demandTransport: {
  available: true,
   routeName: "",
  boardingPlace: "信濃森上駅",
  dropoffPlace: "青鬼集落駐車場",
  frequency: "利用者に応じて適宜運行",
  fare: "300円",
　 reservationRequired: true,
  reservationDeadline: "利用4日前から予約可能",
  reservationMethod: "アプリ予約",
  reservationContact: "",
  note: "当日予約可能",
},
dayTrip: {
  possible: true,
  returnToEntrance: true,
  lastDeparture: "16:55発",
  note: "最終便を逃すと当日中に白馬駅まで帰れません",
},

warnings: [
  "デマンド交通は事前予約必須",
  "帰りは1時間くらい歩ければ白馬駅まで行ける",
  "飲食店はないため食べ物の準備必須",
],
},
{
  id: 4,
  name: "祖谷渓",
  sortName: "いやけい",
  prefecture: "徳島県",
  walking: "0km",
  walkingDistance: 0,
  train: "岡山駅から約3時間15分（乗り換え、宿泊時間を除く）",
  difficulty: "★★☆☆☆",
  difficultyLevel: 2,
  routeEntrance: "大歩危駅",
  dayTrip: {
  possible: true,
  returnToEntrance: true,
  lastDeparture: "三重かずら橋15:13発",
  note: "最終便を逃すと当日中に大歩危まで帰れません",
},

  image: "/images/iya.jpg",
  access: "阿波池田駅 → 路線バス（四国交通から市営バスへの乗り継ぎあり） → 祖谷渓",
  memo: "バスの乗り継ぎ時刻を調べないとバス停で1時間以上待たされます。",
pitfalls: [
  "路線バス同士の乗り継ぎ必須",
  "道は狭いが交通量が多い",
  "移動時間が長い",
  "歩きやすい靴がおすすめ",
],
noteUrl: "",
modelCourse: [
  {
    time: "13:05",
    title: "岡山駅 出発",
    detail: "特急南風高知行き",
  },
  {
    time: "14:41",
    title: "大歩危駅 到着",
    detail: "路線バスでホテル秘境の湯へ向かう（前泊）",
  },
  {
    time: "9:12",
    title: "ホテル秘境の湯 出発",
    detail: "路線バスかずら橋ゆめ舞台行き",
  },
  {
    time: "10:16",
    title: "落合橋バス停 到着",
    detail: "歩いて東祖谷集落展望台へ",
  },
  {
    time: "11:30",
    title: "展望台から久保バス停へ移動",
    detail: "",
  },
  {
    time: "13:18",
    title: "久保バス停 出発",
    detail: "三好市営バス",
  },
  {
    time: "13:50",
    title: "奥祖谷二重かずら橋 到着",
    detail: "",
  },
],

checklist: [
  "履きなれた靴",
  "食べ物",
  "現金（新500円玉や新1000円札を除く）",
  "レインコート",
],
demandTransport: {
  available: false,
  boardingPlace: "",
  dropoffPlace: "",
  frequency: "",
  fare: "",
　 reservationRequired: false,
  reservationDeadline: "",
  reservationMethod: "",
  reservationContact: "",
  note: "",
},

costs: [
  { item: "岡山駅から大歩危駅乗車券代", price: "2,410円" },
  { item: "特急南風号の指定券代", price: "2,390円" },
  { item: "大歩危から奥祖谷二重かずら橋までのバス代（久保バス停乗り換え）", price: "1,430円" },
  { item: "合計", price: "6,230円" },
  ],
  route: [
    {
      icon: "🚌",
      place: "大歩危駅",
      detail: "祖谷方面の路線バスに乗車",
    },
    {
      icon: "🚌",
      place: "久保バス停",
      detail: "奥祖谷二重かずら橋へ向かう市営バスに乗り換え",
    },
    {
      icon: "🏞️",
      place: "祖谷渓",
      detail: "到着",
    },
  ],

  mapUrl: "https://www.google.com/maps?q=祖谷渓&output=embed",
  busFrequency: "1日4本",
  convenienceStore: "なし",
  toilet: "あり",
  signal: "◎",
  vendingMachine: "あり",
  restaurant: "あり",
  stayTime: "3時間",

  recommendedItems: [
    "食べ物",
    "履きなれた靴",
    "レインウェア",
  ],

  warnings: [
    "路線バス同士の乗り継ぎが必須",
    "帰りのバス時刻を先に確認する",
    "観光場所同士が離れている",
  ],
},
{
  id: 5,
  name: "秋山郷（切明温泉）",
  sortName: "あきやまごう",
  prefecture: "長野県",
  walking: "0km",
  walkingDistance: 0,
  train: "東京から約6時間",
  difficulty: "★☆☆☆☆",
  difficultyLevel: 1,
  routeEntrance: "津南駅",

  image: "/images/akiyama.JPG",

  access:
    "東京駅 → 飯山駅 → 津南駅 → 見玉行きバス → 切明温泉",

  memo:
    "バスと飯山駅から津南駅への列車の本数が非常に少ないが、徒歩の区間がほとんどないため初めてでも簡単に行ける。",
pitfalls: [
  "デマンド交通は予約が必要",
  "宿泊できる場所が限られている",
],
noteUrl: "",
modelCourse: [
  {
    time: "8:48",
    title: "東京駅 出発",
    detail: "上越新幹線とき309号新潟行き",
  },
  {
    time: "10:20",
    title: "越後湯沢駅 到着",
    detail: "ほくほく線に乗り換え",
  },
  {
    time: "10:41",
    title: "越後湯沢駅 出発",
    detail: "ほくほく線 普通直江津行き",
  },
  {
    time: "11:18",
    title: "十日町駅 到着",
    detail: "飯山線に乗り換え",
  },
  {
    time: "11:43",
    title: "十日町駅 出発",
    detail: "飯山線 普通長野行き",
  },
  {
    time: "12:18",
    title: "津南駅 到着",
    detail: "バスまでの時間を利用してランチ・歩いて津南役場へ向かう（約30分）",
  },
  {
    time: "14:14",
    title: "津南役場前バス停 出発",
    detail: "路線バス見玉行きに乗車",
  },
  {
    time: "14:35",
    title: "見玉バス停 到着",
    detail: "デマンドタクシーに乗り換え",
  },
  {
    time: "15:30",
    title: "切明温泉 到着",
    detail: "",
  },
],

checklist: [
  "現金（特に小銭）",
  "ポケットWi-Fi",
],
demandTransport: {
  available: true,
  routeName: "秋山郷線",
  boardingPlace: "見玉",
  dropoffPlace: "切明",
  frequency: "1日3本",
  fare: "300円",
  reservationRequired: true,
  reservationDeadline: "前日17時まで",
  reservationMethod: "電話",
  reservationContact: "森宮交通",
  note: "当日予約不可",
},
dayTrip: {
  possible: true,
  returnToEntrance: true,
  lastDeparture: "切明16:30発",
  note: "最終便を逃すと当日中に津南まで帰れません",
},
costs: [
  { item: "東京駅から津南駅までの乗車券代", price: "4,580円" },
  { item: "新幹線指定席代", price: "3,580円" },
  { item: "津南役場前から見玉までのバス代", price: "380円" },
  { item: "デマンドタクシー代", price: "300円" },
  { item: "合計", price: "8,840円" },
],
  route: [
    {
      icon: "👬",
      place: "津南駅",
      detail: "津南駅から徒歩で津南役場前バス停へ",
    },
    {
      icon: "🚌",
      place: "津南役場前バス停",
      detail: "越後交通 見玉行で見玉バス停へ",
    },
    {
      icon: "🚌",
      place: "見玉バス停",
      detail: "見玉バス停からデマンドタクシーで切明温泉へ",
    },
    {
      icon: "♨️",
      place: "切明温泉",
      detail: "到着",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=切明温泉&output=embed",

  busFrequency: "1日6本",
  convenienceStore: "なし",
  toilet: "なし",
  signal: "△",
  vendingMachine: "なし",
  restaurant: "なし",
  stayTime: "1泊",

  recommendedItems: [
    "モバイルバッテリー",
    "歩きやすい靴",
    "水着（河原の温泉用）",
  ],

  warnings: [
    "バス本数が少ない",
    "帰りの便を必ず確認",
    "売店が少ない",
  ],
},
{
  id: 6,
  name: "古民家宿 寝つきいいキツネ",
  sortName: "ねつきいいきつね",
  prefecture: "高知県",
  walking: "0km",
  walkingDistance: 0,
  train: "高知から約1時間30分",
  difficulty: "★★★☆☆",
  difficultyLevel: 3,
  routeEntrance: "中村駅",


  image: "/images/kitsune.JPG",

  access:
    "高知駅 → 中村駅 → デマンドバス → 古民家宿 寝つきいいキツネ",

  memo:
    "四万十市の山間部にある、自然に囲まれた築100年の古民家。電波も人家もありません。",
pitfalls: [
  "周辺にコンビニやスーパーはない",
  "日没後は道が暗いため明るいうちの到着がおすすめ",
  "デマンドバスは湯約生",
  "素泊まりプランしかないので食料の持ち込みが必須",
],
noteUrl: "https://note.com/tabibitotubyaki/n/nf050bcc6d52e",
modelCourse: [
  {
    time: "8:20",
    title: "高知駅 出発",
    detail: "特急あしずりで中村駅へ",
  },
  {
    time: "10:04",
    title: "中村駅 到着",
    detail: "レンタサイクルで観光と食料の買いこみ",
  },
  {
    time: "14:00",
    title: "中村駅からデマンドバスに乗車",
    detail: "古民家でゆったり滞在",
  },
  {
    time: "14:30",
    title: "寝つきいいキツネ 到着",
    detail: "",
  },
],

checklist: [
  "履きなれた靴",
  "食べ物と飲み物",
  "パジャマ",
  "現金（特に小銭）",
],
demandTransport: {
  available: true,
  routeName: "西富山エリア",
  boardingPlace: "中村駅",
  dropoffPlace: "寝つきいいキツネ",
  frequency: "1日3本",
  fare: "300円",
  reservationRequired: true,
  reservationDeadline: "2日前から利用の2時間前まで",
  reservationMethod: "電話",
  reservationContact: "",
  note: "当日予約可能",
},

costs: [
  { item: "高知駅から中村駅乗車券代", price: "2,750円" },
  { item: "特急あしずり指定席代", price: "2,360円" },
  { item: "デマンドバス代", price: "300円" },
  { item: "宿泊代", price: "17,000円" },
  { item: "合計", price: "22,410円" },
  ],
  route: [
    {
      icon: "🚕",
      place: "中村駅",
      detail: "デマンドバスで宿へ",
    },
    {
      icon: "🏡",
      place: "寝つきいいキツネ",
      detail: "到着",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=古民家宿寝つきいいキツネ&output=embed",

  busFrequency: "デマンドバスが1日3本",
  convenienceStore: "なし",
  toilet: "あり（宿の中）",
  signal: "◎（Wi-Fiあり）",
  vendingMachine: "なし",
  restaurant: "なし（食料の持ち込み必須）",
  stayTime: "1泊",

  recommendedItems: [
    "飲み物と食べ物",
    "虫よけ",
  ],

  warnings: [
    "周辺に店と人家がない",
    "夕暮れ前の到着がおすすめ",
    "街灯がない",
  ],
},
];