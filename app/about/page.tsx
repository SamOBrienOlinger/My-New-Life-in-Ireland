"use client";

import { ArrowLeft, BookOpen, Copyright, ExternalLink, Scale, ShieldCheck } from "lucide-react";
import { LanguageControl, ui, useLanguage } from "../i18n";
import { additionalAboutCopy } from "../additional-page-copy";
import { MobileNavigation } from "../mobile-navigation";

const repositoryUrl =
  "https://github.com/SamOBrienOlinger/My-New-Life-in-Ireland";

const aboutCopy = {
  en:{back:"Return to the experience",eyebrow:"About the project",title:"Understanding the choices behind a new life in Ireland.",intro:"A New Life in Ireland is an interactive educational project. It helps people explore work, study, family, international protection and EU free-movement pathways through the decisions faced by twelve fictional characters.",how:"How the experience works",how1:"Each character is a fictional composite created for learning. Each five-stage journey moves from planning and preparation to travel, arrival and building a life. Choices introduce employment permits, visas, study, family reunification, immigration registration, international protection, IPAS accommodation, workplace rights and independent support.",how2:"Three journeys focus especially on intersectional barriers. They show how disability, parenting, ethnicity, age, gender, sexual identity, language, financial control and immigration dependency can overlap. Identity does not determine an outcome; the choices show how Irish immigration, reception, equality, safety and support systems may need to be used together.",how3:"The characters do not represent real people or promise a particular legal outcome. Every real application depends on the person’s individual facts and the rules in force at the time.",limits:"Information and limitations",limits1:"The project links to official Irish sources so visitors can check current requirements before acting. Its content is general educational information, not legal advice, and it cannot decide eligibility, immigration status or the outcome of an application.",limits2:"Immigration rules, salary thresholds, occupation lists, procedures and personal circumstances can change. For a real case, use the official sources and seek suitably qualified advice where needed.",open:"Open the Ireland information hub",creator:"Creator, copyright and ownership",creator1:"A New Life in Ireland was created and is owned by Sam O’Brien-Olinger. Copyright © 2026 Sam O’Brien-Olinger. All rights reserved.",creator2:"The original source code, written content, fictional characters, narratives, decision pathways, educational materials, artwork, visual identity and interface designs are protected, except where third-party material is separately identified. Public access to the repository does not make the project open source or grant permission to reuse, reproduce, adapt, deploy or create derivative works from it.",licence:"Read the complete licence terms",transparency:"Source transparency",transparency1:"The public repository records the project’s code, documentation, ownership terms and deployment configuration. Third-party libraries and linked official publications remain subject to their own licences and terms.",repo:"View the repository",footer:"General educational information only. This project does not provide legal advice."},
  ga:{back:"Fill ar an eispéireas",eyebrow:"Maidir leis an tionscadal",title:"Na roghanna taobh thiar de shaol nua in Éirinn a thuiscint.",intro:"Tionscadal oideachais idirghníomhach é Saol Nua in Éirinn. Cabhraíonn sé le daoine bealaí oibre, staidéir, teaghlaigh, cosanta idirnáisiúnta agus saorghluaiseachta AE a fhiosrú trí chinntí dáréag carachtar ficseanúil.",how:"Conas a oibríonn an t-eispéireas",how1:"Carachtar cumaisc ficseanúil atá i ngach duine, cruthaithe don fhoghlaim. Téann gach turas cúig chéim ón bpleanáil agus ullmhúchán go taisteal, teacht agus tógáil saoil. Cuireann na roghanna ceadanna fostaíochta, víosaí, staidéar, athaontú teaghlaigh, clárú inimirce, cosaint idirnáisiúnta, cóiríocht IPAS, cearta oibre agus tacaíocht neamhspleách i láthair.",how2:"Díríonn trí thuras ar bhacainní trasnacha. Léiríonn siad conas a d’fhéadfadh míchumas, tuismitheoireacht, eitneacht, aois, inscne, féiniúlacht ghnéasach, teanga, smacht airgeadais agus spleáchas inimirce teacht le chéile. Ní chinneann féiniúlacht an toradh; léiríonn na roghanna conas a d’fhéadfadh córais inimirce, glactha, comhionannais, sábháilteachta agus tacaíochta oibriú le chéile.",how3:"Ní daoine fíor iad na carachtair agus ní gheallann siad toradh dlíthiúil. Braitheann gach iarratas fíor ar fhíricí an duine agus ar na rialacha atá i bhfeidhm.",limits:"Eolas agus teorainneacha",limits1:"Nascann an tionscadal le foinsí oifigiúla Éireannacha ionas gur féidir le cuairteoirí riachtanais reatha a sheiceáil. Eolas ginearálta oideachais atá ann, ní comhairle dlí, agus ní féidir leis incháilitheacht, stádas nó toradh iarratais a chinneadh.",limits2:"Féadfaidh rialacha inimirce, tairseacha tuarastail, liostaí gairmeacha, nósanna imeachta agus cúinsí pearsanta athrú. I gcás fíor, úsáid foinsí oifigiúla agus lorg comhairle cháilithe.",open:"Oscail mol eolais na hÉireann",creator:"Cruthaitheoir, cóipcheart agus úinéireacht",creator1:"Chruthaigh Sam O’Brien-Olinger Saol Nua in Éirinn agus is leis é. Cóipcheart © 2026 Sam O’Brien-Olinger. Gach ceart ar cosaint.",creator2:"Tá an bunchód, an t-ábhar scríofa, na carachtair, na hinsintí, na bealaí cinntí, na hábhair oideachais, an saothar ealaíne, an fhéiniúlacht amhairc agus na dearaí comhéadain cosanta, seachas ábhar tríú páirtí a aithnítear ar leith. Ní fhágann rochtain phoiblí ar an stór gur foinse oscailte é ná ní thugann sí cead athúsáide, atáirgthe, oiriúnaithe nó imscartha.",licence:"Léigh téarmaí iomlána an cheadúnais",transparency:"Trédhearcacht foinsí",transparency1:"Taifeadann an stór poiblí cód, doiciméadú, téarmaí úinéireachta agus cumraíocht imscartha an tionscadail. Tá leabharlanna tríú páirtí agus foilseacháin nasctha faoi réir a gceadúnas féin.",repo:"Féach ar an stór",footer:"Eolas ginearálta oideachais amháin. Ní sholáthraíonn an tionscadal seo comhairle dlí."},
  ar:{back:"العودة إلى التجربة",eyebrow:"عن المشروع",title:"فهم الخيارات الكامنة وراء حياة جديدة في أيرلندا.",intro:"«حياة جديدة في أيرلندا» مشروع تعليمي تفاعلي. يساعد الناس على استكشاف مسارات العمل والدراسة والأسرة والحماية الدولية وحرية التنقل الأوروبية من خلال قرارات اثنتي عشرة شخصية خيالية.",how:"كيف تعمل التجربة",how1:"كل شخصية نموذج خيالي مركب أُنشئ للتعلم. تنتقل الرحلة ذات المراحل الخمس من التخطيط والاستعداد إلى السفر والوصول وبناء حياة. تعرّف الخيارات بتصاريح العمل والتأشيرات والدراسة ولمّ الشمل وتسجيل الهجرة والحماية الدولية وسكن IPAS وحقوق العمل والدعم المستقل.",how2:"تركز ثلاث رحلات على العوائق المتقاطعة. وتبين كيف يمكن أن تتداخل الإعاقة والأمومة أو الأبوة والأصل والسن والنوع والهوية الجنسية واللغة والسيطرة المالية والاعتماد على وضع الهجرة. لا تحدد الهوية النتيجة؛ بل توضح الخيارات كيف يمكن استخدام أنظمة الهجرة والاستقبال والمساواة والسلامة والدعم معاً.",how3:"لا تمثل الشخصيات أشخاصاً حقيقيين ولا تعد بنتيجة قانونية معينة. يعتمد كل طلب حقيقي على وقائع الشخص والقواعد السارية حينها.",limits:"المعلومات والقيود",limits1:"يرتبط المشروع بمصادر أيرلندية رسمية حتى يتمكن الزوار من التحقق من المتطلبات الحالية قبل التصرف. المحتوى معلومات تعليمية عامة وليس مشورة قانونية، ولا يمكنه تحديد الأهلية أو وضع الهجرة أو نتيجة الطلب.",limits2:"قد تتغير قواعد الهجرة وحدود الرواتب وقوائم المهن والإجراءات والظروف الشخصية. في الحالة الحقيقية، استخدم المصادر الرسمية واطلب مشورة مؤهلة عند الحاجة.",open:"افتح مركز معلومات أيرلندا",creator:"المنشئ وحقوق النشر والملكية",creator1:"أنشأ Sam O’Brien-Olinger مشروع «حياة جديدة في أيرلندا» ويملكه. حقوق النشر © 2026 Sam O’Brien-Olinger. جميع الحقوق محفوظة.",creator2:"الكود الأصلي والمحتوى المكتوب والشخصيات الخيالية والسرد ومسارات القرار والمواد التعليمية والأعمال الفنية والهوية البصرية وتصميمات الواجهة محمية، باستثناء مواد الأطراف الثالثة المحددة بشكل منفصل. لا يجعل الوصول العام إلى المستودع المشروع مفتوح المصدر ولا يمنح إذناً لإعادة الاستخدام أو النسخ أو التكييف أو النشر أو إنشاء أعمال مشتقة.",licence:"اقرأ شروط الترخيص الكاملة",transparency:"شفافية المصدر",transparency1:"يسجل المستودع العام كود المشروع ووثائقه وشروط ملكيته وإعدادات نشره. تظل مكتبات الأطراف الثالثة والمنشورات الرسمية المرتبطة خاضعة لتراخيصها وشروطها الخاصة.",repo:"عرض المستودع",footer:"معلومات تعليمية عامة فقط. لا يقدم هذا المشروع مشورة قانونية."},
  ...additionalAboutCopy,
} as const;

