// AI-assisted translation; see README language review notes.
import type { JourneyControls, JourneyTranslationCatalog } from "./types";

export const controls: JourneyControls = {
  "resume": "Tẹ̀ síwájú",
  "resumeJourney": "Tẹ̀ síwájú pẹ̀lú {name}",
  "restart": "Bẹ̀rẹ̀ ìrìnàjò yìí láti ìbẹ̀rẹ̀",
  "savedJourney": "Ìrìnàjò tí a fi pamọ́",
  "stage": "Ìpele",
  "returnHome": "Padà sí àwọn ìrìnàjò",
  "saveUnavailable": "A kò lè fi ìlọsíwájú pamọ́ sínú ẹ̀rọ aṣàwákiri yìí. Má ṣe pa ojú ìwé yìí dé, kí o lè tẹ̀ síwájú."
};

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Àwọn tí ó gbọ́dọ̀ forúkọ sílẹ̀, ohun tí ìforúkọsílẹ̀ ń ṣàkọsílẹ̀ àti bí a ṣe ń lo ìlànà ìjọba.",
  "Personal Public Service number": "Bí a ṣe ń lo nọ́ńbà PPS fún àwọn iṣẹ́ ìjọba àti ìbáṣepọ̀ pẹ̀lú àwọn aláṣẹ. Kì í ṣe àṣẹ ìṣílọ.",
  "Choose an immigration purpose": "Àwọn ojú òpó ìjọba láti bẹ̀rẹ̀ àbẹ̀wò, iṣẹ́, ẹ̀kọ́, ìgbé ní Ireland tàbí dídarapọ̀ mọ́ ẹbí.",
  "Immigration permission stamps": "Lóye ohun tí èdìdì tí a kọ sórí Irish Residence Permit ń gbà láàyè àti ohun tí ó ń béèrè.",
  "Applying for international protection": "Àlàyé ìjọba nípa ìlànà fífi ìbéèrè sílẹ̀ àti ṣíṣàyẹ̀wò rẹ̀ ní Ireland.",
  "Applications made after 12 June 2026": "Àlàyé ní èdè tó rọrùn lórí International Protection Act 2026 àti àwọn òfin tí ó kan àwọn ìbéèrè tuntun.",
  "Accommodation and reception supports": "Àlàyé nípa ibùgbé IPAS, àwọn iṣẹ́, àlàáfíà àwọn olùgbé àti fífi ẹ̀sùn ìṣòro hàn.",
  "Vulnerability and accommodation needs": "Bí àwọn olùbéèrè ṣe lè sọ àìlera ara, ìlera, títọ́ ọmọ àti àwọn àìní pàtàkì mìíràn nígbà ìgbàlejò, àti bí a ṣe ń gbé ìṣòro ibùgbé yẹ̀ wò.",
  "Independent legal and practical support": "Àlàyé, ìgbèjà ẹ̀tọ́, òfin, ilé gbígbé, iṣẹ́, àwọn iṣẹ́ fún ọ̀dọ́ àti ìfìdíkalẹ̀ tuntun.",
  "Employment permit types": "Àwọn ẹ̀ka ìwé àṣẹ lọ́wọ́lọ́wọ́, yíyẹ, àtòjọ àwọn iṣẹ́, ìtọ́sọ́nà ìbéèrè àti ìròyìn tuntun.",
  "Rights when working in Ireland": "Owó iṣẹ́, àwọn àdéhùn iṣẹ́, àkókò iṣẹ́, ìsinmi, àkọsílẹ̀ àti àwọn ọ̀nà láti fi ẹ̀sùn ìṣòro ibi iṣẹ́ hàn.",
  "Migrant employment and exploitation support": "Àlàyé àti ìrànlọ́wọ́ olómìnira fún òṣìṣẹ́ aṣíkiri, títí kan àwọn tí wọ́n wà nínú ewu ìnilára nípa iṣẹ́.",
  "EU citizens coming to work": "Ẹ̀tọ́ iṣẹ́ fún àwọn ọmọ orílẹ̀-èdè EU àti EEA, títí kan ìdí tí wọ́n kò fi nílò ìwé àṣẹ iṣẹ́ Ireland ní gbogbogbòò.",
  "EU residence rights": "Àwọn ìpìlẹ̀ tí àwọn ọmọ orílẹ̀-èdè EU fi lè wọ Ireland kí wọ́n sì máa gbé ibẹ̀, títí kan iṣẹ́, wíwá iṣẹ́, ẹ̀kọ́ àti agbára láti gbọ́ bùkátà ara wọn.",
  "Coming to study in Ireland": "Àlàyé fìsá, owó, ìdánigbójú, ètò ẹ̀kọ́ àti ìforúkọsílẹ̀ fún àwọn akẹ́kọ̀ọ́ tí kì í ṣe ọmọ orílẹ̀-èdè EEA.",
  "Education in Ireland": "Àlàyé fún gbogbo ènìyàn nípa ilé ẹ̀kọ́, ẹ̀kọ́ lẹ́yìn girama, ẹ̀kọ́ gíga àti ìrànlọ́wọ́ ẹ̀kọ́.",
  "Healthcare services": "Bí a ṣe lè rí dókítà ìdílé, ilé ìwòsàn, àwọn iṣẹ́ pàjáwìrì àti àlàyé ìlera fún gbogbo ènìyàn ní Ireland.",
  "Finding and renting a home": "Àlàyé nípa ilé gbígbé, ilé yíyá, ẹ̀tọ́ ayálégbé, owó ìdánilójú ilé, àìnílé àti ìrànlọ́wọ́ ilé gbígbé.",
  "Independent public information": "Àlàyé orílẹ̀-èdè lórí ìrànlọ́wọ́ àwùjọ, ìlera, ilé gbígbé, owó, owó orí, ẹ̀kọ́ àti ẹ̀tọ́ oníbàárà.",
  "Traveller and Roma equality rights": "Àlàyé nípa ìyàsọ́tọ̀ tí àwọn àwùjọ Traveller àti Roma ń dojú kọ àti ààbò tí òfin ìdọ́gba Ireland pèsè.",
  "Coming to join family": "Wá ọ̀nà tó yẹ ní ìbámu pẹ̀lú bóyá olùgbọ̀wọ́ jẹ́ ọmọ orílẹ̀-èdè Ireland, UK, EEA tàbí Switzerland, ẹni tí kì í ṣe ọmọ orílẹ̀-èdè EEA, tàbí ẹni tó ní ipò ààbò.",
  "Specialist migrant and refugee advice": "Àlàyé àti ìtọ́jú ọ̀ràn nípa ipò ìṣílọ, fìsá, ìdàpọ̀ ẹbí, jíjẹ́ ọmọ orílẹ̀-èdè àti àwọn ipò ìgbàlejò.",
  "Independent status after domestic abuse": "Ìtọ́nisọ́nà ìṣílọ ní ìkọ̀kọ̀ fún olùfaragà tí àṣẹ rẹ̀ so mọ́ ẹni tí a fi ẹ̀sùn kàn, títí kan bí a ṣe ń béèrè àti ẹ̀rí tí ó lè ràn án lọ́wọ́.",
  "Domestic-abuse safety and support": "Ìrànlọ́wọ́ ní ìkọ̀kọ̀, ìtumọ̀ èdè àti àlàyé ààbò fún àwọn obìnrin tí ń fara da ìwà ipá nínú ilé; pe 999 tàbí 112 nígbà pàjáwìrì."
};

