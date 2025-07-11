import Link from "next/link";

export default function Baslik() {

    
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
  "Televizyon",
];

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