export default function AboutPage() {
  const { language, setLanguage, dir } = useLanguage();
  const t = ui[language];
  const a = aboutCopy[language];
  return (
    <main className="about-page" lang={language} dir={dir}>
      <header className="about-topbar">
        <a className="brand-button" href="../">
          <img className="brand-mark" src="../images/harp-heart-logo.png" alt="" aria-hidden="true" />
          <span>{t.siteName}</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="../resources/">{t.hub}</a>
          <a className="nav-link" href="../#official-guidance">{t.official}</a>
        </div>
        <LanguageControl language={language} setLanguage={setLanguage} label={t.language} />
        <MobileNavigation links={[{ href: "../", label: t.home }, { href: "../#route-finder", label: t.journeys }, { href: "../resources/", label: t.hub }, { href: "../#official-guidance", label: t.official }]} language={language} setLanguage={setLanguage} languageLabel={t.language} menuLabel={t.menu} closeLabel={t.closeMenu} />
      </header>

      <section className="about-hero">
        <div className="about-hero-inner">
          <a className="about-back-link" href="../">
            <ArrowLeft size={17} aria-hidden="true" /> {a.back}
          </a>
          <p className="eyebrow">{a.eyebrow}</p><h1>{a.title}</h1><p>{a.intro}</p>
        </div>
      </section>

      <section className="about-content" aria-label={`${t.about}: ${t.siteName}`}>
        <article className="about-card">
          <BookOpen size={24} aria-hidden="true" />
          <div>
            <h2>{a.how}</h2><p>{a.how1}</p><p>{a.how2}</p><p>{a.how3}</p>
          </div>
        </article>

        <article className="about-card">
          <ShieldCheck size={24} aria-hidden="true" />
          <div>
            <h2>{a.limits}</h2><p>{a.limits1}</p><p>{a.limits2}</p>
            <a className="about-action" href="../resources/">
              {a.open} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="about-card">
          <Copyright size={24} aria-hidden="true" />
          <div>
            <h2>{a.creator}</h2><p>{a.creator1}</p><p>{a.creator2}</p>
            <a className="about-action" href={`${repositoryUrl}/blob/dev-1/LICENSE.md`} target="_blank" rel="noreferrer">
              {a.licence} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>

        <article className="about-card">
          <Scale size={24} aria-hidden="true" />
          <div>
            <h2>{a.transparency}</h2><p>{a.transparency1}</p>
            <a className="about-action" href={repositoryUrl} target="_blank" rel="noreferrer">
              {a.repo} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>

      <footer className="site-footer about-footer">
        <div className="site-footer-content">
          <p><strong>{t.siteName}</strong> - {t.tagline}</p>
          <p><a href="https://samobrienolinger.github.io/SamOBrienOlinger/" target="_blank" rel="noreferrer">Sam Tim Solutions</a></p>
          <p className="site-footer-copyright">{t.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
