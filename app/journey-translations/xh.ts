import type { JourneyControls, JourneyTranslationCatalog } from "./types";

const catalog = {
  "critical:Plan": {
    "eyebrow": "Iinyanga ezine ngaphambi kokufuduka",
    "title": "Isithembiso esihle somsebenzi sisiqalo nje",
    "scene": "Ikhontrakthi ifikile. Umqeshi uthi izakhono zalo msebenzi zifunwa kakhulu aze acele ukuba aqale ngoko nangoko.",
    "question": "Yintoni ekufuneka yenziwe ngaphambi kokubhukisha inqwelo-moya okanye ukwazisa umqeshi wangoku ngokuyeka umsebenzi?",
    "law": "Imvume yengqesho yezakhono ezibalulekileyo ixhomekeke ekubeni uhlobo lomsebenzi, umvuzo, ikhontrakthi nomqeshi bayayifezekisa na imiqathango yomthetho esebenzayo ngoku.",
    "plainLaw": "Hlola umsebenzi wokwenene, umvuzo, ikhontrakthi nomqeshi ngokwemigaqo esemthethweni yangoku ngaphambi kokuxhomekeka kwisithembiso.",
    "sourceLabel": "Imvume yengqesho yezakhono ezibalulekileyo",
    "choices": {
      "verify": { "label": "Hlola uhlobo lomsebenzi, umvuzo, ikhontrakthi nomqeshi, uze ufake isicelo esichanekileyo semvume yengqesho.", "feedback": "Oku kuthintela ukwakhela isicwangciso sokufuduka kwisithembiso esingazifezekisiyo iimfuno.", "consequence": "Ixesha elicwangcisiweyo liyenzeka ngokwenene, nomsebenzi uvavanywa ngokwemigaqo yangoku." },
      "contract": { "label": "Thatha ikhontrakthi esayiniweyo njengemvume yokusebenza.", "feedback": "Ikhontrakthi nemvume yengqesho zinemisebenzi eyahlukileyo emthethweni.", "consequence": "Ukuhamba okanye ukuyeka umsebenzi kunokwenzeka ngaphambi kokuba kufumaneke imvume efunekayo." },
      "visitor": { "label": "Ngena njengondwendwe uze ugqibezele imvume emva kokuqalisa umsebenzi.", "feedback": "Ubume bondwendwe abugunyazisi ingqesho eqhelekileyo.", "consequence": "Umsebenzi nobume bakho bokufudukela kweli lizwe bunokuba semngciphekweni." }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Amaxwebhu nexesha",
    "title": "Imvume enye ayithathi indawo yawo onke amanye amanyathelo",
    "scene": "Imvume yengqesho inikiwe. Umhlobo uthi oko kuthetha ukuba akukho mfuneko yakuhlola ezinye iimfuno zokufudukela kweli lizwe.",
    "question": "Sesiphi isicwangciso esikhuselekileyo ngakumbi?",
    "law": "Imvume yengqesho igunyazisa umsebenzi othile. Ummi welizwe ekufuneka abe ne-visa kufuneka afumane ne-visa efanelekileyo yokuhlala ixesha elide ngaphambi kokuhamba.",
    "plainLaw": "Imvume yengqesho, i-visa, imvume yokungena emdeni nokubhaliswa kwendawo yokuhlala ngamanyathelo ahlukeneyo.",
    "sourceLabel": "Ukuza kusebenza eIreland",
    "choices": {
      "sequence": { "label": "Hlola iimfuno ze-visa, lungisa ubungqina uze uqinisekise ukuba zonke iimvume ziyafikeleleka xa uhamba.", "feedback": "Kunjalo. Uxwebhu ngalunye luphendula umbuzo owahlukileyo.", "consequence": "Umhambi angayichaza injongo yokufuduka emdeni." },
      "permitvisa": { "label": "Cinga ukuba imvume yengqesho ngokuzenzekelayo iyi-visa yokuhamba.", "feedback": "Oku akuchanekanga kubemi bamazwe afuna i-visa.", "consequence": "Ukukhwela okanye ukungena elizweni kunokuphazamiseka nangona imvume yengqesho isasebenza." },
      "agent": { "label": "Nika ummeli ongakhange aqinisekiswe onke amaxwebhu oqobo.", "feedback": "Gcina ulawulo lwamaxwebhu esazisi uze uqinisekise nabani na obonelela ngoncedo oluhlawulelwayo.", "consequence": "Ukungakwazi ukufikelela kumaxwebhu oqobo kubangela umngcipheko wokulibaziseka nowokuxhatshazwa." }
    }
  },
  "critical:Travel": {
    "eyebrow": "Emdeni waseIreland",
    "title": "Lungela ukuchaza injongo yohambo",
    "scene": "Igosa lezokufudukela kweli lizwe libuza ukuba umhambi uza kuhlala phi nokuba nguwuphi umqeshi omlindeleyo.",
    "question": "Kufuneka enze ntoni?",
    "law": "I-visa ivumela ukuhamba uye emdeni; igosa lezokufudukela kweli lizwe ligqiba ngokungena. Amaxwebhu axhasayo kufuneka abonise injongo yokwenene namalungiselelo.",
    "plainLaw": "Phatha ubungqina obuyinyaniso nobungangqubaniyo bomsebenzi, imvume nedilesi yokuqala.",
    "sourceLabel": "Inkonzo yaseIreland yezokufudukela kweli lizwe",
    "choices": {
      "answer": { "label": "Phendula ngenyaniso uze ubonise imvume yengqesho, i-visa ukuba iyafuneka, ikhontrakthi neenkcukacha zendawo yokuhlala.", "feedback": "Ubungqina obucacileyo nobungangqubaniyo buxhasa injongo yohambo echaziweyo.", "consequence": "Igosa linokuvavanya uhambo lomsebenzi lisebenzisa amaxwebhu achanekileyo." },
      "tourism": { "label": "Yithi yiholide kuphela ukuze uphephe imibuzo ngomsebenzi.", "feedback": "Ingxelo kufuneka ihambelane nenjongo yokwenene namaxwebhu.", "consequence": "Ulwazi olungqubanayo lunokubangela ubunzima obukhulu emdeni." },
      "phone": { "label": "Xhomekeka ngokupheleleyo kumntu oqesha abasebenzi ukuba aphendule ifowuni.", "feedback": "Umhambi kufuneka alwazi aze aphathe ulwazi lwakhe olubalulekileyo.", "consequence": "Ukuba umntu oqesha abasebenzi akafumaneki, injongo yohambo isenokungacaci." }
    }
  },
  "critical:Arrive": {
    "eyebrow": "Iintsuku zokuqala ezingama-90",
    "title": "Ukubhalisa kwenza imvume ibe nobungqina",
    "scene": "Umsebenzi uqalile, kodwa ukukhangela indlu nokulungiselela amadinga kwenza iiveki zokuqala zibe nzima.",
    "question": "Ngowuphi umsebenzi ekufuneka uhlale kwisicwangciso?",
    "law": "Abantu abasuka ngaphandle kwe-EU, i-UK neSwitzerland abahlala ngaphezu kweentsuku ezingama-90 ngokuqhelekileyo kufuneka babhalise imvume yabo yokuhlala eIreland.",
    "plainLaw": "Lungiselela ukubhalisa uze ugcine iinkcukacha zemvume, idilesi nengqesho zichanekile.",
    "sourceLabel": "Ukubhalisa imvume yokuhlala",
    "choices": {
      "register": { "label": "Lungiselela ukubhalisa, landela inkqubo esemthethweni yokufumana idinga uze ugcine ubungqina bemizamo yokulifumana.", "feedback": "Ikhadi lemvume yokuhlala eIreland (IRP) libhala imvume nemiqathango yayo.", "consequence": "Umntu unobungqina obucacileyo ngakumbi bokuhlala ngokusemthethweni nokuba imvume ivumela ntoni." },
      "pps": { "label": "Cinga ukuba inombolo ye-PPS ithatha indawo yokubhaliswa kwemvume yokuhlala.", "feedback": "Inombolo ye-PPS yeyeenkonzo zoluntu neerhafu; ayiyomvume yokufudukela nokuhlala elizweni.", "consequence": "Inombolo eluncedo yolawulo ibhidaniswa nobungqina bokuhlala ngokusemthethweni." },
      "contract": { "label": "Cinga ukuba ikhontrakthi yomqeshi ithatha indawo ye-IRP.", "feedback": "Amaxwebhu engqesho awathathi indawo yokubhaliswa kwemvume yokuhlala.", "consequence": "Umntu angasokola ukubonisa imiqathango yemvume yakhe yokuhlala." }
    }
  },
  "critical:Build a life": {
    "eyebrow": "Indawo yomsebenzi nekamva",
    "title": "Ubume bokufudukela elizweni abuwaphelisi amalungelo engqesho",
    "scene": "Umphathi uthi abasebenzi abasuka kwamanye amazwe bafumana umvuzo ophantsi namakhefu ambalwa kwiinyanga zabo zokuqala.",
    "question": "Yeyiphi impendulo ekhusela ingqesho nobume bokuhlala?",
    "law": "Abasebenzi abasuka kwamanye amazwe abaqeshwe ngokusemthethweni eIreland banokhuseleko olusisiseko lwengqesho. Xa kuvela iingxaki, kufuneka kuqwalaselwe imiqathango yemvume namalungelo engqesho kunye.",
    "plainLaw": "Gcina iirekhodi, funa icebiso elithembekileyo uze ungamkeli impatho engekho mthethweni ngenxa yokuba ungumfuduki.",
    "sourceLabel": "IKhomishini yobudlelwane emsebenzini (WRC)",
    "choices": {
      "records": { "label": "Gcina iishedyuli zomsebenzi neziliphu zomvuzo, cela ukulungiswa uze uqhagamshelane ne-WRC okanye umcebisi ofanelekileyo.", "feedback": "Ubungqina nengcebiso efunyenwe ngexesha zinceda ukukhusela omabini la malungelo.", "consequence": "Ingxaki inokuqwalaselwa ngaphandle kokwenza ngathi imiqathango yemvume ayibalulekanga." },
      "accept": { "label": "Yamkele kuba abanemvume yengqesho benamalungelo ambalwa emsebenzini.", "feedback": "Ubume bokufudukela elizweni abuluphelisi ukhuseleko olusisiseko emsebenzini.", "consequence": "Ukuhlawulwa ngaphantsi okanye iimeko ezingakhuselekanga zingaqhubeka zingaphikiswa." },
      "disappear": { "label": "Yeka ngoko nangoko uze uqale omnye umsebenzi ungakhange uhlole imiqathango yemvume.", "feedback": "Ukutshintsha ingqesho kungafuna inkqubo esemthethweni okanye imvume entsha.", "consequence": "Ingxaki yasemsebenzini ingaba yingxaki yemvume yokuhlala nayo." }
    }
  },
  "general:Plan": {
    "eyebrow": "Ngaphambi kokuhlawula nabani na",
    "title": "Hlola umsebenzi wokwenene, hayi amazwi okuthengisa",
    "scene": "Umntu oqesha abasebenzi uthembisa ukuba nayiphi na ikhontrakthi yaseIreland esayiniweyo iqinisekisa imvume aze acele imali eziinkozo.",
    "question": "Sesiphi esona sigqibo sokuqala?",
    "law": "Imvume yengqesho ngokubanzi ixhomekeke kuhlobo lomsebenzi, umvuzo, umqeshi nezinye iimfuno zangoku. Eminye imisebenzi ayifanelekanga, kwaye uvavanyo lweemfuno zemarike yezabasebenzi lunokufuneka.",
    "plainLaw": "Qinisekisa umqeshi nemisebenzi oza kuyenza, uze uhlole imigaqo yangoku yemvume ngaphambi kokuhlawula okanye ukuhamba.",
    "sourceLabel": "Imvume yengqesho ngokubanzi",
    "choices": {
      "check": { "label": "Qinisekisa umqeshi, imisebenzi, umvuzo nokufaneleka kwemvume kwimithombo esemthethweni.", "feedback": "Nesithembiso sokwenene kufuneka sihlangabezane nemiqathango yomthetho.", "consequence": "Umngcipheko wobuqhophololo nowomsebenzi ongafanelekanga ubonwa ngaphambi kokuchitha imali okanye ukuzibophelela kuhambo." },
      "cash": { "label": "Hlawula imali eziinkozo uze uvumele umntu oqesha abasebenzi agcine ipaspoti.", "feedback": "Ukubanjwa kwepaspoti nokunyanzelwa kwentlawulo engalandelekiyo ziimpawu ezilumkisayo.", "consequence": "Umqeshwa uba sesichengeni ngakumbi sobuqhophololo nokulawulwa." },
      "promise": { "label": "Xhomekeka kwisithembiso salowo uqesha abasebenzi endaweni yokuhlola uhlobo lomsebenzi.", "feedback": "Yimiqathango esemthethweni, hayi isithembiso, egqiba ngokufaneleka kwemvume.", "consequence": "Indlela ecwangcisiweyo inokusilela emva kokuba kuchithwe imali eninzi." }
    }
  },
  "general:Prepare": {
    "eyebrow": "Ulandelelwano oluchanekileyo",
    "title": "Imvume kufuneka ifike ngaphambi kokufuduka",
    "scene": "Umqeshi ufuna abasebenzi ngoku aze acebise ukungena njengomkhenkethi ngoxa kulungiswa amaxwebhu.",
    "question": "Loluphi ulandelelwano oluthembekileyo?",
    "law": "Kuhambo lokuqala olusekelwe kwimvume yengqesho, ngokuqhelekileyo kufuneka imvume ngaphambi kokuqalisa umsebenzi, kulandele i-visa yokuhlala ixesha elide xa ifuneka, nokubhalisa emva kokufika.",
    "plainLaw": "Ungasebenzisi ubume bondwendwe njengendlela emfutshane yokungena kwingqesho eqhelekileyo.",
    "sourceLabel": "Iimvume zengqesho",
    "choices": {
      "order": { "label": "Qala ngemvume yengqesho, i-visa ukuba iyafuneka, ulawulo lomda, uze ubhalise emva kokufika.", "feedback": "Oku kugcina uhambo luhambelana nendlela ekhethiweyo.", "consequence": "Umqeshwa ufika enesiseko esisemthethweni esicacisekayo nesixhaswa ngamaxwebhu." },
      "tourist": { "label": "Ngena njengomkhenkethi uze uqale umsebenzi kwishifti yokuqala.", "feedback": "Ubume bondwendwe abuyomvume yomsebenzi oqhelekileyo.", "consequence": "Umqeshwa nomqeshi banokujongana neziphumo ezinzima." },
      "pps": { "label": "Faka isicelo senombolo ye-PPS uze uyithathe njengemvume yengqesho.", "feedback": "Inombolo ye-PPS ayiniki mvume yokuhlala okanye yengqesho.", "consequence": "Inyathelo elibalulekileyo lemvume lihlala lingagqitywanga." }
    }
  },
  "general:Travel": {
    "eyebrow": "Usuku lokuhamba",
    "title": "Phatha ubungqina bakho",
    "scene": "Umntu oqesha abasebenzi uthi onke amaxwebhu akwi-ofisi yenkampani, kwaye umhambi ufuna kuphela umfanekiso wesikrini sefowuni.",
    "question": "Kufuneka enze ntoni umhambi?",
    "law": "Umhambi usenokufuna ukubonisa injongo nemiqathango yohambo kwinkampani yezothutho nakulawulo lomda waseIreland.",
    "plainLaw": "Gcina ukufikelela okukhuselekileyo kwipaspoti yakho, iimvume, ikhontrakthi neenkcukacha zedilesi yokuqala.",
    "sourceLabel": "Ukuza kusebenza eIreland",
    "choices": {
      "copies": { "label": "Phatha amaxwebhu oqobo afunekayo kuhambo, iikopi ezigcinwe ngokukhuselekileyo neenkcukacha zomqeshi.", "feedback": "Umhambi kufuneka akwazi ukuchaza uhambo lwakhe.", "consequence": "Ukungabikho kwesiginali yefowuni okanye ukungafumaneki komntu oqesha abasebenzi akuphelisi bonke ubungqina." },
      "company": { "label": "Hamba ngaphandle kwamaxwebhu kuba inkampani inawo.", "feedback": "Unganikezeli ulawulo lwamaxwebhu abalulekileyo esazisi neemvume.", "consequence": "Umhambi usenokungakwazi ukubonisa injongo yohambo." },
      "different": { "label": "Nika isizathu sokuhamba esahlukileyo kweso sikwisicelo.", "feedback": "Ulwazi kufuneka lube yinyaniso kwaye lungangqubani.", "consequence": "Ukungqubana kunokuphazamisa uhambo emdeni." }
    }
  },
  "general:Arrive": {
    "eyebrow": "Iiveki zokuqala",
    "title": "Yahlula iimfuno ezingxamisekileyo kwiimvume zomthetho",
    "scene": "Ibhanki, umnini wendlu nomqeshi ngamnye ucela amaxwebhu ahlukeneyo ngoxa kusalindwe idinga lokubhalisa.",
    "question": "Kufuneka aphendule njani umntu?",
    "law": "I-IRP irekhoda imvume yokuhlala. Ezinye iinkqubo, eziquka irhafu, iibhanki nezindlu, zineemfuno zazo kwaye azithathi indawo yayo.",
    "plainLaw": "Sebenzisa izintlu ezisemthethweni, gcina ubungqina bedinga uze ubuze inkonzo nganye ukuba ifuna ntoni kanye.",
    "sourceLabel": "Ukubhalisa imvume yokuhlala",
    "choices": {
      "organise": { "label": "Gcina ifayile yamaxwebhu, landela imiyalelo yokubhalisa uze ucele uluhlu lweemfuno kwinkonzo nganye.", "feedback": "Oku kunciphisa ukubhidaniswa kweenkqubo ezahlukeneyo.", "consequence": "Ukulibaziseka kusenzima, kodwa umntu uyakwazi ukubonisa oko kugqityiweyo." },
      "one": { "label": "Cinga ukuba uxwebhu olunye kufuneka lusebenze kuzo zonke iinkonzo.", "feedback": "Iinkqubo zaseIreland zibuza imibuzo eyahlukeneyo ngeenjongo ezahlukeneyo.", "consequence": "Izicelo zinokuma kuba kunikwa ubungqina obungachanekanga ngokuphindaphindiweyo." },
      "fake": { "label": "Guqula uxwebhu lwedilesi ukuze izinto zikhawuleze.", "feedback": "Ungaze unike ubungqina bobuxoki okanye obuguqulweyo.", "consequence": "Indlela emfutshane idala imingcipheko enzima yomthetho neyokuthembeka." }
    }
  },
  "general:Build a life": {
    "eyebrow": "Umsebenzi onobulungisa",
    "title": "Qaphela ukuxhatshazwa kwangethuba",
    "scene": "Isiliphu somvuzo sinezixa ezixhuzulwayo ezingachazwanga, kwaye umqeshi ucela ukugcina ipaspoti ukuze ‘ikhuseleke’.",
    "question": "Yeyiphi eyona mpendulo inamandla?",
    "law": "Abasebenzi kufuneka bafumane umvuzo, imiqathango neziliphu zomvuzo ezisemthethweni. Ukugcina iirekhodi nokusebenzisa i-WRC okanye inkxaso ekhethekileyo yabafuduki kunganceda ekulweni ukuxhatshazwa.",
    "plainLaw": "Gcina ipaspoti yakho, gcina ubungqina uze ufune icebiso eliyimfihlo.",
    "sourceLabel": "IKhomishini yobudlelwane emsebenzini (WRC)",
    "choices": {
      "evidence": { "label": "Gcina ipaspoti neerekhodi, cela ingcaciso uze uqhagamshelane ne-WRC okanye umcebisi.", "feedback": "Iirekhodi ezicacileyo zenza kube lula ukuyiqonda nokuyiphikisa ingxaki.", "consequence": "Umqeshwa angafuna uncedo engaxhomekekanga kwinkcazo yomqeshi kuphela." },
      "hand": { "label": "Nika umqeshi ipaspoti kuba elungiselele imvume yengqesho.", "feedback": "Umqeshwa kufuneka agcine ulawulo lwamaxwebhu akhe esazisi.", "consequence": "Umqeshi ufumana indlela enamandla yokulawula umntu." },
      "nothing": { "label": "Ungazihoyi izixa ezixhuzulwayo kuba abafuduki bengenakukhalaza.", "feedback": "Abasebenzi abasuka kwamanye amazwe banamalungelo engqesho anokunyanzeliswa ngumthetho.", "consequence": "Impatho engekho mthethweni ingaqhubeka okanye ibe mandundu." }
    }
  },
  "protection:Plan": {
    "eyebrow": "Imfuno yokhuseleko",
    "title": "Ukhuseleko lumalunga nomngcipheko wobuqu",
    "scene": "Ukubuyela kwilizwe osuka kulo kubonakala kungakhuselekanga. Abahlobo banika amacebiso angqubanayo, kwaye omnye ucebisa ukuqamba ibali elinamandla ngakumbi.",
    "question": "Ngowuphi umgaqo ekufuneka ukhokele inyathelo elilandelayo?",
    "law": "Ukhuseleko lwamazwe ngamazwe lolwabantu aboyika intshutshiso okanye abasemngciphekweni wokwenene wokwenzakala kakhulu. Isicelo ngasinye sivavanywa ngokweenyaniso zomntu, phantsi komthetho osebenzayo ngexesha lokufakwa kwaso.",
    "plainLaw": "Balisa ibali lakho eliyinyaniso uze ufumane ulwazi lomthetho oluyimfihlo kwangoko kangangoko kunokwenzeka.",
    "sourceLabel": "IBhunga laseIreland leembacu: izicelo emva komhla we-12 kuJuni 2026",
    "choices": {
      "truth": { "label": "Gcina ubungqina bakho apho kukhuselekileyo, thetha inyani uze ufune ulwazi lomthetho oluthembekileyo.", "feedback": "Isicelo sokhuseleko kufuneka sibe yingxelo yomntu ngokwakhe.", "consequence": "Ityala liqala ngolwazi oluchanekileyo nenkxaso efanelekileyo." },
      "copy": { "label": "Kopa ibali elanceda omnye umntu.", "feedback": "Ulwazi oluqanjiweyo okanye olubolekiweyo lunokonakalisa kakhulu ukuthembeka.", "consequence": "Inkqubo inokugxila kwizinto ezingqubanayo endaweni yoloyiko lokwenene." },
      "work": { "label": "Chaza ukhuseleko njengendlela ekhawulezayo yokufumana umsebenzi.", "feedback": "Ukhuseleko nokufudukela kwelinye ilizwe ngenjongo yomsebenzi zineenjongo ezahlukeneyo.", "consequence": "Isiseko somthetho sokwenene sohambo siyafihlakeleka." }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Ukhuseleko nobungqina",
    "title": "Amaxwebhu ayanceda, kodwa ukhuseleko luza kuqala",
    "scene": "Obunye ubungqina busefowunini eyonakeleyo. Amanye amaxwebhu bekungenakwenzeka ukuwaphatha.",
    "question": "Yeyiphi indlela enoxanduva?",
    "law": "Abafaki-zicelo kufuneka banike ulwazi olufumanekayo, basebenzisane nenkqubo baze bachaze ubungqina obungekhoyo ngenyaniso. Kufuneka baxele iimfuno zokutolikelwa, zokuba sesichengeni nezokufikeleleka.",
    "plainLaw": "Ungaqambi amaxwebhu angekhoyo. Chaza into ekhoyo, into engekhoyo nesizathu sokungabikho kwayo.",
    "sourceLabel": "IOfisi yoKhuseleko lwaMazwe ngaMazwe (IPO)",
    "choices": {
      "explain": { "label": "Gcina oko kukhuselekileyo, chaza izikhewu uze ucele itoliki okanye inkxaso yokufikeleleka xa ifuneka.", "feedback": "Inkqubo kufuneka ive ingxelo yomntu ngokwakhe enenkxaso efanelekileyo.", "consequence": "Ubungqina obungekhoyo buchazwa ngokuphandle endaweni yokufihlwa." },
      "forge": { "label": "Yenza amaxwebhu amatsha abonakala esemthethweni.", "feedback": "Amaxwebhu obuxoki angasonakalisa kakhulu isicelo.", "consequence": "Ingqalelo isuka kwiimeko zokwenene iye ekukhohliseni." },
      "silence": { "label": "Ungaze ukhankanye ukwenzakala ngokwasengqondweni, ubuwena okanye ukukhubazeka nokuba kuyafaneleka.", "feedback": "Ulwazi olunobuntununtunu lunokuxoxwa ngasese nenkxaso efanelekileyo.", "consequence": "Iimfuno ezibalulekileyo zokhuseleko okanye zenkqubo zinokuhlala zingabonwa." }
    }
  },
  "protection:Travel": {
    "eyebrow": "Ukufika eIreland",
    "title": "Yitsho ngokucacileyo ukuba ufuna ukhuseleko",
    "scene": "Kwindawo yokungena eIreland, uloyiko nokudinwa kwenza kube nzima ukuchaza ukuba kutheni ukubuyela kwilizwe osuka kulo kungakhuselekanga.",
    "question": "Kufuneka athethe ntoni umntu?",
    "law": "Umntu ofuna indawo yokusabela kufuneka atsho ngokucacileyo ukuba ufuna ukhuseleko lwamazwe ngamazwe aze asebenzisane nenkqubo esebenzayo yokubhalisa neyokuhlolwa kokuqala.",
    "plainLaw": "Sebenzisa amazwi angqalileyo: ‘Ndifuna ukufaka isicelo sokhuseleko lwamazwe ngamazwe. Ndiyoyika ukubuyela kwilizwe endisuka kulo.’",
    "sourceLabel": "IOfisi yoKhuseleko lwaMazwe ngaMazwe (IPO)",
    "choices": {
      "ask": { "label": "Cela ukhuseleko lwamazwe ngamazwe ngokucacileyo uze ucele itoliki xa ifuneka.", "feedback": "Unxibelelwano olucacileyo lunceda ukuhambisa umntu kwinkqubo echanekileyo.", "consequence": "Uloyiko lokubuyela kwilizwe aphuma kulo lunokurekhodwa luvavanywe." },
      "tourist": { "label": "Fihla uloyiko uze uthi utyelelo lolokhenketho kuphela.", "feedback": "Oku akuyichazi imfuno yokhuseleko.", "consequence": "Umntu usenokungangeni kwinkqubo eyenzelwe ukuvavanya umngcipheko." },
      "script": { "label": "Phinda ingxelo oyinkqayileyo engachanekanga.", "feedback": "Sebenzisa amazwi omntu ngokwakhe ayinyaniso.", "consequence": "Izinto ezingangqinelaniyo zinokwenza udliwano-ndlebe olusele lunzima lube nzima ngakumbi." }
    }
  },
  "protection:Arrive": {
    "eyebrow": "Isicelo nenkqubo yokwamkelwa",
    "title": "I-IPO ne-IPAS zinemisebenzi eyahlukeneyo",
    "scene": "Umfaki-sicelo ufuna ulwazi lomthetho, indawo yokuhlala noncedo lokufumana indawo yomntwana esikolweni.",
    "question": "Sesiphi isicwangciso esiyiqondayo imisebenzi eyahlukeneyo?",
    "law": "I-IPO ihlola izicelo zokhuseleko. I-IPAS inoxanduva lweendawo zokwamkela abafaki-zicelo nenkxaso enxulumene nazo. Uncedo lwezomthetho nemibutho ezimeleyo zinika uncedo olwahlukileyo.",
    "plainLaw": "Isigqibo setyala, indawo yokuhlala necebiso lomthetho zivela kwiinkonzo ezahlukeneyo.",
    "sourceLabel": "Iindawo zokuhlala nenkxaso ye-IPAS",
    "choices": {
      "roles": { "label": "Thetha ne-IPO ngetyala, ne-IPAS ngeemfuno zokwamkelwa, negqwetha ngecebiso lomthetho.", "feedback": "Ukwahlula imisebenzi kwenza kube lula ukucela uncedo kwiqumrhu elichanekileyo.", "consequence": "Iimfuno ezingxamisekileyo nesicelo somthetho zinokuqhubela phambili ngeendlela ezifanelekileyo." },
      "manager": { "label": "Cela umphathi wendawo yokuhlala ukuba avume ubume bokuba yimbacu.", "feedback": "Abasebenzi bendawo yokuhlala abanqumi ngesicelo sokhuseleko.", "consequence": "Kuchithwa ixesha kucelwa isigqibo somthetho kumntu ongafanelekanga." },
      "address": { "label": "Fuduka ungazazisanga iziphathamandla okanye umcebisi wezomthetho.", "feedback": "Iinkcukacha zoqhagamshelwano kufuneka zihlale zihlaziyiwe.", "consequence": "Amadinga okanye izigqibo ezibalulekileyo zinokuphoswa." }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Ukulinda nokuthatha inxaxheba",
    "title": "Hlola amalungelo angoku endaweni yokuxhomekeka kumarhe",
    "scene": "Umqeshi unika umsebenzi, ngoxa abanye abahlali bengavumelani ngokuba abafaki-zicelo bangangena nini kwimarike yezabasebenzi.",
    "question": "Kufuneka enze ntoni umfaki-sicelo?",
    "law": "Ukufikelela kwimarike yezabasebenzi kuxhomekeke kumthetho, ixesha nemiqathango esebenza kwisicelo somntu. Imfundo, impilo, izikhalazo nenkxaso yabantwana zinemigaqo yazo eyahlukileyo.",
    "plainLaw": "Hlola ukufaneleka kwakho ngoku uze ufumane imvume efunekayo ngaphambi kokuqalisa umsebenzi.",
    "sourceLabel": "Iziko lolwazi leBhunga laseIreland leembacu",
    "choices": {
      "current": { "label": "Hlola umgaqo wangoku wesi sicelo uze uqale kuphela emva kokunikwa kwayo nayiphi na imvume efunekayo.", "feedback": "Oku kuthintela ukusebenzisa umgaqo omdala okanye iimeko zomnye umntu kwityala lakho.", "consequence": "Isigqibo somsebenzi sisekelwe kulwazi lwangoku lomntu lowo." },
      "rumour": { "label": "Qala kuba omnye umhlali wavunyelwa ukuba asebenze.", "feedback": "Omnye umntu usenokuba wafaka isicelo phantsi kwemigaqo eyahlukileyo okanye ngelinye ixesha.", "consequence": "Umfaki-sicelo unokwenza into engenayo imvume efunwa lityala lakhe." },
      "never": { "label": "Cinga ukuba abafaki-zicelo abanakuze bafunde, basebenze okanye baveze iingxaki.", "feedback": "Abafaki-zicelo banamalungelo neendlela zenkxaso, nangona kukho imiqathango.", "consequence": "Amathuba nokhuseleko zinokuphoswa ngokungeyomfuneko." }
    }
  },
  "study:Plan": {
    "eyebrow": "Ngaphambi kokwamkela indawo yokufunda",
    "title": "Hlola ikhosi nazo zonke iindleko",
    "scene": "Isithembiso sekholeji siyonwabisa, kodwa uhlahlo-lwabiwo-mali luhlawula imali yokufunda neerenti zeeveki ezintandathu kuphela.",
    "question": "Yintoni ekufuneka ihlolwe ngaphambi kokuzibophelela?",
    "law": "Imvume yokufunda ixhomekeke kwikhosi, kwiziko eliyinikelayo, kwiimali, kwi-inshorensi nakwezinye iimfuno zangoku zokufudukela kweli lizwe.",
    "plainLaw": "Qinisekisa ukuba inkqubo ifanelekile uze wenze isicwangciso esinokwenzeka semali yokufunda, indlu, i-inshorensi nobomi bemihla ngemihla.",
    "sourceLabel": "Ukuza kufunda eIreland",
    "choices": {
      "budget": { "label": "Qinisekisa ikhosi neziko eliyinikelayo, uze ubale imali yokufunda, indlu, i-inshorensi neendleko zokuphila.", "feedback": "Ukwamkelwa yinxalenye enye kuphela yohambo lokufunda olunokwenzeka.", "consequence": "Umfundi angagqiba ukuba isicwangciso siyenzeka na ngokwemali nangokomthetho." },
      "job": { "label": "Cinga ukuba umsebenzi wexesha elingaphelelanga uza kuhlawula zonke iindleko ngoko nangoko.", "feedback": "Amalungelo okusebenza asikelwe umda yimiqathango yemvume, kwaye akukho siqinisekiso sengqesho.", "consequence": "Umfundi angafika engenamali yaneleyo kwiimfuno ezisisiseko." },
      "deposit": { "label": "Hlawula ummeli ongakhange aqinisekiswe ngaphambi kokuhlola inkqubo yokufunda.", "feedback": "Qinisekisa kuqala iziko, inkqubo yokufunda nendlela yokuhlawula.", "consequence": "Imali ingalahleka kwikhosi engayixhasiyo imvume ecetyiweyo." }
    }
  },
  "study:Prepare": {
    "eyebrow": "Imvume ngaphambi kokuhamba",
    "title": "Ukwamkelwa akuyi-visa",
    "scene": "I-imeyile yokwamkelwa ifikile, aze umfundi acinge ukuba kuphela koxwebhu olufunekayo ukuze ahambe.",
    "question": "Leliphi inyathelo elilandelayo elichanekileyo?",
    "law": "Abafundi ekufuneka bene-visa ngokuqhelekileyo bafuna i-visa efanelekileyo yokufunda nokuhlala ixesha elide. Bonke abafundi kufuneka bakwazi ukubonisa injongo nemiqathango yokufunda.",
    "plainLaw": "Landela uluhlu olusemthethweni lwabafundi abafudukela kweli lizwe; isithembiso sekholeji asithathi indawo yemvume yokuhamba.",
    "sourceLabel": "Ukuza kufunda eIreland",
    "choices": {
      "visa": { "label": "Landela inkqubo esemthethweni ye-visa ukuba iyafuneka, uze ulungise ubungqina bemali, i-inshorensi nekhosi.", "feedback": "Oku kudibanisa ukwamkelwa nendlela echanekileyo yokufudukela kweli lizwe.", "consequence": "Uhambo luxhaswa sisicwangciso sokufunda esipheleleyo nesingangqubaniyo." },
      "offer": { "label": "Sebenzisa i-imeyile yokwamkelwa njenge-visa ezenzekelayo.", "feedback": "Ukwamkelwa nemvume yokufudukela kweli lizwe zizinto ezahlukileyo.", "consequence": "Uhambo lunokusilela ngaphambi kokuba ikhosi iqale." },
      "tourist": { "label": "Ngena njengomkhenkethi uze utshintshe ngokufihlakeleyo emva kokuba iiklasi ziqalile.", "feedback": "Sebenzisa indlela yokufunda echanekileyo ngaphambi kokuhamba.", "consequence": "Umfundi usenokungakwazi ukubhalisa imvume ayifunayo." }
    }
  },
  "study:Travel": {
    "eyebrow": "Kulawulo lomda",
    "title": "Isicwangciso sokufunda kufuneka sicace",
    "scene": "Igosa libuza ukuba umfundi uza kuhlala phi, ikhosi ixhaswa njani ngemali nokuba iqala nini.",
    "question": "Kufuneka aphendule njani umfundi?",
    "law": "Ukungena kuvavanywa emdeni. Amaxwebhu neempendulo kufuneka abonise ukufunda okuyinyaniso nokulungiselelweyo.",
    "plainLaw": "Phatha ubungqina obuyinyaniso bekhosi, imali, i-inshorensi nendawo yokuqala yokuhlala.",
    "sourceLabel": "Inkonzo yaseIreland yezokufudukela kweli lizwe",
    "choices": {
      "show": { "label": "Phendula ngenyaniso uze ubonise ubungqina bekhosi, intlawulo, i-inshorensi, imali nendawo yokuhlala.", "feedback": "Amaxwebhu axhasa injongo yokufunda echaziweyo.", "consequence": "Igosa lingasiqonda isicwangciso ngaphandle kokuxhomekeka kuqikelelo." },
      "work": { "label": "Yithi eyona njongo ngumsebenzi wexesha elipheleleyo.", "feedback": "Oku kungqubana nesicelo sokufunda.", "consequence": "Injongo yohambo ibonakala ingahambelani nesicelo." },
      "guess": { "label": "Qikelela idilesi yekholeji nemihla yekhosi.", "feedback": "Abafundi kufuneka bazazi iinkcukacha ezisisiseko zenkqubo yabo.", "consequence": "Isicwangciso sokufunda sisenokubonakala singesosenene okanye singalungiselelwanga." }
    }
  },
  "study:Arrive": {
    "eyebrow": "Ikota yokuqala",
    "title": "Bhalisa uze uqhubeke nekhosi",
    "scene": "Iingxaki zendlu zenza kube lula ukucinga ngokulibazisa ukubhalisa nokungayi eziklasini.",
    "question": "Yeyiphi impendulo elukhusela kakuhle uhambo lokufunda?",
    "law": "Abafundi abafanelekileyo abangengabo abe-EEA abahlala ngaphezu kweentsuku ezingama-90 kufuneka babhalise imvume yabo baze baqhubeke behlangabezana nemiqathango yokuzimasa neyekhosi ehambisana nayo.",
    "plainLaw": "Bhalisa, qhubeka uthatha inxaxheba kwikhosi uze uxelele ikholeji kwangethuba xa iingxaki ezinzima zichaphazela ukuzimasa.",
    "sourceLabel": "Ukubhalisa imvume yokuhlala",
    "choices": {
      "support": { "label": "Lungiselela ukubhalisa, zimasa ikhosi uze uqhagamshelane nenkxaso yabafundi kwangoko ngeengxaki zendlu okanye zempilo-ntle.", "feedback": "Inkxaso yangethuba inceda ukukhusela uxanduva lwemfundo nolwemvume yokuhlala.", "consequence": "Iingxaki zirekhodwa ngaphambi kokuba zibe kukungabikho okungachazwanga okanye ukulahleka kobume." },
      "skip": { "label": "Yeka ukuzimasa ungaxelelanga ikholeji.", "feedback": "Ukuthatha inxaxheba kwikhosi kubalulekile kwimvume.", "consequence": "Iziphumo zemfundo nezemvume yokuhlala zinokongeza kwingxaki yendlu." },
      "pps": { "label": "Sebenzisa inombolo ye-PPS endaweni yokubhalisa.", "feedback": "Inombolo ye-PPS ayiyomvume yokufunda.", "consequence": "Inyathelo elifunekayo lokubhalisa imvume yokuhlala lihlala lingagqitywanga." }
    }
  },
  "study:Build a life": {
    "eyebrow": "Umsebenzi, uluntu namanyathelo alandelayo",
    "title": "Umsebenzi womfundi unemida",
    "scene": "Umqeshi unika iiyure zomsebenzi wexesha elipheleleyo ngexesha lezifundo aze athi akukho mntu uhlola imiqathango yabafundi.",
    "question": "Kufuneka enze ntoni umfundi?",
    "law": "Ilungelo lomfundi lokusebenza lixhomekeke kwisitampu nakwimiqathango yangoku. Ukudlula loo miqathango kungachaphazela ubume bokuhlala nezifundo.",
    "plainLaw": "Hlola iiyure nemihla evunyelwe yimvume yomfundi yangoku ngaphambi kokwamkela ishedyuli yomsebenzi.",
    "sourceLabel": "Izitampu zemvume yokuhlala",
    "choices": {
      "limits": { "label": "Hlola imiqathango yangoku ye-Stamp 2 uze wamkele kuphela umsebenzi ohambelana nayo.", "feedback": "Imiqathango yemvume ibalulekile nokuba umqeshi unika iiyure ezingakumbi.", "consequence": "Ingqesho ixhasa umfundi endaweni yokuphazamisa ikhosi nobume bakhe." },
      "full": { "label": "Yamkela iiyure ezingenamda kuba umqeshi ezivumile.", "feedback": "Umqeshi akanako ukwandisa imvume yokuhlala.", "consequence": "Umfundi unokwaphula imiqathango yokuhlala." },
      "cash": { "label": "Sebenza ngokungabhaliswanga ukuze iiyure zingabonakali.", "feedback": "Umsebenzi ongaxelwanga udala imingcipheko yengqesho, yerhafu neyemvume yokuhlala.", "consequence": "Umfundi ulahlekelwa lukhuseleko olubalulekileyo emsebenzini aze adale omnye umngcipheko." }
    }
  },
  "family:Plan": {
    "eyebrow": "Ngaphambi kokufuduka",
    "title": "Ubume bomxhasi bugqiba indlela",
    "scene": "Iqabane lomtshato eliseIreland likholelwa ukuba umtshato unika ngokuzenzekelayo amalungelo afanayo nawobumi baseIreland.",
    "question": "Yintoni ekufuneka iqinisekiswe kuqala?",
    "law": "Iindlela zosapho ziyahluka ngokuba umxhasi ungummi waseIreland, wase-UK, we-EEA okanye waseSwitzerland, ngumntu ongengowase-EEA, okanye ngumntu onikwe ukhuseleko lwamazwe ngamazwe.",
    "plainLaw": "Chonga ubume obuchanekileyo bomxhasi nohlobo lobudlelwane ngaphambi kokukhetha ifomu okanye i-visa.",
    "sourceLabel": "Ukuza kujoyina usapho eIreland",
    "choices": {
      "sponsor": { "label": "Hlola ubume bomxhasi, uhlobo lobudlelwane nemigaqo yangoku yemali namaxwebhu.", "feedback": "Oku kuchonga indlela yosapho echanekileyo.", "consequence": "Isicelo sakhelwa kumxhasi nakubudlelwane obukhoyo ngokwenene." },
      "marriage": { "label": "Cinga ukuba isatifikethi somtshato ngokuzenzekelayo sinika amalungelo okungena nokusebenza.", "feedback": "Ubungqina bobudlelwane bubalulekile, kodwa inkqubo yokufudukela kweli lizwe isafuneka.", "consequence": "Umntu angazama ukuhamba okanye ukusebenza engenayo imvume efunekayo." },
      "form": { "label": "Sebenzisa ifomu yokuqala yosapho efunyenwe kwi-intanethi, nokuba ubume bomxhasi buyintoni.", "feedback": "Abaxhasi namalungu osapho ahlukeneyo balandela iinkqubo ezahlukeneyo.", "consequence": "Isicelo esingachanekanga sinokubangela ukulibaziseka okanye ukwaliwa okunokuphepheka." }
    }
  },
  "family:Prepare": {
    "eyebrow": "Ubungqina nemvume",
    "title": "Bonisa isicwangciso sosapho esiyinyaniso",
    "scene": "La maqabane anemiyalezo notyelelo lweminyaka emininzi, kodwa ubungqina bendlu nobemali abucwangciswanga.",
    "question": "Yeyiphi eyona ndlela yokulungiselela?",
    "law": "Izicelo zosapho zinokuhlola ubudlelwane obufanelekileyo, ukufaneleka komxhasi, imali, indawo yokuhlala, ukuxhomekeka neminye imiqathango ethile yaloo ndlela.",
    "plainLaw": "Sebenzisa uluhlu olusemthethweni uze ucwangcise ubungqina obuyinyaniso bobudlelwane nesicwangciso sobomi.",
    "sourceLabel": "Isikhokelo sokujoyina usapho",
    "choices": {
      "file": { "label": "Yakha ifayile ecacileyo yobungqina usebenzisa uluhlu uze uchaze izikhewu eziyinyaniso.", "feedback": "Ubungqina obucwangcisiweyo nobuyinyaniso benza kube lula ukuvavanya isicelo.", "consequence": "Imbali yokwenene nesicwangciso sosapho ziyabonakala ngaphandle kwezinto eziqanjiweyo." },
      "fake": { "label": "Yenza amaxwebhu amatsha ngamaxesha anobungqina obuncinane.", "feedback": "Ubungqina bobuxoki bunokusonakalisa kakhulu isicelo.", "consequence": "Ukuthembeka kwesicelo sonke kunokuncipha." },
      "ignore": { "label": "Ungazihoyi iimfuno zemali okanye zendlu kuba ubudlelwane buyinyaniso.", "feedback": "Ubudlelwane bokwenene abususi yonke imiqathango yaloo ndlela.", "consequence": "Isikhewu sobungqina esinokuthintelwa sinokulibazisa okanye senze isicelo singaphumeleli." }
    }
  },
  "family:Travel": {
    "eyebrow": "Ukufika njengelungu losapho",
    "title": "Chaza injongo yokwenene emdeni",
    "scene": "Umhambi une-visa efanelekileyo okanye imvume efunyanwa ngaphambi kohambo, kwaye uceba ukuhlala nomxhasi.",
    "question": "Yintoni ekufuneka yenzeke xa engena?",
    "law": "Apho kufuneka i-visa okanye imvume yangaphambi kohambo, ixhasa ukuhamba ngenjongo yosapho echaziweyo. Ukungena nemvume yokuqala ziqwalaselwa emdeni.",
    "plainLaw": "Chaza injongo yosapho ngenyaniso uze uphathe imvume neenkcukacha zomxhasi.",
    "sourceLabel": "Ukuza kujoyina usapho",
    "choices": {
      "family": { "label": "Chaza injongo yosapho uze ubonise imvume, ubungqina bobudlelwane neenkcukacha zedilesi yomxhasi.", "feedback": "Ingcaciso ihambelana nesicelo namaxwebhu.", "consequence": "Igosa linokuvavanya ukungena ngokwesiseko sosapho esicwangcisiweyo." },
      "holiday": { "label": "Yithi yiholide emfutshane kuphela nangona uceba ukuhlala.", "feedback": "Injongo echaziweyo kufuneka ibe yinyaniso.", "consequence": "Ingxelo ingqubana nesicelo sosapho nokuhlala okucwangcisiweyo." },
      "none": { "label": "Ungaphathi iinkcukacha zoqhagamshelwano lomxhasi okanye zendawo yokuhlala.", "feedback": "Ubungqina obusisiseko bosapho nesicwangciso sokufika kufuneka bufikeleleke.", "consequence": "Umhambi angasokola ukuchaza ukuba uza kuhlala phi nabani." }
    }
  },
  "family:Arrive": {
    "eyebrow": "Ukubhalisa nemiqathango",
    "title": "Ungaqikeleli ukuba isitampu sivumela ntoni",
    "scene": "Umqeshi ovumela umsebenzi owenziwa kude ufuna ilungu losapho liqalise kwakhona umsebenzi ngoko nangoko lisuka kwidilesi yaseIreland.",
    "question": "Kufuneka enze ntoni umntu ngaphambi kokusebenza?",
    "law": "Ilungelo lokusebenza lixhomekeke kwimvume yokuhlala enikiweyo. Iimvume zosapho zinokwahluka ngokomxhasi nangendlela esetyenzisiweyo.",
    "plainLaw": "Bhalisa imvume apho kufunekayo uze uqinisekise imiqathango yayo yokusebenza ngaphambi kokuqalisa okanye ukubuyela emsebenzini eIreland.",
    "sourceLabel": "Izitampu zemvume yokuhlala",
    "choices": {
      "stamp": { "label": "Gqibezela ukubhalisa okufunekayo uze uhlole kanye ukuba imvume ivumela ntoni.", "feedback": "Imiqathango yesitampu okanye ye-IRP iphendula umbuzo womsebenzi.", "consequence": "Ingqesho iqala kuphela xa imvume yaseIreland iyivumela." },
      "spouse": { "label": "Cinga ukuba onke amaqabane omtshato ngokuzenzekelayo anamalungelo okusebenza angenamda.", "feedback": "Iimvume zosapho azifani zonke.", "consequence": "Umsebenzi unokuqalisa ngaphambi kokuba kufezekiswe umqathango ofunekayo." },
      "remote": { "label": "Cinga ukuba umsebenzi owenziwa ukude kumqeshi wangaphandle awukho phantsi kwemiqathango yaseIreland.", "feedback": "Ukusebenza ngoxa useIreland kunokubandakanya imigaqo yaseIreland yokufudukela elizweni, yerhafu neyengqesho.", "consequence": "Ulungiselelo lomsebenzi owenziwa kude ludala iingxaki zomthetho neerhafu ebezingalindelekanga." }
    }
  },
  "family:Build a life": {
    "eyebrow": "Ukuzimela nokuba yinxalenye yoluntu",
    "title": "Yakha inkxaso engaphaya komxhasi",
    "scene": "Ukufuduka kubangela ukuziva ulilolo, kwaye ilungu losapho lixhomekeke kumxhasi kuwo onke amaxwebhu, amadinga nonxibelelwano nabanye abantu.",
    "question": "Leliphi inyathelo elidala ukhuseleko olungakumbi?",
    "law": "Abafuduki bangafuna ulwazi oluzimeleyo ngemvume yokuhlala, umsebenzi, impilo, ukhuseleko neenkonzo zendawo. Inkxaso yongxamiseko neyeengcali isafumaneka xa ubudlelwane bungakhuselekanga.",
    "plainLaw": "Gcina iikopi zamaxwebhu akho uze ufunde indlela yokufikelela kwiinkonzo ezizimeleyo.",
    "sourceLabel": "Inkonzo yaseIreland yezokufudukela kweli lizwe",
    "choices": {
      "network": { "label": "Gcina iikopi zamaxwebhu akho uze unxibelelane neengcebiso ezizimeleyo, uluntu neenkonzo zempilo.", "feedback": "Uthungelwano olubanzi lwenkxaso luphucula ukuzimela nokhuseleko kubomi bemihla ngemihla.", "consequence": "Umntu angathatha izigqibo enolwazi engaxhomekekanga kubudlelwane obunye kuyo yonke into." },
      "all": { "label": "Vumela umxhasi agcine onke amaxwebhu namagama okungena afihlakeleyo.", "feedback": "Abantu abadala kufuneka bagcine ukufikelela okukhuselekileyo kwiinkcukacha zabo zesazisi neeakhawunti.", "consequence": "Isigqibo ngasinye sobomi sixhomekeka kumxhasi." },
      "silent": { "label": "Phepha inkxaso kuba ukubuza imibuzo kunokuchaphazela ubume bokuhlala.", "feedback": "Ulwazi oluthembekileyo noluyimfihlo lunceda abantu baqonde ukhetho lwabo.", "consequence": "Iingxaki zinokuba nzima ngakumbi ngaphambi kokuba kufunwe uncedo." }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Ukhuseleko, ukukhubazeka nobuzali",
    "title": "Ukhuseleko nokufikeleleka yimibuzo eyahlukeneyo",
    "scene": "UAdama uxelelwa ukuba ukusebenzisa isitulo esinamavili kungamqinisekisa ukhuseleko okanye kumthintele ekufakeni isicelo kunye nonyana wakhe.",
    "question": "Yintoni ekufuneka ikhokele isigqibo sakhe?",
    "law": "Isicelo sokhuseleko sivavanywa ngokomngcipheko womntu wentshutshiso okanye wokwenzakala kakhulu. Ukukhubazeka nokuba ngumzali okhulisa umntwana yedwa kunokudala iimfuno ezikhethekileyo zokwamkelwa okanye zenkqubo, kodwa azisigqibi ngokwazo isicelo.",
    "plainLaw": "Chaza uloyiko lokwenene lokubuyela kwilizwe osuka kulo uze uchonge ngokwahlukileyo inkxaso oyifunayo ukuze uthathe inxaxheba ngokukhuselekileyo kwinkqubo.",
    "sourceLabel": "IBhunga laseIreland leembacu: izicelo emva komhla we-12 kuJuni 2026",
    "choices": {
      "separate": { "label": "Chaza umngcipheko wokhuseleko ngenyaniso uze wenze uluhlu olwahlukileyo lweemfuno zokuhamba, zempilo nezobuzali.", "feedback": "Oku kugcina isicelo somthetho neemfuno zokufikeleleka zombini zibonakala.", "consequence": "Abenza izigqibo bafumana ingxelo yokhuseleko ngoxa abasebenzi bokwamkelwa bechonga inkxaso yobomi bemihla ngemihla." },
      "guarantee": { "label": "Cinga ukuba ukukhubazeka ngokuzenzekelayo kuqinisekisa ubume bokuba yimbacu.", "feedback": "Ukuba sesichengeni novavanyo lomthetho lokhuseleko azifani.", "consequence": "Uloyiko lomntu lokubuyela kwilizwe aphuma kulo lusenokungachazwa ngokufanelekileyo." },
      "hide": { "label": "Fihla ukukhubazeka kuba abazali abafuna inkxaso bengenakufaka isicelo.", "feedback": "Ukukhubazeka akususi ilungelo lokufuna ukhuseleko.", "consequence": "Inkxaso efunekayo yokwamkelwa neyenkqubo inokuphoswa." }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Ukuhlolwa kokuqala nokuba sesichengeni",
    "title": "Chaza yonke imfuno, hayi eyona ibonakalayo kuphela",
    "scene": "Isitulo esinamavili siyabonakala, kodwa iintlungu ezingapheliyo, ukwenzakala ngokwasengqondweni, amayeza nokukhathalela umntwana oneminyaka emithandathu azibonakali.",
    "question": "UAdama kufuneka alujonge njani uvavanyo lokuba sesichengeni?",
    "law": "Phantsi kwenkqubo ka-2026, abafaki-zicelo banikwa ithuba lovavanyo lokuba sesichengeni olwenziwa ngokuzithandela. Ukukhubazeka, ukuba ngumzali oyedwa, ukugula kakhulu namava obundlobongela ziphakathi kweendidi ezamkelweyo zokuchonga iimfuno ezikhethekileyo zokwamkelwa.",
    "plainLaw": "Sebenzisa uvavanyo ukuchaza iimfuno ezingabonakaliyo nezibonakalayo uze ucele ukuba ulwazi lurekhodwe ngokuchanekileyo.",
    "sourceLabel": "Uvavanyo lwe-IPAS lokuba sesichengeni",
    "choices": {
      "full": { "label": "Chaza iimfuno zokuhamba, iintlungu, amayeza, ukwenzakala ngokwasengqondweni nobuzali, usebenzisa itoliki xa ifuneka.", "feedback": "Iimfuno ezidibanayo zinokufuna iimpendulo zobomi ezahlukeneyo.", "consequence": "Uvavanyo lunika isiseko esipheleleyo ngakumbi sendawo yokuhlala nokuthunyelwa kwiinkonzo." },
      "chair": { "label": "Khankanya isitulo esinamavili kuphela kuba yonke enye into yeyabucala.", "feedback": "Nguye olawula into ayityhilayo, kodwa iimfuno ezingarekhodwanga kunokuba nzima ukuzilungiselela.", "consequence": "Iingxaki zeentlungu, amayeza okanye zobuzali zinokuhlala zingabonwa de kube kukho ingxaki engxamisekileyo." },
      "refuse": { "label": "Yala kuba ukwamkela uvavanyo kusenza buthathaka isicelo sokhuseleko.", "feedback": "Uvavanyo lwenziwa ngokuzithandela kwaye lujongana neemfuno zenkxaso kunokugqiba ubume bokhuseleko.", "consequence": "Indlela yokuchonga iimfuno ezikhethekileyo zokwamkelwa ilahleka ngenxa yesizathu esingachanekanga." }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Ukuhamba kwinkqubo yokwamkelwa",
    "title": "Ibhedi oyinikwayo isenokungasebenziseki",
    "scene": "Izithuthi eziya kwindawo yokuhlala zilungisiwe, kodwa uAdama ufumanisa ukuba igumbi lakhe likumgangatho ophezulu kwaye igumbi lokuhlambela alinakusetyenziswa ngokukhuselekileyo.",
    "question": "Yeyiphi impendulo edala eyona rekhodi icacileyo?",
    "law": "I-IPAS isebenzisa ulwazi lokuba sesichengeni ukujongana neemfuno ezikhethekileyo zokwamkelwa. Kukho iinkqubo zokubeka phambili iimfuno zempilo, zokudluliselwa phantsi kweemeko ezikhethekileyo nezokuqwalaselwa okongeziweyo, kodwa indawo ekhethwayo okanye ukudluliselwa ngokukhawuleza akuqinisekiswanga.",
    "plainLaw": "Chaza isithintelo esichanekileyo sokufikeleleka ngokubhala, nikezela ubungqina bempilo obukhoyo uze usebenzise inkqubo esemthethweni yokuyisa umba kwinqanaba eliphezulu.",
    "sourceLabel": "Indawo yokuhlala ye-IPAS nokuqwalaselwa kwezonyango",
    "choices": {
      "record": { "label": "Xela isithintelo esithile ngoko nangoko, gcina iikopi uze ucele ukuqwalaselwa kwezonyango okanye okukhethekileyo nge-IPAS.", "feedback": "Ubungqina obubhaliweyo obuneenkcukacha bunamandla kunesicelo nje sokufuduka.", "consequence": "I-IPAS ingavavanya eyona ngxaki yokhuseleko nokufikeleleka ngenkqubo efanelekileyo." },
      "leave": { "label": "Hamba ungaxelelanga mntu uze ucinge ukuba kuza kuvela elinye igumbi.", "feedback": "Ukuhamba kungamqhawula kwinkxaso yokwamkelwa ngaphandle kokusombulula isithintelo.", "consequence": "UAdama nomntwana wakhe bangajongana nokungabi nandawo yokuhlala kwaye kube nzima ukuqhagamshelana nabo." },
      "accept": { "label": "Sebenzisa igumbi elingakhuselekanga kuba abahlali bengenakubuza ngokufaneleka kwalo.", "feedback": "Iinkxalabo ngendawo yokuhlala neemfuno ezikhethekileyo zinokuphakanyiswa.", "consequence": "Ukuwa, ukungakwazi ukugcina ucoceko nokwanda kweentlungu kuba nokwenzeka ngakumbi." }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Ukufikeleleka kudliwano-ndlebe",
    "title": "Ukuthatha inxaxheba kungafuna uhlengahlengiso",
    "scene": "Indawo yodliwano-ndlebe, ukuhlala ixesha elide neziphumo ezingalindelekanga zamayeza zinokuthintela uAdama ekunikeni ingxelo epheleleyo.",
    "question": "Kufuneka enze ntoni ngaphambi kwedinga?",
    "law": "Abafaki-zicelo kufuneka beze baze basebenzisane nenkqubo, ngoxa bexela iimfuno zokukhubazeka, zonxibelelwano, zempilo nezinye zenkqubo kwangoko kangangoko kunokwenzeka. Icebiso leengcali zomthetho lingacacisa uhlengahlengiso olufanelekileyo nemihla yokugqibela.",
    "plainLaw": "Xelela i-IPO nomcebisi wezomthetho ukuba yintoni eyenza kube nzima ukuthatha inxaxheba ngaphambi kodliwano-ndlebe, hayi kuphela emva kokuba lungaphumelelanga.",
    "sourceLabel": "Iziko lomthetho elizimeleyo leBhunga laseIreland leembacu",
    "choices": {
      "early": { "label": "Qhagamshelana ne-IPO nomcebisi wezomthetho kwangethuba ngeenkxalabo ezithile zokufikeleleka, amakhefu, amayeza nokukhathalelwa komntwana.", "feedback": "Isaziso esineenkcukacha sangaphambili sinika inkqubo ithuba lokuphendula.", "consequence": "UAdama uyakwazi ukuthatha inxaxheba ngcono kwaye ukukhathalelwa konyana wakhe kungacwangciswa." },
      "miss": { "label": "Phoswa ludliwano-ndlebe ngaphandle koqhagamshelwano kuba ukukhubazeka kuxolela ukungabikho ngokuzenzekelayo.", "feedback": "Ungacingi ukuba ukungabikho kuza kuzichaza ngokwako.", "consequence": "Inyathelo elibalulekileyo lenkqubo linokuphoswa ngaphandle kokuba isizathu siqondwe." },
      "endure": { "label": "Ungathethi nto uze uqhubeke nokuba iintlungu ziphazamisa ugxininiso.", "feedback": "Ubunzima obungachazwanga bunokuchaphazela indlela ingxelo eviwa nerekhodwa ngayo.", "consequence": "Iinkcukacha ezibalulekileyo zinokushiywa okanye zibonakale zingangqinelani." }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Impilo, isikolo nokuzimela",
    "title": "Idinga elinye alinako ukusombulula zonke izithintelo",
    "scene": "UAdama ufuna ugqirha wosapho, ukuqhubeka efumana amayeza, indawo esikolweni, izithuthi ezifikelelekayo nolwazi ngokufaneleka kokusebenza.",
    "question": "Sesiphi isicwangciso esinokwenzeka ngokwenene?",
    "law": "Ezempilo, imfundo, indawo yokwamkelwa nokufikelela kwimarike yezabasebenzi zisebenza ngeenkonzo zaseIreland nangemigaqo yokufaneleka eyahlukeneyo. I-IPAS ipapasha iindlela nolwazi lwenkxaso olwahlukileyo nganye yazo.",
    "plainLaw": "Yenza inyathelo nomntu woqhagamshelwano owahlukileyo wezempilo, isikolo, indawo yokuhlala nemvume yokuhlala endaweni yokulinda inkonzo enye ilawule yonke into.",
    "sourceLabel": "Iinkonzo nenkxaso ye-IPAS",
    "choices": {
      "plan": { "label": "Yenza isicwangciso esinamacandelo amane uze ufune ummeli wamalungelo okanye umsebenzi wenkxaso oza kudibanisa imisebenzi engxamisekileyo.", "feedback": "Ukulungelelanisa kubalulekile kuba inkqubo nganye inomsebenzi owahlukileyo.", "consequence": "Amayeza nesikolo zinokubekwa phambili ngaphandle kokulibala indawo yokuhlala okanye uxanduva lwetyala." },
      "ipo": { "label": "Cela umsebenzi wetyala we-IPO alungise zonke iinkonzo zempilo, zesikolo nezothutho.", "feedback": "I-IPO ihlola isicelo sokhuseleko; ayilawuli zonke iinkonzo zokufika.", "consequence": "Iimfuno zobomi ezingxamisekileyo zithunyelwa kwiqumrhu elingafanelekanga." },
      "wait": { "label": "Lindela ubume bokhuseleko ngaphambi kokufuna ezempilo okanye indawo esikolweni.", "feedback": "Abafaki-zicelo nabantwana bangafikelela kwiinkonzo ngoxa ityala lisalindile, ngokwemigaqo efanelekileyo.", "consequence": "Impilo iba mandundu nomntwana ulahlekelwa lixesha lemfundo ngokungeyomfuneko." }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "Ukuhamba ngokukhululekileyo ngaphakathi kwe-EU",
    "title": "UElena akayidingi imvume yengqesho",
    "scene": "Umntu oqesha abasebenzi uxelela uElena ukuba abemi baseBulgaria bafuna imvume efanayo neyabasebenzi abangengabo abe-EEA aze afune ukumthengisela yona.",
    "question": "Kufuneka aqinisekise ntoni?",
    "law": "Njengommi we-EU, uElena angangena eIreland ngepaspoti esebenzayo okanye ikhadi lesazisi lesizwe aze asebenze ngaphandle kwemvume yengqesho yaseIreland. Kukho imiqathango yokuhlala emva kwexesha lokuqala.",
    "plainLaw": "Ungahlawuleli imvume yengqesho engafunwayo kummi we-EU; hlola imigaqo eyahlukileyo yokuhlala ixesha elide.",
    "sourceLabel": "Ukuza kusebenza usuka kwi-EU okanye kwi-EEA",
    "choices": {
      "eu": { "label": "Yala ukuthengiselwa imvume, qinisekisa umqeshi uze usebenzise ulwazi olusemthethweni lokuhlala lwabemi be-EU.", "feedback": "Ubummi bakhe be-EU butshintsha indlela yokufudukela kweli lizwe, kodwa akususi imfuno yomsebenzi wokwenene.", "consequence": "UElena uyabuphepha ubuqhophololo aze acwangcise ngokwamalungelo akhe okwenene okuhamba ngokukhululekileyo." },
      "buy": { "label": "Hlawula kuba ubudala nobuhlanga bamaRoma budala imfuno ekhethekileyo yemvume.", "feedback": "Ezo nkcukacha zobuntu azidali mfuneko yemvume yengqesho kummi we-EU.", "consequence": "Imali namaxwebhu anobuntununtunu zinikwa umntu oqesha abasebenzi onganyanisekanga." },
      "visitor": { "label": "Fihla isicwangciso sokusebenza kuba abemi be-EU banokutyelela kuphela.", "feedback": "Abemi be-EU banelungelo lokusebenza kwelinye ilizwe le-EU, phantsi kwemigaqo yokuhlala esebenzayo.", "consequence": "UElena usiqonda kakubi aze angasisebenzisi ngokwaneleyo isiseko somthetho anaso." }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "Ukuhlala emva kweenyanga zokuqala",
    "title": "Ukuhamba ngokukhululekileyo kusenemiqathango yokuhlala",
    "scene": "UElena uceba ukuhlala ngokungenasiphelo kodwa unesithembiso esifutshane somsebenzi wethutyana nemali encinane kakhulu ayigcinileyo.",
    "question": "Sesiphi isicwangciso esithembekileyo ngakumbi?",
    "law": "Abemi be-EU bangahlala eIreland ekuqaleni baze bahlale ixesha elide xa besebenzisa ilungelo lesivumelwano se-EU, njengengqesho, ukuzisebenzela, izifundo ezifanelekileyo okanye ukuzixhasa. Abafuna umsebenzi banokhuseleko nemiqathango ethile.",
    "plainLaw": "Gcina ubungqina bomsebenzi wokwenene okanye bokufuna umsebenzi uze uqonde ukuba sesiphi isiseko esixhasa ukuhlala emva kwexesha lokuqala.",
    "sourceLabel": "Amalungelo okuhlala kwabemi be-EU eIreland",
    "choices": {
      "evidence": { "label": "Gcina izicelo zomsebenzi, iikhontrakthi, iziliphu zomvuzo neerekhodi zendlu ngoxa uhlola isiseko sokuhlala esisebenzayo.", "feedback": "Ubungqina bunceda ukubonisa ukuba uElena uyasebenza okanye ufuna umsebenzi ngokwenene.", "consequence": "Isicwangciso sakhe sexesha elide sisekelwe kwilungelo lesivumelwano elixhaswa ngamaxwebhu." },
      "forever": { "label": "Cinga ukuba ubummi be-EU bunika ukuhlala ngokusisigxina ngaphandle kwemiqathango ukusukela kusuku lokuqala.", "feedback": "Ukungena ekuqaleni nokuhlala ixesha elide azifani.", "consequence": "UElena usenokufumanisa ingxaki yokuhlala kuphela xa ezama ukufikelela kwenye inkonzo." },
      "cash": { "label": "Yamkela umsebenzi wemali eziinkozo ongarekhodwanga kuba nawuphi na umsebenzi ubonisa ilungelo lokuhlala.", "feedback": "Umsebenzi ongaxelwanga unciphisa ukhuseleko lwengqesho kwaye usenokunganiki bungqina busebenzisekayo.", "consequence": "Ukuxhatshazwa kuyanda ngoxa imbali yakhe yomsebenzi ihlala inzima ukuyingqina." }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "Ukuqala umsebenzi",
    "title": "Inombolo ye-PPS ne-IRP azizizo iimvume zengqesho ze-EU",
    "scene": "Ihotele icela uElena ikhadi lemvume yokuhlala eIreland ngaphambi kokumfaka kwishedyuli yomsebenzi.",
    "question": "Kufuneka aphendule njani?",
    "law": "Abemi be-EU ngokuqhelekileyo ababhalisi kwiNkonzo yezokufudukela kweli lizwe (ISD) okanye bafumane i-IRP ukuze basebenzise amalungelo abo e-EU. Inombolo ye-PPS sisazisi esahlukileyo serhafu neenkonzo zoluntu.",
    "plainLaw": "Bonisa isazisi se-EU uze uchaze isiseko esichanekileyo selungelo lokusebenza; gqibezela amanyathelo erhafu nawe-PPS ngokwahlukileyo.",
    "sourceLabel": "Abemi be-EU abasebenza eIreland",
    "choices": {
      "explain": { "label": "Nika uxwebhu lwakhe lwesazisi saseBulgaria uze ucele icandelo labasebenzi ukuba lihlolisise imigaqo yabasebenzi be-EU.", "feedback": "Oku kulungisa imfuno ngaphandle kokuqamba uxwebhu angafanele abe nalo.", "consequence": "Umqeshi angamqalisa emsebenzini ngesiseko esichanekileyo se-EU." },
      "fake": { "label": "Thenga i-IRP yobuxoki kuba umqeshi enyanzelisa.", "feedback": "Ungaze wenze okanye uthenge amaxwebhu obuxoki okufudukela kweli lizwe.", "consequence": "Impazamo yomqeshi iba yingxaki enkulu yomthetho kuElena." },
      "ppswork": { "label": "Yithi inombolo ye-PPS luxwebhu olunika amalungelo okusebenza e-EU.", "feedback": "Inombolo ye-PPS ayidali ilungelo lokusebenza.", "consequence": "Iinkqubo ezimbini ezahlukileyo zihlala zibhidaniswa." }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Ucalucalulo kwizindlu",
    "title": "Ukwaliwa kungabandakanya okungaphaya kokukwazi ukuhlawula",
    "scene": "Umnini wendlu ubonakala evuma emnxebeni, aze athi igumbi alifumaneki emva kokubona uElena nokuva ukuba ungumRoma kwaye ungowasetyhini we-trans.",
    "question": "Yintoni anokuyenza uElena engakhange acinge ukuba konke ukwaliwa akukho mthethweni?",
    "law": "Umthetho waseIreland wokulingana uthintela ucalucalulo lwezindlu ngezizathu ezikhuselweyo eziquka ubuhlanga, isini nobudala. Ucalucalulo lwabantu be-trans lukhuselwe phantsi kwesizathu sesini, kodwa ubungqina nemida yexesha zibalulekile kwisikhalazo.",
    "plainLaw": "Rekhoda okwenzekileyo, gcina isibhengezo nemiyalezo uze ufune ngokukhawuleza icebiso lezindlu okanye lokulingana.",
    "sourceLabel": "IKhomishini yaseIreland yamalungelo oluntu nokulingana (IHREC): ubuhlanga nezindlu",
    "choices": {
      "save": { "label": "Gcina isibhengezo nemiyalezo, bhala oko kwathethwayo uze ufune icebiso kwi-IHREC okanye kwinkonzo yezindlu.", "feedback": "Ubungqina oburekhodwe ngelo xesha bunceda ukwahlula ucalucalulo kwenye ingcaciso.", "consequence": "UElena angavavanya isikhalazo ngoxa eqhubeka nokukhangela indlu ngokungxamisekileyo." },
      "threat": { "label": "Soyikisa umnini wendlu esidlangalaleni ngaphandle kokugcina ubungqina.", "feedback": "Umsindo uyaqondakala, kodwa ubungqina necebiso zidala indlela enamandla ngakumbi yokufumana isisombululo.", "consequence": "Isibhengezo siyanyamalala kwaye amazwi achanekileyo ocalucalulo kuba nzima ukuwangqina." },
      "accept": { "label": "Cinga ukuba ukucalucalula abaqeshi bezindlu abangamaRoma okanye abantu be-trans kusemthethweni kwipropati yabucala.", "feedback": "Iinkonzo zezindlu zabucala ziphantsi kwemigaqo yokulingana, ngokweenkcukacha zomthetho nemiqathango engaphandle.", "consequence": "Ukwaliwa okunokukhalazelwa ngokomthetho kushiyeka kungahlolwanga." }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "Ukulingana emsebenzini",
    "title": "Isiganeko esinye singabandakanya izizathu ezikhuselweyo ezininzi",
    "scene": "Umphathi uhlekisa ngendlela uElena athetha ngayo nangobuni bakhe, anike abasebenzi abancinci abangengomaRoma iishifti ezingcono aze athi makasebenzise ibheji yegama elahlukileyo.",
    "question": "Yeyiphi impendulo ekhusela le miba idibanayo?",
    "law": "Imithetho yokuLingana kweNgqesho ithintela ucalucalulo emsebenzini ngezizathu eziquka isini, ubuhlanga nobudala. Ucalucalulo lwabantu be-trans lukhuselwe phantsi kwesini; izikhalazo zasemsebenzini zinokusiwa kwi-WRC.",
    "plainLaw": "Rekhoda isiganeko ngasinye nendlela abaphathwa ngayo abanye abantu abanokuthelekiswa nawe, sebenzisa inkqubo yomqeshi apho kukhuselekileyo uze ufune icebiso lokulingana ngokukhawuleza.",
    "sourceLabel": "I-IHREC ngocalucalulo emsebenzini",
    "choices": {
      "log": { "label": "Gcina irekhodi enemihla yamazwi, iishifti namangqina, uze ufune isikhokelo se-IHREC okanye se-WRC.", "feedback": "Irekhodi ibonisa indlela ubuhlanga, ubuni nobudala ezinokusebenza kunye ngayo.", "consequence": "UElena angafuna isisombululo sangaphakathi okanye sangaphandle enolwazi ngaphambi kokulahleka kobungqina okanye kokuphela kwemihla yokugqibela." },
      "one": { "label": "Xela ubudala kuphela kuba isikhalazo esinye singenakubandakanya izizathu ezidibanayo.", "feedback": "Isikhalazo sinokuchaza izizathu ezikhuselweyo ezingaphezulu kwesinye xa iinyaniso zikuxhasa oko.", "consequence": "Imiba yobuhlanga nobuni yendlela aphathwa ngayo iyanyamalala kwingxelo." },
      "quit": { "label": "Yeka umsebenzi ngoko nangoko ngaphandle kokugcina iishedyuli, imiyalezo okanye ukufuna icebiso.", "feedback": "Ukhuseleko luza kuqala, kodwa ukugcina ubungqina nokufuna icebiso kungakhusela ukhetho lwexesha elizayo.", "consequence": "Ingeniso iyaphela kwaye indlela aqhubeka ephathwa ngayo kuba nzima ukuyingqina." }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Ukhuseleko lwangoku",
    "title": "Uloyiko ngemvume yokuhlala lungaba yinxalenye yolawulo olunyanzelayo",
    "scene": "Iqabane likaLeila lilawula ipaspoti, imali nefowuni yakhe, lize lithi amapolisa aseIreland aza kumgxotha elizweni ukuba uhamba nabantwana.",
    "question": "Yintoni ekufuneka ize kuqala?",
    "law": "Ukuphathwa gadalala ekhaya kunokuquka ulawulo olunyanzelayo kunye nobundlobongela bomzimba. Nabani na osengozini ekhawulezileyo kufuneka atsalele u-999 okanye u-112; ubume bokuhlala abuthinteli ixhoba ekuqhagamshelaneni ne-An Garda Síochána okanye nenkonzo yeengcali.",
    "plainLaw": "Beka ukhuseleko lwangoku noncedo lweengcali oluyimfihlo kuqala; umxhaphazi akagqibi ngobume bokuhlala.",
    "sourceLabel": "Inkxaso ye-Women’s Aid",
    "choices": {
      "safe": { "label": "Sebenzisa isixhobo esikhuselekileyo okanye umntu omthembileyo ukufikelela kuncedo olungxamisekileyo okanye lweenkonzo zokuphathwa gadalala ekhaya.", "feedback": "Isicwangciso sokhuseleko sinokuqwalasela abantwana, ulwimi, ukubekwa esweni namaxwebhu.", "consequence": "ULeila ufumana ukhetho oluyimfihlo ngaphandle kokuqala ngokujongana nomxhaphazi." },
      "confront": { "label": "Bhengeza isicwangciso sokuhamba uze ufune onke amaxwebhu xa uwedwa nomxhaphazi.", "feedback": "Ukujongana nomxhaphazi kungandisa ingozi; ingcali inganceda ukucwangcisa ukuphuma okukhuselekileyo ngakumbi.", "consequence": "Umxhaphazi angandisa ubundlobongela okanye athathe amaxwebhu nemali." },
      "believe": { "label": "Hlala kuba iqabane linegunya lomthetho lokuyalela ukugxothwa elizweni.", "feedback": "Iqabane lomtshato alenzi zigqibo zokufudukela nokuhlala elizweni.", "consequence": "Izoyikiso zobuxoki zemvume yokuhlala ziqhubeka zibamba uLeila nabantwana." }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Unxibelelwano lwabucala",
    "title": "Indlela ekhuselekileyo yoqhagamshelwano ibalulekile",
    "scene": "Iqabane lihlola imbali yesikhangeli se-intanethi lize liguqulele yonke ileta esemthethweni ngaphambi kokuba uLeila ayifunde.",
    "question": "Angalufuna njani ulwazi ngokukhuselekileyo ngakumbi?",
    "law": "I-ISD ilumkisa ukuba izixhobo zishiya imikhondo yedijithali kwaye ivumela ixhoba ukuba lisebenzise iinkcukacha zoqhagamshelwano zomntu olimeleyo. I-Women’s Aid ingafumana itoliki ize idibanise abafowunayo neenkonzo kwiindawo ngeendawo eIreland.",
    "plainLaw": "Sebenzisa isixhobo esikhuselekileyo ngakumbi neenkcukacha zoqhagamshelwano umxhaphazi angenakuzihlola; cela itoliki endaweni yokuxhomekeka kumxhaphazi.",
    "sourceLabel": "Izikhokelo ze-ISD zokufudukela kweli lizwe kumaxhoba okuphathwa gadalala ekhaya",
    "choices": {
      "private": { "label": "Sebenzisa isixhobo esithembekileyo, i-imeyile ekhuselekileyo okanye idilesi yomntu okumeleyo uze ucele ukutolikelwa ngokuzimeleyo.", "feedback": "Oku kunciphisa ukubekwa esweni kuze kunike uLeila ukufikelela ngqo kulwazi lwakhe.", "consequence": "Iinkonzo zenkxaso zinokunxibelelana ngaphandle kokudlulisa yonke into kwiqabane." },
      "shared": { "label": "Sebenzisa iakhawunti yosapho ekwabelwana ngayo kuba ukucima imbali kususa wonke umkhondo.", "feedback": "Ukucima imbali akuqinisekisi ukuba izenzo zifihlakele.", "consequence": "Iqabane lingasifumanisa isicwangciso sokhuseleko okanye semvume yokuhlala." },
      "translate": { "label": "Vumela iqabane litolike yonke incoko eyimfihlo.", "feedback": "Umntu otyholwa ngokuxhaphaza akufuneki alawule ukutolikwa kwecebiso lokhuseleko okanye lomthetho.", "consequence": "Ulwazi lunokutshintshwa, lufihlwe okanye lusetyenziswe ukoyikisa uLeila." }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Ubume bokuhlala obuzimeleyo",
    "title": "Ukuhamba akuyiphelisi ngokuzenzekelayo imvume",
    "scene": "Imvume kaLeila yokuhlala ixhomekeke kwiqabane lakhe, kwaye ukholelwa ukuba ukufudukela kwikhaya lokhuseleko kumaxhoba kuya kumenza ahlale ngokungekho mthethweni ngobo busuku.",
    "question": "Yeyiphi indlela ekufuneka ayiphande ngokungxamisekileyo?",
    "law": "Ixhoba elinemvume exhomekeke kumxhaphazi lingafaka isicelo semvume yokuhlala ezimeleyo ngokuthe ngqo okanye ngegqwetha phantsi kwezikhokelo ze-ISD zokuphathwa gadalala ekhaya. Akukho ntlawulo yesicelo kwaye isicelo siphathwa ngokuyimfihlo.",
    "plainLaw": "Fumana icebiso ngenkqubo yemvume ezimeleyo; ukushiya umxhaphazi nokuphulukana nobume azizenzekeli ngaxeshanye.",
    "sourceLabel": "Imvume ezimeleyo yamaxhoba okuphathwa gadalala ekhaya",
    "choices": {
      "apply": { "label": "Qhagamshelana ne-ISD okanye igqwetha ngeendlela ezikhuselekileyo uze ucele ubume obuzimeleyo phantsi kwezikhokelo.", "feedback": "Le nkqubo yenzelwe imvume exhomekeke kulowo utyholwa ngokuxhaphaza.", "consequence": "I-ISD ingavavanya iimeko zikaLeila ngokwakhe ngaphandle kokuba iqabane lilawule isicelo." },
      "permission": { "label": "Cela iqabane lisayine imvume yesicelo sakhe esizimeleyo.", "feedback": "Umxhaphazi akanandima yokuthatha isigqibo kwisicelo sobume obuzimeleyo.", "consequence": "Iqabane liyaziswa lize lifumane elinye ithuba lokuphazamisa ukhuseleko." },
      "automatic": { "label": "Cinga ukuba ukufudukela kwikhaya lokhuseleko kunika i-Stamp 4 ngokuzenzekelayo.", "feedback": "Imvume ezimeleyo ifuna isicelo novavanyo; ayizenzekeli.", "consequence": "ULeila angacinga ukuba inyathelo lemvume ligqityiwe kanti alikagqitywa." }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Ubungqina abunyanzelekanga bugqibelele",
    "title": "Asinguye wonke osindileyo onengxelo yamapolisa",
    "scene": "Uninzi lokuphathwa gadalala lwenzeke ekhaya. ULeila unemiyalezo notyelelo kugqirha wosapho kodwa akanamyalelo wenkundla okanye inombolo yesiganeko yeGarda.",
    "question": "Kufuneka asakhe njani isicelo?",
    "law": "I-ISD icela ulwazi oluninzi kangangoko kunokwenzeka ize inike imizekelo equka imiyalelo yenkundla, iingxelo zonyango okanye zeGarda, iileta zamaqumrhu karhulumente neenkonzo zobundlobongela basekhaya. Iimeko nabantwana kufuneka bachazwe; le mizekelo ayisosizathu sokuqamba ubungqina.",
    "plainLaw": "Qokelela oko kukhoyo ngokwenene, chaza izikhewu uze ucele igqwetha okanye inkonzo yenkxaso ikuncede uchaze imbali.",
    "sourceLabel": "Isikhokelo se-ISD sobungqina",
    "choices": {
      "genuine": { "label": "Gcina imiyalezo neerekhodi zokwenene, chaza indlela ukuxhatshazwa okuqhubeka ngayo uze ufune iileta ezixhasayo apho kufanelekile.", "feedback": "Ingxelo edibeneyo neyinyaniso ingasebenzisa iintlobo ezahlukeneyo zobungqina.", "consequence": "I-ISD ifumana imbali ekhoyo ngaphandle kokuba uxwebhu lobuxoki luyonakalise." },
      "wait": { "label": "Linda ukufuna uncedo ade abe nawo wonke umzekelo okuluhlu lwe-ISD.", "feedback": "Ukhuseleko necebiso akufuneki zilibaziswe ngenxa yokufuna ifayile egqibeleleyo.", "consequence": "Ingozi iyaqhubeka nobungqina obuluncedo bunokulahleka." },
      "create": { "label": "Qamba inombolo yengxelo yeGarda kuba ubungqina obusemthethweni busoloko bufuneka.", "feedback": "Ungaze uqambe ubungqina.", "consequence": "Ulwazi lobuxoki lungonakalisa ukuthembeka nesicelo semvume yokuhlala." }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Emva kokufumana ukhuseleko lwangoku",
    "title": "Imvume yokuhlala yinxalenye enye yokuphila kwakhona",
    "scene": "ULeila ufuna ingeniso, indlu ekhuselekileyo, ukuqhubeka kwemfundo yabantwana nenkxaso eyamkelayo abantu be-LGBT ngoxa imibuzo yomthetho wosapho ingekasonjululwa.",
    "question": "Leliphi inyathelo elilandelayo elinokwenzeka ngokwenene?",
    "law": "Ukuba imvume ezimeleyo ivunyiwe phantsi kwezikhokelo, i-Stamp 4 ivumela ukusebenza ngaphandle kwemvume yengqesho. Iimfuno zokhuseleko, izindlu, abantwana nomthetho wosapho zisafuna iinkonzo zeengcali ezahlukeneyo; ukuba isicelo siyaliwe, kufuneka kuchazwe izizathu zokwaliwa nezinye iindlela zemvume yokuhlala.",
    "plainLaw": "Yakha isicwangciso esidibeneyo semvume yokuhlala, ukhuseleko, abantwana, indlu nengeniso endaweni yokulindela isigqibo esinye sisombulule yonke into.",
    "sourceLabel": "Izikhokelo ze-ISD zokufudukela kweli lizwe kumaxhoba okuphathwa gadalala ekhaya",
    "choices": {
      "team": { "label": "Sebenzisa umcebisi wemvume yokuhlala, inkonzo yokuphathwa gadalala ekhaya nenkxaso efanelekileyo yosapho, yezindlu neye-LGBT kunye.", "feedback": "Iingcali ezahlukeneyo zingajongana neemfuno ezinxulumeneyo kodwa ezahlukileyo emthethweni.", "consequence": "ULeila angaphinda akhe ukuzimela ngaphandle kokuba inkonzo enye ilibale abantwana okanye enye ilibale ubume bokuhlala." },
      "stamp": { "label": "Cinga ukuba i-Stamp 4 ngokuzenzekelayo inika indlu ize isombulule amalungiselelo abantwana.", "feedback": "Imvume yokuhlala ayigqibi ngezindlu okanye imiba yomthetho wosapho.", "consequence": "Iimfuno ezingxamisekileyo zobomi nezomthetho zihlala zingahoywanga." },
      "return": { "label": "Buyela kwiqabane kuba ukuvunywa kungaqinisekiswanga.", "feedback": "Ukungaqiniseki kufuna isicwangciso seengcali, hayi ukunyanzelwa ukuba ubuyele engozini.", "consequence": "Ulawulo olunyanzelayo luyaqala kwakhona ngaphambi kokuba ukhetho oluzimeleyo luvavanywe ngokufanelekileyo." }
    }
  }
} satisfies JourneyTranslationCatalog;

export default catalog;

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Ngubani ekufuneka abhalise, yintoni erekhodwa kukubhalisa nendlela yokusebenzisa inkqubo esemthethweni.",
  "Personal Public Service number": "Indlela inombolo ye-PPS esetyenziswa ngayo kwiinkonzo zoluntu nakwimisebenzi esemthethweni. Ayiyomvume yokufudukela nokuhlala elizweni.",
  "Choose an immigration purpose": "Iindawo zokuqala ezisemthethweni zokutyelela, ukusebenza, ukufunda, ukuhlala eIreland okanye ukujoyina usapho.",
  "Immigration permission stamps": "Qonda ukuba isitampu esikwikhadi lemvume yokuhlala eIreland sivumela ntoni kwaye sifuna ntoni.",
  "Applying for international protection": "Ulwazi olusemthethweni ngenkqubo yaseIreland yokufaka nokuhlola isicelo.",
  "Applications made after 12 June 2026": "Ulwazi ngolwimi olulula ngoMthetho woKhuseleko lwaMazwe ngaMazwe ka-2026 nemigaqo esebenza kwizicelo ezitsha.",
  "Accommodation and reception supports": "Ulwazi ngeendawo zokuhlala ze-IPAS, iinkonzo, impilo-ntle yabahlali nezikhalazo.",
  "Vulnerability and accommodation needs": "Indlela abafaki-zicelo abanokuchaza ngayo ukukhubazeka, impilo, ubuzali nezinye iimfuno ezikhethekileyo zokwamkelwa, nendlela eziqwalaselwa ngayo iinkxalabo zendawo yokuhlala.",
  "Independent legal and practical support": "Ulwazi, ukumela amalungelo neenkonzo zomthetho, zezindlu, zengqesho, zolutsha nezokuhlaliswa kwakhona.",
  "Employment permit types": "Iindidi zangoku zeemvume, ukufaneleka, izintlu zemisebenzi, isikhokelo sokufaka isicelo nohlaziyo.",
  "Rights when working in Ireland": "Umvuzo, imiqathango, ixesha lomsebenzi, ikhefu, iirekhodi neendlela zokukhalaza emsebenzini.",
  "Migrant employment and exploitation support": "Ulwazi nenkxaso ezizimeleyo kubasebenzi abasuka kwamanye amazwe, kuquka abantu abasemngciphekweni wokuxhatshazwa.",
  "EU citizens coming to work": "Amalungelo okusebenza kwabemi be-EU ne-EEA, kuquka ukuba kutheni imvume yengqesho yaseIreland ngokuqhelekileyo ingafuneki.",
  "EU residence rights": "Iziseko abemi be-EU abanokungena baze bahlale ngazo eIreland, kuquka umsebenzi, ukufuna umsebenzi, ukufunda nokuzixhasa.",
  "Coming to study in Ireland": "Ulwazi lwe-visa, imali, i-inshorensi, ikhosi nokubhalisa kubafundi abangengabo abe-EEA.",
  "Education in Ireland": "Ulwazi loluntu ngezikolo, imfundo eqhubekayo, imfundo ephakamileyo neenkxaso zemfundo.",
  "Healthcare services": "Indlela yokufikelela koogqirha bosapho, izibhedlele, iinkonzo zongxamiseko nolwazi lwempilo yoluntu eIreland.",
  "Finding and renting a home": "Ulwazi ngezindlu, ukuqesha, amalungelo abaqeshi bezindlu, iidiphozithi, ukungabi nandawo yokuhlala nenkxaso yezindlu.",
  "Independent public information": "Ulwazi lukazwelonke ngentlalontle, impilo, izindlu, imali, irhafu, imfundo namalungelo abathengi.",
  "Traveller and Roma equality rights": "Ulwazi ngocalucalulo olujongene noluntu lwamaTraveller nolwamaRoma nangokhuseleko olufumanekayo phantsi komthetho waseIreland wokulingana.",
  "Coming to join family": "Fumana indlela ngokuba umxhasi ungummi waseIreland, wase-UK, we-EEA okanye waseSwitzerland, ungumntu ongengowase-EEA, okanye unobume bokhuseleko.",
  "Specialist migrant and refugee advice": "Ulwazi noncedo kumatyala abantu ngabanye ngemvume yokuhlala, ii-visa, ukudityaniswa kosapho, ubummi neemeko zokwamkelwa.",
  "Independent status after domestic abuse": "Isikhokelo esiyimfihlo semvume yokuhlala kwixhoba elinemvume exhomekeke kulowo utyholwa ngokuxhaphaza, kuquka indlela yokufaka isicelo nobungqina obunokunceda.",
  "Domestic-abuse safety and support": "Inkxaso eyimfihlo, ukutolikelwa nolwazi lokhuseleko kubafazi abaphathwa gadalala ekhaya; tsalela u-999 okanye u-112 kwimeko yongxamiseko."
};

export const controls = {
  "resume": "Qhubeka",
  "resumeJourney": "Qhubeka no{name}",
  "restart": "Qala olu hambo kwakhona",
  "savedJourney": "Uhambo olugciniweyo",
  "stage": "Inqanaba",
  "returnHome": "Buyela kwiihambo",
  "saveUnavailable": "Inkqubela ayinakugcinwa kwesi sikhangeli. Gcina eli phepha livuliwe ukuze uqhubeke."
} satisfies JourneyControls;
