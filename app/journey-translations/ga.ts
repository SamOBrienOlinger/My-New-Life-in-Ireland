import type { JourneyTranslationCatalog, JourneyControls } from "./types";

const c = (label: string, feedback: string, consequence: string) => ({ label, feedback, consequence });

const catalog = {
  "critical:Plan": {
    eyebrow: "Ceithre mhí roimh an aistriú", title: "Níl i dtairiscint mhaith ach an tús",
    scene: "Tá an conradh tagtha. Deir an fostóir go bhfuil éileamh ar an bpost agus iarrann sé tosú láithreach.",
    question: "Cad ba cheart a dhéanamh sula n-áirithítear eitiltí nó sula dtugtar fógra éirí as?",
    law: "Braitheann Cead Fostaíochta Scileanna Criticiúla ar an ngairm, an luach saothair, an conradh agus an fostóir a bheith ag comhlíonadh na gcritéar reachtúil reatha.",
    plainLaw: "Seiceáil an post féin, an pá, an conradh agus an fostóir de réir rialacha oifigiúla an lae inniu sula mbraitheann tú ar an tairiscint.",
    sourceLabel: "Cead Fostaíochta Scileanna Criticiúla",
    choices: {
      verify: c("Seiceáil an ghairm, an pá, an conradh agus an fostóir, ansin cuir isteach an t-iarratas ceart ar chead.", "Cosnaíonn sé seo an t-aistriú ar thairiscint nach gcomhlíonann na coinníollacha.", "Éiríonn an t-amchlár réalaíoch agus déantar an post a sheiceáil de réir na rialacha reatha."),
      contract: c("Glac leis gur cead oibre é an conradh sínithe.", "Tá feidhmeanna dlíthiúla éagsúla ag conradh agus ag cead fostaíochta.", "D’fhéadfaí taisteal nó éirí as an bpost sula mbeadh an cead riachtanach ann."),
      visitor: c("Tar isteach mar chuairteoir agus críochnaigh an cead tar éis tosú ag obair.", "Ní údaraíonn stádas cuairteora gnáthfhostaíocht.", "D’fhéadfaí an post agus an stádas inimirce araon a chur i mbaol.")
    }
  },
  "critical:Prepare": {
    eyebrow: "Doiciméid agus uainiú", title: "Ní thagann ceadú amháin in áit gach céime eile",
    scene: "Tá an cead deonaithe. Deir cara nach bhfuil aon seiceáil inimirce eile riachtanach dá bharr.",
    question: "Cén plean is sábháilte?",
    law: "Údaraíonn cead fostaíochta fostaíocht shonraithe. Caithfidh náisiúnach a bhfuil víosa de dhíth air nó uirthi an víosa fadchónaithe cuí a fháil freisin roimh thaisteal.",
    plainLaw: "Is céimeanna ar leith iad an cead fostaíochta, an víosa, cead ag an teorainn agus clárú cónaithe.",
    sourceLabel: "Teacht chun oibre in Éirinn",
    choices: {
      sequence: c("Seiceáil riachtanais víosa, ullmhaigh fianaise agus coinnigh gach ceadú ar fáil don taisteal.", "Ceart. Freagraíonn gach doiciméad ceist éagsúil.", "Is féidir leis an taistealaí cuspóir an aistrithe a mhíniú ag an teorainn."),
      permitvisa: c("Glac leis gur víosa taistil é an cead fostaíochta go huathoibríoch.", "Níl sé sin ceart do náisiúnaigh a bhfuil víosa de dhíth orthu.", "D’fhéadfadh deacrachtaí bordála nó iontrála teacht chun cinn cé go bhfuil an cead bailí."),
      agent: c("Tabhair gach bundoiciméad do ghníomhaire nach bhfuil fíoraithe.", "Coinnigh smacht ar dhoiciméid aitheantais agus fíoraigh aon duine a thairgeann cúnamh íoctha.", "Cruthaíonn cailliúint rochtana ar bhundoiciméid rioscaí moille agus dúshaothraithe.")
    }
  },
  "critical:Travel": {
    eyebrow: "Ag teorainn na hÉireann", title: "Bí réidh le cuspóir an taistil a mhíniú",
    scene: "Fiafraíonn an t-oifigeach inimirce cá bhfanfaidh an taistealaí agus cén fostóir atá ag súil leis nó léi.",
    question: "Cad ba cheart don taistealaí a dhéanamh?",
    law: "Ceadaíonn víosa taisteal chuig an teorainn; déanann oifigeach inimirce cinneadh faoin iontráil. Ba cheart go léireodh na doiciméid tacaíochta an fíorchuspóir agus na socruithe.",
    plainLaw: "Tabhair fianaise fhírinneach chomhsheasmhach faoin bpost, an cead agus an chéad seoladh leat.",
    sourceLabel: "Seirbhís Inimirce na hÉireann",
    choices: {
      answer: c("Freagair go fírinneach agus taispeáin an cead, an víosa más gá, an conradh agus sonraí cóiríochta.", "Tacaíonn fianaise shoiléir chomhsheasmhach leis an gcuspóir taistil atá luaite.", "Is féidir leis an oifigeach an turas oibre a mheas leis na doiciméid chearta."),
      tourism: c("Abair nach bhfuil ann ach saoire chun ceisteanna faoin obair a sheachaint.", "Ba cheart don chuntas teacht leis an bhfíorchuspóir agus leis na doiciméid.", "Is féidir le heolas contrártha deacrachtaí tromchúiseacha a chruthú ag an teorainn."),
      phone: c("Bíodh tú ag brath go hiomlán ar earcaitheoir an fón a fhreagairt.", "Ba cheart don taistealaí a phríomheolas féin a thuiscint agus a iompar.", "Mura bhfuil an t-earcaitheoir ar fáil, d’fhéadfadh cuspóir an taistil a bheith doiléir.")
    }
  },
  "critical:Arrive": {
    eyebrow: "An chéad 90 lá", title: "Tugann clárú fianaise ar an gcead",
    scene: "Tá an obair tosaithe, ach déanann cuardach tithíochta agus coinní na chéad seachtainí deacair.",
    question: "Cén tasc ba cheart fanacht sa phlean?",
    law: "De ghnáth caithfidh daoine ó lasmuigh den AE, den Ríocht Aontaithe agus den Eilvéis a fhanann níos mó ná 90 lá a gcead inimirce Éireannach a chlárú.",
    plainLaw: "Socraigh clárú agus coinnigh sonraí an cheada, an tseolta agus na fostaíochta cruinn.",
    sourceLabel: "Cead inimirce a chlárú",
    choices: {
      register: c("Socraigh clárú, lean an próiseas oifigiúil coinní agus coinnigh fianaise ar iarrachtaí.", "Taifeadann Cead Cónaithe Éireannach (IRP) an cead agus a choinníollacha.", "Tá fianaise níos soiléire ag an duine ar chónaí dleathach agus ar a gceadaíonn an cead."),
      pps: c("Glac leis go dtagann uimhir PSP in áit clárú inimirce.", "Úsáidtear uimhir PSP do sheirbhísí poiblí agus do cháin; ní cead inimirce í.", "Dhéanfaí uimhir úsáideach riaracháin a mheascadh le fianaise ar chónaí dleathach."),
      contract: c("Glac leis go dtagann conradh an fhostóra in áit IRP.", "Ní thagann páipéarachas fostaíochta in áit clárú cónaithe.", "D’fhéadfadh sé a bheith deacair don duine a choinníollacha inimirce a chruthú.")
    }
  },
  "critical:Build a life": {
    eyebrow: "An t-ionad oibre agus an todhchaí", title: "Ní chealaíonn stádas cearta fostaíochta",
    scene: "Deir bainisteoir go bhfaigheann baill foirne imirceacha pá níos ísle agus níos lú sosanna sna chéad mhíonna.",
    question: "Cén freagra a chosnaíonn an obair agus an stádas inimirce araon?",
    law: "Tá cosaintí bunúsacha fostaíochta ag oibrithe imirceacha atá fostaithe go dleathach in Éirinn. Caithfear coinníollacha an cheada agus cearta fostaíochta araon a mheas nuair a thagann fadhbanna chun cinn.",
    plainLaw: "Coinnigh taifid, lorg comhairle iontaofa agus ná glac le cóir neamhdhleathach mar gheall ar stádas imirceach.",
    sourceLabel: "An Coimisiún um Chaidreamh san Áit Oibre (WRC)",
    choices: {
      records: c("Sábháil uainchláir agus duillíní pá, iarr ceartú agus déan teagmháil leis an WRC nó le comhairleoir cáilithe.", "Cabhraíonn fianaise agus comhairle thráthúil leis an dá shraith ceart a chosaint.", "Is féidir aghaidh a thabhairt ar an bhfadhb gan neamhaird a dhéanamh de choinníollacha an cheada."),
      accept: c("Glac leis mar go bhfuil níos lú cearta fostaíochta ag sealbhóirí ceada.", "Ní bhaineann stádas inimirce na cosaintí bunúsacha san ionad oibre de dhuine.", "D’fhéadfadh tearcíocaíocht nó coinníollacha míshábháilte leanúint gan dúshlán."),
      disappear: c("Fág láithreach agus tosaigh post eile gan coinníollacha an cheada a sheiceáil.", "D’fhéadfadh próiseas oifigiúil nó cead nua a bheith ag teastáil chun fostaíocht a athrú.", "D’fhéadfadh fadhb san ionad oibre a bheith ina fadhb inimirce freisin.")
    }
  },
  "general:Plan": {
    eyebrow: "Sula n-íocann tú aon duine", title: "Scrúdaigh an post féin seachas an chaint díolacháin",
    scene: "Geallann earcaitheoir go ráthaíonn aon chonradh Éireannach sínithe cead agus iarrann sé airgead tirim.",
    question: "Cén chéad chinneadh is fearr?",
    law: "Braitheann Cead Fostaíochta Ginearálta ar an ngairm, an luach saothair, an fostóir agus riachtanais reatha eile. Níl roinnt gairmeacha incháilithe agus d’fhéadfadh Tástáil Riachtanas Mhargadh an tSaothair a bheith i gceist.",
    plainLaw: "Fíoraigh an fostóir agus na dualgais iarbhír, ansin seiceáil rialacha reatha an cheada sula n-íocann tú nó sula dtaistealaíonn tú.",
    sourceLabel: "Cead Fostaíochta Ginearálta",
    choices: {
      check: c("Fíoraigh an fostóir, na dualgais, an pá agus incháilitheacht don chead trí fhoinsí oifigiúla.", "Caithfidh fiú fíorthairiscint na critéir dhlíthiúla a chomhlíonadh.", "Aithnítear rioscaí calaoise agus post neamh-incháilithe sula ngealltar airgead nó taisteal."),
      cash: c("Íoc airgead tirim agus lig don earcaitheoir an pas a choinneáil.", "Is comharthaí rabhaidh iad pas a choinneáil agus brú le híocaíocht nach féidir a rianú.", "Éiríonn an t-oibrí níos leochailí i leith calaoise agus smachta."),
      promise: c("Bí ag brath ar gheallúint an earcaitheora seachas an ghairm a sheiceáil.", "Is iad na critéir oifigiúla a chinneann incháilitheacht don chead, ní gealltanas.", "D’fhéadfadh an bealach beartaithe teip tar éis costas mór.")
    }
  },
  "general:Prepare": {
    eyebrow: "An t-ord ceart", title: "Caithfidh an cead teacht roimh an aistriú",
    scene: "Tá foireann de dhíth ar an bhfostóir anois agus molann sé teacht isteach mar thurasóir agus an páipéarachas á réiteach.",
    question: "Cén t-ord atá iontaofa?",
    law: "De ghnáth, ar an gcéad turas le cead fostaíochta, teastaíonn an cead sula dtosaíonn an obair, ansin víosa fadchónaithe más gá agus clárú tar éis teacht.",
    plainLaw: "Ná húsáid stádas cuairteora mar aicearra isteach sa ghnáthfhostaíocht.", sourceLabel: "Ceadanna fostaíochta",
    choices: {
      order: c("An cead ar dtús, víosa más gá, rialú teorann, ansin clárú tar éis teacht.", "Coinníonn sé seo an turas ag teacht leis an mbealach beartaithe.", "Tagann an t-oibrí ar bhonn dlíthiúil is féidir a mhíniú agus a chruthú le doiciméid."),
      tourist: c("Tar isteach mar thurasóir agus tosaigh ar an gcéad seal oibre.", "Ní cead gnáthoibre é stádas cuairteora.", "D’fhéadfadh iarmhairtí tromchúiseacha a bheith ann don oibrí agus don fhostóir araon."),
      pps: c("Déan iarratas ar uimhir PSP agus glac léi mar chead oibre.", "Ní chruthaíonn uimhir PSP cead inimirce ná fostaíochta.", "Tá an chéim riachtanach ceada fós gan chríochnú.")
    }
  },
  "general:Travel": {
    eyebrow: "Lá an imeachta", title: "Tabhair d’fhianaise féin leat",
    scene: "Deir an t-earcaitheoir go bhfuil gach doiciméad in oifig na cuideachta agus nach dteastaíonn ón taistealaí ach seat scáileáin ar an bhfón.",
    question: "Cad ba cheart don taistealaí a dhéanamh?",
    law: "D’fhéadfadh ar an taistealaí cuspóir agus coinníollacha an turais a léiriú don iompróir agus ag rialú teorann na hÉireann.",
    plainLaw: "Coinnigh rochtain shlán ar do phas, ceaduithe, conradh agus sonraí do chéad seolta.", sourceLabel: "Teacht chun oibre in Éirinn",
    choices: {
      copies: c("Tabhair na bundoiciméid taistil riachtanacha, cóipeanna slána agus sonraí an fhostóra leat.", "Ba cheart don taistealaí a bheith in ann a thuras féin a mhíniú.", "Ní chailltear an fhianaise ar fad má imíonn comhartha an fhóin nó mura bhfuil an t-earcaitheoir ar fáil."),
      company: c("Taisteal gan doiciméid mar go bhfuil siad ag an gcuideachta.", "Ná tabhair smacht ar dhoiciméid riachtanacha aitheantais agus ceada suas.", "D’fhéadfadh nach mbeadh an taistealaí in ann cuspóir an taistil a chruthú."),
      different: c("Tabhair cúis taistil éagsúil leis an gceann san iarratas.", "Ba cheart don fhaisnéis a bheith fírinneach agus comhsheasmhach.", "D’fhéadfadh contrárthachtaí an turas a chur i mbaol ag an teorainn.")
    }
  },
  "general:Arrive": {
    eyebrow: "Na chéad seachtainí", title: "Déan idirdhealú idir riachtanais phráinneacha agus ceadanna dlíthiúla",
    scene: "Iarrann banc, tiarna talún agus fostóir doiciméid éagsúla agus coinne an chláraithe fós ar feitheamh.",
    question: "Conas ba cheart don duine freagairt?",
    law: "Taifeadann IRP cead inimirce. Tá a riachtanais féin ag córais eile, lena n-áirítear cáin, baincéireacht agus tithíocht, agus ní thagann siad ina áit.",
    plainLaw: "Úsáid seicliostaí oifigiúla, coinnigh fianaise ar choinní agus fiafraigh de gach seirbhís cad go díreach atá de dhíth uirthi.", sourceLabel: "Cead inimirce a chlárú",
    choices: {
      organise: c("Coinnigh comhad doiciméad, lean treoracha clárúcháin agus iarr a seicliosta féin ar gach seirbhís.", "Laghdaíonn sé seo mearbhall idir córais ar leith.", "Tá moilleanna deacair fós, ach is féidir leis an duine a léiriú cad atá críochnaithe."),
      one: c("Glac leis gur cheart go n-oibreodh doiciméad amháin do gach seirbhís.", "Cuireann córais Éireannacha ceisteanna éagsúla chun críocha éagsúla.", "D’fhéadfadh iarratais stopadh mar go gcuirtear an fhianaise mhícheart ar fáil arís agus arís eile."),
      fake: c("Athraigh doiciméad seolta chun rudaí a bhrostú.", "Ná cuir fianaise bhréagach nó athraithe isteach riamh.", "Cruthaíonn aicearra gearrthéarmach rioscaí tromchúiseacha dlíthiúla agus iontaoibhe.")
    }
  },
  "general:Build a life": {
    eyebrow: "Obair chothrom", title: "Aithin dúshaothrú go luath",
    scene: "Tá asbhaintí gan mhíniú ar an duillín pá agus iarrann an fostóir an pas a choinneáil ‘ar mhaithe lena shábháilteacht’.",
    question: "Cén freagra is láidre?",
    law: "Ba cheart d’oibrithe pá, téarmaí agus duillíní pá dleathacha a fháil. Is féidir le taifid a choinneáil agus an WRC nó tacaíocht speisialtóra d’imircigh a úsáid cabhrú le dul i ngleic le dúshaothrú.",
    plainLaw: "Coinnigh do phas, sábháil fianaise agus lorg comhairle rúnda.", sourceLabel: "An Coimisiún um Chaidreamh san Áit Oibre (WRC)",
    choices: {
      evidence: c("Coinnigh an pas, sábháil taifid, iarr míniú agus déan teagmháil leis an WRC nó le comhairleoir.", "Éascaíonn taifid shoiléire an fhadhb a thuiscint agus agóid a dhéanamh ina coinne.", "Is féidir leis an oibrí cabhair a lorg gan brath ar chuntas an fhostóra amháin."),
      hand: c("Tabhair an pas ar láimh mar gur shocraigh an fostóir an cead.", "Ba cheart don oibrí smacht a choinneáil ar dhoiciméid aitheantais phearsanta.", "Faigheann an fostóir bealach cumhachtach chun smacht a imirt."),
      nothing: c("Déan neamhaird de na hasbhaintí mar nach féidir le hoibrithe imirceacha gearán a dhéanamh.", "Tá cearta fostaíochta in-fhorfheidhmithe ag oibrithe imirceacha.", "D’fhéadfadh cóir neamhdhleathach leanúint nó dul in olcas.")
    }
  },
  "protection:Plan": {
    eyebrow: "Sábháilteacht de dhíth", title: "Baineann cosaint le riosca pearsanta",
    scene: "Ní bhraitheann sé sábháilte filleadh. Tugann cairde comhairle chontrártha agus molann duine scéal níos láidre a chumadh.",
    question: "Cén prionsabal ba cheart an chéad chéim eile a threorú?",
    law: "Tá cosaint idirnáisiúnta ann do dhaoine a bhfuil eagla géarleanúna orthu nó a bhfuil fíor-riosca díobhála tromchúisí rompu. Meastar gach iarratas ar a fhíricí féin faoin dlí atá i bhfeidhm nuair a dhéantar é.",
    plainLaw: "Inis do scéal fírinneach féin agus faigh eolas rúnda dlíthiúil chomh luath agus is féidir.", sourceLabel: "Comhairle Dídeanaithe na hÉireann: iarratais tar éis 12 Meitheamh 2026",
    choices: {
      truth: c("Coinnigh fianaise phearsanta nuair atá sé sábháilte, inis an fhírinne agus lorg eolas iontaofa dlíthiúil.", "Caithfidh éileamh cosanta a bheith bunaithe ar chuntas an duine féin.", "Tosaíonn an cás le heolas cruinn agus tacaíocht chuí."),
      copy: c("Cóipeáil scéal a d’oibrigh do dhuine eile.", "Is féidir le heolas cumtha nó cóipeáilte dochar tromchúiseach a dhéanamh don inchreidteacht.", "D’fhéadfadh an próiseas díriú ar chontrárthachtaí seachas ar an bhfíor-eagla."),
      work: c("Cuir cosaint i láthair mar bhealach níos tapúla chun fostaíochta.", "Tá críocha éagsúla ag cosaint agus imirce saothair.", "Éiríonn fíorbhonn dlíthiúil an turais doiléir.")
    }
  },
  "protection:Prepare": {
    eyebrow: "Sábháilteacht agus fianaise", title: "Cabhraíonn doiciméid, ach tagann sábháilteacht ar dtús",
    scene: "Tá roinnt fianaise ar fhón damáistithe. Níorbh fhéidir doiciméid eile a thabhairt.",
    question: "Cén cur chuige atá freagrach?",
    law: "Ba cheart d’iarratasóirí an t-eolas atá ar fáil a sholáthar, comhoibriú leis an bpróiseas agus fianaise ar iarraidh a mhíniú go fírinneach. Ba cheart riachtanais ateangaireachta, leochaileachta agus inrochtaineachta a chur in iúl.",
    plainLaw: "Ná cum doiciméid atá ar iarraidh. Mínigh cad atá ann, cad atá ar iarraidh agus cén fáth.", sourceLabel: "An Oifig um Chosaint Idirnáisiúnta (IPO)",
    choices: {
      explain: c("Caomhnaigh an méid atá sábháilte, mínigh bearnaí agus iarr ateangaire nó tacaíocht inrochtaineachta más gá.", "Ba cheart cuntas an duine féin a chloisteáil sa phróiseas le tacaíocht chuí.", "Tugtar aghaidh go hoscailte ar fhianaise atá ar iarraidh seachas í a cheilt."),
      forge: c("Cruthaigh doiciméid ionaid a bhfuil cuma oifigiúil orthu.", "Is féidir le doiciméid bhréagacha dochar tromchúiseach a dhéanamh d’éileamh.", "Bogann an aird ó na fíorchúinsí chuig an dallamullóg."),
      silence: c("Ná luaigh tráma, féiniúlacht ná míchumas riamh, fiú nuair atá siad ábhartha.", "Is féidir eolas íogair a phlé faoi rún le tacaíocht cháilithe.", "D’fhéadfadh riachtanais thábhachtacha cosanta nó nós imeachta fanacht dofheicthe.")
    }
  },
  "protection:Travel": {
    eyebrow: "Éire a bhaint amach", title: "Abair go soiléir go bhfuil cosaint de dhíth",
    scene: "Ag calafort iontrála Éireannach, déanann eagla agus ídiú míniú ar chontúirt an fhillte deacair.",
    question: "Cad ba cheart don duine a chur in iúl?",
    law: "Ba cheart do dhuine atá ag lorg tearmainn a rá go soiléir go dteastaíonn cosaint idirnáisiúnta uaidh nó uaithi agus comhoibriú leis an bpróiseas clárúcháin agus scagtha is infheidhme.",
    plainLaw: "Úsáid focail dhíreacha: ‘Ba mhaith liom iarratas a dhéanamh ar chosaint idirnáisiúnta. Tá eagla orm filleadh.’", sourceLabel: "An Oifig um Chosaint Idirnáisiúnta (IPO)",
    choices: {
      ask: c("Iarr cosaint idirnáisiúnta go soiléir agus iarr ateangaireacht más gá.", "Cabhraíonn cumarsáid shoiléir leis an duine dul isteach sa phróiseas ceart.", "Is féidir an eagla filleadh atá luaite a thaifeadadh agus a mheas."),
      tourist: c("Ceil an eagla agus abair nach bhfuil sa chuairt ach turasóireacht.", "Ní chuireann sé sin an gá le cosaint in iúl.", "D’fhéadfadh nach dtiocfadh an duine isteach sa phróiseas atá ceaptha chun an riosca a mheas."),
      script: c("Abair cuntas míchruinn atá curtha de ghlanmheabhair.", "Úsáid focail fhírinneacha an duine féin.", "D’fhéadfadh neamhréireachtaí agallamh atá deacair cheana féin a dhéanamh níos deacra.")
    }
  },
  "protection:Arrive": {
    eyebrow: "An córas iarratais agus glactha", title: "Tá róil éagsúla ag IPO agus IPAS",
    scene: "Tá eolas dlíthiúil, cóiríocht agus cabhair le háit scoile do leanbh de dhíth ar an iarratasóir.",
    question: "Cén plean a aithníonn na freagrachtaí éagsúla?",
    law: "Scrúdaíonn IPO iarratais chosanta. Tá IPAS freagrach as cóiríocht ghlactha agus tacaíochtaí gaolmhara. Soláthraíonn Cúnamh Dlíthiúil agus eagraíochtaí neamhspleácha cúnamh ar leith.",
    plainLaw: "Tagann cinneadh an cháis, cóiríocht agus comhairle dlí ó sheirbhísí éagsúla.", sourceLabel: "Cóiríocht agus tacaíochtaí IPAS",
    choices: {
      roles: c("Déan teagmháil le IPO faoin gcás, le IPAS faoi riachtanais ghlactha agus le dlíodóir faoi chomhairle dlí.", "Éascaíonn idirdhealú idir róil cabhair a iarraidh ar an gcomhlacht ceart.", "Is féidir riachtanais phráinneacha agus an t-iarratas dlíthiúil a chur chun cinn trí na bealaí cuí."),
      manager: c("Iarr ar bhainisteoir cóiríochta stádas dídeanaí a cheadú.", "Ní dhéanann foireann chóiríochta cinneadh faoin éileamh cosanta.", "Cailltear am ag iarraidh cinneadh dlíthiúil ar an duine mícheart."),
      address: c("Bog gan na húdaráis ná an comhairleoir dlí a chur ar an eolas.", "Ba cheart eolas teagmhála a choinneáil cothrom le dáta.", "D’fhéadfaí coinní nó cinntí tábhachtacha a chailleadh.")
    }
  },
  "protection:Build a life": {
    eyebrow: "Ag fanacht agus ag glacadh páirte", title: "Seiceáil cearta reatha seachas brath ar ráflaí",
    scene: "Tairgeann fostóir obair, agus easaontaíonn cónaitheoirí eile faoin uair is féidir le hiarratasóirí dul isteach sa mhargadh saothair.",
    question: "Cad ba cheart don iarratasóir a dhéanamh?",
    law: "Braitheann rochtain ar an margadh saothair ar an dlí, an t-uainiú agus na coinníollacha a bhaineann leis an iarratas aonair. Tá rialacha ar leith ag oideachas, sláinte, gearáin agus tacaíochtaí leanaí.",
    plainLaw: "Seiceáil incháilitheacht reatha agus faigh an cead riachtanach sula dtosaíonn tú ag obair.", sourceLabel: "Mol Eolais Chomhairle Dídeanaithe na hÉireann",
    choices: {
      current: c("Seiceáil an riail reatha don iarratas seo agus ná tosaigh go dtí go ndeonaítear aon chead riachtanach.", "Seachnaíonn sé seo seanriail nó cúinsí duine eile a chur i bhfeidhm ar an gcás.", "Bunaítear an cinneadh oibre ar eolas reatha faoin duine féin."),
      rumour: c("Tosaigh mar gur ceadaíodh do chónaitheoir eile obair.", "D’fhéadfadh duine eile iarratas a dhéanamh faoi rialacha eile nó ag am eile.", "D’fhéadfadh an t-iarratasóir gníomhú gan an cead atá riachtanach ina chás féin."),
      never: c("Glac leis nach féidir le hiarratasóirí staidéar, obair ná ábhair imní a ardú riamh.", "Tá cearta agus bealaí chun tacaíochta ag iarratasóirí, cé go bhfuil coinníollacha i gceist.", "D’fhéadfaí deiseanna agus cosaintí a chailleadh gan ghá.")
    }
  },
  "study:Plan": {
    eyebrow: "Sula nglacann tú le háit", title: "Seiceáil an cúrsa agus an costas iomlán",
    scene: "Tá tairiscint an choláiste spreagúil, ach ní chlúdaíonn an buiséad ach táillí teagaisc agus cíos sé seachtaine.",
    question: "Cad ba cheart a scrúdú sula dtugtar gealltanas?",
    law: "Braitheann cead staidéir ar an gcúrsa, an soláthraí, an t-airgeadas, an t-árachas agus riachtanais inimirce reatha eile.",
    plainLaw: "Deimhnigh go gcáilíonn an clár agus déan plean réalaíoch do tháillí, tithíocht, árachas agus an saol laethúil.", sourceLabel: "Teacht chun staidéir in Éirinn",
    choices: {
      budget: c("Fíoraigh an cúrsa agus an soláthraí, ansin ríomh táillí teagaisc, tithíocht, árachas agus costais mhaireachtála.", "Níl sa ligean isteach ach cuid amháin de thuras staidéir inmharthana.", "Is féidir leis an mac léinn a mheas an bhfuil an plean réalaíoch ó thaobh airgeadais agus dlí de."),
      job: c("Glac leis go gclúdóidh post páirtaimseartha gach costas láithreach.", "Cuireann an cead teorainn le cearta oibre agus ní ráthaítear fostaíocht.", "D’fhéadfadh an mac léinn teacht gan dóthain acmhainní do bhunriachtanais."),
      deposit: c("Íoc gníomhaire neamhfhíoraithe sula seiceálann tú an clár.", "Fíoraigh an institiúid, an clár agus an modh íocaíochta ar dtús.", "D’fhéadfaí táillí a chailleadh ar chúrsa nach dtacaíonn leis an gcead beartaithe.")
    }
  },
  "study:Prepare": {
    eyebrow: "Cead roimh imeacht", title: "Ní víosa é ligean isteach",
    scene: "Tagann an ríomhphost glactha agus glacann an mac léinn leis gurb é an t-aon doiciméad taistil atá riachtanach é.",
    question: "Cad é an chéad chéim cheart eile?",
    law: "De ghnáth teastaíonn an víosa cuí staidéir fadchónaithe ó mhic léinn a bhfuil víosa de dhíth orthu. Caithfidh gach mac léinn a bheith in ann cuspóir agus coinníollacha an staidéir a léiriú.",
    plainLaw: "Lean an seicliosta oifigiúil inimirce do mhic léinn; ní thagann tairiscint choláiste in áit cead taistil.", sourceLabel: "Teacht chun staidéir in Éirinn",
    choices: {
      visa: c("Lean an próiseas oifigiúil víosa más gá agus eagraigh fianaise airgeadais, árachais agus chúrsa.", "Nascann sé seo an tairiscint choláiste leis an mbealach ceart inimirce.", "Tacaíonn plean iomlán comhsheasmhach staidéir leis an taisteal."),
      offer: c("Úsáid an ríomhphost glactha mar víosa uathoibríoch.", "Is rudaí ar leith iad ligean isteach agus cead inimirce.", "D’fhéadfadh an taisteal teip sula dtosaíonn an cúrsa."),
      tourist: c("Tar isteach mar thurasóir agus athraigh go ciúin tar éis do ranganna tosú.", "Úsáid an bealach ceart staidéir roimh thaisteal.", "D’fhéadfadh nach mbeadh an mac léinn in ann an cead beartaithe a chlárú.")
    }
  },
  "study:Travel": {
    eyebrow: "Ag rialú teorann", title: "Caithfidh ciall a bheith leis an bplean staidéir",
    scene: "Fiafraíonn an t-oifigeach cá gcónóidh an mac léinn, conas a mhaoineofar an cúrsa agus cathain a thosóidh sé.",
    question: "Conas ba cheart don mhac léinn freagairt?",
    law: "Meastar iontráil ag an teorainn. Ba cheart go léireodh doiciméid agus freagraí fíorchúrsa staidéir a bhfuil ullmhúchán déanta dó.",
    plainLaw: "Tabhair fianaise fhírinneach faoin gcúrsa, airgeadas, árachas agus an chéad chóiríocht leat.", sourceLabel: "Seirbhís Inimirce na hÉireann",
    choices: {
      show: c("Freagair go fírinneach agus taispeáin fianaise ar an gcúrsa, íocaíocht, árachas, airgeadas agus cóiríocht.", "Tacaíonn na doiciméid leis an gcuspóir staidéir atá luaite.", "Is féidir leis an oifigeach an plean a thuiscint gan brath ar thoimhdí."),
      work: c("Abair gurb í obair lánaimseartha an príomhchuspóir.", "Tagann sé sin salach ar iarratas staidéir.", "Is cosúil go bhfuil cuspóir an taistil neamhréireach."),
      guess: c("Tabhair buille faoi thuairim faoi sheoladh an choláiste agus dátaí an chúrsa.", "Ba cheart do mhic léinn bunsonraí a gcláir féin a bheith ar eolas acu.", "D’fhéadfadh cuma neamhfhíor nó neamhullmhaithe a bheith ar an bplean staidéir.")
    }
  },
  "study:Arrive": {
    eyebrow: "An chéad téarma", title: "Cláraigh agus lean leis an gcúrsa",
    scene: "Cuireann fadhbanna tithíochta cathú ar an mac léinn clárú a chur siar agus ranganna a chailleadh.",
    question: "Cén freagra is fearr a chosnaíonn an turas staidéir?",
    law: "Caithfidh mic léinn incháilithe ó lasmuigh den LEE a fhanann níos mó ná 90 lá a gcead a chlárú agus leanúint de choinníollacha tinrimh agus cúrsa a ghabhann leis a chomhlíonadh.",
    plainLaw: "Cláraigh, glac páirt sa chúrsa agus cuir an coláiste ar an eolas go luath nuair a chuireann fadhbanna tromchúiseacha isteach ar thinreamh.", sourceLabel: "Cead inimirce a chlárú",
    choices: {
      support: c("Socraigh clárú, freastail ar an gcúrsa agus déan teagmháil luath le tacaíocht mac léinn faoi thithíocht nó folláine.", "Éascaíonn tacaíocht luath freagrachtaí inimirce agus acadúla a chomhlíonadh.", "Taifeadtar fadhbanna sula n-éiríonn siad ina neamhláithreacht gan mhíniú nó ina gcailliúint stádais."),
      skip: c("Stop ag freastal gan insint don choláiste.", "Tá páirt a ghlacadh sa chúrsa tábhachtach don chead.", "D’fhéadfadh iarmhairtí acadúla agus inimirce cur leis an bhfadhb tithíochta."),
      pps: c("Úsáid uimhir PSP in áit clárúcháin.", "Ní cead staidéir í uimhir PSP.", "Tá an chéim riachtanach clárúcháin cónaithe fós neamhiomlán.")
    }
  },
  "study:Build a life": {
    eyebrow: "Obair, pobal agus na chéad chéimeanna eile", title: "Tá teorainneacha le hobair mac léinn",
    scene: "Tairgeann fostóir uaireanta lánaimseartha le linn an téarma agus deir sé nach seiceálann aon duine coinníollacha mac léinn.",
    question: "Cad ba cheart don mhac léinn a dhéanamh?",
    law: "Braitheann ceart oibre mac léinn ar an stampa agus ar na coinníollacha reatha. Is féidir le sárú na gcoinníollacha sin dul i bhfeidhm ar stádas inimirce agus ar staidéar.",
    plainLaw: "Seiceáil na huaireanta agus na dátaí a cheadaíonn an cead reatha mac léinn sula nglacann tú le huainchlár.", sourceLabel: "Stampaí ceada inimirce",
    choices: {
      limits: c("Seiceáil coinníollacha reatha Stampa 2 agus ná glac ach le hobair a oireann dóibh.", "Tá coinníollacha an cheada tábhachtach fiú má thairgeann fostóir níos mó uaireanta.", "Tacaíonn fostaíocht leis an mac léinn seachas an cúrsa agus an stádas a chur i mbaol."),
      full: c("Glac le huaireanta gan teorainn mar gur cheadaigh an fostóir iad.", "Ní féidir le fostóir cead inimirce a leathnú.", "D’fhéadfadh an mac léinn coinníollacha fanachta a shárú."),
      cash: c("Oibrigh gan dearbhú ionas nach bhfeictear na huaireanta.", "Cruthaíonn obair neamhdhearbhaithe rioscaí fostaíochta, cánach agus inimirce.", "Cailleann an mac léinn cosaintí tábhachtacha san ionad oibre agus cruthaítear riosca eile.")
    }
  },
  "family:Plan": {
    eyebrow: "Roimh an aistriú", title: "Is é stádas an urraitheora a chinneann an bealach",
    scene: "Creideann céile in Éirinn go dtugann pósadh na cearta céanna le saoránacht Éireannach go huathoibríoch.",
    question: "Cad is gá a dheimhniú ar dtús?",
    law: "Tá bealaí teaghlaigh éagsúil ag brath ar cé acu is saoránach Éireannach, Briotanach, den LEE nó na hEilvéise, duine ó lasmuigh den LEE, nó tairbhí cosanta idirnáisiúnta é an t-urraitheoir.",
    plainLaw: "Aithin stádas cruinn an urraitheora agus catagóir an chaidrimh sula roghnaíonn tú foirm nó víosa.", sourceLabel: "Teacht go hÉirinn chun bheith le teaghlach",
    choices: {
      sponsor: c("Seiceáil stádas an urraitheora, catagóir an chaidrimh agus na rialacha reatha airgeadais agus doiciméad.", "Aithníonn sé sin an bealach ceart teaghlaigh.", "Ullmhaítear an t-iarratas don urraitheoir agus don chaidreamh iarbhír."),
      marriage: c("Glac leis go dtugann teastas pósta cearta iontrála agus oibre go huathoibríoch.", "Tá fianaise ar an gcaidreamh tábhachtach, ach tá próiseas inimirce i gceist fós.", "D’fhéadfaí iarracht a dhéanamh taisteal nó obair gan an cead riachtanach."),
      form: c("Úsáid an chéad fhoirm teaghlaigh ar líne, beag beann ar stádas an urraitheora.", "Leanann urraitheoirí agus baill teaghlaigh éagsúla próisis éagsúla.", "Is féidir le hiarratas mícheart moill nó diúltú inseachanta a chruthú.")
    }
  },
  "family:Prepare": {
    eyebrow: "Fianaise agus cead", title: "Léirigh fíorphlean teaghlaigh",
    scene: "Tá blianta de theachtaireachtaí agus cuairteanna ag an lánúin, ach tá a bhfianaise tithíochta agus airgeadais mí-eagraithe.",
    question: "Cén t-ullmhúchán is fearr?",
    law: "D’fhéadfadh iarratais teaghlaigh scrúdú a dhéanamh ar an gcaidreamh cáilitheach, incháilitheacht an urraitheora, airgeadas, cóiríocht, spleáchas agus critéir eile a bhaineann leis an mbealach.",
    plainLaw: "Úsáid an seicliosta oifigiúil agus eagraigh fianaise fhírinneach ar an gcaidreamh agus ar an bplean praiticiúil.", sourceLabel: "Treoir maidir le bheith le teaghlach",
    choices: {
      file: c("Tóg comhad soiléir fianaise leis an seicliosta agus mínigh aon fhíorbhearnaí.", "Éascaíonn fianaise eagraithe fhírinneach measúnú an iarratais.", "Tá fíorstair agus fíorphlean an teaghlaigh le feiceáil gan ábhar cumtha."),
      fake: c("Cruthaigh doiciméid do thréimhsí nach bhfuil mórán fianaise ann dóibh.", "Is féidir le fianaise bhréagach dochar tromchúiseach a dhéanamh don iarratas.", "D’fhéadfaí an mhuinín san iarratas iomlán a lagú."),
      ignore: c("Déan neamhaird de riachtanais airgeadais nó tithíochta mar go bhfuil an caidreamh fíor.", "Ní bhaineann fíorchaidreamh gach coinníoll den bhealach.", "D’fhéadfadh bearna fianaise inseachanta moill nó teip a chur ar an iarratas.")
    }
  },
  "family:Travel": {
    eyebrow: "Teacht mar bhall teaghlaigh", title: "Luaigh an fíorchuspóir ag an teorainn",
    scene: "Tá an víosa nó an réamh-imréiteach cuí ag an taistealaí agus tá sé beartaithe cónaí leis an urraitheoir.",
    question: "Cad ba cheart a dhéanamh ag iontráil?",
    law: "Nuair a bhíonn víosa nó réamh-imréiteach riachtanach, tacaíonn sé le taisteal chun na críche teaghlaigh atá luaite. Déantar iontráil agus an cead tosaigh a mheas ag an teorainn.",
    plainLaw: "Mínigh cuspóir an teaghlaigh go macánta agus tabhair an ceadú agus sonraí an urraitheora leat.", sourceLabel: "Teacht chun bheith le teaghlach",
    choices: {
      family: c("Luaigh cuspóir an teaghlaigh agus taispeáin an ceadú, sonraí an chaidrimh agus seoladh an urraitheora.", "Tagann an míniú leis an iarratas agus leis na doiciméid.", "Is féidir leis an oifigeach iontráil a mheas ar an mbonn teaghlaigh beartaithe."),
      holiday: c("Abair nach bhfuil ann ach saoire ghearr cé go bhfuil sé beartaithe fanacht.", "Ba cheart don chuspóir luaite a bheith fírinneach.", "Tagann an cuntas salach ar an iarratas teaghlaigh agus ar an bhfanacht bheartaithe."),
      none: c("Ná tabhair sonraí teagmhála an urraitheora ná eolas cóiríochta leat.", "Ba cheart go mbeadh bunfhianaise faoin teaghlach agus faoin bplean teachta ar fáil.", "D’fhéadfadh sé a bheith deacair don taistealaí a mhíniú cá gcónóidh sé nó sí agus cé leis.")
    }
  },
  "family:Arrive": {
    eyebrow: "Clárú agus coinníollacha", title: "Ná déan buille faoi thuairim faoi cheadanna an stampa",
    scene: "Tá fostóir cianoibre ag iarraidh ar an mball teaghlaigh tosú arís láithreach ó sheoladh Éireannach.",
    question: "Cad ba cheart don duine a dhéanamh roimh obair?",
    law: "Braitheann an ceart oibre ar an gcead inimirce a deonaíodh. Is féidir le ceadanna teaghlaigh a bheith éagsúil de réir an urraitheora agus an bhealaigh.",
    plainLaw: "Cláraigh an cead más gá agus deimhnigh a choinníollacha oibre sula dtosaíonn tú nó sula bhfilleann tú ar fhostaíocht in Éirinn.", sourceLabel: "Stampaí ceada inimirce",
    choices: {
      stamp: c("Críochnaigh an clárú riachtanach agus seiceáil go díreach cad a cheadaíonn an cead.", "Freagraíonn coinníollacha an stampa nó an IRP ceist na hoibre.", "Ní thosaíonn fostaíocht go dtí go dtacaíonn an cead Éireannach léi."),
      spouse: c("Glac leis go bhfuil cearta oibre gan teorainn ag gach céile go huathoibríoch.", "Ní hionann gach cead teaghlaigh.", "D’fhéadfadh obair tosú sula gcomhlíontar an coinníoll riachtanach."),
      remote: c("Glac leis nach mbaineann coinníollacha inimirce Éireannacha le cianobair eachtrach.", "Is féidir le rialacha inimirce, cánach agus fostaíochta na hÉireann baint le hobair agus tú in Éirinn go fisiciúil.", "Cruthaíonn socrú cianoibre ceisteanna dlíthiúla agus cánach gan choinne.")
    }
  },
  "family:Build a life": {
    eyebrow: "Neamhspleáchas agus muintearas", title: "Tóg tacaíocht lasmuigh den urraitheoir",
    scene: "Mothaíonn an t-aistriú uaigneach, agus braitheann an ball teaghlaigh ar an urraitheoir do gach doiciméad, coinne agus teagmháil shóisialta.",
    question: "Cén chéim a chruthaíonn níos mó slándála?",
    law: "Is féidir le himircigh eolas neamhspleách a lorg faoi inimirce, obair, sláinte, sábháilteacht agus seirbhísí áitiúla. Bíonn tacaíochtaí éigeandála agus speisialtóra ar fáil fós nuair a éiríonn caidrimh míshábháilte.",
    plainLaw: "Coinnigh cóipeanna de do dhoiciméid féin agus foghlaim conas teacht ar sheirbhísí neamhspleácha.", sourceLabel: "Seirbhís Inimirce na hÉireann",
    choices: {
      network: c("Coinnigh cóipeanna de dhoiciméid phearsanta agus ceangail le comhairle neamhspleách, seirbhísí pobail agus sláinte.", "Feabhsaíonn líonra tacaíochta níos leithne neamhspleáchas praiticiúil agus sábháilteacht.", "Is féidir leis an duine cinntí eolasacha a dhéanamh gan brath ar chaidreamh amháin do gach rud."),
      all: c("Lig don urraitheoir gach doiciméad agus pasfhocal a choinneáil.", "Ba cheart do dhaoine fásta rochtain shábháilte a choinneáil ar a n-eolas aitheantais agus cuntais féin.", "Éiríonn gach cinneadh praiticiúil spleách ar an urraitheoir."),
      silent: c("Seachain tacaíocht mar go bhféadfadh ceisteanna cur isteach ar an stádas.", "Cabhraíonn eolas iontaofa rúnda le daoine a roghanna a thuiscint.", "D’fhéadfadh fadhbanna éirí níos tromchúisí sula lorgaítear cabhair.")
    }
  },
  "protection-access:Plan": {
    eyebrow: "Sábháilteacht, míchumas agus tuismitheoireacht", title: "Is ceisteanna ar leith iad cosaint agus inrochtaineacht",
    scene: "Deirtear le Adama go ráthóidh úsáid cathaoireach rothaí cosaint di nó go gcuirfidh sí cosc uirthi iarratas a dhéanamh lena mac.",
    question: "Cad ba cheart a cinneadh a threorú?",
    law: "Meastar éileamh cosanta de réir riosca aonair géarleanúna nó díobhála tromchúisí. D’fhéadfadh míchumas agus tuismitheoireacht aonair riachtanais speisialta ghlactha nó nós imeachta a chruthú, ach ní chinneann siad an t-éileamh astu féin.",
    plainLaw: "Mínigh an fhíor-eagla filleadh agus aithin ar leithligh an tacaíocht is gá chun páirt shábháilte a ghlacadh sa phróiseas.", sourceLabel: "Comhairle Dídeanaithe na hÉireann: iarratais tar éis 12 Meitheamh 2026",
    choices: {
      separate: c("Mínigh an riosca cosanta go fírinneach agus déan liosta ar leith de riachtanais soghluaisteachta, sláinte agus tuismitheoireachta.", "Coinníonn sé seo an t-éileamh dlíthiúil agus na riachtanais rochtana araon le feiceáil.", "Faigheann lucht cinnteoireachta an cuntas cosanta agus is féidir le foireann ghlactha tacaíocht phraiticiúil a aithint."),
      guarantee: c("Glac leis go ráthaíonn míchumas stádas dídeanaí go huathoibríoch.", "Ní hionann leochaileacht agus an tástáil dhlíthiúil ar chosaint.", "D’fhéadfadh nach míneofaí an eagla phearsanta filleadh mar is ceart."),
      hide: c("Ceil an míchumas mar nach féidir le tuismitheoirí a bhfuil tacaíocht de dhíth orthu iarratas a dhéanamh.", "Ní bhaineann míchumas an ceart cosaint a lorg de dhuine.", "D’fhéadfaí tacaíochtaí riachtanacha glactha agus nós imeachta a chailleadh.")
    }
  },
  "protection-access:Prepare": {
    eyebrow: "Scagadh agus leochaileacht", title: "Luaigh gach riachtanas, ní hamháin an ceann is feiceálaí",
    scene: "Tá an chathaoir rothaí soiléir, ach níl an phian ainsealach, tráma, cógas ná cúram linbh sé bliana d’aois le feiceáil.",
    question: "Conas ba cheart do Adama tabhairt faoin measúnú leochaileachta?",
    law: "Faoi chóras 2026, tairgtear measúnú deonach leochaileachta d’iarratasóirí. Tá míchumas, tuismitheoireacht aonair, tinneas tromchúiseach agus taithí ar fhoréigean i measc na gcatagóirí aitheanta chun riachtanais speisialta ghlactha a shainaithint.",
    plainLaw: "Úsáid an measúnú chun riachtanais fholaithe agus infheicthe a mhíniú agus iarr go dtaifeadfaí an t-eolas go cruinn.", sourceLabel: "Measúnú leochaileachta IPAS",
    choices: {
      full: c("Déan cur síos ar shoghluaisteacht, pian, cógas, tráma agus riachtanais tuismitheoireachta, le hateangaireacht más gá.", "Is féidir le riachtanais fhorluiteacha freagraí praiticiúla éagsúla a éileamh.", "Tá bonn níos iomláine sa mheasúnú do chóiríocht agus atreoruithe chuig seirbhísí."),
      chair: c("Luaigh an chathaoir rothaí amháin mar go bhfuil gach rud eile príobháideach.", "Tá smacht aici ar nochtadh eolais, ach d’fhéadfadh sé a bheith níos deacra freastal ar riachtanais neamhthaifeadta.", "D’fhéadfadh bacainní pian, cógais nó tuismitheoireachta fanacht dofheicthe go dtí géarchéim."),
      refuse: c("Diúltaigh mar go lagaíonn glacadh le measúnú an t-éileamh cosanta.", "Tá an measúnú deonach agus pléann sé riachtanais tacaíochta seachas stádas cosanta a chinneadh.", "Cailltear bealach chun riachtanais speisialta ghlactha a aithint ar an gcúis mhícheart.")
    }
  },
  "protection-access:Travel": {
    eyebrow: "Ag bogadh tríd an gcóras glactha", title: "D’fhéadfadh leaba a thairgtear a bheith neamh-inúsáidte",
    scene: "Socraítear iompar chuig cóiríocht, ach faigheann Adama amach go bhfuil a seomra thuas staighre agus nach féidir an seomra folctha a úsáid go sábháilte.",
    question: "Cén freagra a chruthaíonn an taifead is soiléire?",
    law: "Úsáideann IPAS eolas leochaileachta chun aghaidh a thabhairt ar riachtanais speisialta ghlactha. Tá próisis ann d’aistriú ar thosaíocht leighis nó ar bhonn eisceachtúil agus do bhreithniú breise, cé nach ráthaítear suíomh roghnaithe ná aistriú láithreach.",
    plainLaw: "Déan cur síos scríofa ar an mbac rochtana beacht, tabhair an fhianaise leighis atá ar fáil agus úsáid an próiseas oifigiúil chun an cheist a ardú.", sourceLabel: "IPAS: cóiríocht agus breithniú leighis",
    choices: {
      record: c("Tuairiscigh an bac beacht láithreach, coinnigh cóipeanna agus iarr breithniú leighis nó eisceachtúil trí IPAS.", "Tá fianaise shonrach scríofa níos láidre ná iarratas ginearálta ar bhogadh.", "Is féidir le IPAS an fhíorfhadhb sábháilteachta agus rochtana a mheas tríd an bpróiseas cuí."),
      leave: c("Fág gan insint d’aon duine agus glac leis go mbeidh seomra eile ar fáil.", "Is féidir le himeacht í a scaradh ó thacaíocht ghlactha gan an bac a réiteach.", "D’fhéadfadh easpa dídine a bheith roimh Adama agus a leanbh agus d’fhéadfadh teagmháil leo éirí níos deacra."),
      accept: c("Úsáid an seomra míshábháilte mar nach féidir le cónaitheoirí oiriúnacht a cheistiú.", "Is féidir ábhair imní cóiríochta agus riachtanais speisialta a ardú.", "Éiríonn titimí, deacrachtaí sláinteachais agus pian atá ag dul in olcas níos dóichí.")
    }
  },
  "protection-access:Arrive": {
    eyebrow: "Rochtain ar agallamh", title: "D’fhéadfadh coigeartuithe a bheith riachtanach le páirt a ghlacadh",
    scene: "D’fhéadfadh láthair agallaimh, suí ar feadh i bhfad agus fo-iarmhairtí cógais cosc a chur ar Adama cuntas iomlán a thabhairt.",
    question: "Cad ba cheart di a dhéanamh roimh an gcoinne?",
    law: "Ba cheart d’iarratasóirí freastal agus comhoibriú leis an bpróiseas, agus riachtanais mhíchumais, chumarsáide, shláinte agus nós imeachta eile a ardú chomh luath agus is féidir. Is féidir le comhairle speisialtóra dlí na hoiriúnuithe agus spriocdhátaí ábhartha a mhíniú.",
    plainLaw: "Inis don IPO agus don chomhairleoir dlí roimh an agallamh cad a dhéanann rannpháirtíocht deacair, ní hamháin tar éis dó teip.", sourceLabel: "Ionad Dlí Neamhspleách Chomhairle Dídeanaithe na hÉireann",
    choices: {
      early: c("Déan teagmháil luath le IPO agus leis an gcomhairleoir dlí faoi ábhair shonracha rochtana, sosanna, cógais agus cúram leanaí.", "Tugann fógra sonrach roimh ré deis don phróiseas freagairt.", "Is fearr is féidir le Adama páirt a ghlacadh agus is féidir cúram a mic a phleanáil."),
      miss: c("Caill an t-agallamh gan teagmháil mar go ngabhann míchumas leithscéal as neamhláithreacht go huathoibríoch.", "Ná glac leis go míneoidh neamhláithreacht í féin.", "D’fhéadfaí céim ríthábhachtach den nós imeachta a chailleadh gan an chúis a thuiscint."),
      endure: c("Ná habair aon rud agus lean ar aghaidh fiú nuair a chuireann pian isteach ar dhíriú.", "D’fhéadfadh deacracht gan mhíniú dul i bhfeidhm ar an gcaoi a gcloistear agus a dtaifeadtar an cuntas.", "D’fhéadfaí sonraí tábhachtacha a fhágáil ar lár nó cuma neamhréireach a bheith orthu.")
    }
  },
  "protection-access:Build a life": {
    eyebrow: "Sláinte, scoil agus neamhspleáchas", title: "Ní féidir le coinne amháin gach bac a réiteach",
    scene: "Tá dochtúir teaghlaigh, leanúnachas cógais, áit scoile, iompar inrochtana agus eolas faoi incháilitheacht oibre de dhíth ar Adama.",
    question: "Cén plean is réalaíche?",
    law: "Feidhmíonn cúram sláinte, oideachas, cóiríocht ghlactha agus rochtain ar an margadh saothair trí sheirbhísí agus rialacha incháilitheachta éagsúla in Éirinn. Foilsíonn IPAS bealaí agus eolas tacaíochta ar leith do gach ceann.",
    plainLaw: "Cruthaigh gníomh agus teagmháil ar leith don tsláinte, scoil, cóiríocht agus inimirce seachas fanacht le seirbhís amháin gach rud a bhainistiú.", sourceLabel: "Seirbhísí agus tacaíochtaí IPAS",
    choices: {
      plan: c("Déan plean ceithre chuid agus lorg abhcóide nó oibrí tacaíochta chun tascanna práinneacha a chomhordú.", "Tá comhordú tábhachtach mar go bhfuil ról éagsúil ag gach córas.", "Is féidir tús áite a thabhairt do chógas agus scoil gan dearmad a dhéanamh ar chóiríocht ná ar dhualgais an cháis."),
      ipo: c("Iarr ar chás-oibrí IPO gach seirbhís sláinte, scoile agus iompair a shocrú.", "Scrúdaíonn IPO an t-iarratas cosanta; ní reáchtálann sé gach seirbhís teachta.", "Dírítear riachtanais phraiticiúla phráinneacha chuig an gcomhlacht mícheart."),
      wait: c("Fan le stádas cosanta sula lorgaíonn tú cúram sláinte nó áit scoile.", "Is féidir le hiarratasóirí agus leanaí seirbhísí a úsáid agus cás ar feitheamh, faoi réir na rialacha ábhartha.", "Téann sláinte in olcas agus cailleann an leanbh am oideachais gan ghá.")
    }
  },
  "eu-mobility:Plan": {
    eyebrow: "Saorghluaiseacht san AE", title: "Ní theastaíonn cead fostaíochta ó Elena",
    scene: "Deir earcaitheoir le Elena go dteastaíonn an cead oibre céanna ó shaoránaigh Bhulgáracha agus ó oibrithe lasmuigh den LEE agus tairgeann sé ceann a dhíol léi.",
    question: "Cad ba cheart di a fhíorú?",
    law: "Mar shaoránach AE, is féidir le Elena teacht isteach in Éirinn le pas nó cárta aitheantais náisiúnta bailí agus obair gan cead fostaíochta Éireannach. Baineann coinníollacha le cónaí thar an tréimhse tosaigh.",
    plainLaw: "Ná híoc as cead oibre nach dteastaíonn ó shaoránach AE; seiceáil na rialacha ar leith maidir le fanacht níos fadtéarmaí.", sourceLabel: "Teacht ón AE/LEE chun oibre",
    choices: {
      eu: c("Diúltaigh an cead a cheannach, fíoraigh an fostóir agus úsáid eolas oifigiúil faoi chónaí AE.", "Athraíonn a saoránacht AE an bealach inimirce, ach ní an gá le fíorphost.", "Seachnaíonn Elena calaois agus pleanálann sí de réir a fíorcheart saorghluaiseachta."),
      buy: c("Íoc mar go gcruthaíonn aois agus eitneacht Romach riachtanas speisialta ceada.", "Ní chruthaíonn na féiniúlachtaí sin riachtanas ceada fostaíochta do shaoránach AE.", "Tugtar airgead agus doiciméid íogaire d’earcaitheoir mímhacánta."),
      visitor: c("Ceil an plean oibre mar nach féidir le saoránaigh AE ach cuairt a thabhairt.", "Tá ceart ag saoránaigh AE obair i stát AE eile, faoi réir na rialacha cónaithe ábhartha.", "Ní thuigeann Elena an bonn dlíthiúil atá aici agus ní bhaineann sí lánúsáid as.")
    }
  },
  "eu-mobility:Prepare": {
    eyebrow: "Fanacht thar na chéad mhíonna", title: "Tá coinníollacha cónaithe ag baint le saorghluaiseacht fós",
    scene: "Tá sé beartaithe ag Elena fanacht ar feadh tréimhse éiginnte, ach níl aici ach gealltanas gairid corr-oibre agus beagnach aon choigilteas.",
    question: "Cén plean is iontaofa?",
    law: "Is féidir le saoránaigh AE cónaí in Éirinn ar dtús agus fanacht níos faide agus ceart faoi Chonarthaí an AE á fheidhmiú acu, amhail obair, féinfhostaíocht, staidéar cáilitheach nó féindóthanacht. Tá cosaintí agus coinníollacha sonracha ann do chuardaitheoirí poist.",
    plainLaw: "Coinnigh fianaise ar fhíorobair nó cuardach poist agus tuig cén bonn a thacaíonn le cónaí tar éis na tréimhse tosaigh.", sourceLabel: "Cearta cónaithe shaoránaigh AE in Éirinn",
    choices: {
      evidence: c("Coinnigh iarratais poist, conarthaí, duillíní pá agus taifid tithíochta agus an bonn cónaithe ábhartha á sheiceáil.", "Cabhraíonn fianaise lena léiriú go bhfuil Elena ag obair nó ag lorg oibre go dáiríre.", "Tá a plean fadtéarmach bunaithe ar cheart conartha atá doiciméadaithe."),
      forever: c("Glac leis go dtugann saoránacht AE buanchónaí neamhchoinníollach ón gcéad lá.", "Ní hionann iontráil tosaigh agus cónaí fadtéarmach.", "D’fhéadfadh nach bhfaigheadh Elena amach faoi fhadhb chónaithe go dtí go ndéanann sí iarracht seirbhís eile a úsáid."),
      cash: c("Glac le hobair airgid thirim gan doiciméid mar go gcruthaíonn aon obair cónaí.", "Lagaíonn obair neamhdhearbhaithe cosaintí fostaíochta agus b’fhéidir nach soláthraíonn sí fianaise inúsáidte.", "Méadaíonn dúshaothrú agus fanann a stair oibre deacair a chruthú.")
    }
  },
  "eu-mobility:Travel": {
    eyebrow: "Ag tosú ag obair", title: "Ní ceadanna oibre AE iad uimhir PSP ná IRP",
    scene: "Iarrann an t-óstán Cead Cónaithe Éireannach ar Elena sula gcuirfidh sé ar an uainchlár í.",
    question: "Conas ba cheart di freagairt?",
    law: "De ghnáth ní chláraíonn saoránaigh AE le Seachadadh Seirbhíse Inimirce (ISD) ná ní fhaigheann siad IRP chun a gcearta AE féin a fheidhmiú. Is aitheantóir ar leith í uimhir PSP chun críocha cánach agus seirbhísí poiblí.",
    plainLaw: "Taispeáin aitheantas AE agus mínigh an bonn ceart don cheart oibre; déan céimeanna cánach agus PSP ar leithligh.", sourceLabel: "Saoránaigh AE ag obair in Éirinn",
    choices: {
      explain: c("Tabhair a doiciméad aitheantais Bulgárach agus iarr ar Acmhainní Daonna rialacha oibrithe AE a athbhreithniú.", "Ceartaíonn sé seo an riachtanas gan doiciméad nár cheart di a bheith aici a chumadh.", "Is féidir leis an bhfostóir í a chur ag obair ar an mbonn ceart AE."),
      fake: c("Ceannaigh IRP bréagach mar go n-éilíonn an fostóir é.", "Ná cruthaigh ná ceannaigh doiciméid bhréagacha inimirce riamh.", "Éiríonn earráid an fhostóra ina fadhb thromchúiseach dhlíthiúil do Elena."),
      ppswork: c("Abair gurb í an uimhir PSP an doiciméad a thugann cearta oibre AE.", "Ní chruthaíonn an uimhir PSP an ceart oibre.", "Tá mearbhall fós idir dhá chóras ar leith.")
    }
  },
  "eu-mobility:Arrive": {
    eyebrow: "Idirdhealú tithíochta", title: "D’fhéadfadh níos mó ná inacmhainneacht a bheith taobh thiar de dhiúltú",
    scene: "Tá tiarna talún dearfach ar an bhfón, ansin deir sé nach bhfuil an seomra ar fáil tar éis Elena a fheiceáil agus a chloisteáil gur bean Romach thrasinscneach í.",
    question: "Cad is féidir le Elena a dhéanamh gan glacadh leis go bhfuil gach diúltú neamhdhleathach?",
    law: "Cuireann dlí comhionannais na hÉireann cosc ar idirdhealú tithíochta ar fhorais chosanta lena n-áirítear cine, inscne agus aois. Cumhdaítear idirdhealú trasinscneach faoin bhforas inscne, ach tá fianaise agus teorainneacha ama tábhachtach i ngearán.",
    plainLaw: "Taifead an méid a tharla, sábháil an fógra agus na teachtaireachtaí, agus lorg comhairle tithíochta nó comhionannais go pras.", sourceLabel: "IHREC: cine agus tithíocht",
    choices: {
      save: c("Sábháil an fógra agus na teachtaireachtaí, scríobh síos an méid a dúradh agus lorg comhairle ó IHREC nó ó sheirbhís tithíochta.", "Cabhraíonn fianaise a taifeadadh ag an am le hidirdhealú a dhealú ó mhíniú eile.", "Is féidir le Elena gearán a mheas agus leanúint den chuardach práinneach tithíochta."),
      threat: c("Bagair ar an tiarna talún go poiblí gan aon fhianaise a chaomhnú.", "Tá fearg intuigthe, ach cruthaíonn fianaise agus comhairle bealach níos láidre chun réitigh.", "Imíonn an fógra agus éiríonn sé níos deacra na focail chruinne idirdhealaitheacha a chruthú."),
      accept: c("Glac leis go bhfuil idirdhealú i gcoinne tionóntaí Romacha nó trasinscneacha dleathach i maoin phríobháideach.", "Clúdaíonn rialacha comhionannais seirbhísí tithíochta príobháideacha, faoi réir sonraí agus eisceachtaí dlíthiúla.", "Ní scrúdaítear diúltú a bhféadfadh caingean a bheith bunaithe air.")
    }
  },
  "eu-mobility:Build a life": {
    eyebrow: "Comhionannas san ionad oibre", title: "Is féidir le teagmhas amháin baint le roinnt foras cosanta",
    scene: "Déanann maoirseoir magadh faoi bhlas cainte agus inscne Elena, tugann sé sealaí níos fearr d’oibrithe níos óige nach Romaigh iad agus iarrann sé uirthi suaitheantas ainm eile a úsáid.",
    question: "Cén freagra a chosnaíonn na gnéithe forluiteacha?",
    law: "Cuireann na hAchtanna um Chomhionannas Fostaíochta cosc ar idirdhealú san ionad oibre ar fhorais lena n-áirítear inscne, cine agus aois. Cumhdaítear idirdhealú trasinscneach faoin bhforas inscne; is féidir gearáin oibre a thabhairt chuig an WRC.",
    plainLaw: "Taifead gach teagmhas agus duine inchomparáide, úsáid próiseas an fhostóra nuair atá sé sábháilte, agus faigh comhairle comhionannais go pras.", sourceLabel: "IHREC: idirdhealú san ionad oibre",
    choices: {
      log: c("Coinnigh taifead dátaithe ar fhocail, sealaí agus finnéithe, ansin lorg treoir ó IHREC nó WRC.", "Léiríonn an taifead conas a d’fhéadfadh cine, inscne agus aois oibriú le chéile.", "Is féidir le Elena réiteach eolasach inmheánach nó seachtrach a lorg sula gcailltear fianaise agus spriocdhátaí."),
      one: c("Tuairiscigh aois amháin mar nach féidir forais fhorluiteacha a bheith i ngearán amháin.", "Is féidir le gearán cur síos ar níos mó ná foras cosanta amháin nuair a thacaíonn na fíricí leis.", "Imíonn gnéithe cine agus inscne na córa ón gcuntas."),
      quit: c("Éirigh as láithreach gan uainchláir ná teachtaireachtaí a shábháil ná comhairle a lorg.", "Tagann sábháilteacht ar dtús, ach is féidir le caomhnú fianaise agus comhairle roghanna níos déanaí a chosaint.", "Stopann ioncam agus éiríonn sé níos deacra an patrún a léiriú.")
    }
  },
  "family-safety:Plan": {
    eyebrow: "Sábháilteacht láithreach", title: "Is féidir le heagla inimirce a bheith mar chuid de rialú comhéigneach",
    scene: "Rialaíonn céile Leila a pas, airgead agus fón agus deir sé go ndéanfaidh na Gardaí í a dhíbirt má fhágann sí leis na leanaí.",
    question: "Cad ba cheart teacht ar dtús?",
    law: "Is féidir rialú comhéigneach chomh maith le foréigean fisiciúil a bheith i gceist le mí-úsáid teaghlaigh. Ba cheart do dhuine i mbaol láithreach glaoch ar 999 nó 112; ní choisceann stádas inimirce ar íospartach teagmháil a dhéanamh leis an nGarda Síochána nó le seirbhís speisialtóra.",
    plainLaw: "Tabhair tús áite do shábháilteacht láithreach agus cúnamh rúnda speisialtóra; ní chinneann an drochídeoir stádas inimirce.", sourceLabel: "Tacaíocht Women’s Aid",
    choices: {
      safe: c("Úsáid gléas sábháilte nó teagmhálaí iontaofa chun teacht ar sheirbhís éigeandála nó tacaíocht speisialtóra um mhí-úsáid teaghlaigh.", "Is féidir le pleanáil sábháilteachta leanaí, teanga, faireachas agus doiciméid a chur san áireamh.", "Faigheann Leila roghanna rúnda gan dul i ngleic leis an drochídeoir ar dtús."),
      confront: c("Fógair an plean imeachta agus éiligh gach doiciméad ar ais agus í ina haonar.", "Is féidir le hachrann an baol a mhéadú; is féidir le speisialtóir cabhrú le himeacht níos sábháilte a phleanáil.", "D’fhéadfadh an drochídeoir foréigean a mhéadú nó doiciméid agus airgead a bhaint di."),
      believe: c("Fan mar go bhfuil cumhacht dhlíthiúil ag an gcéile díbirt a ordú.", "Ní dhéanann céile cinntí inimirce.", "Leanann bagairtí bréagacha inimirce de Leila agus na leanaí a choinneáil sáinnithe.")
    }
  },
  "family-safety:Prepare": {
    eyebrow: "Cumarsáid phríobháideach", title: "Tá modh sábháilte teagmhála tábhachtach",
    scene: "Seiceálann an céile stair an bhrabhsálaí agus aistríonn sé gach litir oifigiúil sula mbíonn deis ag Leila í a léamh.",
    question: "Conas is féidir léi eolas a lorg níos sábháilte?",
    law: "Tugann ISD rabhadh go bhfágann gléasanna rianta digiteacha agus ceadaíonn sé d’íospartach teagmháil ionadaí a úsáid. Is féidir le Women’s Aid ateangaire a fháil agus glaoiteoirí a nascadh le seirbhísí ar fud na hÉireann.",
    plainLaw: "Úsáid gléas níos sábháilte agus sonraí teagmhála nach féidir leis an drochídeoir faire orthu; iarr ateangaire seachas brath ar an drochídeoir.", sourceLabel: "Treoirlínte inimirce ISD maidir le mí-úsáid teaghlaigh",
    choices: {
      private: c("Úsáid gléas iontaofa, ríomhphost sábháilte nó seoladh ionadaí agus iarr ateangaireacht neamhspleách.", "Laghdaíonn sé seo faireachas agus tugann sé rochtain dhíreach do Leila ar a heolas féin.", "Is féidir le seirbhísí tacaíochta cumarsáid a dhéanamh gan gach rud a chur tríd an gcéile."),
      shared: c("Úsáid cuntas roinnte an teaghlaigh mar go mbaineann scriosadh staire gach rian.", "Ní ráthaíonn scriosadh staire go bhfuil gníomhaíocht ceilte.", "D’fhéadfadh an céile an plean sábháilteachta nó inimirce a aimsiú."),
      translate: c("Lig don chéile gach comhrá rúnda a aistriú.", "Níor cheart do dhrochídeoir líomhnaithe ateangaireacht comhairle sábháilteachta nó dlí a rialú.", "D’fhéadfaí eolas a athrú, a choinneáil siar nó a úsáid chun Leila a imeaglú.")
    }
  },
  "family-safety:Travel": {
    eyebrow: "Stádas neamhspleách inimirce", title: "Ní chríochnaíonn imeacht an cead go huathoibríoch",
    scene: "Tá cead cónaithe Leila nasctha lena céile, agus creideann sí go mbeidh sí gan stádas dleathach an oíche sin má bhogann sí chuig tearmann.",
    question: "Cén bealach ba cheart di a fhiosrú go práinneach?",
    law: "Féadfaidh íospartach a bhfuil a cead nasctha leis an déantóir iarratas a dhéanamh go díreach nó trí aturnae ar chead neamhspleách inimirce faoi threoirlínte ISD maidir le mí-úsáid teaghlaigh. Níl táille iarratais ann agus caitear leis an iarratas faoi rún.",
    plainLaw: "Faigh comhairle faoin bpróiseas ceada neamhspleách; ní tharlaíonn cailliúint stádais go huathoibríoch ag an am céanna leis an drochídeoir a fhágáil.", sourceLabel: "Cead neamhspleách d’íospartaigh mí-úsáide teaghlaigh",
    choices: {
      apply: c("Déan teagmháil le ISD nó le haturnae trí bhealaí sábháilte agus iarr stádas neamhspleách faoi na treoirlínte.", "Tá an scéim ann do chead atá nasctha leis an déantóir líomhnaithe.", "Is féidir le ISD cúinsí Leila féin a mheas gan a céile an t-iarratas a rialú."),
      permission: c("Iarr ar an gcéile cead a shíniú dá hiarratas neamhspleách.", "Níl aon ról cinnteoireachta ag an déantóir san iarratas ar stádas neamhspleách.", "Cuirtear an céile ar an eolas agus faigheann sé deis eile bac a chur ar shábháilteacht."),
      automatic: c("Glac leis go dtugann bogadh chuig tearmann Stampa 4 go huathoibríoch.", "Teastaíonn iarratas agus measúnú le haghaidh cead neamhspleách; ní rud uathoibríoch é.", "D’fhéadfadh Leila a chreidiúint go bhfuil an chéim inimirce críochnaithe nuair nach bhfuil.")
    }
  },
  "family-safety:Arrive": {
    eyebrow: "Fianaise gan foirfeacht", title: "Ní bhíonn tuairisc Garda ag gach duine a tháinig slán",
    scene: "Tharla formhór na mí-úsáide sa bhaile. Tá teachtaireachtaí agus cuairt ar dhochtúir teaghlaigh ag Leila, ach níl ordú cúirte ná uimhir theagmhais Garda aici.",
    question: "Conas ba cheart di an t-iarratas a ullmhú?",
    law: "Iarrann ISD an oiread eolais agus is féidir agus luann sé samplaí lena n-áirítear orduithe cúirte, tuairiscí leighis nó Garda, litreacha comhlachtaí Stáit agus litreacha seirbhísí foréigin teaghlaigh. Ba cheart na cúinsí agus na leanaí a mhíniú; ní cúis iad na samplaí le fianaise a chumadh.",
    plainLaw: "Bailigh an méid atá ann go fírinneach, mínigh bearnaí agus iarr ar aturnae nó seirbhís tacaíochta cabhrú leis an stair a chur i láthair.", sourceLabel: "Treoir ISD maidir le fianaise",
    choices: {
      genuine: c("Caomhnaigh fíortheachtaireachtaí agus taifid, déan cur síos ar an bpatrún agus lorg litreacha tacaíochta nuair is cuí.", "Is féidir le cuntas comhleanúnach fírinneach leas a bhaint as cineálacha éagsúla fianaise.", "Faigheann ISD an stair atá ar fáil gan doiciméad bréagach a bheith ag baint di."),
      wait: c("Fan le cabhair a lorg go dtí go bhfuil gach sampla ar liosta ISD aici.", "Níor cheart sábháilteacht agus comhairle a chur siar agus comhad foirfe á lorg.", "Leanann an baol agus d’fhéadfaí fianaise úsáideach a chailleadh."),
      create: c("Cum uimhir thuairisce Garda mar go dteastaíonn fianaise oifigiúil i gcónaí.", "Ná cum fianaise riamh.", "D’fhéadfadh eolas bréagach dochar a dhéanamh don inchreidteacht agus don iarratas inimirce araon.")
    }
  },
  "family-safety:Build a life": {
    eyebrow: "Tar éis sábháilteacht láithreach", title: "Is cuid amháin den téarnamh é cead inimirce",
    scene: "Tá ioncam, tithíocht shlán, leanúnachas scoile agus tacaíocht a dhearbhaíonn daoine LADT de dhíth ar Leila agus ceisteanna dlí teaghlaigh fós gan réiteach.",
    question: "Cad é an chéad chéim eile is réalaíche?",
    law: "Má cheadaítear cead neamhspleách faoi na treoirlínte, ceadaíonn Stampa 4 obair gan cead fostaíochta. Teastaíonn seirbhísí speisialtóra ar leith fós le haghaidh sábháilteachta, tithíochta, leanaí agus dlí teaghlaigh; má dhiúltaítear iarratas, ba cheart cúiseanna an diúltaithe agus roghanna inimirce eile a mhíniú.",
    plainLaw: "Tóg plean comhordaithe d’inimirce, sábháilteacht, leanaí, tithíocht agus ioncam seachas súil a bheith agat go réiteoidh cinneadh amháin gach rud.", sourceLabel: "Treoirlínte inimirce ISD maidir le mí-úsáid teaghlaigh",
    choices: {
      team: c("Úsáid comhairleoir inimirce, seirbhís mí-úsáide teaghlaigh agus tacaíochtaí cuí teaghlaigh, tithíochta agus LADT le chéile.", "Is féidir le speisialtóirí éagsúla aghaidh a thabhairt ar riachtanais nasctha atá éagsúil ó thaobh dlí de.", "Is féidir le Leila a neamhspleáchas a atógáil gan seirbhís amháin dearmad a dhéanamh ar na leanaí ná ceann eile ar an stádas."),
      stamp: c("Glac leis go soláthraíonn Stampa 4 tithíocht go huathoibríoch agus go réitíonn sé socruithe leanaí.", "Ní chinneann cead inimirce ceisteanna tithíochta ná dlí teaghlaigh.", "Fágtar riachtanais phraiticiúla agus dhlíthiúla phráinneacha gan aire."),
      return: c("Fill ar an gcéile mar nach ráthaítear ceadú.", "Teastaíonn pleanáil speisialtóra de bharr éiginnteachta, ní nochtadh éigeantach don bhaol.", "Tosaíonn rialú comhéigneach arís sula ndéantar roghanna neamhspleácha a mheas i gceart.")
    }
  },
} satisfies JourneyTranslationCatalog;

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Cé a chaithfidh clárú, cad a thaifeadann clárú agus conas an próiseas oifigiúil a úsáid.",
  "Personal Public Service number": "Conas a úsáidtear uimhir PSP do sheirbhísí poiblí agus idirbhearta oifigiúla. Ní cead inimirce í.",
  "Choose an immigration purpose": "Pointí tosaithe oifigiúla chun cuairt, obair, staidéar, cónaí in Éirinn nó teacht chun bheith le teaghlach a phleanáil.",
  "Immigration permission stamps": "Tuig cad a cheadaíonn agus a éilíonn an stampa atá taifeadta ar Chead Cónaithe Éireannach.",
  "Applying for international protection": "Eolas oifigiúil faoi phróiseas iarratais agus scrúdaithe na hÉireann.",
  "Applications made after 12 June 2026": "Eolas i dteanga shimplí faoin Acht um Chosaint Idirnáisiúnta 2026 agus na rialacha a bhaineann le hiarratais níos nuaí.",
  "Accommodation and reception supports": "Eolas faoi chóiríocht IPAS, seirbhísí, leas cónaitheoirí agus gearáin.",
  "Vulnerability and accommodation needs": "Conas is féidir le hiarratasóirí riachtanais mhíchumais, shláinte, thuismitheoireachta agus speisialta ghlactha eile a aithint, agus conas a mheasann IPAS ábhair imní cóiríochta.",
  "Independent legal and practical support": "Seirbhísí eolais, abhcóideachta, dlí, tithíochta, fostaíochta, óige agus athlonnaithe.",
  "Employment permit types": "Catagóirí reatha ceada, incháilitheacht, liostaí gairmeacha, treoir iarratais agus nuashonruithe.",
  "Rights when working in Ireland": "Pá, téarmaí, am oibre, saoire, taifid agus bealaí chun gearáin san ionad oibre a dhéanamh.",
  "Migrant employment and exploitation support": "Eolas agus tacaíocht neamhspleách d’oibrithe imirceacha, lena n-áirítear daoine atá i mbaol dúshaothraithe.",
  "EU citizens coming to work": "Cearta oibre shaoránaigh AE agus LEE, lena n-áirítear cén fáth nach mbíonn cead fostaíochta Éireannach riachtanach de ghnáth.",
  "EU residence rights": "Na boinn ar ar féidir le saoránaigh AE teacht isteach agus cónaí in Éirinn, lena n-áirítear obair, cuardach poist, staidéar agus féindóthanacht.",
  "Coming to study in Ireland": "Eolas faoi víosaí, airgeadas, árachas, cúrsaí agus clárú do mhic léinn ó lasmuigh den LEE.",
  "Education in Ireland": "Eolas poiblí faoi scoileanna, breisoideachas, staidéar tríú leibhéal agus tacaíochtaí oideachais.",
  "Healthcare services": "Conas teacht ar dhochtúirí teaghlaigh, ospidéil, seirbhísí éigeandála agus eolas sláinte poiblí in Éirinn.",
  "Finding and renting a home": "Eolas faoi thithíocht, cíos, cearta tionóntaí, éarlaisí, easpa dídine agus tacaíocht tithíochta.",
  "Independent public information": "Eolas náisiúnta faoi leas sóisialach, sláinte, tithíocht, airgead, cáin, oideachas agus cearta tomhaltóirí.",
  "Traveller and Roma equality rights": "Eolas faoin idirdhealú a fhulaingíonn pobail an Lucht Siúil agus na Romach agus na cosaintí atá ar fáil faoi dhlí comhionannais na hÉireann.",
  "Coming to join family": "Aimsigh an bealach de réir cé acu is Éireannach, Briotanach, saoránach LEE nó na hEilvéise, duine ó lasmuigh den LEE, nó duine le stádas cosanta é an t-urraitheoir.",
  "Specialist migrant and refugee advice": "Eolas agus obair cháis faoi stádas inimirce, víosaí, athaontú teaghlaigh, saoránacht agus coinníollacha glactha.",
  "Independent status after domestic abuse": "Treoir rúnda inimirce d’íospartach a bhfuil a chead nó a cead nasctha leis an déantóir líomhnaithe, lena n-áirítear conas iarratas a dhéanamh agus cén fhianaise a d’fhéadfadh cabhrú.",
  "Domestic-abuse safety and support": "Tacaíocht rúnda, ateangaireacht agus eolas sábháilteachta do mhná a bhfuil mí-úsáid teaghlaigh á fulaingt acu; glaoigh ar 999 nó 112 i gcás éigeandála."
};

export const controls = {
  resume: "Lean ar aghaidh", resumeJourney: "Lean ar aghaidh le {name}", restart: "Tosaigh an turas seo arís", savedJourney: "Turas stóráilte", stage: "Céim", returnHome: "Ar ais chuig na turais",
  saveUnavailable: "Ní féidir dul chun cinn a shábháil sa bhrabhsálaí seo. Coinnigh an leathanach seo ar oscailt chun leanúint ar aghaidh."
} satisfies JourneyControls;

export default catalog;
