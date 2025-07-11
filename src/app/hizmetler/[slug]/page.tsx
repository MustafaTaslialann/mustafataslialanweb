import { notFound } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .replace(/\s+/g, "-");
}

const hizmetler = {
  "beyaz-esya-servisi": "Beyaz Eşya Servisi hakkında detaylı bilgi almak için bize ulaşın.",
  "buzdolabi": "Buzdolabı servisi için profesyonel destek almak için bize ulaşın .",
  "camasir-makinesi": "Çamaşır makinesi tamir, bakım ve servis hizmeti almak  için bize ulaşın.",
  "bulasik-makinesi": "Bulaşık makinesi sorunları için uzman çözümler almak  için bize ulaşın .",
  "firin": "Fırın arızalarında yerinde servis imkanı almak için bize ulaşın.",
  "klima": "Klima bakım ve onarım hizmetleri almak  için bize ulaşın .",
  "kombi": "Kombi arızaları için güvenilir teknik servis almak için bize ulaşın .",
  "televizyon": "Televizyon arızaları için uzman teknik servis almak için bize ulaşın ."
};

export default function HizmetSayfasi({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const aciklama = hizmetler[slug];

  if (!aciklama) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto bg-[#0A1D56] rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 capitalize text-yellow-400">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-lg text-yellow-200 mb-8">{aciklama}</p>

      {/* ⚠️ Uyarı mesajı */}
      <p className="text-sm text-yellow-300 text-center mt-12">
        Bu web sitesi özel teknik servis hizmeti sunar. Yetkili servis değildir. Sadece garantisi olmayan cihazlara hizmet verilmektedir.
      </p>
     
       <MusteriYorumlari />
    </main>
  );
}
function MusteriYorumlari() {
  const yorumlar = [
    { ad: "Ali Y.", yorum: "Çok hızlı ve güvenilir hizmet, memnun kaldım.", puan: 5 },
    { ad: "Zeynep K.", yorum: "Klimamı tamir ettirdim, fiyat uygundu.", puan: 4 },
    { ad: "Mustafa A.", yorum: "Buzdolabı tamiri beklediğimden uzun sürdü.", puan: 3 },
    { ad: "Ayşe M.", yorum: "Teknisyen çok bilgiliydi, teşekkürler.", puan: 5 },
    { ad: "Fatma D.", yorum: "Servis biraz geç geldi ama sorun çözüldü.", puan: 4 },
    { ad: "Emre S.", yorum: "Memnun kalmadım, tekrar arıza yaptı.", puan: 2 },
    { ad: "Canan H.", yorum: "Mükemmel hizmet!", puan: 5 },
    { ad: "Kerem C.", yorum: "Ortalama bir servis deneyimi yaşadım.", puan: 3 },
    { ad: "Selin T.", yorum: "Tavsiye ederim, işlerini iyi yapıyorlar.", puan: 5 },
    { ad: "Burak B.", yorum: "İletişim konusunda eksikleri var.", puan: 3 },
    { ad: "Cemre Z.", yorum: "Fiyat/performans açısından başarılı.", puan: 4 },
    { ad: "Tayfun E.", yorum: "Biraz pahalı ama kaliteli hizmet.", puan: 4 },
    { ad: "Gizem Ş.", yorum: "Sorunum hala devam ediyor.", puan: 2 },
    { ad: "Yusuf R.", yorum: "Çok memnun kaldım, tekrar tercih ederim.", puan: 5 },
    { ad: "Derya N.", yorum: "İşlerini titizlikle yaptılar.", puan: 5 },
    { ad: "Hakan U.", yorum: "Servis geç geldi.", puan: 2 },
    { ad: "Melis L.", yorum: "Her şey yolundaydı, teşekkürler.", puan: 5 },
    { ad: "Onur İ.", yorum: "Çözüm odaklı ekip, memnun kaldım.", puan: 4 },
  ];

  return (
    <section className="bg-[#FFD700] text-[#0A1D56] px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Müşteri Yorumları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {yorumlar.map((item, index) => (
          <div key={index} className="bg-white text-[#0A1D56] p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{item.ad}</h3>
            <p className="italic mb-2">"{item.yorum}"</p>
            <div className="text-sm text-yellow-500">
              {"★".repeat(item.puan)}{"☆".repeat(5 - item.puan)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

