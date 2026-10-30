// AI-assisted translation; see README language review notes.
import type { JourneyControls, JourneyTranslationCatalog } from "./types";

export const controls: JourneyControls = {
  "resume": "Kobá",
  "resumeJourney": "Kobá elongo na {name}",
  "restart": "Bandá mobembo oyo lisusu",
  "savedJourney": "Mobembo ebombami",
  "stage": "Eteni",
  "returnHome": "Zongá na mibembo",
  "saveUnavailable": "Bokoli ekoki kobombama te na navigateur oyo. Tiká lokasa oyo efungwama mpo na kokoba."
};

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Nani asengeli kokomisa nkombo, nini bokomisi ebombaka mpe ndenge ya kosalela nzela ya bakonzi.",
  "Personal Public Service number": "Ndenge nimero ya PPS esalelamaka mpo na misala ya Leta mpe misala ya bakonzi. Ezali ndingisa ya kofanda te.",
  "Choose an immigration purpose": "Bisika ya bakonzi mpo na kobanda botali, mosala, boyekoli, kofanda na Ireland to kosangana na libota.",
  "Immigration permission stamps": "Sosolá nini Stamp oyo ekomami na Irish Residence Permit epesaka nzela mpe esɛngaka.",
  "Applying for international protection": "Makambo ya bakonzi na ntina ya bosɛngi mpe botali na Ireland.",
  "Applications made after 12 June 2026": "Makambo na maloba ya pɛtɛɛ na ntina ya International Protection Act 2026 mpe mibeko oyo etali bosɛngi ya sika.",
  "Accommodation and reception supports": "Makambo na ntina ya ndako ya IPAS, misala, bolamu ya bafandi mpe bareklamasyo.",
  "Vulnerability and accommodation needs": "Ndenge basɛngi bakoki koyebisa bokono oyo epekisaka kosala makambo, kolɔngɔnɔ, kobɔkɔla bana mpe bamposa mosusu ya sipesiale ya boyambi, mpe ndenge mitungisi ya ndako etalelamaka.",
  "Independent legal and practical support": "Makambo, kolobela makoki, mibeko, ndako, mosala, bilenge mpe misala ya kofanda na esika ya sika.",
  "Employment permit types": "Bituluku ya ndingisa ya sikoyo, masɛngami, baliste ya misala, malako ya kosɛnga mpe makambo ya sika.",
  "Rights when working in Ireland": "Lifuti, mibeko ya mosala, ntango ya mosala, konje, makomi mpe banzela ya reklamasyo ya mosala.",
  "Migrant employment and exploitation support": "Makambo mpe lisungi ya lipanda mpo na basali bapaya, kati na bango bato oyo bakoki konyokwama.",
  "EU citizens coming to work": "Makoki ya mosala mpo na bana-mboka ya EU mpe EEA, kati na yango mpo na nini ndingisa ya mosala ya Ireland esɛngamaka mingimingi te.",
  "EU residence rights": "Miboko oyo epesaka bana-mboka ya EU nzela ya kokɔta mpe kofanda na Ireland, kati na yango mosala, koluka mosala, boyekoli mpe komikokisa na mbongo.",
  "Coming to study in Ireland": "Makambo ya visa, mbongo, asiranse, kelasi mpe bokomisi mpo na bayekoli oyo bazali bana-mboka ya EEA te.",
  "Education in Ireland": "Makambo ya bato nyonso na ntina ya biteyelo, mateya ya kokoba, boyekoli ya likoló mpe lisungi ya mateya.",
  "Healthcare services": "Ndenge ya kozwa monganga ya liboso, balopitalo, misala ya mbalakaka mpe makambo ya kolɔngɔnɔ ya bato nyonso na Ireland.",
  "Finding and renting a home": "Makambo ya ndako, kofutela, makoki ya bafuteli, mbongo ya ndanga, kozanga ndako mpe lisungi ya ndako.",
  "Independent public information": "Makambo ya ekólo na ntina ya lisungi ya bomoi, kolɔngɔnɔ, ndako, mbongo, mpako, kelasi mpe makoki ya basombi.",
  "Traveller and Roma equality rights": "Makambo na ntina ya bokeseni oyo masanga ya Traveller mpe Roma bakutanaka na yango mpe libateli oyo ezali na nse ya mibeko ya Ireland ya bokokani.",
  "Coming to join family": "Luká nzela na kolanda soki moto oyo ayambi yo azali mwana-mboka ya Ireland, UK, EEA to Switzerland, ya libándá ya EEA, to azali na ezalela ya libateli.",
  "Specialist migrant and refugee advice": "Makambo mpe lisungi na makambo ya moto na ntina ya ezalela ya kofanda, visa, kosangisa libota lisusu, kozala mwana-mboka mpe mibeko ya boyambi.",
  "Independent status after domestic abuse": "Malako ya kofanda ya sekele mpo na moto oyo anyokwami mpe ndingisa na ye ekangami na moto oyo bafundi ete anyokoli ye, kati na yango ndenge ya kosɛnga mpe bilembeteli oyo ekoki kosalisa.",
  "Domestic-abuse safety and support": "Lisungi ya sekele, kobongola maloba mpe makambo ya bokengi mpo na basi oyo bazali konyokwama na ndako; bengá 999 to 112 na likambo ya mbalakaka."
};

