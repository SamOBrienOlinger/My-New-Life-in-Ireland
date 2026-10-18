import type { LearningCopy } from './en';

const copy = {
  recapTitle: "Je reis met {name}",
  recapIntro: "Kijk terug op je beslissingen, bekijk opnieuw wat extra aandacht verdient en vind nuttige bronnen voor de volgende stappen.",
  decisionsTitle: "Je beslissingen, toegelicht",
  revisitCount: "Beslissingen om opnieuw te bekijken: {count}",
  allConsidered: "Je herkende in elke fase de beter onderbouwde optie. Bekijk hieronder de redenen en bronnen.",
  yourChoice: "Je koos",
  informedChoice: "Beter onderbouwde keuze",
  worthRevisiting: "Een tweede blik waard",
  saferOption: "Een optie om te overwegen",
  revisitDecision: "Bekijk deze beslissing opnieuw",
  revisitLabel: "Bekijk {stage} opnieuw: {title}",
  returnToRecap: "Terug naar je overzicht",
  misunderstanding: "Een veelvoorkomend misverstand",
  nextStep: "Een nuttige volgende stap",
  checkSource: "Bekijk de richtlijnen",
  relatedResources: "Bronnen voor deze reis",
  relatedIntro: "Begin bij de vragen die je beslissingen opriepen. Elke bron heeft een eigen doel en eigen voorwaarden.",
  openResource: "Open de bron",
  reflectTitle: "Sta even stil en denk na",
  reflectIntro: "Denk na over de omstandigheden van deze fictieve persoon. Voor deze vragen krijg je geen score.",
  controlPrompt: "Wat had deze persoon zelf in de hand en wat hing af van andere mensen, diensten of omstandigheden?",
  supportPrompt: "Welke ondersteuning zou de volgende stap beter haalbaar kunnen maken?",
  livedContext: "Houd de omstandigheden van de persoon in beeld",
  sourcePublisher: "Gepubliceerd door",
  sourceScope: "Gaat over",
  sourceChecked: "Bron geraadpleegd",
  sourceUndated: "Raadpleegdatum niet vastgelegd",
  sourceDateMeaning: "De raadpleegdatum geeft aan wanneer de gekoppelde pagina voor dit project is gecontroleerd. Dit is niet de datum waarop de uitgever de pagina heeft bijgewerkt, en ook geen garantie dat een regel ongewijzigd is.",
  sourceMethod: "Hoe we bronnen gebruiken en controleren",
  sourceMethodIntro: "De links naar richtlijnen verwijzen naar de verantwoordelijke overheidsinstantie of naar een met naam genoemde gespecialiseerde organisatie. De uitgever, het onderwerp en de raadpleegdatum staan naast elke bron, voor zover deze gegevens zijn vastgelegd. Open de bron om de huidige voorwaarden te controleren en na te gaan voor wie ze gelden.",
  sourceMethodContent: "De verhalen vereenvoudigen een situatie om ervan te leren. De toelichting legt de beslissing in die scène uit; ze kan niet beoordelen of een echte persoon aan de voorwaarden voldoet. Een score weerspiegelt de keuzes in de oefening, niet hoe klaar iemand is om te immigreren of wat de waarschijnlijke uitkomst van een aanvraag is.",
  sourceMethodTranslation: "De vertalingen proberen dezelfde situaties, betekenissen van antwoorden en bronlinks te behouden. Ze zijn hulpmiddelen om te leren, geen officiële vertalingen van de gekoppelde richtlijnen. De actuele informatie van de oorspronkelijke uitgever blijft de referentie voor echte beslissingen.",
  sourceMethodReflection: "De reflectievragen verkennen drempels uit de fictieve verhalen, waaronder onzekerheid, zorgtaken, toegankelijkheidsbehoeften en afhankelijkheid van anderen. Ze pretenderen niet de ervaring van iedere migrant weer te geven of een getuigenis van een echte persoon te zijn.",
  sourceMethodLink: "Lees over onze bronnen",
  professionalTitle: "Beroepsregistratie voor verpleegkundigen en verloskundigen",
  professionalDescription: "Voor verpleegkundigen en verloskundigen die hun beroepskwalificatie buiten de EU hebben behaald: controleer de erkenning van kwalificaties en de beroepsregistratie bij NMBI, naast de toepasselijke immigratievoorwaarden.",
  professionalAction: "Controleer de stappen voor beroepsregistratie voor deze verpleegkundige functie.",
  taxTitle: "Je eerste baan aanmelden voor de belasting",
  taxDescription: "Voor mensen die aan hun eerste baan in Ierland beginnen: Revenue legt uit hoe je de baan registreert met een PPS-nummer en myAccount, en hoe dit helpt voorkomen dat belasting tegen het noodtarief wordt ingehouden.",
  taxAction: "Bekijk de stappen van Revenue voor het registreren van een eerste baan wanneer je je voorbereidt om te gaan werken.",
  scopes: {
    immigration: "Immigratietoestemmingen en voorwaarden",
    employment: "Arbeidsvergunningen en arbeidsrechten",
    protection: "Internationale bescherming en opvang",
    "public-services": "Overheidsdiensten en dagelijks leven",
    equality: "Gelijkheid en discriminatie",
    "specialist-support": "Onafhankelijke specialistische informatie en ondersteuning",
    "professional-registration": "Beroepskwalificaties en registratie",
    "general-information": "Algemene informatie en doorverwijzing",
  },
  insights: {
    offer: {
      explanation: "Een baanaanbod is geen arbeidsvergunning. De feitelijke werkzaamheden, de werkgever en de huidige vergunningscriteria moeten nog worden gecontroleerd.",
      action: "Vergelijk het schriftelijke aanbod met de officiële controlelijst en noteer wat nog bevestigd moet worden.",
    },
    permissions: {
      explanation: "Eén goedkeuring rondt niet alle immigratiestappen af. Toestemming om te werken, een visum waar dat nodig is, toegang tot het land en verblijfsregistratie beantwoorden verschillende vragen.",
      action: "Maak aan de hand van de actuele bron een lijst van de goedkeuringen en documenten die voor deze route nodig zijn.",
    },
    travel: {
      explanation: "Een goedkeuring neemt niet weg dat het werkelijke reisdoel moet worden uitgelegd. Het verhaal van de persoon en de ondersteunende documenten moeten met elkaar overeenkomen.",
      action: "Bepaal welke documenten deze reis verklaren en houd ze tijdens het reizen veilig toegankelijk.",
    },
    registration: {
      explanation: "Een PPS-nummer, een afspraak en immigratietoestemming hebben verschillende doelen. De procedure van de ene dienst afronden betekent niet dat de procedures van de andere diensten ook zijn afgerond.",
      action: "Controleer welke registratiestappen gelden en houd van elke afspraak en elk vereiste een afzonderlijk overzicht bij.",
    },
    workRights: {
      explanation: "Afhankelijk zijn van een werkgever betekent niet dat je elke eis moet accepteren. Immigratievoorwaarden en arbeidsrechten zijn afzonderlijke vragen die je bij de bevoegde dienst moet controleren.",
      action: "Bewaar gegevens over uren, loon en berichten veilig en zoek een onafhankelijke bron van arbeidsrechtelijk advies.",
    },
    protection: {
      explanation: "Er is geen vooraf opgesteld verhaal dat bescherming garandeert. De eigen omstandigheden van de persoon, een waarheidsgetrouw verhaal en de toepasselijke procedure zijn van belang.",
      action: "Gebruik de informatie over bescherming die voor de aanvraag geldt en zoek uit waar onafhankelijke juridische ondersteuning kan worden gevraagd.",
    },
    evidence: {
      explanation: "Ontbrekend bewijs is geen reden om bewijs te verzinnen. Werkelijke hiaten uitleggen en vragen welk ander bewijs kan helpen is iets anders dan het verhaal veranderen.",
      action: "Maak een lijst van het beschikbare bewijs, wat ontbreekt en wat met een adviseur besproken moet worden.",
    },
    services: {
      explanation: "Een dienst die bij de ene behoefte helpt, beslist mogelijk niet over een andere. Huisvesting, beschermingsbesluiten, gezondheidszorg en juridisch advies hebben verschillende rollen.",
      action: "Koppel de directe vraag aan de verantwoordelijke dienst en noteer met wie vervolgens contact moet worden opgenomen.",
    },
    protectionWork: {
      explanation: "De ervaring van een andere aanvrager toont niet noodzakelijk aan dat deze persoon mag werken. De toepasselijke procedure, termijnen en individuele toestemming moeten worden gecontroleerd.",
      action: "Controleer de actuele richtlijnen voor toegang tot de arbeidsmarkt en de toestemming van de persoon voordat je een werkplan maakt.",
    },
    study: {
      explanation: "Een toelatingsaanbod van een onderwijsinstelling regelt de immigratie, huisvesting of financiën niet. Een haalbaar studieplan moet met elk van deze punten rekening houden.",
      action: "Gebruik de controlelijst voor studenten om vast te stellen welke vragen over de opleiding, financiën, verzekering en huisvesting nog moeten worden opgelost.",
    },
    studentWork: {
      explanation: "Een studietoestemming is geen onbeperkte toestemming om te werken. De daadwerkelijke verblijfsstempel, toegestane uren en toepasselijke data zijn van belang.",
      action: "Vergelijk het voorgestelde werkrooster met de huidige voorwaarden van de studietoestemming.",
    },
    family: {
      explanation: "Er bestaat niet één gezinsaanvraag voor iedereen. De status van de referent en de familierelatie bepalen welke richtlijnen moeten worden gebruikt.",
      action: "Zoek de richtlijnen voor deze referent en familierelatie en neem vervolgens de bewijsvereisten door.",
    },
    familyWork: {
      explanation: "Bij familie gaan wonen maakt op zichzelf niet alle rechten om te werken duidelijk. De voorwaarden van de daadwerkelijke immigratietoestemming van de persoon moeten worden gecontroleerd.",
      action: "Controleer de vastgelegde toestemming en de voorwaarden voor werk voordat je vertrouwt op een aanname van een werkgever.",
    },
    support: {
      explanation: "Toestemming alleen lost vragen over huisvesting, gezondheid, inkomen of isolement niet op. Verschillende behoeften kunnen verschillende hulpbronnen vereisen.",
      action: "Kies één directe behoefte en zoek een geschikte onafhankelijke dienst of een contact in de gemeenschap.",
    },
    access: {
      explanation: "Dat een dienst wordt aangeboden, betekent niet dat die toegankelijk is. Een zichtbare beperking kan bovendien maar één deel zijn van iemands ondersteuningsbehoeften.",
      action: "Beschrijf de concrete drempel, vraag om de behoeften vast te leggen en zoek de juiste contactpersoon voor ondersteuning of klachten.",
    },
    participation: {
      explanation: "Moeite met deelnemen mag niet worden behandeld als gebrek aan belangstelling. Behoeften rond tolken, gezondheid of toegankelijkheid kunnen vereisen dat ondersteuning vooraf wordt besproken.",
      action: "Vertel de bevoegde dienst en de adviseur welke ondersteuning mogelijk nodig is om aan de afspraak te kunnen deelnemen.",
    },
    euWork: {
      explanation: "Het EU-burgerschap verandert de vraag of een arbeidsvergunning nodig is. Belastingregistratie en een PPS-nummer staan los van de grondslag van iemands recht om te werken.",
      action: "Controleer de richtlijnen voor EU-burgers en behandel de afzonderlijke vereisten van de overheidsdiensten elk apart.",
    },
    euResidence: {
      explanation: "Vrij verkeer betekent niet dat voor elke verblijfssituatie dezelfde voorwaarden gelden. De grondslag en de duur van een verblijf moeten worden meegewogen.",
      action: "Bepaal welke verblijfsgrondslag geldt en welk bewijs in deze situatie nodig kan zijn.",
    },
    equality: {
      explanation: "Een weigering of een incident op het werk kan meerdere gelijkheidskwesties oproepen. Iemands identiteit bepaalt op zichzelf niet of een juridische claim slaagt.",
      action: "Bewaar een feitelijk verslag van wat er is gebeurd en vraag tijdig advies over de juiste procedure en termijnen.",
    },
    abuse: {
      explanation: "Een dreigement van een gewelddadige partner is geen immigratiebesluit. Ondersteuning voor veiligheid en advies over onafhankelijke toestemming voorzien in samenhangende maar verschillende behoeften.",
      action: "Zoek een veilige manier om contact op te nemen met gespecialiseerde ondersteuning en vraag naar de toepasselijke procedure voor onafhankelijke toestemming.",
    },
    safeContact: {
      explanation: "Een contactmethode is alleen nuttig als de persoon die veilig kan gebruiken. Een gedeeld apparaat of account, of een tolk die ook voor andere betrokkenen tolkt, biedt mogelijk geen privacy.",
      action: "Bespreek met een gespecialiseerde ondersteuningsdienst een veiligere contactmethode, rekening houdend met de omstandigheden van de persoon.",
    },
  },
  reflections: {
    critical: "Hoe zouden een startdatum, beroepsvereisten of druk van een werkgever invloed kunnen hebben op de beschikbare tijd om een weloverwogen beslissing te nemen?",
    general: "Hoe zouden wervingskosten, controle over documenten of afhankelijkheid van een werkgever het moeilijker kunnen maken om een onveilige regeling ter discussie te stellen?",
    protection: "Hoe zouden angst, uitputting, scheiding van familie of ontbrekende documenten iemands vermogen kunnen beïnvloeden om uit te leggen wat er is gebeurd?",
    study: "Hoe zouden woonkosten, financiële druk of een gevoel van isolement het vermogen van een student kunnen beïnvloeden om de opleiding voort te zetten?",
    family: "Hoe zou iemand zelfstandig toegang tot informatie, documenten en ondersteuning kunnen opbouwen terwijl die zich bij familie vestigt?",
    "protection-access": "Hoe zou daadwerkelijke toegankelijkheid eruitzien wanneer mobiliteit, pijn, ouderschap en afspraken allemaal samen moeten worden meegewogen?",
    "eu-mobility": "Hoe kunnen formele rechten en dagelijkse ervaringen verschillen wanneer racisme, leeftijdsdiscriminatie of transfobie de toegang tot werk en huisvesting beïnvloeden?",
    "family-safety": "Hoe zouden controle over geld, taalbarrières, kinderen en een apparaat waarvan het gebruik wordt gevolgd de mogelijkheden kunnen beperken die beschikbaar lijken?",
  },
} satisfies LearningCopy;

export default copy;
