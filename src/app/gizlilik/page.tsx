import Link from "next/link";

export default function Gizlilik() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-[#0A1D56] text-yellow-400">
      <h1 className="text-3xl font-bold mb-4 text-yellow-300">Gizlilik Politikası</h1>
      <p className="mb-4 text-yellow-200">
        Gizliliğinize önem veriyoruz.
      </p>
      <p className="text-yellow-200">
        Tüm hakları saklıdır.
      </p>
      <p className="text-sm text-yellow-300 mt-6 text-center">
        Bu web sitesi özel teknik servis hizmeti sunar. Yetkili servis değildir. Sadece garantisi olmayan cihazlara hizmet verilmektedir.
      </p>

      <Link href="/" className="mt-6 text-yellow-300 underline hover:text-yellow-400 w-max">
        Ana Sayfaya Dön
      </Link>
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

