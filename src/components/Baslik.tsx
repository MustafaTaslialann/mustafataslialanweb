"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Baslik() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-900 shadow-md text-[#e8eceb]">
      <div className="mb-2 md:mb-0 text-center w-full md:w-auto">
        <Link href="/" className="text-2xl font-bold tracking-wide block">
          Mustafa Taşlıalan Web Sitesi
        </Link>
         <span className="text-yellow-400 font-semibold">Tek bir kötü hamle kırk iyi hamleyi boşa çıkarır.</span>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center text-base font-medium relative">
        <Link href="/" onClick={() => setShowDropdown(false)}>
          Ana Sayfa
        </Link>
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
      </nav>
    </header>
  );
}
