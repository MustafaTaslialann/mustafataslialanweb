import { Metadata } from "next";
import { notFound } from "next/navigation";

const hizmetler: Record<string, string> = {
  "beyaz-esya-servisi":
    "Beyaz eşyalar, evimizin en önemli yardımcılarıdır. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın ve klima gibi cihazlar hayatımızı kolaylaştırırken, zamanla arızalanabilir veya bakım gerektirebilir. İşte tam bu noktada beyaz eşya servisi devreye girer. Peki, beyaz eşya servisi neden önemlidir ve doğru teknik servis nasıl seçilir? Bu makalede tüm detaylarıyla ele alıyoruz. Beyaz eşya servisi, evinizde kullandığınız beyaz eşyaların tamir, bakım ve montaj işlemlerini yapan uzman ekiplerin sunduğu teknik hizmettir. Bu servisler, cihazların arızalanması durumunda hızlı müdahale ederek cihazların ömrünü uzatır ve tekrar sorunsuz çalışmasını sağlar.",
  buzdolabi:
    "Buzdolabınızın soğutma problemleri, sesli çalışma, su sızıntısı veya elektrik arızaları gibi sorunlarında uzman ve güvenilir bir buzdolabı servisi ile hızlı ve profesyonel destek alabilirsiniz; alanında deneyimli teknisyenlerimiz orijinal yedek parçalar kullanarak cihazınızın performansını en üst seviyeye çıkarır, periyodik bakım ve tamir hizmetleri ile buzdolabınızın ömrünü uzatır, ekonomik ve şeffaf fiyat politikamızla müşteri memnuniyetini ön planda tutarız; bu sayede hem evinizin konforu bozulmaz hem de olası arızaların önüne geçerek uzun vadede tasarruf sağlarsınız.Yeni buzdolabı alırken kapasiteye dikkat etmelisin. Enerji verimliliği uzun vadede bütçene katkı sağlar. Tasarım, mutfak dekorasyonunla uyumlu olmalıdır. Soğutma sistemi performansı etkiler, no-frost özellik donma sorununu önler. Ses düzeyi de önemli, sessiz modeller huzurunu korur. Ancak, enerji sınıfı tasarruf için önemlidir. Kapasite gıda depolama ihtiyacını karşılamalıdır. Mutfakta uyumlu görünüm için tasarım önemlidir. Mümkün olduğunca sessiz model seçmelisin. Dolayısıyla, buzdolabının avantajlarını değerlendirmelisin. Unutma, enerji verimli modeller ön plandadır. Fakat, doğru seçim bütçeni ve deneyimini etkiler.",
  "camasir-makinesi":
    "Çamaşır makinenizde dönmeme, su almama, program hata kodları veya su boşaltmama gibi sorunlar yaşadığınızda, profesyonel ve güvenilir bir çamaşır makinesi servisi ile hızlı çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalarla tamir ve bakım işlemlerini gerçekleştirirken, cihazınızın performansını artırır ve ömrünü uzatır; uygun fiyat garantisi ve müşteri memnuniyeti odaklı hizmet anlayışımızla, evinizde kesintisiz konfor sağlamak için yanınızdayız.",
  "bulasik-makinesi":
    "Bulaşık makineniz yıkama sorunları, su boşaltmama veya filtre tıkanıklığı gibi problemlerle karşılaştığında, uzman ve güvenilir bulaşık makinesi servisi sayesinde hızlı ve etkili çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalar kullanarak tamir ve bakım işlemlerini yapar, cihazınızın performansını artırır ve ömrünü uzatır; uygun fiyat politikamız ve müşteri memnuniyetine verdiğimiz önemle, bulaşık makinenizin kesintisiz ve verimli çalışmasını sağlıyoruz.Bulaşık makinesi satın alırken dikkat etmen gereken bazı önemli programlar bulunuyor. Bu programlar, makinenin verimliliğini ve kullanım kolaylığını etkiliyor. Öncelikle, enerji verimliliği yüksek bir bulaşık makinesi seçmen ihtiyaçlarını karşılar. Ek olarak, sessiz çalışma özelliği önemli bir faktördür. Gelişmiş modeller, ses seviyesini minimize ederek evde daha konforlu bir ortam oluşturur. Mutfak aletlerin arasında beyaz eşya olarak en çok tercih edilenlerden biri bulaşık makineleridir. Ayrıca, su tasarrufu sağlayan programlar da günümüzde oldukça popüler. Bu sayede hem doğayı korur hem de su faturalarında tasarruf sağlarsın. Sonuç olarak, ihtiyacını karşılayacak ve bütçene uygun bir model bulmak için bu unsurlara dikkat etmelisin. ",
  firin:
    "Fırınınızın ısınmama, pişirme sorunları veya elektronik panel arızaları gibi problemlerinde uzman ve güvenilir fırın servisi olarak hızlı ve etkili çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalarla tamir ve bakım işlemlerini gerçekleştirerek cihazınızın performansını artırır ve ömrünü uzatır; ekonomik fiyat avantajı ve müşteri memnuniyeti odaklı hizmet anlayışımızla, mutfağınızda kesintisiz konfor sağlamaya devam ediyoruz.",
  klima:
    "Klimalarınızın soğutma yetersizliği, gaz dolumu, filtre temizliği ve bakım ihtiyaçlarında uzman ve güvenilir klima servisi olarak hızlı ve etkili çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalar kullanarak tamir ve bakım hizmeti verir, cihazınızın performansını artırır ve enerji verimliliğini optimize eder; uygun fiyat politikamız ve müşteri memnuniyetine verdiğimiz önemle, evinizde veya iş yerinizde konforunuzu kesintisiz hale getiriyoruz.",
  kombi:
    "Kombinizde yaşanan ısınma sorunları, su sızıntıları veya arıza durumlarında güvenilir ve uzman kombi servisi olarak hızlı ve etkili çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalar kullanarak bakım, tamir ve montaj hizmetleri verir, kombinizin performansını artırır ve enerji tasarrufu sağlar; uygun fiyat garantisi ve müşteri memnuniyetine verdiğimiz önemle, evinizin sıcaklığını kesintisiz ve konforlu hale getiriyoruz.",
  televizyon:
    "Televizyonunuzda görüntü, ses, açılmama veya diğer elektronik arızalar yaşandığında, uzman ve güvenilir televizyon servisi olarak hızlı ve etkili çözümler sunuyoruz; deneyimli teknisyenlerimiz orijinal yedek parçalar kullanarak tamir, bakım ve montaj hizmetleri verir, cihazınızın performansını artırır ve ömrünü uzatır; uygun fiyat avantajı ve müşteri memnuniyeti odaklı hizmet anlayışımızla, evinizde kaliteli ve kesintisiz televizyon keyfi sağlamaya devam ediyoruz.",
};
const hizmetBasliklari: Record<string, string> = {
  "beyaz-esya-servisi": "Beyaz Eşya Servisi",
  buzdolabi: "Buzdolabı",
  "camasir-makinesi": "Çamaşır Makinesi",
  "bulasik-makinesi": "Bulaşık Makinesi",
  firin: "Fırın",
  klima: "Klima",
  kombi: "Kombi",
  televizyon: "Televizyon",  };
  


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(hizmetler).map((slug) => ({ slug }));
}

