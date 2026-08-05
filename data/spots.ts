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
    recommendedItems: [
  "飲み物",
  "食べ物",
  "歩きやすい靴",
  "レインコートなどの雨具",
],
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
modelCourse: [
  "07:00 新宿駅 出発（特急あずさ）",
  "09:13 上諏訪駅 到着",
  "09:22 飯田線へ乗り換え",
  "12:18 飯田駅 到着（バスまでの時間を利用してランチ）",
  "13:30 「かぐらの湯」行きのバスに乗車（信南交通）",
  "14:34 学校前バス停 到着",
  "14:40 デマンドタクシー乗車",
  "15:00 下栗の里 到着",
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
        icon: "🚅",
        place: "新宿駅",
        detail: "新宿駅から中央線特急で上諏訪駅へ",
      },
      {
        icon: "🚃",
        place: "上諏訪駅",
        detail: "上諏訪駅から飯田線で飯田駅へ",
      },
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
    image: "/images/shiiba.JPG",
    access: "日向市駅 → 路線バス → 椎葉村",
    memo: "バスの本数が1日2本と少ないため、事前に時刻表を確認しておくと安心です。",
    pitfalls: [
  "バスの本数が少ない",
  "村の中心部までは予約制タクシーの利用が必要",
  "宮交バス1日乗車券がお得",
  "村の中の村営バスは現金支払いのみ",
],

modelCourse: [
  "13:09 宮崎空港駅 出発（特急ひゅうが4号）",
  "14:19 日向市駅 到着",
  "15:08 日向市駅東口から宮交バス上椎葉行き乗車（現在は途中のおし谷止まり）",
  "17:06 おし谷バス停 到着　デマンドタクシーに乗り換え",
  "17:18 旧岩屋戸バス停 到着　徒歩で民宿へ",
  "17:30 民宿 到着",
],

checklist: [
  "現金（特に小銭）",
  "飲み物",
  "雨具",
  "モバイルバッテリー",
  "歩きやすい靴",
],