const catalog: JourneyTranslationCatalog = {
  "critical:Plan": {
    "eyebrow": "Oṣù mẹ́rin ṣáájú kíkó lọ",
    "title": "Ìpèsè iṣẹ́ tó dára jẹ́ ìbẹ̀rẹ̀ péré",
    "scene": "Àdéhùn náà ti dé. Agbaniṣiṣẹ́ sọ pé iṣẹ́ náà nílò òṣìṣẹ́ púpọ̀, ó sì ní kí iṣẹ́ bẹ̀rẹ̀ lẹ́sẹ̀kẹsẹ̀.",
    "question": "Kí ló yẹ kí ó ṣẹlẹ̀ kí a tó ṣètò ọkọ̀ òfurufú tàbí fífi ìfìwésílẹ̀ iṣẹ́ hàn?",
    "law": "Ìwé Àṣẹ Iṣẹ́ fún Ọgbọ́n Pàtàkì dá lórí bí irú iṣẹ́, owó iṣẹ́, àdéhùn àti agbaniṣiṣẹ́ ṣe bá àwọn àlàkalẹ̀ òfin lọ́wọ́lọ́wọ́ mu.",
    "plainLaw": "Ṣàyẹ̀wò iṣẹ́ gidi, owó iṣẹ́, àdéhùn àti agbaniṣiṣẹ́ pẹ̀lú àwọn òfin ìjọba òde òní kí o tó gbẹ́kẹ̀ lé ìpèsè náà.",
    "sourceLabel": "Ìwé Àṣẹ Iṣẹ́ fún Ọgbọ́n Pàtàkì",
    "choices": {
      "verify": {
        "label": "Ṣàyẹ̀wò irú iṣẹ́, owó iṣẹ́, àdéhùn àti agbaniṣiṣẹ́, lẹ́yìn náà fi ìbéèrè ìwé àṣẹ tó yẹ sílẹ̀.",
        "feedback": "Èyí ń dáàbò bo ìṣètò kíkó lọ kí ó má bàa dá lórí ìpèsè iṣẹ́ tí kò yẹ.",
        "consequence": "Àkókò ìṣètò di èyí tí ó ṣeé ṣe, a sì dán iṣẹ́ náà wò pẹ̀lú àwọn òfin lọ́wọ́lọ́wọ́."
      },
      "contract": {
        "label": "Ka àdéhùn tí a ti fọwọ́ sí sí àṣẹ láti ṣiṣẹ́.",
        "feedback": "Àdéhùn àti ìwé àṣẹ iṣẹ́ ní iṣẹ́ òfin ọ̀tọ̀ọ̀tọ̀.",
        "consequence": "Ìrìnàjò tàbí fífi iṣẹ́ sílẹ̀ lè ṣẹlẹ̀ kí àṣẹ tí a nílò tó wà."
      },
      "visitor": {
        "label": "Wọlé gẹ́gẹ́ bí àlejò, kí o sì parí ìwé àṣẹ lẹ́yìn bíbẹ̀rẹ̀ iṣẹ́.",
        "feedback": "Ipò àlejò kò fúnni ní àṣẹ láti ṣe iṣẹ́ déédéé.",
        "consequence": "Iṣẹ́ náà àti ipò ìṣílọ lè wà nínú ewu."
      }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Àwọn ìwé àti àkókò",
    "title": "Ìfọwọ́sí kan kò rọ́pò gbogbo ìgbésẹ̀ yòókù",
    "scene": "A ti fún un ní ìwé àṣẹ. Ọ̀rẹ́ kan sọ pé ìyẹn túmọ̀ sí pé kò sí àyẹ̀wò ìṣíwọlé mìíràn tí ó yẹ.",
    "question": "Èwo ni ètò tó láàbò jù?",
    "law": "Ìwé àṣẹ iṣẹ́ fúnni ní àṣẹ fún iṣẹ́ pàtó. Ọmọ orílẹ̀-èdè tí ó nílò fìsá tún gbọ́dọ̀ gba fìsá ìgbà pípẹ́ tó yẹ ṣáájú ìrìnàjò.",
    "plainLaw": "Ìwé àṣẹ, fìsá, àṣẹ ní ààlà àti ìforúkọsílẹ̀ ìgbé jẹ́ ìpele ọ̀tọ̀ọ̀tọ̀.",
    "sourceLabel": "Wíwá ṣiṣẹ́ ní Ireland",
    "choices": {
      "sequence": {
        "label": "Ṣàyẹ̀wò ohun tí fìsá ń béèrè, pèsè ẹ̀rí, kí o sì fi gbogbo ìfọwọ́sí síbi tí o ti lè mú wọn nígbà ìrìnàjò.",
        "feedback": "Ó tọ́. Ìwé kọ̀ọ̀kan ń dáhùn ìbéèrè ọ̀tọ̀.",
        "consequence": "Arìnrìnàjò lè ṣàlàyé ète kíkó lọ ní ààlà."
      },
      "permitvisa": {
        "label": "Rò pé ìwé àṣẹ iṣẹ́ jẹ́ fìsá ìrìnàjò fúnra rẹ̀.",
        "feedback": "Èyí kò tọ́ fún àwọn ọmọ orílẹ̀-èdè tí ó nílò fìsá.",
        "consequence": "Wọ́n lè dènà wíwọ ọkọ̀ tàbí wíwọ orílẹ̀-èdè bí ó tilẹ̀ jẹ́ pé ìwé àṣẹ náà wúlò."
      },
      "agent": {
        "label": "Fi gbogbo ìwé ojúlówó fún aṣojú tí a kò tíì fìdí rẹ̀ múlẹ̀.",
        "feedback": "Máa ṣàkóso àwọn ìwé ìdánimọ̀ rẹ, kí o sì fìdí ẹni tó ń gba owó fún ìrànlọ́wọ́ múlẹ̀.",
        "consequence": "Àìlè rí àwọn ìwé ojúlówó lò ń fa ìdádúró àti ewu ìnilára."
      }
    }
  },
  "critical:Travel": {
    "eyebrow": "Ní ààlà Ireland",
    "title": "Múra láti ṣàlàyé ète ìrìnàjò",
    "scene": "Òṣìṣẹ́ ìṣíwọlé béèrè ibi tí arìnrìnàjò yóò gbé àti agbaniṣiṣẹ́ tí ń retí rẹ̀.",
    "question": "Kí ló yẹ kí ó ṣe?",
    "law": "Fìsá fúnni ní àṣẹ láti rìn dé ààlà; òṣìṣẹ́ ìṣíwọlé ló pinnu wíwọlé. Àwọn ìwé àtìlẹ́yìn yẹ kí wọ́n fi ète gidi àti ìṣètò hàn.",
    "plainLaw": "Mú ẹ̀rí òótọ́ tí ó bá ara rẹ̀ mu nípa iṣẹ́, àṣẹ àti àdírẹ́sì àkọ́kọ́ lọ.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "answer": {
        "label": "Dáhùn ní òótọ́, kí o sì fi ìwé àṣẹ, fìsá bí ó bá yẹ, àdéhùn àti àlàyé ibùgbé hàn.",
        "feedback": "Ẹ̀rí tí ó ṣe kedere, tí ó sì bá ara rẹ̀ mu ń ti ète ìrìnàjò tí a sọ lẹ́yìn.",
        "consequence": "Òṣìṣẹ́ náà lè ṣàyẹ̀wò ìrìnàjò iṣẹ́ náà pẹ̀lú àwọn ìwé tó yẹ."
      },
      "tourism": {
        "label": "Sọ pé ìrìnàjò ìsinmi lásán ni láti yẹra fún ìbéèrè nípa iṣẹ́.",
        "feedback": "Àlàyé yẹ kí ó bá ète gidi àti àwọn ìwé mu.",
        "consequence": "Àwọn àlàyé tí ó tako ara wọn lè fa ìṣòro líle ní ààlà."
      },
      "phone": {
        "label": "Gbẹ́kẹ̀ lé pípè aṣojú ìgbaniṣiṣẹ́ nìkan.",
        "feedback": "Arìnrìnàjò yẹ kí ó lóye àwọn àlàyé pàtàkì tirẹ̀, kí ó sì mú wọn lọ.",
        "consequence": "Bí aṣojú ìgbaniṣiṣẹ́ kò bá sí, ète ìrìnàjò lè má ṣe kedere."
      }
    }
  },
  "critical:Arrive": {
    "eyebrow": "Ọjọ́ 90 àkọ́kọ́",
    "title": "Ìforúkọsílẹ̀ sọ àṣẹ di ẹ̀rí",
    "scene": "Iṣẹ́ ti bẹ̀rẹ̀, ṣùgbọ́n wíwá ilé àti àwọn ìpàdé ń mú ọ̀sẹ̀ àkọ́kọ́ nira.",
    "question": "Iṣẹ́ wo ni ó yẹ kí ó ṣì wà nínú ètò?",
    "law": "Àwọn ènìyàn tí kì í ṣe ọmọ orílẹ̀-èdè EU, UK àti Switzerland tí yóò dúró ju ọjọ́ 90 lọ ní gbogbogbòò gbọ́dọ̀ forúkọ àṣẹ ìṣílọ wọn sílẹ̀ ní Ireland.",
    "plainLaw": "Ṣètò ìforúkọsílẹ̀, kí àlàyé àṣẹ, àdírẹ́sì àti iṣẹ́ sì péye.",
    "sourceLabel": "Fíforúkọ àṣẹ ìṣílọ sílẹ̀",
    "choices": {
      "register": {
        "label": "Ṣètò ìforúkọsílẹ̀, tẹ̀lé ìlànà ìpàdé ìjọba, kí o sì pa ẹ̀rí ìgbìyànjú mọ́.",
        "feedback": "Irish Residence Permit ń ṣàkọsílẹ̀ àṣẹ àti àwọn àdéhùn rẹ̀.",
        "consequence": "Ẹni náà ní ẹ̀rí tó túbọ̀ ṣe kedere fún ìgbé tó bófin mu àti ohun tí àṣẹ náà gbà láàyè."
      },
      "pps": {
        "label": "Rò pé nọ́ńbà PPS rọ́pò ìforúkọsílẹ̀ ìṣílọ.",
        "feedback": "Nọ́ńbà PPS wà fún ìbáṣepọ̀ pẹ̀lú àwọn iṣẹ́ ìjọba àti owó orí, kì í ṣe àṣẹ ìṣílọ.",
        "consequence": "A ó ṣàṣìṣe ka nọ́ńbà ìṣàkóso tó wúlò sí ẹ̀rí ìgbé tó bófin mu."
      },
      "contract": {
        "label": "Rò pé àdéhùn agbaniṣiṣẹ́ rọ́pò IRP.",
        "feedback": "Àwọn ìwé iṣẹ́ kò rọ́pò ìforúkọsílẹ̀ ìgbé.",
        "consequence": "Ó lè nira fún ẹni náà láti fi àwọn àdéhùn ìṣílọ rẹ̀ hàn."
      }
    }
  },
  "critical:Build a life": {
    "eyebrow": "Ibi iṣẹ́ àti ọjọ́ ọ̀la",
    "title": "Ipò ènìyàn kò pa ẹ̀tọ́ iṣẹ́ rẹ́",
    "scene": "Alábòójútó kan sọ pé àwọn òṣìṣẹ́ aṣíkiri ń gba owó iṣẹ́ tó kéré àti àkókò ìsinmi díẹ̀ ní àwọn oṣù àkọ́kọ́ wọn.",
    "question": "Ìdáhùn wo ló ń dáàbò bo iṣẹ́ àti ipò ìṣílọ papọ̀?",
    "law": "Àwọn òṣìṣẹ́ aṣíkiri tí ń ṣiṣẹ́ lọ́nà tó bófin mu ní Ireland ní àwọn ààbò iṣẹ́ pàtàkì. A gbọ́dọ̀ gbé àdéhùn ìwé àṣẹ àti ẹ̀tọ́ iṣẹ́ yẹ̀ wò nígbà tí ìṣòro bá ṣẹlẹ̀.",
    "plainLaw": "Pa àkọsílẹ̀ mọ́, wá ìmọ̀ràn tó ṣeé gbẹ́kẹ̀ lé, má sì gba ìwà tí kò bófin mu nítorí ipò aṣíkiri.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "records": {
        "label": "Fi ètò iṣẹ́ àti ìwé àlàyé owó iṣẹ́ pamọ́, béèrè àtúnṣe, kí o sì kàn sí WRC tàbí olùdámọ̀ràn tó tóótun.",
        "feedback": "Ẹ̀rí àti ìmọ̀ràn ní àkókò tó yẹ ń ṣe ìrànwọ́ láti dáàbò bo ẹ̀tọ́ méjèèjì.",
        "consequence": "A lè yanjú ìṣòro náà láìṣe bí ẹni pé àwọn àdéhùn ìwé àṣẹ kò ṣe pàtàkì."
      },
      "accept": {
        "label": "Gbà á nítorí àwọn tó ní ìwé àṣẹ ní ẹ̀tọ́ iṣẹ́ díẹ̀.",
        "feedback": "Ipò ìṣílọ kò mú àwọn ààbò iṣẹ́ pàtàkì kúrò.",
        "consequence": "Sísan owó tó kéré ju èyí tó yẹ lọ tàbí ipò iṣẹ́ tí kò láàbò lè máa bá a lọ láìsí àtakò."
      },
      "disappear": {
        "label": "Fi iṣẹ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀, kí o sì bẹ̀rẹ̀ iṣẹ́ mìíràn láìṣàyẹ̀wò àwọn àdéhùn ìwé àṣẹ.",
        "feedback": "Yíyí iṣẹ́ padà lè nílò ìlànà ìjọba tàbí ìwé àṣẹ tuntun.",
        "consequence": "Ìṣòro ibi iṣẹ́ lè tún di ìṣòro ìṣílọ."
      }
    }
  },
  "general:Plan": {
    "eyebrow": "Ṣáájú sísan owó fún ẹnikẹ́ni",
    "title": "Ṣàyẹ̀wò iṣẹ́ gidi, má gbẹ́kẹ̀ lé ọ̀rọ̀ ìpolówó",
    "scene": "Aṣojú ìgbaniṣiṣẹ́ ṣèlérí pé àdéhùn iṣẹ́ Ireland èyíkéyìí tí a fọwọ́ sí mú ìwé àṣẹ dájú, ó sì béèrè owó lọ́wọ́.",
    "question": "Èwo ni ìpinnu àkọ́kọ́ tó dára jù?",
    "law": "Ìwé Àṣẹ Iṣẹ́ Gbogbogbòò dá lórí irú iṣẹ́, owó iṣẹ́, agbaniṣiṣẹ́ àti àwọn ohun mìíràn tí a ń béèrè lọ́wọ́lọ́wọ́. Àwọn iṣẹ́ kan kò yẹ, Àyẹ̀wò Àìní Ọjà Iṣẹ́ sì lè yẹ.",
    "plainLaw": "Fìdí agbaniṣiṣẹ́ àti àwọn ojúṣe gidi múlẹ̀, lẹ́yìn náà ṣàyẹ̀wò òfin ìwé àṣẹ lọ́wọ́lọ́wọ́ kí o tó san owó tàbí rìnrìnàjò.",
    "sourceLabel": "Ìwé Àṣẹ Iṣẹ́ Gbogbogbòò",
    "choices": {
      "check": {
        "label": "Fi àwọn orísun ìjọba fìdí agbaniṣiṣẹ́, ojúṣe, owó iṣẹ́ àti yíyẹ fún ìwé àṣẹ múlẹ̀.",
        "feedback": "Ìpèsè iṣẹ́ gidi náà ṣì gbọ́dọ̀ bá àwọn àlàkalẹ̀ òfin mu.",
        "consequence": "A rí ewu ẹ̀tàn àti iṣẹ́ tí kò yẹ kí a tó ná owó tàbí ṣètò ìrìnàjò."
      },
      "cash": {
        "label": "San owó lọ́wọ́, kí o sì jẹ́ kí aṣojú ìgbaniṣiṣẹ́ pa ìwé ìrìnnà mọ́.",
        "feedback": "Dídá ìwé ìrìnnà dúró àti fífi ipá múni san owó tí a kò lè tọpinpin jẹ́ àmì ìkìlọ̀.",
        "consequence": "Òṣìṣẹ́ náà túbọ̀ wà nínú ewu ẹ̀tàn àti ìṣàkóso látọ̀dọ̀ ẹlòmíràn."
      },
      "promise": {
        "label": "Gbẹ́kẹ̀ lé ìlérí aṣojú ìgbaniṣiṣẹ́ dípò ṣíṣàyẹ̀wò irú iṣẹ́ náà.",
        "feedback": "Àwọn àlàkalẹ̀ ìjọba, kì í ṣe ìlérí, ló pinnu yíyẹ fún ìwé àṣẹ.",
        "consequence": "Ọ̀nà tí a gbèrò lè já sí asán lẹ́yìn tí a ti ná owó púpọ̀."
      }
    }
  },
  "general:Prepare": {
    "eyebrow": "Ètò ìtẹ̀lé tó tọ́",
    "title": "Àṣẹ gbọ́dọ̀ ṣáájú kíkó lọ",
    "scene": "Agbaniṣiṣẹ́ nílò òṣìṣẹ́ báyìí, ó sì dábàá wíwọlé gẹ́gẹ́ bí arìnrìnàjò afẹ́ nígbà tí a ń parí ìwé.",
    "question": "Ètò ìtẹ̀lé wo ló ṣeé gbẹ́kẹ̀ lé?",
    "law": "Ìrìnàjò ìwé àṣẹ iṣẹ́ àkọ́kọ́ sábà nílò ìwé àṣẹ kí iṣẹ́ tó bẹ̀rẹ̀, lẹ́yìn náà fìsá ìgbà pípẹ́ níbi tí ó ti yẹ àti ìforúkọsílẹ̀ lẹ́yìn dídé.",
    "plainLaw": "Má ṣe lo ipò àlejò gẹ́gẹ́ bí ọ̀nà àbùjá sínú iṣẹ́ déédéé.",
    "sourceLabel": "Àwọn ìwé àṣẹ iṣẹ́",
    "choices": {
      "order": {
        "label": "Ìwé àṣẹ kọ́kọ́, fìsá bí ó bá yẹ, àyẹ̀wò ààlà, lẹ́yìn náà ìforúkọsílẹ̀ lẹ́yìn dídé.",
        "feedback": "Èyí ń mú kí ìrìnàjò tẹ̀lé ọ̀nà tí a gbèrò.",
        "consequence": "Òṣìṣẹ́ dé pẹ̀lú ìpìlẹ̀ òfin tí a lè ṣàlàyé, tí a sì ní ìwé rẹ̀."
      },
      "tourist": {
        "label": "Wọlé gẹ́gẹ́ bí arìnrìnàjò afẹ́, kí o sì bẹ̀rẹ̀ ní àkókò iṣẹ́ àkọ́kọ́.",
        "feedback": "Ipò àlejò kì í ṣe àṣẹ iṣẹ́ déédéé.",
        "consequence": "Òṣìṣẹ́ àti agbaniṣiṣẹ́ méjèèjì lè dojú kọ àbájáde líle."
      },
      "pps": {
        "label": "Béèrè nọ́ńbà PPS, kí o sì kà á sí ìwé àṣẹ iṣẹ́.",
        "feedback": "Nọ́ńbà PPS kò fúnni ní àṣẹ ìṣílọ tàbí iṣẹ́.",
        "consequence": "Ìgbésẹ̀ ìwé àṣẹ tó ṣe pàtàkì ṣì wà láìparí."
      }
    }
  },
  "general:Travel": {
    "eyebrow": "Ọjọ́ ìgbéra",
    "title": "Mú ẹ̀rí tirẹ lọ",
    "scene": "Aṣojú ìgbaniṣiṣẹ́ sọ pé gbogbo ìwé wà ní ọ́fíìsì ilé iṣẹ́, pé àwòrán ojú ìbòjú fóònù nìkan ni arìnrìnàjò nílò.",
    "question": "Kí ló yẹ kí arìnrìnàjò ṣe?",
    "law": "Arìnrìnàjò lè nílò láti fi ète àti àwọn àdéhùn ìrìnàjò hàn fún ilé iṣẹ́ ọkọ̀ àti ní àyẹ̀wò ààlà Ireland.",
    "plainLaw": "Rí i pé o lè gba ìwé ìrìnnà, àwọn ìfọwọ́sí, àdéhùn àti àlàyé àdírẹ́sì àkọ́kọ́ rẹ láìséwu.",
    "sourceLabel": "Wíwá ṣiṣẹ́ ní Ireland",
    "choices": {
      "copies": {
        "label": "Mú àwọn ìwé ojúlówó tí ìrìnàjò nílò, àwọn ẹ̀dà tí a pa mọ́ láìséwu àti àlàyé agbaniṣiṣẹ́ lọ.",
        "feedback": "Arìnrìnàjò yẹ kí ó lè ṣàlàyé ìrìnàjò tirẹ̀.",
        "consequence": "Àìsí ìgbì fóònù tàbí àìsí aṣojú ìgbaniṣiṣẹ́ kò mú gbogbo ẹ̀rí kúrò."
      },
      "company": {
        "label": "Rìnrìnàjò láìsí ìwé nítorí pé ilé iṣẹ́ ní wọn.",
        "feedback": "Má ṣe jọ̀wọ́ ìṣàkóso àwọn ìwé ìdánimọ̀ àti àṣẹ pàtàkì.",
        "consequence": "Arìnrìnàjò lè má lè fi ète ìrìnàjò hàn."
      },
      "different": {
        "label": "Sọ ìdí ìrìnàjò tí ó yàtọ̀ sí èyí tí o kọ sínú ìbéèrè.",
        "feedback": "Àlàyé yẹ kí ó jẹ́ òótọ́, kí ó sì bá ara rẹ̀ mu.",
        "consequence": "Àwọn ọ̀rọ̀ tí ó tako ara wọn lè ba ìrìnàjò jẹ́ ní ààlà."
      }
    }
  },
  "general:Arrive": {
    "eyebrow": "Àwọn ọ̀sẹ̀ àkọ́kọ́",
    "title": "Ya àìní kíákíá sọ́tọ̀ kúrò nínú àṣẹ òfin",
    "scene": "Ilé ìfowópamọ́, onílé àti agbaniṣiṣẹ́ kọ̀ọ̀kan ń béèrè ìwé ọ̀tọ̀ọ̀tọ̀ nígbà tí a ń dúró de ìpàdé ìforúkọsílẹ̀.",
    "question": "Báwo ló yẹ kí ẹni náà dáhùn?",
    "law": "IRP ń ṣàkọsílẹ̀ àṣẹ ìṣílọ. Àwọn ètò mìíràn, títí kan owó orí, ilé ìfowópamọ́ àti ilé gbígbé, ní ohun tí wọn ń béèrè, wọn kò sì rọ́pò rẹ̀.",
    "plainLaw": "Lo àwọn àtòjọ ìjọba, pa ẹ̀rí ìpàdé mọ́, kí o sì béèrè lọ́wọ́ iṣẹ́ kọ̀ọ̀kan ohun pàtó tí ó nílò.",
    "sourceLabel": "Fíforúkọ àṣẹ ìṣílọ sílẹ̀",
    "choices": {
      "organise": {
        "label": "Pa àkójọpọ̀ ìwé mọ́, tẹ̀lé ìtọ́sọ́nà ìforúkọsílẹ̀, kí o sì béèrè àtòjọ tirẹ̀ lọ́wọ́ iṣẹ́ kọ̀ọ̀kan.",
        "feedback": "Èyí ń dín ìdàrúdàpọ̀ láàárín àwọn ètò ọ̀tọ̀ọ̀tọ̀ kù.",
        "consequence": "Ìdádúró ṣì nira, ṣùgbọ́n ẹni náà lè fi ohun tí a ti parí hàn."
      },
      "one": {
        "label": "Rò pé ìwé kan gbọ́dọ̀ wúlò fún gbogbo iṣẹ́.",
        "feedback": "Àwọn ètò Ireland ń béèrè ìbéèrè ọ̀tọ̀ fún ète ọ̀tọ̀.",
        "consequence": "Ìbéèrè lè dáwọ́ dúró nítorí fífi ẹ̀rí tí kò yẹ ránṣẹ́ léraléra."
      },
      "fake": {
        "label": "Yí ìwé àdírẹ́sì padà láti mú iṣẹ́ yára.",
        "feedback": "Má ṣe fi ẹ̀rí èké tàbí èyí tí a yí padà sílẹ̀ láéláé.",
        "consequence": "Ọ̀nà àbùjá fún ìgbà díẹ̀ ń dá ewu líle sílẹ̀ fún òfin àti ìgbẹ́kẹ̀lé."
      }
    }
  },
  "general:Build a life": {
    "eyebrow": "Ìtọ́jú tó tọ́ ní iṣẹ́",
    "title": "Mọ ìnilára ní kùtùkùtù",
    "scene": "Ìwé àlàyé owó iṣẹ́ ní àyọkúrò tí a kò ṣàlàyé, agbaniṣiṣẹ́ sì béèrè láti gba ìwé ìrìnnà fún ‘ìtọ́jú láìséwu’.",
    "question": "Èwo ni ìdáhùn tó lágbára jù?",
    "law": "Òṣìṣẹ́ yẹ kí ó gba owó iṣẹ́, àwọn àdéhùn àti ìwé àlàyé owó iṣẹ́ tó bófin mu. Pípa àkọsílẹ̀ mọ́ àti lílo WRC tàbí ìrànlọ́wọ́ aṣíkiri amọ̀ṣẹ́ lè ṣe ìrànwọ́ láti yanjú ìnilára.",
    "plainLaw": "Pa ìwé ìrìnnà rẹ mọ́, fi ẹ̀rí pamọ́, kí o sì wá ìmọ̀ràn ní ìkọ̀kọ̀.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "evidence": {
        "label": "Pa ìwé ìrìnnà mọ́, fi àkọsílẹ̀ pamọ́, béèrè àlàyé, kí o sì kàn sí WRC tàbí olùdámọ̀ràn.",
        "feedback": "Àkọsílẹ̀ tó ṣe kedere ń mú kí ó rọrùn láti lóye ìṣòro náà àti láti tako rẹ̀.",
        "consequence": "Òṣìṣẹ́ lè wá ìrànlọ́wọ́ láìgbẹ́kẹ̀ lé àlàyé agbaniṣiṣẹ́ nìkan."
      },
      "hand": {
        "label": "Fi ìwé ìrìnnà fún agbaniṣiṣẹ́ nítorí pé òun ló ṣètò ìwé àṣẹ.",
        "feedback": "Òṣìṣẹ́ yẹ kí ó ṣì máa ṣàkóso àwọn ìwé ìdánimọ̀ tirẹ̀.",
        "consequence": "Agbaniṣiṣẹ́ gba ọ̀nà alágbára láti ṣàkóso ẹni náà."
      },
      "nothing": {
        "label": "Foju kọ àyọkúrò nítorí òṣìṣẹ́ aṣíkiri kò lè fi ẹ̀sùn ìṣòro hàn.",
        "feedback": "Àwọn òṣìṣẹ́ aṣíkiri ní ẹ̀tọ́ iṣẹ́ tí a lè fi òfin mú ṣẹ.",
        "consequence": "Ìwà tí kò bófin mu lè máa bá a lọ tàbí burú sí i."
      }
    }
  },
  "protection:Plan": {
    "eyebrow": "Àìní ààbò",
    "title": "Ààbò dá lórí ewu tí ẹni náà dojú kọ",
    "scene": "Pípadà dà bí ohun tí kò láàbò. Àwọn ọ̀rẹ́ ń fúnni ní ìmọ̀ràn tí ó tako ara wọn, ẹnìkan sì dábàá ṣíṣẹ̀dá ìtàn tó lágbára sí i.",
    "question": "Ìlànà wo ló yẹ kí ó darí ìgbésẹ̀ tó kàn?",
    "law": "Ààbò àgbáyé wà fún àwọn tí ń bẹ̀rù inúnibíni tàbí tí ń dojú kọ ewu ìpalára líle gidi. A ń ṣàyẹ̀wò ìbéèrè kọ̀ọ̀kan lórí òtítọ́ tirẹ̀ lábẹ́ òfin tó wúlò nígbà tí a fi í sílẹ̀.",
    "plainLaw": "Sọ ìtàn òótọ́ tirẹ, kí o sì wá àlàyé òfin ní ìkọ̀kọ̀ ní kùtùkùtù bí ó ti ṣeé ṣe.",
    "sourceLabel": "Irish Refugee Council: àwọn ìbéèrè lẹ́yìn 12 June 2026",
    "choices": {
      "truth": {
        "label": "Pa ẹ̀rí ara ẹni mọ́ níbi tí ó ti láàbò, sọ òótọ́, kí o sì wá àlàyé òfin tó ṣeé gbẹ́kẹ̀ lé.",
        "feedback": "Ìbéèrè ààbò gbọ́dọ̀ jẹ́ àlàyé ẹni náà fúnra rẹ̀.",
        "consequence": "Ọ̀ràn náà bẹ̀rẹ̀ pẹ̀lú àlàyé tó péye àti ìrànlọ́wọ́ tó yẹ."
      },
      "copy": {
        "label": "Da ìtàn tí ó ṣiṣẹ́ fún ẹlòmíràn kọ.",
        "feedback": "Àlàyé tí a dá sílẹ̀ tàbí tí a yá lè ba ìgbẹ́kẹ̀lé nínú ọ̀rọ̀ ẹni náà jẹ́ gan-an.",
        "consequence": "Ìlànà náà lè dojú kọ àìbáramu dípò ìbẹ̀rù gidi."
      },
      "work": {
        "label": "Fi ààbò hàn gẹ́gẹ́ bí ọ̀nà iṣẹ́ tó yára jù.",
        "feedback": "Ààbò àti ìṣílọ fún iṣẹ́ ní ète ọ̀tọ̀ọ̀tọ̀.",
        "consequence": "Ìpìlẹ̀ òfin gidi ti ìrìnàjò kò ṣe kedere mọ́."
      }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Ààbò àti ẹ̀rí",
    "title": "Àwọn ìwé ń rànni lọ́wọ́, ṣùgbọ́n ààbò ló ṣáájú",
    "scene": "Àwọn ẹ̀rí kan wà lórí fóònù tó bàjẹ́. Kò ṣeé ṣe láti mú àwọn ìwé mìíràn wá.",
    "question": "Èwo ni ọ̀nà tó tọ́?",
    "law": "Àwọn olùbéèrè yẹ kí wọ́n pèsè àlàyé tí ó wà, fọwọ́sowọ́pọ̀ pẹ̀lú ìlànà náà, kí wọ́n sì ṣàlàyé ẹ̀rí tó sọnù ní òótọ́. Wọ́n yẹ kí wọ́n sọ àìní ìtumọ̀ èdè, ipò àìláàbò àti ìrànlọ́wọ́ láti kópa.",
    "plainLaw": "Má ṣe dá ìwé tí kò sí. Ṣàlàyé ohun tí ó wà, ohun tí kò sí àti ìdí rẹ̀.",
    "sourceLabel": "International Protection Office",
    "choices": {
      "explain": {
        "label": "Pa ohun tí ó láàbò mọ́, ṣàlàyé àwọn ohun tí kò sí, kí o sì béèrè olùtumọ̀ tàbí ìrànlọ́wọ́ láti kópa bí ó bá yẹ.",
        "feedback": "Ìlànà náà yẹ kí ó gbọ́ àlàyé ẹni náà fúnra rẹ̀ pẹ̀lú ìrànlọ́wọ́ tó yẹ.",
        "consequence": "A dojú kọ ẹ̀rí tí kò sí ní gbangba dípò fífi í pamọ́."
      },
      "forge": {
        "label": "Ṣẹ̀dá ìwé àfirọ́pò tó dà bí ìwé aláṣẹ.",
        "feedback": "Ìwé èké lè ba ìbéèrè ààbò jẹ́ gan-an.",
        "consequence": "Àfiyèsí kúrò lórí ipò gidi, ó sì lọ sí ẹ̀tàn."
      },
      "silence": {
        "label": "Má sọ nípa ìpalára ọkàn, ìdánimọ̀ tàbí àìlera ara láéláé, bí ó tilẹ̀ jẹ́ pé ó ṣe pàtàkì.",
        "feedback": "A lè jíròrò àlàyé ẹlẹgẹ́ ní ìkọ̀kọ̀ pẹ̀lú àwọn amọ̀ṣẹ́ tí ń ṣèrànwọ́.",
        "consequence": "Àwọn àìní pàtàkì fún ààbò tàbí ìlànà lè má hàn."
      }
    }
  },
  "protection:Travel": {
    "eyebrow": "Dídé Ireland",
    "title": "Sọ ní kedere pé o nílò ààbò",
    "scene": "Ní ibùdó ìwọlé Ireland, ìbẹ̀rù àti àárẹ̀ ń mú kí ó nira láti ṣàlàyé ìdí tí pípadà kò fi láàbò.",
    "question": "Kí ló yẹ kí ẹni náà sọ?",
    "law": "Ẹni tó ń wá ibi ààbò yẹ kí ó sọ ní kedere pé òun fẹ́ ààbò àgbáyé, kí ó sì fọwọ́sowọ́pọ̀ pẹ̀lú ìlànà ìforúkọsílẹ̀ àti àyẹ̀wò tó yẹ.",
    "plainLaw": "Lo ọ̀rọ̀ tààrà: ‘Mo fẹ́ béèrè ààbò àgbáyé. Mo bẹ̀rù láti padà.’",
    "sourceLabel": "International Protection Office",
    "choices": {
      "ask": {
        "label": "Béèrè ààbò àgbáyé ní kedere, kí o sì béèrè ìtumọ̀ èdè bí ó bá yẹ.",
        "feedback": "Ìbánisọ̀rọ̀ tó ṣe kedere ń darí ẹni náà sínú ìlànà tó tọ́.",
        "consequence": "A lè ṣàkọsílẹ̀ ìbẹ̀rù pípadà tí a sọ, kí a sì ṣàyẹ̀wò rẹ̀."
      },
      "tourist": {
        "label": "Fi ìbẹ̀rù pamọ́, kí o sì sọ pé ìrìnàjò afẹ́ nìkan ni àbẹ̀wò náà.",
        "feedback": "Èyí kò fi àìní ààbò hàn.",
        "consequence": "Ẹni náà lè má wọ ìlànà tí a ṣe láti ṣàyẹ̀wò ewu náà."
      },
      "script": {
        "label": "Tún àlàyé tí a há sórí tí kò péye sọ.",
        "feedback": "Lo àwọn ọ̀rọ̀ òótọ́ ẹni náà fúnra rẹ̀.",
        "consequence": "Àìbáramu lè mú ìfọ̀rọ̀wánilẹ́nuwò tó ti nira tẹ́lẹ̀ túbọ̀ nira."
      }
    }
  },
  "protection:Arrive": {
    "eyebrow": "Ètò ìbéèrè àti ìgbàlejò",
    "title": "IPO àti IPAS ní ojúṣe ọ̀tọ̀ọ̀tọ̀",
    "scene": "Olùbéèrè nílò àlàyé òfin, ibùgbé àti ìrànlọ́wọ́ fún ọmọ láti gba àyè ní ilé ẹ̀kọ́.",
    "question": "Ètò wo ló mọ àwọn ojúṣe ọ̀tọ̀ọ̀tọ̀ náà?",
    "law": "IPO ń ṣàyẹ̀wò àwọn ìbéèrè ààbò. IPAS ni ó ń bójú tó ibùgbé ìgbàlejò àti ìrànlọ́wọ́ tó jọ mọ́ ọn. Ìrànlọ́wọ́ Òfin àti àwọn àjọ olómìnira ń pèsè ìrànlọ́wọ́ ọ̀tọ̀.",
    "plainLaw": "Ìpinnu ọ̀ràn, ibùgbé àti ìmọ̀ràn òfin wá láti àwọn iṣẹ́ ọ̀tọ̀ọ̀tọ̀.",
    "sourceLabel": "Ibùgbé àti ìrànlọ́wọ́ IPAS",
    "choices": {
      "roles": {
        "label": "Bá IPO sọ̀rọ̀ nípa ọ̀ràn náà, IPAS nípa àìní ìgbàlejò, àti agbẹjọ́rò nípa ìmọ̀ràn òfin.",
        "feedback": "Yíya àwọn ojúṣe sọ́tọ̀ ń mú kí ó rọrùn láti béèrè ìrànlọ́wọ́ lọ́wọ́ àjọ tó tọ́.",
        "consequence": "Àìní kíákíá àti ìbéèrè òfin lè tẹ̀ síwájú ní àwọn ọ̀nà tó yẹ."
      },
      "manager": {
        "label": "Béèrè lọ́wọ́ alábòójútó ibùgbé láti fọwọ́ sí ipò olùsádi.",
        "feedback": "Òṣìṣẹ́ ibùgbé kì í pinnu ìbéèrè ààbò.",
        "consequence": "Àkókò ń ṣòfò ní bíbéèrè ìpinnu òfin lọ́wọ́ ẹni tí kò yẹ."
      },
      "address": {
        "label": "Kó lọ láìfi tó àwọn aláṣẹ tàbí olùdámọ̀ràn òfin létí.",
        "feedback": "Àlàyé ìbánisọ̀rọ̀ yẹ kí ó máa jẹ́ ti ìsinsìnyí.",
        "consequence": "Àwọn ìpàdé tàbí ìpinnu pàtàkì lè kọjá ẹni náà."
      }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Dídúró àti kíkópa",
    "title": "Ṣàyẹ̀wò ẹ̀tọ́ lọ́wọ́lọ́wọ́ dípò gbígbẹ́kẹ̀ lé ahọ́n sọ",
    "scene": "Agbaniṣiṣẹ́ pèsè iṣẹ́, nígbà tí àwọn olùgbé mìíràn kò fohùn ṣọ̀kan lórí ìgbà tí olùbéèrè lè wọ ọjà iṣẹ́.",
    "question": "Kí ló yẹ kí olùbéèrè ṣe?",
    "law": "Ààyè sínú ọjà iṣẹ́ dá lórí òfin, àkókò àti àdéhùn tó kan ìbéèrè ẹni náà. Ẹ̀kọ́, ìlera, fífi ẹ̀sùn ìṣòro hàn àti ìrànlọ́wọ́ ọmọ ní òfin ọ̀tọ̀.",
    "plainLaw": "Ṣàyẹ̀wò yíyẹ lọ́wọ́lọ́wọ́, kí o sì gba àṣẹ tí a nílò kí o tó bẹ̀rẹ̀ iṣẹ́.",
    "sourceLabel": "Ibùdó Àlàyé Irish Refugee Council",
    "choices": {
      "current": {
        "label": "Ṣàyẹ̀wò òfin lọ́wọ́lọ́wọ́ fún ìbéèrè yìí, kí o sì bẹ̀rẹ̀ lẹ́yìn tí a bá fún ọ ní àṣẹ èyíkéyìí tí ó yẹ nìkan.",
        "feedback": "Èyí ń yẹra fún lílo òfin àtijọ́ tàbí ipò ẹlòmíràn fún ọ̀ràn náà.",
        "consequence": "Ìpinnu iṣẹ́ dá lórí àlàyé tuntun tó kan ẹni náà."
      },
      "rumour": {
        "label": "Bẹ̀rẹ̀ nítorí a ti gba olùgbé mìíràn láàyè láti ṣiṣẹ́.",
        "feedback": "Ẹlòmíràn lè ti béèrè lábẹ́ òfin ọ̀tọ̀ tàbí ní àkókò ọ̀tọ̀.",
        "consequence": "Olùbéèrè lè ṣe ohun kan láìsí àṣẹ tí ọ̀ràn tirẹ̀ nílò."
      },
      "never": {
        "label": "Rò pé olùbéèrè kò lè kẹ́kọ̀ọ́, ṣiṣẹ́ tàbí sọ ìṣòro láéláé.",
        "feedback": "Àwọn olùbéèrè ní ẹ̀tọ́ àti ọ̀nà ìrànlọ́wọ́, bí ó tilẹ̀ jẹ́ pé àwọn àdéhùn kan wà.",
        "consequence": "Àǹfààní àti ààbò lè kọjá wọn láìnídìí."
      }
    }
  },
  "study:Plan": {
    "eyebrow": "Ṣáájú gbígba àyè ẹ̀kọ́",
    "title": "Ṣàyẹ̀wò ètò ẹ̀kọ́ àti gbogbo owó rẹ̀",
    "scene": "Ìpèsè ilé ẹ̀kọ́ gíga ń dùn mọ́ni, ṣùgbọ́n ìṣúná tó fún owó ẹ̀kọ́ àti ọ̀sẹ̀ mẹ́fà ilé yíyá nìkan.",
    "question": "Kí ló yẹ kí a ṣàyẹ̀wò kí a tó dáwọ́ lé e?",
    "law": "Àṣẹ ẹ̀kọ́ dá lórí ètò ẹ̀kọ́, olùpèsè, owó, ìdánigbójú àti àwọn ohun ìṣílọ mìíràn tí a ń béèrè lọ́wọ́lọ́wọ́.",
    "plainLaw": "Jẹ́rìí pé ètò ẹ̀kọ́ náà yẹ, kí o sì ṣètò tó ṣeé ṣe fún owó ẹ̀kọ́, ilé gbígbé, ìdánigbójú àti ìgbésí ayé ojoojúmọ́.",
    "sourceLabel": "Wíwá kẹ́kọ̀ọ́ ní Ireland",
    "choices": {
      "budget": {
        "label": "Fìdí ètò ẹ̀kọ́ àti olùpèsè múlẹ̀, lẹ́yìn náà ṣe ìṣírò owó ẹ̀kọ́, ilé gbígbé, ìdánigbójú àti ìgbésí ayé.",
        "feedback": "Gbígba wọlé jẹ́ apá kan péré ti ìrìnàjò ẹ̀kọ́ tó ṣeé ṣe.",
        "consequence": "Akẹ́kọ̀ọ́ lè mọ̀ bóyá ètò náà ṣeé ṣe nípa owó àti òfin."
      },
      "job": {
        "label": "Rò pé iṣẹ́ àkókò díẹ̀ yóò san gbogbo owó lẹ́sẹ̀kẹsẹ̀.",
        "feedback": "Àṣẹ ní ààlà fún ẹ̀tọ́ iṣẹ́, kò sì sí ìdánilójú iṣẹ́.",
        "consequence": "Akẹ́kọ̀ọ́ lè dé láìsí ohun ìní tó tó fún àìní pàtàkì."
      },
      "deposit": {
        "label": "San owó fún aṣojú tí a kò fìdí rẹ̀ múlẹ̀ kí o tó ṣàyẹ̀wò ètò ẹ̀kọ́.",
        "feedback": "Fìdí ilé ẹ̀kọ́, ètò ẹ̀kọ́ àti ọ̀nà ìsanwó múlẹ̀ kọ́kọ́.",
        "consequence": "Owó lè sọnù lórí ètò ẹ̀kọ́ tí kò bá àṣẹ tí a fẹ́ mu."
      }
    }
  },
  "study:Prepare": {
    "eyebrow": "Àṣẹ ṣáájú ìgbéra",
    "title": "Gbígba wọlé sí ilé ẹ̀kọ́ kì í ṣe fìsá",
    "scene": "Ímeèlì ìtẹ́wọ́gbà dé, akẹ́kọ̀ọ́ sì rò pé òun nìkan ni ìwé tí a nílò fún ìrìnàjò.",
    "question": "Èwo ni ìgbésẹ̀ tó tọ́ tí ó kàn?",
    "law": "Àwọn akẹ́kọ̀ọ́ tí ó nílò fìsá sábà nílò fìsá ẹ̀kọ́ ìgbà pípẹ́ tó yẹ. Gbogbo akẹ́kọ̀ọ́ gbọ́dọ̀ lè fi ète àti àwọn àdéhùn ẹ̀kọ́ hàn.",
    "plainLaw": "Tẹ̀lé àtòjọ ìṣílọ akẹ́kọ̀ọ́ ti aláṣẹ; ìpèsè ilé ẹ̀kọ́ kò rọ́pò àṣẹ ìrìnàjò.",
    "sourceLabel": "Wíwá kẹ́kọ̀ọ́ ní Ireland",
    "choices": {
      "visa": {
        "label": "Tẹ̀lé ìlànà fìsá aláṣẹ bí ó bá yẹ, kí o sì ṣètò ẹ̀rí owó, ìdánigbójú àti ètò ẹ̀kọ́.",
        "feedback": "Èyí so ìpèsè ìwọlé sí ilé ẹ̀kọ́ mọ́ ọ̀nà ìṣílọ tó tọ́.",
        "consequence": "Ètò ẹ̀kọ́ tó pé, tí ó sì bá ara rẹ̀ mu ń ṣe àtìlẹ́yìn ìrìnàjò."
      },
      "offer": {
        "label": "Lo ímeèlì ìtẹ́wọ́gbà gẹ́gẹ́ bí fìsá aládàáṣe.",
        "feedback": "Gbígba wọlé sí ilé ẹ̀kọ́ àti àṣẹ ìṣílọ jẹ́ ọ̀tọ̀.",
        "consequence": "Ìrìnàjò lè já sí asán kí ẹ̀kọ́ tó bẹ̀rẹ̀."
      },
      "tourist": {
        "label": "Wọlé gẹ́gẹ́ bí arìnrìnàjò afẹ́, kí o sì yí ipò padà ní ìkọ̀kọ̀ lẹ́yìn tí kíláàsì bá bẹ̀rẹ̀.",
        "feedback": "Lo ọ̀nà ẹ̀kọ́ tó tọ́ ṣáájú ìrìnàjò.",
        "consequence": "Akẹ́kọ̀ọ́ lè má lè forúkọ àṣẹ tí ó fẹ́ sílẹ̀."
      }
    }
  },
  "study:Travel": {
    "eyebrow": "Ní àyẹ̀wò ààlà",
    "title": "Ètò ẹ̀kọ́ gbọ́dọ̀ ní ìtumọ̀",
    "scene": "Òṣìṣẹ́ náà béèrè ibi tí akẹ́kọ̀ọ́ yóò gbé, bí a ó ṣe san owó ẹ̀kọ́ àti ìgbà tí ó ń bẹ̀rẹ̀.",
    "question": "Báwo ló yẹ kí akẹ́kọ̀ọ́ dáhùn?",
    "law": "A ń ṣàyẹ̀wò wíwọlé ní ààlà. Àwọn ìwé àti ìdáhùn yẹ kí wọ́n fi ètò ẹ̀kọ́ gidi tí a ti múra sílẹ̀ fún hàn.",
    "plainLaw": "Mú ẹ̀rí òótọ́ ètò ẹ̀kọ́, owó, ìdánigbójú àti ibùgbé àkọ́kọ́ lọ.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "show": {
        "label": "Dáhùn ní òótọ́, kí o sì fi ẹ̀rí ètò ẹ̀kọ́, ìsanwó, ìdánigbójú, owó àti ibùgbé hàn.",
        "feedback": "Àwọn ìwé ń ti ète ẹ̀kọ́ tí a sọ lẹ́yìn.",
        "consequence": "Òṣìṣẹ́ náà lè lóye ètò láìgbẹ́kẹ̀ lé àròsọ."
      },
      "work": {
        "label": "Sọ pé iṣẹ́ alákòókò kíkún ni ète pàtàkì.",
        "feedback": "Èyí tako ìbéèrè ẹ̀kọ́.",
        "consequence": "Ète ìrìnàjò dà bí èyí tí kò bá ara rẹ̀ mu."
      },
      "guess": {
        "label": "Fojú díwọ̀n àdírẹ́sì ilé ẹ̀kọ́ àti ọjọ́ ẹ̀kọ́.",
        "feedback": "Àwọn akẹ́kọ̀ọ́ yẹ kí wọ́n mọ àlàyé pàtàkì ètò ẹ̀kọ́ tiwọn.",
        "consequence": "Ètò ẹ̀kọ́ lè má dà bí ohun gidi tàbí èyí tí a ti múra sílẹ̀ fún."
      }
    }
  },
  "study:Arrive": {
    "eyebrow": "Sáà ẹ̀kọ́ àkọ́kọ́",
    "title": "Forúkọ sílẹ̀, kí o sì máa kópa nínú ẹ̀kọ́",
    "scene": "Ìṣòro ilé gbígbé ń fa ìfẹ́ láti sún ìforúkọsílẹ̀ síwájú àti láti má lọ sí kíláàsì.",
    "question": "Ìdáhùn wo ló dáàbò bo ìrìnàjò ẹ̀kọ́ jù?",
    "law": "Àwọn akẹ́kọ̀ọ́ tí kì í ṣe ọmọ orílẹ̀-èdè EEA tí wọ́n yẹ, tí yóò dúró ju ọjọ́ 90 lọ, gbọ́dọ̀ forúkọ àṣẹ wọn sílẹ̀, kí wọ́n sì máa bá àwọn àdéhùn wíwá sí kíláàsì àti ètò ẹ̀kọ́ tó so mọ́ ọn mu.",
    "plainLaw": "Forúkọ sílẹ̀, máa kópa nínú ẹ̀kọ́, kí o sì sọ fún ilé ẹ̀kọ́ ní kùtùkùtù nígbà tí ìṣòro líle bá ń nípa lórí wíwá sí kíláàsì.",
    "sourceLabel": "Fíforúkọ àṣẹ ìṣílọ sílẹ̀",
    "choices": {
      "support": {
        "label": "Ṣètò ìforúkọsílẹ̀, lọ sí kíláàsì, kí o sì kàn sí ìrànlọ́wọ́ akẹ́kọ̀ọ́ ní kùtùkùtù nípa ilé gbígbé tàbí àlàáfíà.",
        "feedback": "Ìrànlọ́wọ́ ní kùtùkùtù ń mú kí ó rọrùn láti mú ojúṣe ìṣílọ àti ẹ̀kọ́ ṣẹ.",
        "consequence": "A ṣàkọsílẹ̀ ìṣòro kí wọ́n tó di àìwá tí kò ní àlàyé tàbí pípàdánù ipò."
      },
      "skip": {
        "label": "Dá wíwá sí kíláàsì dúró láìsọ fún ilé ẹ̀kọ́.",
        "feedback": "Kíkópa nínú ẹ̀kọ́ ṣe pàtàkì fún àṣẹ náà.",
        "consequence": "Àbájáde ẹ̀kọ́ àti ìṣílọ lè mú ìṣòro ilé gbígbé burú sí i."
      },
      "pps": {
        "label": "Lo nọ́ńbà PPS dípò ìforúkọsílẹ̀.",
        "feedback": "Nọ́ńbà PPS kì í ṣe àṣẹ ẹ̀kọ́.",
        "consequence": "Ìgbésẹ̀ ìforúkọsílẹ̀ ìgbé tí a nílò ṣì wà láìparí."
      }
    }
  },
  "study:Build a life": {
    "eyebrow": "Iṣẹ́, àwùjọ àti ìgbésẹ̀ tó kàn",
    "title": "Iṣẹ́ akẹ́kọ̀ọ́ ní ààlà",
    "scene": "Agbaniṣiṣẹ́ pèsè wákàtí iṣẹ́ alákòókò kíkún ní sáà ẹ̀kọ́, ó sì sọ pé kò sí ẹni tó ń ṣàyẹ̀wò àdéhùn akẹ́kọ̀ọ́.",
    "question": "Kí ló yẹ kí akẹ́kọ̀ọ́ ṣe?",
    "law": "Ẹ̀tọ́ akẹ́kọ̀ọ́ láti ṣiṣẹ́ dá lórí èdìdì àti àwọn àdéhùn lọ́wọ́lọ́wọ́. Lílọ kọjá wọn lè nípa lórí ipò ìṣílọ àti ẹ̀kọ́.",
    "plainLaw": "Ṣàyẹ̀wò wákàtí àti ọjọ́ tí àṣẹ akẹ́kọ̀ọ́ lọ́wọ́lọ́wọ́ gbà láàyè kí o tó gba ètò iṣẹ́.",
    "sourceLabel": "Àwọn èdìdì àṣẹ ìṣílọ",
    "choices": {
      "limits": {
        "label": "Ṣàyẹ̀wò àdéhùn Stamp 2 lọ́wọ́lọ́wọ́, kí o sì gba iṣẹ́ tó bá wọn mu nìkan.",
        "feedback": "Àdéhùn àṣẹ ṣe pàtàkì bí agbaniṣiṣẹ́ tilẹ̀ ń pèsè wákàtí púpọ̀ sí i.",
        "consequence": "Iṣẹ́ ń ran akẹ́kọ̀ọ́ lọ́wọ́ dípò fífi ètò ẹ̀kọ́ àti ipò sí ewu."
      },
      "full": {
        "label": "Gba wákàtí láìsí ààlà nítorí agbaniṣiṣẹ́ fọwọ́ sí wọn.",
        "feedback": "Agbaniṣiṣẹ́ kò lè mú àṣẹ ìṣílọ gbòòrò sí i.",
        "consequence": "Akẹ́kọ̀ọ́ lè rú àwọn àdéhùn ìgbé."
      },
      "cash": {
        "label": "Ṣiṣẹ́ láìforúkọ rẹ̀ sílẹ̀ kí wákàtí má bàa hàn.",
        "feedback": "Iṣẹ́ tí a kò fi hàn ń dá ewu iṣẹ́, owó orí àti ìṣílọ sílẹ̀.",
        "consequence": "Akẹ́kọ̀ọ́ pàdánù ààbò pàtàkì ní ibi iṣẹ́, ó sì dá ewu mìíràn sílẹ̀."
      }
    }
  },
  "family:Plan": {
    "eyebrow": "Ṣáájú ìṣílọ",
    "title": "Olùgbọ̀wọ́ ló ń pinnu ọ̀nà",
    "scene": "Ọkọ tàbí aya kan ní Ireland gbà pé ìgbéyàwó ń fúnni ní ẹ̀tọ́ kan náà pẹ̀lú jíjẹ́ ọmọ Ireland láìsí ìgbésẹ̀ mìíràn.",
    "question": "Kí ni a nílò láti fìdí múlẹ̀ lákọ̀ọ́kọ́?",
    "law": "Ọ̀nà ìdílé yàtọ̀ gẹ́gẹ́ bí olùgbọ̀wọ́ ṣe jẹ́ ọmọ Ireland, UK, EEA tàbí Switzerland, ẹni tí kì í ṣe ọmọ EEA, tàbí ẹni tí a fún ní ààbò àgbáyé.",
    "plainLaw": "Mọ ipò gangan olùgbọ̀wọ́ àti ẹ̀ka ìbáṣepọ̀ kí o tó yan fọ́ọ̀mù tàbí fìsá.",
    "sourceLabel": "Wíwá láti dara pọ̀ mọ́ ìdílé ní Ireland",
    "choices": {
      "sponsor": {
        "label": "Ṣàyẹ̀wò ipò olùgbọ̀wọ́, ẹ̀ka ìbáṣepọ̀ àti òfin ìnáwó àti ìwé tó wà lọ́wọ́lọ́wọ́.",
        "feedback": "Èyí ń fi ọ̀nà ìdílé tó tọ́ hàn.",
        "consequence": "A ń ṣètò ìbéèrè náà fún olùgbọ̀wọ́ àti ìbáṣepọ̀ gangan."
      },
      "marriage": {
        "label": "Rò pé ìwé ẹ̀rí ìgbéyàwó ń fúnni ní ẹ̀tọ́ wíwọlé àti iṣẹ́ láìsí ìgbésẹ̀ mìíràn.",
        "feedback": "Ẹ̀rí ìbáṣepọ̀ ṣe pàtàkì, ṣùgbọ́n ìlànà ìṣílọ ṣì kan ọ̀ràn náà.",
        "consequence": "Ẹni náà lè gbìyànjú láti rìnrìn àjò tàbí ṣiṣẹ́ láìní àṣẹ tí a nílò."
      },
      "form": {
        "label": "Lo fọ́ọ̀mù ìdílé àkọ́kọ́ tí o rí lórí ayélujára, láìka ipò olùgbọ̀wọ́ sí.",
        "feedback": "Àwọn olùgbọ̀wọ́ àti mẹ́ńbà ìdílé ọ̀tọ̀ọ̀tọ̀ ń tẹ̀lé ìlànà ọ̀tọ̀ọ̀tọ̀.",
        "consequence": "Ìbéèrè tí kò tọ́ lè fa ìdádúró tàbí kíkọ̀ tí a lè yẹra fún."
      }
    }
  },
  "family:Prepare": {
    "eyebrow": "Ẹ̀rí àti àṣẹ",
    "title": "Fi ètò ìdílé ojúlówó hàn",
    "scene": "Tọkọtaya náà ní ìfiránṣẹ́ àti ìbẹ̀wò láti ọ̀pọ̀ ọdún, ṣùgbọ́n ẹ̀rí ibùgbé àti ìnáwó wọn kò wà ní ètò.",
    "question": "Kí ni ìmúrasílẹ̀ tó dára jù?",
    "law": "Àwọn ìbéèrè ìdílé lè ṣàyẹ̀wò ìbáṣepọ̀ tó pé ìlànà mu, ìtóótun olùgbọ̀wọ́, ìnáwó, ibùgbé, ìgbẹ́kẹ̀lé àti àwọn ìlànà mìíràn tó jẹ́ ti ọ̀nà pàtó náà.",
    "plainLaw": "Lo àtòjọ àyẹ̀wò aláṣẹ, kí o sì ṣètò ẹ̀rí òtítọ́ nípa ìbáṣepọ̀ àti ètò tó ṣeé mú ṣẹ.",
    "sourceLabel": "Ìtọ́sọ́nà dídarapọ̀ mọ́ ìdílé",
    "choices": {
      "file": {
        "label": "Ṣètò àkójọ ẹ̀rí tó ṣe kedere ní lílo àtòjọ àyẹ̀wò, kí o sì ṣàlàyé àlàfo gidi èyíkéyìí.",
        "feedback": "Ẹ̀rí òtítọ́ tí a ṣètò dáadáa ń mú kí àyẹ̀wò ìbéèrè rọrùn sí i.",
        "consequence": "Ìtàn gidi àti ètò ìdílé náà hàn láìsí ohun èlò tí a dá sílẹ̀ lọ́nà èké."
      },
      "fake": {
        "label": "Dá àwọn ìwé sílẹ̀ fún àwọn àkókò tí ẹ̀rí kéré nípa wọn.",
        "feedback": "Ẹ̀rí èké lè ba ìbéèrè náà jẹ́ gidigidi.",
        "consequence": "Ìgbẹ́kẹ̀lé nínú gbogbo ìbéèrè náà lè bà jẹ́."
      },
      "ignore": {
        "label": "Foju kọ àwọn ohun tí a béèrè nípa ìnáwó tàbí ibùgbé nítorí pé ìbáṣepọ̀ náà jẹ́ ojúlówó.",
        "feedback": "Ìbáṣepọ̀ ojúlówó kò yọ gbogbo àdéhùn ọ̀nà náà kúrò.",
        "consequence": "Àlàfo ẹ̀rí tí a lè dènà lè dá ìbéèrè dúró tàbí mú kí ó kùnà."
      }
    }
  },
  "family:Travel": {
    "eyebrow": "Dídé gẹ́gẹ́ bí mẹ́ńbà ìdílé",
    "title": "Sọ ìdí gidi ní ààlà orílẹ̀-èdè",
    "scene": "Arìnrìn-àjò náà ní fìsá tàbí ìfọwọ́sí ṣáájú tó yẹ, ó sì ń gbèrò láti gbé pẹ̀lú olùgbọ̀wọ́.",
    "question": "Kí ló yẹ kí ó ṣẹlẹ̀ nígbà wíwọlé?",
    "law": "Níbi tí a ti nílò fìsá tàbí ìfọwọ́sí ṣáájú, ó ń ṣe àtìlẹ́yìn fún ìrìnàjò fún ìdí ìdílé tí a sọ. A ń gbé wíwọlé àti àṣẹ àkọ́kọ́ yẹ̀ wò ní ààlà orílẹ̀-èdè.",
    "plainLaw": "Ṣàlàyé ìdí ìdílé náà lọ́nà òtítọ́, kí o sì mú ìfọwọ́sí àti kúlẹ̀kúlẹ̀ olùgbọ̀wọ́ lọ́wọ́.",
    "sourceLabel": "Wíwá láti dara pọ̀ mọ́ ìdílé",
    "choices": {
      "family": {
        "label": "Sọ ìdí ìdílé náà, kí o sì fi ìfọwọ́sí, ìbáṣepọ̀ àti kúlẹ̀kúlẹ̀ àdírẹ́sì olùgbọ̀wọ́ hàn.",
        "feedback": "Àlàyé náà bá ìbéèrè àti àwọn ìwé mu.",
        "consequence": "Òṣìṣẹ́ aláṣẹ lè ṣàyẹ̀wò wíwọlé lórí ìpìlẹ̀ ìdílé tí a fẹ́."
      },
      "holiday": {
        "label": "Sọ pé ìsinmi kúkúrú nìkan ni bí ó tilẹ̀ jẹ́ pé ètò ni láti dúró.",
        "feedback": "Ìdí tí a sọ gbọ́dọ̀ jẹ́ òtítọ́.",
        "consequence": "Àlàyé náà ta ko ìbéèrè ìdílé àti gbígbé tí a pinnu."
      },
      "none": {
        "label": "Má mú ìsọfúnni ìkànsí olùgbọ̀wọ́ tàbí ibùgbé kankan lọ́wọ́.",
        "feedback": "Ẹ̀rí ìpìlẹ̀ nípa ìdílé àti ètò dídé gbọ́dọ̀ wà níbi tí a ti lè rí i gbà.",
        "consequence": "Ó lè nira fún arìnrìn-àjò láti ṣàlàyé ibi tí yóò gbé àti ẹni tí yóò bá gbé."
      }
    }
  },
  "family:Arrive": {
    "eyebrow": "Ìforúkọsílẹ̀ àti àwọn àdéhùn",
    "title": "Má ṣe méfò ohun tí èdìdì àṣẹ gbà láàyè",
    "scene": "Agbanisíṣẹ́ tó ń fúnni ní iṣẹ́ láti ọ̀nà jíjìn fẹ́ kí mẹ́ńbà ìdílé náà tún bẹ̀rẹ̀ iṣẹ́ lẹ́sẹ̀kẹsẹ̀ láti àdírẹ́sì Ireland.",
    "question": "Kí ló yẹ kí ẹni náà ṣe kí ó tó ṣiṣẹ́?",
    "law": "Ẹ̀tọ́ láti ṣiṣẹ́ sinmi lórí àṣẹ ìṣílọ tí a fúnni. Àwọn àṣẹ ìdílé lè yàtọ̀ gẹ́gẹ́ bí olùgbọ̀wọ́ àti ọ̀nà.",
    "plainLaw": "Forúkọ àṣẹ náà sílẹ̀ níbi tí a ti nílò rẹ̀, kí o sì fìdí àwọn àdéhùn iṣẹ́ rẹ̀ múlẹ̀ kí o tó bẹ̀rẹ̀ tàbí tún bẹ̀rẹ̀ iṣẹ́ ní Ireland.",
    "sourceLabel": "Àwọn èdìdì àṣẹ ìṣílọ",
    "choices": {
      "stamp": {
        "label": "Parí ìforúkọsílẹ̀ tí a nílò, kí o sì ṣàyẹ̀wò ohun gangan tí àṣẹ náà gbà láàyè.",
        "feedback": "Àwọn àdéhùn èdìdì tàbí IRP ń dáhùn ìbéèrè nípa iṣẹ́.",
        "consequence": "Iṣẹ́ bẹ̀rẹ̀ kìkì nígbà tí àṣẹ Ireland gbà á láàyè."
      },
      "spouse": {
        "label": "Rò pé gbogbo ọkọ tàbí aya ní ẹ̀tọ́ iṣẹ́ láìsí ààlà tàbí ìgbésẹ̀ mìíràn.",
        "feedback": "Kì í ṣe gbogbo àṣẹ ìdílé ni ó jọra pátápátá.",
        "consequence": "Iṣẹ́ lè bẹ̀rẹ̀ kí a tó pé àdéhùn tó ṣe pàtàkì mu."
      },
      "remote": {
        "label": "Rò pé iṣẹ́ òkè òkun tí a ń ṣe láti ọ̀nà jíjìn kò sí lábẹ́ àwọn àdéhùn ìṣílọ Ireland.",
        "feedback": "Ṣíṣiṣẹ́ nígbà tí ènìyàn wà ní Ireland fúnra rẹ̀ ṣì lè wà lábẹ́ òfin ìṣílọ, owó orí àti iṣẹ́ Ireland.",
        "consequence": "Ètò iṣẹ́ láti ọ̀nà jíjìn mú àwọn ọ̀rọ̀ òfin àti owó orí tí a kò retí wá."
      }
    }
  },
  "family:Build a life": {
    "eyebrow": "Òmìnira àti jíjẹ́ apá àwùjọ",
    "title": "Kọ́ ìrànlọ́wọ́ tó kọjá olùgbọ̀wọ́",
    "scene": "Ìṣílọ náà ń mú ìmọ̀lára ìdánìkanwà wá, mẹ́ńbà ìdílé náà sì gbẹ́kẹ̀lé olùgbọ̀wọ́ fún gbogbo ìwé, ìpàdé àti ìbáṣepọ̀ àwùjọ.",
    "question": "Ìgbésẹ̀ wo ló ń mú ààbò pọ̀ sí i?",
    "law": "Àwọn aṣílọ lè wá ìsọfúnni olómìnira nípa ìṣílọ, iṣẹ́, ìlera, ààbò àti iṣẹ́ agbègbè. Ìrànlọ́wọ́ pàjáwìrì àti ti amọ̀ja ṣì wà nígbà tí ìbáṣepọ̀ bá di aláìléwu.",
    "plainLaw": "Pa ẹ̀dà àwọn ìwé tirẹ mọ́, kí o sì kọ́ bí a ṣe ń kàn sí àwọn iṣẹ́ olómìnira.",
    "sourceLabel": "Irish Immigration Service",
    "choices": {
      "network": {
        "label": "Pa ẹ̀dà àwọn ìwé ara ẹni mọ́, kí o sì so pọ̀ mọ́ ìmọ̀ràn olómìnira, àwọn iṣẹ́ àwùjọ àti ìlera.",
        "feedback": "Àjọṣepọ̀ ìrànlọ́wọ́ tó gbòòrò sí i ń mú òmìnira nínú ìgbésí ayé àti ààbò pọ̀ sí i.",
        "consequence": "Ẹni náà lè ṣe ìpinnu tó dá lórí ìsọfúnni tó péye láìgbẹ́kẹ̀lé ìbáṣepọ̀ kan fún gbogbo ohun."
      },
      "all": {
        "label": "Jẹ́ kí olùgbọ̀wọ́ pa gbogbo ìwé àti ọ̀rọ̀ aṣínà mọ́.",
        "feedback": "Àwọn àgbàlagbà gbọ́dọ̀ pa ọ̀nà ààbò láti rí ìsọfúnni ìdánimọ̀ àti àkọọ́lẹ̀ tiwọn gbà mọ́.",
        "consequence": "Gbogbo ìpinnu ìgbésí ayé di ohun tó sinmi lé olùgbọ̀wọ́."
      },
      "silent": {
        "label": "Yẹra fún ìrànlọ́wọ́ nítorí pé bíbéèrè ìbéèrè lè kan ipò.",
        "feedback": "Ìsọfúnni tó ṣeé gbẹ́kẹ̀lé tí a sì pa mọ́ ní àṣírí ń ran ènìyàn lọ́wọ́ láti lóye àwọn àṣàyàn wọn.",
        "consequence": "Àwọn ìṣòro lè le sí i kí a tó wá ìrànlọ́wọ́."
      }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Ààbò, àìlera ara àti títọ́ ọmọ",
    "title": "Ààbò àti ìrọ̀rùn lílo iṣẹ́ jẹ́ ọ̀rọ̀ ọ̀tọ̀ọ̀tọ̀",
    "scene": "A sọ fún Adama pé lílo àga kẹ̀kẹ́ yóò yálà jẹ́ kí ààbò dájú tàbí dènà fún un láti béèrè pẹ̀lú ọmọkùnrin rẹ̀.",
    "question": "Kí ló yẹ kí ó tọ́ ìpinnu rẹ̀ sọ́nà?",
    "law": "A ń ṣàyẹ̀wò ìbéèrè ààbò lórí ewu inúnibíni tàbí ìpalára ńlá fún ẹnìkọ̀ọ̀kan. Àìlera ara àti jíjẹ́ òbí anìkan lè mú àìní ìtẹ́wọ́gbà tàbí ìlànà pàtàkì wá, ṣùgbọ́n àwọn nǹkan wọ̀nyí fúnra wọn kò pinnu ìbéèrè náà.",
    "plainLaw": "Ṣàlàyé ìbẹ̀rù gidi nípa pípàdà sílé, kí o sì ṣàlàyé lọ́tọ̀ ìrànlọ́wọ́ tí a nílò láti kópa nínú ìlànà náà láìsí ewu.",
    "sourceLabel": "Irish Refugee Council: àwọn ìbéèrè lẹ́yìn 12 Oṣù Kẹfà 2026",
    "choices": {
      "separate": {
        "label": "Ṣàlàyé ewu tó jẹ́ ìdí fún ààbò lọ́nà òtítọ́, kí o sì ṣe àtòjọ ọ̀tọ̀ fún àìní rírìn kiri, ìlera àti títọ́ ọmọ.",
        "feedback": "Èyí ń jẹ́ kí ìbéèrè òfin àti àwọn àìní ìrọ̀rùn lílo iṣẹ́ méjèèjì hàn.",
        "consequence": "Àwọn olùpinnu gba àlàyé ààbò, nígbà tí àwọn òṣìṣẹ́ ìtẹ́wọ́gbà lè mọ ìrànlọ́wọ́ tó wúlò."
      },
      "guarantee": {
        "label": "Rò pé àìlera ara ń jẹ́ kí ipò olùsádi dájú láìsí ìgbésẹ̀ mìíràn.",
        "feedback": "Ìpalárarọrùn àti àwọn ìlànà òfin fún ààbò kì í ṣe ohun kan náà.",
        "consequence": "A lè má ṣàlàyé ìbẹ̀rù ti ara ẹni nípa pípàdà sílé dáadáa."
      },
      "hide": {
        "label": "Fi àìlera ara pamọ́ nítorí pé òbí tó nílò ìrànlọ́wọ́ kò lè béèrè.",
        "feedback": "Àìlera ara kò yọ ẹ̀tọ́ láti wá ààbò kúrò.",
        "consequence": "A lè pàdánù ìrànlọ́wọ́ ìtẹ́wọ́gbà àti ìlànà tó ṣe pàtàkì."
      }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Àyẹ̀wò àkọ́kọ́ àti ìpalárarọrùn",
    "title": "Dárúkọ gbogbo àìní, kì í ṣe èyí tó hàn jù nìkan",
    "scene": "Àga kẹ̀kẹ́ hàn kedere, ṣùgbọ́n ìrora pípẹ́, ọgbẹ́ ọkàn, oògùn àti títọ́jú ọmọ ọlọ́dún mẹ́fà kò hàn.",
    "question": "Báwo ni Adama ṣe yẹ kí ó ṣe sí àyẹ̀wò ìpalárarọrùn?",
    "law": "Lábẹ́ ètò 2026, a ń fún àwọn olùbéèrè ní àǹfààní àyẹ̀wò ìpalárarọrùn tí ó jẹ́ àṣàyàn wọn. Àìlera ara, jíjẹ́ òbí anìkan, àìsàn tó le àti ìrírí ìwà ipá wà lára àwọn ẹ̀ka tí a mọ̀ tí a ń lò láti ṣàwárí àìní ìtẹ́wọ́gbà pàtàkì.",
    "plainLaw": "Lo àyẹ̀wò náà láti ṣàlàyé àìní tí kò hàn àti èyí tó hàn, kí o sì béèrè pé kí a kọ ìsọfúnni náà sílẹ̀ lọ́nà tó péye.",
    "sourceLabel": "Àyẹ̀wò ìpalárarọrùn IPAS",
    "choices": {
      "full": {
        "label": "Ṣàpèjúwe àìní rírìn kiri, ìrora, oògùn, ọgbẹ́ ọkàn àti títọ́ ọmọ, ní lílo ògbufọ̀ bí a bá nílò rẹ̀.",
        "feedback": "Àwọn àìní tó parapọ̀ lè nílò ìgbésẹ̀ ìrànlọ́wọ́ ọ̀tọ̀ọ̀tọ̀.",
        "consequence": "Àyẹ̀wò náà ní ìpìlẹ̀ tó pé sí i fún ibùgbé àti fífi ènìyàn sí ọwọ́ àwọn iṣẹ́ ìrànlọ́wọ́."
      },
      "chair": {
        "label": "Dárúkọ àga kẹ̀kẹ́ nìkan nítorí pé gbogbo ohun yòókù jẹ́ ọ̀rọ̀ àṣírí.",
        "feedback": "Òun ló ń ṣàkóso ohun tí ó sọ, ṣùgbọ́n ó lè nira sí i láti pèsè fún àìní tí a kò kọ sílẹ̀.",
        "consequence": "Àwọn ìdènà ìrora, oògùn tàbí títọ́ ọmọ lè má hàn títí ìṣòro ńlá yóò fi ṣẹlẹ̀."
      },
      "refuse": {
        "label": "Kọ̀ nítorí pé gbígba àyẹ̀wò ń sọ ìbéèrè ààbò di aláìlágbára.",
        "feedback": "Àṣàyàn ẹni ni àyẹ̀wò náà, ó sì ń bójú tó àìní ìrànlọ́wọ́ dípò pípinnu ipò ààbò.",
        "consequence": "A pàdánù ọ̀nà láti ṣàwárí àìní ìtẹ́wọ́gbà pàtàkì nítorí ìdí tí kò tọ́."
      }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Lílọ láàárín ètò ìtẹ́wọ́gbà",
    "title": "Ibi sísùn tí a pèsè ṣì lè jẹ́ aláìṣeélò",
    "scene": "A ṣètò ìrìnnà sí ibùgbé, ṣùgbọ́n Adama gbọ́ pé yàrá rẹ̀ wà ní òkè àti pé kò lè lo yàrá ìwẹ̀ láìsí ewu.",
    "question": "Ìdáhùn wo ló ń ṣe àkọsílẹ̀ tó ṣe kedere jù?",
    "law": "IPAS ń lo ìsọfúnni ìpalárarọrùn láti bójú tó àìní ìtẹ́wọ́gbà pàtàkì. Àwọn ìlànà gbígbé lọ sí ibòmíràn ní fífi ọ̀rọ̀ ìlera ṣáájú tàbí fún ìdí àrà ọ̀tọ̀, àti àfikún àgbéyẹ̀wò wà, bí ó tilẹ̀ jẹ́ pé kò sí ìdánilójú ibi tí ẹni fẹ́ tàbí gbígbé lọ lẹ́sẹ̀kẹsẹ̀.",
    "plainLaw": "Ṣàpèjúwe ìdènà ìrọ̀rùn gangan ní kíkọ, pèsè ẹ̀rí ìlera tó wà, kí o sì lo ìlànà aláṣẹ láti gbé ọ̀rọ̀ náà lọ sí ìpele tó ga jù.",
    "sourceLabel": "Ibùgbé àti àgbéyẹ̀wò ọ̀rọ̀ ìlera IPAS",
    "choices": {
      "record": {
        "label": "Ròyìn ìdènà gangan lẹ́sẹ̀kẹsẹ̀, pa àwọn ẹ̀dà mọ́, kí o sì béèrè àgbéyẹ̀wò ìlera tàbí ti ìdí àrà ọ̀tọ̀ nípasẹ̀ IPAS.",
        "feedback": "Ẹ̀rí pàtó tí a kọ sílẹ̀ lágbára ju ìbéèrè gbogbogbò láti ṣí lọ.",
        "consequence": "IPAS lè ṣàyẹ̀wò ìṣòro ààbò àti ìrọ̀rùn gangan nípasẹ̀ ìlànà tó yẹ."
      },
      "leave": {
        "label": "Kúrò láìsọ fún ẹnikẹ́ni, kí o sì rò pé yàrá mìíràn yóò wà.",
        "feedback": "Kíkúrò lè ya á kúrò nínú ìrànlọ́wọ́ ìtẹ́wọ́gbà láìyanjú ìdènà náà.",
        "consequence": "Adama àti ọmọ rẹ̀ lè di aláìnílé, ó sì lè nira sí i láti kàn sí wọn."
      },
      "accept": {
        "label": "Lo yàrá aláìléwu náà nítorí pé olùgbé kò lè tako bí ibùgbé ṣe yẹ fún wọn.",
        "feedback": "A lè sọ ìdààmú nípa ibùgbé àti àìní pàtàkì.",
        "consequence": "Ṣíṣubú, àìrí ìmọ́tótó tó yẹ ṣe àti ìrora tó ń le sí i túbọ̀ ṣeé ṣe."
      }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Ìrọ̀rùn kíkópa nínú ìfọ̀rọ̀wánilẹ́nuwò",
    "title": "Kíkópa lè nílò àwọn àtúnṣe",
    "scene": "Ibi ìfọ̀rọ̀wánilẹ́nuwò, jíjókòó fún àkókò gígùn àti àwọn ipa ẹ̀gbẹ́ oògùn lè dènà fún Adama láti sọ àlàyé tó pé.",
    "question": "Kí ló yẹ kí ó ṣe ṣáájú ìpàdé tí a yàn?",
    "law": "Àwọn olùbéèrè gbọ́dọ̀ wá sí ìpàdé kí wọ́n sì fọwọ́sowọ́pọ̀ pẹ̀lú ìlànà náà, kí wọ́n sì sọ nípa àìlera ara, ìbánisọ̀rọ̀, ìlera àti àwọn àìní ìlànà mìíràn ní kíákíá bí ó ti ṣeé ṣe. Ìmọ̀ràn amọ̀ja òfin lè ṣèrànwọ́ láti ṣàlàyé àwọn àtúnṣe tó yẹ àti ààlà àkókò.",
    "plainLaw": "Sọ fún IPO àti olùgbaninímọ̀ràn òfin nípa ohun tó ń mú kíkópa nira ṣáájú ìfọ̀rọ̀wánilẹ́nuwò, kì í ṣe lẹ́yìn tí kò bá ṣiṣẹ́ nìkan.",
    "sourceLabel": "Irish Refugee Council Independent Law Centre",
    "choices": {
      "early": {
        "label": "Kàn sí IPO àti olùgbaninímọ̀ràn òfin ní kutukutu pẹ̀lú ìdààmú pàtó nípa ìrọ̀rùn, ìsinmi láàárín ìpàdé, oògùn àti ìtọ́jú ọmọ.",
        "feedback": "Ìfitónilétí pàtó ṣáájú ń fún ètò náà ní àǹfààní láti dáhùn.",
        "consequence": "Adama lè kópa dáadáa sí i, a sì lè ṣètò ìtọ́jú ọmọkùnrin rẹ̀."
      },
      "miss": {
        "label": "Má lọ sí ìfọ̀rọ̀wánilẹ́nuwò láìkàn sí wọn nítorí pé àìlera ara ń jẹ́ ìdáláre àìwá láìsí àlàyé mìíràn.",
        "feedback": "Má rò pé àìwá yóò ṣàlàyé ara rẹ̀.",
        "consequence": "A lè pàdánù ìgbésẹ̀ ìlànà tó ṣe pàtàkì láìlóye ìdí rẹ̀."
      },
      "endure": {
        "label": "Má sọ ohunkóhun, kí o sì tẹ̀síwájú kódà nígbà tí ìrora bá ń kan ìfọkànsìn.",
        "feedback": "Ìṣòro tí a kò ṣàlàyé lè kan bí a ṣe gbọ́ àlàyé náà àti bí a ṣe kọ ọ́ sílẹ̀.",
        "consequence": "A lè fi kúlẹ̀kúlẹ̀ pàtàkì sílẹ̀ tàbí kí ó dà bí ohun tí kò bá ara rẹ̀ mu."
      }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Ìlera, ilé-ẹ̀kọ́ àti òmìnira",
    "title": "Ìpàdé kan kò lè yanjú gbogbo ìdènà",
    "scene": "Adama nílò dókítà gbogbogbò (GP), ìtẹ̀síwájú oògùn láìdáwọ́ dúró, àyè ilé-ẹ̀kọ́, ìrìnnà tó rọrùn fún un láti lò àti ìsọfúnni nípa ìtóótun fún iṣẹ́.",
    "question": "Ètò wo ló ṣeé mú ṣẹ jù?",
    "law": "Ìtọ́jú ìlera, ẹ̀kọ́, ibùgbé ìtẹ́wọ́gbà àti àṣẹ láti wọ ọjà iṣẹ́ ń ṣiṣẹ́ nípasẹ̀ àwọn iṣẹ́ Ireland àti òfin ìtóótun ọ̀tọ̀ọ̀tọ̀. IPAS ń tẹ àwọn ọ̀nà ọ̀tọ̀ àti ìsọfúnni ìrànlọ́wọ́ fún ọ̀kọ̀ọ̀kan jáde.",
    "plainLaw": "Ṣètò ìgbésẹ̀ àti ẹni ìkànsí ọ̀tọ̀ fún ìlera, ilé-ẹ̀kọ́, ibùgbé àti ìṣílọ dípò dídúró de iṣẹ́ kan láti ṣàkóso gbogbo ohun.",
    "sourceLabel": "Àwọn iṣẹ́ àti ìrànlọ́wọ́ IPAS",
    "choices": {
      "plan": {
        "label": "Ṣe ètò alápá mẹ́rin, kí o sì wá agbẹnusọ tàbí òṣìṣẹ́ ìrànlọ́wọ́ láti ṣètò àwọn iṣẹ́ tó nílò ìgbésẹ̀ kíákíá papọ̀.",
        "feedback": "Ìṣètò papọ̀ ṣe pàtàkì nítorí pé ètò kọ̀ọ̀kan ní ipa ọ̀tọ̀.",
        "consequence": "A lè fi oògùn àti ilé-ẹ̀kọ́ sí ipò àkọ́kọ́ láìgbàgbé ojúṣe ibùgbé tàbí ọ̀ràn náà."
      },
      "ipo": {
        "label": "Béèrè lọ́wọ́ òṣìṣẹ́ IPO tó ń bójú tó ọ̀ràn náà láti ṣètò gbogbo iṣẹ́ ìlera, ilé-ẹ̀kọ́ àti ìrìnnà.",
        "feedback": "IPO ń ṣàyẹ̀wò ìbéèrè ààbò; kì í ṣe òun ló ń darí gbogbo iṣẹ́ fún ẹni tó ṣẹ̀ṣẹ̀ dé.",
        "consequence": "A darí àwọn àìní tó nílò ìgbésẹ̀ kíákíá sí àjọ tí kò tọ́."
      },
      "wait": {
        "label": "Dúró de ipò ààbò kí o tó wá ìtọ́jú ìlera tàbí àyè ilé-ẹ̀kọ́.",
        "feedback": "Àwọn olùbéèrè àti ọmọ lè lo àwọn iṣẹ́ nígbà tí ọ̀ràn ṣì ń lọ, gẹ́gẹ́ bí òfin tó yẹ ṣe gbà.",
        "consequence": "Ìlera ń bà jẹ́, ọmọ náà sì ń pàdánù àkókò ẹ̀kọ́ láìnídìí."
      }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "Òmìnira ìrìnàjò àti ìgbégbé nínú EU",
    "title": "Elena kò nílò ìwé àṣẹ iṣẹ́",
    "scene": "Aṣojú kan tó ń gba òṣìṣẹ́ sọ fún Elena pé àwọn ọmọ orílẹ̀-èdè Bulgaria nílò ìwé àṣẹ iṣẹ́ kan náà bí àwọn òṣìṣẹ́ tí kì í ṣe ọmọ EEA, ó sì fẹ́ tà á fún un.",
    "question": "Kí ni ó yẹ kí ó ṣàyẹ̀wò láti fi ìdí rẹ̀ múlẹ̀?",
    "law": "Gẹ́gẹ́ bí ọmọ orílẹ̀-èdè EU, Elena lè wọ Ireland pẹ̀lú ìwé ìrìnnà tàbí káàdì ìdánimọ̀ orílẹ̀-èdè tó ṣì wúlò, ó sì lè ṣiṣẹ́ láìní ìwé àṣẹ iṣẹ́ ti Ireland. Àwọn ipò kan kan gbígbé níbẹ̀ lẹ́yìn àkókò àkọ́kọ́.",
    "plainLaw": "Má ṣe sanwó fún ìwé àṣẹ iṣẹ́ tí ọmọ orílẹ̀-èdè EU kò nílò; ṣàyẹ̀wò àwọn òfin ọ̀tọ̀ fún gbígbé níbẹ̀ fún àkókò gígùn.",
    "sourceLabel": "Wíwá láti EU/EEA láti ṣiṣẹ́",
    "choices": {
      "eu": {
        "label": "Kọ̀ láti ra ìwé àṣẹ náà, ṣàyẹ̀wò agbanisíṣẹ́ kí o sì lo ìsọfúnni aláṣẹ nípa ẹ̀tọ́ gbígbé fún àwọn ọmọ EU.",
        "feedback": "Jíjẹ́ ọmọ orílẹ̀-èdè EU yí ọ̀nà ìṣílọ rẹ̀ padà, ṣùgbọ́n ó ṣì nílò iṣẹ́ gidi.",
        "consequence": "Elena yẹra fún ìtànjẹ, ó sì gbèrò lórí àwọn ẹ̀tọ́ òmìnira ìrìnàjò àti ìgbégbé tó ní ní ti gidi."
      },
      "buy": {
        "label": "Sanwó nítorí pé ọjọ́-orí rẹ̀ àti jíjẹ́ ọmọ ẹ̀yà Roma mú kí ó nílò ìwé àṣẹ pàtàkì kan.",
        "feedback": "Àwọn àbùdá ìdánimọ̀ yẹn kò mú kí ọmọ orílẹ̀-èdè EU nílò ìwé àṣẹ iṣẹ́.",
        "consequence": "Ó fi owó àti àwọn ìwé àkọsílẹ̀ tó ní ìsọfúnni àṣírí sí ọwọ́ aṣojú agbanisíṣẹ́ tí kì í ṣe olóòótọ́."
      },
      "visitor": {
        "label": "Fi ètò láti ṣiṣẹ́ pamọ́ nítorí pé àbẹ̀wò nìkan ni àwọn ọmọ orílẹ̀-èdè EU lè ṣe.",
        "feedback": "Àwọn ọmọ orílẹ̀-èdè EU ní ẹ̀tọ́ láti ṣiṣẹ́ ní orílẹ̀-èdè EU mìíràn, lábẹ́ àwọn òfin ìgbégbé tó kan wọn.",
        "consequence": "Elena kò lóye ìpìlẹ̀ òfin tó ní ní ti gidi, kò sì lo ẹ̀tọ́ yẹn bí ó ti lè lò ó."
      }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "Gbígbé lẹ́yìn àwọn oṣù àkọ́kọ́",
    "title": "Òmìnira ìrìnàjò àti ìgbégbé ṣì ní àwọn ipò ìgbégbé",
    "scene": "Elena fẹ́ máa gbé níbẹ̀ láìní ọjọ́ ìpadà, ṣùgbọ́n ìlérí iṣẹ́ àkókò díẹ̀ tí kì í ṣe ti déédéé nìkan ló ní, ó sì fẹ́rẹ̀ẹ́ má ní owó ìfipamọ́ kankan.",
    "question": "Ètò wo ni ó ṣeé gbára lé jù?",
    "law": "Àwọn ọmọ orílẹ̀-èdè EU lè gbé ní Ireland ní àkókò àkọ́kọ́, wọ́n sì lè dúró fún àkókò tó gùn sí i nígbà tí wọ́n bá ń lo ẹ̀tọ́ kan lábẹ́ Àdéhùn EU, bíi ṣíṣiṣẹ́, ṣíṣe iṣẹ́ àdáni, ẹ̀kọ́ tó bá àwọn ìlànà mu tàbí níní ohun ìgbẹ́mìíró tó tó fúnra wọn. Àwọn tó ń wá iṣẹ́ ní àwọn ààbò àti ipò pàtó.",
    "plainLaw": "Pa ẹ̀rí iṣẹ́ gidi tàbí wíwá iṣẹ́ mọ́, kí o sì lóye ìpìlẹ̀ tó ń ṣètìlẹ́yìn fún ẹ̀tọ́ gbígbé lẹ́yìn àkókò àkọ́kọ́.",
    "sourceLabel": "Ẹ̀tọ́ àwọn ọmọ orílẹ̀-èdè EU láti gbé ní Ireland",
    "choices": {
      "evidence": {
        "label": "Pa àwọn ìbéèrè iṣẹ́, àdéhùn iṣẹ́, ìwé àlàyé owó oṣù àti àkọsílẹ̀ ilé gbígbé mọ́ nígbà tí o ń ṣàyẹ̀wò ìpìlẹ̀ ẹ̀tọ́ ìgbégbé tó kan ọ.",
        "feedback": "Ẹ̀rí ń ṣèrànwọ́ láti fi hàn pé Elena ń ṣiṣẹ́ tàbí pé ó ń wá iṣẹ́ ní ti gidi.",
        "consequence": "Ètò rẹ̀ fún àkókò gígùn dúró lórí ìpìlẹ̀ ẹ̀tọ́ Àdéhùn EU tí ó ní àkọsílẹ̀ ẹ̀rí."
      },
      "forever": {
        "label": "Rò pé jíjẹ́ ọmọ orílẹ̀-èdè EU fún ènìyàn ní ẹ̀tọ́ ìgbégbé títí láé láìsí àdéhùn kankan láti ọjọ́ àkọ́kọ́.",
        "feedback": "Ìwọlé àkọ́kọ́ àti ìgbégbé fún àkókò gígùn kì í ṣe ohun kan náà.",
        "consequence": "Elena lè má mọ̀ pé ìṣòro kan wà pẹ̀lú ẹ̀tọ́ ìgbégbé rẹ̀ títí yóò fi gbìyànjú láti rí iṣẹ́ ìrànlọ́wọ́ mìíràn gbà."
      },
      "cash": {
        "label": "Gba iṣẹ́ tí a ń san ní owó lọ́wọ́ láìsí àkọsílẹ̀ nítorí pé iṣẹ́ èyíkéyìí fi ẹ̀tọ́ ìgbégbé hàn.",
        "feedback": "Iṣẹ́ tí a kò kéde fún àwọn aláṣẹ ń sọ ààbò òṣìṣẹ́ di aláìlágbára, ó sì lè má pèsè ẹ̀rí tí a lè lò.",
        "consequence": "Bí wọ́n ṣe ń fi í jẹ pọ̀ sí i nígbà tí ìtàn iṣẹ́ rẹ̀ ṣì ṣòro láti fi ẹ̀rí múlẹ̀."
      }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "Bíbẹ̀rẹ̀ iṣẹ́",
    "title": "Nọ́mbà PPS àti IRP kì í ṣe ìwé àṣẹ iṣẹ́ EU",
    "scene": "Hótẹ́ẹ̀lì náà béèrè Ìwé Àṣẹ Ìgbégbé ní Ireland (Irish Residence Permit) lọ́wọ́ Elena kí wọ́n tó lè fi í sínú àtòjọ àkókò iṣẹ́.",
    "question": "Báwo ni ó ṣe yẹ kí ó dáhùn?",
    "law": "Ní gbogbogbòò, àwọn ọmọ orílẹ̀-èdè EU kì í forúkọsílẹ̀ pẹ̀lú Immigration Service Delivery tàbí gba IRP láti lo ẹ̀tọ́ EU tiwọn. Nọ́mbà PPS jẹ́ àmì ìdánimọ̀ ọ̀tọ̀ fún owó-orí àti àwọn iṣẹ́ ìjọba.",
    "plainLaw": "Fi ìdánimọ̀ EU hàn, kí o sì ṣàlàyé ìpìlẹ̀ ẹ̀tọ́ iṣẹ́ tó tọ́; ṣe àwọn ìgbésẹ̀ owó-orí àti PPS lọ́tọ̀.",
    "sourceLabel": "Àwọn ọmọ orílẹ̀-èdè EU tí ń ṣiṣẹ́ ní Ireland",
    "choices": {
      "explain": {
        "label": "Fi ìwé ìdánimọ̀ rẹ̀ ti Bulgaria hàn, kí ó sì ní kí ẹ̀ka HR ṣàyẹ̀wò àwọn òfin fún òṣìṣẹ́ EU.",
        "feedback": "Èyí tún ohun tí wọ́n ń béèrè ṣe láìṣe ìwé èké kan tí kò yẹ kí ó ní.",
        "consequence": "Agbanisíṣẹ́ lè forúkọ rẹ̀ sílẹ̀ fún iṣẹ́ lórí ìpìlẹ̀ EU tó tọ́."
      },
      "fake": {
        "label": "Ra IRP èké nítorí pé agbanisíṣẹ́ tẹnumọ́ ọn.",
        "feedback": "Má ṣe ṣe tàbí ra àwọn ìwé ìṣílọ èké láéláé.",
        "consequence": "Àṣìṣe agbanisíṣẹ́ di ìṣòro òfin ńlá fún Elena."
      },
      "ppswork": {
        "label": "Sọ pé nọ́mbà PPS ni ìwé tó ń fúnni ní ẹ̀tọ́ iṣẹ́ EU.",
        "feedback": "Nọ́mbà PPS kì í fúnni ní ẹ̀tọ́ láti ṣiṣẹ́.",
        "consequence": "Àwọn ètò méjì tó yàtọ̀ síra ṣì ń dà pọ̀ mọ́ra lójú wọn."
      }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Ẹ̀tanú nípa ilé gbígbé",
    "title": "Ìkọ̀ lè ní í ṣe pẹ̀lú ju agbára láti sanwó lọ",
    "scene": "Onílé sọ̀rọ̀ dáadáa lórí fóònù, ṣùgbọ́n ó sọ pé yàrá náà kò sí mọ́ lẹ́yìn tí ó rí Elena, tí ó sì gbọ́ pé ọmọ ẹ̀yà Roma àti ènìyàn trans ni, ìyẹn ẹni tí ìdánimọ̀ akọ tàbí abo rẹ̀ yàtọ̀ sí èyí tí a sọ fún un nígbà ìbí.",
    "question": "Kí ni Elena lè ṣe láìrò pé gbogbo ìkọ̀ ló lòdì sí òfin?",
    "law": "Òfin ìdọ́gba ti Ireland fi òfin de ẹ̀tanú nípa ilé gbígbé lórí àwọn ìdí tí òfin dáàbò bò, títí kan ẹ̀yà, akọ tàbí abo, àti ọjọ́-orí. Ẹ̀tanú sí àwọn ènìyàn trans wà lábẹ́ ààbò tó dá lórí akọ tàbí abo, ṣùgbọ́n ẹ̀rí àti ààlà àkókò ṣe pàtàkì nínú ẹ̀sùn.",
    "plainLaw": "Ṣe àkọsílẹ̀ ohun tó ṣẹlẹ̀, pa ìpolówó àti àwọn ìfiránṣẹ́ mọ́, kí o sì wá ìmọ̀ràn nípa ilé gbígbé tàbí ìdọ́gba ní kíákíá.",
    "sourceLabel": "IHREC: ẹ̀yà àti ilé gbígbé",
    "choices": {
      "save": {
        "label": "Pa ìpolówó àti àwọn ìfiránṣẹ́ mọ́, kọ ohun tí a sọ sílẹ̀, kí o sì wá ìmọ̀ràn lọ́dọ̀ IHREC tàbí iṣẹ́ ìrànlọ́wọ́ ilé gbígbé kan.",
        "feedback": "Ẹ̀rí tí a kó jọ ní àkókò ìṣẹ̀lẹ̀ ń ṣèrànwọ́ láti mọ̀ bóyá ẹ̀tanú ló ṣẹlẹ̀ tàbí bóyá àlàyé mìíràn wà.",
        "consequence": "Elena lè gbé ẹ̀sùn yẹ̀ wò nígbà tí ó ṣì ń tẹ̀ síwájú pẹ̀lú wíwá ilé ní kánjúkánjú."
      },
      "threat": {
        "label": "Halẹ̀ mọ́ onílé ní gbangba láìpa ẹ̀rí kankan mọ́.",
        "feedback": "Ó ṣeé lóye pé inú rẹ̀ bí, ṣùgbọ́n ẹ̀rí àti ìmọ̀ràn ń mú kí ọ̀nà láti rí àtúnṣe gbà lágbára sí i.",
        "consequence": "Ìpolówó náà pòórá, ó sì di ohun tó ṣòro sí i láti fi ẹ̀rí mú àwọn ọ̀rọ̀ ẹ̀tanú gan-an tí a sọ lẹ́sẹ̀."
      },
      "accept": {
        "label": "Rò pé ẹ̀tanú sí àwọn ayálégbé Roma tàbí trans bófin mu nínú ilé aládàáni.",
        "feedback": "Àwọn òfin ìdọ́gba kan iṣẹ́ pípèsè ilé aládàáni, lábẹ́ àwọn kúlẹ̀kúlẹ̀ òfin àti àwọn ìyàsọ́tọ̀ tí òfin yọ̀ǹda.",
        "consequence": "Ìkọ̀ tí a lè gbé ìgbésẹ̀ òfin lórí kọjá láìsí àyẹ̀wò."
      }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "Ìdọ́gba ní ibi iṣẹ́",
    "title": "Ìṣẹ̀lẹ̀ kan lè ní í ṣe pẹ̀lú ọ̀pọ̀ ìdí tí òfin dáàbò bò",
    "scene": "Alábòójútó kan fi bí Elena ṣe ń sọ̀rọ̀ àti akọ tàbí abo rẹ̀ ṣe yẹ̀yẹ́, ó fún àwọn òṣìṣẹ́ tó kéré sí i tí kì í ṣe Roma ní àkókò iṣẹ́ tó dára jù, ó sì ní kí ó lo báàjì orúkọ mìíràn.",
    "question": "Ìgbésẹ̀ wo ni yóò dáàbò bo àwọn ọ̀ràn tó so pọ̀ yìí?",
    "law": "Àwọn Employment Equality Acts fi òfin de ẹ̀tanú ní ibi iṣẹ́ lórí àwọn ìdí bíi akọ tàbí abo, ẹ̀yà àti ọjọ́-orí. Ẹ̀tanú sí àwọn ènìyàn trans wà lábẹ́ ààbò tó dá lórí akọ tàbí abo; a lè gbé ẹ̀sùn nípa ibi iṣẹ́ lọ sí WRC.",
    "plainLaw": "Ṣe àkọsílẹ̀ ìṣẹ̀lẹ̀ kọ̀ọ̀kan àti ẹni tí o fi ń ṣe àfiwé, lo ìlànà agbanisíṣẹ́ níbi tí ó ti wà láìséwu, kí o sì rí ìmọ̀ràn ìdọ́gba gbà ní kíákíá.",
    "sourceLabel": "IHREC: ẹ̀tanú ní ibi iṣẹ́",
    "choices": {
      "log": {
        "label": "Pa àkọsílẹ̀ tí ó ní ọjọ́, àwọn ọ̀rọ̀, àkókò iṣẹ́ àti ẹlẹ́rìí mọ́, lẹ́yìn náà wá ìtọ́sọ́nà lọ́dọ̀ IHREC tàbí WRC.",
        "feedback": "Àkọsílẹ̀ náà ń fi hàn bí ẹ̀yà, akọ tàbí abo àti ọjọ́-orí ṣe lè ní ipa papọ̀.",
        "consequence": "Elena lè fi ìmọ̀ tó pé wá àtúnṣe nínú ilé iṣẹ́ tàbí láti òde kí ẹ̀rí tó sọnù tàbí kí àkókò tó parí."
      },
      "one": {
        "label": "Fi ẹ̀sùn kan ọjọ́-orí nìkan nítorí pé ẹ̀sùn kan kò lè ní ọ̀pọ̀ ìdí tó so pọ̀.",
        "feedback": "Ẹ̀sùn kan lè ṣàlàyé ju ìdí kan tí òfin dáàbò bò lọ níbi tí àwọn òtítọ́ ti ṣètìlẹ́yìn fún un.",
        "consequence": "Àwọn apá tó kan ẹ̀yà àti akọ tàbí abo nínú bí a ṣe hù sí i kò sí nínú ìtàn tí ó sọ mọ́."
      },
      "quit": {
        "label": "Fi iṣẹ́ sílẹ̀ lẹ́sẹ̀kẹsẹ̀ láìpa àtòjọ àkókò iṣẹ́ tàbí ìfiránṣẹ́ mọ́, tàbí wá ìmọ̀ràn.",
        "feedback": "Ààbò ni ó kọ́kọ́ ṣe pàtàkì, ṣùgbọ́n pípa ẹ̀rí mọ́ àti gbígba ìmọ̀ràn lè dáàbò bo àwọn àṣàyàn ọjọ́ iwájú.",
        "consequence": "Owó tí ń wọlé dáwọ́ dúró, ó sì ṣòro sí i láti fi bí àwọn ìṣẹ̀lẹ̀ náà ṣe ń tún ṣẹlẹ̀ hàn."
      }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Ààbò lẹ́sẹ̀kẹsẹ̀",
    "title": "Ìbẹ̀rù nípa ìṣílọ lè jẹ́ apá kan ti ìṣàkóso nípa ìfipámúni",
    "scene": "Ẹnì kejì Leila nínú ìgbéyàwó ń ṣàkóso ìwé ìrìnnà rẹ̀, owó rẹ̀ àti fóònù rẹ̀, ó sì sọ pé Gardaí yóò lé e kúrò ní orílẹ̀-èdè tí ó bá bá àwọn ọmọ jáde.",
    "question": "Kí ni ó yẹ kí ó kọ́kọ́ ṣe pàtàkì?",
    "law": "Ìwà ìkà nínú ilé lè ní ìṣàkóso nípa ìfipámúni àti ìwà ipá sí ara. Ẹnikẹ́ni tó wà nínú ewu lọ́wọ́lọ́wọ́ yẹ kí ó pe 999 tàbí 112; ipò ìṣílọ kò dí ẹni tí a ṣe ìwà ìkà sí lọ́wọ́ láti kàn sí An Garda Síochána tàbí iṣẹ́ ìrànlọ́wọ́ amọ̀ja kan.",
    "plainLaw": "Fi ààbò lẹ́sẹ̀kẹsẹ̀ àti ìrànlọ́wọ́ àṣírí láti ọ̀dọ̀ amọ̀ja sí ipò àkọ́kọ́; ẹni tó ń ṣe ìwà ìkà kì í pinnu ipò ìṣílọ.",
    "sourceLabel": "Ìrànlọ́wọ́ Women’s Aid",
    "choices": {
      "safe": {
        "label": "Lo ẹ̀rọ tí ó wà láìséwu tàbí ẹni tí o gbẹ́kẹ̀ lé láti kàn sí iṣẹ́ pàjáwìrì tàbí ìrànlọ́wọ́ amọ̀ja fún ìwà ìkà nínú ilé.",
        "feedback": "Ètò ààbò lè gba ọ̀ràn àwọn ọmọ, èdè, ìṣọ́ni àti àwọn ìwé àkọsílẹ̀ sínú àkíyèsí.",
        "consequence": "Leila rí àwọn àṣàyàn gbà ní àṣírí láìní láti kọ́kọ́ dojú kọ ẹni tó ń ṣe ìwà ìkà sí i."
      },
      "confront": {
        "label": "Kéde ètò láti lọ, kí ó sì béèrè pé kí a dá gbogbo ìwé rẹ̀ padà nígbà tí kò sí ẹlòmíràn pẹ̀lú rẹ̀.",
        "feedback": "Ìdojúkọ lè mú ewu pọ̀ sí i; amọ̀ja lè ṣèrànwọ́ láti gbèrò ọ̀nà àbájáde tó ní ààbò sí i.",
        "consequence": "Ẹni tó ń ṣe ìwà ìkà lè mú ìwà ipá pọ̀ sí i tàbí kó àwọn ìwé àti owó lọ."
      },
      "believe": {
        "label": "Dúró nítorí pé ẹnì kejì rẹ̀ nínú ìgbéyàwó ní agbára òfin láti pàṣẹ pé kí a lé e kúrò ní orílẹ̀-èdè.",
        "feedback": "Ẹnì kejì ènìyàn nínú ìgbéyàwó kì í ṣe ìpinnu ìṣílọ.",
        "consequence": "Àwọn ìhalẹ̀ èké nípa ìṣílọ ń bá a lọ láti di Leila àti àwọn ọmọ mọ́ ipò náà."
      }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Ìbánisọ̀rọ̀ ní àṣírí",
    "title": "Ọ̀nà ìbánisọ̀rọ̀ tí ó wà láìséwu ṣe pàtàkì",
    "scene": "Ẹnì kejì rẹ̀ nínú ìgbéyàwó máa ń ṣàyẹ̀wò ìtàn àwọn ojú-ewé tí ó ṣí lórí ayélujára, ó sì máa ń tú gbogbo lẹ́tà aláṣẹ sí èdè mìíràn kí Leila tó lè kà á.",
    "question": "Báwo ni ó ṣe lè wá ìsọfúnni ní ọ̀nà tó ní ààbò sí i?",
    "law": "ISD kìlọ̀ pé àwọn ẹ̀rọ máa ń fi àmì iṣẹ́ orí ẹ̀rọ sílẹ̀, ó sì gba ẹni tí a ṣe ìwà ìkà sí láàyè láti lo aṣojú gẹ́gẹ́ bí ẹni ìkànsí. Women’s Aid lè ṣètò òǹtúmọ̀ èdè, ó sì lè so àwọn olùpè pọ̀ mọ́ àwọn iṣẹ́ ìrànlọ́wọ́ káàkiri Ireland.",
    "plainLaw": "Lo ẹ̀rọ tó ní ààbò sí i àti àlàyé ìkànsí tí ẹni tó ń ṣe ìwà ìkà kò lè tọ́pinpin; béèrè òǹtúmọ̀ èdè dípò gbígbẹ́kẹ̀ lé ẹni tó ń ṣe ìwà ìkà.",
    "sourceLabel": "Àwọn ìtọ́sọ́nà ISD nípa ìṣílọ àti ìwà ìkà nínú ilé",
    "choices": {
      "private": {
        "label": "Lo ẹ̀rọ tí o gbẹ́kẹ̀ lé, ímeèlì tó wà láìséwu tàbí àdírẹ́sì aṣojú, kí o sì béèrè ìtumọ̀ èdè lọ́dọ̀ ẹni olómìnira.",
        "feedback": "Èyí dín ìṣọ́ni kù, ó sì jẹ́ kí Leila rí ìsọfúnni tirẹ̀ gbà ní tààrà.",
        "consequence": "Àwọn iṣẹ́ ìrànlọ́wọ́ lè bá a sọ̀rọ̀ láìjẹ́ pé gbogbo nǹkan ń gba ọ̀dọ̀ ẹnì kejì rẹ̀ nínú ìgbéyàwó kọjá."
      },
      "shared": {
        "label": "Lo àkọọ́lẹ̀ tí gbogbo ìdílé jọ ń lò nítorí pé pípa ìtàn lílo ayélujára rẹ́ yóò mú gbogbo àmì kúrò.",
        "feedback": "Pípa ìtàn lílo ayélujára rẹ́ kò dájú pé gbogbo ohun tí a ṣe ti fara pamọ́.",
        "consequence": "Ẹnì kejì rẹ̀ nínú ìgbéyàwó lè ṣàwárí ètò ààbò tàbí ìṣílọ náà."
      },
      "translate": {
        "label": "Jẹ́ kí ẹnì kejì rẹ̀ nínú ìgbéyàwó tú gbogbo ìjíròrò àṣírí sí èdè mìíràn.",
        "feedback": "Kò yẹ kí ẹni tí a fi ẹ̀sùn ìwà ìkà kàn ṣàkóso ìtumọ̀ ìmọ̀ràn ààbò tàbí òfin.",
        "consequence": "A lè yí ìsọfúnni padà, fi í pamọ́ tàbí lò ó láti dẹ́rù ba Leila."
      }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Ipò ìṣílọ olómìnira",
    "title": "Kíkúrò kò túmọ̀ sí pé àṣẹ ti parí fúnra rẹ̀",
    "scene": "Àṣẹ ìgbégbé Leila so mọ́ ẹnì kejì rẹ̀ nínú ìgbéyàwó, ó sì gbàgbọ́ pé lílọ sí ilé ààbò yóò mú kí ìgbégbé rẹ̀ di aláìbófinmu ní alẹ́ ọjọ́ náà.",
    "question": "Ọ̀nà wo ni ó yẹ kí ó wádìí ní kíákíá?",
    "law": "Ẹni tí a ṣe ìwà ìkà sí, tí àṣẹ rẹ̀ so mọ́ ẹni tó ṣe é, lè béèrè fún àṣẹ ìṣílọ olómìnira ní tààrà tàbí nípasẹ̀ agbẹjọ́rò lábẹ́ àwọn ìtọ́sọ́nà ISD nípa ìwà ìkà nínú ilé. Kò sí owó ìbéèrè, a sì ń bójú tó ìbéèrè náà ní àṣírí.",
    "plainLaw": "Gba ìmọ̀ràn nípa ìlànà àṣẹ olómìnira; kíkúrò lọ́dọ̀ ẹni tó ń ṣe ìwà ìkà kò túmọ̀ sí pé ipò ìṣílọ ti sọnù fúnra rẹ̀ ní àkókò kan náà.",
    "sourceLabel": "Àṣẹ olómìnira fún àwọn tí a ṣe ìwà ìkà nínú ilé sí",
    "choices": {
      "apply": {
        "label": "Kàn sí ISD tàbí agbẹjọ́rò nípasẹ̀ àwọn ọ̀nà tí ó wà láìséwu, kí o sì béèrè ipò olómìnira lábẹ́ àwọn ìtọ́sọ́nà náà.",
        "feedback": "Ètò náà wà fún àṣẹ tí ó so mọ́ ẹni tí a fi ẹ̀sùn ṣíṣe ìwà ìkà kàn.",
        "consequence": "ISD lè ṣe àyẹ̀wò ipò Leila fúnra rẹ̀ láìjẹ́ kí ẹnì kejì rẹ̀ nínú ìgbéyàwó ṣàkóso ìbéèrè náà."
      },
      "permission": {
        "label": "Ní kí ẹnì kejì rẹ̀ nínú ìgbéyàwó fọwọ́ sí àṣẹ fún ìbéèrè olómìnira rẹ̀.",
        "feedback": "Ẹni tó ṣe ìwà ìkà kò ní ipa ìpinnu kankan nínú ìbéèrè ipò olómìnira.",
        "consequence": "Ẹnì kejì rẹ̀ nínú ìgbéyàwó mọ̀ nípa ètò náà, ó sì rí àǹfààní mìíràn láti dí ààbò lọ́wọ́."
      },
      "automatic": {
        "label": "Rò pé lílọ sí ilé ààbò máa ń fúnni ní Stamp 4 fúnra rẹ̀.",
        "feedback": "Àṣẹ olómìnira nílò ìbéèrè àti àyẹ̀wò; kì í ṣẹlẹ̀ fúnra rẹ̀.",
        "consequence": "Leila lè rò pé ìgbésẹ̀ ìṣílọ náà ti parí nígbà tí kò tíì parí."
      }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Ẹ̀rí láìní láti pé pátápátá",
    "title": "Kì í ṣe gbogbo ẹni tó la ìwà ìkà já ni ó ní ìròyìn Garda",
    "scene": "Ọ̀pọ̀ jù lọ ìwà ìkà náà ṣẹlẹ̀ nínú ilé. Leila ní àwọn ìfiránṣẹ́ àti àkọsílẹ̀ àbẹ̀wò sí dókítà GP, ṣùgbọ́n kò ní àṣẹ ilé ẹjọ́ tàbí nọ́mbà ìṣẹ̀lẹ̀ Garda.",
    "question": "Báwo ni ó ṣe yẹ kí ó ṣètò ìbéèrè náà?",
    "law": "ISD ń béèrè fún ìsọfúnni tó pọ̀ bí ó bá ṣeé ṣe, ó sì ṣe àtòjọ àwọn àpẹẹrẹ bíi àṣẹ ilé ẹjọ́, ìròyìn ìṣègùn tàbí Garda, lẹ́tà láti ọ̀dọ̀ àwọn àjọ ìjọba àti lẹ́tà iṣẹ́ ìrànlọ́wọ́ fún ìwà ipá nínú ilé. Ó yẹ kí a ṣàlàyé àwọn ipò àti ọ̀ràn àwọn ọmọ; àwọn àpẹẹrẹ náà kì í ṣe ìdí láti ṣe ẹ̀rí èké.",
    "plainLaw": "Kó ohun tí ó wà ní ti gidi jọ, ṣàlàyé àwọn ohun tí kò sí, kí o sì ní kí agbẹjọ́rò tàbí iṣẹ́ ìrànlọ́wọ́ kan ran ọ́ lọ́wọ́ láti ṣàlàyé ìtàn náà.",
    "sourceLabel": "Ìtọ́sọ́nà ISD nípa ẹ̀rí",
    "choices": {
      "genuine": {
        "label": "Pa àwọn ìfiránṣẹ́ àti àkọsílẹ̀ gidi mọ́, ṣàlàyé bí ìwà ìkà náà ṣe ń tún ṣẹlẹ̀, kí o sì wá àwọn lẹ́tà ìtìlẹ́yìn níbi tí ó ti yẹ.",
        "feedback": "Ìtàn òtítọ́ tó ṣọ̀kan lè lo oríṣiríṣi ẹ̀rí.",
        "consequence": "ISD rí ìtàn tó wà gbà láìsí ìwé èké tí yóò sọ ọ́ di aláìlágbára."
      },
      "wait": {
        "label": "Dúró láti wá ìrànlọ́wọ́ títí yóò fi ní gbogbo àpẹẹrẹ tó wà lórí àtòjọ ISD.",
        "feedback": "Kò yẹ kí a sún ààbò àti ìmọ̀ràn síwájú nítorí pé a ń wá àkójọpọ̀ ìwé tí ó pé pátápátá.",
        "consequence": "Ewu ń bá a lọ, ẹ̀rí tó wúlò sì lè sọnù."
      },
      "create": {
        "label": "Dá nọ́mbà ìròyìn Garda kan sílẹ̀ nítorí pé ẹ̀rí aláṣẹ máa ń jẹ́ dandan nígbà gbogbo.",
        "feedback": "Má ṣe dá ẹ̀rí èké sílẹ̀ láéláé.",
        "consequence": "Ìsọfúnni èké lè ba bí a ṣe gbà á gbọ́ àti ìbéèrè ìṣílọ jẹ́."
      }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Lẹ́yìn tí ààbò lẹ́sẹ̀kẹsẹ̀ bá wà",
    "title": "Àṣẹ ìṣílọ jẹ́ apá kan ti ìmúpadàbọ̀sípò",
    "scene": "Leila nílò owó tí ń wọlé, ilé gbígbé tó ní ààbò, kí ẹ̀kọ́ àwọn ọmọ lè máa bá a lọ àti ìrànlọ́wọ́ tó ń bọ̀wọ̀ fún ìdánimọ̀ LGBT, nígbà tí àwọn ọ̀ràn òfin ẹbí kò tíì yanjú.",
    "question": "Kí ni ìgbésẹ̀ tó kàn tí ó ṣeé ṣe jù lọ?",
    "law": "Tí a bá fọwọ́ sí àṣẹ olómìnira lábẹ́ àwọn ìtọ́sọ́nà náà, Stamp 4 gba ènìyàn láàyè láti ṣiṣẹ́ láìní ìwé àṣẹ iṣẹ́. Àwọn àìní ààbò, ilé gbígbé, ọmọ àti òfin ẹbí ṣì nílò àwọn iṣẹ́ amọ̀ja ọ̀tọ̀; tí a bá kọ ìbéèrè kan, ó yẹ kí a ṣàlàyé ìdí tí a fi kọ̀ ọ́ àti àwọn àṣàyàn ìṣílọ mìíràn.",
    "plainLaw": "Ṣe ètò tó mú ìṣílọ, ààbò, àwọn ọmọ, ilé gbígbé àti owó tí ń wọlé ṣiṣẹ́ pọ̀ dípò ríretí pé ìpinnu kan yóò yanjú ohun gbogbo.",
    "sourceLabel": "Àwọn ìtọ́sọ́nà ISD nípa ìṣílọ àti ìwà ìkà nínú ilé",
    "choices": {
      "team": {
        "label": "Lo olùdámọ̀ràn ìṣílọ, iṣẹ́ ìrànlọ́wọ́ fún ìwà ìkà nínú ilé, àti àwọn ìrànlọ́wọ́ tó yẹ fún ẹbí, ilé gbígbé àti LGBT papọ̀.",
        "feedback": "Oríṣiríṣi amọ̀ja lè bójú tó àwọn àìní tó so pọ̀ ṣùgbọ́n tó yàtọ̀ síra lábẹ́ òfin.",
        "consequence": "Leila lè tún òmìnira ara rẹ̀ kọ́ láìjẹ́ pé iṣẹ́ ìrànlọ́wọ́ kan gbàgbé àwọn ọmọ tàbí pé òmíràn gbàgbé ipò ìṣílọ."
      },
      "stamp": {
        "label": "Rò pé Stamp 4 máa ń pèsè ilé gbígbé àti yanju àwọn ètò ìtọ́jú ọmọ fúnra rẹ̀.",
        "feedback": "Àṣẹ ìṣílọ kì í pinnu ọ̀ràn ilé gbígbé tàbí òfin ẹbí.",
        "consequence": "Àwọn àìní ìgbésí ayé àti òfin tó nílò ìgbésẹ̀ kánjúkánjú ṣì wà láìsí ẹni tó bójú tó wọn."
      },
      "return": {
        "label": "Padà lọ sọ́dọ̀ ẹnì kejì rẹ̀ nínú ìgbéyàwó nítorí pé kò dájú pé a ó fọwọ́ sí ìbéèrè náà.",
        "feedback": "Àìdájú nílò ètò láti ọ̀dọ̀ amọ̀ja, kì í ṣe fífi agbára mú ènìyàn dojú kọ ewu.",
        "consequence": "Ìṣàkóso nípa ìfipámúni bẹ̀rẹ̀ padà kí a tó ṣe àyẹ̀wò àwọn àṣàyàn olómìnira dáadáa."
      }
    }
  }
};

export default catalog;
