import Link from "next/link";
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

const services = [
  "Beyaz Eşya Servisi",
  "Buzdolabı",
  "Çamaşır Makinesi",
  "Bulaşık Makinesi",
  "Fırın",
  "Klima",
  "Kombi",
  "Televizyon"
];

export default function Anasayfa() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">
      <Baslik />
      <section className="hero p-8 text-center bg-[#0A1D56] text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Beyaz Eşya Servisi</h1>
        <p className="text-lg md:text-xl mb-6">Garantisi olmayan cihazlar için profesyonel bakım, onarım ve tamir hizmetleri.</p>
        <Link
          href="/teklif-al"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition"
        >
          Hemen Ara
        </Link>
      </section>
      <Footer />
       <MusteriYorumlari />
    </main>
  );
}


function Baslik() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-[#FFD700] shadow-md text-[#0A1D56]">
      <div className="mb-2 md:mb-0">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Beyaz Eşya Servis Hizmetleri
        </Link>
      </div>
      <nav className="flex flex-wrap gap-4 justify-center text-base font-medium">
        <Link href="/">Ana Sayfa</Link>
        <div className="relative group">
          <button className="focus:outline-none">Hizmetlerimiz</button>
          <div className="absolute bg-white shadow-lg rounded hidden group-hover:block p-2 z-10 min-w-[200px]">
            {services.map((service) => {
  const slug = slugify(service);
  return (
    <Link
      key={service}
      href={`/hizmetler/${slug}`}
      className="block px-3 py-2 hover:bg-[#FFC107] text-[#0A1D56] rounded"
    >
      {service}
    </Link>
  );
})}
          </div>
        </div>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/iletisim">İletişim</Link>
        <Link href="/gizlilik">Gizlilik Politikası</Link>
        <Link href="/kvkk">KVKK</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A1D56] text-white p-6 mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base">
        <Link href="/" className="hover:underline">Ana Sayfa</Link>
        <Link href="/hakkimizda" className="hover:underline">Hakkımızda</Link>
        <Link href="/iletisim" className="hover:underline">İletişim</Link>
        <Link href="/gizlilik" className="hover:underline">Gizlilik Politikası</Link>
        <Link href="/kvkk" className="hover:underline">KVKK</Link>
        {services.map((service) => {
  const slug = slugify(service);
  return (
    <Link
      key={service}
      href={`/hizmetler/${slug}`}
      className="hover:underline"
    >
      {service}
    </Link>
  );
})}
      </div>
      <p className="text-sm text-yellow-300 mt-4 text-center">
        Bu web sitesi özel teknik servis hizmeti sunar. Yetkili servis değildir. Sadece garantisi olmayan cihazlara hizmet verilmektedir.
      </p>
    </footer>
    
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

