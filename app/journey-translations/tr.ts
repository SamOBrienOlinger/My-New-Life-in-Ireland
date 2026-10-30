// AI-assisted translation; see README language review notes.
import type { JourneyControls, JourneyTranslationCatalog } from "./types";

export const controls: JourneyControls = {
  "resume": "Devam et",
  "resumeJourney": "{name} ile devam et",
  "restart": "Bu yolculuğa yeniden başla",
  "savedJourney": "Kaydedilmiş yolculuk",
  "stage": "Aşama",
  "returnHome": "Yolculuklara dön",
  "saveUnavailable": "İlerleme bu tarayıcıda kaydedilemiyor. Devam etmek için bu sayfayı açık tutun."
};

export const resourceDescriptions: Record<string, string> = {
  "Registering immigration permission": "Kimlerin kayıt yaptırması gerektiği, kaydın neleri belgelediği ve resmî sürecin nasıl kullanılacağı.",
  "Personal Public Service number": "PPS numarasının kamu hizmetleri ve resmî işlemlerde nasıl kullanıldığı. Bu numara göçmenlik izni değildir.",
  "Choose an immigration purpose": "İrlanda'yı ziyaret etmek, çalışmak, okumak, burada yaşamak veya aileye katılmak için resmî başlangıç noktaları.",
  "Immigration permission stamps": "İrlanda Oturum İzni üzerinde kayıtlı damganın nelere izin verdiğini ve hangi yükümlülükleri getirdiğini öğrenin.",
  "Applying for international protection": "İrlanda'daki başvuru ve inceleme sürecine ilişkin resmî bilgiler.",
  "Applications made after 12 June 2026": "2026 Uluslararası Koruma Yasası ve daha yeni başvurulara uygulanan kurallar hakkında sade dille bilgiler.",
  "Accommodation and reception supports": "IPAS barınması, hizmetleri, sakinlerin refahı ve şikâyetler hakkında bilgiler.",
  "Vulnerability and accommodation needs": "Başvuru sahiplerinin engellilik, sağlık, ebeveynlik ve diğer özel kabul ihtiyaçlarını nasıl belirtebileceği ve barınma sorunlarının nasıl değerlendirildiği.",
  "Independent legal and practical support": "Bilgilendirme, hak savunuculuğu, hukuk, barınma, istihdam, gençlik ve yeniden yerleşim hizmetleri.",
  "Employment permit types": "Güncel izin türleri, uygunluk koşulları, meslek listeleri, başvuru rehberliği ve güncellemeler.",
  "Rights when working in Ireland": "Ücret, koşullar, çalışma süresi, izin, kayıtlar ve işyeri şikâyet yolları.",
  "Migrant employment and exploitation support": "Sömürü riski altındakiler dâhil göçmen işçiler için bağımsız bilgi ve destek.",
  "EU citizens coming to work": "İrlanda çalışma izninin neden genellikle gerekli olmadığı dâhil AB ve AEA vatandaşlarının çalışma hakları.",
  "EU residence rights": "Çalışma, iş arama, öğrenim ve kendi geçimini sağlama dâhil AB vatandaşlarının İrlanda'ya giriş ve ikamet dayanakları.",
  "Coming to study in Ireland": "AEA dışından öğrenciler için vize, mali kaynak, sigorta, eğitim programı ve kayıt bilgileri.",
  "Education in Ireland": "Okul, ileri eğitim, yükseköğretim ve eğitim destekleri hakkında kamuya açık bilgiler.",
  "Healthcare services": "İrlanda'da aile hekimlerine, hastanelere, acil hizmetlere ve halk sağlığı bilgilerine nasıl erişileceği.",
  "Finding and renting a home": "Konut, kiralama, kiracı hakları, depozitolar, evsizlik ve barınma desteği bilgileri.",
  "Independent public information": "Sosyal yardımlar, sağlık, barınma, para, vergi, eğitim ve tüketici hakları hakkında ulusal bilgiler.",
  "Traveller and Roma equality rights": "Traveller ve Roman topluluklarının yaşadığı ayrımcılık ve İrlanda eşitlik hukuku kapsamında sunulan korumalar hakkında bilgiler.",
  "Coming to join family": "Sponsorun İrlanda, Birleşik Krallık, AEA veya İsviçre vatandaşı, AEA dışından biri ya da koruma statüsü sahibi olmasına göre uygun yolu bulun.",
  "Specialist migrant and refugee advice": "Göçmenlik statüsü, vizeler, aile birleşimi, vatandaşlık ve kabul koşulları hakkında bilgi ve bireysel dosya desteği.",
  "Independent status after domestic abuse": "İzni, şiddet uyguladığı iddia edilen kişiye bağlı olan mağdurlar için nasıl başvurulacağı ve hangi kanıtların yardımcı olabileceği dâhil gizli göçmenlik rehberliği.",
  "Domestic-abuse safety and support": "Ev içi şiddet yaşayan kadınlar için gizli destek, tercümanlık ve güvenlik bilgileri; acil durumda 999 veya 112'yi arayın."
};

