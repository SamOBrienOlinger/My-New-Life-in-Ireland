import type { JourneyControls, JourneyTranslationCatalog } from "./types";

const catalog = {
  "critical:Plan": {
    "eyebrow": "Vier maanden voor de verhuizing",
    "title": "Een goed aanbod is pas het begin",
    "scene": "Het contract is binnen. De werkgever zegt dat er veel vraag is naar deze functie en vraagt om onmiddellijk te beginnen.",
    "question": "Wat moet er gebeuren voordat vluchten worden geboekt of de huidige baan wordt opgezegd?",
    "law": "Een arbeidsvergunning voor kritieke vaardigheden hangt af van de vraag of het beroep, de beloning, het contract en de werkgever aan de actuele wettelijke criteria voldoen.",
    "plainLaw": "Toets de werkelijke functie, het salaris, het contract en de werkgever aan de huidige officiële regels voordat je op het aanbod vertrouwt.",
    "sourceLabel": "Arbeidsvergunning voor kritieke vaardigheden",
    "choices": {
      "verify": { "label": "Controleer het beroep, de beloning, het contract en de werkgever en dien vervolgens de juiste vergunningsaanvraag in.", "feedback": "Zo wordt de verhuizing niet gebaseerd op een aanbod dat niet aan de voorwaarden voldoet.", "consequence": "De planning wordt realistisch en de baan wordt getoetst aan de huidige regels." },
      "contract": { "label": "Beschouw het ondertekende contract als toestemming om te werken.", "feedback": "Een contract en een arbeidsvergunning hebben verschillende juridische functies.", "consequence": "De reis of het ontslag kan plaatsvinden voordat de benodigde toestemming is verleend." },
      "visitor": { "label": "Kom als bezoeker binnen en regel de vergunning nadat het werk is begonnen.", "feedback": "Een bezoekersstatus geeft geen toestemming voor gewone betaalde arbeid.", "consequence": "Zowel de baan als de immigratiepositie kan in gevaar komen." }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Documenten en planning",
    "title": "Eén goedkeuring vervangt niet alle andere stappen",
    "scene": "De arbeidsvergunning is verleend. Een vriend zegt dat verdere immigratiecontroles daardoor niet nodig zijn.",
    "question": "Welk plan is veiliger?",
    "law": "Een arbeidsvergunning staat specifieke arbeid toe. Iemand met een visumplichtige nationaliteit moet vóór vertrek ook het juiste visum voor langdurig verblijf verkrijgen.",
    "plainLaw": "Arbeidsvergunning, visum, toelating aan de grens en verblijfsregistratie zijn afzonderlijke stappen.",
    "sourceLabel": "Naar Ierland komen om te werken",
    "choices": {
      "sequence": { "label": "Controleer de visumvereisten, bereid bewijsstukken voor en houd elke goedkeuring tijdens de reis bij de hand.", "feedback": "Juist. Elk document beantwoordt een andere vraag.", "consequence": "De reiziger kan aan de grens het doel van de verhuizing uitleggen." },
      "permitvisa": { "label": "Ga ervan uit dat de arbeidsvergunning automatisch ook een reisvisum is.", "feedback": "Dat klopt niet voor mensen met een visumplichtige nationaliteit.", "consequence": "Het instappen of de toegang kan worden verstoord, ook als de arbeidsvergunning geldig is." },
      "agent": { "label": "Geef alle originele documenten aan een niet-gecontroleerde tussenpersoon.", "feedback": "Houd zelf controle over identiteitsdocumenten en controleer wie betaalde hulp aanbiedt.", "consequence": "Geen toegang meer hebben tot originele documenten brengt risico op vertraging en uitbuiting mee." }
    }
  },
  "critical:Travel": {
    "eyebrow": "Aan de Ierse grens",
    "title": "Wees klaar om het reisdoel uit te leggen",
    "scene": "De immigratiebeambte vraagt waar de reiziger zal verblijven en welke werkgever die verwacht.",
    "question": "Wat moet de reiziger doen?",
    "law": "Een visum staat toe om naar de grens te reizen; een immigratiebeambte beslist over de toegang. Bewijsstukken moeten het werkelijke doel en de gemaakte afspraken aantonen.",
    "plainLaw": "Neem waarheidsgetrouw en consistent bewijs mee van de baan, de toestemming en het eerste verblijfsadres.",
    "sourceLabel": "Ierse immigratiedienst",
    "choices": {
      "answer": { "label": "Antwoord eerlijk en toon de arbeidsvergunning, het visum indien vereist, het contract en de accommodatiegegevens.", "feedback": "Duidelijk, consistent bewijs ondersteunt het opgegeven reisdoel.", "consequence": "De beambte kan de arbeidsmigratie beoordelen met de juiste documenten." },
      "tourism": { "label": "Zeg dat het alleen om vakantie gaat om vragen over werk te vermijden.", "feedback": "Het verhaal moet overeenkomen met het werkelijke doel en de documenten.", "consequence": "Tegenstrijdige informatie kan ernstige problemen aan de grens veroorzaken." },
      "phone": { "label": "Vertrouw er volledig op dat de recruiter de telefoon opneemt.", "feedback": "De reiziger moet de eigen belangrijkste informatie kennen en bij zich hebben.", "consequence": "Als de recruiter onbereikbaar is, kan het reisdoel onduidelijk blijven." }
    }
  },
  "critical:Arrive": {
    "eyebrow": "De eerste 90 dagen",
    "title": "Registratie maakt toestemming aantoonbaar",
    "scene": "Het werk is begonnen, maar de zoektocht naar woonruimte en de afspraken maken de eerste weken moeilijk.",
    "question": "Welke taak moet op de planning blijven staan?",
    "law": "Mensen van buiten de EU, het Verenigd Koninkrijk en Zwitserland die langer dan 90 dagen blijven, moeten hun Ierse verblijfsrecht doorgaans laten registreren.",
    "plainLaw": "Regel de registratie en houd de gegevens over toestemming, adres en werk correct.",
    "sourceLabel": "Immigratietoestemming registreren",
    "choices": {
      "register": { "label": "Regel de registratie, volg de officiële afspraakprocedure en bewaar bewijs van pogingen om een afspraak te maken.", "feedback": "De Ierse verblijfskaart (IRP) legt de toestemming en de voorwaarden vast.", "consequence": "De persoon heeft duidelijker bewijs van rechtmatig verblijf en van wat de toestemming toestaat." },
      "pps": { "label": "Ga ervan uit dat een PPS-nummer de immigratieregistratie vervangt.", "feedback": "Een PPS-nummer is bedoeld voor overheidsdiensten en belastingzaken, niet als immigratietoestemming.", "consequence": "Een nuttig administratief nummer wordt verward met bewijs van rechtmatig verblijf." },
      "contract": { "label": "Ga ervan uit dat het arbeidscontract een IRP vervangt.", "feedback": "Arbeidsdocumenten vervangen de verblijfsregistratie niet.", "consequence": "Het kan moeilijk worden om de voorwaarden van het verblijf aan te tonen." }
    }
  },
  "critical:Build a life": {
    "eyebrow": "Werkplek en toekomst",
    "title": "Een immigratiestatus doet arbeidsrechten niet vervallen",
    "scene": "Een manager zegt dat migrantenpersoneel de eerste maanden minder betaald krijgt en minder pauzes heeft.",
    "question": "Welke reactie beschermt zowel de arbeids- als de immigratiepositie?",
    "law": "Migranten die rechtmatig in Ierland werken, hebben fundamentele arbeidsrechtelijke bescherming. Bij problemen moeten zowel de vergunningsvoorwaarden als de arbeidsrechten worden meegenomen.",
    "plainLaw": "Bewaar gegevens, zoek betrouwbaar advies en accepteer geen onrechtmatige behandeling vanwege je migrantenstatus.",
    "sourceLabel": "Commissie voor arbeidsverhoudingen (WRC)",
    "choices": {
      "records": { "label": "Bewaar roosters en loonstroken, vraag om correctie en neem contact op met de WRC of een bevoegde adviseur.", "feedback": "Bewijs en tijdig advies helpen beide soorten rechten te beschermen.", "consequence": "Het probleem kan worden aangepakt terwijl ook de vergunningsvoorwaarden serieus worden genomen." },
      "accept": { "label": "Accepteer het omdat vergunninghouders minder arbeidsrechten hebben.", "feedback": "Een immigratiestatus neemt de fundamentele bescherming op het werk niet weg.", "consequence": "Onderbetaling of onveilige omstandigheden kunnen onbetwist voortduren." },
      "disappear": { "label": "Vertrek onmiddellijk en begin een andere baan zonder de vergunningsvoorwaarden te controleren.", "feedback": "Een verandering van werkgever kan een officiële procedure of een nieuwe vergunning vereisen.", "consequence": "Een arbeidsprobleem kan ook een immigratieprobleem worden." }
    }
  },
  "general:Plan": {
    "eyebrow": "Voordat je iemand betaalt",
    "title": "Controleer de echte baan, niet het verkooppraatje",
    "scene": "Een recruiter belooft dat elk ondertekend Iers contract een vergunning garandeert en vraagt om contant geld.",
    "question": "Wat is de beste eerste beslissing?",
    "law": "Een algemene arbeidsvergunning hangt af van het beroep, de beloning, de werkgever en andere actuele eisen. Sommige beroepen komen niet in aanmerking en er kan een arbeidsmarktbehoeftetoets gelden.",
    "plainLaw": "Controleer de werkgever en de werkelijke taken en raadpleeg daarna de huidige vergunningsregels voordat je betaalt of reist.",
    "sourceLabel": "Algemene arbeidsvergunning",
    "choices": {
      "check": { "label": "Controleer via officiële bronnen de werkgever, taken, beloning en geschiktheid voor een vergunning.", "feedback": "Ook een echt aanbod moet aan de wettelijke criteria voldoen.", "consequence": "Fraude en een niet-toegelaten functie worden ontdekt voordat geld of reisplannen vastliggen." },
      "cash": { "label": "Betaal contant en laat de recruiter het paspoort houden.", "feedback": "Het vasthouden van een paspoort en druk om ontraceerbaar te betalen zijn waarschuwingssignalen.", "consequence": "De werknemer wordt kwetsbaarder voor fraude en controle." },
      "promise": { "label": "Vertrouw op de belofte van de recruiter in plaats van het beroep te controleren.", "feedback": "De officiële criteria bepalen of een vergunning mogelijk is, niet een belofte.", "consequence": "De geplande route kan mislukken nadat er al veel geld is uitgegeven." }
    }
  },
  "general:Prepare": {
    "eyebrow": "De juiste volgorde",
    "title": "Toestemming moet vóór de verhuizing komen",
    "scene": "De werkgever heeft nu personeel nodig en stelt voor om als toerist binnen te komen terwijl het papierwerk wordt ingehaald.",
    "question": "Welke volgorde is betrouwbaar?",
    "law": "Bij een eerste reis op basis van een arbeidsvergunning moet die vergunning normaal vóór het begin van het werk zijn verleend, gevolgd door een visum voor langdurig verblijf indien vereist en registratie na aankomst.",
    "plainLaw": "Gebruik een bezoekersstatus niet als omweg naar gewone betaalde arbeid.",
    "sourceLabel": "Arbeidsvergunningen",
    "choices": {
      "order": { "label": "Eerst de arbeidsvergunning, dan een visum indien vereist, grenscontrole en vervolgens registratie na aankomst.", "feedback": "Zo blijft het traject aansluiten bij de bedoelde route.", "consequence": "De werknemer arriveert met een juridische basis die uit te leggen en te documenteren is." },
      "tourist": { "label": "Kom als toerist binnen en begin meteen aan de eerste dienst.", "feedback": "Een bezoekersstatus geeft geen gewone werktoestemming.", "consequence": "Zowel werknemer als werkgever kan ernstige gevolgen ondervinden." },
      "pps": { "label": "Vraag een PPS-nummer aan en beschouw dat als arbeidsvergunning.", "feedback": "Een PPS-nummer verleent geen immigratie- of werktoestemming.", "consequence": "De essentiële vergunningsstap blijft onvoltooid." }
    }
  },
  "general:Travel": {
    "eyebrow": "De vertrekdag",
    "title": "Neem je eigen bewijs mee",
    "scene": "De recruiter zegt dat alle documenten op het bedrijfskantoor liggen en dat een schermafbeelding op de telefoon voldoende is.",
    "question": "Wat moet de reiziger doen?",
    "law": "De reiziger moet mogelijk aan de vervoerder en bij de Ierse grenscontrole het doel en de voorwaarden van de reis aantonen.",
    "plainLaw": "Zorg dat je veilig toegang houdt tot je paspoort, goedkeuringen, contract en eerste verblijfsadres.",
    "sourceLabel": "Naar Ierland komen om te werken",
    "choices": {
      "copies": { "label": "Neem de voor de reis vereiste originelen mee, plus veilig bewaarde kopieën en werkgeversgegevens.", "feedback": "De reiziger moet het eigen traject kunnen uitleggen.", "consequence": "Bij ontbrekend telefoonbereik of een onbereikbare recruiter is niet meteen al het bewijs weg." },
      "company": { "label": "Reis zonder documenten omdat het bedrijf ze heeft.", "feedback": "Geef de controle over essentiële identiteits- en toestemmingsdocumenten niet uit handen.", "consequence": "De reiziger kan het reisdoel mogelijk niet aantonen." },
      "different": { "label": "Geef een andere reden voor de reis dan in de aanvraag.", "feedback": "Informatie moet waarheidsgetrouw en consistent zijn.", "consequence": "Tegenstrijdigheden kunnen de reis aan de grens ondermijnen." }
    }
  },
  "general:Arrive": {
    "eyebrow": "De eerste weken",
    "title": "Onderscheid dringende behoeften van juridische toestemmingen",
    "scene": "Een bank, verhuurder en werkgever vragen elk om andere documenten terwijl de registratieafspraak nog moet plaatsvinden.",
    "question": "Hoe moet de persoon reageren?",
    "law": "Een IRP legt de immigratietoestemming vast. Andere systemen, zoals belasting, bankzaken en huisvesting, hebben eigen eisen en vervangen die kaart niet.",
    "plainLaw": "Gebruik officiële checklists, bewaar bewijs van afspraken en vraag elke dienst wat die precies nodig heeft.",
    "sourceLabel": "Immigratietoestemming registreren",
    "choices": {
      "organise": { "label": "Houd een documentendossier bij, volg de registratie-instructies en vraag elke dienst om de eigen checklist.", "feedback": "Dit vermindert verwarring tussen afzonderlijke systemen.", "consequence": "Vertragingen blijven lastig, maar de persoon kan laten zien welke stappen zijn voltooid." },
      "one": { "label": "Ga ervan uit dat één document voor elke dienst moet volstaan.", "feedback": "Ierse systemen stellen verschillende vragen voor verschillende doeleinden.", "consequence": "Aanvragen kunnen vastlopen doordat telkens het verkeerde bewijs wordt aangeleverd." },
      "fake": { "label": "Pas een adresbewijs aan om sneller verder te komen.", "feedback": "Dien nooit vals of gewijzigd bewijs in.", "consequence": "Een korte omweg veroorzaakt ernstige juridische risico’s en schaadt het vertrouwen." }
    }
  },
  "general:Build a life": {
    "eyebrow": "Eerlijk werk",
    "title": "Herken uitbuiting vroeg",
    "scene": "Op de loonstrook staan onverklaarde inhoudingen en de werkgever vraagt om het paspoort in bewaring te geven voor de ‘veiligheid’.",
    "question": "Wat is de sterkste reactie?",
    "law": "Werknemers moeten wettige beloning, arbeidsvoorwaarden en loonstroken krijgen. Bewijs bewaren en de WRC of gespecialiseerde migrantenondersteuning inschakelen kan helpen bij uitbuiting.",
    "plainLaw": "Houd je paspoort, bewaar bewijs en zoek vertrouwelijk advies.",
    "sourceLabel": "Commissie voor arbeidsverhoudingen (WRC)",
    "choices": {
      "evidence": { "label": "Houd het paspoort, bewaar gegevens, vraag om uitleg en neem contact op met de WRC of een adviseur.", "feedback": "Duidelijke gegevens maken het makkelijker het probleem te begrijpen en aan te vechten.", "consequence": "De werknemer kan hulp zoeken zonder alleen op het verhaal van de werkgever te vertrouwen." },
      "hand": { "label": "Geef het paspoort af omdat de werkgever de vergunning heeft geregeld.", "feedback": "De werknemer moet controle houden over persoonlijke identiteitsdocumenten.", "consequence": "De werkgever krijgt een krachtig middel om controle uit te oefenen." },
      "nothing": { "label": "Negeer de inhoudingen omdat migranten niet kunnen klagen.", "feedback": "Migranten hebben afdwingbare arbeidsrechten.", "consequence": "Onrechtmatige behandeling kan voortduren of verergeren." }
    }
  },
  "protection:Plan": {
    "eyebrow": "Behoefte aan veiligheid",
    "title": "Bescherming gaat over persoonlijk risico",
    "scene": "Terugkeer voelt onveilig. Vrienden geven tegenstrijdige adviezen en iemand stelt voor een sterker verhaal te verzinnen.",
    "question": "Welk beginsel moet de volgende stap bepalen?",
    "law": "Internationale bescherming is bedoeld voor mensen die vervolging vrezen of een reëel risico op ernstige schade lopen. Elke aanvraag wordt op de individuele feiten beoordeeld volgens het recht dat geldt wanneer zij wordt ingediend.",
    "plainLaw": "Vertel je eigen, ware verhaal en zoek zo vroeg mogelijk vertrouwelijke juridische informatie.",
    "sourceLabel": "Ierse Vluchtelingenraad: aanvragen na 12 juni 2026",
    "choices": {
      "truth": { "label": "Bewaar persoonlijk bewijs waar dat veilig kan, vertel de waarheid en zoek betrouwbare juridische informatie.", "feedback": "Een beschermingsaanvraag moet het eigen verhaal van de persoon weergeven.", "consequence": "De zaak begint met juiste informatie en passende ondersteuning." },
      "copy": { "label": "Kopieer een verhaal waarmee iemand anders succes had.", "feedback": "Verzonnen of geleende informatie kan de geloofwaardigheid ernstig schaden.", "consequence": "De procedure kan zich richten op tegenstrijdigheden in plaats van de werkelijke angst." },
      "work": { "label": "Presenteer bescherming als een snellere route naar werk.", "feedback": "Bescherming en arbeidsmigratie hebben verschillende doelen.", "consequence": "De werkelijke juridische basis van het traject raakt uit beeld." }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Veiligheid en bewijs",
    "title": "Documenten helpen, maar veiligheid gaat voor",
    "scene": "Een deel van het bewijs staat op een beschadigde telefoon. Andere documenten konden onmogelijk worden meegenomen.",
    "question": "Wat is een verantwoorde aanpak?",
    "law": "Aanvragers moeten beschikbare informatie verstrekken, meewerken aan de procedure en ontbrekend bewijs eerlijk uitleggen. Behoeften rond tolken, kwetsbaarheid en toegankelijkheid moeten worden gemeld.",
    "plainLaw": "Verzin geen ontbrekende documenten. Leg uit wat er is, wat ontbreekt en waarom.",
    "sourceLabel": "Bureau voor Internationale Bescherming (IPO)",
    "choices": {
      "explain": { "label": "Bewaar wat veilig kan, leg hiaten uit en vraag zo nodig om een tolk of toegankelijkheidsondersteuning.", "feedback": "De procedure moet het eigen verhaal horen met passende ondersteuning.", "consequence": "Ontbrekend bewijs wordt openlijk besproken in plaats van verborgen." },
      "forge": { "label": "Maak vervangende documenten die er officieel uitzien.", "feedback": "Valse documenten kunnen een aanvraag ernstig schaden.", "consequence": "De aandacht verschuift van de echte omstandigheden naar misleiding." },
      "silence": { "label": "Noem trauma, identiteit of een beperking nooit, ook niet als die relevant zijn.", "feedback": "Gevoelige informatie kan vertrouwelijk met bevoegde ondersteuning worden besproken.", "consequence": "Belangrijke beschermings- of procedurele behoeften kunnen onopgemerkt blijven." }
    }
  },
  "protection:Travel": {
    "eyebrow": "Ierland bereiken",
    "title": "Zeg duidelijk dat bescherming nodig is",
    "scene": "Bij een Ierse grenspost maken angst en uitputting het moeilijk om uit te leggen waarom terugkeer onveilig is.",
    "question": "Wat moet de persoon duidelijk maken?",
    "law": "Iemand die asiel zoekt, moet duidelijk zeggen internationale bescherming te willen en meewerken aan de toepasselijke registratie- en screeningsprocedure.",
    "plainLaw": "Gebruik duidelijke woorden: ‘Ik wil internationale bescherming aanvragen. Ik ben bang om terug te keren.’",
    "sourceLabel": "Bureau voor Internationale Bescherming (IPO)",
    "choices": {
      "ask": { "label": "Vraag duidelijk om internationale bescherming en zo nodig om een tolk.", "feedback": "Duidelijke communicatie helpt de persoon naar de juiste procedure te leiden.", "consequence": "De uitgesproken angst voor terugkeer kan worden vastgelegd en beoordeeld." },
      "tourist": { "label": "Verberg de angst en zeg alleen als toerist te komen.", "feedback": "Dat maakt de behoefte aan bescherming niet duidelijk.", "consequence": "De persoon komt mogelijk niet in de procedure die het risico moet beoordelen." },
      "script": { "label": "Herhaal een uit het hoofd geleerd verhaal dat niet klopt.", "feedback": "Gebruik de eigen, waarheidsgetrouwe woorden van de persoon.", "consequence": "Tegenstrijdigheden kunnen een toch al moeilijk gesprek nog lastiger maken." }
    }
  },
  "protection:Arrive": {
    "eyebrow": "De aanvraag en het opvangstelsel",
    "title": "IPO en IPAS hebben verschillende rollen",
    "scene": "De aanvrager heeft juridische informatie, accommodatie en hulp bij een schoolplaats voor een kind nodig.",
    "question": "Welk plan houdt rekening met de verschillende verantwoordelijkheden?",
    "law": "Het IPO onderzoekt beschermingsaanvragen. IPAS is verantwoordelijk voor opvangaccommodatie en bijbehorende ondersteuning. Rechtsbijstand en onafhankelijke organisaties bieden afzonderlijke hulp.",
    "plainLaw": "De beslissing in de zaak, accommodatie en juridisch advies komen van verschillende diensten.",
    "sourceLabel": "IPAS-accommodatie en ondersteuning",
    "choices": {
      "roles": { "label": "Bespreek de zaak met IPO, opvangbehoeften met IPAS en juridisch advies met een advocaat.", "feedback": "Door de rollen te onderscheiden, kun je de juiste instantie om hulp vragen.", "consequence": "Dringende behoeften en de juridische aanvraag kunnen via passende kanalen worden opgepakt." },
      "manager": { "label": "Vraag een accommodatiebeheerder om de vluchtelingenstatus goed te keuren.", "feedback": "Accommodatiemedewerkers beslissen niet over de beschermingsaanvraag.", "consequence": "Er gaat tijd verloren doordat de verkeerde persoon om een juridisch besluit wordt gevraagd." },
      "address": { "label": "Verhuis zonder de autoriteiten of juridisch adviseur op de hoogte te brengen.", "feedback": "Contactgegevens moeten actueel blijven.", "consequence": "Belangrijke afspraken of besluiten kunnen worden gemist." }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Wachten en deelnemen",
    "title": "Controleer actuele rechten in plaats van geruchten te volgen",
    "scene": "Een werkgever biedt werk aan, terwijl andere bewoners het oneens zijn over wanneer aanvragers mogen werken.",
    "question": "Wat moet de aanvrager doen?",
    "law": "Toegang tot de arbeidsmarkt hangt af van het recht, de termijnen en de voorwaarden die op de individuele aanvraag van toepassing zijn. Onderwijs, zorg, klachten en ondersteuning voor kinderen hebben afzonderlijke regels.",
    "plainLaw": "Controleer de huidige voorwaarden en verkrijg de vereiste toestemming voordat je begint te werken.",
    "sourceLabel": "Informatiecentrum van de Ierse Vluchtelingenraad",
    "choices": {
      "current": { "label": "Controleer de huidige regel voor deze aanvraag en begin pas nadat alle vereiste toestemming is verleend.", "feedback": "Zo worden oude regels of de omstandigheden van een ander niet op deze zaak toegepast.", "consequence": "De beslissing over werk berust op actuele, individuele informatie." },
      "rumour": { "label": "Begin omdat een andere bewoner toestemming had om te werken.", "feedback": "Die persoon kan onder andere regels of op een ander tijdstip hebben aangevraagd.", "consequence": "De aanvrager kan handelen zonder de toestemming die voor de eigen zaak nodig is." },
      "never": { "label": "Ga ervan uit dat aanvragers nooit kunnen studeren, werken of zorgen kunnen melden.", "feedback": "Aanvragers hebben rechten en toegang tot ondersteuning, al gelden er voorwaarden.", "consequence": "Kansen en bescherming kunnen onnodig worden gemist." }
    }
  },
  "study:Plan": {
    "eyebrow": "Voordat je een studieplaats aanvaardt",
    "title": "Controleer de opleiding en alle kosten",
    "scene": "Het studieaanbod ziet er aantrekkelijk uit, maar het budget dekt alleen het collegegeld en zes weken huur.",
    "question": "Wat moet worden nagegaan voordat je je vastlegt?",
    "law": "Studietoestemming hangt af van de opleiding, de aanbieder, financiën, verzekering en andere actuele immigratievereisten.",
    "plainLaw": "Controleer of de opleiding in aanmerking komt en maak een realistisch plan voor collegegeld, huisvesting, verzekering en dagelijks leven.",
    "sourceLabel": "Naar Ierland komen om te studeren",
    "choices": {
      "budget": { "label": "Controleer de opleiding en aanbieder en bereken vervolgens collegegeld, huisvesting, verzekering en levensonderhoud.", "feedback": "Toelating is slechts één onderdeel van een haalbaar studietraject.", "consequence": "De student kan beoordelen of het plan financieel en juridisch realistisch is." },
      "job": { "label": "Ga ervan uit dat een bijbaan onmiddellijk alle kosten zal dekken.", "feedback": "Werkrechten zijn beperkt door de verblijfsvoorwaarden en werk is niet gegarandeerd.", "consequence": "De student kan aankomen zonder voldoende middelen voor basisbehoeften." },
      "deposit": { "label": "Betaal een niet-gecontroleerde tussenpersoon voordat je de opleiding controleert.", "feedback": "Controleer eerst de instelling, de opleiding en het betalingskanaal.", "consequence": "Geld kan verloren gaan aan een opleiding die niet tot de beoogde toestemming leidt." }
    }
  },
  "study:Prepare": {
    "eyebrow": "Toestemming vóór vertrek",
    "title": "Toelating tot een opleiding is geen visum",
    "scene": "De toelatingsmail komt binnen en de student denkt dat dit het enige document is dat voor de reis nodig is.",
    "question": "Wat is de juiste volgende stap?",
    "law": "Visumplichtige studenten hebben doorgaans het juiste studievisum voor langdurig verblijf nodig. Alle studenten moeten het doel en de voorwaarden van de studie kunnen aantonen.",
    "plainLaw": "Volg de officiële immigratiechecklist voor studenten; een studieaanbod vervangt geen reistoestemming.",
    "sourceLabel": "Naar Ierland komen om te studeren",
    "choices": {
      "visa": { "label": "Volg indien nodig de officiële visumprocedure en orden bewijs over financiën, verzekering en opleiding.", "feedback": "Zo sluit het toelatingsaanbod aan op de juiste immigratieroute.", "consequence": "De reis wordt ondersteund door een volledig en consistent studieplan." },
      "offer": { "label": "Gebruik de toelatingsmail alsof die automatisch een visum is.", "feedback": "Toelating tot een opleiding en immigratietoestemming staan los van elkaar.", "consequence": "De reis kan mislukken voordat de opleiding begint." },
      "tourist": { "label": "Kom als toerist binnen en verander stilletjes van status nadat de lessen beginnen.", "feedback": "Gebruik vóór vertrek de juiste studieroute.", "consequence": "De student kan mogelijk niet de beoogde toestemming registreren." }
    }
  },
  "study:Travel": {
    "eyebrow": "Bij de grenscontrole",
    "title": "Het studieplan moet kloppen",
    "scene": "De beambte vraagt waar de student gaat wonen, hoe de opleiding wordt betaald en wanneer die begint.",
    "question": "Hoe moet de student antwoorden?",
    "law": "Toegang wordt aan de grens beoordeeld. Documenten en antwoorden moeten een echte, goed voorbereide studie aantonen.",
    "plainLaw": "Neem waarheidsgetrouw bewijs mee van de opleiding, financiën, verzekering en eerste accommodatie.",
    "sourceLabel": "Ierse immigratiedienst",
    "choices": {
      "show": { "label": "Antwoord eerlijk en toon bewijs van opleiding, betaling, verzekering, financiën en accommodatie.", "feedback": "De documenten ondersteunen het opgegeven studiedoel.", "consequence": "De beambte kan het plan begrijpen zonder aannames te hoeven doen." },
      "work": { "label": "Zeg dat voltijds werken het hoofddoel is.", "feedback": "Dat is in strijd met een studieaanvraag.", "consequence": "Het reisdoel komt inconsistent over." },
      "guess": { "label": "Gok het adres van de onderwijsinstelling en de opleidingsdata.", "feedback": "Studenten moeten de basisgegevens van hun eigen opleiding kennen.", "consequence": "Het studieplan kan onoprecht of onvoldoende voorbereid lijken." }
    }
  },
  "study:Arrive": {
    "eyebrow": "Het eerste semester",
    "title": "Registreer je en blijf de opleiding volgen",
    "scene": "Door huisvestingsproblemen is het verleidelijk de registratie uit te stellen en lessen te missen.",
    "question": "Welke reactie beschermt het studietraject het best?",
    "law": "Studenten van buiten de EER die in aanmerking komen en langer dan 90 dagen blijven, moeten hun toestemming registreren en blijven voldoen aan de bijbehorende aanwezigheids- en opleidingsvoorwaarden.",
    "plainLaw": "Registreer je, blijf de opleiding volgen en meld ernstige problemen die de aanwezigheid beïnvloeden vroeg aan de onderwijsinstelling.",
    "sourceLabel": "Immigratietoestemming registreren",
    "choices": {
      "support": { "label": "Regel de registratie, volg de opleiding en neem vroeg contact op met studentenondersteuning over huisvesting of welzijn.", "feedback": "Met vroege ondersteuning zijn immigratie- en studieverplichtingen beter te beschermen.", "consequence": "Problemen worden vastgelegd voordat ze onverklaarde afwezigheid of verlies van status worden." },
      "skip": { "label": "Stop met lessen volgen zonder de onderwijsinstelling iets te vertellen.", "feedback": "Deelname aan de opleiding is belangrijk voor de toestemming.", "consequence": "Studie- en immigratiegevolgen kunnen het huisvestingsprobleem verergeren." },
      "pps": { "label": "Gebruik een PPS-nummer in plaats van registratie.", "feedback": "Een PPS-nummer is geen studietoestemming.", "consequence": "De vereiste verblijfsregistratie blijft onvoltooid." }
    }
  },
  "study:Build a life": {
    "eyebrow": "Werk, gemeenschap en volgende stappen",
    "title": "Studentenwerk heeft grenzen",
    "scene": "Een werkgever biedt voltijdse uren tijdens het semester aan en zegt dat niemand studentenvoorwaarden controleert.",
    "question": "Wat moet de student doen?",
    "law": "Het recht van een student om te werken hangt af van de verblijfsstempel en de actuele voorwaarden. Overschrijding kan de immigratiestatus en studie beïnvloeden.",
    "plainLaw": "Controleer welke uren en periodes de huidige studententoestemming toestaat voordat je een rooster aanvaardt.",
    "sourceLabel": "Stempels voor immigratietoestemming",
    "choices": {
      "limits": { "label": "Controleer de huidige Stamp 2-voorwaarden en accepteer alleen werk dat daaraan voldoet.", "feedback": "De vergunningsvoorwaarden blijven gelden, ook als een werkgever meer uren aanbiedt.", "consequence": "Werk ondersteunt de student in plaats van de opleiding en status te ondermijnen." },
      "full": { "label": "Werk onbeperkt omdat de werkgever het heeft goedgekeurd.", "feedback": "Een werkgever kan immigratietoestemming niet uitbreiden.", "consequence": "De student kan de verblijfsvoorwaarden overtreden." },
      "cash": { "label": "Werk zwart zodat de uren onzichtbaar zijn.", "feedback": "Niet-aangegeven werk brengt arbeidsrechtelijke, fiscale en immigratierisico’s mee.", "consequence": "De student verliest belangrijke bescherming op het werk en creëert extra risico." }
    }
  },
  "family:Plan": {
    "eyebrow": "Voor de verhuizing",
    "title": "De referent bepaalt de route",
    "scene": "Een echtgenoot in Ierland denkt dat het huwelijk automatisch dezelfde rechten geeft als het Ierse staatsburgerschap.",
    "question": "Wat moet eerst worden vastgesteld?",
    "law": "Gezinsroutes verschillen naargelang de referent Iers, Brits, EER- of Zwitsers staatsburger is, van buiten de EER komt of internationale bescherming geniet.",
    "plainLaw": "Bepaal de precieze status van de referent en de relatiecategorie voordat je een formulier of visum kiest.",
    "sourceLabel": "Naar Ierland komen voor gezinshereniging",
    "choices": {
      "sponsor": { "label": "Controleer de status van de referent, de relatiecategorie en de actuele financiële en documentvereisten.", "feedback": "Daarmee bepaal je de juiste gezinsroute.", "consequence": "De aanvraag wordt afgestemd op de werkelijke referent en relatie." },
      "marriage": { "label": "Ga ervan uit dat een huwelijksakte automatisch toegang en werkrechten verleent.", "feedback": "Relatiebewijs is belangrijk, maar er geldt nog steeds een immigratieprocedure.", "consequence": "Er kan worden gereisd of gewerkt zonder de vereiste toestemming." },
      "form": { "label": "Gebruik het eerste gezinsformulier dat je online vindt, ongeacht de status van de referent.", "feedback": "Verschillende referenten en familieleden volgen verschillende procedures.", "consequence": "Een verkeerde aanvraag kan vermijdbare vertraging of afwijzing veroorzaken." }
    }
  },
  "family:Prepare": {
    "eyebrow": "Bewijs en toestemming",
    "title": "Laat een oprecht gezinsplan zien",
    "scene": "Het stel heeft jaren aan berichten en bezoeken, maar het bewijs over huisvesting en financiën is ongeordend.",
    "question": "Wat is de beste voorbereiding?",
    "law": "Gezinsaanvragen kunnen de toegelaten relatie, geschiktheid van de referent, financiën, accommodatie, afhankelijkheid en andere routespecifieke criteria onderzoeken.",
    "plainLaw": "Gebruik de officiële checklist en orden waarheidsgetrouw bewijs van de relatie en het praktische plan.",
    "sourceLabel": "Richtlijnen voor gezinshereniging",
    "choices": {
      "file": { "label": "Maak met de checklist een duidelijk bewijsdossier en leg echte hiaten uit.", "feedback": "Geordend, waarheidsgetrouw bewijs maakt de aanvraag makkelijker te beoordelen.", "consequence": "De echte gezinsgeschiedenis en het plan worden zichtbaar zonder verzonnen materiaal." },
      "fake": { "label": "Maak documenten voor periodes waarvoor weinig bewijs bestaat.", "feedback": "Vals bewijs kan de aanvraag ernstig schaden.", "consequence": "Het vertrouwen in de hele aanvraag kan worden ondermijnd." },
      "ignore": { "label": "Negeer financiële of huisvestingseisen omdat de relatie echt is.", "feedback": "Een echte relatie neemt niet alle voorwaarden van de route weg.", "consequence": "Een vermijdbaar gebrek aan bewijs kan de aanvraag vertragen of doen mislukken." }
    }
  },
  "family:Travel": {
    "eyebrow": "Aankomst als familielid",
    "title": "Noem het echte doel aan de grens",
    "scene": "De reiziger heeft het relevante visum of de voorafgaande goedkeuring en wil bij de referent gaan wonen.",
    "question": "Wat moet er bij binnenkomst gebeuren?",
    "law": "Waar een visum of voorafgaande goedkeuring vereist is, ondersteunt die de reis voor het opgegeven gezinsdoel. Toegang en de eerste toestemming worden aan de grens beoordeeld.",
    "plainLaw": "Leg het gezinsdoel eerlijk uit en neem de goedkeuring en gegevens van de referent mee.",
    "sourceLabel": "Komen voor gezinshereniging",
    "choices": {
      "family": { "label": "Noem het gezinsdoel en toon de goedkeuring, relatiegegevens en het adres van de referent.", "feedback": "De uitleg komt overeen met de aanvraag en documenten.", "consequence": "De beambte kan de toegang op de bedoelde gezinsbasis beoordelen." },
      "holiday": { "label": "Zeg dat het alleen een korte vakantie is, ondanks het plan om te blijven.", "feedback": "Het opgegeven doel moet waarheidsgetrouw zijn.", "consequence": "Het verhaal is in strijd met de gezinsaanvraag en het voorgenomen verblijf." },
      "none": { "label": "Neem geen contact- of accommodatiegegevens van de referent mee.", "feedback": "Basisbewijs van het gezin en het aankomstplan moet beschikbaar zijn.", "consequence": "De reiziger kan moeilijk uitleggen waar en met wie die zal wonen." }
    }
  },
  "family:Arrive": {
    "eyebrow": "Registratie en voorwaarden",
    "title": "Raad niet wat de verblijfsstempel toestaat",
    "scene": "Een werkgever op afstand wil dat het familielid onmiddellijk vanuit een Iers adres weer gaat werken.",
    "question": "Wat moet de persoon doen vóór het werken?",
    "law": "Het recht om te werken hangt af van de verleende immigratietoestemming. Gezinsvergunningen kunnen verschillen per referent en route.",
    "plainLaw": "Registreer de toestemming waar vereist en bevestig de werkvoorwaarden voordat je in Ierland begint of weer aan het werk gaat.",
    "sourceLabel": "Stempels voor immigratietoestemming",
    "choices": {
      "stamp": { "label": "Voltooi de vereiste registratie en controleer precies wat de toestemming toestaat.", "feedback": "De voorwaarden van de stempel of IRP beantwoorden de werkvraag.", "consequence": "Het werk begint pas wanneer de Ierse toestemming het mogelijk maakt." },
      "spouse": { "label": "Ga ervan uit dat elke echtgenoot automatisch onbeperkte werkrechten heeft.", "feedback": "Gezinsvergunningen zijn niet allemaal hetzelfde.", "consequence": "Het werk kan beginnen voordat aan de noodzakelijke voorwaarde is voldaan." },
      "remote": { "label": "Ga ervan uit dat werken op afstand voor het buitenland buiten de Ierse immigratievoorwaarden valt.", "feedback": "Werken terwijl je fysiek in Ierland bent, kan nog steeds onder Ierse immigratie-, belasting- en arbeidsregels vallen.", "consequence": "Een werkafspraak op afstand veroorzaakt onverwachte juridische en fiscale problemen." }
    }
  },
  "family:Build a life": {
    "eyebrow": "Zelfstandigheid en erbij horen",
    "title": "Bouw steun op buiten de referent",
    "scene": "De verhuizing voelt eenzaam en het familielid is voor elk document, elke afspraak en elk sociaal contact afhankelijk van de referent.",
    "question": "Welke stap geeft meer zekerheid?",
    "law": "Migranten kunnen onafhankelijke informatie zoeken over immigratie, werk, gezondheid, veiligheid en lokale diensten. Noodhulp en gespecialiseerde ondersteuning blijven beschikbaar wanneer relaties onveilig worden.",
    "plainLaw": "Bewaar kopieën van je eigen documenten en leer hoe je onafhankelijke diensten bereikt.",
    "sourceLabel": "Ierse immigratiedienst",
    "choices": {
      "network": { "label": "Bewaar persoonlijke documentkopieën en leg contact met onafhankelijk advies, gemeenschapsvoorzieningen en zorgdiensten.", "feedback": "Een breder netwerk vergroot praktische zelfstandigheid en veiligheid.", "consequence": "De persoon kan geïnformeerde beslissingen nemen zonder voor alles afhankelijk te zijn van één relatie." },
      "all": { "label": "Laat de referent alle documenten en wachtwoorden bewaren.", "feedback": "Volwassenen moeten veilige toegang houden tot hun eigen identiteits- en accountgegevens.", "consequence": "Elke praktische beslissing wordt afhankelijk van de referent." },
      "silent": { "label": "Vermijd hulp omdat vragen stellen de status zou kunnen beïnvloeden.", "feedback": "Betrouwbare, vertrouwelijke informatie helpt mensen hun mogelijkheden te begrijpen.", "consequence": "Problemen kunnen ernstiger worden voordat hulp wordt gezocht." }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Veiligheid, beperking en ouderschap",
    "title": "Bescherming en toegankelijkheid zijn afzonderlijke vragen",
    "scene": "Adama krijgt te horen dat haar rolstoelgebruik bescherming garandeert of juist verhindert dat zij samen met haar zoon aanvraagt.",
    "question": "Waarop moet zij haar beslissing baseren?",
    "law": "Een beschermingsaanvraag wordt beoordeeld op het individuele risico op vervolging of ernstige schade. Een beperking en alleenstaand ouderschap kunnen bijzondere opvang- of procedurele behoeften meebrengen, maar bepalen op zichzelf niet de uitkomst.",
    "plainLaw": "Leg de echte angst voor terugkeer uit en geef afzonderlijk aan welke steun nodig is om veilig aan de procedure deel te nemen.",
    "sourceLabel": "Ierse Vluchtelingenraad: aanvragen na 12 juni 2026",
    "choices": {
      "separate": { "label": "Leg het beschermingsrisico eerlijk uit en maak apart een lijst van mobiliteits-, gezondheids- en opvoedingsbehoeften.", "feedback": "Zo blijven zowel de juridische aanvraag als de toegankelijkheidsbehoeften zichtbaar.", "consequence": "Beslissers ontvangen het beschermingsverhaal, terwijl opvangmedewerkers praktische steun kunnen bepalen." },
      "guarantee": { "label": "Ga ervan uit dat een beperking automatisch vluchtelingenstatus garandeert.", "feedback": "Kwetsbaarheid en de juridische toets voor bescherming zijn niet hetzelfde.", "consequence": "De persoonlijke angst voor terugkeer wordt mogelijk niet goed uitgelegd." },
      "hide": { "label": "Verberg de beperking omdat ouders met ondersteuningsbehoeften niet zouden mogen aanvragen.", "feedback": "Een beperking neemt het recht om bescherming te zoeken niet weg.", "consequence": "Nodige opvang- en procedurele ondersteuning kan worden gemist." }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Screening en kwetsbaarheid",
    "title": "Benoem elke behoefte, niet alleen de zichtbaarste",
    "scene": "De rolstoel is zichtbaar, maar chronische pijn, trauma, medicatie en de zorg voor een zesjarige niet.",
    "question": "Hoe moet Adama de kwetsbaarheidsbeoordeling benaderen?",
    "law": "Binnen het stelsel van 2026 krijgen aanvragers een vrijwillige kwetsbaarheidsbeoordeling aangeboden. Beperking, alleenstaand ouderschap, ernstige ziekte en geweldservaringen behoren tot de erkende categorieën om bijzondere opvangbehoeften vast te stellen.",
    "plainLaw": "Gebruik de beoordeling om onzichtbare én zichtbare behoeften uit te leggen en vraag om correcte vastlegging.",
    "sourceLabel": "Kwetsbaarheidsbeoordeling van IPAS",
    "choices": {
      "full": { "label": "Beschrijf behoeften rond mobiliteit, pijn, medicatie, trauma en ouderschap, zo nodig met een tolk.", "feedback": "Overlappende behoeften kunnen verschillende praktische reacties vereisen.", "consequence": "De beoordeling geeft een vollediger basis voor accommodatie en doorverwijzing naar diensten." },
      "chair": { "label": "Noem alleen de rolstoel omdat al het andere privé is.", "feedback": "Zij bepaalt wat zij deelt, maar niet-vastgelegde behoeften kunnen moeilijker worden opgevangen.", "consequence": "Pijn, medicatie- of opvoedingsproblemen blijven mogelijk onzichtbaar tot een crisis." },
      "refuse": { "label": "Weiger omdat instemmen met een beoordeling de beschermingsaanvraag zou verzwakken.", "feedback": "De beoordeling is vrijwillig en gaat over ondersteuningsbehoeften, niet over het toekennen van bescherming.", "consequence": "Een manier om bijzondere opvangbehoeften vast te stellen gaat om de verkeerde reden verloren." }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Door het opvangstelsel",
    "title": "Een aangeboden bed kan onbruikbaar zijn",
    "scene": "Vervoer naar de accommodatie is geregeld, maar Adama ontdekt dat haar kamer boven is en de badkamer niet veilig gebruikt kan worden.",
    "question": "Welke reactie zorgt voor de duidelijkste vastlegging?",
    "law": "IPAS gebruikt kwetsbaarheidsinformatie om bijzondere opvangbehoeften te behandelen. Er bestaan procedures voor medische prioriteit, uitzonderlijke overplaatsing en aanvullende beoordeling, maar een voorkeurslocatie of onmiddellijke overplaatsing is niet gegarandeerd.",
    "plainLaw": "Beschrijf de precieze toegankelijkheidsbarrière schriftelijk, verstrek beschikbaar medisch bewijs en gebruik de officiële escalatieprocedure.",
    "sourceLabel": "IPAS-accommodatie en medische beoordeling",
    "choices": {
      "record": { "label": "Meld de precieze barrière meteen, bewaar kopieën en vraag via IPAS om medische of uitzonderlijke beoordeling.", "feedback": "Specifiek schriftelijk bewijs is sterker dan een algemeen verzoek om te verhuizen.", "consequence": "IPAS kan het werkelijke veiligheids- en toegankelijkheidsprobleem via de passende procedure beoordelen." },
      "leave": { "label": "Vertrek zonder iemand te informeren en ga ervan uit dat er vanzelf een andere kamer komt.", "feedback": "Vertrekken kan de opvangsteun doorbreken zonder de barrière op te lossen.", "consequence": "Adama en haar kind kunnen dakloos raken en moeilijker bereikbaar worden." },
      "accept": { "label": "Gebruik de onveilige kamer omdat bewoners de geschiktheid niet zouden mogen betwisten.", "feedback": "Zorgen over accommodatie en bijzondere behoeften mogen worden gemeld.", "consequence": "Valpartijen, tekortschietende hygiëne en erger wordende pijn worden waarschijnlijker." }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Toegankelijkheid van het gehoor",
    "title": "Deelname kan aanpassingen vereisen",
    "scene": "De locatie van het gehoor, lang moeten zitten en bijwerkingen van medicatie kunnen Adama verhinderen haar verhaal volledig te vertellen.",
    "question": "Wat moet zij vóór de afspraak doen?",
    "law": "Aanvragers moeten verschijnen en meewerken, en behoeften rond beperking, communicatie, gezondheid en andere procedurele zaken zo vroeg mogelijk melden. Gespecialiseerd juridisch advies kan relevante aanpassingen en termijnen helpen verduidelijken.",
    "plainLaw": "Vertel IPO en de juridisch adviseur vóór het gehoor wat deelname moeilijk maakt, niet pas nadat het is misgelopen.",
    "sourceLabel": "Onafhankelijk juridisch centrum van de Ierse Vluchtelingenraad",
    "choices": {
      "early": { "label": "Neem vroeg contact op met IPO en de juridisch adviseur over concrete behoeften aan toegankelijkheid, pauzes, medicatie en kinderopvang.", "feedback": "Specifieke voorafgaande informatie geeft de procedure kans om erop te reageren.", "consequence": "Adama kan beter deelnemen en de zorg voor haar zoon kan worden gepland." },
      "miss": { "label": "Mis het gehoor zonder contact omdat een beperking afwezigheid automatisch zou rechtvaardigen.", "feedback": "Ga er niet van uit dat afwezigheid zichzelf verklaart.", "consequence": "Een cruciale procedurestap kan worden gemist zonder dat de reden wordt begrepen." },
      "endure": { "label": "Zeg niets en ga door, ook wanneer pijn de concentratie beïnvloedt.", "feedback": "Onverklaarde problemen kunnen beïnvloeden hoe het verhaal wordt gehoord en vastgelegd.", "consequence": "Belangrijke details kunnen ontbreken of tegenstrijdig lijken." }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Gezondheid, school en zelfstandigheid",
    "title": "Eén afspraak lost niet elke barrière op",
    "scene": "Adama heeft een huisarts, doorlopende medicatie, een schoolplaats, toegankelijk vervoer en informatie over werktoestemming nodig.",
    "question": "Wat is het meest realistische plan?",
    "law": "Gezondheidszorg, onderwijs, opvangaccommodatie en arbeidsmarkttoegang lopen via verschillende Ierse diensten en toelatingsregels. IPAS publiceert voor elk afzonderlijke routes en ondersteuningsinformatie.",
    "plainLaw": "Bepaal afzonderlijke acties en contacten voor gezondheid, school, accommodatie en immigratie in plaats van te wachten tot één dienst alles regelt.",
    "sourceLabel": "IPAS-diensten en ondersteuning",
    "choices": {
      "plan": { "label": "Maak een vierdelig plan en zoek een belangenbehartiger of begeleider om dringende taken te coördineren.", "feedback": "Coördinatie is belangrijk omdat elk systeem een andere rol heeft.", "consequence": "Medicatie en school krijgen voorrang zonder accommodatie- of zaakverplichtingen uit het oog te verliezen." },
      "ipo": { "label": "Vraag de IPO-zaakbehandelaar alle zorg-, school- en vervoersdiensten te regelen.", "feedback": "IPO onderzoekt de beschermingsaanvraag en beheert niet alle voorzieningen na aankomst.", "consequence": "Dringende praktische behoeften worden bij de verkeerde instantie neergelegd." },
      "wait": { "label": "Wacht op beschermingsstatus voordat je zorg of een schoolplaats zoekt.", "feedback": "Aanvragers en kinderen kunnen tijdens de behandeling diensten gebruiken, volgens de toepasselijke regels.", "consequence": "De gezondheid verslechtert en het kind verliest onnodig onderwijstijd." }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "Vrij verkeer binnen de EU",
    "title": "Elena heeft geen arbeidsvergunning nodig",
    "scene": "Een recruiter zegt tegen Elena dat Bulgaarse staatsburgers dezelfde arbeidsvergunning nodig hebben als werknemers van buiten de EER en biedt haar er een te koop aan.",
    "question": "Wat moet zij controleren?",
    "law": "Als EU-burger mag Elena met een geldig paspoort of nationale identiteitskaart Ierland binnenkomen en zonder Ierse arbeidsvergunning werken. Voor verblijf na de eerste periode gelden voorwaarden.",
    "plainLaw": "Betaal niet voor een arbeidsvergunning die een EU-burger niet nodig heeft; controleer de afzonderlijke regels voor langer verblijf.",
    "sourceLabel": "Vanuit de EU/EER komen om te werken",
    "choices": {
      "eu": { "label": "Wijs de verkoop af, controleer de werkgever en gebruik officiële informatie over EU-verblijfsrechten.", "feedback": "Haar EU-burgerschap verandert de immigratieroute, niet de noodzaak van een echte baan.", "consequence": "Elena vermijdt oplichting en plant op basis van haar werkelijke vrijverkeersrechten." },
      "buy": { "label": "Betaal omdat leeftijd en Roma-afkomst een bijzondere vergunningseis zouden creëren.", "feedback": "Die kenmerken creëren voor een EU-burger geen arbeidsvergunningseis.", "consequence": "Geld en gevoelige documenten komen bij een oneerlijke recruiter terecht." },
      "visitor": { "label": "Verberg het werkplan omdat EU-burgers alleen op bezoek zouden mogen komen.", "feedback": "EU-burgers hebben het recht om in een andere EU-staat te werken, volgens de toepasselijke verblijfsregels.", "consequence": "Elena begrijpt haar eigen juridische basis verkeerd en benut die onvoldoende." }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "Langer blijven dan de eerste maanden",
    "title": "Ook vrij verkeer kent verblijfsvoorwaarden",
    "scene": "Elena wil voor onbepaalde tijd blijven, maar heeft alleen een korte belofte van tijdelijk werk en vrijwel geen spaargeld.",
    "question": "Welk plan is het betrouwbaarst?",
    "law": "EU-burgers mogen aanvankelijk in Ierland verblijven en kunnen langer blijven wanneer zij een EU-verdragsrecht uitoefenen, zoals werk, zelfstandige arbeid, een in aanmerking komende studie of zelfvoorziening. Voor werkzoekenden gelden specifieke bescherming en voorwaarden.",
    "plainLaw": "Bewaar bewijs van echt werk of werk zoeken en begrijp welke basis het verblijf na de eerste periode ondersteunt.",
    "sourceLabel": "Verblijfsrechten van EU-burgers in Ierland",
    "choices": {
      "evidence": { "label": "Bewaar sollicitaties, contracten, loonstroken en huisvestingsgegevens en controleer de toepasselijke verblijfsgrond.", "feedback": "Bewijs helpt aantonen dat Elena werkt of serieus werk zoekt.", "consequence": "Haar langetermijnplan berust op een gedocumenteerde verdragsrechtelijke basis." },
      "forever": { "label": "Ga ervan uit dat EU-burgerschap vanaf dag één onvoorwaardelijk permanent verblijf geeft.", "feedback": "Eerste toegang en langdurig verblijf zijn niet hetzelfde.", "consequence": "Elena ontdekt een verblijfsprobleem mogelijk pas wanneer zij een andere dienst probeert te gebruiken." },
      "cash": { "label": "Accepteer ongedocumenteerd contant werk omdat elk werk verblijf zou bewijzen.", "feedback": "Niet-aangegeven werk verzwakt arbeidsbescherming en levert mogelijk geen bruikbaar bewijs op.", "consequence": "De uitbuiting groeit terwijl haar arbeidsverleden moeilijk te bewijzen blijft." }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "Beginnen met werken",
    "title": "Een PPS-nummer en een IRP zijn geen EU-arbeidsvergunningen",
    "scene": "Het hotel vraagt Elena om een Ierse verblijfskaart voordat het haar inroostert.",
    "question": "Hoe moet zij reageren?",
    "law": "EU-burgers registreren zich doorgaans niet bij de immigratiedienst ISD en hebben geen IRP nodig om hun eigen EU-rechten uit te oefenen. Een PPS-nummer is een afzonderlijk identificatienummer voor belasting en overheidsdiensten.",
    "plainLaw": "Toon je EU-identiteit en leg de juiste basis van je werkrecht uit; regel belasting en PPS afzonderlijk.",
    "sourceLabel": "EU-burgers die in Ierland werken",
    "choices": {
      "explain": { "label": "Toon haar Bulgaarse identiteitsdocument en vraag HR om de regels voor EU-werknemers opnieuw te bekijken.", "feedback": "Zo wordt de eis gecorrigeerd zonder een document te verzinnen dat zij niet hoort te hebben.", "consequence": "De werkgever kan haar op de juiste EU-basis in dienst nemen." },
      "fake": { "label": "Koop een valse IRP omdat de werkgever erop staat.", "feedback": "Maak of koop nooit valse immigratiedocumenten.", "consequence": "Een werkgeversfout wordt een ernstig juridisch probleem voor Elena." },
      "ppswork": { "label": "Zeg dat een PPS-nummer het document is dat EU-werkrechten verleent.", "feedback": "Het PPS-nummer creëert geen recht om te werken.", "consequence": "Twee afzonderlijke systemen blijven door elkaar gehaald worden." }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Discriminatie bij huisvesting",
    "title": "Een afwijzing kan over meer dan betaalbaarheid gaan",
    "scene": "Een verhuurder is positief aan de telefoon, maar zegt dat de kamer niet meer beschikbaar is nadat die Elena ziet en hoort dat zij Roma en trans is.",
    "question": "Wat kan Elena doen zonder te veronderstellen dat elke afwijzing onrechtmatig is?",
    "law": "Het Ierse gelijkheidsrecht verbiedt discriminatie bij huisvesting op beschermde gronden, waaronder ras, geslacht en leeftijd. Transgenderdiscriminatie valt onder de grond geslacht, maar bewijs en termijnen zijn belangrijk bij een klacht.",
    "plainLaw": "Leg vast wat gebeurde, bewaar de advertentie en berichten en zoek snel huisvestings- of gelijkheidsadvies.",
    "sourceLabel": "IHREC: ras en huisvesting",
    "choices": {
      "save": { "label": "Bewaar de advertentie en berichten, noteer wat is gezegd en vraag IHREC of een huisvestingsdienst om advies.", "feedback": "Bewijs dat meteen wordt vastgelegd helpt discriminatie van een andere verklaring te onderscheiden.", "consequence": "Elena kan een klacht overwegen terwijl zij dringend woonruimte blijft zoeken." },
      "threat": { "label": "Bedreig de verhuurder publiekelijk zonder bewijs te bewaren.", "feedback": "Boosheid is begrijpelijk, maar bewijs en advies bieden een sterkere weg naar herstel.", "consequence": "De advertentie verdwijnt en de precieze discriminerende woorden worden moeilijker te bewijzen." },
      "accept": { "label": "Ga ervan uit dat discriminatie van Roma of trans huurders legaal is bij particulier bezit.", "feedback": "Particuliere huisvestingsdiensten vallen onder gelijkheidsregels, met juridische details en uitzonderingen.", "consequence": "Een mogelijk aanvechtbare afwijzing wordt niet onderzocht." }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "Gelijkheid op de werkplek",
    "title": "Eén incident kan meerdere beschermde gronden raken",
    "scene": "Een leidinggevende bespot Elena’s accent en gender, geeft jongere niet-Roma-werknemers betere diensten en zegt dat zij een ander naamkaartje moet gebruiken.",
    "question": "Welke reactie beschermt de overlappende kwesties?",
    "law": "De wetten inzake gelijke behandeling in arbeid verbieden werkdiscriminatie op gronden zoals geslacht, ras en leeftijd. Transdiscriminatie valt onder geslacht; werkgerelateerde klachten kunnen bij de WRC worden ingediend.",
    "plainLaw": "Leg elk incident en vergelijkbare werknemerssituaties vast, gebruik de werkgeversprocedure waar dat veilig kan en zoek snel gelijkheidsadvies.",
    "sourceLabel": "IHREC: discriminatie op het werk",
    "choices": {
      "log": { "label": "Houd een gedateerd overzicht bij van uitspraken, diensten en getuigen en vraag daarna IHREC of WRC om advies.", "feedback": "De gegevens tonen hoe ras, gender en leeftijd samen een rol kunnen spelen.", "consequence": "Elena kan tijdig een geïnformeerde interne of externe oplossing zoeken voordat bewijs verdwijnt of termijnen verstrijken." },
      "one": { "label": "Meld alleen leeftijd omdat één klacht geen overlappende gronden zou mogen bevatten.", "feedback": "Een klacht kan meerdere beschermde gronden beschrijven wanneer de feiten dat ondersteunen.", "consequence": "De raciale en genderaspecten van de behandeling verdwijnen uit het verhaal." },
      "quit": { "label": "Neem direct ontslag zonder roosters of berichten te bewaren of advies te zoeken.", "feedback": "Veiligheid gaat voor, maar bewijs en advies kunnen latere mogelijkheden beschermen.", "consequence": "Het inkomen stopt en het patroon wordt moeilijker aan te tonen." }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Onmiddellijke veiligheid",
    "title": "Angst over immigratie kan onderdeel zijn van dwingende controle",
    "scene": "Leila’s echtgenoot beheert haar paspoort, geld en telefoon en zegt dat de Gardaí haar uitzetten als zij met de kinderen vertrekt.",
    "question": "Wat moet vooropstaan?",
    "law": "Huiselijk misbruik kan naast lichamelijk geweld ook dwingende controle omvatten. Wie direct gevaar loopt, moet 999 of 112 bellen; immigratiestatus verhindert een slachtoffer niet contact op te nemen met An Garda Síochána of een gespecialiseerde dienst.",
    "plainLaw": "Geef voorrang aan directe veiligheid en vertrouwelijke gespecialiseerde hulp; de pleger bepaalt de immigratiestatus niet.",
    "sourceLabel": "Ondersteuning van Women’s Aid",
    "choices": {
      "safe": { "label": "Gebruik een veilig apparaat of vertrouwd contact om noodhulp of gespecialiseerde hulp bij huiselijk misbruik te bereiken.", "feedback": "Een veiligheidsplan kan rekening houden met kinderen, taal, toezicht en documenten.", "consequence": "Leila krijgt vertrouwelijke mogelijkheden zonder eerst de pleger te hoeven confronteren." },
      "confront": { "label": "Kondig alleen tegenover de pleger aan dat zij vertrekt en eis alle documenten terug.", "feedback": "Confrontatie kan het gevaar vergroten; een specialist kan een veiliger vertrek helpen plannen.", "consequence": "De pleger kan geweld opvoeren of documenten en geld wegnemen." },
      "believe": { "label": "Blijf omdat de echtgenoot wettelijk uitzetting zou kunnen bevelen.", "feedback": "Een echtgenoot neemt geen immigratiebesluiten.", "consequence": "Valse immigratiedreigementen blijven Leila en de kinderen gevangenhouden." }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Vertrouwelijke communicatie",
    "title": "Een veilige contactmethode is belangrijk",
    "scene": "De echtgenoot controleert de browsergeschiedenis en vertaalt elke officiële brief voordat Leila die kan lezen.",
    "question": "Hoe kan zij veiliger informatie zoeken?",
    "law": "ISD waarschuwt dat apparaten digitale sporen achterlaten en staat een slachtoffer toe het contactadres van een vertegenwoordiger te gebruiken. Women’s Aid kan een tolk inschakelen en bellers doorverbinden met diensten in heel Ierland.",
    "plainLaw": "Gebruik een veiliger apparaat en contactgegevens die de pleger niet kan controleren; vraag om een tolk in plaats van op de pleger te vertrouwen.",
    "sourceLabel": "ISD-immigratierichtlijnen bij huiselijk misbruik",
    "choices": {
      "private": { "label": "Gebruik een vertrouwd apparaat, veilige e-mail of het adres van een vertegenwoordiger en vraag om onafhankelijke vertolking.", "feedback": "Dit beperkt toezicht en geeft Leila directe toegang tot haar eigen informatie.", "consequence": "Hulpdiensten kunnen communiceren zonder alles via de echtgenoot te laten lopen." },
      "shared": { "label": "Gebruik het gedeelde gezinsaccount omdat geschiedenis wissen ieder spoor zou verwijderen.", "feedback": "Geschiedenis wissen garandeert niet dat activiteit verborgen blijft.", "consequence": "De echtgenoot kan het veiligheids- of immigratieplan ontdekken." },
      "translate": { "label": "Laat de echtgenoot elk vertrouwelijk gesprek vertalen.", "feedback": "Een vermeende pleger mag geen controle hebben over vertolking van veiligheids- of juridisch advies.", "consequence": "Informatie kan worden veranderd, achtergehouden of gebruikt om Leila te intimideren." }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Een zelfstandige immigratiestatus",
    "title": "Vertrekken beëindigt de toestemming niet automatisch",
    "scene": "Leila’s verblijfsrecht is gekoppeld aan haar echtgenoot en zij denkt dat zij onrechtmatig verblijft zodra zij die avond naar een opvanghuis gaat.",
    "question": "Welke route moet zij dringend onderzoeken?",
    "law": "Een slachtoffer van wie de toestemming gekoppeld is aan de pleger kan rechtstreeks of via een advocaat zelfstandige immigratietoestemming aanvragen volgens de ISD-richtlijnen voor huiselijk misbruik. De aanvraag is gratis en wordt vertrouwelijk behandeld.",
    "plainLaw": "Vraag advies over de procedure voor zelfstandige toestemming; de pleger verlaten en status verliezen vallen niet automatisch samen.",
    "sourceLabel": "Zelfstandige toestemming voor slachtoffers van huiselijk misbruik",
    "choices": {
      "apply": { "label": "Neem via veilige kanalen contact op met ISD of een advocaat en vraag zelfstandige status aan volgens de richtlijnen.", "feedback": "De regeling bestaat voor toestemming die aan de vermeende pleger is gekoppeld.", "consequence": "ISD kan Leila’s eigen omstandigheden beoordelen zonder dat de echtgenoot de aanvraag beheerst." },
      "permission": { "label": "Vraag de echtgenoot toestemming voor haar zelfstandige aanvraag te ondertekenen.", "feedback": "De pleger heeft geen beslissende rol in het verzoek om zelfstandige status.", "consequence": "De echtgenoot wordt gewaarschuwd en krijgt een nieuwe kans om veiligheid tegen te werken." },
      "automatic": { "label": "Ga ervan uit dat verhuizen naar een opvanghuis automatisch Stamp 4 oplevert.", "feedback": "Zelfstandige toestemming vereist een aanvraag en beoordeling en ontstaat niet automatisch.", "consequence": "Leila kan denken dat de immigratiestap voltooid is terwijl dat niet zo is." }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Bewijs hoeft niet perfect te zijn",
    "title": "Niet elke overlevende heeft een politierapport",
    "scene": "Het meeste misbruik gebeurde thuis. Leila heeft berichten en een huisartsbezoek, maar geen gerechtelijk bevel of Garda-incidentnummer.",
    "question": "Hoe moet zij de aanvraag opbouwen?",
    "law": "ISD vraagt zo veel mogelijk informatie en noemt voorbeelden zoals gerechtelijke bevelen, medische of politierapporten, brieven van overheidsinstanties en hulpdiensten voor huiselijk geweld. De omstandigheden en kinderen moeten worden toegelicht; de voorbeelden zijn geen reden om bewijs te verzinnen.",
    "plainLaw": "Verzamel wat werkelijk bestaat, leg hiaten uit en vraag een advocaat of hulpdienst om de geschiedenis te helpen presenteren.",
    "sourceLabel": "ISD-richtlijnen over bewijs",
    "choices": {
      "genuine": { "label": "Bewaar echte berichten en gegevens, beschrijf het patroon en vraag waar passend ondersteunende brieven.", "feedback": "Een samenhangend, waarheidsgetrouw verhaal kan verschillende soorten bewijs gebruiken.", "consequence": "ISD ontvangt de beschikbare geschiedenis zonder dat een vals document die ondermijnt." },
      "wait": { "label": "Wacht met hulp zoeken tot zij elk voorbeeld op de ISD-lijst heeft.", "feedback": "Veiligheid en advies mogen niet worden uitgesteld om een perfect dossier te krijgen.", "consequence": "Het gevaar duurt voort en bruikbaar bewijs kan verloren gaan." },
      "create": { "label": "Verzin een Garda-rapportnummer omdat officieel bewijs altijd vereist zou zijn.", "feedback": "Verzin nooit bewijs.", "consequence": "Valse informatie kan zowel geloofwaardigheid als de immigratieaanvraag schaden." }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Na de eerste veiligheid",
    "title": "Immigratietoestemming is één onderdeel van herstel",
    "scene": "Leila heeft inkomen, veilige huisvesting, continuïteit op school en LHBT-bevestigende steun nodig terwijl familierechtelijke vragen nog onopgelost zijn.",
    "question": "Wat is de meest realistische volgende stap?",
    "law": "Als zelfstandige toestemming onder de richtlijnen wordt goedgekeurd, staat Stamp 4 werk zonder arbeidsvergunning toe. Veiligheid, huisvesting, kinderen en familierecht vereisen nog afzonderlijke gespecialiseerde diensten; bij afwijzing moeten de redenen en andere immigratiemogelijkheden worden uitgelegd.",
    "plainLaw": "Maak een samenhangend plan voor immigratie, veiligheid, kinderen, huisvesting en inkomen in plaats van te verwachten dat één beslissing alles oplost.",
    "sourceLabel": "ISD-immigratierichtlijnen bij huiselijk misbruik",
    "choices": {
      "team": { "label": "Schakel samen een immigratieadviseur, hulp bij huiselijk misbruik en passende gezins-, huisvestings- en LHBT-ondersteuning in.", "feedback": "Verschillende specialisten kunnen verbonden maar juridisch afzonderlijke behoeften aanpakken.", "consequence": "Leila kan zelfstandigheid opbouwen zonder dat één dienst de kinderen over het hoofd ziet en een andere haar status." },
      "stamp": { "label": "Ga ervan uit dat Stamp 4 automatisch huisvesting biedt en regelingen voor de kinderen oplost.", "feedback": "Immigratietoestemming beslist niet over huisvesting of familierecht.", "consequence": "Dringende praktische en juridische behoeften blijven onbehandeld." },
      "return": { "label": "Keer terug naar de echtgenoot omdat goedkeuring niet gegarandeerd is.", "feedback": "Onzekerheid vraagt om gespecialiseerde planning, niet om gedwongen blootstelling aan gevaar.", "consequence": "Dwingende controle hervat voordat zelfstandige mogelijkheden behoorlijk zijn onderzocht." }
    }
  }
} satisfies JourneyTranslationCatalog;

export default catalog;

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Wie zich moet registreren, wat registratie vastlegt en hoe je de officiële procedure gebruikt.",
  "Personal Public Service number": "Hoe een PPS-nummer wordt gebruikt voor overheidsdiensten en officiële transacties. Het is geen immigratietoestemming.",
  "Choose an immigration purpose": "Officiële startpunten voor bezoeken, werken, studeren, wonen in Ierland of gezinshereniging.",
  "Immigration permission stamps": "Begrijp wat de stempel op een Ierse verblijfskaart toestaat en vereist.",
  "Applying for international protection": "Officiële informatie over de Ierse aanvraag- en onderzoeksprocedure.",
  "Applications made after 12 June 2026": "Begrijpelijke informatie over de Wet internationale bescherming 2026 en de regels voor nieuwere aanvragen.",
  "Accommodation and reception supports": "Informatie over IPAS-accommodatie, diensten, bewonerswelzijn en klachten.",
  "Vulnerability and accommodation needs": "Hoe aanvragers beperking, gezondheid, ouderschap en andere bijzondere opvangbehoeften kunnen aangeven en hoe accommodatiezorgen worden beoordeeld.",
  "Independent legal and practical support": "Informatie, belangenbehartiging en diensten voor rechtshulp, huisvesting, werk, jongeren en hervestiging.",
  "Employment permit types": "Actuele vergunningscategorieën, voorwaarden, beroepenlijsten, aanvraagrichtlijnen en updates.",
  "Rights when working in Ireland": "Beloning, arbeidsvoorwaarden, werktijden, verlof, administratie en routes voor klachten op het werk.",
  "Migrant employment and exploitation support": "Onafhankelijke informatie en ondersteuning voor arbeidsmigranten, ook voor mensen die risico op uitbuiting lopen.",
  "EU citizens coming to work": "Werkrechten voor EU- en EER-burgers, waaronder waarom een Ierse arbeidsvergunning doorgaans niet nodig is.",
  "EU residence rights": "Gronden waarop EU-burgers Ierland mogen binnenkomen en er verblijven, waaronder werk, werk zoeken, studie en zelfvoorziening.",
  "Coming to study in Ireland": "Informatie over visa, financiën, verzekering, opleidingen en registratie voor studenten van buiten de EER.",
  "Education in Ireland": "Publieksinformatie over scholen, vervolgonderwijs, hoger onderwijs en onderwijsondersteuning.",
  "Healthcare services": "Hoe je in Ierland toegang krijgt tot huisartsen, ziekenhuizen, noodhulp en informatie over volksgezondheid.",
  "Finding and renting a home": "Informatie over huisvesting, huren, huurdersrechten, borgsommen, dakloosheid en woonondersteuning.",
  "Independent public information": "Landelijke informatie over sociale zekerheid, gezondheid, huisvesting, geld, belasting, onderwijs en consumentenrechten.",
  "Traveller and Roma equality rights": "Informatie over discriminatie van Traveller- en Roma-gemeenschappen en de bescherming binnen het Ierse gelijkheidsrecht.",
  "Coming to join family": "Vind de route op basis van de vraag of de referent Iers, Brits, EER- of Zwitsers staatsburger is, van buiten de EER komt of beschermingsstatus heeft.",
  "Specialist migrant and refugee advice": "Informatie en individuele hulp over immigratiestatus, visa, gezinshereniging, staatsburgerschap en opvangomstandigheden.",
  "Independent status after domestic abuse": "Vertrouwelijke immigratierichtlijnen voor een slachtoffer van wie de toestemming aan de vermeende pleger is gekoppeld, inclusief de aanvraag en mogelijk bruikbaar bewijs.",
  "Domestic-abuse safety and support": "Vertrouwelijke ondersteuning, vertolking en veiligheidsinformatie voor vrouwen die huiselijk misbruik meemaken; bel 999 of 112 bij nood."
};

export const controls = {
  "resume": "Doorgaan",
  "resumeJourney": "Verder met {name}",
  "restart": "Deze reis opnieuw beginnen",
  "savedJourney": "Opgeslagen reis",
  "stage": "Fase",
  "returnHome": "Terug naar de reizen",
  "saveUnavailable": "De voortgang kan niet worden opgeslagen in deze browser. Houd deze pagina open om verder te gaan."
} satisfies JourneyControls;
