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
    visited: true,

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
   visited: true,
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
  visited: true,
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
    type: "stay",
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
  visited: true,
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
    detail: "路線バスでホテル秘境の湯へ向かう",
    type: "stay",
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
  visited: true,

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
  visited: true,


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
{
  id: 7,
  name: "雲上の民宿 家曽敷",
  prefecture: "徳島県",
  visited: false,

  walking: "3.6km",
  walkingDistance: 3.6,

  train: "徳島駅からJR徳島線で貞光駅へ",

  difficulty: "★★★★☆",
  difficultyLevel: 4,

  routeEntrance: "八面橋バス停（徳島県美馬郡つるぎ町一宇久藪）",


  image: "/images/yasoshiki.jpg",

  access:
    "徳島駅 → JR徳島線 → 貞光駅 → つるぎ町コミュニティバス → 八面橋バス停 → 徒歩約3.6km → 雲上の民宿 家曽敷",

  memo:
    "つるぎ町の山間部の集落にある宿泊施設。八面橋バス停から約3.6km歩いて向かいます。",

  pitfalls: [
    "八面橋バス停から宿まで約3.6km歩く",
    "宿までの道は細い一本の山道",
    "周辺にコンビニはない",
  ],

  noteUrl: "",

  modelCourse: [],

  checklist: [
    "履きなれた靴",
    "飲み物",
    "現金",
    "雨具",
  ],

  demandTransport: {
    available: false,
    routeName: "",
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

  costs: [],

  route: [
    {
      icon: "🚶",
      place: "八面橋バス停",
      detail:
        "ここから徒歩約3.6km。細い一本の山道を約1時間歩いて宿へ向かいます",
    },
    {
      icon: "🏠",
      place: "雲上の民宿 家曽敷",
      detail: "宿に到着",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=雲上の民宿家曽敷&output=embed",

  busFrequency: "1日5本",

  convenienceStore: "なし",

  toilet: "あり（集落内に1か所）",

  signal: "不明",

  vendingMachine: "なし",

  restaurant: "なし",

  stayTime: "1泊",

  recommendedItems: [
    "履きなれた靴",
    "飲み物",
    "雨具",
  ],

  warnings: [
    "八面橋バス停から宿まで約3.6km歩く",
    "宿まで細い一本の山道を歩く",
    "周辺にコンビニはない",
    "コミュニティバスの運行日・時刻を出発前に確認する",
  ],
},
{
  id: 8,
  name: "せせらぎ荘",
  prefecture: "兵庫県",
  visited: false,

  walking: "750m",
  walkingDistance: 0.75,

  train: "姫路駅からJR播但線で生野駅へ",

  difficulty: "★★★★☆",
  difficultyLevel: 4,

  routeEntrance:
    "黒川簾野公民館（あさGO乗降場所 No.54）",

  image: "/images/seseragiso.jpg",

  access:
    "姫路駅 → JR播但線 → 生野駅 → デマンド型乗合交通「あさGO」 → 黒川簾野公民館 → 徒歩約750m（約11分） → せせらぎ荘",

  memo:
    "兵庫県朝来市生野町黒川の山中にひっそりと佇む、築100年以上の茅葺き古民家。1日1組限定の一棟貸し。JR生野駅からデマンド型乗合交通「あさGO」で黒川簾野公民館へ向かい、そこから約750m・徒歩約11分で到着します。宿の前には川が流れる、自然に囲まれた山奥の宿です。",

  pitfalls: [
    "あさGOは事前予約が必要",
    "日曜日・祝日・年末年始はあさGOが運休",
    "黒川簾野公民館から宿まで約750m歩く",
    "周辺にコンビニはない",
    "飲み物や食料は生野中心部などで事前に準備しておく",
  ],

  noteUrl: "",

  modelCourse: [],

  checklist: [
    "履きなれた靴",
    "飲み物",
    "食料",
    "現金",
    "雨具",
    "あさGOの予約",
  ],

  demandTransport: {
    available: true,
    routeName: "あさGO生野エリア",
    boardingPlace: "生野駅西口",
    dropoffPlace: "黒川簾野公民館",
    frequency:"10本",
    fare: "400円",
    reservationRequired: true,
    reservationDeadline: "乗車7日前から利用の1時間30分前まで",
    reservationMethod: "電話またはインターネット",
    reservationContact: "079-666-8170",
    note:
      ""
  },

  costs: [
  {
    item: "あさGO",
    price: "400円",
  },
],

  route: [
    {
      icon: "🚐",
      place: "生野駅",
      detail:
        "事前予約したデマンド型乗合交通「あさGO」に乗車。山間部の黒川地区へ向かいます",
    },
    {
      icon: "🚏",
      place: "黒川簾野公民館",
      detail:
        "黒川簾野公民館（No.54）で下車。せせらぎ荘の最寄りバス停です",
    },
    {
      icon: "🚶",
      place: "黒川簾野公民館 → せせらぎ荘",
      detail:
        "黒川簾野公民館から山間の道を約750m、約11分歩きます",
    },
    {
      icon: "🏠",
      place: "せせらぎ荘",
      detail:
        "山中にある築100年以上の茅葺き古民家に到着。1日1組限定の一棟貸しです",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=せせらぎ荘+兵庫県朝来市生野町黒川15-1&output=embed",

  busFrequency: "あさGO 平日10便／土曜7便",

  convenienceStore: "なし",

  toilet: "あり（宿）",

  signal: "不明",

  vendingMachine: "なし",

  restaurant: "なし",

  stayTime: "1泊",

  recommendedItems: [
    "履きなれた靴",
    "飲み物",
    "食料",
    "現金",
    "雨具",
  ],

  warnings: [
    "あさGOは事前予約制",
    "日曜日・祝日・年末年始はあさGOが運休",
    "黒川簾野公民館から宿まで約750m・徒歩約11分",
    "周辺にコンビニはない",
    "飲み物や食料は生野中心部などで事前に準備する",
    "あさGOの運行時刻と帰りの便を事前に確認する",
  ],
},
{
  id: 9,
  name: "椿山集落",
  prefecture: "高知県",
  visited: false,

  walking: "6km",
  walkingDistance: 6,

  train: "高知駅からJR土讃線特急で佐川駅へ",

  difficulty: "★★★★★",
  difficultyLevel: 5,

  routeEntrance:
  "大崎バス停 高知県吾川郡仁淀川町大崎",

  image: "/images/tsubayama.jpg",

  access:
    "高知駅 → JR土讃線特急あしずり1号 → 佐川駅 → 黒岩観光バス（川渡行き） → 大崎 → 仁淀川町コミュニティバス椿山線 → 椿山交流センター → 椿山集落 → 徒歩約6km → 民泊 ダバの家 → 1泊 → 翌朝宿の送迎 → 北浦橋 → 黒岩観光バス → 佐川駅 → JR土讃線特急 → 高知駅",

  memo:
    "仁淀川町の山奥にある椿山集落。公共交通だけで到達できますが、椿山へ行くバスは金曜日のみ。到着後は同じ日に公共交通で大崎方面へ戻れません。このモデルコースでは椿山集落を散策した後、約6km歩いて「民泊 ダバの家」へ移動して1泊。翌朝、宿の送迎で北浦橋バス停へ向かい、黒岩観光バスとJRを乗り継いで高知へ戻ります。",

  pitfalls: [
    "椿山線は金曜日のみ運行。椿山交流センターまで行くには事前予約が必要",
    "椿山到着後は同日中に公共交通で大崎方面へ戻れない",
    "このモデルコースでは椿山集落から民泊 ダバの家まで約6km・約2時間歩く",
    "ダバの家を事前予約し、翌朝の北浦橋バス停までの送迎も確認しておく",
  ],

  noteUrl: "",

  modelCourse: [
    {
      time: "1日目 09:51",
      title: "高知駅 出発",
      detail:
        "JR土讃線 特急あしずり1号に乗車して佐川駅へ向かいます",
    },
    {
      time: "10:15",
      title: "佐川駅 到着",
      detail:
        "黒岩観光バスの川渡行きに乗り換えます",
    },
    {
      time: "10:55",
      title: "佐川駅 出発",
      detail:
        "黒岩観光バス川渡行きに乗車して仁淀川町の大崎へ向かいます",
    },
    {
      time: "11:22",
      title: "大崎 到着",
      detail:
        "仁淀川町コミュニティバス椿山線に乗り換えます",
    },
    {
      time: "11:31",
      title: "大崎 出発",
      detail:
        "仁淀川町コミュニティバス椿山線に乗車。椿山線は金曜日のみ運行します",
    },
    {
      time: "12:20",
      title: "椿山交流センター 到着",
      detail:
        "椿山集落を散策します。到着後は同日中に公共交通で大崎方面へ戻れないため注意が必要です",
    },
    {
      time: "14:30",
      title: "椿山集落 出発",
      detail:
        "民泊 ダバの家を目指して徒歩で出発。山間部を約6km・約2時間歩きます",
    },
    {
      time: "16:30",
      title: "民泊 ダバの家 到着",
      detail:
        "ダバの家で1泊。翌朝の北浦橋バス停までの送迎を宿泊予約時に確認しておきます",
    },
    {
      time: "2日目 朝",
      title: "民泊 ダバの家 出発",
      detail:
        "宿の送迎を利用して北浦橋バス停へ向かいます",
    },
    {
      time: "09:47",
      title: "北浦橋 出発",
      detail:
        "黒岩観光バスの佐川駅方面行きに乗車します",
    },
    {
      time: "10:27",
      title: "佐川駅 到着",
      detail:
        "JR土讃線の特急に乗り換えます",
    },
    {
      time: "10:42",
      title: "佐川駅 出発",
      detail:
        "JR土讃線 特急あしずり6号に乗車して高知駅へ向かいます",
    },
    {
      time: "11:05",
      title: "高知駅 到着",
      detail:
        "1泊2日の椿山集落・車なし旅終了",
    },
  ],

  checklist: [
    "履きなれた靴",
    "飲み物",
    "食料",
    "現金",
    "雨具",
    "コミュニティバスの予約",
    "ダバの家の宿泊予約",
    "北浦橋までの送迎確認",
  ],

  demandTransport: {
    available: true,
    routeName: "仁淀川町コミュニティバス 椿山線",
    boardingPlace: "大崎",
    dropoffPlace: "椿山交流センター",
    frequency: "金曜日の1本のみ運行",
    fare: "200円",
    reservationRequired: true,
    reservationDeadline: "前日のお昼まで",
    reservationMethod: "電話予約",
    reservationContact: "0889-35-0520",
    note:
      "椿山へ到着した後、同日中に公共交通で帰ることはできません。帰りは最寄りの宿まで歩く必要があります。",
  },

  costs: [],

  route: [
    {
      icon: "🚃",
      place: "高知駅",
      detail:
        "9:51発の特急あしずり1号で佐川駅へ向かいます",
    },
    {
      icon: "🚌",
      place: "佐川駅",
      detail:
        "10:55発の黒岩観光バス川渡行きに乗車して大崎へ向かいます",
    },
    {
      icon: "🚐",
      place: "大崎",
      detail:
        "11:31発の仁淀川町コミュニティバス椿山線に乗り換えます",
    },
    {
      icon: "🏔️",
      place: "椿山交流センター",
      detail:
        "12:20到着。椿山集落を散策します。帰りの公共交通がないため、ここからの帰路が最大のポイントです",
    },
    {
      icon: "🚶",
      place: "椿山集落 → 民泊 ダバの家",
      detail:
        "14:30頃に椿山集落を出発。山間部を約6km・約2時間歩きます",
    },
    {
      icon: "🏠",
      place: "民泊 ダバの家",
      detail:
        "16:30頃到着して1泊。翌朝は宿の送迎を利用して北浦橋バス停へ向かいます",
    },
    {
      icon: "🚐",
      place: "ダバの家 → 北浦橋",
      detail:
        "翌朝、宿の送迎で北浦橋バス停へ移動します",
    },
    {
      icon: "🚌",
      place: "北浦橋",
      detail:
        "9:47発の黒岩観光バス佐川駅方面行きに乗車します",
    },
    {
      icon: "🚃",
      place: "佐川駅",
      detail:
        "10:42発の特急あしずり6号に乗り換えて高知駅へ戻ります",
    },
    {
      icon: "🏁",
      place: "高知駅",
      detail:
        "11:05到着。1泊2日の行程終了",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=椿山交流センター+高知県仁淀川町&output=embed",

  busFrequency:
    "仁淀川町コミュニティバス椿山線：金曜日に1本のみ",

  convenienceStore: "なし",

  toilet: "要確認",

  signal: "不明",

  vendingMachine: "なし",

  restaurant: "なし",

  stayTime: "1泊",

  recommendedItems: [
    "履きなれた靴",
    "飲み物",
    "食料",
    "現金",
    "雨具",
    "モバイルバッテリー",
  ],

  warnings: [
    "金曜日以外はこのモデルコースを利用できない",
    "椿山からダバの家まで約6kmの徒歩移動があるため、雨天・日没・体力に注意",
    "椿山周辺では飲み物や食料を入手できない可能性があるため事前に準備する",
    "バス・コミュニティバス・鉄道の時刻は旅行前に最新情報を確認する",
  ],
},
{
  id: 10,
  name: "暮らす宿 HANARE",
  prefecture: "奈良県",
  visited: false,

  walking: "2.3km",
  walkingDistance: 2.3,

  difficulty: "★★★☆☆",
  difficultyLevel: 3,

  routeEntrance: "白川渡バス停",

  image: "/images/hanare.jpg",

  access:
    "大和上市駅から川上村コミュニティバス「やまぶきバス」で白川渡へ。白川渡バス停から徒歩約2.3km（約30分）で暮らす宿 HANAREへ向かいます。",

  memo:
    "奈良県川上村中奥の山間部にある1日1組限定の古民家宿。公共交通と徒歩だけで宿泊でき、翌日は湯盛温泉杉の湯に立ち寄って大和上市駅へ戻る1泊2日のルートを組めます。",

  pitfalls: [
    "白川渡バス停からHANAREまで約2.3km歩きます。",
    "宿周辺にはコンビニがありません。",
    "やまぶきバスは日曜・祝日は運休です。",
    "宿の食事は食材のみの提供です。",
  ],

  noteUrl: "",

  modelCourse: [
    {
      time: "1日目 14:30",
      title: "大和上市駅 出発",
      detail:
        "川上村コミュニティバス「やまぶきバス」に乗車して白川渡バス停へ向かいます。",
    },
    {
      time: "15:13",
      title: "白川渡 到着",
      detail:
        "白川渡バス停で下車します。ここから暮らす宿 HANAREまで徒歩で向かいます。",
    },
    {
      time: "15:13〜15:43",
      title: "白川渡 → 暮らす宿 HANARE",
      detail:
        "約2.3km、約30分歩きます。",
    },
    {
      time: "15:43頃",
      title: "暮らす宿 HANARE 到着",
      detail:
        "山間部にある1日1組限定の古民家宿で1泊します。",
    },
    {
      time: "2日目 10:20",
      title: "暮らす宿 HANARE 出発",
      detail:
        "白川渡バス停へ向けて徒歩で出発します。約2.3km、所要約30分です。",
    },
    {
      time: "10:50",
      title: "白川渡 到着",
      detail:
        "白川渡バス停に到着。11:01発のやまぶきバスを待ちます。",
    },
    {
      time: "11:01",
      title: "白川渡 出発",
      detail:
        "川上村コミュニティバス「やまぶきバス」に乗車します。",
    },
    {
      time: "11:18",
      title: "湯盛温泉杉の湯 到着",
      detail:
        "杉の湯で下車し、温泉と昼食を楽しみます。",
    },
    {
      time: "13:30",
      title: "湯盛温泉杉の湯 出発",
      detail:
        "川上村コミュニティバス「やまぶきバス」に乗車して大和上市駅へ向かいます。",
    },
    {
      time: "14:12",
      title: "大和上市駅 到着",
      detail:
        "大和上市駅に到着。車なし1泊2日の旅は終了です。",
    },
  ],

  checklist: [
    "履きなれた靴",
    "飲み物",
    "現金",
    "雨具",

  ],

  demandTransport: {
    available: false,
    routeName: "",
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

  costs: [],

  route: [
    {
      icon: "🚌",
      place: "大和上市駅",
      detail:
        "14:30発の川上村コミュニティバス「やまぶきバス」で白川渡へ向かいます。",
    },
    {
      icon: "🚏",
      place: "白川渡バス停",
      detail:
        "15:13着。ここからHANAREまで徒歩約2.3kmです。",
    },
    {
      icon: "🚶",
      place: "白川渡 → HANARE",
      detail:
        "約2.3km、約30分歩きます。",
    },
    {
      icon: "🏠",
      place: "暮らす宿 HANARE",
      detail:
        "1日1組限定の古民家宿に宿泊します。",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=暮らす宿+HANARE+奈良県吉野郡川上村中奥227&output=embed",

  busFrequency: "本数少なめ",

  convenienceStore: "なし",

  toilet: "あり（宿）",

  signal: "不明",

  vendingMachine: "不明",

  restaurant: "宿周辺はなし",

  stayTime: "1泊2日",

  recommendedItems: [
    "履きなれた靴",
    "飲み物",
    "現金",
    "雨具",
    "宿泊用品",
  ],

  warnings: [
    "白川渡バス停からHANAREまで約2.3km歩きます。",
    "やまぶきバスは日曜・祝日は運休です。",
    "バスの本数が少ないため乗り遅れに注意してください。",
    "大雨などによる道路規制でバスが運休する場合があります。",
    "宿周辺にはコンビニがないため、必要なものは事前に用意してください。",
    "時刻表・運行情報・宿の営業状況は出発前に最新情報を確認してください。",
  ],
},
{
  id: 11,
  name: "農家民泊 温古里（ほっこり）",
  prefecture: "京都府",
  visited: false,

  walking: "900m",
  walkingDistance: 0.9,

  difficulty: "★★★★☆",
  difficultyLevel: 4,

  routeEntrance: "弥栄病院前",

  image: "/images/hokkori.jpg",

  access:
    "峰山駅から丹海バス間人循環線で弥栄病院前へ。弥栄病院前で京丹後市営バス弥栄延利線に乗り換え、須川バス停で下車。須川バス停から徒歩約900m（約13分）で農家民泊 温古里（ほっこり）へ向かいます。",

  memo:
    "京都府京丹後市弥栄町須川の山奥にある、築約180年の古民家を利用した1日1組限定の農家民泊。公共交通では峰山駅から丹海バス、市営バスを乗り継ぎ、さらに須川バス停から徒歩で向かいます。山奥で静かに過ごしたい人に向いた宿です。",

  pitfalls: [
    "土日祝日の弥栄延利線は予約運行となるため、事前予約が必要です。（金曜日の17時まで）",
    "プランにより最低利用人数があります。1名で宿泊したい場合は、予約前に宿へ直接確認してください。",
    "帰りは弥栄病院前で約1時間の乗り継ぎ待ちがあります。",
  ],

  noteUrl: "",

  modelCourse: [
    {
      time: "1日目 14:00",
      title: "峰山駅 出発",
      detail:
        "丹海バス間人循環線に乗車し、弥栄病院前へ向かいます。",
    },
    {
      time: "14:14",
      title: "弥栄病院前 到着",
      detail:
        "丹海バスを下車。京丹後市営バス弥栄延利線に乗り換えます。乗り換え時間は12分です。",
    },
    {
      time: "14:26",
      title: "弥栄病院前 出発",
      detail:
        "京丹後市営バス弥栄延利線に乗車し、山間部の須川へ向かいます。",
    },
    {
      time: "15:00",
      title: "須川バス停 到着",
      detail:
        "市営バスを下車。ここから農家民泊 温古里（ほっこり）まで徒歩で向かいます。",
    },
    {
      time: "15:00〜15:13",
      title: "須川 → 農家民泊 温古里",
      detail:
        "生活道路を約900m、約13分歩きます。",
    },
    {
      time: "15:13頃",
      title: "農家民泊 温古里（ほっこり） 到着",
      detail:
        "山奥にある1日1組限定の古民家宿で1泊します。",
    },
    {
      time: "2日目 8:25",
      title: "農家民泊 温古里（ほっこり） 出発",
      detail:
        "須川バス停へ向けて徒歩で出発します。約900m、所要約13分です。",
    },
    {
      time: "8:38",
      title: "須川バス停 到着",
      detail:
        "8:51発の京丹後市営バス弥栄延利線を待ちます。",
    },
    {
      time: "8:51",
      title: "須川バス停 出発",
      detail:
        "京丹後市営バス弥栄延利線に乗車し、弥栄病院前へ向かいます。",
    },
    {
      time: "9:25",
      title: "弥栄病院前 到着",
      detail:
        "ここで丹後峰山線に乗り換えます。次のバスまで約1時間の待ち時間があります。",
    },
    {
      time: "10:26",
      title: "弥栄病院前 出発",
      detail:
        "京丹後市営バス丹後峰山線に乗車し、峰山駅へ向かいます。",
    },
    {
      time: "10:39",
      title: "峰山駅 到着",
      detail:
        "峰山駅に到着。車なし1泊2日の旅は終了です。",
    },
  ],

  checklist: [
    "履きなれた靴",
    "飲み物",
    "現金",
    "雨具",
    "宿泊に必要な荷物",
    "バスの最新時刻表",
    "土日祝日に利用する場合は弥栄延利線の予約確認",
    "1名利用の場合は宿への事前確認",
  ],

  demandTransport: {
    available: false,
    routeName: "",
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

  costs: [],

  route: [
    {
      icon: "🚌",
      place: "峰山駅",
      detail:
        "14:00発の丹海バス間人循環線で弥栄病院前へ向かいます。",
    },
    {
      icon: "🔄",
      place: "弥栄病院前",
      detail:
        "14:14着。14:26発の京丹後市営バス弥栄延利線に乗り換えます。",
    },
    {
      icon: "🚌",
      place: "弥栄病院前 → 須川",
      detail:
        "弥栄延利線で山間部へ入り、15:00に須川バス停へ到着します。",
    },
    {
      icon: "🚏",
      place: "須川バス停",
      detail:
        "ここが農家民泊 温古里へ向かう徒歩ルートの入口です。",
    },
    {
      icon: "🚶",
      place: "須川バス停 → 農家民泊 温古里",
      detail:
        "約900m、約13分歩きます。",
    },
    {
      icon: "🏠",
      place: "農家民泊 温古里（ほっこり）",
      detail:
        "山奥にある1日1組限定の古民家宿に宿泊します。",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=農家民泊+温古里+京都府京丹後市弥栄町須川419&output=embed",

  busFrequency: "1日4便",

  convenienceStore: "なし",

  toilet: "あり（宿）",

  signal: "不明",

  vendingMachine: "なし",

  restaurant: "なし",

  stayTime: "1泊2日",

  recommendedItems: [
    "履きなれた靴",
    "飲み物",
    "現金",
    "雨具",
    "宿泊用品",
  ],

  warnings: [
    "プランにより最低利用人数があります。2食付きは2名から、素泊まりは3名からが基本です。人数は相談可能です。",
    "1名で宿泊する場合は、予約前に宿へ直接確認してください。",
    "土日祝日の弥栄延利線は予約運行のため、事前予約が必要です。",
    "須川バス停から宿まで約900m、約13分歩きます。",
    "バスの本数が少ないため、乗り遅れに注意してください。",
    "帰路は弥栄病院前で9:25から10:26まで約1時間の乗り継ぎ待ちがあります。",
    "宿周辺には商店やコンビニがほとんどないため、必要なものは事前に準備してください。",
    "時刻表、運行情報、宿泊条件は出発前に最新情報を確認してください。",
  ],
},
];