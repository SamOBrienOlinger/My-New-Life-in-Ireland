import type { LearningCopy } from "./en";

const copy = {
  recapTitle: "Uhambo lwakho no{name}",
  recapIntro: "Jonga izigqibo ozenzileyo, ubuyele kwezo zifuna ukuphinda ziqwalaselwe, uze ufumane imithombo eluncedo yenyathelo elilandelayo.",
  decisionsTitle: "Izigqibo zakho, zichaziwe",
  revisitCount: "Izigqibo zokuphinda uziqwalasele: {count}",
  allConsidered: "Kwinqanaba ngalinye, uchonge ukhetho olusekelwe kulwazi oluthe kratya. Jonga izizathu nemithombo engezantsi.",
  yourChoice: "Ukhethe",
  informedChoice: "Ukhetho olusekelwe kulwazi oluthe kratya",
  worthRevisiting: "Kufanelekile ukuphinda kujongwe",
  saferOption: "Ukhetho onokuluqwalasela",
  revisitDecision: "Phinda uqwalasele esi sigqibo",
  revisitLabel: "Phinda uqwalasele {stage}: {title}",
  returnToRecap: "Buyela kwisishwankathelo sohambo lwakho",
  misunderstanding: "Ukungaqondi okuqhelekileyo",
  nextStep: "Inyathelo elilandelayo eliluncedo",
  checkSource: "Hlola izikhokelo",
  relatedResources: "Imithombo yolu hambo",
  relatedIntro: "Qala ngemibuzo evela kwizigqibo zakho. Umthombo ngamnye unenjongo yawo nemiqathango yawo.",
  openResource: "Vula umthombo",
  reflectTitle: "Yima uze ucingisise",
  reflectIntro: "Cinga ngeemeko zalo mntu uyiliweyo. Le mibuzo ayinamanqaku.",
  controlPrompt: "Yintoni eyayiphantsi kolawulo lwalo mntu, yaye yintoni eyayixhomekeke kwabanye abantu, kwiinkonzo okanye kwiimeko?",
  supportPrompt: "Yeyiphi inkxaso enokwenza inyathelo elilandelayo libe lula ngakumbi?",
  livedContext: "Hlala uqwalasela iimeko zomntu",
  sourcePublisher: "Upapashwe ngu",
  sourceScope: "Imixholo equkiweyo",
  sourceChecked: "Umhla wokujongwa komthombo",
  sourceUndated: "Umhla wokujongwa awubhalwanga",
  sourceDateMeaning: "Umhla wokujongwa ubonisa ukuba iphepha eliqhagamshelweyo lahlolwa nini kule projekthi. Asingomhla umpapashi awayelihlaziye ngawo iphepha, kwaye awuqinisekisi ukuba umgaqo awutshintshanga.",
  sourceMethod: "Indlela esisebenzisa nesihlola ngayo imithombo",
  sourceMethodIntro: "Amakhonkco ezikhokelo akusa kwiziko likarhulumente elijongene naloo mbandela okanye kumbutho weengcali ochazwe ngegama. Xa ezo nkcukacha zibhaliwe, umpapashi, umxholo nomhla wokujongwa zivela ecaleni komthombo ngamnye. Vula umthombo ukuze uhlole imiqathango yawo yangoku nokuba usebenza kubani.",
  sourceMethodContent: "Amabali enza iimeko zibe lula ukuze kuncedwe ukufunda. Ingxelo yempendulo ichaza isigqibo esikuloo meko; ayikwazi ukuvavanya ukuba umntu wokwenene uyazifezekisa na iimfuno. Amanqaku abonisa ukhetho olwenziwe kulo msebenzi wokufunda, hayi ukulungela ukufudukela kwelinye ilizwe okanye isiphumo ekusenokwenzeka ukuba isicelo sibe naso.",
  sourceMethodTranslation: "Iinguqulelo zijolise ekugcineni iimeko, iintsingiselo zeempendulo namakhonkco emithombo zifana. Zizixhobo zokufunda, kodwa azizizo iinguqulelo ezisemthethweni zezikhokelo eziqhagamshelweyo. Ulwazi lwangoku lompapashi wokuqala luhlala lungumthombo wokubhekisa kuwo xa kusenziwa izigqibo zokwenene.",
  sourceMethodReflection: "Imibuzo yokucingisisa iphonononga imiqobo ekumabali ayiliweyo, kuquka ukungaqiniseki, uxanduva lokunyamekela abanye, iimfuno zokufikelela kwiinkonzo nokuxhomekeka kwabanye. Le mibuzo ayibangi ukuba imele amava abo bonke abafuduki okanye ukuba ibubungqina obuvela kumntu wokwenene.",
  sourceMethodLink: "Funda ngemithombo yethu",
  professionalTitle: "Ukubhaliswa kwabongikazi nababelekisi",
  professionalDescription: "Kubongikazi nababelekisi abafumene iziqinisekiso zabo ngaphandle kwe-EU: hlola ukwamkelwa kweziqinisekiso nokubhaliswa njengengcali kwi-NMBI, kunye neemfuno ezifanelekileyo zokufudukela kweli lizwe.",
  professionalAction: "Hlola amanyathelo okubhaliswa njengengcali afunekayo kulo msebenzi wobongikazi.",
  taxTitle: "Ukubhalisa umsebenzi wakho wokuqala ngeenjongo zerhafu",
  taxDescription: "Kubantu abaqala umsebenzi wabo wokuqala eIreland: iRevenue ichaza indlela yokubhalisa umsebenzi usebenzisa inombolo ye-PPS ne-myAccount, nendlela oku kunceda ngayo ukuphepha irhafu yongxamiseko.",
  taxAction: "Hlola amanyathelo eRevenue okubhalisa umsebenzi wokuqala xa ulungiselela ukuqala umsebenzi.",
  scopes: {
    immigration: "Iimvume nemiqathango yokufudukela kweli lizwe",
    employment: "Iimvume zengqesho namalungelo emsebenzini",
    protection: "Ukhuseleko lwamazwe ngamazwe nokwamkelwa",
    "public-services": "Iinkonzo zoluntu nobomi bemihla ngemihla",
    equality: "Ukulingana nocalucalulo",
    "specialist-support": "Ulwazi nenkxaso ezizimeleyo ezivela kwiingcali",
    "professional-registration": "Iziqinisekiso zobungcali nokubhaliswa",
    "general-information": "Ulwazi ngokubanzi nokwalathiswa kwiinkonzo",
  },
  insights: {
    offer: {
      explanation: "Isithembiso somsebenzi asiyomvume yengqesho. Kusafuneka kuhlolwe imisebenzi eyenziwayo ngokwenene, umqeshi nemiqathango yangoku yemvume.",
      action: "Thelekisa isithembiso esibhaliweyo noluhlu olusemthethweni lokuhlola, uze ubhale oko kusafuneka kuqinisekiswe.",
    },
    permissions: {
      explanation: "Ukufumana imvume enye akuwagqibezeli onke amanyathelo okufudukela kweli lizwe. Imvume yokusebenza, i-visa xa ifuneka, ukungena elizweni nokubhaliswa kwemvume yokuhlala ziphendula imibuzo eyahlukileyo.",
      action: "Yenza uluhlu lweemvume namaxwebhu afunekayo kule ndlela yokufuduka, usebenzisa umthombo wangoku.",
    },
    travel: {
      explanation: "Imvume ayiyiphelisi imfuneko yokuchaza injongo yokwenene yohambo. Ingxelo yomntu namaxwebhu axhasayo kufuneka zihambelane.",
      action: "Chonga amaxwebhu acacisa olu hambo, uze uwagcine ngokukhuselekileyo apho unokuwafumana xa uhamba.",
    },
    registration: {
      explanation: "Inombolo ye-PPS, idinga nemvume yokufudukela kweli lizwe zineenjongo ezahlukeneyo. Ukugqiba inkqubo yenkonzo enye akuthethi ukuba nezinye zigqityiwe.",
      action: "Hlola ukuba ngawaphi amanyathelo okubhalisa asebenzayo, uze ugcine ingxelo eyahlukileyo yedinga ngalinye nemfuneko nganye.",
    },
    workRights: {
      explanation: "Ukuxhomekeka kumqeshi akuthethi ukuba kufuneka wamkele yonke into ayifunayo. Imiqathango yokufudukela kweli lizwe namalungelo engqesho yimiba eyahlukileyo ekufuneka uyihlole nenkonzo efanelekileyo.",
      action: "Gcina ngokukhuselekileyo iirekhodi zeeyure zomsebenzi, umvuzo nemiyalezo, uze uchonge umthombo ozimeleyo weengcebiso ngengqesho.",
    },
    protection: {
      explanation: "Akukho mazwi alungiselelwe kwangaphambili anokuqinisekisa ukufumana ukhuseleko. Iimeko zomntu ngokwakhe, ingxelo eyinyaniso nenkqubo esebenzayo zibalulekile.",
      action: "Sebenzisa ulwazi lokhuseleko olusebenza kweso sicelo, uze uchonge apho unokucela khona uncedo lwezomthetho oluzimeleyo.",
    },
    evidence: {
      explanation: "Ukungabikho kobungqina akusosizathu sokubuqamba. Ukuchaza izikhewu zokwenene nokubuza ukuba bobuphi obunye ubungqina obunokunceda kwahlukile ekutshintsheni ibali.",
      action: "Dwelisa ubungqina obukhoyo, obungekhoyo noko kufuneka kuxoxwe ngako nomcebisi.",
    },
    services: {
      explanation: "Inkonzo enceda ngemfuno enye isenokungabi negunya lokwenza isigqibo ngomnye umba. Indawo yokuhlala, izigqibo zokhuseleko, ukhathalelo lwempilo neengcebiso zomthetho zinendima ezahlukeneyo.",
      action: "Nxulumanisa umbuzo wangoku nenkonzo ejongene nawo, uze ubhale ukuba ngubani oza kuqhagamshelana naye ngokulandelayo.",
    },
    protectionWork: {
      explanation: "Amava omnye umfaki-sicelo asenokungamiseli ilungelo lalo mntu lokusebenza. Kufuneka kuhlolwe inkqubo esebenzayo, amaxesha achaphazelekayo nemvume yomntu ngamnye.",
      action: "Hlola izikhokelo zangoku zokufikelela kwimarike yezabasebenzi kunye nemvume yomntu ngaphambi kokwenza isicwangciso somsebenzi.",
    },
    study: {
      explanation: "Ukwamkelwa ekholejini akuwalungisi amalungiselelo okufudukela kweli lizwe, awendawo yokuhlala okanye awezemali. Isicwangciso sokufunda esinokusebenza kufuneka siqwalasele into nganye kwezi.",
      action: "Sebenzisa uluhlu lokuhlola lwabafundi ukuze uchonge imibuzo esafuna ukusonjululwa ngekhosi, imali, i-inshorensi nendawo yokuhlala.",
    },
    studentWork: {
      explanation: "Imvume yomfundi ayiyomvume yokusebenza ngaphandle kwemida. Isitampu semvume anayo ngokwenene, iiyure ezivunyelweyo nemihla efanelekileyo zibalulekile.",
      action: "Thelekisa ishedyuli yomsebenzi ecetywayo nemiqathango yangoku yemvume yomfundi.",
    },
    family: {
      explanation: "Akukho sicelo sinye sosapho esifanele wonke umntu. Izikhokelo ezifanele ukusetyenziswa zixhomekeke kubume bomxhasi nobudlelwane.",
      action: "Fumana izikhokelo ezisebenza kulo mxhasi nakolu budlelwane, uze uhlolisise iimfuno zazo zobungqina.",
    },
    familyWork: {
      explanation: "Ukuya kuhlala nosapho akuchazi ngokwako onke amalungelo okusebenza. Kufuneka kuhlolwe imiqathango yemvume yokufudukela kweli lizwe umntu anayo ngokwenene.",
      action: "Hlola imvume ebhaliweyo nemiqathango yayo yokusebenza ngaphambi kokuxhomekeka koko kucingelwa ngumqeshi.",
    },
    support: {
      explanation: "Imvume yodwa ayizisombululi iingxaki zendawo yokuhlala, impilo, ingeniso okanye ukungabi nonxibelelwano nabanye. Iimfuno ezahlukileyo zinokufuna imithombo eyahlukileyo yoncedo.",
      action: "Khetha imfuno enye yangoku, uze uchonge inkonzo ezimeleyo efanelekileyo okanye unxibelelwano oluluncedo noluntu.",
    },
    access: {
      explanation: "Ukubonelelwa ngenkonzo akuthethi ukuba umntu uyakwazi ukuyisebenzisa. Ukukhubazeka okubonakalayo nako kusenokuba yinxalenye enye kuphela yeemfuno zomntu zenkxaso.",
      action: "Chaza umqobo othile, cela ukuba iimfuno zibhalwe phantsi, uze uchonge umntu okanye inkonzo efanelekileyo yokufumana inkxaso okanye yokufaka isikhalazo.",
    },
    participation: {
      explanation: "Ubunzima bokuthatha inxaxheba akufanele buthathwe njengokungabi namdla. Iimfuno zokutolikelwa, ezempilo okanye ezokufikelela kwinkonzo zisenokufuna ukuba kuxoxwe ngenkxaso kwangaphambili.",
      action: "Xelela inkonzo efanelekileyo nomcebisi ukuba yeyiphi inkxaso enokufuneka ukuze umntu athathe inxaxheba edingeni.",
    },
    euWork: {
      explanation: "Ukuba ngummi we-EU kutshintsha umba wemvume yengqesho. Ukubhalisela irhafu nenombolo ye-PPS zahlukile kwisiseko selungelo lomntu lokusebenza.",
      action: "Hlola izikhokelo zabemi be-EU, uze ujongane nemfuneko nganye yeenkonzo zoluntu ngokwayo.",
    },
    euResidence: {
      explanation: "Ukuhamba ngokukhululekileyo akuthethi ukuba zonke iimeko zokuhlala zinemiqathango efanayo. Kufuneka kuqwalaselwe isiseko nobude bexesha lokuhlala.",
      action: "Chonga isiseko esifanelekileyo sokuhlala nobungqina obunokufuneka kule meko.",
    },
    equality: {
      explanation: "Ukwaliwa okanye isiganeko emsebenzini kunokuphakamisa imiba yokulingana engaphezu komnye. Ubuwena bomntu bodwa abumiseli ukuba ibango lomthetho liza kuphumelela na.",
      action: "Gcina ingxelo esekelwe kwiinyaniso yoko kwenzekileyo, uze ufune ingcebiso kwangethuba ngenkqubo efanelekileyo nemida yexesha.",
    },
    abuse: {
      explanation: "Isoyikiso seqabane elixhaphazayo asisosigqibo sezokufudukela kweli lizwe. Inkxaso yokhuseleko neengcebiso ngemvume ezimeleyo zijongene neemfuno ezinxulumeneyo kodwa ezahlukeneyo.",
      action: "Chonga indlela ekhuselekileyo yokunxibelelana nenkonzo yeengcali yenkxaso, uze ubuze ngenkqubo efanelekileyo yemvume ezimeleyo.",
    },
    safeContact: {
      explanation: "Indlela yokunxibelelana iluncedo kuphela xa umntu enokuyisebenzisa ngokukhuselekileyo. Ukusebenzisa isixhobo, iakhawunti okanye itoliki ekwabelwana ngayo kusenokungakhuseli ubumfihlo.",
      action: "Qwalasela indlela ekhuselekileyo ngakumbi yokunxibelelana kunye nenkonzo yeengcali yenkxaso, uthathela ingqalelo iimeko zomntu.",
    },
  },
  reflections: {
    critical: "Umhla wokuqalisa umsebenzi, iimfuno zobungcali okanye uxinzelelo oluvela kumqeshi zingalichaphazela njani ixesha elikhoyo lokwenza isigqibo esisekelwe kulwazi?",
    general: "Iintlawulo zokuqeshwa, ukulawulwa kwamaxwebhu okanye ukuxhomekeka kumqeshi kunokwenza njani kube nzima ngakumbi ukubuza imibuzo ngelungiselelo elingakhuselekanga?",
    protection: "Uloyiko, ukudinwa kakhulu, ukwahlukana nosapho okanye ukungabikho kwamaxwebhu kunokuchaphazela njani ukukwazi komntu ukuchaza okwenzekileyo?",
    study: "Iindleko zendlu, uxinzelelo lwezemali okanye ukuziva ulilolo kunokuchaphazela njani ukukwazi komfundi ukuqhubeka nekhosi?",
    family: "Umntu angakwazi njani ukuzakhela indlela yokufikelela kulwazi, kumaxwebhu nakwinkxaso ngokuzimeleyo ngoxa ezinza kunye nosapho?",
    "protection-access": "Ukufikelela kwiinkonzo ngokwenene kungabonakala njani xa kufuneka kuqwalaselwe ukukwazi ukuhamba, iintlungu, ukukhulisa abantwana namadinga ngaxeshanye?",
    "eu-mobility": "Amalungelo asemthethweni namava emihla ngemihla angahluka njani xa ubuhlanga, ucalucalulo ngokobudala okanye ucalucalulo olujoliswe kubantu abanesazisi sesini esahlukileyo kwisini ababelwe sona ekuzalweni kuchaphazela ukufikelela emsebenzini nakwindawo yokuhlala?",
    "family-safety": "Ukulawulwa kwemali, imiqobo yolwimi, abantwana nesixhobo esibekwe esweni kunokulunciphisa njani ukhetho olubonakala lukhona?",
  },
} satisfies LearningCopy;

export default copy;
