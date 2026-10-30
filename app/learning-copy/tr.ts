// AI-assisted translation; see README language review notes.
import type { LearningCopy } from "./en";

const copy: LearningCopy = {
  "movingGuide": {
    "title": "İrlanda’ya taşınmanı planla",
    "intro": "Citizens Information ile hazırlık, oturum, öğrenim ve günlük hizmetleri keşfet.",
    "open": "Taşınma rehberini aç",
    "beforeTravel": "Seyahatten önce",
    "arrivalTopic": "Planlama ve varış",
    "relatedTitle": "İrlanda’da yaşamı keşfet",
    "relatedIntro": "Bu yolculukla ilgili Citizens Information rehberleriyle devam et.",
    "resources": {
      "overview": {
        "title": "İrlanda’ya taşınma",
        "description": "Taşınma, oturum, öğrenim ve günlük yaşam rehberleriyle başla."
      },
      "beforeArrival": {
        "title": "İrlanda’ya gelmeden önce",
        "description": "Seyahatten önce göçmenlik, çalışma, öğrenim ve pratik düzenlemeleri planla."
      },
      "settling": {
        "title": "İrlanda’da yaşamaya gelme",
        "description": "Taşınmanı planlarken emeklilik, evcil hayvan getirme ve araç ithal etme konularını keşfet."
      },
      "residence": {
        "title": "İrlanda’da oturum hakları",
        "description": "Vatandaşlığına, aile koşullarına ve taşınma nedenine uygun rehberleri bul."
      },
      "family": {
        "title": "Aile üyelerinin oturum hakları",
        "description": "İrlanda’da yaşayan bir kişinin yanına gelen yakınlar için oturum rehberini kontrol et."
      },
      "registration": {
        "title": "AEA dışındaki bir ülkenin vatandaşı olarak kayıt yaptırma",
        "description": "Kimlerin göçmenlik iznini kaydettirmesi gerektiğini ve İrlanda Oturum İzni (Irish Residence Permit) belgelerinin nasıl işlediğini kontrol et."
      },
      "work": {
        "title": "İrlanda’ya çalışmak için gelme",
        "description": "Çalışma izinlerini, çalışma yetkisini ve işe başlamaya yönelik pratik adımları keşfet."
      },
      "study": {
        "title": "İrlanda’da öğrenim görme",
        "description": "Uluslararası öğrenim, yükseköğretim ve ilgili göçmenlik adımlarına ilişkin rehberleri bul."
      },
      "systems": {
        "title": "İrlanda sistemini anlamak",
        "description": "Konut, sağlık hizmetleri, sosyal yardım, gelir vergisi, okullar ve kamu kurumlarını keşfet."
      },
      "housing": {
        "title": "İrlanda’da konaklama",
        "description": "Nerede yaşayacağını planlarken konaklama seçeneklerini ve kiracılara yönelik bilgileri keşfet."
      },
      "health": {
        "title": "Yeni yerleşenler için sağlık hizmetleri",
        "description": "Kamu ve özel sağlık hizmetleri, hizmetlere erişim ve sağlık sigortasıyla ilgili temel bilgileri bul."
      },
      "socialSecurity": {
        "title": "Sosyal yardım ve ülke değiştirme",
        "description": "Taşınmanın sosyal yardımı, emekli aylıklarını ve yardımların aktarılmasını nasıl etkileyebileceğini kontrol et."
      },
      "retirement": {
        "title": "Emeklilikte İrlanda’ya taşınma",
        "description": "İrlanda’da emekliliğini planlarken oturum ve pratik konuları keşfet."
      },
      "returning": {
        "title": "İrlanda’ya dönüş",
        "description": "Ülkesine dönen İrlanda vatandaşlarına yönelik, hayatın farklı dönemleri için pratik bilgiler içeren rehber."
      }
    }
  },
  "recapTitle": "{name} ile yolculuğun",
  "recapIntro": "Kararlarına dönüp bak, yeniden incelemek gerekenleri değerlendir ve sonraki adımlar için yararlı kaynaklar bul.",
  "decisionsTitle": "Kararlarının açıklamaları",
  "revisitCount": "Yeniden incelenecek kararlar: {count}",
  "allConsidered": "Her aşamada daha fazla bilgiye dayanan seçeneği belirledin. Aşağıdaki gerekçeleri ve kaynakları keşfet.",
  "yourChoice": "Seçimin",
  "informedChoice": "Daha fazla bilgiye dayanan seçim",
  "worthRevisiting": "Yeniden incelemeye değer",
  "saferOption": "Değerlendirilebilecek bir seçenek",
  "revisitDecision": "Bu kararı yeniden incele",
  "revisitLabel": "Yeniden incele: {stage}: {title}",
  "returnToRecap": "Özetine dön",
  "misunderstanding": "Yaygın bir yanlış anlama",
  "nextStep": "Yararlı bir sonraki adım",
  "checkSource": "Rehberi kontrol et",
  "relatedResources": "Bu yolculuğun kaynakları",
  "relatedIntro": "Kararlarının gündeme getirdiği sorularla başla. Her kaynağın kendi amacı ve koşulları vardır.",
  "openResource": "Kaynağı aç",
  "reflectTitle": "Dur ve düşün",
  "reflectIntro": "Bu kurgusal kişinin koşullarını düşün. Bu sorular puanlanmaz.",
  "controlPrompt": "Neler bu kişinin kontrolündeydi; neler başka kişilere, hizmetlere veya koşullara bağlıydı?",
  "supportPrompt": "Hangi destek bir sonraki adımı daha yönetilebilir kılabilir?",
  "livedContext": "Kişinin koşullarını göz önünde bulundur",
  "sourcePublisher": "Yayımlayan",
  "sourceScope": "Kapsam",
  "sourceChecked": "Kaynağa erişim tarihi",
  "sourceUndated": "Erişim tarihi kaydedilmemiş",
  "sourceDateMeaning": "Erişim tarihi, bağlantı verilen sayfanın bu proje için ne zaman kontrol edildiğini gösterir. Yayıncının güncelleme tarihi değildir ve bir kuralın değişmediğini garanti etmez.",
  "sourceMethod": "Kaynakları nasıl kullanıyor ve kontrol ediyoruz?",
  "sourceMethodIntro": "Rehber, sorumlu kamu kurumuna veya adı belirtilen bir uzman kuruluşa bağlantı verir. Kaydedildiği durumlarda her kaynağın yanında yayıncı, konu ve erişim tarihi bulunur. Güncel koşulları ve kimlere uygulandığını kontrol etmek için kaynağı aç.",
  "sourceMethodContent": "Hikâyeler, öğrenme amacıyla bir durumu sadeleştirir. Geri bildirim, o sahnedeki kararı açıklar; gerçek bir kişinin uygunluğunu değerlendiremez. Puan, göç etmeye hazır olmayı veya olası başvuru sonucunu değil, alıştırmadaki seçimleri yansıtır.",
  "sourceMethodTranslation": "Çeviriler aynı durumları, yanıtların anlamlarını ve kaynak bağlantılarını korumayı amaçlar. Öğrenmeye yardımcıdır; bağlantı verilen rehberlerin resmî çevirileri değildir. Gerçek kararlar için esas kaynak, özgün yayıncının güncel bilgileridir.",
  "sourceMethodReflection": "Düşünme soruları; belirsizlik, bakım sorumlulukları, erişim ihtiyaçları ve başkalarına bağımlılık dâhil kurgusal hikâyelerdeki engelleri keşfeder. Her göçmenin deneyimini temsil ettiklerini veya gerçek bir kişinin tanıklığı olduklarını iddia etmezler.",
  "sourceMethodLink": "Kaynaklarımız hakkında oku",
  "professionalTitle": "Hemşirelik ve ebelik mesleki kaydı",
  "professionalDescription": "Mesleki yeterliliğini AB dışında edinmiş hemşire ve ebeler için: ilgili göçmenlik gereklilikleriyle birlikte NMBI nezdinde yeterliliklerin tanınmasını ve mesleki kaydı kontrol et.",
  "professionalAction": "Bu hemşirelik işi için mesleki kayıt adımlarını kontrol et.",
  "taxTitle": "İlk işini vergi için kaydettirme",
  "taxDescription": "İrlanda’da ilk işine başlayanlar için: Revenue, PPS numarası ve myAccount kullanarak işin nasıl kaydettirileceğini ve bunun acil vergi uygulamasından (emergency tax) kaçınmaya nasıl yardımcı olduğunu açıklar.",
  "taxAction": "İşe başlamaya hazırlanırken Revenue’nun ilk iş kaydı adımlarını kontrol et.",
  "scopes": {
    "immigration": "Göçmenlik izinleri ve koşulları",
    "employment": "Çalışma izinleri ve iş yeri hakları",
    "protection": "Uluslararası koruma ve kabul",
    "public-services": "Kamu hizmetleri ve günlük yaşam",
    "equality": "Eşitlik ve ayrımcılık",
    "specialist-support": "Bağımsız uzman bilgisi ve desteği",
    "professional-registration": "Mesleki yeterlilikler ve kayıt",
    "general-information": "Genel bilgi ve yönlendirme"
  },
  "insights": {
    "offer": {
      "explanation": "İş teklifi, çalışma izni değildir. Gerçek görevlerin, işverenin ve güncel izin ölçütlerinin yine de kontrol edilmesi gerekir.",
      "action": "Yazılı teklifi resmî kontrol listesiyle karşılaştır ve henüz doğrulanması gerekenleri not et."
    },
    "permissions": {
      "explanation": "Tek bir onay tüm göçmenlik adımlarını tamamlamaz. Çalışma yetkisi, gerektiğinde vize, ülkeye giriş ve oturum kaydı farklı sorulara yanıt verir.",
      "action": "Güncel kaynağı kullanarak bu yol için gereken onay ve belgelerin listesini yap."
    },
    "travel": {
      "explanation": "Onay alınması, seyahatin gerçek amacını açıklama gereğini ortadan kaldırmaz. Kişinin anlatımıyla destekleyici belgeler tutarlı olmalıdır.",
      "action": "Bu yolculuğu açıklayan belgeleri belirle ve seyahat için güvenli biçimde erişilebilir tut."
    },
    "registration": {
      "explanation": "PPS numarası, randevu ve göçmenlik izni farklı amaçlara hizmet eder. Bir hizmetin işlemini tamamlamak diğerlerini tamamlamaz.",
      "action": "Hangi kayıt adımlarının geçerli olduğunu kontrol et; her randevu ve gereklilik için ayrı kayıt tut."
    },
    "workRights": {
      "explanation": "İşverene bağımlı olmak, her talebi kabul etmek anlamına gelmez. Göçmenlik koşulları ve çalışma hakları, ilgili hizmetle ayrı ayrı kontrol edilmesi gereken konulardır.",
      "action": "Çalışma saatleri, ücret ve mesajların kayıtlarını güvenle sakla; bağımsız bir çalışma danışmanlığı kaynağı belirle."
    },
    "protection": {
      "explanation": "Korumayı garanti eden hazır bir anlatım yoktur. Kişinin kendi koşulları, doğru anlatımı ve geçerli işlem önemlidir.",
      "action": "Başvuru için geçerli koruma bilgilerini kullan ve bağımsız hukuki desteğin nereden istenebileceğini belirle."
    },
    "evidence": {
      "explanation": "Eksik kanıt, kanıt uydurmak için gerekçe değildir. Gerçek eksiklikleri açıklamak ve hangi başka kanıtların yardımcı olabileceğini sormak, hikâyeyi değiştirmekten farklıdır.",
      "action": "Hangi kanıtların bulunduğunu, nelerin eksik olduğunu ve nelerin bir danışmanla konuşulması gerektiğini listele."
    },
    "services": {
      "explanation": "Bir ihtiyaca yardımcı olan hizmet, başka bir ihtiyaca karar vermeyebilir. Konaklama, koruma kararları, sağlık hizmetleri ve hukuki danışmanlığın rolleri farklıdır.",
      "action": "Acil soruyu sorumlu hizmetle eşleştir ve sırada kiminle iletişim kurulacağını kaydet."
    },
    "protectionWork": {
      "explanation": "Başka bir başvuru sahibinin deneyimi, bu kişinin çalışma hakkını ortaya koymayabilir. Geçerli işlem, zamanlama ve kişisel iznin kontrol edilmesi gerekir.",
      "action": "Çalışma planı yapmadan önce güncel iş gücü piyasasına erişim rehberini ve kişinin iznini kontrol et."
    },
    "study": {
      "explanation": "Bir yükseköğretim kurumundan kabul almak, göçmenlik, konut veya mali düzenlemeleri çözmez. Uygulanabilir bir öğrenim planında bunların her biri değerlendirilmelidir.",
      "action": "Henüz çözülmemiş program, finansman, sigorta ve konaklama sorularını belirlemek için öğrenci kontrol listesini kullan."
    },
    "studentWork": {
      "explanation": "Öğrenci izni, sınırsız çalışma izni değildir. Gerçekte verilen izin damgası, izin verilen saatler ve ilgili tarihler önemlidir.",
      "action": "Önerilen çalışma programını öğrencinin izninin güncel koşullarıyla karşılaştır."
    },
    "family": {
      "explanation": "Herkes için tek bir aile başvurusu yoktur. Sponsorun statüsü ve aile ilişkisi hangi rehberin kullanılacağını belirler.",
      "action": "Bu sponsor ve aile ilişkisi için rehberi bul, ardından kanıt gerekliliklerini adım adım incele."
    },
    "familyWork": {
      "explanation": "Ailenin yanına gelmek, tek başına tüm çalışma haklarını açıklamaz. Kişinin gerçek göçmenlik izninin koşulları kontrol edilmelidir.",
      "action": "İşverenin varsayımına güvenmeden önce kayıtlı izni ve çalışma koşullarını kontrol et."
    },
    "support": {
      "explanation": "İzin tek başına konut, sağlık, gelir veya yalnızlık sorunlarını çözmez. Farklı ihtiyaçlar farklı yardım kaynakları gerektirebilir.",
      "action": "Acil bir ihtiyaç seç ve uygun bağımsız bir hizmet veya topluluk bağlantısı belirle."
    },
    "access": {
      "explanation": "Bir hizmetin sunulması, erişilebilir olduğu anlamına gelmez. Görünür bir engellilik de kişinin destek ihtiyaçlarının yalnızca bir parçası olabilir.",
      "action": "Somut engeli açıkla, ihtiyaçların kaydedilmesini iste ve ilgili destek veya şikâyet iletişim noktasını belirle."
    },
    "participation": {
      "explanation": "Katılım güçlüğü, ilgisizlik olarak değerlendirilmemelidir. Tercüman, sağlık veya erişim ihtiyaçları için desteğin önceden görüşülmesi gerekebilir.",
      "action": "Randevuya katılmak için hangi desteğe ihtiyaç duyulabileceğini ilgili hizmete ve danışmana bildir."
    },
    "euWork": {
      "explanation": "AB vatandaşlığı, çalışma izni meselesini değiştirir. Vergi kaydı ve PPS numarası, kişinin çalışma hakkının dayanağından ayrıdır.",
      "action": "AB vatandaşlarına yönelik rehberi kontrol et ve ayrı kamu hizmeti gerekliliklerini tek tek ele al."
    },
    "euResidence": {
      "explanation": "Serbest dolaşım, her oturum durumunun aynı koşullara sahip olduğu anlamına gelmez. Kalışın dayanağı ve süresi değerlendirilmelidir.",
      "action": "Bu durum için ilgili oturum dayanağını ve gerekebilecek kanıtları belirle."
    },
    "equality": {
      "explanation": "Bir ret veya iş yeri olayı, birden fazla eşitlik sorununu gündeme getirebilir. Kişinin kimliği tek başına bir hukuki talebin başarılı olup olmayacağını belirlemez.",
      "action": "Olanların olgulara dayalı kaydını tut; uygun süreç ve süre sınırları hakkında zamanında danışmanlık al."
    },
    "abuse": {
      "explanation": "İstismarcı bir eşin veya partnerin tehdidi, göçmenlik kararı değildir. Güvenlik desteği ve bağımsız izin danışmanlığı, birbiriyle bağlantılı ancak farklı ihtiyaçları ele alır.",
      "action": "Uzman desteğe ulaşmanın güvenli bir yolunu belirle ve ilgili bağımsız izin sürecini sor."
    },
    "safeContact": {
      "explanation": "Bir iletişim yöntemi ancak kişi onu güvenle kullanabiliyorsa yararlıdır. Paylaşılan bir cihaz, hesap veya tercüman mahremiyet sağlamayabilir.",
      "action": "Kişinin koşullarını göz önünde bulundurarak uzman bir destek hizmetiyle daha güvenli bir iletişim yöntemini değerlendir."
    }
  },
  "reflections": {
    "critical": "İşe başlama tarihi, mesleki gereklilikler veya işveren baskısı, bilgiye dayalı karar vermek için ayrılabilecek süreyi nasıl etkileyebilir?",
    "general": "İşe alım ücretleri, belgelerin kontrol edilmesi veya işverene bağımlılık, güvenli olmayan bir düzenlemeyi sorgulamayı nasıl zorlaştırabilir?",
    "protection": "Korku, yorgunluk, aileden ayrılık veya eksik belgeler bir kişinin yaşananları açıklama becerisini nasıl etkileyebilir?",
    "study": "Konut masrafları, mali baskı veya yalnız hissetmek, öğrencinin programa devam edebilmesini nasıl etkileyebilir?",
    "family": "Bir kişi ailesiyle yerleşirken bilgiye, belgelere ve desteğe bağımsız erişimi nasıl kurabilir?",
    "protection-access": "Hareketlilik, ağrı, ebeveynlik ve randevuların birlikte değerlendirilmesi gerektiğinde gerçek anlamda erişim nasıl olurdu?",
    "eu-mobility": "Irkçılık, yaş ayrımcılığı veya transfobi iş ve konuta erişimi etkilediğinde, resmî haklarla günlük deneyimler nasıl farklılaşabilir?",
    "family-safety": "Mali kontrol, dil engelleri, çocuklar ve izlenen bir cihaz, mevcut görünen seçenekleri nasıl sınırlayabilir?"
  }
};

export default copy;
