'use client'

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Baslik() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

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
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-900 shadow-md text-[#e8eceb]">
      <div className="mb-2 md:mb-0">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Beyaz Eşya Servis Hizmetleri
        </Link>
      </div>
      <nav className="flex flex-wrap gap-4 justify-center text-base font-medium">
        <Link href="/">Ana Sayfa</Link>
        <div className="relative group">
          <div className="flex items-center gap-1 hover:cursor-pointer" onClick={handleShowDropdown}>
            <button className="focus:outline-none hover:cursor-pointer">Hizmetlerimiz</button>
            <IoIosArrowDropdown />
          </div>

          {showDropdown && (
            <div className="absolute bg-white shadow-lg rounded p-2 z-10 min-w-[200px]">
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
          )}
        </div>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/iletisim">İletişim</Link>
      
      </nav>
    </header>
  );
}