costs: [
  { item: "宮崎空港から日向市の乗車券代", price: "1,640円" },
  { item: "特急ひゅうが指定券代", price: "1,530円" },
  { item: "日向市駅東口から旧岩屋戸のバス代", price: "約2,200円" },
  { item: "民宿孫兵衛 宿泊代", price: "9,900円" },
  { item: "合計", price: "15,270円" },
],
    route: [
      {
        icon: "🚆",
        place: "羽田空港",
        detail: "日豊本線で日向市駅へ",
      },
      {
        icon: "🚌",
        place: "日向市駅",
        detail: "椎葉村方面の路線バスに乗車",
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
  image: "/images/aoni.JPG",
  access: "信濃森上駅 → デマンド交通 → 青鬼集落",
  memo: "デマンド交通は事前予約が必要です。アプリから予約することができます。",
  pitfalls: [
  "デマンドタクシーは事前予約が必要",
  "集落入口にあるマップで立ち入っていいところをチェック",
  "集落に食事ができるお店はない",
  
],

modelCourse: [
  "10:00 新宿駅 出発（特急あずさ松本行き）",
  "12:37 松本駅 到着(乗り換え時間を利用してランチ)",
  "14:11 松本駅 出発（大糸線普通信濃大町行き）",
  "15:07 信濃大町駅 到着",
  "信濃大町駅前のルートインで前泊 ",
  "7:06 信濃大町駅 出発（大糸線普通南小谷行き）",
  "7:49 信濃森上駅 到着",
  "8:00 デマンドタクシー乗車",
  "8:15 青鬼集落 到着",
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
      icon: "🚆",
      place: "松本駅",
      detail: "大糸線で信濃森上駅へ",
    },
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
  image: "/images/iya.jpg",
  access: "阿波池田駅 → 路線バス（四国交通から市営バスへの乗り継ぎあり） → 祖谷渓",
  memo: "バスの乗り継ぎ時刻を調べないとバス停で1時間以上待たされます。",
pitfalls: [
  "路線バス同士の乗り継ぎ必須",
  "道は狭いが交通量が多い",
  "移動時間が長い",
  "歩きやすい靴がおすすめ",
],

modelCourse: [
  "13:05 岡山駅 出発（特急南風高知行き）",
  "14:41 大歩危駅 到着",
  "路線バスでホテル秘境の湯へ向かう（前泊）",
  "9:12 ホテル秘境の湯 出発（路線バスかずら橋ゆめ舞台行き）",
  "10:16 落合橋バス停 到着 歩いて東祖谷集落展望台へ",
  "11:30 展望台から久保バス停へ歩いて出発",
  "13:18 久保バス停 出発（三好市営バス）",
  "13:50 奥祖谷二重かずら橋 到着",
],

checklist: [
  "履きなれた靴",
  "食べ物",
  "現金（新500円玉や新1000円札を除く）",
  "レインコート",
],

costs: [
  { item: "岡山駅から大歩危駅乗車券代", price: "2,410円" },
  { item: "特急南風号の指定券代", price: "2,390円" },
  { item: "大歩危から奥祖谷二重かずら橋までのバス代（久保バス停乗り換え）", price: "1,430円" },
  { item: "合計", price: "6,230円" },
  ],
  route: [
    {
      icon: "🚆",
      place: "岡山駅",
      detail: "特急南風で高知方面に移動",
    },
    {
      icon: "🚌",
      place: "大歩危駅",
      detail: "祖谷方面の路線バスに乗車",
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

  image: "/images/akiyama.JPG",

  access:
    "東京駅 → 飯山駅 → 津南駅 → 見玉行きバス → 切明温泉",

  memo:
    "バスと飯山駅から津南駅への列車の本数が非常に少ないが、徒歩の区間がほとんどないため初めてでも簡単に行ける。",
pitfalls: [
  "デマンド交通は予約が必要",
  "宿泊できる場所が限られている",
],

modelCourse: [
  "8:48 東京駅 出発（上越新幹線とき309号新潟行き）",
  "10:20 越後湯沢駅 到着（ほくほく線に乗り換え）",
  "10:41 越後湯沢駅 出発（ほくほく線 普通直江津行き）",
  "11:18 十日町駅 到着（飯山線に乗り換え）",
  "11:43 十日町駅 出発（飯山線 普通長野行き）",
  "12:10 津南駅 到着（バスまでの時間を利用してランチ）",
  "歩いて津南役場へ向かう（約30分）",
  "14:14 津南役場前バス停 出発（路線バス見玉行きに乗車）",
  "14:35 見玉バス停に到着　デマンドタクシーに乗り換え",
  "15:30 切明温泉 到着",
],

checklist: [
  "現金（特に小銭）",
  "ポケットWi-Fi",
],

costs: [
  { item: "東京駅から津南駅までの乗車券代", price: "4,580円" },
  { item: "新幹線指定席代", price: "3,580円" },
  { item: "津南役場前から見玉までのバス代", price: "380円" },
  { item: "デマンドタクシー代", price: "300円" },
  { item: "合計", price: "8,840円" },
],
  route: [
    {
      icon: "🚄",
      place: "上野駅",
      detail: "上越新幹線で越後湯沢駅へ",
    },
    {
      icon: "🚄",
      place: "越後湯沢駅",
      detail: "北越急行で十日町駅へ",
    },
    {
      icon: "🚄",
      place: "十日町駅",
      detail: "十日町駅から飯山線で津南駅へ",
    },
    {
      icon: "🚄",
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

modelCourse: [
  "8:20 高知駅 出発（特急あしずり中村行き）",
  "10:04 中村駅 到着（レンタサイクルで観光と食料の買いこみ）",
  "14:00 中村駅からデマンドバスに乗車 古民家でゆったり滞在",
  "14:30 寝つきいいキツネ 到着",
],

checklist: [
  "履きなれた靴",
  "食べ物と飲み物",
  "パジャマ",
  "現金（特に小銭）",
],

costs: [
  { item: "高知駅から中村駅乗車券代", price: "2,750円" },
  { item: "特急あしずり指定席代", price: "2,360円" },
  { item: "デマンドバス代", price: "300円" },
  { item: "宿泊代", price: "17,000円" },
  { item: "合計", price: "22,410円" },
  ],
  route: [
    {
      icon: "🚄",
      place: "羽田空港",
      detail: "飛行機で高知空港へ",
    },
    {
      icon: "🚄",
      place: "高知空港",
      detail: "連絡バスで高知駅へ",
    },
    {
      icon: "🚆",
      place: "高知駅",
      detail: "普通列車で中村駅へ（途中窪川駅で乗り換え）",
    },
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