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
    difficultyReasons: [
  "公共交通の本数が少ない",
  "予約制交通の利用が必要で、運行日が限定されている",
  "徒歩の区間が10キロ以上ある",

],
    routeEntrance: "飯田駅",
    visited: true,
    lastChecked: "2026年8月31日",
    officialTransportUrl: "https://www.city.iida.lg.jp/soshiki/10/p0182.html",
  
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
    returnRoute: [
  {
    icon: "🚶",
    place: "下栗の里",
    detail: "下栗の里から約12km歩いて道の駅遠山郷を目指します。",
  },
  {
    icon: "🚏",
    place: "道の駅遠山郷",
    detail: "ここから平岡行きの乗合タクシーに乗車",
  },
  {
    icon: "🏁",
    place: "平岡駅",
    detail: "平岡駅に到着。ここから飯田線で帰路に就きます",
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
    difficulty: "★★★☆☆",
　　difficultyLevel: 3,
　　difficultyReasons: [
  "公共交通の本数が少ない",
  "予約制交通の利用が必要",

],
   routeEntrance: "日向市駅",
   visited: true,
   lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.vill.shiiba.miyazaki.jp/promote/bus.php",

  
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
    returnRoute: [
  {
    icon: "🚕",
    place: "椎葉村",
    detail: "デマンドタクシーに乗車し、おし谷へ向かいます。",
  },
  {
    icon: "🚏",
    place: "おし谷",
    detail: "デマンドタクシーから路線バスに乗り換えます。",
  },
  {
    icon: "🚌",
    place: "おし谷 → 日向市駅",
    detail: "路線バスに乗車し、日向市駅へ向かいます。",
  },
  {
    icon: "🏁",
    place: "日向市駅",
    detail: "日向市駅に到着です。",
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
  difficulty: "★★☆☆☆",
  difficultyLevel: 2,
  difficultyReasons: [
  "目的地まで公共交通で行ける",
  "予約制交通の利用が必要",
  "徒歩の区間がほぼない",

],
  routeEntrance: "信濃森上駅",
  visited: true,
lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.vill.hakuba.lg.jp/gyosei/gyoseijoho/mizikanachiikikotsu/hakubademanndo/index.html",

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
  returnRoute: [
  {
    icon: "🚕",
    place: "青鬼集落",
    detail: "予約したデマンド交通に乗車し、信濃森上駅へ向かいます。",
  },
  {
    icon: "🏁",
    place: "信濃森上駅",
    detail: "信濃森上駅に到着です。",
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
  difficultyReasons: [
  "公共交通で目的地まで行ける",
  "2つのバスの乗り継ぎで1時間のロスタイムがある",
],
  routeEntrance: "大歩危駅",
  visited: true,
lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.miyoshi.i-tokushima.jp/kurashi/kotsu/shiei-bus/",


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
  "奥祖谷二重かずら橋は季節限定運行。運行日に注意。",
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
    detail: "路線バス（四国交通）でホテル秘境の湯へ向かう",
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
      detail: "祖谷方面の路線バス（四国交通：久保行き）に乗車",
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
  returnRoute: [
  {
    icon: "🚌",
    place: "祖谷渓",
    detail: "市営バスに乗車し、久保バス停へ向かいます。",
  },
  {
    icon: "🔄",
    place: "久保バス停",
    detail: "市営バスからかずら橋ゆめ舞台行きの路線バスに乗り換えます。（かずら橋ゆめ舞台に到着後、大歩危駅方面行になります）",
  },
  {
    icon: "🏁",
    place: "大歩危駅",
    detail: "大歩危駅に到着です。無人駅なのであらかじめ乗車券や特急券を買っておきましょう",
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
  difficultyReasons: [
  "公共交通の本数が少ない",
  "予約制交通の利用が必要",
  "徒歩の区間がない",
  "予約制交通とバスがきちんと接続されている",

],
  routeEntrance: "津南駅",
  visited: true,
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.town.tsunan.niigata.jp/soshiki/somu/koukyoukoutsuu.html",


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
  returnRoute: [
  {
    icon: "🚕",
    place: "切明温泉",
    detail: "切明温泉からデマンドタクシーに乗車し、津南役場前へ向かいます。",
  },
  {
    icon: "🚏",
    place: "津南役場前",
    detail: "デマンドタクシーを下車。ここから津南駅まで徒歩で向かいます。",
  },
  {
    icon: "🚶",
    place: "津南役場前 → 津南駅",
    detail: "津南役場前から津南駅まで歩きます。",
  },
  {
    icon: "🏁",
    place: "津南駅",
    detail: "津南駅に到着です。津南駅は無人駅なのであらかじめ乗車券を買っておくか、降りるときに精算します。",
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
  difficulty: "★★☆☆☆",
  difficultyLevel: 2,
  difficultyReasons: [
  "目的地まで公共交通のみで行ける",
  "予約制交通の利用が必要",
  "山奥のため虫が多い",
],
  routeEntrance: "中村駅",
  visited: true,
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.city.shimanto.lg.jp/soshiki/3/1348.html",


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
  returnRoute: [
  {
    icon: "🚕",
    place: "寝つきいいきつね",
    detail: "予約したデマンドバスに乗車し、中村駅へ向かいます。",
  },
  {
    icon: "🏁",
    place: "中村駅",
    detail: "中村駅に到着です。",
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
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.town.tokushima-tsurugi.lg.jp/docs/3550.html",


  walking: "3.6km",
  walkingDistance: 3.6,

  train: "徳島駅からJR徳島線で貞光駅へ",

  difficulty: "★★★★☆",
  difficultyLevel: 4,
  difficultyReasons: [
  "公共交通の本数が少ない",
  "行き帰り必ず徒歩の区間がある",
],

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
        "つるぎ町コミュニティバスで到着。ここから徒歩約3.6km。細い一本の山道を約1時間歩いて宿へ向かいます",
    },
    {
      icon: "🏠",
      place: "雲上の民宿 家曽敷",
      detail: "宿に到着",
    },
  ],
returnRoute: [
  {
    icon: "🚶",
    place: "雲上の民宿 家曽敷",
    detail: "宿を出発。細い一本の山道を約3.6km、約1時間歩いて八面橋バス停へ向かいます。",
  },
  {
    icon: "🚏",
    place: "八面橋バス停",
    detail: "八面橋バス停に到着。ここから貞光行きのつるぎ町コミュニティバスに乗車します。",
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
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.city.asago.hyogo.jp/site/demandkotsu/",

  walking: "750m",
  walkingDistance: 0.75,

  train: "姫路駅からJR播但線で生野駅へ",

  difficulty: "★★★☆☆",
  difficultyLevel: 3,
  difficultyReasons: [
  "予約制交通の利用が必要だが1時間に1本の割合である",
  "1キロ以下の徒歩区間がある",
],

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
returnRoute: [
  {
    icon: "🚶",
    place: "せせらぎ荘",
    detail: "せせらぎ荘を出発。山間の道を約750m、約11分歩いて黒川簾野公民館へ向かいます。",
  },
  {
    icon: "🚏",
    place: "黒川簾野公民館",
    detail: "事前予約したデマンド型乗合交通「あさGO」に乗車します。",
  },
  {
    icon: "🚐",
    place: "黒川簾野公民館 → 生野駅",
    detail: "「あさGO」で黒川地区から生野駅へ向かいます。",
  },
  {
    icon: "🏁",
    place: "生野駅",
    detail: "生野駅に到着です。",
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
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.town.niyodogawa.lg.jp/download/?t=LD&id=1490&fid=21446",

  walking: "6km",
  walkingDistance: 6,

  train: "高知駅からJR土讃線特急で佐川駅へ",

  difficulty: "★★★★★",
  difficultyLevel: 5,
  difficultyReasons: [
  "公共交通の本数が少ない",
  "予約制交通の利用が必要",
  "予約制交通の運行曜日が金曜日だけ",
  "公共交通のみでの日帰りが困難",
],

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
     ],

    returnRoute: [
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
        "11:05到着。1泊2日の旅が終了です。",
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
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.vill.kawakami.nara.jp/life/docs/2017012700017/file_contents/heizitsu.pdf",

  walking: "2.3km",
  walkingDistance: 2.3,

  difficulty: "★★★☆☆",
  difficultyLevel: 3,
difficultyReasons: [
  "公共交通の本数が少ない",
  "徒歩の区間がある",
  "予約制に交通の利用はない",
],

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

  returnRoute: [
  {
    icon: "🚶",
    place: "暮らす宿 HANARE",
    detail: "10:20頃に宿を出発。白川渡バス停まで約2.3km、約30分歩きます。",
  },
  {
    icon: "🚏",
    place: "白川渡バス停",
    detail: "10:50頃到着。11:01発の川上村コミュニティバスやまぶきバス（大和上市駅まで行きません）に乗車します。",
  },
  {
    icon: "🚌",
    place: "白川渡 → 湯盛温泉杉の湯",
    detail: "11:01発のやまぶきバスに乗車し、11:18に湯盛温泉杉の湯へ到着します。",
  },
  {
    icon: "♨️",
    place: "湯盛温泉杉の湯",
    detail: "11:18。温泉や昼食を楽しみ、13:30発のやまぶきバス（大和上市駅行き）に乗車します。",
  },
  {
    icon: "🚌",
    place: "湯盛温泉杉の湯 → 大和上市駅",
    detail: "13:30発のやまぶきバスに乗車し、14:12に大和上市駅へ到着します。",
  },
  {
    icon: "🏁",
    place: "大和上市駅",
    detail: "14:12到着。車なしでの暮らす宿 HANAREへの1泊2日の旅は終了です。",
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
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.city.kyotango.lg.jp/material/files/group/4/jikkuhyou0803.pdf",

  walking: "900m",
  walkingDistance: 0.9,

  difficulty: "★★★★☆",
  difficultyLevel: 4,
  difficultyReasons: [
  "公共交通の本数が少ない",
  "予約制交通の利用が必要",
  "バス同士の乗り継ぎで1時間の待ちがある",
  "1キロ以下の徒歩区間あり",
],

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
],

returnCourse: [
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
        "市営バス弥栄延利線で山間部へ入り、15:00に須川バス停へ到着します。",
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
  returnRoute: [
  {
    icon: "🏠",
    place: "農家民泊 温古里（ほっこり）",
    detail:
      "8:25頃に宿を出発し、須川バス停へ向かいます。",
  },
  {
    icon: "🚶",
    place: "農家民泊 温古里 → 須川バス停",
    detail:
      "約900m、約13分歩きます。",
  },
  {
    icon: "🚏",
    place: "須川バス停",
    detail:
      "8:38頃到着。8:51発の京丹後市営バス弥栄延利線を待ちます。",
  },
  {
    icon: "🚌",
    place: "須川 → 弥栄病院前",
    detail:
      "8:51発の弥栄延利線に乗車し、9:25に弥栄病院前へ到着します。",
  },
  {
    icon: "⏳",
    place: "弥栄病院前",
    detail:
      "次のバスまで約1時間待ちます。10:26発の丹後峰山線に乗り換えます。",
  },
  {
    icon: "🚌",
    place: "弥栄病院前 → 峰山駅",
    detail:
      "10:26発の京丹後市営バス丹後峰山線に乗車します。",
  },
  {
    icon: "🏁",
    place: "峰山駅",
    detail:
      "10:39到着。車なし1泊2日の旅は終了です。",
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
{
  id: 12,
  name: "民宿 平家荘",
  prefecture: "熊本県",
  visited: false,
  lastChecked: "2026年8月31日",
officialTransportUrl: "https://www.sankobus.jp/",

  walking: "基本ルートは徒歩移動ほぼなし",
  walkingDistance: 0,

  difficulty: "★★★★★",
  difficultyLevel: 5,
  difficultyReasons: [
  "予約制交通の利用が必要",
  "予約制交通は地元民優先のため乗れない場合がある",
],

  routeEntrance: "砥用中央バス停",

  image: "/images/heikeso.jpg",

  access:
    "松橋駅から産交バスで砥用方面へ向かい、原町駐車場（砥用中央）から美里町民バスに乗り換えて下津留へ。下津留から、事前にドライバーと調整した「ごかぐるま」で五家荘の民宿 平家荘へ向かいます。",

  memo:
    "熊本県八代市泉町葉木、五家荘にある山間の民宿。公共交通だけでは直接到達できないため、美里町側から町民バスと「ごかぐるま」を組み合わせることで車なしで向かうモデルコースです。",

  pitfalls: [
    "「ごかぐるま」は地域住民の利用が優先されます。",
    "観光客も利用できますが、利用前に必ずドライバーとの調整が必要です。",
    "希望する日時に「ごかぐるま」を利用できるとは限りません。",
    "バスと「ごかぐるま」の接続時間が短いため、予約時に乗車場所と時間を十分に確認してください。",
    "公共交通の時刻や運行日は変更される場合があります。出発前に最新情報を確認してください。",
  ],

  noteUrl: "",

  modelCourse: [],

  returnCourse: [],

  checklist: [
    "現金",
    "飲み物",
    "雨具",
    "宿泊に必要な荷物",
    "産交バスの最新時刻表",
    "美里町民バスの最新時刻表",
    "ごかぐるまの事前調整・予約確認",
    "民宿 平家荘の宿泊予約",
  ],

  demandTransport: {
    available: true,
    routeName: "ごかぐるま（予約制の地域交通）",
    boardingPlace: "下津留",
    dropoffPlace: "民宿 平家荘",
    frequency: "事前調整",
    fare: "未確認",
    reservationRequired: true,
    reservationDeadline: "未確認",
    reservationMethod: "事前にドライバーへ連絡",
    reservationContact: "",
    note:
      "地域住民の利用が優先されます。車両の運行状況等により、希望日時に利用できない場合があります。",
  },

  costs: [],

  routeAlternatives: [
  {
    title: "🚌 町民バスを利用するルート",
    description: "徒歩を抑えて向かう基本ルート",
    route: [
      {
        icon: "🚌",
        place: "松橋駅",
        detail:
          "13:52発。産交バスの砥用中央行きに乗車します。",
      },
      {
        icon: "🚏",
        place: "砥用中央",
        detail:
          "14:33着。ここで町民バス乗り場である原町駐車場へ向かいます。",
      },
      {
        icon: "🚌",
        place: "原町駐車場",
        detail:
          "15:12発。美里町民バスに乗車して下津留へ向かいます。",
      },
      {
        icon: "🚏",
        place: "下津留",
        detail:
          "15:40着。事前にドライバーと調整した「ごかぐるま」に乗り継ぎます。",
      },
      {
        icon: "🚐",
        place: "下津留 → 民宿 平家荘",
        detail:
          "15:40発。「ごかぐるま」で五家荘へ向かいます。",
      },
      {
        icon: "🏠",
        place: "民宿 平家荘",
        detail:
          "16:10着。民宿 平家荘に到着します。",
      },
    ],
  },

  {
    title: "🚶 徒歩で向かうルート",
    description:
      "砥用五反田から下津留まで約1時間10分歩いて向かうルート",
    route: [
      {
        icon: "🚌",
        place: "松橋駅",
        detail:
          "12:00発。産交バスの砥用中央行きに乗車します。",
      },
      {
        icon: "🚏",
        place: "砥用五反田",
        detail:
          "12:41着。バスを下車して昼食をとります。",
      },
      {
        icon: "🍚",
        place: "割烹さかぐち",
        detail:
          "昼食をとり、徒歩で下津留へ向かう準備をします。",
      },
      {
        icon: "🚶",
        place: "砥用五反田 → 下津留",
        detail:
          "13:30出発。下津留まで約1時間10分歩きます。",
      },
      {
        icon: "🚏",
        place: "下津留",
        detail:
          "14:40着。事前にドライバーと調整した「ごかぐるま」に乗り継ぎます。",
      },
      {
        icon: "🚐",
        place: "下津留 → 民宿 平家荘",
        detail:
          "14:40発。「ごかぐるま」で五家荘へ向かいます。",
      },
      {
        icon: "🏠",
        place: "民宿 平家荘",
        detail:
          "15:10着。民宿 平家荘に到着します。",
      },
    ],
  },
],
  route: [
    {
      icon: "🚌",
      place: "松橋駅",
      detail:
        "12:00発。産交バスの砥用中央行きに乗車します。",
    },
    {
      icon: "🚏",
      place: "砥用五反田",
      detail:
        "12:41着。ここで昼食をとるなどして時間を調整します。",
    },
    {
      icon: "🍚",
      place: "砥用地区",
      detail:
        "昼食後、原町駐車場（砥用中央）から美里町民バスに乗車できるよう準備します。",
    },
    {
      icon: "🚌",
      place: "原町駐車場（砥用中央）",
      detail:
        "15:12発。美里町民バスに乗車し、下津留へ向かいます。",
    },
    {
      icon: "🚏",
      place: "下津留",
      detail:
        "15:40着。事前にドライバーと調整した「ごかぐるま」に乗り継ぎます。",
    },
    {
      icon: "🚐",
      place: "下津留 → 民宿 平家荘",
      detail:
        "15:40発。「ごかぐるま」で五家荘へ向かいます。",
    },
    {
      icon: "🏠",
      place: "民宿 平家荘",
      detail:
        "16:10着。五家荘の山間にある民宿で1泊します。",
    },
  ],

  returnRoute: [
    {
      icon: "🚐",
      place: "民宿 平家荘",
      detail:
        "8:20発。事前にドライバーと調整した「ごかぐるま」で下津留へ向かいます。",
    },
    {
      icon: "🚏",
      place: "下津留",
      detail:
        "8:50着。9:00発の美里町民バスに乗り換えます。",
    },
    {
      icon: "🚌",
      place: "下津留 → 原町駐車場（砥用中央）",
      detail:
        "9:00発。美里町民バスに乗車し、9:28に原町駐車場（砥用中央）へ到着します。",
    },
    {
      icon: "🔄",
      place: "原町駐車場（砥用中央）",
      detail:
        "9:28着。9:48発の産交バス松橋駅行きに乗り換えます。",
    },
    {
      icon: "🚌",
      place: "原町駐車場（砥用中央） → 松橋駅",
      detail:
        "9:48発。産交バスに乗車し、松橋駅へ向かいます。",
    },
    {
      icon: "🏁",
      place: "松橋駅",
      detail:
        "10:33着。車なしでのの旅は終了です。",
    },
  ],

  mapUrl:
    "https://www.google.com/maps?q=民宿+平家荘+熊本県八代市泉町葉木26&output=embed",

  busFrequency: "本数少・ごかぐるまは事前調整",
  convenienceStore: "なし",
  toilet: "あり（宿）",
  signal: "不明",
  vendingMachine: "不明",
  restaurant: "宿で食事可能",
  stayTime: "1泊2日",

  recommendedItems: [
    "現金",
    "飲み物",
    "雨具",
    "宿泊用品",
  ],

  warnings: [
    "「ごかぐるま」は地域住民の利用が優先されます。",
    "観光客も利用できますが、利用する場合は事前にドライバーとの調整が必要です。",
    "「ごかぐるま」は現在1台のみで運行です。キャパシティの超過により希望通りの乗車ができない場合があります。",
    "「ごかぐるま」を利用する前提で、必ず乗車場所・乗車時刻・目的地を事前に確認してください。",
    "バスの本数が少ないため、乗り遅れると旅程が成立しなくなる可能性があります。",
    "五家荘周辺には商店やコンビニがほとんどないため、必要なものは事前に準備してください。",
  ],
},
{
  id: 13,
  name: "民宿ますたろう荘",
  prefecture: "宮崎県",
  visited: false,

  lastChecked: "2026年9月3日",
  officialTransportUrl: "https://www.town.hinokage.lg.jp/docs/2016020200106/file_contents/hinokage_koutu.pdf",

  walking: "行き約1.7km・帰り約15km",
  walkingDistance: 16.7,

  difficulty: "★★★★★",
  difficultyLevel: 5,
  difficultyReasons: [
    "公共交通の本数が非常に少ない",
    "すまいるバス見立線は運行曜日が限られている",
    "すまいるバス見立線は事前予約が必要",
    "行きは赤川バス停から宿まで約1.7km、帰りは道の駅青雲橋まで約15kmの長距離徒歩が必要",
    ],

  routeEntrance: "日之影町立病院",

  image: "/images/masutarousou.jpg",

  access:
    "延岡駅から宮崎交通の高千穂バスセンター行きで日之影町立病院へ向かい、予約制のすまいるバス見立線に乗り換えて赤川で下車。赤川バス停から約1.7km歩いて民宿ますたろう荘へ向かいます。",

  memo:
    "宮崎県日之影町の山深い見立地区にある民宿。行きは曜日限定・予約制のすまいるバス見立線を利用できますが、帰りは民宿から道の駅青雲橋まで約15km歩くモデルコースです。",

  pitfalls: [
    "すまいるバス見立線は運行曜日が限られています。",
    "行きの見立線は事前予約が必要です。",
    "行きは赤川バス停から民宿まで約1.7km、帰りは民宿から道の駅青雲橋まで約15km歩く必要があります。",
    "山間部を長時間歩くため、天候や体調を考慮して計画してください。",
    ],
      noteUrl: "",

  modelCourse: [],

  returnCourse: [],

  checklist: [
    "現金",
    "飲み物",
    "雨具",
    "歩きやすい靴",
    "宿泊に必要な荷物",
    "すまいるバス見立線の予約確認",
    "宮崎交通の最新時刻表",
    "すまいるバス見立線の最新時刻表",
    "民宿ますたろう荘の宿泊予約",
  ],

  route: [
    {
      icon: "🚌",
      place: "延岡駅",
      detail:
        "14:00発。宮崎交通の高千穂バスセンター行きに乗車します。",
    },
    {
      icon: "🚏",
      place: "日之影町立病院",
      detail:
        "14:57着。すまいるバス見立線に乗り換えます。",
    },
    {
      icon: "🚌",
      place: "日之影町立病院",
      detail:
        "15:30発。事前予約したすまいるバス見立線の奥村行きに乗車します。",
    },
    {
      icon: "🚏",
      place: "赤川",
      detail:
        "16:31着。ここから民宿ますたろう荘まで徒歩で向かいます。",
    },
    {
      icon: "🚶",
      place: "赤川 → 民宿ますたろう荘",
      detail:
        "赤川バス停から約1.7km歩きます。",
    },
    {
      icon: "🏠",
      place: "民宿ますたろう荘",
      detail:
        "17:00着。民宿ますたろう荘で1泊します。",
    },
  ],
    returnRoute: [
    {
      icon: "🚶",
      place: "民宿ますたろう荘 → 道の駅青雲橋",
      detail:
        "8:00発。道の駅青雲橋まで約15km歩きます。",
    },
    {
      icon: "🏁",
      place: "道の駅青雲橋",
      detail:
        "11:30着。ここで昼食と休憩をとります。",
    },
    {
      icon: "🚌",
      place: "青雲橋",
      detail:
        "12:45発。宮崎交通の延岡駅行きに乗車します。",
    },
    {
      icon: "🏁",
      place: "延岡駅",
      detail:
        "13:49着。車なしでの旅は終了です。",
    },
  ],
    demandTransport: {
    available: true,
    routeName: "すまいるバス見立線",
    boardingPlace: "日之影町立病院",
    dropoffPlace: "赤川",
    frequency: "月・水・金曜日",
    fare: "300円",
    reservationRequired: true,
    reservationDeadline: "前日の17時まで",
    reservationMethod: "事前予約",
    reservationContact: "",
    note:
      "見立線は運行曜日が限られています。利用前に最新の運行日・時刻・予約方法を確認してください。",
  },

  costs: [],
    mapUrl:
    "https://www.google.com/maps?q=民宿ますたろう荘+宮崎県日之影町&output=embed",

  busFrequency: "見立線は月・水・金曜日に上り3便、下り2便ずつ",
  convenienceStore: "なし",
  toilet: "あり（宿・道の駅青雲橋）",
  signal: "要確認",
  vendingMachine: "道の駅のみ",
  restaurant: "なし",
  stayTime: "1泊2日",

  recommendedItems: [
    "現金",
    "飲み物",
    "雨具",
    "歩きやすい靴",
    "モバイルバッテリー",
    "半そでシャツとウィンドブレーカー服装",
  ],

  warnings: [
    "すまいるバス見立線は月・水・金曜日の運行です。",
    "すまいるバス見立線は事前予約が必要です。",
    "行きは赤川バス停から民宿ますたろう荘まで約1.7km歩きます。",
    "帰りは民宿ますたろう荘から道の駅青雲橋まで約15km歩くモデルコースです。",
    "約15kmの長距離徒歩となるため、天候・体調・日没時刻を十分に考慮してください。",
    "山間部にはコンビニなどがないため、必要な飲み物や携行品は事前に準備してください。",
    "公共交通の時刻・運行日・予約条件は変更される場合があります。出発前に最新情報を確認してください。",
  ],
},
];