const catalog: JourneyTranslationCatalog = {
  "critical:Plan": {
    "eyebrow": "Sanza minei liboso ya bokende",
    "title": "Likabo ya malamu ezali kaka ebandeli",
    "scene": "Kontra ekómi. Patrɔ alobi ete mosala yango elukami mingi mpe asɛngi ete abanda mbala moko.",
    "question": "Nini esengeli kosalema liboso ya kobongisa baavion to koyebisa esika ya mosala ete akotika?",
    "law": "Critical Skills Employment Permit esɛngi ete mosala, lifuti, kontra mpe patrɔ bákokisa masɛngami ya mibeko ya sikoyo.",
    "plainLaw": "Talá mosala ya solo, lifuti, kontra mpe patrɔ na kolanda mibeko ya bakonzi ya lelo liboso ya kondimela likabo.",
    "sourceLabel": "Critical Skills Employment Permit",
    "choices": {
      "verify": {
        "label": "Talá lolenge ya mosala, lifuti, kontra mpe patrɔ, na nsima pesá bosɛngi ya ndingisa oyo ebongi.",
        "feedback": "Yango ebatelaka bokende mpo etongama te likoló ya likabo oyo ekokisi masɛngami te.",
        "consequence": "Programɛ ya ntango ekómi oyo ekoki kosalema mpe mosala etalelami na mibeko ya sikoyo."
      },
      "contract": {
        "label": "Talelá kontra oyo etyami sinyatire lokola ndingisa ya kosala.",
        "feedback": "Kontra mpe ndingisa ya mosala ezali na mikumba ekeseni na mibeko.",
        "consequence": "Mobembo to kotika mosala ekoki kosalema liboso ndingisa oyo esengeli ezala."
      },
      "visitor": {
        "label": "Kɔtá lokola mopaya ya botali mpe silisá ndingisa nsima ya kobanda mosala.",
        "feedback": "Ezalela ya mopaya ya botali epesaka nzela te ya mosala ya momeseno.",
        "consequence": "Mosala mpe ezalela ya kofanda nyonso mibale ekoki kotyama na likama."
      }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Mikanda mpe ntango",
    "title": "Kondimama moko ezwaka esika ya makambo mosusu nyonso te",
    "scene": "Ndingisa epesami. Moninga alobi ete yango elingi koloba botali mosusu ya kokɔta mpe kofanda esengeli te.",
    "question": "Mwango nini ebatelaka mingi?",
    "law": "Ndingisa ya mosala epesaka nzela ya mosala oyo elakisami. Moto ya ekólo oyo esɛngamaka visa asengeli mpe kozwa visa ya kofanda ntango molai oyo ebongi liboso ya kosala mobembo.",
    "plainLaw": "Ndingisa ya mosala, visa, ndingisa na ndelo mpe kokomisa kofanda ezali biteni ekeseni.",
    "sourceLabel": "Koya kosala na Ireland",
    "choices": {
      "sequence": {
        "label": "Talá masɛngami ya visa, bongisá bilembeteli mpe batelá ndingisa nyonso na esika okoki kozwa mpo na mobembo.",
        "feedback": "Ezali malamu. Mokanda mokomoko eyanolaka motuna ekeseni.",
        "consequence": "Moto ya mobembo akoki kolimbola ntina ya bokende na ndelo."
      },
      "permitvisa": {
        "label": "Kanisá ete ndingisa ya mosala ezali mbala moko visa ya mobembo.",
        "feedback": "Yango ezali solo te mpo na bana-mboka oyo basengeli kozwa visa.",
        "consequence": "Komata na avion to kokɔta ekoki kobebisama atako ndingisa ya mosala ezali na mosala."
      },
      "agent": {
        "label": "Pesá mikanda nyonso ya ebandeli na ntoma oyo atalelami te.",
        "feedback": "Batelá bokonzi na mikanda ya bomoto mpe talá moto nyonso oyo azali kopesa lisungi ya kofuta.",
        "consequence": "Kozanga kozwa mikanda ya ebandeli ebimisaka koumela mpe likama ya konyokwama."
      }
    }
  },
  "critical:Travel": {
    "eyebrow": "Na ndelo ya Ireland",
    "title": "Bongamá kolimbola ntina ya mobembo",
    "scene": "Mokonzi ya kokɔta mpe kofanda atuni esika moto ya mobembo akofanda mpe patrɔ nini azali kozela ye.",
    "question": "Asengeli kosala nini?",
    "law": "Visa epesaka nzela ya kosala mobembo tii na ndelo; mokonzi ya kokɔta mpe kofanda akataka kokɔta. Mikanda ya lisungi esengeli komonisa ntina ya solo mpe bibongiseli.",
    "plainLaw": "Memá bilembeteli ya solo oyo eyokani na ntina ya mosala, ndingisa mpe adrɛsi ya liboso.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "answer": {
        "label": "Yanólá na solo mpe monisá ndingisa ya mosala, visa soki esengeli, kontra mpe makambo ya ndako.",
        "feedback": "Bilembeteli ya polele oyo eyokani esungaka ntina ya mobembo oyo elobami.",
        "consequence": "Mokonzi akoki kotalela mobembo ya mosala na kosalela mikanda oyo ebongi."
      },
      "tourism": {
        "label": "Lobá ete ezali kaka konje mpo na koboya mituna ya mosala.",
        "feedback": "Maloba esengeli koyokana na ntina ya solo mpe mikanda.",
        "consequence": "Makambo oyo eyokani te ekoki kobimisa mpasi makasi na ndelo."
      },
      "phone": {
        "label": "Tyelá kaka moto oyo alukelaka bato mosala motema ete akoyanola na telefone.",
        "feedback": "Moto ya mobembo asengeli kososola mpe komema makambo na ye ya ntina.",
        "consequence": "Soki moto ya kozwa mosala azali te, ntina ya mobembo ekoki kozala polele te."
      }
    }
  },
  "critical:Arrive": {
    "eyebrow": "Mikolo 90 ya liboso",
    "title": "Bokomisi ekómisaka ndingisa bilembeteli",
    "scene": "Mosala ebandi, kasi koluka ndako mpe ba rendez-vous ekómisi bapɔsɔ ya liboso mpasi.",
    "question": "Likambo nini esengeli kotikala na mwango?",
    "law": "Bato ya libándá ya EU, UK mpe Switzerland oyo bafandi koleka mikolo 90 basengeli mingimingi kokomisa ndingisa na bango ya kofanda na Ireland.",
    "plainLaw": "Bongisá bokomisi mpe batelá makambo ya ndingisa, adrɛsi mpe mosala na bosolo.",
    "sourceLabel": "Kokomisa ndingisa ya kofanda",
    "choices": {
      "register": {
        "label": "Bongisá bokomisi, landá nzela ya bakonzi ya rendez-vous mpe batelá bilembeteli ya komeka.",
        "feedback": "Irish Residence Permit ekomaka ndingisa mpe masɛngami na yango.",
        "consequence": "Moto azali na bilembeteli ya polele koleka ya kofanda na ndenge ya mobeko mpe oyo ndingisa epesi nzela."
      },
      "pps": {
        "label": "Kanisá ete nimero ya PPS ezwaka esika ya kokomisa ndingisa ya kofanda.",
        "feedback": "Nimero ya PPS ezali mpo na misala ya Leta mpe mpako, ezali ndingisa ya kofanda te.",
        "consequence": "Nimero ya ntina ya misala ya administrasio ekoki kobungisama lokola bilembeteli ya kofanda na mobeko."
      },
      "contract": {
        "label": "Kanisá ete kontra ya patrɔ ezwaka esika ya IRP.",
        "feedback": "Mikanda ya mosala ezwaka esika ya kokomisa kofanda te.",
        "consequence": "Moto akoki kokutana na mpasi mpo na komonisa masɛngami ya kofanda na ye."
      }
    }
  },
  "critical:Build a life": {
    "eyebrow": "Esika ya mosala mpe mikolo ekoya",
    "title": "Ezalela ya kofanda elongolaka makoki ya mosala te",
    "scene": "Mokambi alobi ete basali bapaya bazwaka lifuti moke mpe ntango ya kopema moke na basanza na bango ya liboso.",
    "question": "Eyano nini ebatelaka mosala mpe ezalela ya kofanda?",
    "law": "Basali bapaya oyo basalaka na ndenge ya mobeko na Ireland bazali na libateli ya ntina ya mosala. Masɛngami ya ndingisa mpe makoki ya mosala nyonso mibale esengeli kotalelama ntango mikakatano ebimi.",
    "plainLaw": "Batelá makomi, luká toli ya kotyela motema mpe kondima te kosalelama na ndenge ya kobuka mibeko mpo ozali mopaya.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "records": {
        "label": "Bombá baliste ya bangonga mpe mikanda ya lifuti, sɛngá bobongisi mpe kutaná na WRC to mopesi-toli oyo ayebi mosala.",
        "feedback": "Bilembeteli mpe toli na ntango esalisaka kobatela makoki ya mitindo nyonso mibale.",
        "consequence": "Motungisi ekoki kotalelama kozanga kosala lokola masɛngami ya ndingisa ezali na ntina te."
      },
      "accept": {
        "label": "Ndimá yango mpo bato ya ndingisa bazali na makoki ya mosala moke koleka.",
        "feedback": "Ezalela ya kofanda elongolaka libateli ya ntina na mosala te.",
        "consequence": "Kofutama moke to mibeko ya mosala oyo ezali na bokengi te ekoki kokoba kozanga moto atɛmɛla."
      },
      "disappear": {
        "label": "Tiká mosala mbala moko mpe bandá mosusu kozanga kotala masɛngami ya ndingisa.",
        "feedback": "Kobongola mosala ekoki kosɛnga nzela ya bakonzi to ndingisa ya sika.",
        "consequence": "Mokakatano na mosala ekoki mpe kokóma mokakatano ya kofanda."
      }
    }
  },
  "general:Plan": {
    "eyebrow": "Liboso ya kofuta moto",
    "title": "Talá mosala ya solo, kaka maloba ya kotɛka te",
    "scene": "Moto oyo alukelaka bato mosala alaki ete kontra nyonso ya Ireland oyo etyami sinyatire elaki ndingisa, mpe asɛngi mbongo na mabɔkɔ.",
    "question": "Ekateli nini ya liboso ezali malamu koleka?",
    "law": "General Employment Permit etali lolenge ya mosala, lifuti, patrɔ mpe masɛngami mosusu ya sikoyo. Misala mosusu epesamaka ndingisa te mpe Labour Market Needs Test ekoki kosɛngama.",
    "plainLaw": "Talá soki patrɔ mpe mikumba ya solo ezali ya solo, na nsima talá mibeko ya ndingisa ya sikoyo liboso ya kofuta to kosala mobembo.",
    "sourceLabel": "General Employment Permit",
    "choices": {
      "check": {
        "label": "Talá patrɔ, mikumba, lifuti mpe soki mosala ekokisi masɛngami ya ndingisa na maziba ya bakonzi.",
        "feedback": "Ata likabo ya solo esengeli naino kokokisa masɛngami ya mibeko.",
        "consequence": "Makama ya bokosi mpe mosala oyo ekokisi te emonani liboso ya kopesa mbongo to kobongisa mobembo."
      },
      "cash": {
        "label": "Futá mbongo na mabɔkɔ mpe tiká moto ya kolukela mosala abomba passeport.",
        "feedback": "Kokanga passeport mpe kotya mbamba mpo na lifuti oyo ekoki kolandelama te ezali bilembo ya likebisi.",
        "consequence": "Mosali akómi na likama mingi ya bokosi mpe kozala na bokonzi ya moto mosusu."
      },
      "promise": {
        "label": "Tyelá elaka ya moto ya kolukela mosala motema na esika ya kotala lolenge ya mosala.",
        "feedback": "Masɛngami ya bakonzi, elaka te, nde ekataka soki ndingisa ekoki kopesama.",
        "consequence": "Nzela oyo ebongisami ekoki kokwea nsima ya kobimisa mbongo mingi."
      }
    }
  },
  "general:Prepare": {
    "eyebrow": "Molɔngɔ oyo ebongi",
    "title": "Ndingisa esengeli koya liboso ya bokende",
    "scene": "Patrɔ azali na mposa ya basali sikoyo mpe asɛngi akɔta lokola turiste wana mikanda ezali kosalema.",
    "question": "Molɔngɔ nini ezali ya kotyela motema?",
    "law": "Mobembo ya liboso ya ndingisa ya mosala esɛngaka mingimingi ndingisa liboso mosala ebanda, na nsima visa ya kofanda ntango molai soki esengeli mpe bokomisi nsima ya kokóma.",
    "plainLaw": "Salelá te ezalela ya mopaya ya botali lokola nzela mokuse ya kokɔta na mosala ya momeseno.",
    "sourceLabel": "Ndingisa ya mosala",
    "choices": {
      "order": {
        "label": "Ndingisa ya mosala liboso, visa soki esengeli, botali na ndelo, na nsima bokomisi nsima ya kokóma.",
        "feedback": "Yango ebatelaka mobembo na boyokani na nzela oyo ebongisami.",
        "consequence": "Mosali akómi na moboko ya mibeko oyo akoki kolimbola mpe oyo ezali na mikanda."
      },
      "tourist": {
        "label": "Kɔtá lokola turiste mpe bandá na tulu ya mosala ya liboso.",
        "feedback": "Ezalela ya mopaya ya botali ezali ndingisa ya mosala ya momeseno te.",
        "consequence": "Mosali mpe patrɔ nyonso mibale bakoki kokutana na mbano ya makasi."
      },
      "pps": {
        "label": "Sɛngá nimero ya PPS mpe talelá yango lokola ndingisa ya mosala.",
        "feedback": "Nimero ya PPS epesaka ndingisa ya kofanda to ya mosala te.",
        "consequence": "Likambo ya ntina ya ndingisa etikali kosila te."
      }
    }
  },
  "general:Travel": {
    "eyebrow": "Mokolo ya bokende",
    "title": "Memá bilembeteli na yo moko",
    "scene": "Moto ya kolukela mosala alobi ete mikanda nyonso ebombami na biro ya kompanyi mpe moto ya mobembo azali na mposa kaka ya fɔtɔ ya écran ya telefone.",
    "question": "Moto ya mobembo asengeli kosala nini?",
    "law": "Moto ya mobembo akoki kosɛngama amonisa ntina mpe masɛngami ya mobembo na kompanyi ya transport mpe na botali ya ndelo ya Ireland.",
    "plainLaw": "Batelá na bokengi nzela ya kozwa passeport, bandimama, kontra mpe makambo ya adrɛsi ya liboso.",
    "sourceLabel": "Koya kosala na Ireland",
    "choices": {
      "copies": {
        "label": "Memá mikanda ya ebandeli oyo esengeli mpo na mobembo elongo na bakopi ya bokengi mpe makambo ya patrɔ.",
        "feedback": "Moto ya mobembo asengeli kokoka kolimbola mobembo na ye moko.",
        "consequence": "Kozanga réseau ya telefone to moto ya kolukela mosala elongolaka bilembeteli nyonso te."
      },
      "company": {
        "label": "Salá mobembo kozanga mikanda mpo kompanyi ezali na yango.",
        "feedback": "Tikisá te bokonzi na mikanda ya ntina ya bomoto mpe ndingisa.",
        "consequence": "Moto ya mobembo akoki kozanga makoki ya komonisa ntina ya mobembo."
      },
      "different": {
        "label": "Pesá ntina mosusu ya mobembo oyo ekeseni na oyo ezali na bosɛngi.",
        "feedback": "Makambo esengeli kozala ya solo mpe koyokana.",
        "consequence": "Maloba oyo eyokani te ekoki kobebisa mobembo na ndelo."
      }
    }
  },
  "general:Arrive": {
    "eyebrow": "Bapɔsɔ ya liboso",
    "title": "Kesenisá bamposa ya noki na ndingisa ya mibeko",
    "scene": "Banki, nkolo ndako mpe patrɔ mokomoko asɛngi mikanda ekeseni wana rendez-vous ya bokomisi ezali kozela.",
    "question": "Moto asengeli kosala nini?",
    "law": "IRP ekomaka ndingisa ya kofanda. Baebongiseli mosusu, kati na yango mpako, banki mpe ndako, ezali na masɛngami na yango moko mpe ezwaka esika na yango te.",
    "plainLaw": "Salelá baliste ya bakonzi, batelá bilembeteli ya rendez-vous mpe tuná mosala mokomoko nini esɛngi mpenza.",
    "sourceLabel": "Kokomisa ndingisa ya kofanda",
    "choices": {
      "organise": {
        "label": "Batelá dosye ya mikanda, landá malako ya bokomisi mpe sɛngá mosala mokomoko liste na yango.",
        "feedback": "Yango ekitisaka mobulungano kati na baebongiseli ekeseni.",
        "consequence": "Koumela etikali mpasi, kasi moto akoki komonisa oyo esalemi."
      },
      "one": {
        "label": "Kanisá ete mokanda moko esengeli kosala mpo na misala nyonso.",
        "feedback": "Baebongiseli ya Ireland etunaka mituna ekeseni mpo na bantina ekeseni.",
        "consequence": "Bosɛngi ekoki kotɛlɛma mpo bilembeteli oyo ebongi te ezali kopesama mbala na mbala."
      },
      "fake": {
        "label": "Bongolá mokanda ya adrɛsi mpo makambo ekende noki.",
        "feedback": "Kopesá ata moke te bilembeteli ya lokuta to oyo ebongolami.",
        "consequence": "Nzela mokuse ya ntango moke ebimisaka makama makasi ya mibeko mpe ya kotyelama motema."
      }
    }
  },
  "general:Build a life": {
    "eyebrow": "Mosala ya bosembo",
    "title": "Moná minyoko noki",
    "scene": "Mokanda ya lifuti ezali na mbongo oyo bakati kozanga ndimbola mpe patrɔ asɛngi abomba passeport mpo na “kobatela yango malamu”.",
    "question": "Eyano nini ezali makasi koleka?",
    "law": "Basali basengeli kozwa lifuti ya mobeko, mibeko ya mosala mpe mikanda ya lifuti. Kobatela makomi mpe kosalela WRC to lisungi ya bato ya mayele mpo na bapaya ekoki kosalisa kosilisa minyoko.",
    "plainLaw": "Batelá passeport na yo, bombá bilembeteli mpe luká toli ya sekele.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "evidence": {
        "label": "Batelá passeport, bombá makomi, sɛngá ndimbola mpe kutaná na WRC to mopesi-toli.",
        "feedback": "Makomi ya polele esalisaka kososola mpe kotɛmɛla mokakatano.",
        "consequence": "Mosali akoki koluka lisungi kozanga kondimela kaka maloba ya patrɔ."
      },
      "hand": {
        "label": "Pesá passeport mpo patrɔ nde abongisaki ndingisa.",
        "feedback": "Mosali asengeli kobatela bokonzi na mikanda na ye ya bomoto.",
        "consequence": "Patrɔ azwi nzela ya nguya ya kokamba moto."
      },
      "nothing": {
        "label": "Tyá likebi te na mbongo oyo bakati mpo basali bapaya bakoki kosala reklamasyo te.",
        "feedback": "Basali bapaya bazali na makoki ya mosala oyo mibeko ekoki kosala ete bátosa.",
        "consequence": "Kosalelama na ndenge ya kobuka mibeko ekoki kokoba to kokóma mabe koleka."
      }
    }
  },
  "protection:Plan": {
    "eyebrow": "Mposa ya bokengi",
    "title": "Libateli etali likama ya moto ye moko",
    "scene": "Kozonga emonani na bokengi te. Baninga bazali kopesa toli oyo eyokani te mpe moko asɛngi akela lisolo ya makasi koleka.",
    "question": "Likanisi nini esengeli kokamba litambe oyo elandi?",
    "law": "Libateli ya mokili mobimba ezali mpo na bato oyo babangaka monyoko to bazali na likama ya solo ya mabe makasi. Bosɛngi mokomoko etalelamaka na makambo na yango moko na nse ya mibeko oyo ezali kosala ntango esalemi.",
    "plainLaw": "Lobá lisolo na yo moko ya solo mpe zwá makambo ya mibeko na sekele noki ndenge okoki.",
    "sourceLabel": "Irish Refugee Council: bosɛngi nsima ya 12 sanza ya motoba 2026",
    "choices": {
      "truth": {
        "label": "Batelá bilembeteli ya yo moko soki ezali na bokengi, lobá solo mpe luká makambo ya mibeko ya kotyela motema.",
        "feedback": "Bosɛngi ya libateli esengeli kozala lisolo ya moto ye moko.",
        "consequence": "Likambo ebandi na makambo ya solo mpe lisungi oyo ebongi."
      },
      "copy": {
        "label": "Kopisá lisolo oyo elongaki mpo na moto mosusu.",
        "feedback": "Makambo ya kokela to oyo ozwi na moto mosusu ekoki kobebisa makasi kondimama na yo.",
        "consequence": "Botali ekoki kotya likebi na maloba oyo eyokani te na esika ya bobangi ya solo."
      },
      "work": {
        "label": "Monisá libateli lokola nzela ya noki ya kozwa mosala.",
        "feedback": "Libateli mpe kokende na mboka mosusu mpo na mosala ezali na bantina ekeseni.",
        "consequence": "Moboko ya solo ya mibeko ya mobembo ekómi polele te."
      }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Bokengi mpe bilembeteli",
    "title": "Mikanda esalisaka, kasi bokengi liboso",
    "scene": "Bilembeteli mosusu ezali na telefone oyo ebebi. Ezingaki likoki ya komema mikanda mosusu.",
    "question": "Lolenge nini ezali ya mokumba?",
    "law": "Basɛngi basengeli kopesa makambo oyo ezali, kosala elongo na nzela ya botali mpe kolimbola na solo bilembeteli oyo ezangi. Esengeli koyebisa bamposa ya kobongola maloba, kozala na likama mpe kokoka kozwa misala.",
    "plainLaw": "Kokelá te mikanda oyo ezangi. Limbolá oyo ezali, oyo ezangi mpe mpo na nini.",
    "sourceLabel": "International Protection Office",
    "choices": {
      "explain": {
        "label": "Batelá oyo ekoki kobatelama na bokengi, limbolá oyo ezangi mpe sɛngá mobongoli-maloba to lisungi ya kokoka kozwa misala ntango esengeli.",
        "feedback": "Botali esengeli koyoka lisolo ya moto ye moko elongo na lisungi oyo ebongi.",
        "consequence": "Bilembeteli oyo ezangi elobelami polele na esika ya kobombama."
      },
      "forge": {
        "label": "Kelá mikanda ya kozwa esika oyo emonani lokola ya bakonzi.",
        "feedback": "Mikanda ya lokuta ekoki kosala mabe makasi na bosɛngi.",
        "consequence": "Likebi elongwe na makambo ya solo mpe ekende na bokosi."
      },
      "silence": {
        "label": "Kolobá ata moke te mpasi ya makasi ya makanisi, bomoto to bokono oyo epekisaka makambo ata soki ezali na ntina.",
        "feedback": "Makambo ya sekele ekoki kolobelama na sekele elongo na lisungi ya bato oyo bayebi mosala.",
        "consequence": "Bamposa ya ntina ya libateli to ya ndenge ya kosala ekoki komonana te."
      }
    }
  },
  "protection:Travel": {
    "eyebrow": "Kokóma na Ireland",
    "title": "Lobá polele ete libateli esengeli",
    "scene": "Na esika ya kokɔta na Ireland, bobangi mpe kolemba esali ete ezala mpasi kolimbola mpo na nini kozonga ezali na bokengi te.",
    "question": "Moto asengeli koyebisa nini?",
    "law": "Moto oyo azali koluka asile asengeli koloba polele ete alingi libateli ya mokili mobimba mpe kosala elongo na bokomisi mpe botali ya ebandeli oyo etali ye.",
    "plainLaw": "Salelá maloba ya polele: “Nalingi kosɛnga libateli ya mokili mobimba. Nazali kobanga kozonga.”",
    "sourceLabel": "International Protection Office",
    "choices": {
      "ask": {
        "label": "Sɛngá libateli ya mokili mobimba polele mpe sɛngá kobongola maloba soki esengeli.",
        "feedback": "Koloba polele esalisaka kokamba moto na nzela oyo ebongi.",
        "consequence": "Bobangi ya kozonga oyo elobami ekoki kokomama mpe kotalelama."
      },
      "tourist": {
        "label": "Bombá bobangi mpe lobá ete boyei ezali kaka mpo na botali.",
        "feedback": "Yango emonisaka mposa ya libateli te.",
        "consequence": "Moto akoki kokɔta te na nzela oyo ebongisami mpo na kotalela likama."
      },
      "script": {
        "label": "Zongelá lisolo oyo okangi na motó kasi ezali solo te.",
        "feedback": "Salelá maloba ya solo ya moto ye moko.",
        "consequence": "Maloba oyo eyokani te ekoki kokómisa kosolola oyo ezali déjà mpasi mpasi koleka."
      }
    }
  },
  "protection:Arrive": {
    "eyebrow": "Ebongiseli ya bosɛngi mpe boyambi",
    "title": "IPO mpe IPAS ezali na mikumba ekeseni",
    "scene": "Mosɛngi azali na mposa ya makambo ya mibeko, ndako mpe lisungi mpo na esika ya mwana na kelasi.",
    "question": "Mwango nini eyebi mikumba ekeseni?",
    "law": "IPO etalelaka bosɛngi ya libateli. IPAS ezali na mokumba ya ndako ya boyambi mpe lisungi oyo etali yango. Legal Aid mpe bibongiseli ya lipanda epesaka lisungi ekeseni.",
    "plainLaw": "Ekateli ya likambo, ndako mpe toli ya mibeko eutaka na misala ekeseni.",
    "sourceLabel": "Ndako mpe lisungi ya IPAS",
    "choices": {
      "roles": {
        "label": "Sololá na IPO mpo na likambo, na IPAS mpo na bamposa ya boyambi mpe na avoka mpo na toli ya mibeko.",
        "feedback": "Kokesenisa mikumba esalisaka kosɛnga lisungi na ebongiseli oyo ebongi.",
        "consequence": "Bamposa ya noki mpe bosɛngi ya mibeko ekoki kokende liboso na banzela oyo ebongi."
      },
      "manager": {
        "label": "Sɛngá mokambi ya ndako andima ezalela ya mokimi-mboka.",
        "feedback": "Basali ya ndako bakataka bosɛngi ya libateli te.",
        "consequence": "Ntango ebungi na kosɛnga ekateli ya mibeko na moto oyo azali na mokumba yango te."
      },
      "address": {
        "label": "Longwá kozanga koyebisa bakonzi to mopesi-toli ya mibeko.",
        "feedback": "Makambo ya kokutana esengeli kotikala ya sika.",
        "consequence": "Ba rendez-vous to bikateli ya ntina ekoki kozangama."
      }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Kozela mpe kozala na kati",
    "title": "Talá makoki ya sikoyo na esika ya kondimela bilobaloba",
    "scene": "Patrɔ apesi likabo ya mosala, wana bafandi mosusu bazali koyokana te na ntango basɛngi bakoki kokɔta na zando ya mosala.",
    "question": "Mosɛngi asengeli kosala nini?",
    "law": "Kokɔta na zando ya mosala etali mobeko, ntango mpe masɛngami oyo etali bosɛngi ya moto mokomoko. Kelasi, kolɔngɔnɔ, bareklamasyo mpe lisungi ya bana ezali na mibeko ekeseni.",
    "plainLaw": "Talá soki okokisi masɛngami ya sikoyo mpe zwá ndingisa oyo esengeli liboso ya kobanda mosala.",
    "sourceLabel": "Irish Refugee Council Information Hub",
    "choices": {
      "current": {
        "label": "Talá mobeko ya sikoyo mpo na bosɛngi oyo mpe bandá kaka nsima ya kozwa ndingisa nyonso oyo esengeli.",
        "feedback": "Yango epekisaka kosalela mobeko ya kala to makambo ya moto mosusu na likambo oyo.",
        "consequence": "Ekateli ya mosala etongami na makambo ya sikoyo ya moto ye moko."
      },
      "rumour": {
        "label": "Bandá mpo mofandi mosusu apesamaki nzela ya kosala.",
        "feedback": "Moto mosusu akoki kosɛnga na nse ya mibeko ekeseni to na ntango mosusu.",
        "consequence": "Mosɛngi akoki kosala kozanga ndingisa oyo likambo na ye moko esɛngi."
      },
      "never": {
        "label": "Kanisá ete basɛngi bakoki ata mokolo moko te kotánga, kosala to koyebisa mitungisi.",
        "feedback": "Basɛngi bazali na makoki mpe banzela ya lisungi, atako masɛngami ezali.",
        "consequence": "Mabaku mpe libateli ekoki kobungisama kozanga ntina."
      }
    }
  },
  "study:Plan": {
    "eyebrow": "Liboso ya kondima esika",
    "title": "Talá kelasi mpe mbongo nyonso",
    "scene": "Likabo ya université esepelisi, kasi budget ekoki kaka mpo na mbongo ya kelasi mpe pɔsɔ motoba ya kofutela ndako.",
    "question": "Nini esengeli kotalelama liboso ya kondima?",
    "law": "Ndingisa ya kotánga etali kelasi, ebongiseli oyo epesaka yango, mbongo, asiranse mpe masɛngami mosusu ya sikoyo ya kokɔta mpe kofanda.",
    "plainLaw": "Ndimisá ete programɛ ekokisi masɛngami mpe bongisá mwango oyo ekoki kosalema mpo na mbongo ya kelasi, ndako, asiranse mpe bomoi ya mokolo na mokolo.",
    "sourceLabel": "Koya kotánga na Ireland",
    "choices": {
      "budget": {
        "label": "Talá kelasi mpe ebongiseli, na nsima tángá mbongo ya kelasi, ndako, asiranse mpe bomoi.",
        "feedback": "Kondimama na kelasi ezali kaka eteni moko ya mobembo ya boyekoli oyo ekoki kosalema.",
        "consequence": "Moyekoli akoki koyeba soki mwango ekoki kosalema na mbongo mpe na mibeko."
      },
      "job": {
        "label": "Kanisá ete mosala ya ndambo ya ntango ekofuta mbongo nyonso mbala moko.",
        "feedback": "Makoki ya mosala ezali na ndelo ya ndingisa mpe mosala elakami te.",
        "consequence": "Moyekoli akoki kokóma kozanga biloko oyo ekoki mpo na bamposa ya ntina."
      },
      "deposit": {
        "label": "Futá ntoma oyo atalelami te liboso ya kotala programɛ.",
        "feedback": "Talá liboso ebongiseli, programɛ mpe nzela ya kofuta.",
        "consequence": "Mbongo ekoki kobunga na kelasi oyo esungaka te ndingisa oyo elukami."
      }
    }
  },
  "study:Prepare": {
    "eyebrow": "Ndingisa liboso ya bokende",
    "title": "Kondimama na kelasi ezali visa te",
    "scene": "Email ya kondimama ekómi mpe moyekoli akanisi ete ezali mokanda kaka moko oyo asengeli na yango mpo na mobembo.",
    "question": "Likambo nini ya kosala na nsima ezali malamu?",
    "law": "Bayekoli oyo basengeli kozwa visa basengeli mingimingi visa ya boyekoli ya ntango molai oyo ebongi. Bayekoli nyonso basengeli kokoka komonisa ntina mpe masɛngami ya boyekoli.",
    "plainLaw": "Landá liste ya bakonzi ya makambo ya kofanda mpo na moyekoli; likabo ya université ezwaka esika ya ndingisa ya mobembo te.",
    "sourceLabel": "Koya kotánga na Ireland",
    "choices": {
      "visa": {
        "label": "Landá nzela ya bakonzi ya visa soki esengeli mpe bongisá bilembeteli ya mbongo, asiranse mpe kelasi.",
        "feedback": "Yango ekangisaka likabo ya kondimama na nzela oyo ebongi ya kokɔta mpe kofanda.",
        "consequence": "Mobembo esungami na mwango ya boyekoli oyo ezali mobimba mpe eyokani."
      },
      "offer": {
        "label": "Salelá email ya kondimama lokola visa ya mbala moko.",
        "feedback": "Kondimama na kelasi mpe ndingisa ya kofanda ekeseni.",
        "consequence": "Mobembo ekoki kokwea liboso kelasi ebanda."
      },
      "tourist": {
        "label": "Kɔtá lokola turiste mpe bongolá na kimya nsima ya ebandeli ya mateya.",
        "feedback": "Salelá nzela ya boyekoli oyo ebongi liboso ya mobembo.",
        "consequence": "Moyekoli akoki kozanga makoki ya kokomisa ndingisa oyo alingaki."
      }
    }
  },
  "study:Travel": {
    "eyebrow": "Na botali ya ndelo",
    "title": "Mwango ya boyekoli esengeli kozala na ntina",
    "scene": "Mokonzi atuni esika moyekoli akofanda, ndenge kelasi ekofutama mpe ntango ekobanda.",
    "question": "Moyekoli asengeli koyanola ndenge nini?",
    "law": "Kokɔta etalelamaka na ndelo. Mikanda mpe biyano esengeli komonisa boyekoli ya solo oyo ebongisami.",
    "plainLaw": "Memá bilembeteli ya solo ya kelasi, mbongo, asiranse mpe ndako ya liboso.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "show": {
        "label": "Yanólá na solo mpe monisá bilembeteli ya kelasi, kofuta, asiranse, mbongo mpe ndako.",
        "feedback": "Mikanda esungaka ntina ya boyekoli oyo elobami.",
        "consequence": "Mokonzi akoki kososola mwango kozanga kondimela makambo ya kokanisa kaka."
      },
      "work": {
        "label": "Lobá ete ntina ya liboso ezali mosala ya ntango mobimba.",
        "feedback": "Yango eyokani te na bosɛngi ya boyekoli.",
        "consequence": "Ntina ya mobembo emonani koyokana te."
      },
      "guess": {
        "label": "Pesá adrɛsi ya université mpe badati ya kelasi na kokanisa kaka.",
        "feedback": "Bayekoli basengeli koyeba makambo ya ebandeli ya programɛ na bango moko.",
        "consequence": "Mwango ya boyekoli ekoki komonana ya solo te to oyo ebongisami te."
      }
    }
  },
  "study:Arrive": {
    "eyebrow": "Trimɛstrɛ ya liboso",
    "title": "Komisá nkombo mpe kobá na kelasi",
    "scene": "Mikakatano ya ndako ezali kotinda moyekoli azongisa bokomisi nsima mpe azanga mateya.",
    "question": "Eyano nini ebatelaka mobembo ya boyekoli malamu koleka?",
    "law": "Bayekoli oyo bazali bana-mboka ya EEA te, oyo bakokisi masɛngami mpe bafandi koleka mikolo 90, basengeli kokomisa ndingisa na bango mpe kokoba kotosa masɛngami ya kozala na kelasi mpe ya programɛ oyo ekangami na yango.",
    "plainLaw": "Komisá nkombo, kobá komipesa na kelasi mpe yebisá université noki ntango mikakatano makasi ezali kobebisa kozala na mateya.",
    "sourceLabel": "Kokomisa ndingisa ya kofanda",
    "choices": {
      "support": {
        "label": "Bongisá bokomisi, kendá na kelasi mpe kutaná noki na lisungi ya bayekoli mpo na ndako to bolamu.",
        "feedback": "Mikumba ya kofanda mpe ya kelasi ebatelamaka pɛtɛɛ koleka na lisungi ya ebandeli.",
        "consequence": "Mikakatano ekomami liboso ekóma kozanga na kelasi kozanga ndimbola to kobungisa ezalela ya kofanda."
      },
      "skip": {
        "label": "Tiká kokende na mateya kozanga koyebisa université.",
        "feedback": "Komipesa na kelasi ezali na ntina mpo na ndingisa.",
        "consequence": "Mbano ya kelasi mpe ya kofanda ekoki kobakisa mokakatano ya ndako."
      },
      "pps": {
        "label": "Salelá nimero ya PPS na esika ya bokomisi.",
        "feedback": "Nimero ya PPS ezali ndingisa ya boyekoli te.",
        "consequence": "Likambo ya kokomisa kofanda oyo esengeli etikali kosila te."
      }
    }
  },
  "study:Build a life": {
    "eyebrow": "Mosala, lisanga mpe makambo oyo elandi",
    "title": "Mosala ya moyekoli ezali na bandelo",
    "scene": "Patrɔ apesi bangonga ya ntango mobimba na ntango ya kelasi mpe alobi ete moto moko te atalaka masɛngami ya moyekoli.",
    "question": "Moyekoli asengeli kosala nini?",
    "law": "Lotomo ya moyekoli ya kosala etali Stamp mpe masɛngami ya sikoyo. Koleka masɛngami yango ekoki kobebisa ezalela ya kofanda mpe boyekoli.",
    "plainLaw": "Talá bangonga mpe badati oyo ndingisa ya moyekoli ya sikoyo epesi nzela liboso ya kondima liste ya mosala.",
    "sourceLabel": "Ba Stamp ya ndingisa ya kofanda",
    "choices": {
      "limits": {
        "label": "Talá masɛngami ya sikoyo ya Stamp 2 mpe ndimá kaka mosala oyo eyokani na yango.",
        "feedback": "Masɛngami ya ndingisa ezali na ntina ata ntango patrɔ apesi bangonga mingi koleka.",
        "consequence": "Mosala esungaka moyekoli na esika ya kobebisa kelasi mpe ezalela ya kofanda."
      },
      "full": {
        "label": "Zwá bangonga kozanga ndelo mpo patrɔ andimaki yango.",
        "feedback": "Patrɔ akoki kokólisa ndingisa ya kofanda te.",
        "consequence": "Moyekoli akoki kobuka masɛngami ya kofanda."
      },
      "cash": {
        "label": "Salá mosala oyo ekomami te mpo bangonga emonana te.",
        "feedback": "Mosala oyo eyebisami te ebimisaka makama ya mosala, mpako mpe kofanda.",
        "consequence": "Moyekoli abungisi libateli ya ntina na mosala mpe abimisi likama mosusu."
      }
    }
  },
  "family:Plan": {
    "eyebrow": "Liboso ya bokende",
    "title": "Moto oyo ayambi yo nde akataka nzela",
    "scene": "Molongani na Ireland akanisi ete libala epesaka mbala moko makoki ndenge moko na kozala mwana-mboka ya Ireland.",
    "question": "Nini esengeli koyebana liboso?",
    "law": "Banzela ya libota ekeseni na kolanda soki moto oyo ayambi yo azali mwana-mboka ya Ireland, UK, EEA to Switzerland, ya libándá ya EEA, to azali na libateli ya mokili mobimba.",
    "plainLaw": "Yebá ezalela ya sikisiki ya moto oyo ayambi yo mpe lolenge ya boyokani liboso ya kopona formulaire to visa.",
    "sourceLabel": "Koya kosangana na libota na Ireland",
    "choices": {
      "sponsor": {
        "label": "Talá ezalela ya moto oyo ayambi yo, lolenge ya boyokani mpe mibeko ya sikoyo ya mbongo mpe mikanda.",
        "feedback": "Yango emonisaka nzela ya libota oyo ebongi.",
        "consequence": "Bosɛngi ebongisami mpo na moto oyo ayambi yo mpe boyokani ya solosolo."
      },
      "marriage": {
        "label": "Kanisá ete mokanda ya libala epesaka mbala moko makoki ya kokɔta mpe kosala.",
        "feedback": "Bilembeteli ya boyokani ezali na ntina, kasi nzela ya kokɔta mpe kofanda esengeli naino kolandama.",
        "consequence": "Mobembo to mosala ekoki komekama kozanga ndingisa oyo esengeli."
      },
      "form": {
        "label": "Salelá formulaire ya libota ya liboso oyo omoni na internet, ata soki ezalela ya moto oyo ayambi yo ezali nini.",
        "feedback": "Bato oyo bayambaka mpe bato ya libota ya ndenge mosusu balandaka banzela ekeseni.",
        "consequence": "Bosɛngi oyo ebongi te ekoki kobimisa koumela to koboyama oyo ekokaki koboyama."
      }
    }
  },
  "family:Prepare": {
    "eyebrow": "Bilembeteli mpe ndingisa",
    "title": "Monisá mwango ya libota ya solo",
    "scene": "Babalani bazali na bansango mpe botali ya bambula, kasi bilembeteli na bango ya ndako mpe mbongo ebongisami te.",
    "question": "Bomibongisi nini ezali malamu koleka?",
    "law": "Bosɛngi ya libota ekoki kotalela boyokani oyo ekokisi masɛngami, soki moto oyo ayambi akokisi masɛngami, mbongo, ndako, kondimela moto mosusu mpe masɛngami mosusu ya nzela yango.",
    "plainLaw": "Salelá liste ya bakonzi mpe bongisá bilembeteli ya solo ya boyokani mpe mwango ya bomoi.",
    "sourceLabel": "Malako ya kosangana na libota",
    "choices": {
      "file": {
        "label": "Tongá dosye ya bilembeteli ya polele na kosalela liste mpe limbolá oyo ezangi na solo.",
        "feedback": "Bilembeteli ya solo oyo ebongisami esalisaka kotalela bosɛngi.",
        "consequence": "Lisolo ya solo ya libota mpe mwango na yango emonani kozanga biloko ya kokela."
      },
      "fake": {
        "label": "Kelá mikanda mpo na bantango oyo bilembeteli ezali moke.",
        "feedback": "Bilembeteli ya lokuta ekoki kobebisa bosɛngi makasi.",
        "consequence": "Kondimama ya bosɛngi mobimba ekoki kobebisama."
      },
      "ignore": {
        "label": "Talá te masɛngami ya mbongo to ndako mpo boyokani ezali ya solo.",
        "feedback": "Boyokani ya solo elongolaka masɛngami nyonso ya nzela te.",
        "consequence": "Kozanga bilembeteli oyo ekokaki kobongisama ekoki koumisa to kokweisa bosɛngi."
      }
    }
  },
  "family:Travel": {
    "eyebrow": "Kokóma lokola moto ya libota",
    "title": "Lobá ntina ya solo na ndelo",
    "scene": "Moto ya mobembo azali na visa to ndingisa ya liboso oyo ebongi mpe abongisi kofanda na moto oyo ayambi ye.",
    "question": "Nini esengeli kosalema na kokɔta?",
    "law": "Soki visa to ndingisa ya liboso esɛngami, esungaka mobembo mpo na ntina ya libota oyo elobami. Kokɔta mpe ndingisa ya ebandeli etalelamaka na ndelo.",
    "plainLaw": "Limbolá ntina ya libota na bosembo mpe memá ndingisa mpe makambo ya moto oyo ayambi yo.",
    "sourceLabel": "Koya kosangana na libota",
    "choices": {
      "family": {
        "label": "Lobá ntina ya libota mpe monisá ndingisa, boyokani mpe makambo ya adrɛsi ya moto oyo ayambi yo.",
        "feedback": "Ndimbola eyokani na bosɛngi mpe mikanda.",
        "consequence": "Mokonzi akoki kotalela kokɔta na moboko ya libota oyo ebongisami."
      },
      "holiday": {
        "label": "Lobá ete ezali kaka konje ya mokuse atako ozali na mwango ya kotikala.",
        "feedback": "Ntina oyo elobami esengeli kozala ya solo.",
        "consequence": "Maloba eyokani te na bosɛngi ya libota mpe kofanda oyo ebongisami."
      },
      "none": {
        "label": "Komemá te makambo ya kokutana na moto oyo ayambi yo to ya ndako.",
        "feedback": "Bilembeteli ya ebandeli ya libota mpe mwango ya kokóma esengeli kozala na esika oyo okoki kozwa.",
        "consequence": "Moto ya mobembo akoki kokutana na mpasi mpo na kolimbola wapi mpe na nani akofanda."
      }
    }
  },
  "family:Arrive": {
    "eyebrow": "Bokomisi mpe masɛngami",
    "title": "Kokanisá kaka te nini Stamp epesi nzela",
    "scene": "Patrɔ ya mosala ya mosika alingi moto ya libota azongela mosala mbala moko uta na adrɛsi ya Ireland.",
    "question": "Moto asengeli kosala nini liboso ya kosala mosala?",
    "law": "Lotomo ya kosala etali ndingisa ya kofanda oyo epesami. Ndingisa ya libota ekoki kokesana na kolanda moto oyo ayambi mpe nzela.",
    "plainLaw": "Komisá ndingisa soki esɛngami mpe ndimisa masɛngami na yango ya mosala liboso ya kobanda to kozongela mosala na Ireland.",
    "sourceLabel": "Ba Stamp ya ndingisa ya kofanda",
    "choices": {
      "stamp": {
        "label": "Silisá bokomisi oyo esɛngami mpe talá mpenza nini ndingisa epesi nzela.",
        "feedback": "Masɛngami ya Stamp to IRP eyanolaka motuna ya mosala.",
        "consequence": "Mosala ebandi kaka ntango ndingisa ya Ireland esungi yango."
      },
      "spouse": {
        "label": "Kanisá ete molongani nyonso azali mbala moko na makoki ya mosala kozanga ndelo.",
        "feedback": "Ndingisa nyonso ya libota ezali ndenge moko te.",
        "consequence": "Mosala ekoki kobanda liboso lisɛngami oyo esengeli ekokisama."
      },
      "remote": {
        "label": "Kanisá ete mosala ya mosika mpo na mboka mopaya etali mibeko ya kofanda ya Ireland te.",
        "feedback": "Kosala mosala ntango ozali na nzoto na Ireland ekoki naino kotalela mibeko ya Ireland ya kofanda, mpako mpe mosala.",
        "consequence": "Ebongiseli ya mosala ya mosika ebimisi makambo ya mibeko mpe mpako oyo ekanisamaki te."
      }
    }
  },
  "family:Build a life": {
    "eyebrow": "Lipanda mpe komona ete ozali na esika na yo",
    "title": "Tongá lisungi oyo eleki kaka moto oyo ayambi yo",
    "scene": "Bokende esali ete moto amona ete azali ye moko, mpe moto ya libota azali kondimela moto oyo ayambi ye mpo na mokanda nyonso, rendez-vous nyonso mpe boyokani nyonso na bato.",
    "question": "Litambe nini ebakisi bokengi?",
    "law": "Bapaya bakoki koluka makambo ya lipanda na ntina ya kofanda, mosala, kolɔngɔnɔ, bokengi mpe misala ya esika. Lisungi ya mbalakaka mpe ya bato ya mayele etikalaka ntango boyokani ekómi na bokengi te.",
    "plainLaw": "Batelá bakopi ya mikanda na yo moko mpe yekolá ndenge ya kokutana na misala ya lipanda.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "network": {
        "label": "Batelá bakopi ya mikanda na yo mpe yokaná na toli ya lipanda, lisanga mpe misala ya kolɔngɔnɔ.",
        "feedback": "Lisanga ya lisungi ya monene ekólisaka lipanda na bomoi mpe bokengi.",
        "consequence": "Moto akoki kozwa bikateli na boyebi kozanga kondimela boyokani moko mpo na makambo nyonso."
      },
      "all": {
        "label": "Tiká moto oyo ayambi yo abomba mokanda nyonso mpe mot de passe nyonso.",
        "feedback": "Mikóló basengeli kobatela nzela ya bokengi ya kozwa makambo na bango moko ya bomoto mpe ya konti.",
        "consequence": "Ekateli nyonso ya bomoi ekómi kokangama na moto oyo ayambi yo."
      },
      "silent": {
        "label": "Boyá lisungi mpo kotuna ekoki kobebisa ezalela ya kofanda.",
        "feedback": "Makambo ya kotyela motema mpe ya sekele esalisaka bato básosola maponi na bango.",
        "consequence": "Mikakatano ekoki kokóma makasi koleka liboso lisungi elukama."
      }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Bokengi, bokono oyo epekisaka makambo mpe kobɔkɔla mwana",
    "title": "Libateli mpe bokoki ya kosalela bisika ezali mituna ekeseni",
    "scene": "Bayebisi Adama ete kosalela kiti na bapinɛ ekolaka ye libateli to ekopekisa ye kosɛnga elongo na mwana na ye ya mobali.",
    "question": "Nini esengeli kokamba ekateli na ye?",
    "law": "Bosɛngi ya libateli etalelamaka na likama ya moto ye moko ya monyoko to mabe makasi. Bokono oyo epekisaka kosala makambo mpe kobɔkɔla mwana yo moko ekoki kobimisa bamposa ya sipesiale ya boyambi to ya ndenge ya kosala, kasi yango moko ekataka bosɛngi te.",
    "plainLaw": "Limbolá bobangi ya solo ya kozonga mpe yebisá pembeni lisungi oyo esengeli mpo na kozala na kati ya nzela na bokengi.",
    "sourceLabel": "Irish Refugee Council: bosɛngi nsima ya 12 sanza ya motoba 2026",
    "choices": {
      "separate": {
        "label": "Limbolá likama ya libateli na solo mpe komá liste ekeseni ya bamposa ya kotambola, kolɔngɔnɔ mpe kobɔkɔla mwana.",
        "feedback": "Yango ebatelaka bosɛngi ya mibeko mpe bamposa ya kokoka kozwa misala nyonso mibale na polele.",
        "consequence": "Bato ya kozwa bikateli bazwi lisolo ya libateli wana basali ya boyambi bakoki koyeba lisungi ya bomoi."
      },
      "guarantee": {
        "label": "Kanisá ete bokono oyo epekisaka makambo elakaka mbala moko ezalela ya mokimi-mboka.",
        "feedback": "Kozala na likama mpe emekeli ya mibeko ya libateli ezali ndenge moko te.",
        "consequence": "Bobangi ya moto ye moko ya kozonga ekoki kolimbolama malamu te."
      },
      "hide": {
        "label": "Bombá bokono oyo epekisaka makambo mpo baboti oyo basengeli lisungi bakoki kosɛnga te.",
        "feedback": "Bokono oyo epekisaka makambo elongolaka lotomo ya koluka libateli te.",
        "consequence": "Lisungi ya ntina ya boyambi mpe ya ndenge ya kosala ekoki kozangama."
      }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Botali ya ebandeli mpe kozala na likama",
    "title": "Tángá mposa nyonso, kaka oyo emonani mingi te",
    "scene": "Kiti na bapinɛ emonani polele, kasi mpasi oyo eumelaka, mpasi ya makanisi ya makasi, bankisi mpe kobatela mwana ya mbula motoba emonani te.",
    "question": "Adama asengeli kotalela ndenge nini botali ya kozala na likama?",
    "law": "Na nse ya ebongiseli ya 2026, basɛngi bapesamaka libaku ya botali ya kozala na likama na bolingi na bango. Bokono oyo epekisaka makambo, kobɔkɔla mwana yo moko, bokono makasi mpe makambo ya violence ezali na kati ya bituluku oyo eyebani mpo na koyeba bamposa ya sipesiale ya boyambi.",
    "plainLaw": "Salelá botali mpo na kolimbola bamposa oyo ebombami mpe oyo emonani mpe sɛngá ete makambo ekomama na bosolo.",
    "sourceLabel": "Botali ya kozala na likama ya IPAS",
    "choices": {
      "full": {
        "label": "Limbolá bamposa ya kotambola, mpasi, bankisi, mpasi ya makanisi ya makasi mpe kobɔkɔla mwana, na kosalela mobongoli-maloba soki esengeli.",
        "feedback": "Bamposa oyo esangani ekoki kosɛnga biyano ekeseni ya bomoi.",
        "consequence": "Botali ezali na moboko ya mobimba koleka mpo na ndako mpe kotindama na misala."
      },
      "chair": {
        "label": "Lobá kaka kiti na bapinɛ mpo nyonso mosusu ezali ya sekele.",
        "feedback": "Ye nde aponaka oyo akoloba, kasi bamposa oyo ekomami te ekoki kozala mpasi kosalisa.",
        "consequence": "Mikakatano ya mpasi, bankisi to kobɔkɔla mwana ekoki komonana te tii likama ebimi."
      },
      "refuse": {
        "label": "Boyá mpo kondima botali elɛmbisaka bosɛngi ya libateli.",
        "feedback": "Botali ezali ya bolingi mpe etali bamposa ya lisungi na esika ya kokata ezalela ya libateli.",
        "consequence": "Nzela ya koyeba bamposa ya sipesiale ya boyambi ebungi mpo na ntina ya libunga."
      }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Koleka na ebongiseli ya boyambi",
    "title": "Mbeto oyo bapesi ekoki kaka kozala oyo okoki kosalela te",
    "scene": "Babongisi transport mpo na ndako, kasi Adama ayoki ete shambre na ye ezali na etaje mpe akoki kosalela salle de bain na bokengi te.",
    "question": "Eyano nini esalaka makomi ya polele koleka?",
    "law": "IPAS esalelaka makambo ya kozala na likama mpo na kosalisa bamposa ya sipesiale ya boyambi. Banzela ya kotya makambo ya kolɔngɔnɔ liboso, kotinda na esika mosusu mpo na likambo ya sipesiale mpe botali mosusu ezali, atako esika oyo moto alingi to kokende mbala moko elakami te.",
    "plainLaw": "Komá mokakatano ya sikisiki ya kokoka kosalela esika, pesá bilembeteli ya minganga oyo ezali mpe salelá nzela ya bakonzi ya komema likambo na nivo ya likoló.",
    "sourceLabel": "Ndako mpe botali ya makambo ya kolɔngɔnɔ ya IPAS",
    "choices": {
      "record": {
        "label": "Yebisá mokakatano ya sikisiki mbala moko, batelá bakopi mpe sɛngá botali ya kolɔngɔnɔ to ya makambo ya sipesiale na nzela ya IPAS.",
        "feedback": "Bilembeteli ya sikisiki oyo ekomami eleki bosɛngi ya monene kaka ya kokende na esika mosusu.",
        "consequence": "IPAS ekoki kotalela mokakatano ya solo ya bokengi mpe kokoka kosalela esika na nzela oyo ebongi."
      },
      "leave": {
        "label": "Longwá kozanga koyebisa moto mpe kanisá ete shambre mosusu ekomonana.",
        "feedback": "Kolongwa ekoki kokabola ye na lisungi ya boyambi kozanga kosilisa mokakatano.",
        "consequence": "Adama mpe mwana na ye bakoki kozanga ndako mpe kokóma mpasi ya kokutana na bango."
      },
      "accept": {
        "label": "Salelá shambre oyo ezali na bokengi te mpo bafandi bakoki kotɛmɛla te soki ebongi.",
        "feedback": "Mitungisi ya ndako mpe bamposa ya sipesiale ekoki koyebisama.",
        "consequence": "Kokweya, kozanga kosukola mpe kokóma na mpasi mingi ekómi na likoki mingi."
      }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Bokoki ya kozala na interview",
    "title": "Kozala na kati ekoki kosɛnga bobongisi",
    "scene": "Esika ya interview, kofanda ntango molai mpe mbano ya bankisi ekoki kopekisa Adama kopesa lisolo mobimba.",
    "question": "Asengeli kosala nini liboso ya rendez-vous?",
    "law": "Basɛngi basengeli koya mpe kosala elongo na nzela ya botali, wana bazali koyebisa noki ndenge bakoki bamposa ya bokono oyo epekisaka makambo, kosolola, kolɔngɔnɔ mpe bamposa mosusu ya ndenge ya kosala. Toli ya mibeko ya bato ya mayele ekoki kosalisa kolimbola bobongisi oyo ebongi mpe badati ya nsuka.",
    "plainLaw": "Yebisá IPO mpe mopesi-toli ya mibeko nini esali ete kozala na kati ezala mpasi liboso ya interview, kaka nsima ya kokwea na yango te.",
    "sourceLabel": "Irish Refugee Council Independent Law Centre",
    "choices": {
      "early": {
        "label": "Kutaná noki na IPO mpe mopesi-toli ya mibeko na mitungisi ya sikisiki ya kokoka kokɔta, kopema, bankisi mpe kobatelama ya mwana.",
        "feedback": "Koyebisa makambo ya sikisiki liboso epesaka nzela libaku ya koyanola.",
        "consequence": "Adama akoki kozala na kati malamu koleka mpe kobatelama ya mwana na ye ekoki kobongisama."
      },
      "miss": {
        "label": "Zangá interview kozanga kokutana mpo bokono oyo epekisaka makambo elongisaka mbala moko kozanga.",
        "feedback": "Kokanisá te ete kozanga ekolimbola yango moko.",
        "consequence": "Eteni ya ntina ya nzela ekoki kozangama kozanga ntina esosolama."
      },
      "endure": {
        "label": "Lobá eloko te mpe kobá ata ntango mpasi ezali kobebisa kotya likebi.",
        "feedback": "Mpasi oyo elimbolami te ekoki kobongola ndenge bayokaka mpe bakomaka lisolo.",
        "consequence": "Makambo ya ntina ekoki kozangama to komonana koyokana te."
      }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Kolɔngɔnɔ, kelasi mpe lipanda",
    "title": "Rendez-vous moko ekoki kosilisa mikakatano nyonso te",
    "scene": "Adama azali na mposa ya monganga ya liboso, kokoba bankisi, esika na kelasi, transport oyo akoki kosalela mpe makambo na ntina ya masɛngami ya mosala.",
    "question": "Mwango nini ekoki kosalema mingi koleka?",
    "law": "Misala ya kolɔngɔnɔ, kelasi, ndako ya boyambi mpe kokɔta na zando ya mosala esalaka na nzela ya misala mpe mibeko ya masɛngami ekeseni ya Ireland. IPAS ebimisaka banzela ekeseni mpe makambo ya lisungi mpo na mokomoko.",
    "plainLaw": "Bongisá likambo ya kosala mpe moto ya kokutana na ye mpo na kolɔngɔnɔ, kelasi, ndako mpe kofanda moko na moko, na esika ya kozela ete mosala moko ekamba nyonso.",
    "sourceLabel": "Misala mpe lisungi ya IPAS",
    "choices": {
      "plan": {
        "label": "Salá mwango ya biteni minei mpe luká molobeli to mosali ya lisungi mpo na koyokanisa misala ya noki.",
        "feedback": "Koyokanisa ezali na ntina mpo ebongiseli mokomoko ezali na mokumba ekeseni.",
        "consequence": "Bankisi mpe kelasi ekoki kotyama liboso kozanga kobosana ndako to mikumba ya likambo."
      },
      "ipo": {
        "label": "Sɛngá mosali ya dosye na IPO abongisa misala nyonso ya kolɔngɔnɔ, kelasi mpe transport.",
        "feedback": "IPO etalelaka bosɛngi ya libateli; etambwisaka misala nyonso ya kokóma te.",
        "consequence": "Bamposa ya noki ya bomoi etindami na ebongiseli oyo ebongi te."
      },
      "wait": {
        "label": "Zelá ezalela ya libateli liboso ya koluka lisalisi ya kolɔngɔnɔ to esika na kelasi.",
        "feedback": "Basɛngi mpe bana bakoki kozwa misala wana likambo ezali kozela, na kolanda mibeko oyo etali yango.",
        "consequence": "Kolɔngɔnɔ ebebi mpe mwana abungisi ntango ya kelasi kozanga ntina."
      }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "Kotambola na bonsomi na EU",
    "title": "Elena azali na mposa ya ndingisa ya mosala te",
    "scene": "Moto ya kolukela mosala ayebisi Elena ete bana-mboka ya Bulgaria basengeli na ndingisa ya mosala ndenge moko na basali ya libándá ya EEA mpe alingi kotɛkela ye yango.",
    "question": "Asengeli kotala nini?",
    "law": "Lokola mwana-mboka ya EU, Elena akoki kokɔta na Ireland na passeport to karte ya bomoto ya ekólo oyo ezali na mosala mpe akoki kosala kozanga ndingisa ya mosala ya Ireland. Masɛngami ezali mpo na kofanda nsima ya ntango ya ebandeli.",
    "plainLaw": "Kofutá te ndingisa ya mosala oyo mwana-mboka ya EU asengeli na yango te; talá mibeko ekeseni mpo na kofanda ntango molai.",
    "sourceLabel": "Koya uta na EU/EEA mpo na kosala",
    "choices": {
      "eu": {
        "label": "Boyá kotɛkelama ndingisa, talá soki patrɔ azali ya solo mpe salelá makambo ya bakonzi ya kofanda ya EU.",
        "feedback": "Kozala mwana-mboka ya EU ebongolaka nzela na ye ya kofanda, kasi elongolaka te mposa ya mosala ya solo.",
        "consequence": "Elena aboyi bokosi mpe abongisi na kolanda makoki na ye ya solo ya kotambola na bonsomi."
      },
      "buy": {
        "label": "Futá mpo mbula mpe kozala Roma esɛngi ndingisa ya sipesiale.",
        "feedback": "Makambo wana ya bomoto ebimisaka lisɛngami ya ndingisa ya mosala te mpo na mwana-mboka ya EU.",
        "consequence": "Mbongo mpe mikanda ya sekele epesami na moto ya kolukela mosala oyo azali na bosembo te."
      },
      "visitor": {
        "label": "Bombá mwango ya kosala mpo bana-mboka ya EU bakoki kaka koya kotala.",
        "feedback": "Bana-mboka ya EU bazali na lotomo ya kosala na mboka mosusu ya EU, na kolanda mibeko ya kofanda oyo etali bango.",
        "consequence": "Elena asosoli na libunga mpe asaleli moke moboko ya mibeko oyo azali na yango."
      }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "Kofanda koleka basanza ya liboso",
    "title": "Kotambola na bonsomi ezali naino na masɛngami ya kofanda",
    "scene": "Elena abongisi kotikala kozanga dati ya nsuka kasi azali kaka na elaka ya mosala ya ntango moke mpe mbongo oyo abombi pene na eloko te.",
    "question": "Mwango nini ezali ya kotyela motema mingi koleka?",
    "law": "Bana-mboka ya EU bakoki kofanda na Ireland na ebandeli mpe bakoki kotikala ntango molai ntango bazali kosalela lotomo ya Boyokani ya EU, lokola mosala, komisalela, boyekoli oyo ekokisi masɛngami to komikokisa na mbongo. Baluki ya mosala bazali na libateli mpe masɛngami ya sikisiki.",
    "plainLaw": "Batelá bilembeteli ya mosala ya solo to koluka mosala mpe sosolá moboko nini esungi kofanda nsima ya ntango ya ebandeli.",
    "sourceLabel": "Makoki ya kofanda ya bana-mboka ya EU na Ireland",
    "choices": {
      "evidence": {
        "label": "Batelá bosɛngi ya mosala, bakontra, mikanda ya lifuti mpe makomi ya ndako wana ozali kotala moboko ya kofanda oyo ebongi.",
        "feedback": "Bilembeteli esalisaka komonisa ete Elena azali kosala to koluka mosala na solo.",
        "consequence": "Mwango na ye ya ntango molai etongami na moboko ya lotomo ya Boyokani oyo ezali na mikanda."
      },
      "forever": {
        "label": "Kanisá ete kozala mwana-mboka ya EU epesaka kofanda ya libela kozanga masɛngami kobanda mokolo ya liboso.",
        "feedback": "Kokɔta na ebandeli mpe kofanda ntango molai ezali ndenge moko te.",
        "consequence": "Elena akoki koyeba mokakatano ya kofanda kaka ntango azali koluka kozwa mosala mosusu ya lisungi."
      },
      "cash": {
        "label": "Ndimá mosala ya mbongo na mabɔkɔ kozanga mikanda mpo mosala nyonso emonisaka kofanda.",
        "feedback": "Mosala oyo eyebisami te elɛmbisaka libateli ya mosala mpe ekoki kopesa te bilembeteli oyo ekoki kosalelama.",
        "consequence": "Minyoko ekómi mingi wana lisolo ya mosala na ye etikali mpasi ya komonisa."
      }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "Kobanda mosala",
    "title": "Nimero ya PPS mpe IRP ezali ndingisa ya mosala ya EU te",
    "scene": "Otɛlɛ esɛngi Elena Irish Residence Permit liboso ya kotya ye na liste ya bangonga ya mosala.",
    "question": "Asengeli koyanola ndenge nini?",
    "law": "Bana-mboka ya EU bakomisaka mingimingi nkombo te na Immigration Service Delivery to bazwaka IRP te mpo na kosalela makoki na bango moko ya EU. Nimero ya PPS ezali elembo ekeseni mpo na mpako mpe misala ya Leta.",
    "plainLaw": "Monisá bomoto ya EU mpe limbolá moboko ya lotomo ya kosala oyo ebongi; silisá makambo ya mpako mpe PPS pembeni.",
    "sourceLabel": "Bana-mboka ya EU oyo basalaka na Ireland",
    "choices": {
      "explain": {
        "label": "Pesá mokanda na ye ya bomoto ya Bulgaria mpe sɛngá HR etala lisusu mibeko ya basali ya EU.",
        "feedback": "Yango ebongisi lisɛngami kozanga kokela mokanda oyo asengeli kozala na yango te.",
        "consequence": "Patrɔ akoki koyamba ye na mosala na moboko ya EU oyo ebongi."
      },
      "fake": {
        "label": "Sombá IRP ya lokuta mpo patrɔ azali kotingama.",
        "feedback": "Kokelá to kosombá ata moke te mikanda ya kokɔta mpe kofanda ya lokuta.",
        "consequence": "Libunga ya patrɔ ekómi mokakatano makasi ya mibeko mpo na Elena."
      },
      "ppswork": {
        "label": "Lobá ete nimero ya PPS ezali mokanda oyo epesaka makoki ya mosala ya EU.",
        "feedback": "Nimero ya PPS epesaka lotomo ya kosala te.",
        "consequence": "Baebongiseli mibale oyo ekeseni etikali kosangisama."
      }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Bokeseni na ndako",
    "title": "Koboya ekoki kotalela makambo koleka kaka makoki ya kofuta",
    "scene": "Nkolo ndako azali malamu na telefone, na nsima alobi ete shambre ezali lisusu te nsima ya komona Elena mpe koyoka ete azali Roma mpe trans.",
    "question": "Elena akoki kosala nini kozanga kokanisa ete koboya nyonso ebuki mibeko?",
    "law": "Mibeko ya Ireland ya bokokani epekisaka bokeseni na ndako mpo na makambo oyo ebatelami, kati na yango loposo to ekólo, kozala mobali to mwasi mpe mbula. Bokeseni mpo na kozala trans ebatelami na moboko ya kozala mobali to mwasi, kasi bilembeteli mpe bandelo ya ntango ezali na ntina na reklamasyo.",
    "plainLaw": "Komá oyo esalemaki, bombá piblisite mpe bansango, mpe luká noki toli ya ndako to bokokani.",
    "sourceLabel": "IHREC: loposo to ekólo mpe ndako",
    "choices": {
      "save": {
        "label": "Bombá piblisite mpe bansango, komá oyo elobamaki mpe luká toli na IHREC to mosala ya ndako.",
        "feedback": "Bilembeteli oyo ebombami na ntango ya likambo esalisaka kokesenisa bokeseni na ndimbola mosusu.",
        "consequence": "Elena akoki kotalela reklamasyo wana azali kokoba koluka ndako na noki."
      },
      "threat": {
        "label": "Bangisá nkolo ndako na miso ya bato kozanga kobatela bilembeteli.",
        "feedback": "Nkanda ekoki kososolama, kasi bilembeteli mpe toli etongaka nzela makasi koleka ya kobongisa mabe.",
        "consequence": "Piblisite elongwe mpe maloba ya sikisiki ya bokeseni ekómi mpasi koleka ya komonisa."
      },
      "accept": {
        "label": "Kanisá ete bokeseni na bafuteli Roma to trans ezali ya mobeko na ndako ya moto ye moko.",
        "feedback": "Misala ya ndako ya bato etalelami na mibeko ya bokokani, na kolanda makambo mpe bilongoli ya mibeko.",
        "consequence": "Koboya oyo ekoki komemama na mibeko etalelami te."
      }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "Bokokani na mosala",
    "title": "Likambo moko ekoki kotalela makambo mingi oyo ebatelami",
    "scene": "Mokambi asɛki ndenge Elena alobaka mpe bomoto na ye ya mwasi, apesi basali ya bilenge oyo bazali Roma te bangonga ya malamu koleka mpe ayebisi ye asalela badge ya nkombo mosusu.",
    "question": "Eyano nini ebatelaka makambo oyo esangani?",
    "law": "Employment Equality Acts epekisaka bokeseni na mosala mpo na makambo lokola kozala mobali to mwasi, loposo to ekólo mpe mbula. Bokeseni mpo na kozala trans ebatelami na moboko ya kozala mobali to mwasi; bareklamasyo ya mosala ekoki komemama na WRC.",
    "plainLaw": "Komá likambo nyonso mpe bato oyo okoki kokokanisa na bango, salelá nzela ya patrɔ soki ezali na bokengi, mpe zwá toli ya bokokani noki.",
    "sourceLabel": "IHREC: bokeseni na esika ya mosala",
    "choices": {
      "log": {
        "label": "Batelá makomi oyo ezali na badati ya maloba, bangonga mpe batatoli, na nsima luká malako ya IHREC to WRC.",
        "feedback": "Makomi emonisi ndenge loposo to ekólo, kozala mobali to mwasi mpe mbula ekoki kosala elongo.",
        "consequence": "Elena akoki koluka bobongisi ya mabe na kati to na libándá na boyebi, liboso bilembeteli mpe badati ya nsuka ebunga."
      },
      "one": {
        "label": "Yebisá kaka mbula mpo reklamasyo moko ekoki kotalela makambo mingi oyo esangani te.",
        "feedback": "Reklamasyo ekoki kolimbola makambo oyo ebatelami koleka moko soki makambo ya solo esungi yango.",
        "consequence": "Biteni ya loposo to ekólo mpe kozala mobali to mwasi ya ndenge basalelaki ye elongwe na lisolo."
      },
      "quit": {
        "label": "Tiká mosala mbala moko kozanga kobomba baliste ya bangonga, bansango to koluka toli.",
        "feedback": "Bokengi liboso, kasi kobatela bilembeteli mpe toli ekoki kobatela maponi ya nsima.",
        "consequence": "Mbongo etɛlɛmi mpe ndenge makambo esalemaki ekómi mpasi koleka ya komonisa."
      }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Bokengi ya sikoyo",
    "title": "Bobangi ya kofanda ekoki kozala eteni ya bokonzi ya kotindika na makasi",
    "scene": "Molongani ya Leila azali na bokonzi na passeport, mbongo mpe telefone na ye mpe alobi ete Gardaí bakobengana ye soki alongwe na bana.",
    "question": "Nini esengeli koya liboso?",
    "law": "Minyoko na ndako ekoki kosangisa bokonzi ya kotindika na makasi mpe violence ya nzoto. Moto nyonso oyo azali na likama ya sikoyo asengeli kobenga 999 to 112; ezalela ya kofanda epekisaka te moto oyo anyokwami kokutana na An Garda Síochána to mosala ya bato ya mayele.",
    "plainLaw": "Tyá bokengi ya sikoyo mpe lisungi ya sekele ya bato ya mayele liboso; moto oyo anyokolaka akataka ezalela ya kofanda te.",
    "sourceLabel": "Lisungi ya Women’s Aid",
    "choices": {
      "safe": {
        "label": "Salelá apareyi ya bokengi to moto ya kotyela motema mpo na kokutana na lisungi ya mbalakaka to ya bato ya mayele mpo na minyoko na ndako.",
        "feedback": "Mwango ya bokengi ekoki kotalela bana, lokota, kolandelama mpe mikanda.",
        "consequence": "Leila azwi maponi ya sekele kozanga asengeli liboso kotɛmɛla moto oyo anyokolaka ye."
      },
      "confront": {
        "label": "Yebisá mwango ya kolongwa mpe sɛngá na makasi mikanda nyonso ntango azali ye moko.",
        "feedback": "Kotɛmɛlana ekoki kobakisa likama; moto ya mayele akoki kosalisa kobongisa bokimi ya bokengi koleka.",
        "consequence": "Moto oyo anyokolaka akoki kobakisa violence to kolongola mikanda mpe mbongo."
      },
      "believe": {
        "label": "Tikalá mpo molongani azali na nguya ya mobeko ya kopesa mitindo ya kobengana.",
        "feedback": "Molongani azwaka bikateli ya kofanda te.",
        "consequence": "Kobangisa ya lokuta ya kofanda ekobi kokanga Leila mpe bana."
      }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Kosolola na sekele",
    "title": "Nzela ya bokengi ya kokutana ezali na ntina",
    "scene": "Molongani atalaka lisolo ya boluki na navigateur mpe abongolaka mokanda nyonso ya bakonzi liboso Leila akoka kotánga yango.",
    "question": "Ndenge nini akoki koluka makambo na bokengi koleka?",
    "law": "ISD ekebisaka ete baapareyi etikaka bilembo ya numérique mpe epesaka moto oyo anyokwami nzela ya kosalela makambo ya kokutana ya momonisi. Women’s Aid ekoki kozwa mobongoli-maloba mpe kokangisa bato oyo babengi na misala na bisika nyonso ya Ireland.",
    "plainLaw": "Salelá apareyi ya bokengi koleka mpe makambo ya kokutana oyo moto ya minyoko akoki kolandela te; sɛngá mobongoli-maloba na esika ya kondimela moto ya minyoko.",
    "sourceLabel": "Malako ya ISD ya kofanda mpo na minyoko na ndako",
    "choices": {
      "private": {
        "label": "Salelá apareyi ya kotyela motema, email ya bokengi to adrɛsi ya momonisi mpe sɛngá kobongola maloba na lipanda.",
        "feedback": "Yango ekitisaka kolandelama mpe epesaka Leila nzela ya ye moko ya kozwa makambo na ye.",
        "consequence": "Misala ya lisungi ekoki kosolola kozanga kotinda nyonso na nzela ya molongani."
      },
      "shared": {
        "label": "Salelá konti ya libota oyo bakabolaka mpo kolongola lisolo ya boluki elongolaka elembo nyonso.",
        "feedback": "Kolongola lisolo ya boluki elakaka te ete misala ebombami.",
        "consequence": "Molongani akoki koyeba mwango ya bokengi to ya kofanda."
      },
      "translate": {
        "label": "Tiká molongani abongola maloba ya lisolo nyonso ya sekele.",
        "feedback": "Moto oyo bafundi ete anyokolaka asengeli kozala na bokonzi te na kobongola toli ya bokengi to ya mibeko.",
        "consequence": "Makambo ekoki kobongolama, kobombama to kosalelama mpo na kobangisa Leila."
      }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Ezalela ya kofanda ya lipanda",
    "title": "Kolongwa esukisaka ndingisa mbala moko te",
    "scene": "Ndingisa ya kofanda ya Leila ekangami na molongani na ye, mpe akanisi ete kokende na ndako ya kokima likama ekosala ete azanga ndingisa na butu wana.",
    "question": "Nzela nini asengeli koluka koyeba na noki?",
    "law": "Moto oyo anyokwami mpe ndingisa na ye ekangami na moto ya minyoko akoki kosɛnga mbala moko to na nzela ya avoka ndingisa ya kofanda ya lipanda na nse ya malako ya ISD ya minyoko na ndako. Bosɛngi efutamaka te mpe etalelamaka na sekele.",
    "plainLaw": "Zwá toli mpo na nzela ya ndingisa ya lipanda; kolongwa epai ya moto ya minyoko mpe kobungisa ezalela ezali mbala moko likambo moko te.",
    "sourceLabel": "Ndingisa ya lipanda mpo na bato oyo banyokwami na ndako",
    "choices": {
      "apply": {
        "label": "Kutaná na ISD to avoka na banzela ya bokengi mpe sɛngá ezalela ya lipanda na nse ya malako.",
        "feedback": "Ebongiseli yango ezali mpo na ndingisa oyo ekangami na moto oyo bafundi ete anyokolaka.",
        "consequence": "ISD ekoki kotalela makambo ya Leila ye moko kozanga molongani azala na bokonzi na bosɛngi."
      },
      "permission": {
        "label": "Sɛngá molongani atya sinyatire ya ndingisa mpo na bosɛngi na ye ya lipanda.",
        "feedback": "Moto ya minyoko azali na mokumba te ya kozwa bikateli na bosɛngi ya ezalela ya lipanda.",
        "consequence": "Molongani ayebisami mpe azwi libaku mosusu ya kopekisa bokengi."
      },
      "automatic": {
        "label": "Kanisá ete kokende na ndako ya kokima likama epesaka Stamp 4 mbala moko.",
        "feedback": "Ndingisa ya lipanda esɛngaka bosɛngi mpe botali; epesamaka mbala moko te.",
        "consequence": "Leila akoki kokanisa ete litambe ya kofanda esili wana esili te."
      }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Bilembeteli ata soki ekoki na nyonso te",
    "title": "Moto nyonso oyo abiki na minyoko azali na rapɔrɔ ya Garda te",
    "scene": "Minyoko mingi esalemaki na ndako. Leila azali na bansango mpe botali epai ya monganga ya liboso, kasi azali na mitindo ya tribinale to nimero ya likambo ya Garda te.",
    "question": "Asengeli kotonga bosɛngi ndenge nini?",
    "law": "ISD esɛngaka makambo mingi ndenge ekoki mpe epesaka bandakisa lokola mitindo ya tribinale, barapɔrɔ ya minganga to ya Garda, mikanda ya bibongiseli ya Leta mpe mikanda ya misala ya minyoko na ndako. Esengeli kolimbola makambo mpe bana; bandakisa ezali ntina te ya kokela bilembeteli.",
    "plainLaw": "Sangisá oyo ezali na solo, limbolá oyo ezangi mpe sɛngá avoka to mosala ya lisungi esalisa kolakisa lisolo.",
    "sourceLabel": "Malako ya ISD ya bilembeteli",
    "choices": {
      "genuine": {
        "label": "Batelá bansango mpe makomi ya solo, limbolá ndenge minyoko ezalaki kosalema mpe luká mikanda ya lisungi soki ebongi.",
        "feedback": "Lisolo ya solo oyo eyokani ekoki kosalela mitindo ndenge na ndenge ya bilembeteli.",
        "consequence": "ISD ezwi lisolo oyo ezali kozanga mokanda ya lokuta ebebisa yango."
      },
      "wait": {
        "label": "Zelá koluka lisungi tii azala na ndakisa nyonso ya liste ya ISD.",
        "feedback": "Bokengi mpe toli esengeli kozongisama nsima te mpo na koluka dosye oyo ezali mobimba na nyonso.",
        "consequence": "Likama ekobi mpe bilembeteli ya ntina ekoki kobunga."
      },
      "create": {
        "label": "Kelá nimero ya rapɔrɔ ya Garda mpo bilembeteli ya bakonzi esɛngamaka ntango nyonso.",
        "feedback": "Kokelá ata moke te bilembeteli.",
        "consequence": "Makambo ya lokuta ekoki kobebisa kondimama mpe bosɛngi ya kofanda nyonso mibale."
      }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Nsima ya bokengi ya sikoyo",
    "title": "Ndingisa ya kofanda ezali eteni moko ya kozonga na bomoi malamu",
    "scene": "Leila azali na mposa ya mbongo, ndako ya bokengi, kokoba kelasi mpe lisungi oyo endimaka bato LGBT, wana mituna ya mibeko ya libota etikali kosila te.",
    "question": "Litambe nini ya nsima ekoki kosalema mingi koleka?",
    "law": "Soki ndingisa ya lipanda endimami na nse ya malako, Stamp 4 epesaka nzela ya kosala kozanga ndingisa ya mosala. Bamposa ya bokengi, ndako, bana mpe mibeko ya libota esɛngaka naino misala ekeseni ya bato ya mayele; soki bosɛngi eboyami, esengeli kolimbola bantina ya koboya mpe maponi mosusu ya kofanda.",
    "plainLaw": "Tongá mwango oyo eyokani mpo na kofanda, bokengi, bana, ndako mpe mbongo na esika ya kozela ete ekateli moko esilisa nyonso.",
    "sourceLabel": "Malako ya ISD ya kofanda mpo na minyoko na ndako",
    "choices": {
      "team": {
        "label": "Salelá mopesi-toli ya kofanda, mosala ya minyoko na ndako mpe lisungi oyo ebongi ya libota, ndako mpe LGBT elongo.",
        "feedback": "Bato ya mayele ekeseni bakoki kosalisa bamposa oyo ekangani kasi ekeseni na mibeko.",
        "consequence": "Leila akoki kotonga lipanda lisusu kozanga mosala moko ebosana bana to mosusu ebosana ezalela ya kofanda."
      },
      "stamp": {
        "label": "Kanisá ete Stamp 4 epesaka ndako mbala moko mpe esilisaka bibongiseli ya bana.",
        "feedback": "Ndingisa ya kofanda ekataka makambo ya ndako to ya mibeko ya libota te.",
        "consequence": "Bamposa ya noki ya bomoi mpe mibeko etikali kozanga lisungi."
      },
      "return": {
        "label": "Zongá epai ya molongani mpo kondimama elakami te.",
        "feedback": "Kozanga koyeba esɛngi kobongisa elongo na bato ya mayele, kotindama na likama te.",
        "consequence": "Bokonzi ya kotindika na makasi ezongi liboso maponi ya lipanda etalelama malamu."
      }
    }
  }
};

export default catalog;