export type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const title = (hizmetBasliklari[slug] ?? slug.replace(/-/g, " ")).replace(
    /\b\w/g,
    (c: any) => c.toUpperCase()
  );

  return {
    title: `${title} - Beyaz Eşya Servisi`,
    description: hizmetler[slug] ?? "Detaylı bilgi için bize ulaşın.",
  };
}

export default async function HizmetSayfasi({ params }: PageProps) {
  const { slug } = params;
  const aciklama = hizmetler[slug as keyof typeof hizmetler];

  const baslik =
    hizmetBasliklari[slug] ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="p-8 max-w-3xl mx-auto lg:max-w-full bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 capitalize text-gray-200">
        {baslik}
      </h1>
      <p className="text-lg lg:text-2xl text-gray-100 mb-8">
        {aciklama ?? `"${baslik}" hizmeti.`}
      </p>
      <p className="text-lg text-yellow-300 text-center mt-12">
        Bu web sitesi özel teknik servis hizmeti sunar. Yetkili servis değildir.
        Sadece garantisi olmayan cihazlara hizmet verilmektedir.
      </p>
      <a
        href="tel:+9050 65019612"
        className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition mt-4"
      >
        Şimdi Ara
      </a>
      <MusteriYorumlari />
    </main>
  );
}

function MusteriYorumlari() {
  const yorumlar = [
    {
      ad: "Ali Y.",
      yorum: "Çok hızlı ve güvenilir hizmet, memnun kaldım.",
      puan: 5,
    },
    {
      ad: "Zeynep K.",
      yorum: "Klimamı tamir ettirdim, fiyat uygundu.",
      puan: 4,
    },
    {
      ad: "Mustafa A.",
      yorum: "Buzdolabı tamiri beklediğimden uzun sürdü.",
      puan: 3,
    },
    { ad: "Ayşe M.", yorum: "Teknisyen çok bilgiliydi, teşekkürler.", puan: 5 },
    {
      ad: "Fatma D.",
      yorum: "Servis biraz geç geldi ama sorun çözüldü.",
      puan: 4,
    },
    { ad: "Emre S.", yorum: "Memnun kalmadım, tekrar arıza yaptı.", puan: 2 },
    { ad: "Canan H.", yorum: "Mükemmel hizmet!", puan: 5 },
    { ad: "Kerem C.", yorum: "Ortalama bir servis deneyimi yaşadım.", puan: 3 },
    {
      ad: "Selin T.",
      yorum: "Tavsiye ederim, işlerini iyi yapıyorlar.",
      puan: 5,
    },
    { ad: "Burak B.", yorum: "İletişim konusunda eksikleri var.", puan: 3 },
    { ad: "Cemre Z.", yorum: "Fiyat/performans açısından başarılı.", puan: 4 },
    { ad: "Tayfun E.", yorum: "Biraz pahalı ama kaliteli hizmet.", puan: 4 },
    { ad: "Gizem Ş.", yorum: "Sorunum hala devam ediyor.", puan: 2 },
    {
      ad: "Yusuf R.",
      yorum: "Çok memnun kaldım, tekrar tercih ederim.",
      puan: 5,
    },
    { ad: "Derya N.", yorum: "İşlerini titizlikle yaptılar.", puan: 5 },
    { ad: "Hakan U.", yorum: "Servis geç geldi.", puan: 2 },
    { ad: "Melis L.", yorum: "Her şey yolundaydı, teşekkürler.", puan: 5 },
    { ad: "Onur İ.", yorum: "Çözüm odaklı ekip, memnun kaldım.", puan: 4 },
  ];

  return (
    <section className="bg-white-200 text-gray-400 px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Müşteri Yorumları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {yorumlar.map((item, index) => (
          <div
            key={index}
            className="bg-white text-[#0A1D56] p-4 rounded shadow"
          >
            <h3 className="font-semibold text-lg">{item.ad}</h3>
            <p className="italic mb-2">"{item.yorum}"</p>
            <div className="text-sm text-yellow-500">
              {"★".repeat(item.puan)}
              {"☆".repeat(5 - item.puan)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
