// AI-assisted translation; see README language review notes.
import type { JourneyControls, JourneyTranslationCatalog } from "./types";

export const controls: JourneyControls = {
  "resume": "Endelea",
  "resumeJourney": "Endelea pamoja na {name}",
  "restart": "Anza upya safari hii",
  "savedJourney": "Safari iliyohifadhiwa",
  "stage": "Hatua",
  "returnHome": "Rudi kwenye safari",
  "saveUnavailable": "Maendeleo hayawezi kuhifadhiwa katika kivinjari hiki. Acha ukurasa huu wazi ili kuendelea."
};

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Nani lazima ajisajili, usajili unarekodi nini na jinsi ya kutumia mchakato rasmi.",
  "Personal Public Service number": "Jinsi nambari ya PPS inavyotumika kwa huduma za umma na shughuli rasmi. Si ruhusa ya uhamiaji.",
  "Choose an immigration purpose": "Mahali rasmi pa kuanzia kwa kutembelea, kufanya kazi, kusoma, kuishi Ireland au kujiunga na familia.",
  "Immigration permission stamps": "Elewa kile ambacho muhuri uliorekodiwa kwenye Kibali cha Ukaaji cha Ireland unaruhusu na unahitaji.",
  "Applying for international protection": "Taarifa rasmi kuhusu mchakato wa kuomba na kuchunguza maombi nchini Ireland.",
  "Applications made after 12 June 2026": "Taarifa kwa lugha rahisi kuhusu Sheria ya Ulinzi wa Kimataifa ya 2026 na kanuni zinazohusu maombi mapya zaidi.",
  "Accommodation and reception supports": "Taarifa kuhusu makazi ya IPAS, huduma, ustawi wa wakazi na malalamiko.",
  "Vulnerability and accommodation needs": "Jinsi waombaji wanavyoweza kutambua ulemavu, afya, malezi na mahitaji mengine maalumu ya mapokezi, na jinsi masuala ya makazi yanavyozingatiwa.",
  "Independent legal and practical support": "Huduma za taarifa, utetezi, sheria, makazi, ajira, vijana na kuanza maisha mapya.",
  "Employment permit types": "Makundi ya sasa ya vibali, ustahiki, orodha za kazi, mwongozo wa maombi na taarifa mpya.",
  "Rights when working in Ireland": "Malipo, masharti, muda wa kazi, likizo, kumbukumbu na njia za kuwasilisha malalamiko ya kazini.",
  "Migrant employment and exploitation support": "Taarifa na msaada huru kwa wafanyakazi wahamiaji, wakiwemo walio katika hatari ya unyonyaji.",
  "EU citizens coming to work": "Haki za kazi kwa raia wa EU na EEA, ikiwemo kwa nini kwa kawaida kibali cha ajira cha Ireland hakihitajiki.",
  "EU residence rights": "Misingi ambayo raia wa EU wanaweza kuitumia kuingia na kukaa nchini Ireland, ikiwemo kazi, kutafuta kazi, masomo na kujitegemea.",
  "Coming to study in Ireland": "Taarifa za viza, fedha, bima, kozi na usajili kwa wanafunzi wa nje ya EEA.",
  "Education in Ireland": "Taarifa kwa umma kuhusu shule, elimu endelevu, elimu ya juu na misaada ya kielimu.",
  "Healthcare services": "Jinsi ya kupata madaktari wa jumla, hospitali, huduma za dharura na taarifa za afya ya umma nchini Ireland.",
  "Finding and renting a home": "Taarifa kuhusu makazi, upangaji, haki za wapangaji, amana, ukosefu wa makazi na msaada wa makazi.",
  "Independent public information": "Taarifa za kitaifa kuhusu ustawi wa jamii, afya, makazi, fedha, kodi, elimu na haki za watumiaji.",
  "Traveller and Roma equality rights": "Taarifa kuhusu ubaguzi unaozikabili jamii za Traveller na Roma na ulinzi unaopatikana chini ya sheria ya usawa ya Ireland.",
  "Coming to join family": "Pata njia kulingana na kama mdhamini ni raia wa Ireland, UK, EEA au Uswisi, ni wa nje ya EEA, au ana hadhi ya ulinzi.",
  "Specialist migrant and refugee advice": "Taarifa na msaada wa kushughulikia kesi kuhusu hadhi ya uhamiaji, viza, kuungana tena na familia, uraia na hali za mapokezi.",
  "Independent status after domestic abuse": "Mwongozo wa siri wa uhamiaji kwa mwathiriwa ambaye ruhusa yake imeunganishwa na anayedaiwa kumfanyia unyanyasaji, ikiwemo jinsi ya kuomba na ushahidi unaoweza kusaidia.",
  "Domestic-abuse safety and support": "Msaada wa siri, ukalimani na taarifa za usalama kwa wanawake wanaokabiliwa na unyanyasaji wa nyumbani; piga 999 au 112 katika dharura."
};

