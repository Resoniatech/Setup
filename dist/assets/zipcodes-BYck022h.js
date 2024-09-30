const i=[{id:"臺北市",name:"臺北市"},{id:"基隆市",name:"基隆市"},{id:"新北市",name:"新北市"},{id:"宜蘭縣",name:"宜蘭縣"},{id:"新竹市",name:"新竹市"},{id:"新竹縣",name:"新竹縣"},{id:"桃園市",name:"桃園市"},{id:"苗栗縣",name:"苗栗縣"},{id:"臺中市",name:"臺中市"},{id:"彰化縣",name:"彰化縣"},{id:"南投縣",name:"南投縣"},{id:"嘉義市",name:"嘉義市"},{id:"嘉義縣",name:"嘉義縣"},{id:"雲林縣",name:"雲林縣"},{id:"臺南市",name:"臺南市"},{id:"高雄市",name:"高雄市"},{id:"澎湖縣",name:"澎湖縣"},{id:"屏東縣",name:"屏東縣"},{id:"臺東縣",name:"臺東縣"},{id:"花蓮縣",name:"花蓮縣"},{id:"金門縣",name:"金門縣"},{id:"連江縣",name:"連江縣"}],c=[{id:"100臺北市中正區",zipcode:100,county:"臺北市",city:"中正區"},{id:"103臺北市大同區",zipcode:103,county:"臺北市",city:"大同區"},{id:"104臺北市中山區",zipcode:104,county:"臺北市",city:"中山區"},{id:"105臺北市松山區",zipcode:105,county:"臺北市",city:"松山區"},{id:"106臺北市大安區",zipcode:106,county:"臺北市",city:"大安區"},{id:"108臺北市萬華區",zipcode:108,county:"臺北市",city:"萬華區"},{id:"110臺北市信義區",zipcode:110,county:"臺北市",city:"信義區"},{id:"111臺北市士林區",zipcode:111,county:"臺北市",city:"士林區"},{id:"112臺北市北投區",zipcode:112,county:"臺北市",city:"北投區"},{id:"114臺北市內湖區",zipcode:114,county:"臺北市",city:"內湖區"},{id:"115臺北市南港區",zipcode:115,county:"臺北市",city:"南港區"},{id:"116臺北市文山區",zipcode:116,county:"臺北市",city:"文山區"},{id:"200基隆市仁愛區",zipcode:200,county:"基隆市",city:"仁愛區"},{id:"201基隆市信義區",zipcode:201,county:"基隆市",city:"信義區"},{id:"202基隆市中正區",zipcode:202,county:"基隆市",city:"中正區"},{id:"203基隆市中山區",zipcode:203,county:"基隆市",city:"中山區"},{id:"204基隆市安樂區",zipcode:204,county:"基隆市",city:"安樂區"},{id:"205基隆市暖暖區",zipcode:205,county:"基隆市",city:"暖暖區"},{id:"206基隆市七堵區",zipcode:206,county:"基隆市",city:"七堵區"},{id:"207新北市萬里區",zipcode:207,county:"新北市",city:"萬里區"},{id:"208新北市金山區",zipcode:208,county:"新北市",city:"金山區"},{id:"220新北市板橋區",zipcode:220,county:"新北市",city:"板橋區"},{id:"221新北市汐止區",zipcode:221,county:"新北市",city:"汐止區"},{id:"222新北市深坑區",zipcode:222,county:"新北市",city:"深坑區"},{id:"223新北市石碇區",zipcode:223,county:"新北市",city:"石碇區"},{id:"224新北市瑞芳區",zipcode:224,county:"新北市",city:"瑞芳區"},{id:"226新北市平溪區",zipcode:226,county:"新北市",city:"平溪區"},{id:"227新北市雙溪區",zipcode:227,county:"新北市",city:"雙溪區"},{id:"228新北市貢寮區",zipcode:228,county:"新北市",city:"貢寮區"},{id:"231新北市新店區",zipcode:231,county:"新北市",city:"新店區"},{id:"232新北市坪林區",zipcode:232,county:"新北市",city:"坪林區"},{id:"233新北市烏來區",zipcode:233,county:"新北市",city:"烏來區"},{id:"234新北市永和區",zipcode:234,county:"新北市",city:"永和區"},{id:"235新北市中和區",zipcode:235,county:"新北市",city:"中和區"},{id:"236新北市土城區",zipcode:236,county:"新北市",city:"土城區"},{id:"237新北市三峽區",zipcode:237,county:"新北市",city:"三峽區"},{id:"238新北市樹林區",zipcode:238,county:"新北市",city:"樹林區"},{id:"239新北市鶯歌區",zipcode:239,county:"新北市",city:"鶯歌區"},{id:"241新北市三重區",zipcode:241,county:"新北市",city:"三重區"},{id:"242新北市新莊區",zipcode:242,county:"新北市",city:"新莊區"},{id:"243新北市泰山區",zipcode:243,county:"新北市",city:"泰山區"},{id:"244新北市林口區",zipcode:244,county:"新北市",city:"林口區"},{id:"247新北市蘆洲區",zipcode:247,county:"新北市",city:"蘆洲區"},{id:"248新北市五股區",zipcode:248,county:"新北市",city:"五股區"},{id:"249新北市八里區",zipcode:249,county:"新北市",city:"八里區"},{id:"251新北市淡水區",zipcode:251,county:"新北市",city:"淡水區"},{id:"252新北市三芝區",zipcode:252,county:"新北市",city:"三芝區"},{id:"253新北市石門區",zipcode:253,county:"新北市",city:"石門區"},{id:"260宜蘭縣宜蘭市",zipcode:260,county:"宜蘭縣",city:"宜蘭市"},{id:"261宜蘭縣頭城鎮",zipcode:261,county:"宜蘭縣",city:"頭城鎮"},{id:"262宜蘭縣礁溪鄉",zipcode:262,county:"宜蘭縣",city:"礁溪鄉"},{id:"263宜蘭縣壯圍鄉",zipcode:263,county:"宜蘭縣",city:"壯圍鄉"},{id:"264宜蘭縣員山鄉",zipcode:264,county:"宜蘭縣",city:"員山鄉"},{id:"265宜蘭縣羅東鎮",zipcode:265,county:"宜蘭縣",city:"羅東鎮"},{id:"266宜蘭縣三星鄉",zipcode:266,county:"宜蘭縣",city:"三星鄉"},{id:"267宜蘭縣大同鄉",zipcode:267,county:"宜蘭縣",city:"大同鄉"},{id:"268宜蘭縣五結鄉",zipcode:268,county:"宜蘭縣",city:"五結鄉"},{id:"269宜蘭縣冬山鄉",zipcode:269,county:"宜蘭縣",city:"冬山鄉"},{id:"270宜蘭縣蘇澳鎮",zipcode:270,county:"宜蘭縣",city:"蘇澳鎮"},{id:"272宜蘭縣南澳鄉",zipcode:272,county:"宜蘭縣",city:"南澳鄉"},{id:"290宜蘭縣釣魚臺列嶼",zipcode:290,county:"宜蘭縣",city:"釣魚臺列嶼"},{id:"300新竹市東區",zipcode:300,county:"新竹市",city:"東區"},{id:"300新竹市北區",zipcode:300,county:"新竹市",city:"北區"},{id:"300新竹市香山區",zipcode:300,county:"新竹市",city:"香山區"},{id:"302新竹縣竹北市",zipcode:302,county:"新竹縣",city:"竹北市"},{id:"303新竹縣湖口鄉",zipcode:303,county:"新竹縣",city:"湖口鄉"},{id:"304新竹縣新豐鄉",zipcode:304,county:"新竹縣",city:"新豐鄉"},{id:"305新竹縣新埔鎮",zipcode:305,county:"新竹縣",city:"新埔鎮"},{id:"306新竹縣關西鎮",zipcode:306,county:"新竹縣",city:"關西鎮"},{id:"307新竹縣芎林鄉",zipcode:307,county:"新竹縣",city:"芎林鄉"},{id:"308新竹縣寶山鄉",zipcode:308,county:"新竹縣",city:"寶山鄉"},{id:"310新竹縣竹東鎮",zipcode:310,county:"新竹縣",city:"竹東鎮"},{id:"311新竹縣五峰鄉",zipcode:311,county:"新竹縣",city:"五峰鄉"},{id:"312新竹縣橫山鄉",zipcode:312,county:"新竹縣",city:"橫山鄉"},{id:"313新竹縣尖石鄉",zipcode:313,county:"新竹縣",city:"尖石鄉"},{id:"314新竹縣北埔鄉",zipcode:314,county:"新竹縣",city:"北埔鄉"},{id:"315新竹縣峨眉鄉",zipcode:315,county:"新竹縣",city:"峨眉鄉"},{id:"320桃園市中壢區",zipcode:320,county:"桃園市",city:"中壢區"},{id:"324桃園市平鎮區",zipcode:324,county:"桃園市",city:"平鎮區"},{id:"325桃園市龍潭區",zipcode:325,county:"桃園市",city:"龍潭區"},{id:"326桃園市楊梅區",zipcode:326,county:"桃園市",city:"楊梅區"},{id:"327桃園市新屋區",zipcode:327,county:"桃園市",city:"新屋區"},{id:"328桃園市觀音區",zipcode:328,county:"桃園市",city:"觀音區"},{id:"330桃園市桃園區",zipcode:330,county:"桃園市",city:"桃園區"},{id:"333桃園市龜山區",zipcode:333,county:"桃園市",city:"龜山區"},{id:"334桃園市八德區",zipcode:334,county:"桃園市",city:"八德區"},{id:"335桃園市大溪區",zipcode:335,county:"桃園市",city:"大溪區"},{id:"336桃園市復興區",zipcode:336,county:"桃園市",city:"復興區"},{id:"337桃園市大園區",zipcode:337,county:"桃園市",city:"大園區"},{id:"338桃園市蘆竹區",zipcode:338,county:"桃園市",city:"蘆竹區"},{id:"350苗栗縣竹南鎮",zipcode:350,county:"苗栗縣",city:"竹南鎮"},{id:"351苗栗縣頭份市",zipcode:351,county:"苗栗縣",city:"頭份市"},{id:"352苗栗縣三灣鄉",zipcode:352,county:"苗栗縣",city:"三灣鄉"},{id:"353苗栗縣南庄鄉",zipcode:353,county:"苗栗縣",city:"南庄鄉"},{id:"354苗栗縣獅潭鄉",zipcode:354,county:"苗栗縣",city:"獅潭鄉"},{id:"356苗栗縣後龍鎮",zipcode:356,county:"苗栗縣",city:"後龍鎮"},{id:"357苗栗縣通霄鎮",zipcode:357,county:"苗栗縣",city:"通霄鎮"},{id:"358苗栗縣苑裡鎮",zipcode:358,county:"苗栗縣",city:"苑裡鎮"},{id:"360苗栗縣苗栗市",zipcode:360,county:"苗栗縣",city:"苗栗市"},{id:"361苗栗縣造橋鄉",zipcode:361,county:"苗栗縣",city:"造橋鄉"},{id:"362苗栗縣頭屋鄉",zipcode:362,county:"苗栗縣",city:"頭屋鄉"},{id:"363苗栗縣公館鄉",zipcode:363,county:"苗栗縣",city:"公館鄉"},{id:"364苗栗縣大湖鄉",zipcode:364,county:"苗栗縣",city:"大湖鄉"},{id:"365苗栗縣泰安鄉",zipcode:365,county:"苗栗縣",city:"泰安鄉"},{id:"366苗栗縣銅鑼鄉",zipcode:366,county:"苗栗縣",city:"銅鑼鄉"},{id:"367苗栗縣三義鄉",zipcode:367,county:"苗栗縣",city:"三義鄉"},{id:"368苗栗縣西湖鄉",zipcode:368,county:"苗栗縣",city:"西湖鄉"},{id:"369苗栗縣卓蘭鎮",zipcode:369,county:"苗栗縣",city:"卓蘭鎮"},{id:"400臺中市中區",zipcode:400,county:"臺中市",city:"中區"},{id:"401臺中市東區",zipcode:401,county:"臺中市",city:"東區"},{id:"402臺中市南區",zipcode:402,county:"臺中市",city:"南區"},{id:"403臺中市西區",zipcode:403,county:"臺中市",city:"西區"},{id:"404臺中市北區",zipcode:404,county:"臺中市",city:"北區"},{id:"406臺中市北屯區",zipcode:406,county:"臺中市",city:"北屯區"},{id:"407臺中市西屯區",zipcode:407,county:"臺中市",city:"西屯區"},{id:"408臺中市南屯區",zipcode:408,county:"臺中市",city:"南屯區"},{id:"411臺中市太平區",zipcode:411,county:"臺中市",city:"太平區"},{id:"412臺中市大里區",zipcode:412,county:"臺中市",city:"大里區"},{id:"413臺中市霧峰區",zipcode:413,county:"臺中市",city:"霧峰區"},{id:"414臺中市烏日區",zipcode:414,county:"臺中市",city:"烏日區"},{id:"420臺中市豐原區",zipcode:420,county:"臺中市",city:"豐原區"},{id:"421臺中市后里區",zipcode:421,county:"臺中市",city:"后里區"},{id:"422臺中市石岡區",zipcode:422,county:"臺中市",city:"石岡區"},{id:"423臺中市東勢區",zipcode:423,county:"臺中市",city:"東勢區"},{id:"424臺中市和平區",zipcode:424,county:"臺中市",city:"和平區"},{id:"426臺中市新社區",zipcode:426,county:"臺中市",city:"新社區"},{id:"427臺中市潭子區",zipcode:427,county:"臺中市",city:"潭子區"},{id:"428臺中市大雅區",zipcode:428,county:"臺中市",city:"大雅區"},{id:"429臺中市神岡區",zipcode:429,county:"臺中市",city:"神岡區"},{id:"432臺中市大肚區",zipcode:432,county:"臺中市",city:"大肚區"},{id:"433臺中市沙鹿區",zipcode:433,county:"臺中市",city:"沙鹿區"},{id:"434臺中市龍井區",zipcode:434,county:"臺中市",city:"龍井區"},{id:"435臺中市梧棲區",zipcode:435,county:"臺中市",city:"梧棲區"},{id:"436臺中市清水區",zipcode:436,county:"臺中市",city:"清水區"},{id:"437臺中市大甲區",zipcode:437,county:"臺中市",city:"大甲區"},{id:"438臺中市外埔區",zipcode:438,county:"臺中市",city:"外埔區"},{id:"439臺中市大安區",zipcode:439,county:"臺中市",city:"大安區"},{id:"500彰化縣彰化市",zipcode:500,county:"彰化縣",city:"彰化市"},{id:"502彰化縣芬園鄉",zipcode:502,county:"彰化縣",city:"芬園鄉"},{id:"503彰化縣花壇鄉",zipcode:503,county:"彰化縣",city:"花壇鄉"},{id:"504彰化縣秀水鄉",zipcode:504,county:"彰化縣",city:"秀水鄉"},{id:"505彰化縣鹿港鎮",zipcode:505,county:"彰化縣",city:"鹿港鎮"},{id:"506彰化縣福興鄉",zipcode:506,county:"彰化縣",city:"福興鄉"},{id:"507彰化縣線西鄉",zipcode:507,county:"彰化縣",city:"線西鄉"},{id:"508彰化縣和美鎮",zipcode:508,county:"彰化縣",city:"和美鎮"},{id:"509彰化縣伸港鄉",zipcode:509,county:"彰化縣",city:"伸港鄉"},{id:"510彰化縣員林市",zipcode:510,county:"彰化縣",city:"員林市"},{id:"511彰化縣社頭鄉",zipcode:511,county:"彰化縣",city:"社頭鄉"},{id:"512彰化縣永靖鄉",zipcode:512,county:"彰化縣",city:"永靖鄉"},{id:"513彰化縣埔心鄉",zipcode:513,county:"彰化縣",city:"埔心鄉"},{id:"514彰化縣溪湖鎮",zipcode:514,county:"彰化縣",city:"溪湖鎮"},{id:"515彰化縣大村鄉",zipcode:515,county:"彰化縣",city:"大村鄉"},{id:"516彰化縣埔鹽鄉",zipcode:516,county:"彰化縣",city:"埔鹽鄉"},{id:"520彰化縣田中鎮",zipcode:520,county:"彰化縣",city:"田中鎮"},{id:"521彰化縣北斗鎮",zipcode:521,county:"彰化縣",city:"北斗鎮"},{id:"522彰化縣田尾鄉",zipcode:522,county:"彰化縣",city:"田尾鄉"},{id:"523彰化縣埤頭鄉",zipcode:523,county:"彰化縣",city:"埤頭鄉"},{id:"524彰化縣溪州鄉",zipcode:524,county:"彰化縣",city:"溪州鄉"},{id:"525彰化縣竹塘鄉",zipcode:525,county:"彰化縣",city:"竹塘鄉"},{id:"526彰化縣二林鎮",zipcode:526,county:"彰化縣",city:"二林鎮"},{id:"527彰化縣大城鄉",zipcode:527,county:"彰化縣",city:"大城鄉"},{id:"528彰化縣芳苑鄉",zipcode:528,county:"彰化縣",city:"芳苑鄉"},{id:"530彰化縣二水鄉",zipcode:530,county:"彰化縣",city:"二水鄉"},{id:"540南投縣南投市",zipcode:540,county:"南投縣",city:"南投市"},{id:"541南投縣中寮鄉",zipcode:541,county:"南投縣",city:"中寮鄉"},{id:"542南投縣草屯鎮",zipcode:542,county:"南投縣",city:"草屯鎮"},{id:"544南投縣國姓鄉",zipcode:544,county:"南投縣",city:"國姓鄉"},{id:"545南投縣埔里鎮",zipcode:545,county:"南投縣",city:"埔里鎮"},{id:"546南投縣仁愛鄉",zipcode:546,county:"南投縣",city:"仁愛鄉"},{id:"551南投縣名間鄉",zipcode:551,county:"南投縣",city:"名間鄉"},{id:"552南投縣集集鎮",zipcode:552,county:"南投縣",city:"集集鎮"},{id:"553南投縣水里鄉",zipcode:553,county:"南投縣",city:"水里鄉"},{id:"555南投縣魚池鄉",zipcode:555,county:"南投縣",city:"魚池鄉"},{id:"556南投縣信義鄉",zipcode:556,county:"南投縣",city:"信義鄉"},{id:"557南投縣竹山鎮",zipcode:557,county:"南投縣",city:"竹山鎮"},{id:"558南投縣鹿谷鄉",zipcode:558,county:"南投縣",city:"鹿谷鄉"},{id:"600嘉義市東區",zipcode:600,county:"嘉義市",city:"東區"},{id:"600嘉義市西區",zipcode:600,county:"嘉義市",city:"西區"},{id:"602嘉義縣番路鄉",zipcode:602,county:"嘉義縣",city:"番路鄉"},{id:"603嘉義縣梅山鄉",zipcode:603,county:"嘉義縣",city:"梅山鄉"},{id:"604嘉義縣竹崎鄉",zipcode:604,county:"嘉義縣",city:"竹崎鄉"},{id:"605嘉義縣阿里山鄉",zipcode:605,county:"嘉義縣",city:"阿里山鄉"},{id:"606嘉義縣中埔鄉",zipcode:606,county:"嘉義縣",city:"中埔鄉"},{id:"607嘉義縣大埔鄉",zipcode:607,county:"嘉義縣",city:"大埔鄉"},{id:"608嘉義縣水上鄉",zipcode:608,county:"嘉義縣",city:"水上鄉"},{id:"611嘉義縣鹿草鄉",zipcode:611,county:"嘉義縣",city:"鹿草鄉"},{id:"612嘉義縣太保市",zipcode:612,county:"嘉義縣",city:"太保市"},{id:"613嘉義縣朴子市",zipcode:613,county:"嘉義縣",city:"朴子市"},{id:"614嘉義縣東石鄉",zipcode:614,county:"嘉義縣",city:"東石鄉"},{id:"615嘉義縣六腳鄉",zipcode:615,county:"嘉義縣",city:"六腳鄉"},{id:"616嘉義縣新港鄉",zipcode:616,county:"嘉義縣",city:"新港鄉"},{id:"621嘉義縣民雄鄉",zipcode:621,county:"嘉義縣",city:"民雄鄉"},{id:"622嘉義縣大林鎮",zipcode:622,county:"嘉義縣",city:"大林鎮"},{id:"623嘉義縣溪口鄉",zipcode:623,county:"嘉義縣",city:"溪口鄉"},{id:"624嘉義縣義竹鄉",zipcode:624,county:"嘉義縣",city:"義竹鄉"},{id:"625嘉義縣布袋鎮",zipcode:625,county:"嘉義縣",city:"布袋鎮"},{id:"630雲林縣斗南鎮",zipcode:630,county:"雲林縣",city:"斗南鎮"},{id:"631雲林縣大埤鄉",zipcode:631,county:"雲林縣",city:"大埤鄉"},{id:"632雲林縣虎尾鎮",zipcode:632,county:"雲林縣",city:"虎尾鎮"},{id:"633雲林縣土庫鎮",zipcode:633,county:"雲林縣",city:"土庫鎮"},{id:"634雲林縣褒忠鄉",zipcode:634,county:"雲林縣",city:"褒忠鄉"},{id:"635雲林縣東勢鄉",zipcode:635,county:"雲林縣",city:"東勢鄉"},{id:"636雲林縣臺西鄉",zipcode:636,county:"雲林縣",city:"臺西鄉"},{id:"637雲林縣崙背鄉",zipcode:637,county:"雲林縣",city:"崙背鄉"},{id:"638雲林縣麥寮鄉",zipcode:638,county:"雲林縣",city:"麥寮鄉"},{id:"640雲林縣斗六市",zipcode:640,county:"雲林縣",city:"斗六市"},{id:"643雲林縣林內鄉",zipcode:643,county:"雲林縣",city:"林內鄉"},{id:"646雲林縣古坑鄉",zipcode:646,county:"雲林縣",city:"古坑鄉"},{id:"647雲林縣莿桐鄉",zipcode:647,county:"雲林縣",city:"莿桐鄉"},{id:"648雲林縣西螺鎮",zipcode:648,county:"雲林縣",city:"西螺鎮"},{id:"649雲林縣二崙鄉",zipcode:649,county:"雲林縣",city:"二崙鄉"},{id:"651雲林縣北港鎮",zipcode:651,county:"雲林縣",city:"北港鎮"},{id:"652雲林縣水林鄉",zipcode:652,county:"雲林縣",city:"水林鄉"},{id:"653雲林縣口湖鄉",zipcode:653,county:"雲林縣",city:"口湖鄉"},{id:"654雲林縣四湖鄉",zipcode:654,county:"雲林縣",city:"四湖鄉"},{id:"655雲林縣元長鄉",zipcode:655,county:"雲林縣",city:"元長鄉"},{id:"700臺南市中西區",zipcode:700,county:"臺南市",city:"中西區"},{id:"701臺南市東區",zipcode:701,county:"臺南市",city:"東區"},{id:"702臺南市南區",zipcode:702,county:"臺南市",city:"南區"},{id:"704臺南市北區",zipcode:704,county:"臺南市",city:"北區"},{id:"708臺南市安平區",zipcode:708,county:"臺南市",city:"安平區"},{id:"709臺南市安南區",zipcode:709,county:"臺南市",city:"安南區"},{id:"710臺南市永康區",zipcode:710,county:"臺南市",city:"永康區"},{id:"711臺南市歸仁區",zipcode:711,county:"臺南市",city:"歸仁區"},{id:"712臺南市新化區",zipcode:712,county:"臺南市",city:"新化區"},{id:"713臺南市左鎮區",zipcode:713,county:"臺南市",city:"左鎮區"},{id:"714臺南市玉井區",zipcode:714,county:"臺南市",city:"玉井區"},{id:"715臺南市楠西區",zipcode:715,county:"臺南市",city:"楠西區"},{id:"716臺南市南化區",zipcode:716,county:"臺南市",city:"南化區"},{id:"717臺南市仁德區",zipcode:717,county:"臺南市",city:"仁德區"},{id:"718臺南市關廟區",zipcode:718,county:"臺南市",city:"關廟區"},{id:"719臺南市龍崎區",zipcode:719,county:"臺南市",city:"龍崎區"},{id:"720臺南市官田區",zipcode:720,county:"臺南市",city:"官田區"},{id:"721臺南市麻豆區",zipcode:721,county:"臺南市",city:"麻豆區"},{id:"722臺南市佳里區",zipcode:722,county:"臺南市",city:"佳里區"},{id:"723臺南市西港區",zipcode:723,county:"臺南市",city:"西港區"},{id:"724臺南市七股區",zipcode:724,county:"臺南市",city:"七股區"},{id:"725臺南市將軍區",zipcode:725,county:"臺南市",city:"將軍區"},{id:"726臺南市學甲區",zipcode:726,county:"臺南市",city:"學甲區"},{id:"727臺南市北門區",zipcode:727,county:"臺南市",city:"北門區"},{id:"730臺南市新營區",zipcode:730,county:"臺南市",city:"新營區"},{id:"731臺南市後壁區",zipcode:731,county:"臺南市",city:"後壁區"},{id:"732臺南市白河區",zipcode:732,county:"臺南市",city:"白河區"},{id:"733臺南市東山區",zipcode:733,county:"臺南市",city:"東山區"},{id:"734臺南市六甲區",zipcode:734,county:"臺南市",city:"六甲區"},{id:"735臺南市下營區",zipcode:735,county:"臺南市",city:"下營區"},{id:"736臺南市柳營區",zipcode:736,county:"臺南市",city:"柳營區"},{id:"737臺南市鹽水區",zipcode:737,county:"臺南市",city:"鹽水區"},{id:"741臺南市善化區",zipcode:741,county:"臺南市",city:"善化區"},{id:"742臺南市大內區",zipcode:742,county:"臺南市",city:"大內區"},{id:"743臺南市山上區",zipcode:743,county:"臺南市",city:"山上區"},{id:"744臺南市新市區",zipcode:744,county:"臺南市",city:"新市區"},{id:"745臺南市安定區",zipcode:745,county:"臺南市",city:"安定區"},{id:"800高雄市新興區",zipcode:800,county:"高雄市",city:"新興區"},{id:"801高雄市前金區",zipcode:801,county:"高雄市",city:"前金區"},{id:"802高雄市苓雅區",zipcode:802,county:"高雄市",city:"苓雅區"},{id:"803高雄市鹽埕區",zipcode:803,county:"高雄市",city:"鹽埕區"},{id:"804高雄市鼓山區",zipcode:804,county:"高雄市",city:"鼓山區"},{id:"805高雄市旗津區",zipcode:805,county:"高雄市",city:"旗津區"},{id:"806高雄市前鎮區",zipcode:806,county:"高雄市",city:"前鎮區"},{id:"807高雄市三民區",zipcode:807,county:"高雄市",city:"三民區"},{id:"811高雄市楠梓區",zipcode:811,county:"高雄市",city:"楠梓區"},{id:"812高雄市小港區",zipcode:812,county:"高雄市",city:"小港區"},{id:"813高雄市左營區",zipcode:813,county:"高雄市",city:"左營區"},{id:"814高雄市仁武區",zipcode:814,county:"高雄市",city:"仁武區"},{id:"815高雄市大社區",zipcode:815,county:"高雄市",city:"大社區"},{id:"820高雄市岡山區",zipcode:820,county:"高雄市",city:"岡山區"},{id:"821高雄市路竹區",zipcode:821,county:"高雄市",city:"路竹區"},{id:"822高雄市阿蓮區",zipcode:822,county:"高雄市",city:"阿蓮區"},{id:"823高雄市田寮區",zipcode:823,county:"高雄市",city:"田寮區"},{id:"824高雄市燕巢區",zipcode:824,county:"高雄市",city:"燕巢區"},{id:"825高雄市橋頭區",zipcode:825,county:"高雄市",city:"橋頭區"},{id:"826高雄市梓官區",zipcode:826,county:"高雄市",city:"梓官區"},{id:"827高雄市彌陀區",zipcode:827,county:"高雄市",city:"彌陀區"},{id:"828高雄市永安區",zipcode:828,county:"高雄市",city:"永安區"},{id:"829高雄市湖內區",zipcode:829,county:"高雄市",city:"湖內區"},{id:"830高雄市鳳山區",zipcode:830,county:"高雄市",city:"鳳山區"},{id:"831高雄市大寮區",zipcode:831,county:"高雄市",city:"大寮區"},{id:"832高雄市林園區",zipcode:832,county:"高雄市",city:"林園區"},{id:"833高雄市鳥松區",zipcode:833,county:"高雄市",city:"鳥松區"},{id:"840高雄市大樹區",zipcode:840,county:"高雄市",city:"大樹區"},{id:"842高雄市旗山區",zipcode:842,county:"高雄市",city:"旗山區"},{id:"843高雄市美濃區",zipcode:843,county:"高雄市",city:"美濃區"},{id:"844高雄市六龜區",zipcode:844,county:"高雄市",city:"六龜區"},{id:"845高雄市內門區",zipcode:845,county:"高雄市",city:"內門區"},{id:"846高雄市杉林區",zipcode:846,county:"高雄市",city:"杉林區"},{id:"847高雄市甲仙區",zipcode:847,county:"高雄市",city:"甲仙區"},{id:"848高雄市桃源區",zipcode:848,county:"高雄市",city:"桃源區"},{id:"849高雄市那瑪夏區",zipcode:849,county:"高雄市",city:"那瑪夏區"},{id:"851高雄市茂林區",zipcode:851,county:"高雄市",city:"茂林區"},{id:"852高雄市茄萣區",zipcode:852,county:"高雄市",city:"茄萣區"},{id:"817高雄市東沙群島",zipcode:817,county:"高雄市",city:"東沙群島"},{id:"819高雄市南沙群島",zipcode:819,county:"高雄市",city:"南沙群島"},{id:"880澎湖縣馬公市",zipcode:880,county:"澎湖縣",city:"馬公市"},{id:"881澎湖縣西嶼鄉",zipcode:881,county:"澎湖縣",city:"西嶼鄉"},{id:"882澎湖縣望安鄉",zipcode:882,county:"澎湖縣",city:"望安鄉"},{id:"883澎湖縣七美鄉",zipcode:883,county:"澎湖縣",city:"七美鄉"},{id:"884澎湖縣白沙鄉",zipcode:884,county:"澎湖縣",city:"白沙鄉"},{id:"885澎湖縣湖西鄉",zipcode:885,county:"澎湖縣",city:"湖西鄉"},{id:"900屏東縣屏東市",zipcode:900,county:"屏東縣",city:"屏東市"},{id:"901屏東縣三地門鄉",zipcode:901,county:"屏東縣",city:"三地門鄉"},{id:"902屏東縣霧臺鄉",zipcode:902,county:"屏東縣",city:"霧臺鄉"},{id:"903屏東縣瑪家鄉",zipcode:903,county:"屏東縣",city:"瑪家鄉"},{id:"904屏東縣九如鄉",zipcode:904,county:"屏東縣",city:"九如鄉"},{id:"905屏東縣里港鄉",zipcode:905,county:"屏東縣",city:"里港鄉"},{id:"906屏東縣高樹鄉",zipcode:906,county:"屏東縣",city:"高樹鄉"},{id:"907屏東縣鹽埔鄉",zipcode:907,county:"屏東縣",city:"鹽埔鄉"},{id:"908屏東縣長治鄉",zipcode:908,county:"屏東縣",city:"長治鄉"},{id:"909屏東縣麟洛鄉",zipcode:909,county:"屏東縣",city:"麟洛鄉"},{id:"911屏東縣竹田鄉",zipcode:911,county:"屏東縣",city:"竹田鄉"},{id:"912屏東縣內埔鄉",zipcode:912,county:"屏東縣",city:"內埔鄉"},{id:"913屏東縣萬丹鄉",zipcode:913,county:"屏東縣",city:"萬丹鄉"},{id:"920屏東縣潮州鎮",zipcode:920,county:"屏東縣",city:"潮州鎮"},{id:"921屏東縣泰武鄉",zipcode:921,county:"屏東縣",city:"泰武鄉"},{id:"922屏東縣來義鄉",zipcode:922,county:"屏東縣",city:"來義鄉"},{id:"923屏東縣萬巒鄉",zipcode:923,county:"屏東縣",city:"萬巒鄉"},{id:"924屏東縣崁頂鄉",zipcode:924,county:"屏東縣",city:"崁頂鄉"},{id:"925屏東縣新埤鄉",zipcode:925,county:"屏東縣",city:"新埤鄉"},{id:"926屏東縣南州鄉",zipcode:926,county:"屏東縣",city:"南州鄉"},{id:"927屏東縣林邊鄉",zipcode:927,county:"屏東縣",city:"林邊鄉"},{id:"928屏東縣東港鎮",zipcode:928,county:"屏東縣",city:"東港鎮"},{id:"929屏東縣琉球鄉",zipcode:929,county:"屏東縣",city:"琉球鄉"},{id:"931屏東縣佳冬鄉",zipcode:931,county:"屏東縣",city:"佳冬鄉"},{id:"932屏東縣新園鄉",zipcode:932,county:"屏東縣",city:"新園鄉"},{id:"940屏東縣枋寮鄉",zipcode:940,county:"屏東縣",city:"枋寮鄉"},{id:"941屏東縣枋山鄉",zipcode:941,county:"屏東縣",city:"枋山鄉"},{id:"942屏東縣春日鄉",zipcode:942,county:"屏東縣",city:"春日鄉"},{id:"943屏東縣獅子鄉",zipcode:943,county:"屏東縣",city:"獅子鄉"},{id:"944屏東縣車城鄉",zipcode:944,county:"屏東縣",city:"車城鄉"},{id:"945屏東縣牡丹鄉",zipcode:945,county:"屏東縣",city:"牡丹鄉"},{id:"946屏東縣恆春鎮",zipcode:946,county:"屏東縣",city:"恆春鎮"},{id:"947屏東縣滿州鄉",zipcode:947,county:"屏東縣",city:"滿州鄉"},{id:"950臺東縣臺東市",zipcode:950,county:"臺東縣",city:"臺東市"},{id:"951臺東縣綠島鄉",zipcode:951,county:"臺東縣",city:"綠島鄉"},{id:"952臺東縣蘭嶼鄉",zipcode:952,county:"臺東縣",city:"蘭嶼鄉"},{id:"953臺東縣延平鄉",zipcode:953,county:"臺東縣",city:"延平鄉"},{id:"954臺東縣卑南鄉",zipcode:954,county:"臺東縣",city:"卑南鄉"},{id:"955臺東縣鹿野鄉",zipcode:955,county:"臺東縣",city:"鹿野鄉"},{id:"956臺東縣關山鎮",zipcode:956,county:"臺東縣",city:"關山鎮"},{id:"957臺東縣海端鄉",zipcode:957,county:"臺東縣",city:"海端鄉"},{id:"958臺東縣池上鄉",zipcode:958,county:"臺東縣",city:"池上鄉"},{id:"959臺東縣東河鄉",zipcode:959,county:"臺東縣",city:"東河鄉"},{id:"961臺東縣成功鎮",zipcode:961,county:"臺東縣",city:"成功鎮"},{id:"962臺東縣長濱鄉",zipcode:962,county:"臺東縣",city:"長濱鄉"},{id:"963臺東縣太麻里鄉",zipcode:963,county:"臺東縣",city:"太麻里鄉"},{id:"964臺東縣金峰鄉",zipcode:964,county:"臺東縣",city:"金峰鄉"},{id:"965臺東縣大武鄉",zipcode:965,county:"臺東縣",city:"大武鄉"},{id:"966臺東縣達仁鄉",zipcode:966,county:"臺東縣",city:"達仁鄉"},{id:"970花蓮縣花蓮市",zipcode:970,county:"花蓮縣",city:"花蓮市"},{id:"971花蓮縣新城鄉",zipcode:971,county:"花蓮縣",city:"新城鄉"},{id:"972花蓮縣秀林鄉",zipcode:972,county:"花蓮縣",city:"秀林鄉"},{id:"973花蓮縣吉安鄉",zipcode:973,county:"花蓮縣",city:"吉安鄉"},{id:"974花蓮縣壽豐鄉",zipcode:974,county:"花蓮縣",city:"壽豐鄉"},{id:"975花蓮縣鳳林鎮",zipcode:975,county:"花蓮縣",city:"鳳林鎮"},{id:"976花蓮縣光復鄉",zipcode:976,county:"花蓮縣",city:"光復鄉"},{id:"977花蓮縣豐濱鄉",zipcode:977,county:"花蓮縣",city:"豐濱鄉"},{id:"978花蓮縣瑞穗鄉",zipcode:978,county:"花蓮縣",city:"瑞穗鄉"},{id:"979花蓮縣萬榮鄉",zipcode:979,county:"花蓮縣",city:"萬榮鄉"},{id:"981花蓮縣玉里鎮",zipcode:981,county:"花蓮縣",city:"玉里鎮"},{id:"982花蓮縣卓溪鄉",zipcode:982,county:"花蓮縣",city:"卓溪鄉"},{id:"983花蓮縣富里鄉",zipcode:983,county:"花蓮縣",city:"富里鄉"},{id:"890金門縣金沙鎮",zipcode:890,county:"金門縣",city:"金沙鎮"},{id:"891金門縣金湖鎮",zipcode:891,county:"金門縣",city:"金湖鎮"},{id:"892金門縣金寧鄉",zipcode:892,county:"金門縣",city:"金寧鄉"},{id:"893金門縣金城鎮",zipcode:893,county:"金門縣",city:"金城鎮"},{id:"894金門縣烈嶼鄉",zipcode:894,county:"金門縣",city:"烈嶼鄉"},{id:"896金門縣烏坵鄉",zipcode:896,county:"金門縣",city:"烏坵鄉"},{id:"209連江縣南竿鄉",zipcode:209,county:"連江縣",city:"南竿鄉"},{id:"210連江縣北竿鄉",zipcode:210,county:"連江縣",city:"北竿鄉"},{id:"211連江縣莒光鄉",zipcode:211,county:"連江縣",city:"莒光鄉"},{id:"212連江縣東引鄉",zipcode:212,county:"連江縣",city:"東引鄉"}];export{i as c,c as z};