const catalog: JourneyTranslationCatalog = {
  "critical:Plan": {
    "eyebrow": "Taşınmadan dört ay önce",
    "title": "Güçlü bir teklif yalnızca başlangıçtır",
    "scene": "Sözleşme geldi. İşveren, bu pozisyona talebin yüksek olduğunu söylüyor ve hemen işe başlanmasını istiyor.",
    "question": "Uçuş ayarlanmadan veya mevcut işten ayrılma bildirimi yapılmadan önce ne yapılmalı?",
    "law": "Kritik Beceriler Çalışma İzni, mesleğin, ücretin, sözleşmenin ve işverenin güncel yasal ölçütleri karşılamasına bağlıdır.",
    "plainLaw": "Teklife güvenmeden önce gerçek işi, ücreti, sözleşmeyi ve işvereni bugünkü resmî kurallara göre kontrol edin.",
    "sourceLabel": "Kritik Beceriler Çalışma İzni",
    "choices": {
      "verify": {
        "label": "Mesleği, ücreti, sözleşmeyi ve işvereni kontrol edip doğru izin başvurusunu yapın.",
        "feedback": "Bu, taşınma planının koşullara uymayan bir teklife dayanmasını önler.",
        "consequence": "Takvim gerçekçi hâle gelir ve iş güncel kurallara göre değerlendirilir."
      },
      "contract": {
        "label": "İmzalı sözleşmeyi çalışma izni olarak kabul edin.",
        "feedback": "Sözleşme ve çalışma izni farklı hukuki işlevlere sahiptir.",
        "consequence": "Gerekli izin henüz yokken seyahat edilebilir veya mevcut işten ayrılınabilir."
      },
      "visitor": {
        "label": "Ziyaretçi olarak giriş yapıp işe başladıktan sonra izni tamamlayın.",
        "feedback": "Ziyaretçi statüsü normal bir işte çalışmaya izin vermez.",
        "consequence": "Hem iş hem de göçmenlik durumu riske girebilir."
      }
    }
  },
  "critical:Prepare": {
    "eyebrow": "Belgeler ve zamanlama",
    "title": "Bir onay, diğer tüm adımların yerini tutmaz",
    "scene": "İzin verildi. Bir arkadaş, artık başka hiçbir göçmenlik kontrolü gerekmediğini söylüyor.",
    "question": "Daha güvenli plan nedir?",
    "law": "Çalışma izni belirli bir işte çalışmayı yetkilendirir. Vizeye tabi bir ülkenin vatandaşı, seyahatten önce uygun uzun süreli vizeyi de almalıdır.",
    "plainLaw": "Çalışma izni, vize, sınırda giriş izni ve ikamet kaydı ayrı aşamalardır.",
    "sourceLabel": "İrlanda'ya çalışmak için gelmek",
    "choices": {
      "sequence": {
        "label": "Vize şartlarını kontrol edin, kanıtları hazırlayın ve seyahat sırasında her onayı erişilebilir tutun.",
        "feedback": "Doğru. Her belge farklı bir soruyu yanıtlar.",
        "consequence": "Yolcu, sınırda taşınma amacını açıklayabilir."
      },
      "permitvisa": {
        "label": "Çalışma izninin otomatik olarak seyahat vizesi olduğunu varsayın.",
        "feedback": "Vizeye tabi ülke vatandaşları için bu doğru değildir.",
        "consequence": "İzin geçerli olsa da uçağa binme veya ülkeye giriş aksayabilir."
      },
      "agent": {
        "label": "Tüm belgelerin asıllarını doğrulanmamış bir aracıya verin.",
        "feedback": "Kimlik belgelerinizin kontrolünü koruyun ve ücretli yardım sunan kişileri doğrulayın.",
        "consequence": "Belgelerin asıllarına erişimin kaybedilmesi gecikme ve sömürü riskleri yaratır."
      }
    }
  },
  "critical:Travel": {
    "eyebrow": "İrlanda sınırında",
    "title": "Seyahat amacını açıklamaya hazır olun",
    "scene": "Göçmenlik görevlisi, yolcunun nerede kalacağını ve hangi işverenin kendisini beklediğini soruyor.",
    "question": "Ne yapmalı?",
    "law": "Vize, sınıra kadar seyahat etmeye izin verir; girişe göçmenlik görevlisi karar verir. Destekleyici belgeler gerçek amacı ve düzenlemeleri göstermelidir.",
    "plainLaw": "İş, izin ve ilk adres hakkında doğru ve tutarlı kanıtlar taşıyın.",
    "sourceLabel": "İrlanda Göçmenlik Hizmetleri",
    "choices": {
      "answer": {
        "label": "Doğru yanıt verip çalışma iznini, gerekiyorsa vizeyi, sözleşmeyi ve konaklama bilgilerini gösterin.",
        "feedback": "Açık ve tutarlı kanıtlar, belirtilen seyahat amacını destekler.",
        "consequence": "Görevli, çalışma amaçlı yolculuğu doğru belgelerle değerlendirebilir."
      },
      "tourism": {
        "label": "İşle ilgili sorulardan kaçınmak için bunun yalnızca tatil olduğunu söyleyin.",
        "feedback": "Anlatım, gerçek amaç ve belgelerle örtüşmelidir.",
        "consequence": "Çelişkili bilgiler sınırda ciddi sorunlara neden olabilir."
      },
      "phone": {
        "label": "Tamamen işe alım aracısının telefona cevap vermesine güvenin.",
        "feedback": "Yolcu, kendi temel bilgilerini anlamalı ve yanında taşımalıdır.",
        "consequence": "Aracıya ulaşılamazsa seyahat amacı belirsiz kalabilir."
      }
    }
  },
  "critical:Arrive": {
    "eyebrow": "İlk 90 gün",
    "title": "Kayıt, izni belgeler",
    "scene": "İş başladı, ancak konut arayışı ve randevular ilk haftaları zorlaştırıyor.",
    "question": "Hangi görev planda kalmalı?",
    "law": "AB, Birleşik Krallık ve İsviçre dışından gelip 90 günden uzun kalan kişiler genellikle İrlanda göçmenlik izinlerini kaydettirmek zorundadır.",
    "plainLaw": "Kayıt işlemini ayarlayın; izin, adres ve istihdam bilgilerinin doğruluğunu koruyun.",
    "sourceLabel": "Göçmenlik izninin kaydı",
    "choices": {
      "register": {
        "label": "Kayıt işlemini ayarlayın, resmî randevu sürecini izleyin ve girişimlerinizin kanıtını saklayın.",
        "feedback": "İrlanda Oturum İzni, izni ve koşullarını belgeler.",
        "consequence": "Kişinin yasal ikameti ve iznin sağladığı haklar daha açık biçimde belgelenir."
      },
      "pps": {
        "label": "PPS numarasının göçmenlik kaydı yerine geçtiğini varsayın.",
        "feedback": "PPS numarası kamu hizmetleri ve vergi işlemleri içindir; göçmenlik izni değildir.",
        "consequence": "Yararlı bir idari numara, yanlışlıkla yasal ikamet kanıtı sanılır."
      },
      "contract": {
        "label": "İşverenin sözleşmesinin IRP yerine geçtiğini varsayın.",
        "feedback": "İstihdam belgeleri ikamet kaydının yerini tutmaz.",
        "consequence": "Kişi, göçmenlik izninin koşullarını kanıtlamakta zorlanabilir."
      }
    }
  },
  "critical:Build a life": {
    "eyebrow": "İşyeri ve gelecek",
    "title": "Statü, istihdam haklarını ortadan kaldırmaz",
    "scene": "Bir yönetici, göçmen personelin ilk aylarında daha düşük ücret ve daha az mola aldığını söylüyor.",
    "question": "Hangi tepki hem işi hem de göçmenlik durumunu korur?",
    "law": "İrlanda'da yasal olarak çalışan göçmen işçiler temel istihdam korumalarına sahiptir. Sorun çıktığında hem izin koşulları hem de istihdam hakları dikkate alınmalıdır.",
    "plainLaw": "Kayıt tutun, güvenilir danışmanlık alın ve göçmen olduğunuz için hukuka aykırı muameleyi kabul etmeyin.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "records": {
        "label": "Vardiya çizelgelerini ve ücret bordrolarını saklayın, düzeltme isteyin ve WRC veya yetkin bir danışmanla iletişime geçin.",
        "feedback": "Kanıtlar ve zamanında danışmanlık, her iki hak grubunu korumaya yardımcı olur.",
        "consequence": "İzin koşulları önemsizmiş gibi davranmadan sorun ele alınabilir."
      },
      "accept": {
        "label": "İzin sahiplerinin istihdam hakları daha az olduğu için bunu kabul edin.",
        "feedback": "Göçmenlik statüsü temel işyeri korumalarını ortadan kaldırmaz.",
        "consequence": "Eksik ödeme veya güvensiz koşullar itiraz edilmeden sürebilir."
      },
      "disappear": {
        "label": "İzin koşullarını kontrol etmeden hemen ayrılıp başka bir işe başlayın.",
        "feedback": "İş değiştirmek resmî bir süreç veya yeni bir izin gerektirebilir.",
        "consequence": "İşyeri sorunu aynı zamanda göçmenlik sorununa dönüşebilir."
      }
    }
  },
  "general:Plan": {
    "eyebrow": "Kimseye ödeme yapmadan önce",
    "title": "Satış vaatlerini değil, gerçek işi inceleyin",
    "scene": "Bir işe alım aracısı, imzalı herhangi bir İrlanda sözleşmesinin izin almayı garantilediğini söylüyor ve nakit istiyor.",
    "question": "En iyi ilk karar nedir?",
    "law": "Genel Çalışma İzni; mesleğe, ücrete, işverene ve diğer güncel şartlara bağlıdır. Bazı meslekler uygun değildir ve İşgücü Piyasası İhtiyaç Testi gerekebilir.",
    "plainLaw": "Ödeme yapmadan veya seyahat etmeden önce işvereni ve gerçek görevleri doğrulayın, ardından güncel izin kurallarını kontrol edin.",
    "sourceLabel": "Genel Çalışma İzni",
    "choices": {
      "check": {
        "label": "İşvereni, görevleri, ücreti ve izin uygunluğunu resmî kaynaklardan doğrulayın.",
        "feedback": "Gerçek bir teklif de yasal ölçütleri karşılamak zorundadır.",
        "consequence": "Para harcanmadan veya seyahate bağlanmadan dolandırıcılık ve uygun olmayan iş riskleri belirlenir."
      },
      "cash": {
        "label": "Nakit ödeyin ve pasaportu aracıya bırakın.",
        "feedback": "Pasaportun alıkonması ve izlenemeyen ödeme baskısı uyarı işaretleridir.",
        "consequence": "İşçi, dolandırıcılığa ve kontrol edilmeye daha açık hâle gelir."
      },
      "promise": {
        "label": "Mesleği kontrol etmek yerine aracının vaadine güvenin.",
        "feedback": "İzne uygunluğu vaatler değil, resmî ölçütler belirler.",
        "consequence": "Planlanan yol, önemli harcamalardan sonra başarısız olabilir."
      }
    }
  },
  "general:Prepare": {
    "eyebrow": "Doğru sıra",
    "title": "İzin, taşınmadan önce gelmelidir",
    "scene": "İşverenin hemen personele ihtiyacı var ve evraklar tamamlanana kadar turist olarak giriş yapmayı öneriyor.",
    "question": "Hangi sıra güvenilirdir?",
    "law": "İlk çalışma izni yolculuğunda normalde işe başlamadan önce izin, ardından gerekiyorsa uzun süreli vize ve varıştan sonra kayıt gerekir.",
    "plainLaw": "Ziyaretçi statüsünü normal bir işte çalışmak için kestirme yol olarak kullanmayın.",
    "sourceLabel": "Çalışma izinleri",
    "choices": {
      "order": {
        "label": "Önce çalışma izni, gerekiyorsa vize, sınır kontrolü, ardından varış sonrası kayıt.",
        "feedback": "Bu, yolculuğun amaçlanan yola uygun ilerlemesini sağlar.",
        "consequence": "İşçi, açıklanabilir ve belgelenmiş bir hukuki dayanakla gelir."
      },
      "tourist": {
        "label": "Turist olarak giriş yapıp ilk vardiyada çalışmaya başlayın.",
        "feedback": "Ziyaretçi statüsü normal bir işte çalışma izni değildir.",
        "consequence": "Hem işçi hem de işveren ciddi sonuçlarla karşılaşabilir."
      },
      "pps": {
        "label": "PPS numarasına başvurup bunu çalışma izni sayın.",
        "feedback": "PPS numarası göçmenlik veya çalışma izni sağlamaz.",
        "consequence": "Temel izin adımı tamamlanmamış kalır."
      }
    }
  },
  "general:Travel": {
    "eyebrow": "Yola çıkış günü",
    "title": "Kendi kanıtlarınızı taşıyın",
    "scene": "İşe alım aracısı, tüm belgelerin şirket ofisinde saklandığını ve yolcunun yalnızca telefondaki bir ekran görüntüsüne ihtiyacı olduğunu söylüyor.",
    "question": "Yolcu ne yapmalı?",
    "law": "Yolcunun, seyahatin amacını ve koşullarını taşıyıcı şirkete ve İrlanda sınır kontrolünde göstermesi gerekebilir.",
    "plainLaw": "Pasaportunuza, onaylarınıza, sözleşmenize ve ilk adres bilgilerinize güvenli erişiminizi koruyun.",
    "sourceLabel": "İrlanda'ya çalışmak için gelmek",
    "choices": {
      "copies": {
        "label": "Seyahat için gerekli asılları, güvenli kopyaları ve işveren bilgilerini yanınızda taşıyın.",
        "feedback": "Yolcu kendi yolculuğunu açıklayabilmelidir.",
        "consequence": "Telefonun çekmemesi veya aracıya ulaşılamaması bütün kanıtları ortadan kaldırmaz."
      },
      "company": {
        "label": "Belgeler şirkette olduğu için belgesiz seyahat edin.",
        "feedback": "Temel kimlik ve izin belgelerinizin kontrolünü başkasına bırakmayın.",
        "consequence": "Yolcu seyahat amacını kanıtlayamayabilir."
      },
      "different": {
        "label": "Başvurudakinden farklı bir seyahat nedeni söyleyin.",
        "feedback": "Bilgiler doğru ve tutarlı olmalıdır.",
        "consequence": "Çelişkiler sınırda yolculuğu tehlikeye atabilir."
      }
    }
  },
  "general:Arrive": {
    "eyebrow": "İlk haftalar",
    "title": "Acil ihtiyaçlarla hukuki izinleri ayırın",
    "scene": "Kayıt randevusu beklenirken banka, ev sahibi ve işveren farklı belgeler istiyor.",
    "question": "Kişi nasıl karşılık vermeli?",
    "law": "IRP, göçmenlik iznini belgeler. Vergi, bankacılık ve konut dâhil diğer sistemlerin kendi şartları vardır ve bunlar IRP'nin yerini tutmaz.",
    "plainLaw": "Resmî kontrol listelerini kullanın, randevu kanıtlarını saklayın ve her hizmete tam olarak ne istediğini sorun.",
    "sourceLabel": "Göçmenlik izninin kaydı",
    "choices": {
      "organise": {
        "label": "Bir belge dosyası tutun, kayıt talimatlarını izleyin ve her hizmetten kendi kontrol listesini isteyin.",
        "feedback": "Bu, ayrı sistemler arasındaki karışıklığı azaltır.",
        "consequence": "Gecikmeler zorlayıcı olmaya devam etse de kişi tamamlanan işlemleri gösterebilir."
      },
      "one": {
        "label": "Tek bir belgenin her hizmet için geçerli olması gerektiğini varsayın.",
        "feedback": "İrlanda'daki sistemler farklı amaçlarla farklı sorular sorar.",
        "consequence": "Sürekli yanlış kanıt sunulduğu için başvurular duraksayabilir."
      },
      "fake": {
        "label": "İşleri hızlandırmak için adres belgesini değiştirin.",
        "feedback": "Asla sahte veya değiştirilmiş kanıt sunmayın.",
        "consequence": "Kısa vadeli bir kestirme yol, ciddi hukuki riskler ve güven sorunları yaratır."
      }
    }
  },
  "general:Build a life": {
    "eyebrow": "Adil çalışma",
    "title": "Sömürüyü erken fark edin",
    "scene": "Ücret bordrosunda açıklanmayan kesintiler var ve işveren pasaportu ‘güvenle saklamak’ için almak istiyor.",
    "question": "En güçlü tepki nedir?",
    "law": "İşçiler hukuka uygun ücret, çalışma koşulları ve bordro almalıdır. Kayıt tutmak ve WRC'ye ya da uzman göçmen desteğine başvurmak sömürünün ele alınmasına yardımcı olabilir.",
    "plainLaw": "Pasaportunuzu elinizde tutun, kanıtları saklayın ve gizli danışmanlık alın.",
    "sourceLabel": "Workplace Relations Commission",
    "choices": {
      "evidence": {
        "label": "Pasaportu elinizde tutun, kayıtları saklayın, açıklama isteyin ve WRC veya bir danışmanla iletişime geçin.",
        "feedback": "Açık kayıtlar sorunu anlamayı ve itiraz etmeyi kolaylaştırır.",
        "consequence": "İşçi yalnızca işverenin anlatımına güvenmeden yardım isteyebilir."
      },
      "hand": {
        "label": "İzni işveren ayarladığı için pasaportu teslim edin.",
        "feedback": "İşçi kişisel kimlik belgelerinin kontrolünü korumalıdır.",
        "consequence": "İşveren güçlü bir kontrol aracı kazanır."
      },
      "nothing": {
        "label": "Göçmen işçiler şikâyet edemediği için kesintileri görmezden gelin.",
        "feedback": "Göçmen işçiler hukuken uygulanabilir istihdam haklarına sahiptir.",
        "consequence": "Hukuka aykırı muamele sürebilir veya ağırlaşabilir."
      }
    }
  },
  "protection:Plan": {
    "eyebrow": "Güvenlik ihtiyacı",
    "title": "Koruma, kişinin karşı karşıya olduğu riskle ilgilidir",
    "scene": "Geri dönmek güvenli görünmüyor. Arkadaşlar çelişkili tavsiyeler veriyor ve biri daha güçlü bir hikâye uydurmayı öneriyor.",
    "question": "Bir sonraki adıma hangi ilke yön vermeli?",
    "law": "Uluslararası koruma, zulümden korkan veya gerçek bir ciddi zarar riskiyle karşılaşan kişiler içindir. Her başvuru, yapıldığı tarihte geçerli hukuk kapsamında kendi bireysel olgularına göre değerlendirilir.",
    "plainLaw": "Kendi gerçek hikâyenizi anlatın ve mümkün olduğunca erken gizli hukuki bilgi alın.",
    "sourceLabel": "Irish Refugee Council: 12 Haziran 2026 sonrası başvurular",
    "choices": {
      "truth": {
        "label": "Güvenli olduğu ölçüde kişisel kanıtları saklayın, doğruyu söyleyin ve güvenilir hukuki bilgi arayın.",
        "feedback": "Koruma talebi, kişinin kendi anlatımına dayanmalıdır.",
        "consequence": "Dosya doğru bilgiler ve uygun destekle başlar."
      },
      "copy": {
        "label": "Başkasının işine yaramış bir hikâyeyi kopyalayın.",
        "feedback": "Uydurulmuş veya başkasından alınmış bilgiler güvenilirliğe ciddi zarar verebilir.",
        "consequence": "Süreç, gerçek korku yerine çelişkilere odaklanabilir."
      },
      "work": {
        "label": "Korumayı daha hızlı bir istihdam yolu olarak sunun.",
        "feedback": "Koruma ile işgücü göçünün amaçları farklıdır.",
        "consequence": "Yolculuğun gerçek hukuki dayanağı belirsizleşir."
      }
    }
  },
  "protection:Prepare": {
    "eyebrow": "Güvenlik ve kanıtlar",
    "title": "Belgeler yardımcı olur, ancak güvenlik önce gelir",
    "scene": "Bazı kanıtlar hasarlı bir telefonda. Diğer belgeleri getirmek mümkün olmadı.",
    "question": "Sorumlu yaklaşım nedir?",
    "law": "Başvuru sahipleri mevcut bilgileri sunmalı, süreçle iş birliği yapmalı ve eksik kanıtları dürüstçe açıklamalıdır. Tercümanlık, kırılganlık ve erişilebilirlik ihtiyaçları belirtilmelidir.",
    "plainLaw": "Eksik belgeleri uydurmayın. Nelerin bulunduğunu, nelerin eksik olduğunu ve nedenini açıklayın.",
    "sourceLabel": "International Protection Office",
    "choices": {
      "explain": {
        "label": "Güvenle korunabilecek kanıtları saklayın, eksikleri açıklayın ve gerektiğinde tercüman veya erişilebilirlik desteği isteyin.",
        "feedback": "Süreç, uygun destekle kişinin kendi anlatımını dinlemelidir.",
        "consequence": "Eksik kanıtlar gizlenmek yerine açıkça ele alınır."
      },
      "forge": {
        "label": "Resmî görünen yedek belgeler oluşturun.",
        "feedback": "Sahte belgeler koruma talebine ciddi zarar verebilir.",
        "consequence": "Dikkat gerçek koşullardan uzaklaşıp aldatmaya yönelir."
      },
      "silence": {
        "label": "İlgili olduğunda bile travma, kimlik veya engellilikten hiç söz etmeyin.",
        "feedback": "Hassas bilgiler, yetkin destek sağlayıcılarıyla gizlilik içinde görüşülebilir.",
        "consequence": "Önemli koruma veya usule ilişkin ihtiyaçlar fark edilmeyebilir."
      }
    }
  },
  "protection:Travel": {
    "eyebrow": "İrlanda'ya ulaşmak",
    "title": "Korumaya ihtiyaç olduğunu açıkça söyleyin",
    "scene": "İrlanda'ya giriş noktasında korku ve yorgunluk, geri dönüşün neden güvensiz olduğunu açıklamayı zorlaştırıyor.",
    "question": "Kişi neyi iletmeli?",
    "law": "Sığınma talep eden kişi, uluslararası koruma istediğini açıkça belirtmeli ve geçerli kayıt ile ön inceleme sürecinde iş birliği yapmalıdır.",
    "plainLaw": "Doğrudan ifade edin: ‘Uluslararası korumaya başvurmak istiyorum. Geri dönmekten korkuyorum.’",
    "sourceLabel": "International Protection Office",
    "choices": {
      "ask": {
        "label": "Açıkça uluslararası koruma isteyin ve gerekiyorsa tercüman talep edin.",
        "feedback": "Açık iletişim, kişinin doğru sürece yönlendirilmesine yardımcı olur.",
        "consequence": "Belirtilen geri dönme korkusu kaydedilip değerlendirilebilir."
      },
      "tourist": {
        "label": "Korkuyu gizleyip ziyaretin yalnızca turizm amaçlı olduğunu söyleyin.",
        "feedback": "Bu, koruma ihtiyacını iletmez.",
        "consequence": "Kişi, riski değerlendirmek için tasarlanmış sürece giremeyebilir."
      },
      "script": {
        "label": "Doğru olmayan ezberlenmiş bir anlatımı tekrarlayın.",
        "feedback": "Kişinin kendi doğru ifadelerini kullanın.",
        "consequence": "Tutarsızlıklar zaten zor olan görüşmeyi daha da zorlaştırabilir."
      }
    }
  },
  "protection:Arrive": {
    "eyebrow": "Başvuru ve kabul sistemi",
    "title": "IPO ve IPAS'ın görevleri farklıdır",
    "scene": "Başvuru sahibinin hukuki bilgiye, barınmaya ve çocuğuna okul yeri bulmak için yardıma ihtiyacı var.",
    "question": "Hangi plan farklı sorumlulukları dikkate alır?",
    "law": "IPO koruma başvurularını inceler. IPAS, kabul kapsamında barınma ve ilgili desteklerden sorumludur. Adli yardım ve bağımsız kuruluşlar ayrı destek sunar.",
    "plainLaw": "Dosya kararı, barınma ve hukuki danışmanlık farklı hizmetlerden gelir.",
    "sourceLabel": "IPAS barınma ve destekleri",
    "choices": {
      "roles": {
        "label": "Dosya için IPO, kabul ihtiyaçları için IPAS ve hukuki danışmanlık için avukatla iletişim kurun.",
        "feedback": "Görevleri ayırmak, doğru kuruluştan yardım istemeyi kolaylaştırır.",
        "consequence": "Acil ihtiyaçlar ve hukuki başvuru uygun kanallardan ilerleyebilir."
      },
      "manager": {
        "label": "Bir konaklama yöneticisinden mülteci statüsünü onaylamasını isteyin.",
        "feedback": "Konaklama personeli koruma talebi hakkında karar vermez.",
        "consequence": "Hukuki karar için yanlış kişiye başvurularak zaman kaybedilir."
      },
      "address": {
        "label": "Yetkililere veya hukuki danışmana haber vermeden taşının.",
        "feedback": "İletişim bilgileri güncel tutulmalıdır.",
        "consequence": "Önemli randevular veya kararlar kaçırılabilir."
      }
    }
  },
  "protection:Build a life": {
    "eyebrow": "Beklemek ve katılmak",
    "title": "Söylentilere güvenmek yerine güncel hakları kontrol edin",
    "scene": "Bir işveren iş teklif ediyor; diğer sakinler ise başvuru sahiplerinin işgücü piyasasına ne zaman girebileceği konusunda anlaşamıyor.",
    "question": "Başvuru sahibi ne yapmalı?",
    "law": "İşgücü piyasasına erişim, bireysel başvuruya uygulanan hukuka, zamanlamaya ve koşullara bağlıdır. Eğitim, sağlık, şikâyetler ve çocuk destekleri için ayrı kurallar vardır.",
    "plainLaw": "İşe başlamadan önce güncel uygunluk koşullarını kontrol edin ve gerekli izni alın.",
    "sourceLabel": "Irish Refugee Council Bilgi Merkezi",
    "choices": {
      "current": {
        "label": "Bu başvuru için güncel kuralı kontrol edin ve ancak gerekli izin verildikten sonra başlayın.",
        "feedback": "Bu, dosyaya eski bir kuralın veya başka bir kişinin koşullarının uygulanmasını önler.",
        "consequence": "İş kararı güncel ve kişiye özgü bilgilere dayanır."
      },
      "rumour": {
        "label": "Başka bir sakinin çalışmasına izin verildiği için başlayın.",
        "feedback": "Diğer kişi farklı kurallar kapsamında veya farklı bir tarihte başvurmuş olabilir.",
        "consequence": "Başvuru sahibi, kendi dosyasının gerektirdiği izin olmadan hareket edebilir."
      },
      "never": {
        "label": "Başvuru sahiplerinin hiçbir zaman okuyamayacağını, çalışamayacağını veya sorun dile getiremeyeceğini varsayın.",
        "feedback": "Koşullar geçerli olsa da başvuru sahiplerinin hakları ve desteğe erişim yolları vardır.",
        "consequence": "Fırsatlar ve korumalar gereksiz yere kaçırılabilir."
      }
    }
  },
  "study:Plan": {
    "eyebrow": "Bir yeri kabul etmeden önce",
    "title": "Programı ve toplam maliyeti kontrol edin",
    "scene": "Okulun kabul teklifi heyecan verici, ancak bütçe yalnızca öğrenim ücretini ve altı haftalık kirayı karşılıyor.",
    "question": "Karar kesinleştirilmeden önce ne değerlendirilmeli?",
    "law": "Öğrenim izni, programa, eğitim kurumuna, mali kaynaklara, sigortaya ve diğer güncel göçmenlik şartlarına bağlıdır.",
    "plainLaw": "Programın uygun olduğunu doğrulayın; ücretler, barınma, sigorta ve günlük yaşam için gerçekçi bir plan yapın.",
    "sourceLabel": "İrlanda'ya okumak için gelmek",
    "choices": {
      "budget": {
        "label": "Programı ve kurumu doğrulayın, ardından öğrenim, barınma, sigorta ve yaşam giderlerini hesaplayın.",
        "feedback": "Kabul almak, uygulanabilir bir öğrenim yolculuğunun yalnızca bir parçasıdır.",
        "consequence": "Öğrenci planın mali ve hukuki açıdan gerçekçi olup olmadığını değerlendirebilir."
      },
      "job": {
        "label": "Yarı zamanlı bir işin tüm masrafları hemen karşılayacağını varsayın.",
        "feedback": "Çalışma hakları iznin koşullarıyla sınırlıdır ve iş bulmak garanti değildir.",
        "consequence": "Öğrenci temel ihtiyaçları için yeterli kaynak olmadan gelebilir."
      },
      "deposit": {
        "label": "Programı kontrol etmeden doğrulanmamış bir aracıya ödeme yapın.",
        "feedback": "Önce kurumu, programı ve ödeme kanalını doğrulayın.",
        "consequence": "Amaçlanan izni desteklemeyen bir program için ödenen ücretler kaybedilebilir."
      }
    }
  },
  "study:Prepare": {
    "eyebrow": "Yola çıkmadan önce izin",
    "title": "Kabul almak vize almak değildir",
    "scene": "Kabul e-postası geliyor ve öğrenci bunun seyahat için gereken tek belge olduğunu varsayıyor.",
    "question": "Doğru sonraki adım nedir?",
    "law": "Vizeye tabi öğrencilerin genellikle uygun uzun süreli öğrenim vizesi alması gerekir. Tüm öğrenciler, öğrenim amaçlarını ve koşullarını gösterebilmelidir.",
    "plainLaw": "Resmî öğrenci göçmenlik kontrol listesini izleyin; okul kabulü seyahat izninin yerini tutmaz.",
    "sourceLabel": "İrlanda'ya okumak için gelmek",
    "choices": {
      "visa": {
        "label": "Gerekiyorsa resmî vize sürecini izleyin ve mali kaynak, sigorta ile program belgelerini düzenleyin.",
        "feedback": "Bu, kabul teklifini doğru göçmenlik yoluyla ilişkilendirir.",
        "consequence": "Seyahat eksiksiz ve tutarlı bir öğrenim planıyla desteklenir."
      },
      "offer": {
        "label": "Kabul e-postasını otomatik bir vize olarak kullanın.",
        "feedback": "Okula kabul ve göçmenlik izni birbirinden ayrıdır.",
        "consequence": "Program başlamadan seyahat başarısız olabilir."
      },
      "tourist": {
        "label": "Turist olarak girip dersler başladıktan sonra sessizce statü değiştirin.",
        "feedback": "Seyahatten önce doğru öğrenim yolunu kullanın.",
        "consequence": "Öğrenci amaçlanan izni kaydettiremeyebilir."
      }
    }
  },
  "study:Travel": {
    "eyebrow": "Sınır kontrolünde",
    "title": "Öğrenim planı tutarlı olmalıdır",
    "scene": "Görevli, öğrencinin nerede yaşayacağını, programın nasıl finanse edildiğini ve ne zaman başlayacağını soruyor.",
    "question": "Öğrenci nasıl yanıt vermeli?",
    "law": "Giriş sınırda değerlendirilir. Belgeler ve yanıtlar, gerçek ve hazırlanmış bir öğrenim planını göstermelidir.",
    "plainLaw": "Program, mali kaynaklar, sigorta ve ilk konaklama hakkında doğru kanıtlar taşıyın.",
    "sourceLabel": "İrlanda Göçmenlik Hizmetleri",
    "choices": {
      "show": {
        "label": "Doğru yanıt verip program, ödeme, sigorta, mali kaynak ve konaklama kanıtlarını gösterin.",
        "feedback": "Belgeler belirtilen öğrenim amacını destekler.",
        "consequence": "Görevli varsayımlara dayanmadan planı anlayabilir."
      },
      "work": {
        "label": "Asıl amacın tam zamanlı çalışma olduğunu söyleyin.",
        "feedback": "Bu, öğrenim başvurusuyla çelişir.",
        "consequence": "Seyahat amacı tutarsız görünür."
      },
      "guess": {
        "label": "Okul adresini ve program tarihlerini tahmin edin.",
        "feedback": "Öğrenciler kendi programlarının temel ayrıntılarını bilmelidir.",
        "consequence": "Öğrenim planı gerçek veya hazırlanmış görünmeyebilir."
      }
    }
  },
  "study:Arrive": {
    "eyebrow": "İlk dönem",
    "title": "Kayıt yaptırın ve öğreniminizi sürdürün",
    "scene": "Barınma sorunları, kaydı ertelemeyi ve derslere gitmemeyi cazip hâle getiriyor.",
    "question": "Hangi tepki öğrenim yolculuğunu en iyi korur?",
    "law": "90 günden uzun kalan, koşulları karşılayan AEA dışından öğrenciler izinlerini kaydettirmeli ve izne bağlı devamlılık ile program koşullarını karşılamayı sürdürmelidir.",
    "plainLaw": "Kayıt yaptırın, programa katılmaya devam edin ve ciddi sorunlar devamlılığı etkiliyorsa okula erken bildirin.",
    "sourceLabel": "Göçmenlik izninin kaydı",
    "choices": {
      "support": {
        "label": "Kaydı ayarlayın, programa devam edin ve barınma veya iyi oluş sorunları için öğrenci desteğiyle erken iletişime geçin.",
        "feedback": "Erken destekle göçmenlik ve akademik yükümlülükleri korumak daha kolaydır.",
        "consequence": "Sorunlar, açıklanmayan devamsızlığa veya statü kaybına dönüşmeden kaydedilir."
      },
      "skip": {
        "label": "Okula bildirmeden devam etmeyi bırakın.",
        "feedback": "Programa katılım izin açısından önemlidir.",
        "consequence": "Akademik ve göçmenlikle ilgili sonuçlar barınma sorununu ağırlaştırabilir."
      },
      "pps": {
        "label": "Kayıt yerine PPS numarası kullanın.",
        "feedback": "PPS numarası öğrenim izni değildir.",
        "consequence": "Gerekli ikamet kaydı adımı tamamlanmamış kalır."
      }
    }
  },
  "study:Build a life": {
    "eyebrow": "Çalışma, topluluk ve sonraki adımlar",
    "title": "Öğrencilerin çalışmasının sınırları vardır",
    "scene": "Bir işveren, dönem içinde tam zamanlı saatler teklif ediyor ve kimsenin öğrenci koşullarını kontrol etmediğini söylüyor.",
    "question": "Öğrenci ne yapmalı?",
    "law": "Öğrencinin çalışma hakkı, damgasına ve güncel koşullara bağlıdır. Bu koşulların aşılması göçmenlik statüsünü ve öğrenimini etkileyebilir.",
    "plainLaw": "Vardiya çizelgesini kabul etmeden önce güncel öğrenci izninin izin verdiği saatleri ve tarihleri kontrol edin.",
    "sourceLabel": "Göçmenlik izni damgaları",
    "choices": {
      "limits": {
        "label": "Güncel Stamp 2 koşullarını kontrol edin ve yalnızca bunlara uygun işi kabul edin.",
        "feedback": "İşveren daha fazla saat teklif etse de izin koşulları önemlidir.",
        "consequence": "Çalışma, programı ve statüyü zayıflatmak yerine öğrenciyi destekler."
      },
      "full": {
        "label": "İşveren onayladığı için sınırsız çalışma saatlerini kabul edin.",
        "feedback": "İşveren göçmenlik izninin kapsamını genişletemez.",
        "consequence": "Öğrenci kalış koşullarını ihlal edebilir."
      },
      "cash": {
        "label": "Saatlerin görünmemesi için kayıt dışı çalışın.",
        "feedback": "Kayıt dışı çalışma istihdam, vergi ve göçmenlik riskleri yaratır.",
        "consequence": "Öğrenci önemli işyeri korumalarını kaybeder ve ek risk yaratır."
      }
    }
  },
  "family:Plan": {
    "eyebrow": "Taşınmadan önce",
    "title": "İzlenecek yolu sponsor belirler",
    "scene": "İrlanda'daki bir eş, evliliğin otomatik olarak İrlanda vatandaşlığıyla aynı hakları verdiğine inanıyor.",
    "question": "Önce ne belirlenmeli?",
    "law": "Aile yolları, sponsorun İrlanda, Birleşik Krallık, AEA veya İsviçre vatandaşı, AEA dışından biri ya da uluslararası koruma yararlanıcısı olmasına göre farklılaşır.",
    "plainLaw": "Bir form veya vize seçmeden önce sponsorun tam statüsünü ve ilişki kategorisini belirleyin.",
    "sourceLabel": "İrlanda'da aileye katılmak için gelmek",
    "choices": {
      "sponsor": {
        "label": "Sponsorun statüsünü, ilişki kategorisini ve güncel mali koşullar ile belge kurallarını kontrol edin.",
        "feedback": "Bu, doğru aile yolunu belirler.",
        "consequence": "Başvuru gerçek sponsora ve ilişkiye göre hazırlanır."
      },
      "marriage": {
        "label": "Evlilik belgesinin otomatik giriş ve çalışma hakkı verdiğini varsayın.",
        "feedback": "İlişki kanıtı önemlidir, ancak yine de göçmenlik süreci geçerlidir.",
        "consequence": "Gerekli izin olmadan seyahat etmeye veya çalışmaya girişilebilir."
      },
      "form": {
        "label": "Sponsorun statüsüne bakmadan internette bulunan ilk aile formunu kullanın.",
        "feedback": "Farklı sponsorlar ve aile üyeleri farklı süreçleri izler.",
        "consequence": "Yanlış başvuru, önlenebilir gecikmeye veya redde yol açabilir."
      }
    }
  },
  "family:Prepare": {
    "eyebrow": "Kanıtlar ve izin",
    "title": "Gerçek bir aile planı gösterin",
    "scene": "Çiftin yıllara yayılan mesajları ve ziyaretleri var, ancak konut ve mali durum kanıtları düzensiz.",
    "question": "En iyi hazırlık nedir?",
    "law": "Aile başvurularında uygun ilişki, sponsorun uygunluğu, mali kaynaklar, konaklama, bağımlılık ve ilgili yola özgü diğer ölçütler incelenebilir.",
    "plainLaw": "Resmî kontrol listesini kullanın; ilişki ve pratik plan hakkında gerçek kanıtları düzenleyin.",
    "sourceLabel": "Aileye katılma rehberi",
    "choices": {
      "file": {
        "label": "Kontrol listesini kullanarak açık bir kanıt dosyası oluşturun ve gerçek eksikleri açıklayın.",
        "feedback": "Düzenli ve doğru kanıtlar başvurunun değerlendirilmesini kolaylaştırır.",
        "consequence": "Ailenin gerçek geçmişi ve planı, uydurulmuş materyal olmadan görünür olur."
      },
      "fake": {
        "label": "Az kanıt bulunan dönemler için belgeler uydurun.",
        "feedback": "Sahte kanıtlar başvuruya ciddi zarar verebilir.",
        "consequence": "Başvurunun tamamına duyulan güven sarsılabilir."
      },
      "ignore": {
        "label": "İlişki gerçek olduğu için mali veya konut şartlarını görmezden gelin.",
        "feedback": "Gerçek bir ilişki, yolun bütün koşullarını ortadan kaldırmaz.",
        "consequence": "Önlenebilir bir kanıt eksikliği başvuruyu geciktirebilir veya başarısız kılabilir."
      }
    }
  },
  "family:Travel": {
    "eyebrow": "Aile üyesi olarak varış",
    "title": "Sınırda gerçek amacı belirtin",
    "scene": "Yolcunun ilgili vizesi veya ön onayı var ve sponsoruyla yaşamayı planlıyor.",
    "question": "Girişte ne yapılmalı?",
    "law": "Vize veya ön onay gerektiğinde bu belge, belirtilen aile amacıyla seyahati destekler. Giriş ve ilk izin sınırda değerlendirilir.",
    "plainLaw": "Aile amacını dürüstçe açıklayın; onayı ve sponsor bilgilerini yanınızda taşıyın.",
    "sourceLabel": "Aileye katılmak için gelmek",
    "choices": {
      "family": {
        "label": "Aile amacını belirtin; onayı, ilişkiyi ve sponsorun adres bilgilerini gösterin.",
        "feedback": "Açıklama başvuru ve belgelerle örtüşür.",
        "consequence": "Görevli girişi, amaçlanan aile dayanağı üzerinden değerlendirebilir."
      },
      "holiday": {
        "label": "Kalma planına rağmen bunun yalnızca kısa bir tatil olduğunu söyleyin.",
        "feedback": "Belirtilen amaç doğru olmalıdır.",
        "consequence": "Anlatım, aile başvurusuyla ve planlanan kalışla çelişir."
      },
      "none": {
        "label": "Sponsorun iletişim veya konaklama bilgilerini yanınıza almayın.",
        "feedback": "Aile ve varış planına ilişkin temel kanıtlar erişilebilir olmalıdır.",
        "consequence": "Yolcu nerede ve kiminle yaşayacağını açıklamakta zorlanabilir."
      }
    }
  },
  "family:Arrive": {
    "eyebrow": "Kayıt ve koşullar",
    "title": "Damganın neye izin verdiğini tahmin etmeyin",
    "scene": "Uzaktan çalışılan işveren, aile üyesinin İrlanda'daki bir adresten hemen işe dönmesini istiyor.",
    "question": "Kişi çalışmadan önce ne yapmalı?",
    "law": "Çalışma hakkı, verilen göçmenlik iznine bağlıdır. Aile izinleri sponsora ve izlenen yola göre farklılaşabilir.",
    "plainLaw": "Gerektiğinde izni kaydettirin ve İrlanda'da işe başlamadan veya geri dönmeden önce çalışma koşullarını doğrulayın.",
    "sourceLabel": "Göçmenlik izni damgaları",
    "choices": {
      "stamp": {
        "label": "Gerekli kaydı tamamlayın ve iznin tam olarak neye izin verdiğini kontrol edin.",
        "feedback": "Damga veya IRP koşulları çalışma sorusunu yanıtlar.",
        "consequence": "Çalışma ancak İrlanda izni buna olanak tanıdığında başlar."
      },
      "spouse": {
        "label": "Her eşin otomatik olarak sınırsız çalışma hakkı olduğunu varsayın.",
        "feedback": "Aile izinlerinin hepsi aynı değildir.",
        "consequence": "Gerekli koşul yerine gelmeden işe başlanabilir."
      },
      "remote": {
        "label": "Yabancı bir işveren için uzaktan çalışmanın İrlanda göçmenlik koşullarının dışında olduğunu varsayın.",
        "feedback": "Fiziken İrlanda'dayken çalışmak yine de İrlanda göçmenlik, vergi ve istihdam kurallarına tabi olabilir.",
        "consequence": "Uzaktan çalışma düzeni, beklenmedik hukuki ve vergisel sorunlar yaratır."
      }
    }
  },
  "family:Build a life": {
    "eyebrow": "Bağımsızlık ve aidiyet",
    "title": "Sponsor dışında da destek oluşturun",
    "scene": "Taşınma yalnızlık hissettiriyor ve aile üyesi her belge, randevu ve sosyal bağlantı için sponsora bağımlı.",
    "question": "Hangi adım daha fazla güvence sağlar?",
    "law": "Göçmenler göçmenlik, çalışma, sağlık, güvenlik ve yerel hizmetler hakkında bağımsız bilgi alabilir. İlişkiler güvensiz hâle geldiğinde acil ve uzman destekler sunulmaya devam eder.",
    "plainLaw": "Kendi belgelerinizin kopyalarını saklayın ve bağımsız hizmetlere nasıl ulaşacağınızı öğrenin.",
    "sourceLabel": "İrlanda Göçmenlik Hizmetleri",
    "choices": {
      "network": {
        "label": "Kişisel belgelerin kopyalarını saklayın; bağımsız danışmanlık, topluluk ve sağlık hizmetleriyle bağlantı kurun.",
        "feedback": "Daha geniş bir destek ağı, günlük yaşamda bağımsızlığı ve güvenliği artırır.",
        "consequence": "Kişi her şey için tek bir ilişkiye bağımlı olmadan bilgilenmiş kararlar verebilir."
      },
      "all": {
        "label": "Tüm belgeleri ve şifreleri sponsorun saklamasına izin verin.",
        "feedback": "Yetişkinler kendi kimlik ve hesap bilgilerine güvenli erişimlerini korumalıdır.",
        "consequence": "Her pratik karar sponsora bağımlı hâle gelir."
      },
      "silent": {
        "label": "Soru sormak statüyü etkileyebilir diye destekten kaçının.",
        "feedback": "Güvenilir ve gizli bilgiler insanların seçeneklerini anlamasına yardımcı olur.",
        "consequence": "Yardım istenmeden önce sorunlar daha ciddi hâle gelebilir."
      }
    }
  },
  "protection-access:Plan": {
    "eyebrow": "Güvenlik, engellilik ve ebeveynlik",
    "title": "Koruma ve erişilebilirlik ayrı konulardır",
    "scene": "Adama'ya, tekerlekli sandalye kullanmasının ya korumayı garantileyeceği ya da oğluyla başvuru yapmasını engelleyeceği söyleniyor.",
    "question": "Kararına ne yön vermeli?",
    "law": "Koruma talebi, kişinin zulüm veya ciddi zarar riski üzerinden değerlendirilir. Engellilik ve tek ebeveynlik, özel kabul veya usul ihtiyaçları doğurabilir ancak tek başına talebin sonucunu belirlemez.",
    "plainLaw": "Gerçek geri dönüş korkusunu açıklayın ve sürece güvenle katılmak için gereken desteği ayrıca belirtin.",
    "sourceLabel": "Irish Refugee Council: 12 Haziran 2026 sonrası başvurular",
    "choices": {
      "separate": {
        "label": "Koruma gerektiren riski doğru anlatın; hareketlilik, sağlık ve ebeveynlik ihtiyaçları için ayrı bir liste yapın.",
        "feedback": "Bu, hem hukuki talebin hem de erişim ihtiyaçlarının görünür kalmasını sağlar.",
        "consequence": "Karar vericiler koruma anlatımını alırken kabul personeli pratik desteği belirleyebilir."
      },
      "guarantee": {
        "label": "Engelliliğin otomatik olarak mülteci statüsünü garantilediğini varsayın.",
        "feedback": "Kırılganlık ile korumanın hukuki ölçütü aynı şey değildir.",
        "consequence": "Kişisel geri dönüş korkusu gerektiği gibi açıklanmayabilir."
      },
      "hide": {
        "label": "Destek ihtiyacı olan ebeveynler başvuramaz diye engelliliği gizleyin.",
        "feedback": "Engellilik koruma isteme hakkını ortadan kaldırmaz.",
        "consequence": "Gerekli kabul ve usul destekleri kaçırılabilir."
      }
    }
  },
  "protection-access:Prepare": {
    "eyebrow": "Ön inceleme ve kırılganlık",
    "title": "Yalnızca en görünür olanı değil, her ihtiyacı belirtin",
    "scene": "Tekerlekli sandalye belli oluyor; ancak kronik ağrı, travma, ilaçlar ve altı yaşındaki çocuğa bakma yükü görünmüyor.",
    "question": "Adama kırılganlık değerlendirmesine nasıl yaklaşmalı?",
    "law": "2026 sisteminde başvuru sahiplerine gönüllü bir kırılganlık değerlendirmesi sunulur. Engellilik, tek ebeveynlik, ciddi hastalık ve şiddet deneyimleri, özel kabul ihtiyaçlarını belirlemede tanınan kategoriler arasındadır.",
    "plainLaw": "Değerlendirmeyi hem görünür hem de görünmeyen ihtiyaçları açıklamak için kullanın ve bilgilerin doğru kaydedilmesini isteyin.",
    "sourceLabel": "IPAS kırılganlık değerlendirmesi",
    "choices": {
      "full": {
        "label": "Gerekiyorsa tercüman kullanarak hareketlilik, ağrı, ilaç, travma ve ebeveynlik ihtiyaçlarını anlatın.",
        "feedback": "Kesişen ihtiyaçlar farklı pratik çözümler gerektirebilir.",
        "consequence": "Değerlendirme, konaklama ve hizmet yönlendirmeleri için daha kapsamlı bir temel içerir."
      },
      "chair": {
        "label": "Diğer her şey özel olduğu için yalnızca tekerlekli sandalyeden söz edin.",
        "feedback": "Bilgi paylaşımı onun kontrolündedir, ancak kaydedilmeyen ihtiyaçları karşılamak daha zor olabilir.",
        "consequence": "Ağrı, ilaç veya ebeveynlikle ilgili engeller bir krize kadar görünmeyebilir."
      },
      "refuse": {
        "label": "Değerlendirmeyi kabul etmek koruma talebini zayıflatır diye reddedin.",
        "feedback": "Değerlendirme gönüllüdür ve koruma statüsüne karar vermek yerine destek ihtiyaçlarını ele alır.",
        "consequence": "Özel kabul ihtiyaçlarını belirleme yolu, yanlış bir gerekçeyle kaybedilir."
      }
    }
  },
  "protection-access:Travel": {
    "eyebrow": "Kabul sistemi içinde ilerlemek",
    "title": "Sunulan yatak yine de kullanılamaz olabilir",
    "scene": "Konaklama yerine ulaşım ayarlanıyor, ancak Adama odasının üst katta olduğunu ve banyoyu güvenle kullanamayacağını öğreniyor.",
    "question": "Hangi tepki en açık kaydı oluşturur?",
    "law": "IPAS, özel kabul ihtiyaçlarını karşılamak için kırılganlık bilgilerini kullanır. Tıbbi öncelik veya istisnai nakil ve ek değerlendirme süreçleri vardır; ancak tercih edilen yer veya hemen nakil garanti edilmez.",
    "plainLaw": "Erişim engelini tam olarak yazılı biçimde anlatın, mevcut tıbbi kanıtları sunun ve resmî üst değerlendirme sürecini kullanın.",
    "sourceLabel": "IPAS konaklama ve tıbbi değerlendirme",
    "choices": {
      "record": {
        "label": "Somut engeli hemen bildirin, kopyaları saklayın ve IPAS üzerinden tıbbi veya istisnai değerlendirme isteyin.",
        "feedback": "Belirli yazılı kanıtlar, genel bir taşınma talebinden daha güçlüdür.",
        "consequence": "IPAS gerçek güvenlik ve erişim sorununu ilgili süreçte değerlendirebilir."
      },
      "leave": {
        "label": "Kimseye haber vermeden ayrılın ve başka bir oda bulunacağını varsayın.",
        "feedback": "Ayrılmak, engeli çözmeden onun kabul desteğiyle bağını koparabilir.",
        "consequence": "Adama ve çocuğu evsizlikle karşılaşabilir ve onlara ulaşmak zorlaşabilir."
      },
      "accept": {
        "label": "Sakinler uygunluğa itiraz edemez diye güvensiz odayı kullanın.",
        "feedback": "Konaklama sorunları ve özel ihtiyaçlar dile getirilebilir.",
        "consequence": "Düşme, hijyen ihtiyaçlarını karşılayamama ve ağrıların artması daha olası hâle gelir."
      }
    }
  },
  "protection-access:Arrive": {
    "eyebrow": "Görüşmeye erişim",
    "title": "Katılım için düzenlemeler gerekebilir",
    "scene": "Görüşme yeri, uzun süre oturmak ve ilaçların yan etkileri Adama'nın eksiksiz bir anlatım sunmasını engelleyebilir.",
    "question": "Randevudan önce ne yapmalı?",
    "law": "Başvuru sahipleri görüşmelere katılmalı ve süreçle iş birliği yapmalı; engellilik, iletişim, sağlık ve diğer usul ihtiyaçlarını mümkün olduğunca erken belirtmelidir. Uzman hukuki danışmanlık, ilgili düzenlemeleri ve son tarihleri açıklamaya yardımcı olabilir.",
    "plainLaw": "Katılımı neyin zorlaştırdığını IPO'ya ve hukuki danışmana yalnızca görüşme başarısız olduktan sonra değil, görüşmeden önce söyleyin.",
    "sourceLabel": "Irish Refugee Council Independent Law Centre",
    "choices": {
      "early": {
        "label": "Erişim, mola, ilaç ve çocuk bakımıyla ilgili somut sorunları IPO'ya ve hukuki danışmana erkenden iletin.",
        "feedback": "Somut ve önceden bildirim, sürecin yanıt verme fırsatı bulmasını sağlar.",
        "consequence": "Adama daha iyi katılım sağlayabilir ve oğlunun bakımı planlanabilir."
      },
      "miss": {
        "label": "Engellilik devamsızlığı otomatik olarak mazur gösterir diye haber vermeden görüşmeye gitmeyin.",
        "feedback": "Yokluğun nedeninin kendiliğinden anlaşılacağını varsaymayın.",
        "consequence": "Önemli bir usul adımı, nedeni anlaşılmadan kaçırılabilir."
      },
      "endure": {
        "label": "Ağrı dikkati etkilediğinde bile hiçbir şey söylemeden devam edin.",
        "feedback": "Açıklanmayan güçlük, anlatımın nasıl dinlendiğini ve kaydedildiğini etkileyebilir.",
        "consequence": "Önemli ayrıntılar atlanabilir veya tutarsız görünebilir."
      }
    }
  },
  "protection-access:Build a life": {
    "eyebrow": "Sağlık, okul ve bağımsızlık",
    "title": "Tek bir randevu her engeli çözemez",
    "scene": "Adama'nın aile hekimine, ilaçlarının sürekliliğine, okul yerine, erişilebilir ulaşıma ve çalışma uygunluğu bilgisine ihtiyacı var.",
    "question": "En gerçekçi plan nedir?",
    "law": "Sağlık hizmetleri, eğitim, kabul kapsamında barınma ve işgücü piyasasına erişim, İrlanda'da farklı hizmetler ve uygunluk kuralları üzerinden işler. IPAS her biri için ayrı yollar ve destek bilgileri yayımlar.",
    "plainLaw": "Tek bir hizmetin her şeyi yönetmesini beklemek yerine sağlık, okul, barınma ve göçmenlik için ayrı eylem ve iletişim noktaları belirleyin.",
    "sourceLabel": "IPAS hizmetleri ve destekleri",
    "choices": {
      "plan": {
        "label": "Dört bölümlü bir plan yapın ve acil işleri koordine etmek için bir hak savunucusu veya destek görevlisi arayın.",
        "feedback": "Her sistemin farklı bir görevi olduğu için koordinasyon önemlidir.",
        "consequence": "Barınma veya dosya yükümlülükleri unutulmadan ilaçlara ve okula öncelik verilebilir."
      },
      "ipo": {
        "label": "IPO dosya görevlisinden tüm sağlık, okul ve ulaşım hizmetlerini ayarlamasını isteyin.",
        "feedback": "IPO koruma başvurusunu inceler; tüm varış hizmetlerini yönetmez.",
        "consequence": "Acil pratik ihtiyaçlar yanlış kuruluşa yönlendirilir."
      },
      "wait": {
        "label": "Sağlık hizmeti veya okul yeri aramadan önce koruma statüsünü bekleyin.",
        "feedback": "Başvuru sahipleri ve çocuklar, ilgili kurallar çerçevesinde dosya sürerken hizmetlere erişebilir.",
        "consequence": "Sağlık kötüleşir ve çocuk gereksiz yere eğitim süresi kaybeder."
      }
    }
  },
  "eu-mobility:Plan": {
    "eyebrow": "AB serbest dolaşımı",
    "title": "Elena'nın çalışma iznine ihtiyacı yok",
    "scene": "Bir işe alım aracısı Elena'ya Bulgaristan vatandaşlarının AEA dışından işçilerle aynı çalışma iznine ihtiyacı olduğunu söylüyor ve ona izin satmayı teklif ediyor.",
    "question": "Neyi doğrulamalı?",
    "law": "AB vatandaşı olarak Elena, geçerli pasaport veya ulusal kimlik kartıyla İrlanda'ya girebilir ve İrlanda çalışma izni olmadan çalışabilir. İlk dönemden sonraki ikamet için koşullar geçerlidir.",
    "plainLaw": "Bir AB vatandaşının ihtiyaç duymadığı çalışma iznine para ödemeyin; daha uzun kalışın ayrı kurallarını kontrol edin.",
    "sourceLabel": "AB/AEA'dan çalışmak için gelmek",
    "choices": {
      "eu": {
        "label": "İzin satışını reddedin, işvereni doğrulayın ve resmî AB ikamet bilgilerini kullanın.",
        "feedback": "AB vatandaşlığı onun göçmenlik yolunu değiştirir, gerçek bir işe olan ihtiyacını değil.",
        "consequence": "Elena dolandırıcılıktan kaçınır ve gerçek serbest dolaşım haklarına göre plan yapar."
      },
      "buy": {
        "label": "Yaş ve Roman kimliği özel izin şartı doğurduğu için ödeme yapın.",
        "feedback": "Bu kimlikler, bir AB vatandaşı için çalışma izni şartı doğurmaz.",
        "consequence": "Para ve hassas belgeler dürüst olmayan bir işe alım aracısına teslim edilir."
      },
      "visitor": {
        "label": "AB vatandaşları yalnızca ziyaret edebilir diye çalışma planını gizleyin.",
        "feedback": "AB vatandaşlarının, geçerli ikamet kurallarına bağlı olarak başka bir AB ülkesinde çalışma hakkı vardır.",
        "consequence": "Elena sahip olduğu hukuki dayanağı yanlış anlar ve yeterince kullanamaz."
      }
    }
  },
  "eu-mobility:Prepare": {
    "eyebrow": "İlk aylardan sonra kalmak",
    "title": "Serbest dolaşımın da ikamet koşulları vardır",
    "scene": "Elena süresiz kalmayı planlıyor, ancak elinde yalnızca kısa süreli geçici bir iş vaadi var ve neredeyse hiç birikimi yok.",
    "question": "En güvenilir plan hangisi?",
    "law": "AB vatandaşları ilk dönemde İrlanda'da ikamet edebilir; çalışma, serbest meslek, uygun öğrenim veya kendi geçimini sağlama gibi bir AB Antlaşması hakkını kullanırken daha uzun kalabilir. İş arayanlara özgü korumalar ve koşullar vardır.",
    "plainLaw": "Gerçek çalışma veya iş arama kanıtlarını saklayın ve ilk dönemden sonra ikameti hangi dayanağın desteklediğini anlayın.",
    "sourceLabel": "AB vatandaşlarının İrlanda'daki ikamet hakları",
    "choices": {
      "evidence": {
        "label": "Geçerli ikamet dayanağını kontrol ederken iş başvurularını, sözleşmeleri, ücret bordrolarını ve barınma kayıtlarını saklayın.",
        "feedback": "Kanıtlar, Elena'nın çalıştığını veya gerçekten iş aradığını göstermeye yardımcı olur.",
        "consequence": "Uzun vadeli planı, belgelenmiş bir Antlaşma hakkına dayanır."
      },
      "forever": {
        "label": "AB vatandaşlığının ilk günden koşulsuz daimi ikamet sağladığını varsayın.",
        "feedback": "İlk giriş ile uzun vadeli ikamet aynı değildir.",
        "consequence": "Elena ikamet sorununu ancak başka bir hizmete erişmeye çalışırken fark edebilir."
      },
      "cash": {
        "label": "Her iş ikameti kanıtlar diye belgesiz, nakit ödemeli işi kabul edin.",
        "feedback": "Kayıt dışı çalışma istihdam korumalarını zayıflatır ve kullanılabilir kanıt sağlamayabilir.",
        "consequence": "Çalışma geçmişini kanıtlamak zor kalırken sömürü artar."
      }
    }
  },
  "eu-mobility:Travel": {
    "eyebrow": "İşe başlamak",
    "title": "PPS numarası ve IRP, AB çalışma izni değildir",
    "scene": "Otel, Elena'yı vardiya çizelgesine eklemeden önce İrlanda Oturum İzni istiyor.",
    "question": "Nasıl karşılık vermeli?",
    "law": "AB vatandaşları kendi AB haklarını kullanmak için genellikle Immigration Service Delivery'ye kayıt yaptırmaz veya IRP almaz. PPS numarası, vergi ve kamu hizmetleri için ayrı bir tanımlayıcıdır.",
    "plainLaw": "AB kimliğini gösterin ve doğru çalışma hakkı dayanağını açıklayın; vergi ve PPS adımlarını ayrı tamamlayın.",
    "sourceLabel": "İrlanda'da çalışan AB vatandaşları",
    "choices": {
      "explain": {
        "label": "Bulgaristan kimlik belgesini sunup insan kaynaklarından AB çalışanlarına ilişkin kuralları incelemesini isteyin.",
        "feedback": "Bu, sahip olmaması gereken bir belgeyi uydurmadan istenen şartı düzeltir.",
        "consequence": "İşveren onu doğru AB dayanağıyla işe başlatabilir."
      },
      "fake": {
        "label": "İşveren ısrar ettiği için sahte IRP satın alın.",
        "feedback": "Asla sahte göçmenlik belgesi oluşturmayın veya satın almayın.",
        "consequence": "İşverenin hatası Elena için ciddi bir hukuki soruna dönüşür."
      },
      "ppswork": {
        "label": "AB çalışma hakkını veren belgenin PPS numarası olduğunu söyleyin.",
        "feedback": "PPS numarası çalışma hakkı yaratmaz.",
        "consequence": "İki ayrı sistem birbirine karıştırılmaya devam eder."
      }
    }
  },
  "eu-mobility:Arrive": {
    "eyebrow": "Konut ayrımcılığı",
    "title": "Ret, ödeme gücünden fazlasıyla ilgili olabilir",
    "scene": "Ev sahibi telefonda olumlu konuşuyor, ancak Elena'yı gördükten ve onun Roman ve trans olduğunu duyduktan sonra odanın müsait olmadığını söylüyor.",
    "question": "Elena, her reddin hukuka aykırı olduğunu varsaymadan ne yapabilir?",
    "law": "İrlanda eşitlik hukuku, ırk, cinsiyet ve yaş dâhil korunan temellerde konut ayrımcılığını yasaklar. Translara yönelik ayrımcılık cinsiyet temelindeki koruma kapsamındadır; ancak şikâyette kanıtlar ve süre sınırları önemlidir.",
    "plainLaw": "Olanları kaydedin, ilanı ve mesajları saklayın; gecikmeden konut veya eşitlik danışmanlığı alın.",
    "sourceLabel": "IHREC: ırk ve konut",
    "choices": {
      "save": {
        "label": "İlanı ve mesajları saklayın, söylenenleri yazın ve IHREC veya bir konut hizmetinden danışmanlık alın.",
        "feedback": "Olay sırasında tutulan kanıtlar, ayrımcılığı başka bir açıklamadan ayırmaya yardımcı olur.",
        "consequence": "Elena acil konut arayışını sürdürürken şikâyet seçeneğini değerlendirebilir."
      },
      "threat": {
        "label": "Hiçbir kanıt saklamadan ev sahibini kamuya açık biçimde tehdit edin.",
        "feedback": "Öfke anlaşılır, ancak kanıt ve danışmanlık çözüm için daha güçlü bir yol oluşturur.",
        "consequence": "İlan kaybolur ve ayrımcı sözlerin tam olarak ne olduğunu kanıtlamak zorlaşır."
      },
      "accept": {
        "label": "Özel mülkte Roman veya trans kiracılara ayrımcılığın yasal olduğunu varsayın.",
        "feedback": "Özel konut hizmetleri, hukuki ayrıntılar ve istisnalar çerçevesinde eşitlik kuralları kapsamındadır.",
        "consequence": "Hukuki başvuru konusu olabilecek bir ret incelenmeden kalır."
      }
    }
  },
  "eu-mobility:Build a life": {
    "eyebrow": "İşyerinde eşitlik",
    "title": "Bir olay birden fazla korunan temeli içerebilir",
    "scene": "Bir amir Elena'nın aksanıyla ve cinsiyetiyle alay ediyor, Roman olmayan genç çalışanlara daha iyi vardiyalar veriyor ve ondan farklı isimli bir yaka kartı takmasını istiyor.",
    "question": "Hangi tepki kesişen sorunları koruma altına alır?",
    "law": "İstihdam Eşitliği Yasaları, cinsiyet, ırk ve yaş dâhil temellerde işyeri ayrımcılığını yasaklar. Translara yönelik ayrımcılık cinsiyet temelindeki koruma kapsamındadır; işyeri şikâyetleri WRC'ye götürülebilir.",
    "plainLaw": "Her olayı ve karşılaştırılabilir çalışanı kaydedin, güvenliyse işverenin sürecini kullanın ve gecikmeden eşitlik danışmanlığı alın.",
    "sourceLabel": "IHREC işyeri ayrımcılığı",
    "choices": {
      "log": {
        "label": "Sözler, vardiyalar ve tanıklar hakkında tarihli kayıt tutun, ardından IHREC veya WRC rehberliği alın.",
        "feedback": "Kayıt, ırkın, cinsiyetin ve yaşın birlikte nasıl etkili olabileceğini gösterir.",
        "consequence": "Elena kanıtlar ve başvuru süreleri kaybolmadan bilgilenmiş bir iç veya dış çözüm yoluna başvurabilir."
      },
      "one": {
        "label": "Tek şikâyet kesişen temeller içeremez diye yalnızca yaşı bildirin.",
        "feedback": "Olgular destekliyorsa şikâyet birden fazla korunan temeli anlatabilir.",
        "consequence": "Muamelenin ırksal ve cinsiyete dayalı yönleri anlatımdan silinir."
      },
      "quit": {
        "label": "Vardiyaları, mesajları saklamadan veya danışmanlık almadan hemen istifa edin.",
        "feedback": "Güvenlik önce gelir, ancak kanıtları korumak ve danışmanlık almak sonraki seçenekleri koruyabilir.",
        "consequence": "Gelir kesilir ve olay örüntüsünü göstermek zorlaşır."
      }
    }
  },
  "family-safety:Plan": {
    "eyebrow": "Acil güvenlik",
    "title": "Göçmenlik korkusu zorlayıcı kontrolün parçası olabilir",
    "scene": "Leila'nın eşi pasaportunu, parasını ve telefonunu kontrol ediyor; çocuklarla ayrılırsa Gardaí'nin onu sınır dışı edeceğini söylüyor.",
    "question": "Önce ne gelmeli?",
    "law": "Ev içi şiddet, fiziksel şiddetin yanı sıra zorlayıcı kontrolü de içerebilir. Acil tehlikedeki herkes 999 veya 112'yi aramalıdır; göçmenlik statüsü mağdurun An Garda Síochána veya uzman bir hizmetle iletişime geçmesini engellemez.",
    "plainLaw": "Acil güvenliğe ve gizli uzman desteğine öncelik verin; göçmenlik statüsüne şiddet uygulayan kişi karar vermez.",
    "sourceLabel": "Women’s Aid desteği",
    "choices": {
      "safe": {
        "label": "Acil veya uzman ev içi şiddet desteğine ulaşmak için güvenli bir cihaz ya da güvenilen bir kişiyi kullanın.",
        "feedback": "Güvenlik planlaması çocukları, dili, izlenmeyi ve belgeleri dikkate alabilir.",
        "consequence": "Leila önce şiddet uygulayan kişiyle yüzleşmek zorunda kalmadan gizli seçenekler öğrenir."
      },
      "confront": {
        "label": "Yalnızken ayrılma planını açıklayın ve tüm belgeleri geri isteyin.",
        "feedback": "Yüzleşme tehlikeyi artırabilir; bir uzman daha güvenli ayrılışı planlamaya yardımcı olabilir.",
        "consequence": "Şiddet uygulayan kişi şiddeti artırabilir veya belgeleri ve parayı ortadan kaldırabilir."
      },
      "believe": {
        "label": "Eşin sınır dışı etme emri verme yetkisi olduğu için kalın.",
        "feedback": "Göçmenlik kararlarını eş vermez.",
        "consequence": "Asılsız göçmenlik tehditleri Leila'yı ve çocukları kapana kıstırmaya devam eder."
      }
    }
  },
  "family-safety:Prepare": {
    "eyebrow": "Özel iletişim",
    "title": "Güvenli iletişim yöntemi önemlidir",
    "scene": "Eş, tarayıcı geçmişini kontrol ediyor ve Leila okuyamadan her resmî mektubu kendisi tercüme ediyor.",
    "question": "Nasıl daha güvenli bilgi arayabilir?",
    "law": "ISD, cihazların dijital iz bıraktığını belirtir ve mağdurun temsilci iletişim bilgilerini kullanmasına izin verir. Women’s Aid tercüman sağlayabilir ve arayanları İrlanda genelindeki hizmetlerle buluşturabilir.",
    "plainLaw": "Daha güvenli bir cihaz ve şiddet uygulayan kişinin izleyemeyeceği iletişim bilgilerini kullanın; ona güvenmek yerine tercüman isteyin.",
    "sourceLabel": "ISD ev içi şiddet göçmenlik rehberi",
    "choices": {
      "private": {
        "label": "Güvenilir cihaz, güvenli e-posta veya temsilci adresi kullanın ve bağımsız tercümanlık isteyin.",
        "feedback": "Bu, izlenmeyi azaltır ve Leila'nın kendi bilgilerine doğrudan erişmesini sağlar.",
        "consequence": "Destek hizmetleri her şeyi eş üzerinden yürütmeden iletişim kurabilir."
      },
      "shared": {
        "label": "Geçmişi silmek tüm izleri kaldırır diye ortak aile hesabını kullanın.",
        "feedback": "Geçmişi silmek, etkinliğin gizlendiğini garanti etmez.",
        "consequence": "Eş, güvenlik veya göçmenlik planını keşfedebilir."
      },
      "translate": {
        "label": "Eşin her gizli görüşmeye tercümanlık yapmasına izin verin.",
        "feedback": "Şiddet uyguladığı iddia edilen kişi, güvenlik veya hukuk danışmanlığının tercümesini kontrol etmemelidir.",
        "consequence": "Bilgiler değiştirilebilir, saklanabilir veya Leila'yı korkutmak için kullanılabilir."
      }
    }
  },
  "family-safety:Travel": {
    "eyebrow": "Bağımsız göçmenlik statüsü",
    "title": "Ayrılmak izni otomatik olarak sona erdirmez",
    "scene": "Leila'nın oturum izni eşine bağlı ve sığınmaevine taşınırsa o gece kalışının hukuka aykırı hâle geleceğine inanıyor.",
    "question": "Hangi yolu acilen araştırmalı?",
    "law": "İzni şiddet uygulayan kişiye bağlı mağdur, ISD'nin ev içi şiddet rehberi kapsamında doğrudan veya avukat aracılığıyla bağımsız göçmenlik iznine başvurabilir. Başvuru ücreti yoktur ve başvuru gizlilik içinde ele alınır.",
    "plainLaw": "Bağımsız izin süreci hakkında danışmanlık alın; şiddet uygulayan kişiden ayrılmakla statü kaybı otomatik olarak aynı olay değildir.",
    "sourceLabel": "Ev içi şiddet mağdurları için bağımsız izin",
    "choices": {
      "apply": {
        "label": "Güvenli kanallarla ISD veya bir avukatla iletişime geçin ve rehber kapsamında bağımsız statü isteyin.",
        "feedback": "Bu düzenleme, izni şiddet uyguladığı iddia edilen kişiye bağlı olanlar için vardır.",
        "consequence": "ISD, eş başvuruyu kontrol etmeden Leila'nın kendi koşullarını değerlendirebilir."
      },
      "permission": {
        "label": "Bağımsız başvurusu için eşten imzalı izin isteyin.",
        "feedback": "Şiddet uygulayan kişinin bağımsız statü talebinde karar verme rolü yoktur.",
        "consequence": "Eş haberdar olur ve güvenliği engellemek için yeni bir fırsat kazanır."
      },
      "automatic": {
        "label": "Sığınmaevine taşınmanın otomatik olarak Stamp 4 sağladığını varsayın.",
        "feedback": "Bağımsız izin başvuru ve değerlendirme gerektirir; otomatik değildir.",
        "consequence": "Leila, tamamlanmadığı hâlde göçmenlik adımının bittiğine inanabilir."
      }
    }
  },
  "family-safety:Arrive": {
    "eyebrow": "Kusursuzluk gerektirmeyen kanıtlar",
    "title": "Şiddetten kurtulan herkesin Garda raporu yoktur",
    "scene": "Şiddetin çoğu evde gerçekleşti. Leila'nın mesajları ve bir aile hekimi ziyareti var, ancak mahkeme kararı veya Garda olay numarası yok.",
    "question": "Başvuruyu nasıl hazırlamalı?",
    "law": "ISD mümkün olduğunca çok bilgi ister; mahkeme kararlarını, tıbbi veya Garda raporlarını, devlet kurumu yazılarını ve ev içi şiddet hizmeti yazılarını örnek verir. Koşullar ve çocukların durumu açıklanmalıdır; bu örnekler kanıt uydurma gerekçesi değildir.",
    "plainLaw": "Gerçekte var olanları toplayın, eksikleri açıklayın ve geçmişi sunmak için bir avukat veya destek hizmetinden yardım isteyin.",
    "sourceLabel": "ISD kanıt rehberi",
    "choices": {
      "genuine": {
        "label": "Gerçek mesajları ve kayıtları koruyun, olay örüntüsünü anlatın ve uygun olduğunda destekleyici yazılar isteyin.",
        "feedback": "Tutarlı ve doğru bir anlatım farklı kanıt türlerinden yararlanabilir.",
        "consequence": "ISD, sahte bir belgenin zayıflatmadığı mevcut geçmişi alır."
      },
      "wait": {
        "label": "ISD listesindeki her örneği elde edene kadar yardım istemeyi bekleyin.",
        "feedback": "Kusursuz dosya arayışı güvenliği ve danışmanlığı ertelememelidir.",
        "consequence": "Tehlike sürer ve yararlı kanıtlar kaybolabilir."
      },
      "create": {
        "label": "Resmî kanıt her zaman gerekli diye Garda rapor numarası uydurun.",
        "feedback": "Asla kanıt uydurmayın.",
        "consequence": "Yanlış bilgiler hem güvenilirliğe hem de göçmenlik başvurusuna zarar verebilir."
      }
    }
  },
  "family-safety:Build a life": {
    "eyebrow": "Acil güvenlikten sonra",
    "title": "Göçmenlik izni toparlanmanın bir parçasıdır",
    "scene": "Aile hukukuyla ilgili sorular çözülmemişken Leila'nın gelire, güvenli barınmaya, okulun devamlılığına ve LGBT kimliğini destekleyen yardıma ihtiyacı var.",
    "question": "En gerçekçi sonraki adım nedir?",
    "law": "Rehber kapsamında bağımsız izin onaylanırsa Stamp 4, çalışma izni olmadan çalışmaya olanak tanır. Güvenlik, barınma, çocuk ve aile hukuku ihtiyaçları yine ayrı uzman hizmetleri gerektirir; başvuru reddedilirse ret gerekçeleri ve diğer göçmenlik seçenekleri açıklanmalıdır.",
    "plainLaw": "Tek bir kararın her şeyi çözmesini beklemek yerine göçmenlik, güvenlik, çocuklar, barınma ve gelir için koordineli bir plan kurun.",
    "sourceLabel": "ISD ev içi şiddet göçmenlik rehberi",
    "choices": {
      "team": {
        "label": "Göçmenlik danışmanı, ev içi şiddet hizmeti ve uygun aile, konut ve LGBT desteklerinden birlikte yararlanın.",
        "feedback": "Farklı uzmanlar, bağlantılı ama hukuken ayrı ihtiyaçları ele alabilir.",
        "consequence": "Bir hizmet çocukları, diğeri statüyü gözden kaçırmadan Leila bağımsızlığını yeniden kurabilir."
      },
      "stamp": {
        "label": "Stamp 4'ün otomatik konut sağladığını ve çocuklarla ilgili düzenlemeleri çözdüğünü varsayın.",
        "feedback": "Göçmenlik izni, konut veya aile hukuku meselelerini karara bağlamaz.",
        "consequence": "Acil pratik ve hukuki ihtiyaçlar ilgilenilmeden kalır."
      },
      "return": {
        "label": "Onay garanti olmadığı için eşe geri dönün.",
        "feedback": "Belirsizlik, zorla tehlikeye maruz kalmayı değil, uzman planlamasını gerektirir.",
        "consequence": "Bağımsız seçenekler gerektiği gibi değerlendirilmeden zorlayıcı kontrol yeniden başlar."
      }
    }
  }
};

export default catalog;