const catalog: JourneyTranslationCatalog = {
  "critical:Plan": {
    "eyebrow": "Miezi minne kabla ya kuhama",
    "title": "Ofa nzuri ni mwanzo tu",
    "scene": "Mkataba umefika. Mwajiri anasema kazi hii inahitajika sana na anaomba kazi ianze mara moja.",
    "question": "Nini kinapaswa kufanyika kabla ya kupanga ndege au kutoa notisi ya kuacha kazi?",
    "law": "Kibali cha Ajira cha Ujuzi Muhimu hutegemea kazi, malipo, mkataba na mwajiri kukidhi vigezo vya sasa vya kisheria.",
    "plainLaw": "Linganisha kazi halisi, malipo, mkataba na mwajiri na kanuni rasmi za sasa kabla ya kutegemea ofa.",
    "sourceLabel": "Kibali cha Ajira cha Ujuzi Muhimu",
    "choices": {
      "verify": {
        "label": "Kagua kazi, malipo, mkataba na mwajiri, kisha wasilisha ombi sahihi la kibali.",
        "feedback": "Hii inazuia mipango ya kuhama kujengwa juu ya ofa isiyostahiki.",
        "consequence": "Ratiba inakuwa halisi na kazi inapimwa dhidi ya kanuni za sasa."
      },
      "contract": {
        "label": "Chukulia mkataba uliosainiwa kama ruhusa ya kufanya kazi.",
        "feedback": "Mkataba na kibali cha ajira vina majukumu tofauti ya kisheria.",
        "consequence": "Safari au kuacha kazi vinaweza kutokea kabla ruhusa inayohitajika haijapatikana."
      },
      "visitor": {
        "label": "Ingia kama mgeni na ukamilishe kibali baada ya kuanza kazi.",
        "feedback": "Hadhi ya mgeni hairuhusu ajira ya kawaida.",
        "consequence": "Kazi na hali ya uhamiaji vyote vinaweza kuwekwa hatarini."
      }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Nyaraka na muda",
    "title": "Idhini moja haichukui nafasi ya kila hatua nyingine",
    "scene": "Kibali kimetolewa. Rafiki anasema hilo linamaanisha hakuna ukaguzi mwingine wa uhamiaji unaohitajika.",
    "question": "Mpango salama zaidi ni upi?",
    "law": "Kibali cha ajira huidhinisha ajira iliyotajwa. Raia anayehitaji viza lazima pia apate viza inayofaa ya ukaaji wa muda mrefu kabla ya kusafiri.",
    "plainLaw": "Kibali, viza, ruhusa ya kuingia mpakani na usajili wa ukaaji ni hatua tofauti.",
    "sourceLabel": "Kuja kufanya kazi nchini Ireland",
    "choices": {
      "sequence": {
        "label": "Hakikisha mahitaji ya viza, andaa ushahidi na uhifadhi kila idhini mahali pa kuifikia wakati wa safari.",
        "feedback": "Sahihi. Kila hati hujibu swali tofauti.",
        "consequence": "Msafiri anaweza kuelezea madhumuni ya kuhama akiwa mpakani."
      },
      "permitvisa": {
        "label": "Dhania kuwa kibali cha ajira ni viza ya kusafiria moja kwa moja.",
        "feedback": "Hilo si sahihi kwa raia wanaohitaji viza.",
        "consequence": "Kupanda ndege au kuingia nchini kunaweza kutatizika ingawa kibali ni halali."
      },
      "agent": {
        "label": "Mpe wakala ambaye hajathibitishwa kila hati asilia.",
        "feedback": "Dhibiti nyaraka zako za utambulisho na uhakikishe yeyote anayetoa msaada wa kulipia.",
        "consequence": "Kupoteza ufikiaji wa nyaraka asilia huleta ucheleweshaji na hatari za unyonyaji."
      }
    }
  },
  "critical:Travel": {
    "eyebrow": "Katika mpaka wa Ireland",
    "title": "Kuwa tayari kuelezea madhumuni ya safari",
    "scene": "Afisa wa uhamiaji anauliza msafiri atakaa wapi na ni mwajiri gani anayemtarajia.",
    "question": "Anapaswa kufanya nini?",
    "law": "Viza inaruhusu kusafiri hadi mpakani; afisa wa uhamiaji ndiye anayeamua kuingia. Nyaraka za kuthibitisha zinapaswa kuonyesha madhumuni na mipango halisi.",
    "plainLaw": "Beba ushahidi wa kweli na unaolingana kuhusu kazi, ruhusa na anwani ya kwanza.",
    "sourceLabel": "Huduma ya Uhamiaji ya Ireland",
    "choices": {
      "answer": {
        "label": "Jibu kwa ukweli na uonyeshe kibali, viza ikihitajika, mkataba na maelezo ya makazi.",
        "feedback": "Ushahidi ulio wazi na unaolingana unaunga mkono madhumuni yaliyotajwa ya safari.",
        "consequence": "Afisa anaweza kutathmini safari ya kazi kwa kutumia nyaraka sahihi."
      },
      "tourism": {
        "label": "Sema ni likizo tu ili kuepuka maswali kuhusu kazi.",
        "feedback": "Maelezo yanapaswa kulingana na madhumuni halisi na nyaraka.",
        "consequence": "Taarifa zinazokinzana zinaweza kusababisha matatizo makubwa mpakani."
      },
      "phone": {
        "label": "Tegemea kabisa wakala wa uajiri kujibu simu.",
        "feedback": "Msafiri anapaswa kuelewa na kubeba taarifa zake muhimu mwenyewe.",
        "consequence": "Wakala wa uajiri asipopatikana, madhumuni ya safari yanaweza kutokuwa wazi."
      }
    }
  },
  "critical:Arrive": {
    "eyebrow": "Siku 90 za kwanza",
    "title": "Usajili hubadilisha ruhusa kuwa ushahidi",
    "scene": "Kazi imeanza, lakini kutafuta makazi na miadi kunafanya wiki za kwanza kuwa ngumu.",
    "question": "Ni jukumu gani linapaswa kubaki kwenye mpango?",
    "law": "Watu kutoka nje ya EU, UK na Uswisi wanaokaa zaidi ya siku 90 kwa kawaida lazima wasajili ruhusa yao ya uhamiaji ya Ireland.",
    "plainLaw": "Panga usajili na uhakikishe ruhusa, anwani na maelezo ya ajira ni sahihi.",
    "sourceLabel": "Kusajili ruhusa ya uhamiaji",
    "choices": {
      "register": {
        "label": "Panga usajili, fuata mchakato rasmi wa miadi na uhifadhi ushahidi wa majaribio yako.",
        "feedback": "Kibali cha Ukaaji cha Ireland hurekodi ruhusa na masharti yake.",
        "consequence": "Mtu ana ushahidi ulio wazi zaidi wa ukaaji halali na kile ruhusa inachoruhusu."
      },
      "pps": {
        "label": "Dhania kuwa nambari ya PPS inachukua nafasi ya usajili wa uhamiaji.",
        "feedback": "Nambari ya PPS ni kwa shughuli za huduma za umma na kodi, si ruhusa ya uhamiaji.",
        "consequence": "Nambari muhimu ya kiutawala itachukuliwa kimakosa kuwa ushahidi wa ukaaji halali."
      },
      "contract": {
        "label": "Dhania kuwa mkataba wa mwajiri unachukua nafasi ya IRP.",
        "feedback": "Nyaraka za ajira hazichukui nafasi ya usajili wa ukaaji.",
        "consequence": "Mtu anaweza kupata shida kuthibitisha masharti yake ya uhamiaji."
      }
    }
  },
  "critical:Build a life": {
    "eyebrow": "Mahali pa kazi na siku zijazo",
    "title": "Hadhi haiondoi haki za ajira",
    "scene": "Meneja anasema wafanyakazi wahamiaji hupokea malipo madogo na mapumziko machache katika miezi yao ya kwanza.",
    "question": "Ni jibu gani linalolinda kazi na hali ya uhamiaji?",
    "law": "Wafanyakazi wahamiaji walioajiriwa kihalali nchini Ireland wana ulinzi wa msingi wa ajira. Masharti ya kibali na haki za ajira vyote lazima vizingatiwe matatizo yanapotokea.",
    "plainLaw": "Weka kumbukumbu, tafuta ushauri wa kuaminika na usikubali kutendewa kinyume cha sheria kwa sababu ya hadhi ya uhamiaji.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "records": {
        "label": "Hifadhi ratiba na hati za malipo, omba marekebisho na uwasiliane na WRC au mshauri mwenye sifa.",
        "feedback": "Ushahidi na ushauri wa wakati unaofaa husaidia kulinda makundi yote mawili ya haki.",
        "consequence": "Suala linaweza kushughulikiwa bila kujifanya kwamba masharti ya kibali si muhimu."
      },
      "accept": {
        "label": "Kubali kwa sababu wenye vibali wana haki chache za ajira.",
        "feedback": "Hadhi ya uhamiaji haiondoi ulinzi wa msingi kazini.",
        "consequence": "Malipo ya chini ya kiwango au mazingira yasiyo salama yanaweza kuendelea bila kupingwa."
      },
      "disappear": {
        "label": "Ondoka mara moja na uanze kazi nyingine bila kukagua masharti ya kibali.",
        "feedback": "Kubadilisha ajira kunaweza kuhitaji mchakato rasmi au kibali kipya.",
        "consequence": "Tatizo la kazini linaweza kuwa tatizo la uhamiaji pia."
      }
    }
  },
  "general:Plan": {
    "eyebrow": "Kabla ya kumlipa yeyote",
    "title": "Kagua kazi halisi, si maneno ya kuvutia",
    "scene": "Wakala wa uajiri anaahidi kuwa mkataba wowote uliosainiwa wa Ireland unahakikisha kibali na anaomba fedha taslimu.",
    "question": "Uamuzi bora wa kwanza ni upi?",
    "law": "Kibali cha Ajira cha Jumla hutegemea kazi, malipo, mwajiri na masharti mengine ya sasa. Baadhi ya kazi hazistahiki na Jaribio la Mahitaji ya Soko la Ajira (Labour Market Needs Test) linaweza kuhitajika.",
    "plainLaw": "Hakikisha mwajiri na majukumu halisi, kisha angalia kanuni za sasa za vibali kabla ya kulipa au kusafiri.",
    "sourceLabel": "Kibali cha Ajira cha Jumla",
    "choices": {
      "check": {
        "label": "Hakikisha mwajiri, majukumu, malipo na ustahiki wa kibali kupitia vyanzo rasmi.",
        "feedback": "Ofa halisi bado lazima ikidhi vigezo vya kisheria.",
        "consequence": "Hatari za ulaghai na kazi isiyostahiki zinatambuliwa kabla ya kujifunga kwa fedha au safari."
      },
      "cash": {
        "label": "Lipa fedha taslimu na umruhusu wakala ahifadhi pasipoti.",
        "feedback": "Kushikilia pasipoti na shinikizo la malipo yasiyofuatilika ni ishara za tahadhari.",
        "consequence": "Mfanyakazi anakuwa katika hatari zaidi ya ulaghai na kudhibitiwa."
      },
      "promise": {
        "label": "Tegemea ahadi ya wakala badala ya kukagua kazi.",
        "feedback": "Vigezo rasmi, si ahadi, huamua ustahiki wa kibali.",
        "consequence": "Njia iliyopangwa inaweza kushindwa baada ya gharama kubwa."
      }
    }
  },
  "general:Prepare": {
    "eyebrow": "Mpangilio sahihi",
    "title": "Ruhusa lazima itangulie kuhama",
    "scene": "Mwajiri anahitaji wafanyakazi sasa na anapendekeza kuingia kama mtalii huku nyaraka zikikamilishwa.",
    "question": "Ni mfuatano gani wa kuaminika?",
    "law": "Safari ya kwanza ya kibali cha ajira kwa kawaida huhitaji kibali kabla ya kazi kuanza, ikifuatiwa na viza ya ukaaji wa muda mrefu inapohitajika na usajili baada ya kuwasili.",
    "plainLaw": "Usitumie hadhi ya mgeni kama njia ya mkato kuingia katika ajira ya kawaida.",
    "sourceLabel": "Vibali vya ajira",
    "choices": {
      "order": {
        "label": "Kibali kwanza, viza ikihitajika, ukaguzi mpakani, kisha usajili baada ya kuwasili.",
        "feedback": "Hii huweka safari katika njia iliyokusudiwa.",
        "consequence": "Mfanyakazi anawasili akiwa na msingi wa kisheria unaoelezeka na wenye nyaraka."
      },
      "tourist": {
        "label": "Ingia kama mtalii na uanze zamu ya kwanza.",
        "feedback": "Hadhi ya mgeni si ruhusa ya kazi ya kawaida.",
        "consequence": "Mfanyakazi na mwajiri wanaweza wote kukabiliwa na matokeo makubwa."
      },
      "pps": {
        "label": "Omba nambari ya PPS na uichukulie kama kibali cha kazi.",
        "feedback": "Nambari ya PPS haitoi ruhusa ya uhamiaji au ajira.",
        "consequence": "Hatua muhimu ya kibali inabaki haijakamilika."
      }
    }
  },
  "general:Travel": {
    "eyebrow": "Siku ya kuondoka",
    "title": "Beba ushahidi wako mwenyewe",
    "scene": "Wakala wa uajiri anasema nyaraka zote zimehifadhiwa ofisini kwa kampuni na msafiri anahitaji picha ya skrini ya simu tu.",
    "question": "Msafiri anapaswa kufanya nini?",
    "law": "Msafiri anaweza kuhitaji kuthibitisha madhumuni na masharti ya safari kwa mtoa huduma za usafiri na katika ukaguzi wa mpaka wa Ireland.",
    "plainLaw": "Dumisha ufikiaji salama wa pasipoti, idhini, mkataba na maelezo ya anwani ya kwanza.",
    "sourceLabel": "Kuja kufanya kazi nchini Ireland",
    "choices": {
      "copies": {
        "label": "Beba nyaraka asilia zinazohitajika kwa safari pamoja na nakala salama na maelezo ya mwajiri.",
        "feedback": "Msafiri anapaswa kuweza kuelezea safari yake mwenyewe.",
        "consequence": "Kukosekana kwa mtandao wa simu au kutopatikana kwa wakala hakuondoi ushahidi wote."
      },
      "company": {
        "label": "Safiri bila nyaraka kwa sababu kampuni inazo.",
        "feedback": "Usikabidhi udhibiti wa nyaraka muhimu za utambulisho na ruhusa.",
        "consequence": "Msafiri anaweza kushindwa kuthibitisha madhumuni ya safari."
      },
      "different": {
        "label": "Toa sababu ya safari iliyo tofauti na ile iliyo kwenye ombi.",
        "feedback": "Taarifa zinapaswa kuwa za kweli na kulingana.",
        "consequence": "Migongano inaweza kuhatarisha safari mpakani."
      }
    }
  },
  "general:Arrive": {
    "eyebrow": "Wiki za kwanza",
    "title": "Tenganisha mahitaji ya haraka na ruhusa za kisheria",
    "scene": "Benki, mwenye nyumba na mwajiri kila mmoja anaomba nyaraka tofauti huku miadi ya usajili ikisubiriwa.",
    "question": "Mtu anapaswa kuitikiaje?",
    "law": "IRP hurekodi ruhusa ya uhamiaji. Mifumo mingine, ikiwemo kodi, benki na makazi, ina mahitaji yake na haichukui nafasi yake.",
    "plainLaw": "Tumia orodha rasmi za mahitaji, hifadhi ushahidi wa miadi na uliza kila huduma hasa inahitaji nini.",
    "sourceLabel": "Kusajili ruhusa ya uhamiaji",
    "choices": {
      "organise": {
        "label": "Hifadhi jalada la nyaraka, fuata maelekezo ya usajili na uombe kila huduma orodha yake ya mahitaji.",
        "feedback": "Hii hupunguza mkanganyiko kati ya mifumo tofauti.",
        "consequence": "Ucheleweshaji bado ni mgumu, lakini mtu anaweza kuonyesha kilichokamilishwa."
      },
      "one": {
        "label": "Dhania kuwa hati moja lazima ikubalike kwa kila huduma.",
        "feedback": "Mifumo ya Ireland huuliza maswali tofauti kwa madhumuni tofauti.",
        "consequence": "Maombi yanaweza kukwama kwa sababu ushahidi usio sahihi unatolewa mara kwa mara."
      },
      "fake": {
        "label": "Badilisha hati ya anwani ili kuharakisha mambo.",
        "feedback": "Usiwahi kuwasilisha ushahidi wa uongo au uliobadilishwa.",
        "consequence": "Njia ya mkato ya muda mfupi huleta hatari kubwa za kisheria na kuaminika."
      }
    }
  },
  "general:Build a life": {
    "eyebrow": "Kazi yenye haki",
    "title": "Tambua unyonyaji mapema",
    "scene": "Hati ya malipo ina makato yasiyoelezwa na mwajiri anaomba ashikilie pasipoti kwa ‘kuihifadhi salama’.",
    "question": "Jibu lenye nguvu zaidi ni lipi?",
    "law": "Wafanyakazi wanapaswa kupata malipo halali, masharti na hati za malipo. Kuweka kumbukumbu na kutumia WRC au msaada maalumu wa wahamiaji kunaweza kusaidia kushughulikia unyonyaji.",
    "plainLaw": "Hifadhi pasipoti yako, hifadhi ushahidi na utafute ushauri wa siri.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "evidence": {
        "label": "Hifadhi pasipoti, weka kumbukumbu, omba maelezo na uwasiliane na WRC au mshauri.",
        "feedback": "Kumbukumbu zilizo wazi hurahisisha kuelewa na kupinga tatizo.",
        "consequence": "Mfanyakazi anaweza kutafuta msaada bila kutegemea maelezo ya mwajiri pekee."
      },
      "hand": {
        "label": "Kabidhi pasipoti kwa sababu mwajiri ndiye aliyepanga kibali.",
        "feedback": "Mfanyakazi anapaswa kuendelea kudhibiti nyaraka zake binafsi za utambulisho.",
        "consequence": "Mwajiri anapata njia yenye nguvu ya kudhibiti."
      },
      "nothing": {
        "label": "Puuza makato kwa sababu wafanyakazi wahamiaji hawawezi kulalamika.",
        "feedback": "Wafanyakazi wahamiaji wana haki za ajira zinazotekelezeka kisheria.",
        "consequence": "Kutendewa kinyume cha sheria kunaweza kuendelea au kuwa kubaya zaidi."
      }
    }
  },
  "protection:Plan": {
    "eyebrow": "Hitaji la usalama",
    "title": "Ulinzi unahusu hatari binafsi",
    "scene": "Kurudi kunaonekana si salama. Marafiki wanatoa ushauri unaokinzana na mtu mmoja anapendekeza kubuni hadithi yenye nguvu zaidi.",
    "question": "Ni kanuni gani inapaswa kuongoza hatua inayofuata?",
    "law": "Ulinzi wa kimataifa ni kwa watu wanaoogopa mateso au wanaokabiliwa na hatari halisi ya madhara makubwa. Kila ombi hutathminiwa kwa ukweli wake binafsi chini ya sheria inayotumika wakati linapofanywa.",
    "plainLaw": "Simulia hadithi yako mwenyewe ya kweli na upate taarifa za siri za kisheria mapema iwezekanavyo.",
    "sourceLabel": "Irish Refugee Council: maombi baada ya tarehe 12 Juni 2026",
    "choices": {
      "truth": {
        "label": "Hifadhi ushahidi binafsi inapokuwa salama, sema ukweli na utafute taarifa za kisheria za kuaminika.",
        "feedback": "Dai la ulinzi lazima liwe maelezo ya mtu mwenyewe.",
        "consequence": "Kesi inaanza kwa taarifa sahihi na msaada unaofaa."
      },
      "copy": {
        "label": "Nakili hadithi iliyomsaidia mtu mwingine.",
        "feedback": "Taarifa zilizobuniwa au kuazimwa zinaweza kuharibu sana kuaminika.",
        "consequence": "Mchakato unaweza kuzingatia migongano badala ya hofu halisi."
      },
      "work": {
        "label": "Wasilisha ulinzi kama njia ya haraka zaidi ya ajira.",
        "feedback": "Ulinzi na uhamiaji wa kazi vina madhumuni tofauti.",
        "consequence": "Msingi halisi wa kisheria wa safari unafichika."
      }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Usalama na ushahidi",
    "title": "Nyaraka husaidia, lakini usalama hutangulia",
    "scene": "Baadhi ya ushahidi uko kwenye simu iliyoharibika. Nyaraka nyingine hazikuwezekana kuletwa.",
    "question": "Njia ya kuwajibika ni ipi?",
    "law": "Waombaji wanapaswa kutoa taarifa zilizopo, kushirikiana na mchakato na kuelezea kwa ukweli ushahidi unaokosekana. Mahitaji ya ukalimani, yanayohusiana na udhaifu na ya ufikivu yanapaswa kutajwa.",
    "plainLaw": "Usibuni nyaraka zinazokosekana. Eleza kilichopo, kinachokosekana na kwa nini.",
    "sourceLabel": "International Protection Office",
    "choices": {
      "explain": {
        "label": "Hifadhi kilicho salama, eleza mapengo na uombe mkalimani au msaada wa ufikivu unapohitajika.",
        "feedback": "Mchakato unapaswa kusikiliza maelezo ya mtu mwenyewe akiwa na msaada unaofaa.",
        "consequence": "Ushahidi unaokosekana unashughulikiwa kwa uwazi badala ya kufichwa."
      },
      "forge": {
        "label": "Tengeneza nyaraka mbadala zinazoonekana rasmi.",
        "feedback": "Nyaraka za uongo zinaweza kuharibu sana dai.",
        "consequence": "Umakini unahama kutoka hali halisi kwenda kwenye udanganyifu."
      },
      "silence": {
        "label": "Usitaje kamwe kiwewe, utambulisho au ulemavu hata vinapohusika.",
        "feedback": "Taarifa nyeti zinaweza kujadiliwa kwa siri na watoa msaada wenye sifa.",
        "consequence": "Mahitaji muhimu ya ulinzi au ya utaratibu yanaweza kubaki bila kutambuliwa."
      }
    }
  },
  "protection:Travel": {
    "eyebrow": "Kufika Ireland",
    "title": "Sema wazi kuwa ulinzi unahitajika",
    "scene": "Katika eneo la kuingilia Ireland, hofu na uchovu vinafanya iwe vigumu kuelezea kwa nini kurudi si salama.",
    "question": "Mtu anapaswa kuwasilisha ujumbe gani?",
    "law": "Mtu anayetafuta hifadhi anapaswa kusema wazi kwamba anataka ulinzi wa kimataifa na kushirikiana na mchakato unaotumika wa usajili na uchunguzi wa awali.",
    "plainLaw": "Tumia maneno ya moja kwa moja: ‘Nataka kuomba ulinzi wa kimataifa. Ninaogopa kurudi.’",
    "sourceLabel": "International Protection Office",
    "choices": {
      "ask": {
        "label": "Omba wazi ulinzi wa kimataifa na uombe ukalimani ikiwa unahitajika.",
        "feedback": "Mawasiliano yaliyo wazi husaidia kumwelekeza mtu kwenye mchakato sahihi.",
        "consequence": "Hofu iliyotajwa ya kurudi inaweza kurekodiwa na kutathminiwa."
      },
      "tourist": {
        "label": "Ficha hofu na useme ziara ni utalii tu.",
        "feedback": "Hilo haliwasilishi hitaji la ulinzi.",
        "consequence": "Mtu huenda asiingie kwenye mchakato uliokusudiwa kutathmini hatari."
      },
      "script": {
        "label": "Rudia maelezo yaliyokaririwa ambayo si sahihi.",
        "feedback": "Tumia maneno ya kweli ya mtu mwenyewe.",
        "consequence": "Kutolingana kunaweza kufanya mahojiano ambayo tayari ni magumu kuwa magumu zaidi."
      }
    }
  },
  "protection:Arrive": {
    "eyebrow": "Mfumo wa maombi na mapokezi",
    "title": "IPO na IPAS zina majukumu tofauti",
    "scene": "Mwombaji anahitaji taarifa za kisheria, makazi na msaada wa kupata nafasi ya mtoto shuleni.",
    "question": "Ni mpango gani unaotambua majukumu tofauti?",
    "law": "IPO huchunguza maombi ya ulinzi. IPAS inawajibika kwa makazi ya mapokezi na misaada inayohusiana nayo. Legal Aid na mashirika huru hutoa msaada tofauti.",
    "plainLaw": "Uamuzi wa kesi, makazi na ushauri wa kisheria hutoka kwenye huduma tofauti.",
    "sourceLabel": "Makazi na misaada ya IPAS",
    "choices": {
      "roles": {
        "label": "Shirikiana na IPO kuhusu kesi, IPAS kuhusu mahitaji ya mapokezi na wakili kuhusu ushauri wa kisheria.",
        "feedback": "Kutenganisha majukumu hurahisisha kuomba msaada kwa taasisi sahihi.",
        "consequence": "Mahitaji ya haraka na ombi la kisheria yanaweza kuendelea kupitia njia zinazofaa."
      },
      "manager": {
        "label": "Mwombe meneja wa makazi aidhinishe hadhi ya ukimbizi.",
        "feedback": "Wafanyakazi wa makazi hawaamui dai la ulinzi.",
        "consequence": "Muda unapotea kwa kumwomba mtu asiyehusika uamuzi wa kisheria."
      },
      "address": {
        "label": "Hama bila kuarifu mamlaka au mshauri wa kisheria.",
        "feedback": "Taarifa za mawasiliano zinapaswa kusasishwa.",
        "consequence": "Miadi au maamuzi muhimu yanaweza kukosekana."
      }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Kusubiri na kushiriki",
    "title": "Hakikisha haki za sasa badala ya kutegemea uvumi",
    "scene": "Mwajiri anatoa kazi, huku wakazi wengine wakitofautiana kuhusu wakati waombaji wanaruhusiwa kuingia katika soko la ajira.",
    "question": "Mwombaji anapaswa kufanya nini?",
    "law": "Ufikiaji wa soko la ajira hutegemea sheria, muda na masharti yanayohusu ombi binafsi. Elimu, afya, malalamiko na misaada ya watoto vina kanuni tofauti.",
    "plainLaw": "Hakikisha ustahiki wa sasa na upate ruhusa inayohitajika kabla ya kuanza kazi.",
    "sourceLabel": "Kituo cha Taarifa cha Irish Refugee Council",
    "choices": {
      "current": {
        "label": "Angalia kanuni ya sasa ya ombi hili na uanze tu baada ya ruhusa yoyote inayohitajika kutolewa.",
        "feedback": "Hii huepuka kutumia kanuni ya zamani au hali za mtu mwingine kwa kesi hii.",
        "consequence": "Uamuzi wa kazi unategemea taarifa za sasa za mtu binafsi."
      },
      "rumour": {
        "label": "Anza kwa sababu mkazi mwingine aliruhusiwa kufanya kazi.",
        "feedback": "Mtu mwingine anaweza kuwa aliomba chini ya kanuni tofauti au wakati tofauti.",
        "consequence": "Mwombaji anaweza kuchukua hatua bila ruhusa ambayo kesi yake inahitaji."
      },
      "never": {
        "label": "Dhania kwamba waombaji hawawezi kamwe kusoma, kufanya kazi au kuibua masuala.",
        "feedback": "Waombaji wana haki na njia za kupata msaada, ingawa masharti yanatumika.",
        "consequence": "Fursa na ulinzi vinaweza kukosekana bila sababu."
      }
    }
  },
  "study:Plan": {
    "eyebrow": "Kabla ya kukubali nafasi",
    "title": "Kagua kozi na gharama zote",
    "scene": "Ofa ya chuo inavutia, lakini bajeti inatosha ada na kodi ya nyumba ya wiki sita tu.",
    "question": "Nini kinapaswa kupimwa kabla ya kujifunga?",
    "law": "Ruhusa ya masomo hutegemea kozi, mtoa elimu, fedha, bima na mahitaji mengine ya sasa ya uhamiaji.",
    "plainLaw": "Thibitisha kwamba programu inastahiki na ufanye mpango halisi wa ada, makazi, bima na maisha ya kila siku.",
    "sourceLabel": "Kuja kusoma nchini Ireland",
    "choices": {
      "budget": {
        "label": "Hakikisha kozi na mtoa elimu, kisha hesabu ada, makazi, bima na gharama za maisha.",
        "feedback": "Kukubaliwa chuoni ni sehemu moja tu ya safari ya masomo inayowezekana.",
        "consequence": "Mwanafunzi anaweza kupima kama mpango unawezekana kifedha na kisheria."
      },
      "job": {
        "label": "Dhania kuwa kazi ya muda itagharamia kila kitu mara moja.",
        "feedback": "Haki za kazi zinawekewa mipaka na ruhusa, na ajira haihakikishwi.",
        "consequence": "Mwanafunzi anaweza kuwasili bila rasilimali za kutosha kwa mahitaji ya msingi."
      },
      "deposit": {
        "label": "Mlipe wakala ambaye hajathibitishwa kabla ya kukagua programu.",
        "feedback": "Hakikisha taasisi, programu na njia ya malipo kwanza.",
        "consequence": "Ada zinaweza kupotea kwenye kozi isiyounga mkono ruhusa iliyokusudiwa."
      }
    }
  },
  "study:Prepare": {
    "eyebrow": "Ruhusa kabla ya kuondoka",
    "title": "Kukubaliwa chuoni si viza",
    "scene": "Barua pepe ya kukubaliwa inafika na mwanafunzi anadhani hiyo ndiyo hati pekee inayohitajika kusafiri.",
    "question": "Hatua sahihi inayofuata ni ipi?",
    "law": "Wanafunzi wanaohitaji viza kwa kawaida wanahitaji viza inayofaa ya masomo ya ukaaji wa muda mrefu. Wanafunzi wote lazima waweze kuonyesha madhumuni na masharti ya masomo.",
    "plainLaw": "Fuata orodha rasmi ya mahitaji ya uhamiaji ya wanafunzi; ofa ya chuo haichukui nafasi ya ruhusa ya kusafiri.",
    "sourceLabel": "Kuja kusoma nchini Ireland",
    "choices": {
      "visa": {
        "label": "Fuata mchakato rasmi wa viza inapohitajika na upange ushahidi wa fedha, bima na kozi.",
        "feedback": "Hii inaunganisha ofa ya kukubaliwa na njia sahihi ya uhamiaji.",
        "consequence": "Safari inaungwa mkono na mpango wa masomo ulio kamili na unaolingana."
      },
      "offer": {
        "label": "Tumia barua pepe ya kukubaliwa kama viza ya moja kwa moja.",
        "feedback": "Kukubaliwa chuoni na ruhusa ya uhamiaji ni tofauti.",
        "consequence": "Safari inaweza kushindwa kabla ya kozi kuanza."
      },
      "tourist": {
        "label": "Ingia kama mtalii na ubadilishe kwa kimya baada ya masomo kuanza.",
        "feedback": "Tumia njia sahihi ya masomo kabla ya kusafiri.",
        "consequence": "Mwanafunzi anaweza kushindwa kusajili ruhusa iliyokusudiwa."
      }
    }
  },
  "study:Travel": {
    "eyebrow": "Katika ukaguzi wa mpaka",
    "title": "Mpango wa masomo lazima ueleweke",
    "scene": "Afisa anauliza mwanafunzi ataishi wapi, kozi inagharamiwaje na inaanza lini.",
    "question": "Mwanafunzi anapaswa kujibuje?",
    "law": "Kuingia nchini hutathminiwa mpakani. Nyaraka na majibu vinapaswa kuonyesha masomo ya kweli yaliyopangwa.",
    "plainLaw": "Beba ushahidi wa kweli wa kozi, fedha, bima na makazi ya kwanza.",
    "sourceLabel": "Huduma ya Uhamiaji ya Ireland",
    "choices": {
      "show": {
        "label": "Jibu kwa ukweli na uonyeshe ushahidi wa kozi, malipo, bima, fedha na makazi.",
        "feedback": "Nyaraka zinaunga mkono madhumuni yaliyotajwa ya masomo.",
        "consequence": "Afisa anaweza kuelewa mpango bila kutegemea dhana."
      },
      "work": {
        "label": "Sema madhumuni makuu ni kazi ya muda wote.",
        "feedback": "Hilo linakinzana na ombi la masomo.",
        "consequence": "Madhumuni ya safari yanaonekana kutolingana."
      },
      "guess": {
        "label": "Bahatisha anwani ya chuo na tarehe za kozi.",
        "feedback": "Wanafunzi wanapaswa kujua maelezo ya msingi ya programu yao wenyewe.",
        "consequence": "Mpango wa masomo unaweza kuonekana si halisi au haujaandaliwa."
      }
    }
  },
  "study:Arrive": {
    "eyebrow": "Muhula wa kwanza",
    "title": "Jisajili na uendelee na kozi",
    "scene": "Matatizo ya makazi yanaleta kishawishi cha kuahirisha usajili na kutohudhuria masomo.",
    "question": "Ni jibu gani linalolinda zaidi safari ya masomo?",
    "law": "Wanafunzi wanaostahiki kutoka nje ya EEA wanaokaa zaidi ya siku 90 lazima wasajili ruhusa yao na waendelee kukidhi masharti ya mahudhurio na kozi yanayoambatana nayo.",
    "plainLaw": "Jisajili, endelea kushiriki katika kozi na uarifu chuo mapema wakati matatizo makubwa yanapoathiri mahudhurio.",
    "sourceLabel": "Kusajili ruhusa ya uhamiaji",
    "choices": {
      "support": {
        "label": "Panga usajili, hudhuria kozi na uwasiliane mapema na huduma za msaada wa wanafunzi kuhusu makazi au ustawi.",
        "feedback": "Majukumu ya uhamiaji na masomo ni rahisi zaidi kulindwa kwa msaada wa mapema.",
        "consequence": "Matatizo yanarekodiwa kabla hayajawa kutohudhuria kusikoelezwa au kupoteza hadhi."
      },
      "skip": {
        "label": "Acha kuhudhuria bila kukiambia chuo.",
        "feedback": "Kushiriki katika kozi ni muhimu kwa ruhusa.",
        "consequence": "Matokeo ya masomo na uhamiaji yanaweza kuongeza tatizo la makazi."
      },
      "pps": {
        "label": "Tumia nambari ya PPS badala ya usajili.",
        "feedback": "Nambari ya PPS si ruhusa ya masomo.",
        "consequence": "Hatua inayohitajika ya usajili wa ukaaji inabaki haijakamilika."
      }
    }
  },
  "study:Build a life": {
    "eyebrow": "Kazi, jamii na hatua zinazofuata",
    "title": "Kazi ya mwanafunzi ina mipaka",
    "scene": "Mwajiri anatoa saa za muda wote wakati wa muhula na anasema hakuna anayekagua masharti ya wanafunzi.",
    "question": "Mwanafunzi anapaswa kufanya nini?",
    "law": "Haki ya mwanafunzi kufanya kazi hutegemea muhuri na masharti ya sasa. Kuvuka masharti hayo kunaweza kuathiri hadhi ya uhamiaji na masomo.",
    "plainLaw": "Hakikisha saa na tarehe zinazoruhusiwa na ruhusa ya sasa ya mwanafunzi kabla ya kukubali ratiba ya zamu.",
    "sourceLabel": "Mihuri ya ruhusa ya uhamiaji",
    "choices": {
      "limits": {
        "label": "Angalia masharti ya sasa ya Stamp 2 na ukubali kazi inayolingana nayo tu.",
        "feedback": "Masharti ya ruhusa ni muhimu hata mwajiri anapotoa saa nyingi zaidi.",
        "consequence": "Ajira inamsaidia mwanafunzi badala ya kuhatarisha kozi na hadhi."
      },
      "full": {
        "label": "Kubali saa zisizo na kikomo kwa sababu mwajiri ameziidhinisha.",
        "feedback": "Mwajiri hawezi kupanua ruhusa ya uhamiaji.",
        "consequence": "Mwanafunzi anaweza kukiuka masharti ya ukaaji."
      },
      "cash": {
        "label": "Fanya kazi isiyorekodiwa ili saa zisionekane.",
        "feedback": "Kazi isiyotangazwa huleta hatari za ajira, kodi na uhamiaji.",
        "consequence": "Mwanafunzi anapoteza ulinzi muhimu kazini na kujiongezea hatari."
      }
    }
  },
  "family:Plan": {
    "eyebrow": "Kabla ya kuhama",
    "title": "Mdhamini huamua njia",
    "scene": "Mwenzi wa ndoa nchini Ireland anaamini kwamba ndoa hutoa moja kwa moja haki sawa na uraia wa Ireland.",
    "question": "Nini kinahitaji kuthibitishwa kwanza?",
    "law": "Njia za kifamilia hutofautiana kulingana na kama mdhamini ni raia wa Ireland, UK, EEA au Uswisi, ni wa nje ya EEA, au ni mnufaika wa ulinzi wa kimataifa.",
    "plainLaw": "Tambua hadhi halisi ya mdhamini na kundi la uhusiano kabla ya kuchagua fomu au viza.",
    "sourceLabel": "Kuja kujiunga na familia nchini Ireland",
    "choices": {
      "sponsor": {
        "label": "Hakikisha hadhi ya mdhamini, kundi la uhusiano na kanuni za sasa za fedha na nyaraka.",
        "feedback": "Hilo linatambua njia sahihi ya kifamilia.",
        "consequence": "Ombi linaandaliwa kwa mdhamini na uhusiano halisi."
      },
      "marriage": {
        "label": "Dhania kuwa cheti cha ndoa kinatoa haki za kuingia na kufanya kazi moja kwa moja.",
        "feedback": "Ushahidi wa uhusiano ni muhimu, lakini mchakato wa uhamiaji bado unatumika.",
        "consequence": "Safari au kazi zinaweza kujaribiwa bila ruhusa inayohitajika."
      },
      "form": {
        "label": "Tumia fomu ya kwanza ya familia inayopatikana mtandaoni, bila kujali hadhi ya mdhamini.",
        "feedback": "Wadhamini na wanafamilia tofauti hufuata michakato tofauti.",
        "consequence": "Ombi lisilo sahihi linaweza kusababisha ucheleweshaji au kukataliwa kunakoweza kuepukwa."
      }
    }
  },
  "family:Prepare": {
    "eyebrow": "Ushahidi na ruhusa",
    "title": "Onyesha mpango halisi wa familia",
    "scene": "Wanandoa wana ujumbe na ziara za miaka mingi, lakini ushahidi wao wa makazi na fedha haujapangwa vizuri.",
    "question": "Maandalizi bora ni yapi?",
    "law": "Maombi ya kifamilia yanaweza kuchunguza uhusiano unaostahiki, ustahiki wa mdhamini, fedha, makazi, utegemezi na vigezo vingine maalumu vya njia.",
    "plainLaw": "Tumia orodha rasmi ya mahitaji na upange ushahidi wa kweli wa uhusiano na mpango wa vitendo.",
    "sourceLabel": "Mwongozo wa kujiunga na familia",
    "choices": {
      "file": {
        "label": "Tengeneza jalada wazi la ushahidi kwa kutumia orodha ya mahitaji na ueleze mapengo yoyote halisi.",
        "feedback": "Ushahidi uliopangwa na wa kweli hurahisisha kutathmini ombi.",
        "consequence": "Historia na mpango halisi wa familia vinaonekana bila nyenzo zilizobuniwa."
      },
      "fake": {
        "label": "Buni nyaraka za vipindi vyenye ushahidi mdogo.",
        "feedback": "Ushahidi wa uongo unaweza kuharibu sana ombi.",
        "consequence": "Uaminifu wa ombi lote unaweza kudhoofika."
      },
      "ignore": {
        "label": "Puuza mahitaji ya fedha au makazi kwa sababu uhusiano ni halisi.",
        "feedback": "Uhusiano halisi hauondoi kila sharti la njia.",
        "consequence": "Pengo la ushahidi linaloweza kuzuilika linaweza kuchelewesha au kuangusha ombi."
      }
    }
  },
  "family:Travel": {
    "eyebrow": "Kuwasili kama mwanafamilia",
    "title": "Eleza madhumuni halisi mpakani",
    "scene": "Msafiri ana viza au idhini ya awali inayohusika na anapanga kuishi na mdhamini.",
    "question": "Nini kinapaswa kufanyika wakati wa kuingia?",
    "law": "Pale viza au idhini ya awali inapohitajika, inaunga mkono safari kwa madhumuni ya kifamilia yaliyotajwa. Kuingia na ruhusa ya awali huzingatiwa mpakani.",
    "plainLaw": "Eleza kwa uaminifu madhumuni ya kifamilia na ubebe idhini na maelezo ya mdhamini.",
    "sourceLabel": "Kuja kujiunga na familia",
    "choices": {
      "family": {
        "label": "Taja madhumuni ya kifamilia na uonyeshe idhini, uhusiano na maelezo ya anwani ya mdhamini.",
        "feedback": "Maelezo yanalingana na ombi na nyaraka.",
        "consequence": "Afisa anaweza kutathmini kuingia kwa msingi wa kifamilia uliokusudiwa."
      },
      "holiday": {
        "label": "Sema ni likizo fupi tu licha ya mipango ya kubaki.",
        "feedback": "Madhumuni yaliyotajwa yanapaswa kuwa ya kweli.",
        "consequence": "Maelezo yanakinzana na ombi la kifamilia na ukaaji uliokusudiwa."
      },
      "none": {
        "label": "Usibebe mawasiliano ya mdhamini wala taarifa za makazi.",
        "feedback": "Ushahidi wa msingi wa familia na mpango wa kuwasili unapaswa kupatikana.",
        "consequence": "Msafiri anaweza kupata shida kuelezea ataishi wapi na na nani."
      }
    }
  },
  "family:Arrive": {
    "eyebrow": "Usajili na masharti",
    "title": "Usibahatishe kile muhuri unachoruhusu",
    "scene": "Mwajiri wa kazi ya mbali anataka mwanafamilia arudie kazi mara moja kutoka anwani ya Ireland.",
    "question": "Mtu anapaswa kufanya nini kabla ya kufanya kazi?",
    "law": "Haki ya kufanya kazi hutegemea ruhusa ya uhamiaji iliyotolewa. Ruhusa za kifamilia zinaweza kutofautiana kulingana na mdhamini na njia.",
    "plainLaw": "Sajili ruhusa inapohitajika na uthibitishe masharti yake ya kazi kabla ya kuanza au kurudia ajira nchini Ireland.",
    "sourceLabel": "Mihuri ya ruhusa ya uhamiaji",
    "choices": {
      "stamp": {
        "label": "Kamilisha usajili unaohitajika na uhakikishe hasa kile ruhusa inachoruhusu.",
        "feedback": "Masharti ya muhuri au IRP hujibu swali la kazi.",
        "consequence": "Ajira huanza tu wakati ruhusa ya Ireland inapoiwezesha."
      },
      "spouse": {
        "label": "Dhania kwamba kila mwenzi wa ndoa ana haki zisizo na kikomo za kufanya kazi moja kwa moja.",
        "feedback": "Ruhusa za kifamilia hazifanani zote.",
        "consequence": "Kazi inaweza kuanza kabla ya sharti linalohitajika kutimizwa."
      },
      "remote": {
        "label": "Dhania kuwa kazi ya mbali kwa mwajiri wa nje haihusiki na masharti ya uhamiaji ya Ireland.",
        "feedback": "Kufanya kazi ukiwa ndani ya Ireland bado kunaweza kuhusisha kanuni za Ireland za uhamiaji, kodi na ajira.",
        "consequence": "Mpango wa kazi ya mbali unaleta masuala yasiyotarajiwa ya kisheria na kodi."
      }
    }
  },
  "family:Build a life": {
    "eyebrow": "Kujitegemea na kujihisi sehemu ya jamii",
    "title": "Jenga msaada zaidi ya mdhamini",
    "scene": "Kuhama kunaleta upweke, na mwanafamilia anamtegemea mdhamini kwa kila hati, miadi na uhusiano wa kijamii.",
    "question": "Ni hatua gani inayoleta usalama zaidi?",
    "law": "Wahamiaji wanaweza kutafuta taarifa huru kuhusu uhamiaji, kazi, afya, usalama na huduma za eneo. Misaada ya dharura na maalumu inabaki kupatikana mahusiano yanapokuwa si salama.",
    "plainLaw": "Hifadhi nakala za nyaraka zako mwenyewe na ujifunze jinsi ya kufikia huduma huru.",
    "sourceLabel": "Huduma ya Uhamiaji ya Ireland",
    "choices": {
      "network": {
        "label": "Hifadhi nakala za nyaraka binafsi na uungane na ushauri huru, jamii na huduma za afya.",
        "feedback": "Mtandao mpana wa msaada huimarisha kujitegemea kwa vitendo na usalama.",
        "consequence": "Mtu anaweza kufanya maamuzi yanayozingatia taarifa bila kutegemea uhusiano mmoja kwa kila kitu."
      },
      "all": {
        "label": "Mruhusu mdhamini ahifadhi kila hati na nenosiri.",
        "feedback": "Watu wazima wanapaswa kuwa na ufikiaji salama wa taarifa zao za utambulisho na akaunti.",
        "consequence": "Kila uamuzi wa vitendo unakuwa unategemea mdhamini."
      },
      "silent": {
        "label": "Epuka msaada kwa sababu kuuliza maswali kunaweza kuathiri hadhi.",
        "feedback": "Taarifa za kuaminika na za siri huwasaidia watu kuelewa chaguo zao.",
        "consequence": "Matatizo yanaweza kuwa makubwa zaidi kabla ya msaada kutafutwa."
      }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Usalama, ulemavu na malezi",
    "title": "Ulinzi na ufikivu ni masuala tofauti",
    "scene": "Adama anaambiwa kuwa kutumia kiti cha magurudumu kutamhakikishia ulinzi au kumzuia kuomba pamoja na mwanawe.",
    "question": "Nini kinapaswa kuongoza uamuzi wake?",
    "law": "Dai la ulinzi hutathminiwa kwa hatari binafsi ya mateso au madhara makubwa. Ulemavu na kulea peke yako vinaweza kuleta mahitaji maalumu ya mapokezi au utaratibu, lakini vyenyewe haviamui dai.",
    "plainLaw": "Eleza hofu halisi ya kurudi na utambue kando msaada unaohitajika ili kushiriki kwa usalama katika mchakato.",
    "sourceLabel": "Irish Refugee Council: maombi baada ya tarehe 12 Juni 2026",
    "choices": {
      "separate": {
        "label": "Eleza hatari inayohitaji ulinzi kwa ukweli na ufanye orodha tofauti ya mahitaji ya uhamaji, afya na malezi.",
        "feedback": "Hii hufanya dai la kisheria na mahitaji ya ufikivu vyote vionekane.",
        "consequence": "Watoa maamuzi wanapokea maelezo ya ulinzi huku wafanyakazi wa mapokezi wakiweza kutambua msaada wa vitendo."
      },
      "guarantee": {
        "label": "Dhania kuwa ulemavu unahakikisha hadhi ya ukimbizi moja kwa moja.",
        "feedback": "Udhaifu na kipimo cha kisheria cha ulinzi si kitu kimoja.",
        "consequence": "Hofu binafsi ya kurudi inaweza kutofafanuliwa ipasavyo."
      },
      "hide": {
        "label": "Ficha ulemavu kwa sababu wazazi wenye mahitaji ya msaada hawawezi kuomba.",
        "feedback": "Ulemavu hauondoi haki ya kutafuta ulinzi.",
        "consequence": "Misaada muhimu ya mapokezi na utaratibu inaweza kukosekana."
      }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Uchunguzi wa awali na udhaifu",
    "title": "Taja kila hitaji, si lile linaloonekana zaidi tu",
    "scene": "Kiti cha magurudumu kinaonekana wazi, lakini maumivu ya kudumu, kiwewe, dawa na kumtunza mtoto wa miaka sita havionekani.",
    "question": "Adama anapaswa kuichukuliaje tathmini ya udhaifu?",
    "law": "Chini ya mfumo wa 2026, waombaji hupewa nafasi ya tathmini ya hiari ya udhaifu. Ulemavu, kulea peke yako, ugonjwa mkubwa na uzoefu wa vurugu ni miongoni mwa makundi yanayotambuliwa kutumika kubaini mahitaji maalumu ya mapokezi.",
    "plainLaw": "Tumia tathmini kuelezea mahitaji yaliyofichika na yanayoonekana, na uombe taarifa zirekodiwe kwa usahihi.",
    "sourceLabel": "Tathmini ya udhaifu ya IPAS",
    "choices": {
      "full": {
        "label": "Eleza mahitaji ya uhamaji, maumivu, dawa, kiwewe na malezi, ukitumia ukalimani ikihitajika.",
        "feedback": "Mahitaji yanayoingiliana yanaweza kuhitaji hatua tofauti za vitendo.",
        "consequence": "Tathmini ina msingi kamili zaidi wa makazi na rufaa kwa huduma."
      },
      "chair": {
        "label": "Taja kiti cha magurudumu pekee kwa sababu mambo mengine ni ya faragha.",
        "feedback": "Yeye hudhibiti kufichua taarifa, lakini mahitaji yasiyorekodiwa yanaweza kuwa magumu zaidi kushughulikia.",
        "consequence": "Vikwazo vya maumivu, dawa au malezi vinaweza kubaki bila kuonekana hadi hali ya dharura."
      },
      "refuse": {
        "label": "Kataa kwa sababu kukubali tathmini kunadhoofisha dai la ulinzi.",
        "feedback": "Tathmini ni ya hiari na hushughulikia mahitaji ya msaada badala ya kuamua hadhi ya ulinzi.",
        "consequence": "Njia ya kubaini mahitaji maalumu ya mapokezi inapotea kwa sababu isiyo sahihi."
      }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Kupitia mfumo wa mapokezi",
    "title": "Kitanda kilichotolewa bado kinaweza kutotumika",
    "scene": "Usafiri wa kwenda kwenye makazi umepangwa, lakini Adama anagundua kuwa chumba chake kiko ghorofani na bafu haliwezi kutumiwa kwa usalama.",
    "question": "Ni jibu gani linalounda kumbukumbu iliyo wazi zaidi?",
    "law": "IPAS hutumia taarifa za udhaifu kushughulikia mahitaji maalumu ya mapokezi. Kuna michakato ya kuhamishwa kwa kipaumbele cha matibabu au kipekee na ya kuzingatiwa zaidi, ingawa eneo analopendelea mtu au uhamisho wa haraka havihakikishwi.",
    "plainLaw": "Eleza kikwazo halisi cha ufikivu kwa maandishi, toa ushahidi wa matibabu uliopo na utumie mchakato rasmi wa kupeleka suala kwa ngazi ya juu.",
    "sourceLabel": "Makazi na kuzingatiwa kwa matibabu kupitia IPAS",
    "choices": {
      "record": {
        "label": "Ripoti kikwazo mahsusi mara moja, hifadhi nakala na uombe kuzingatiwa kwa matibabu au kipekee kupitia IPAS.",
        "feedback": "Ushahidi maalumu ulioandikwa una nguvu zaidi kuliko ombi la jumla la kuhamishwa.",
        "consequence": "IPAS inaweza kutathmini tatizo halisi la usalama na ufikivu kupitia mchakato husika."
      },
      "leave": {
        "label": "Ondoka bila kumwambia yeyote na udhanie kuwa chumba kingine kitapatikana.",
        "feedback": "Kuondoka kunaweza kumtenganisha na msaada wa mapokezi bila kutatua kikwazo.",
        "consequence": "Adama na mtoto wake wanaweza kukosa makazi na kuwa vigumu zaidi kuwasiliana nao."
      },
      "accept": {
        "label": "Tumia chumba kisicho salama kwa sababu wakazi hawawezi kupinga ufaafu wake.",
        "feedback": "Masuala ya makazi na mahitaji maalumu yanaweza kuwasilishwa.",
        "consequence": "Kuanguka, kukosa usafi na kuongezeka kwa maumivu vinakuwa na uwezekano mkubwa zaidi."
      }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Ufikivu wa mahojiano",
    "title": "Kushiriki kunaweza kuhitaji marekebisho",
    "scene": "Eneo la mahojiano, muda mrefu wa kukaa na athari za dawa vinaweza kumzuia Adama kutoa maelezo kamili.",
    "question": "Anapaswa kufanya nini kabla ya miadi?",
    "law": "Waombaji wanapaswa kuhudhuria na kushirikiana na mchakato, huku wakitaja mapema iwezekanavyo mahitaji ya ulemavu, mawasiliano, afya na mengine ya utaratibu. Ushauri maalumu wa kisheria unaweza kusaidia kuelezea marekebisho yanayofaa na ukomo wa muda.",
    "plainLaw": "Iambie IPO na mshauri wa kisheria kinachofanya kushiriki kuwa kugumu kabla ya mahojiano, si tu baada ya kushindwa.",
    "sourceLabel": "Irish Refugee Council Independent Law Centre",
    "choices": {
      "early": {
        "label": "Wasiliana mapema na IPO na mshauri wa kisheria ukitaja masuala maalumu ya ufikivu, mapumziko, dawa na utunzaji wa mtoto.",
        "feedback": "Taarifa maalumu ya mapema hutoa nafasi ya mchakato kuitikia.",
        "consequence": "Adama anaweza kushiriki vizuri zaidi na utunzaji wa mwanawe unaweza kupangwa."
      },
      "miss": {
        "label": "Kosa mahojiano bila kuwasiliana kwa sababu ulemavu unasamehe kutohudhuria moja kwa moja.",
        "feedback": "Usidhani kutohudhuria kutajieleza kwenyewe.",
        "consequence": "Hatua muhimu ya utaratibu inaweza kukosekana bila sababu kueleweka."
      },
      "endure": {
        "label": "Usiseme chochote na uendelee hata maumivu yanapoathiri umakini.",
        "feedback": "Ugumu usioelezwa unaweza kuathiri jinsi maelezo yanavyosikilizwa na kurekodiwa.",
        "consequence": "Maelezo muhimu yanaweza kuachwa au kuonekana kutolingana."
      }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Afya, shule na kujitegemea",
    "title": "Miadi moja haiwezi kutatua kila kikwazo",
    "scene": "Adama anahitaji daktari wa jumla, mwendelezo wa dawa, nafasi shuleni, usafiri wenye ufikivu na taarifa za ustahiki wa kazi.",
    "question": "Mpango halisi zaidi ni upi?",
    "law": "Huduma za afya, elimu, makazi ya mapokezi na ufikiaji wa soko la ajira hutenda kupitia huduma tofauti za Ireland na kanuni za ustahiki. IPAS huchapisha njia tofauti na taarifa za msaada kwa kila moja.",
    "plainLaw": "Tengeneza hatua na mawasiliano tofauti kwa afya, shule, makazi na uhamiaji badala ya kusubiri huduma moja isimamie kila kitu.",
    "sourceLabel": "Huduma na misaada ya IPAS",
    "choices": {
      "plan": {
        "label": "Tengeneza mpango wa sehemu nne na utafute mtetezi au mfanyakazi wa msaada kuratibu majukumu ya haraka.",
        "feedback": "Uratibu ni muhimu kwa sababu kila mfumo una jukumu tofauti.",
        "consequence": "Dawa na shule vinaweza kupewa kipaumbele bila kupoteza ufuatiliaji wa makazi au majukumu ya kesi."
      },
      "ipo": {
        "label": "Mwombe afisa wa kesi wa IPO apange kila huduma ya afya, shule na usafiri.",
        "feedback": "IPO huchunguza ombi la ulinzi; haiendeshi huduma zote za kuwasili.",
        "consequence": "Mahitaji ya haraka ya vitendo yanaelekezwa kwa taasisi isiyohusika."
      },
      "wait": {
        "label": "Subiri hadhi ya ulinzi kabla ya kutafuta huduma za afya au nafasi shuleni.",
        "feedback": "Waombaji na watoto wanaweza kupata huduma wakati kesi inasubiriwa, kwa kufuata kanuni husika.",
        "consequence": "Afya inazorota na mtoto anapoteza muda wa elimu bila sababu."
      }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "Uhuru wa kutembea ndani ya EU",
    "title": "Elena hahitaji kibali cha ajira",
    "scene": "Wakala wa uajiri anamwambia Elena kwamba raia wa Bulgaria wanahitaji kibali kilekile cha kazi kama wafanyakazi wa nje ya EEA na anajitolea kumuuzia kimoja.",
    "question": "Anapaswa kuhakikisha nini?",
    "law": "Kama raia wa EU, Elena anaweza kuingia Ireland kwa pasipoti au kitambulisho cha kitaifa kilicho halali na anaweza kufanya kazi bila kibali cha ajira cha Ireland. Masharti yanatumika kwa ukaaji unaozidi kipindi cha awali.",
    "plainLaw": "Usilipie kibali cha kazi ambacho raia wa EU hahitaji; angalia kanuni tofauti za kukaa kwa muda mrefu zaidi.",
    "sourceLabel": "Kuja kutoka EU/EEA kufanya kazi",
    "choices": {
      "eu": {
        "label": "Kataa kuuziwa kibali, hakikisha mwajiri na utumie taarifa rasmi za ukaaji za EU.",
        "feedback": "Uraia wake wa EU hubadilisha njia ya uhamiaji, si hitaji lake la kazi halisi.",
        "consequence": "Elena anaepuka ulaghai na kupanga kulingana na haki zake halisi za uhuru wa kutembea."
      },
      "buy": {
        "label": "Lipa kwa sababu umri na kuwa wa kabila la Roma vinaweka sharti maalumu la kibali.",
        "feedback": "Utambulisho huo hauleti sharti la kibali cha ajira kwa raia wa EU.",
        "consequence": "Fedha na nyaraka nyeti vinakabidhiwa wakala wa uajiri asiye mwaminifu."
      },
      "visitor": {
        "label": "Ficha mpango wa kufanya kazi kwa sababu raia wa EU wanaweza kutembelea tu.",
        "feedback": "Raia wa EU wana haki ya kufanya kazi katika nchi nyingine ya EU, kwa kufuata kanuni husika za ukaaji.",
        "consequence": "Elena hauelewi na hautumii kikamilifu msingi wa kisheria alio nao."
      }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "Kukaa zaidi ya miezi ya kwanza",
    "title": "Uhuru wa kutembea bado una masharti ya ukaaji",
    "scene": "Elena anapanga kubaki bila kikomo lakini ana ahadi ya kazi fupi ya muda tu na karibu hana akiba.",
    "question": "Ni mpango gani wa kuaminika zaidi?",
    "law": "Raia wa EU wanaweza kukaa Ireland mwanzoni na wanaweza kubaki muda mrefu zaidi wanapotumia haki ya Mkataba wa EU, kama kufanya kazi, kujiajiri, masomo yanayostahiki au kujitegemea. Watafuta kazi wana ulinzi na masharti maalumu.",
    "plainLaw": "Hifadhi ushahidi wa kazi halisi au kutafuta kazi na uelewe msingi unaounga mkono ukaaji baada ya kipindi cha awali.",
    "sourceLabel": "Haki za ukaaji za raia wa EU nchini Ireland",
    "choices": {
      "evidence": {
        "label": "Hifadhi maombi ya kazi, mikataba, hati za malipo na kumbukumbu za makazi huku ukikagua msingi husika wa ukaaji.",
        "feedback": "Ushahidi husaidia kuonyesha kwamba Elena anafanya kazi au anatafuta kazi kwa dhati.",
        "consequence": "Mpango wake wa muda mrefu zaidi unategemea msingi wa haki ya Mkataba wenye nyaraka."
      },
      "forever": {
        "label": "Dhania kuwa uraia wa EU unaleta ukaaji wa kudumu usio na masharti tangu siku ya kwanza.",
        "feedback": "Kuingia kwa mara ya kwanza na ukaaji wa muda mrefu si vitu vinavyofanana.",
        "consequence": "Elena anaweza kugundua tatizo la ukaaji wakati tu anapojaribu kupata huduma nyingine."
      },
      "cash": {
        "label": "Kubali kazi ya fedha taslimu isiyo na nyaraka kwa sababu kazi yoyote huthibitisha ukaaji.",
        "feedback": "Kazi isiyotangazwa hudhoofisha ulinzi wa ajira na huenda isitoe ushahidi unaoweza kutumiwa.",
        "consequence": "Unyonyaji unaongezeka huku historia yake ya kazi ikibaki ngumu kuthibitisha."
      }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "Kuanza kazi",
    "title": "Nambari ya PPS na IRP si vibali vya kazi vya EU",
    "scene": "Hoteli inamwomba Elena Kibali cha Ukaaji cha Ireland kabla ya kumweka kwenye ratiba ya zamu.",
    "question": "Anapaswa kujibuje?",
    "law": "Raia wa EU kwa kawaida hawajisajili na Immigration Service Delivery wala kupata IRP ili kutumia haki zao za EU. Nambari ya PPS ni kitambulisho tofauti kwa madhumuni ya kodi na huduma za umma.",
    "plainLaw": "Onyesha utambulisho wa EU na ueleze msingi sahihi wa haki ya kufanya kazi; kamilisha hatua za kodi na PPS kando.",
    "sourceLabel": "Raia wa EU wanaofanya kazi nchini Ireland",
    "choices": {
      "explain": {
        "label": "Toa hati yake ya utambulisho ya Bulgaria na uombe idara ya rasilimali watu ipitie kanuni za wafanyakazi wa EU.",
        "feedback": "Hii hurekebisha sharti bila kubuni hati ambayo hapaswi kuwa nayo.",
        "consequence": "Mwajiri anaweza kumwingiza kazini kwa msingi unaofaa wa EU."
      },
      "fake": {
        "label": "Nunua IRP ya uongo kwa sababu mwajiri anasisitiza.",
        "feedback": "Usiwahi kutengeneza au kununua nyaraka za uongo za uhamiaji.",
        "consequence": "Kosa la mwajiri linakuwa tatizo kubwa la kisheria kwa Elena."
      },
      "ppswork": {
        "label": "Sema nambari ya PPS ndiyo hati inayotoa haki za kazi za EU.",
        "feedback": "Nambari ya PPS haitoi haki ya kufanya kazi.",
        "consequence": "Mifumo miwili tofauti inabaki kuchanganywa."
      }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Ubaguzi wa makazi",
    "title": "Kukataliwa kunaweza kuhusisha zaidi ya uwezo wa kulipa",
    "scene": "Mwenye nyumba anaonyesha kukubali kwenye simu, kisha anasema chumba hakipatikani baada ya kumwona Elena na kusikia kuwa yeye ni wa Roma na trans.",
    "question": "Elena anaweza kufanya nini bila kudhania kwamba kila kukataliwa ni kinyume cha sheria?",
    "law": "Sheria ya usawa ya Ireland inakataza ubaguzi wa makazi kwa misingi inayolindwa ikiwemo rangi, jinsia na umri. Ubaguzi dhidi ya watu trans unalindwa chini ya msingi wa jinsia, lakini ushahidi na ukomo wa muda ni muhimu katika malalamiko.",
    "plainLaw": "Rekodi kilichotokea, hifadhi tangazo na ujumbe, na utafute haraka ushauri wa makazi au usawa.",
    "sourceLabel": "IHREC: rangi na makazi",
    "choices": {
      "save": {
        "label": "Hifadhi tangazo na ujumbe, andika yaliyosemwa na utafute ushauri kutoka IHREC au huduma ya makazi.",
        "feedback": "Ushahidi uliorekodiwa wakati wa tukio husaidia kutofautisha ubaguzi na maelezo mengine.",
        "consequence": "Elena anaweza kutathmini malalamiko huku akiendelea na utafutaji wa haraka wa makazi."
      },
      "threat": {
        "label": "Mtishie mwenye nyumba hadharani bila kuhifadhi ushahidi wowote.",
        "feedback": "Hasira inaeleweka, lakini ushahidi na ushauri huunda njia yenye nguvu zaidi ya kupata suluhisho.",
        "consequence": "Tangazo linatoweka na maneno halisi ya ubaguzi yanakuwa magumu zaidi kuthibitisha."
      },
      "accept": {
        "label": "Dhania kuwa ubaguzi dhidi ya wapangaji wa Roma au trans ni halali katika nyumba binafsi.",
        "feedback": "Huduma binafsi za makazi zinahusika na kanuni za usawa, kwa kufuata maelezo na tofauti zinazoruhusiwa kisheria.",
        "consequence": "Kukataliwa ambako huenda kukaweza kulalamikiwa kisheria kunabaki bila kuchunguzwa."
      }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "Usawa kazini",
    "title": "Tukio moja linaweza kuhusisha misingi kadhaa inayolindwa",
    "scene": "Msimamizi anakejeli lafudhi na jinsia ya Elena, anawapa wafanyakazi vijana wasio wa Roma zamu nzuri zaidi na kumwambia atumie beji yenye jina tofauti.",
    "question": "Ni jibu gani linalolinda masuala yanayoingiliana?",
    "law": "Sheria za Usawa wa Ajira (Employment Equality Acts) zinakataza ubaguzi kazini kwa misingi ikiwemo jinsia, rangi na umri. Ubaguzi dhidi ya watu trans unalindwa chini ya msingi wa jinsia; malalamiko ya kazini yanaweza kuwasilishwa kwa WRC.",
    "plainLaw": "Rekodi kila tukio na mfano wa mtu wa kulinganisha naye, tumia mchakato wa mwajiri inapokuwa salama, na upate ushauri wa usawa haraka.",
    "sourceLabel": "IHREC: ubaguzi kazini",
    "choices": {
      "log": {
        "label": "Weka kumbukumbu zenye tarehe za maneno, zamu na mashahidi, kisha utafute mwongozo wa IHREC au WRC.",
        "feedback": "Kumbukumbu inaonyesha jinsi rangi, jinsia na umri vinavyoweza kufanya kazi pamoja.",
        "consequence": "Elena anaweza kufuatilia suluhisho la ndani au nje linalozingatia taarifa kabla ya ushahidi na ukomo wa muda kupotea."
      },
      "one": {
        "label": "Ripoti umri pekee kwa sababu malalamiko moja hayawezi kuhusisha misingi inayoingiliana.",
        "feedback": "Malalamiko yanaweza kuelezea zaidi ya msingi mmoja unaolindwa pale ukweli unapoyaunga mkono.",
        "consequence": "Vipengele vya rangi na jinsia vya alivyotendewa vinatoweka kwenye maelezo."
      },
      "quit": {
        "label": "Acha kazi mara moja bila kuhifadhi ratiba, ujumbe au kutafuta ushauri.",
        "feedback": "Usalama hutangulia, lakini kuhifadhi ushahidi na kupata ushauri vinaweza kulinda chaguo za baadaye.",
        "consequence": "Mapato yanasimama na mfumo wa matukio unakuwa mgumu zaidi kuonyesha."
      }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Usalama wa haraka",
    "title": "Hofu ya uhamiaji inaweza kuwa sehemu ya udhibiti wa kulazimisha",
    "scene": "Mwenzi wa Leila anadhibiti pasipoti, fedha na simu yake na anasema Gardaí watamfukuza nchini akiondoka na watoto.",
    "question": "Nini kinapaswa kutangulia?",
    "law": "Unyanyasaji wa nyumbani unaweza kujumuisha udhibiti wa kulazimisha pamoja na ukatili wa kimwili. Yeyote aliye katika hatari ya haraka anapaswa kupiga 999 au 112; hadhi ya uhamiaji haimzuii mwathiriwa kuwasiliana na An Garda Síochána au huduma maalumu.",
    "plainLaw": "Tanguliza usalama wa haraka na msaada wa siri wa kitaalamu; mnyanyasaji haamui hadhi ya uhamiaji.",
    "sourceLabel": "Msaada wa Women’s Aid",
    "choices": {
      "safe": {
        "label": "Tumia kifaa salama au mtu wa kuaminika kufikia msaada wa dharura au maalumu wa unyanyasaji wa nyumbani.",
        "feedback": "Mpango wa usalama unaweza kuzingatia watoto, lugha, ufuatiliaji na nyaraka.",
        "consequence": "Leila anapata chaguo za siri bila kulazimika kwanza kukabiliana na mnyanyasaji."
      },
      "confront": {
        "label": "Tangaza mpango wa kuondoka na udai kurudishiwa kila hati ukiwa peke yako.",
        "feedback": "Kukabiliana kunaweza kuongeza hatari; mtaalamu anaweza kusaidia kupanga kuondoka kwa usalama zaidi.",
        "consequence": "Mnyanyasaji anaweza kuongeza ukatili au kuondoa nyaraka na fedha."
      },
      "believe": {
        "label": "Baki kwa sababu mwenzi ana mamlaka ya kisheria ya kuamuru kufukuzwa nchini.",
        "feedback": "Mwenzi wa ndoa hafanyi maamuzi ya uhamiaji.",
        "consequence": "Vitisho vya uongo vya uhamiaji vinaendelea kuwanasa Leila na watoto."
      }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Mawasiliano ya faragha",
    "title": "Njia salama ya mawasiliano ni muhimu",
    "scene": "Mwenzi hukagua historia ya kivinjari na hutafsiri kila barua rasmi kabla Leila hajaweza kuisoma.",
    "question": "Anawezaje kutafuta taarifa kwa usalama zaidi?",
    "law": "ISD inaonya kuwa vifaa huacha athari za kidijitali na inamruhusu mwathiriwa kutumia mawasiliano ya mwakilishi. Women’s Aid inaweza kupata mkalimani na kuwaunganisha wapigaji simu na huduma kote Ireland.",
    "plainLaw": "Tumia kifaa salama zaidi na mawasiliano ambayo mnyanyasaji hawezi kufuatilia; omba mkalimani badala ya kumtegemea mnyanyasaji.",
    "sourceLabel": "Miongozo ya ISD ya uhamiaji kuhusu unyanyasaji wa nyumbani",
    "choices": {
      "private": {
        "label": "Tumia kifaa cha kuaminika, barua pepe salama au anwani ya mwakilishi na uombe ukalimani huru.",
        "feedback": "Hii hupunguza ufuatiliaji na kumpa Leila ufikiaji wa moja kwa moja wa taarifa zake mwenyewe.",
        "consequence": "Huduma za msaada zinaweza kuwasiliana bila kupitisha kila kitu kwa mwenzi."
      },
      "shared": {
        "label": "Tumia akaunti ya pamoja ya familia kwa sababu kufuta historia huondoa kila athari.",
        "feedback": "Kufuta historia hakuhakikishi kuwa shughuli zimefichwa.",
        "consequence": "Mwenzi anaweza kugundua mpango wa usalama au uhamiaji."
      },
      "translate": {
        "label": "Mruhusu mwenzi atafsiri kila mazungumzo ya siri.",
        "feedback": "Anayedaiwa kuwa mnyanyasaji hapaswi kudhibiti ukalimani wa ushauri wa usalama au wa kisheria.",
        "consequence": "Taarifa zinaweza kubadilishwa, kuzuiwa au kutumiwa kumtisha Leila."
      }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Hadhi huru ya uhamiaji",
    "title": "Kuondoka hakumalizi ruhusa moja kwa moja",
    "scene": "Ruhusa ya ukaaji ya Leila imeunganishwa na mwenzi wake, na anaamini kuhamia kituo cha hifadhi kutafanya ukaaji wake uwe kinyume cha sheria usiku huohuo.",
    "question": "Anapaswa kuchunguza njia gani kwa haraka?",
    "law": "Mwathiriwa ambaye ruhusa yake imeunganishwa na mnyanyasaji anaweza kuomba moja kwa moja au kupitia wakili ruhusa huru ya uhamiaji chini ya miongozo ya ISD ya unyanyasaji wa nyumbani. Hakuna ada ya maombi na ombi hushughulikiwa kwa siri.",
    "plainLaw": "Pata ushauri kuhusu mchakato wa ruhusa huru; kuondoka kwa mnyanyasaji na kupoteza hadhi si tukio lilelile moja kwa moja.",
    "sourceLabel": "Ruhusa huru kwa waathiriwa wa unyanyasaji wa nyumbani",
    "choices": {
      "apply": {
        "label": "Wasiliana na ISD au wakili kupitia njia salama na uombe hadhi huru chini ya miongozo.",
        "feedback": "Mpango huu upo kwa ruhusa iliyounganishwa na anayedaiwa kuwa mnyanyasaji.",
        "consequence": "ISD inaweza kutathmini hali binafsi za Leila bila mwenzi kudhibiti ombi."
      },
      "permission": {
        "label": "Mwombe mwenzi asaini ruhusa ya ombi lake huru.",
        "feedback": "Mnyanyasaji hana jukumu la kufanya uamuzi katika ombi la hadhi huru.",
        "consequence": "Mwenzi anajulishwa na anapata fursa nyingine ya kuzuia usalama."
      },
      "automatic": {
        "label": "Dhania kuwa kuhamia kituo cha hifadhi kunatoa Stamp 4 moja kwa moja.",
        "feedback": "Ruhusa huru inahitaji ombi na tathmini; haitolewi moja kwa moja.",
        "consequence": "Leila anaweza kuamini hatua ya uhamiaji imekamilika wakati haijakamilika."
      }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Ushahidi bila ukamilifu",
    "title": "Si kila aliyenusurika ana ripoti ya Garda",
    "scene": "Unyanyasaji mwingi ulitokea nyumbani. Leila ana ujumbe na ziara kwa daktari wa jumla lakini hana amri ya mahakama wala nambari ya tukio ya Garda.",
    "question": "Anapaswa kuandaaje ombi?",
    "law": "ISD huomba taarifa nyingi iwezekanavyo na huorodhesha mifano ikiwemo amri za mahakama, ripoti za matibabu au Garda, barua za taasisi za Serikali na barua za huduma za ukatili wa nyumbani. Hali na watoto vinapaswa kuelezwa; mifano si sababu ya kubuni ushahidi.",
    "plainLaw": "Kusanya kilichopo kweli, eleza mapengo na uombe wakili au huduma ya msaada kusaidia kuwasilisha historia.",
    "sourceLabel": "Mwongozo wa ushahidi wa ISD",
    "choices": {
      "genuine": {
        "label": "Hifadhi ujumbe na kumbukumbu halisi, eleza mfululizo wa matukio na utafute barua za kuunga mkono inapofaa.",
        "feedback": "Maelezo ya kweli na yanayoeleweka yanaweza kutumia aina tofauti za ushahidi.",
        "consequence": "ISD inapokea historia iliyopo bila hati ya uongo kuidhoofisha."
      },
      "wait": {
        "label": "Subiri kutafuta msaada hadi awe na kila mfano kwenye orodha ya ISD.",
        "feedback": "Usalama na ushauri havipaswi kuahirishwa kwa kutafuta jalada kamilifu.",
        "consequence": "Hatari inaendelea na ushahidi muhimu unaweza kupotea."
      },
      "create": {
        "label": "Buni nambari ya ripoti ya Garda kwa sababu ushahidi rasmi unahitajika kila wakati.",
        "feedback": "Usiwahi kubuni ushahidi.",
        "consequence": "Taarifa za uongo zinaweza kuharibu kuaminika na ombi la uhamiaji."
      }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Baada ya usalama wa haraka",
    "title": "Ruhusa ya uhamiaji ni sehemu moja ya kupona",
    "scene": "Leila anahitaji mapato, makazi salama, mwendelezo wa shule na msaada unaoheshimu watu wa LGBT huku maswali ya sheria ya familia yakibaki hayajatatuliwa.",
    "question": "Hatua inayofuata iliyo halisi zaidi ni ipi?",
    "law": "Ruhusa huru ikiidhinishwa chini ya miongozo, Stamp 4 inaruhusu kazi bila kibali cha ajira. Mahitaji ya usalama, makazi, watoto na sheria ya familia bado yanahitaji huduma tofauti za kitaalamu; sababu za kukataa na chaguo nyingine za uhamiaji zinapaswa kuelezwa ombi likikataliwa.",
    "plainLaw": "Jenga mpango ulioratibiwa wa uhamiaji, usalama, watoto, makazi na mapato badala ya kutarajia uamuzi mmoja utatue kila kitu.",
    "sourceLabel": "Miongozo ya ISD ya uhamiaji kuhusu unyanyasaji wa nyumbani",
    "choices": {
      "team": {
        "label": "Tumia pamoja mshauri wa uhamiaji, huduma ya unyanyasaji wa nyumbani na misaada inayofaa ya familia, makazi na LGBT.",
        "feedback": "Wataalamu tofauti wanaweza kushughulikia mahitaji yanayohusiana lakini tofauti kisheria.",
        "consequence": "Leila anaweza kujenga upya kujitegemea bila huduma moja kuwapuuza watoto au nyingine kupuuza hadhi."
      },
      "stamp": {
        "label": "Dhania kuwa Stamp 4 inatoa makazi moja kwa moja na kutatua mipango ya watoto.",
        "feedback": "Ruhusa ya uhamiaji haiamui masuala ya makazi au sheria ya familia.",
        "consequence": "Mahitaji ya haraka ya vitendo na kisheria yanabaki bila kushughulikiwa."
      },
      "return": {
        "label": "Rudi kwa mwenzi kwa sababu kuidhinishwa hakuhakikishwi.",
        "feedback": "Kutokuwa na uhakika kunahitaji mipango ya kitaalamu, si kulazimishwa kukabili hatari.",
        "consequence": "Udhibiti wa kulazimisha unaanza tena kabla ya chaguo huru kutathminiwa ipasavyo."
      }
    }
  }
};

export default catalog;
