import Link from "next/link";
import React from "react";

const CustomFooter = () => {
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

  return (
    <footer className="bg-[#0A1D56] text-white p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>
        <Link href="/hakkimizda" className="hover:underline">
          Hakkımızda
        </Link>
        <Link href="/iletisim" className="hover:underline">
          İletişim
        </Link>
        <Link href="/gizlilik" className="hover:underline">
          Gizlilik Politikası
        </Link>
        <Link href="/kvkk" className="hover:underline">
          KVKK
        </Link>
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
        Bu web sitesi özel teknik servis hizmeti sunar. Yetkili servis değildir.
        Sadece garantisi olmayan cihazlara hizmet verilmektedir.
      </p>
    </footer>
  );
};

export default CustomFooter;
