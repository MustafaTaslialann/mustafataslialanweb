"use client";

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
  const hizmetBasliklari: Record<string, string> = {
    "beyaz-esya-servisi": "Beyaz Eşya Servisi",
    buzdolabi: "Buzdolabı",
    "camasir-makinesi": "Çamaşır Makinesi",
    "bulasik-makinesi": "Bulaşık Makinesi",
    firin: "Fırın",
    klima: "Klima",
    kombi: "Kombi",
    televizyon: "Televizyon",
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-900 shadow-md text-[#e8eceb]">
      <div className="mb-2 md:mb-0 text-center w-full md:w-auto ">
        <Link href="/" className="text-2xl font-bold tracking-wide block">
          Beyaz Eşya Servis Hizmetleri
        </Link>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center text-base font-medium relative">
        <Link href="/" onClick={() => setShowDropdown(false)}>
        Ana Sayfa</Link>
        

        <div className="relative">
          <div
            className="flex items-center gap-1 hover:cursor-pointer"
            onClick={handleShowDropdown}
          >
            <button className="focus:outline-none">Menü</button>
            <IoIosArrowDropdown />
          </div>

          {showDropdown && (
            <div className="absolute right-0 bg-white shadow-lg rounded p-2 z-10 min-w-[200px] text-[#0A1D56]">
              <div className="border-b mb-2 pb-2">
                <span className="block px-3 py-1 text-sm font-semibold text-gray-700">
                  Hizmetlerimiz
                </span>
                {services.map((service) => {
                  const slug = slugify(service);
                  return (
                    <Link
                      key={service}
                      href={`/hizmetler/${slug}`}
                      className="block px-3 py-1 hover:bg-[#FFC107] rounded"
                      onClick={() => setShowDropdown(false)}
                    >
                      {service}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/hakkimizda"
                className="block px-3 py-2 hover:bg-[#FFC107] rounded"
                onClick={() => setShowDropdown(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="block px-3 py-2 hover:bg-[#FFC107] rounded"
                onClick={() => setShowDropdown(false)}
              >
                İletişim
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
