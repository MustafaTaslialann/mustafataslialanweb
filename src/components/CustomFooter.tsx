import Link from "next/link";
import React from "react";


export default function CustomFooter() {
  
  return (
    <footer className="bg-gray-900 text-gray-100 p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm md:text-base">
        
           <Link href="/">Ana Sayfa</Link>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/iletisim">İletişim</Link>
        <Link href="/kvkk" className="hover:underline">KVKK</Link>
        <Link href="/gizlilik" className="hover:underline">Gizlilik Politikası</Link>
        <span className="text-yellow-400 font-semibold">Tek bir kötü hamle kırk iyi hamleyi boşa çıkarır.</span>

      </div>
     
      <p className="text-sm text-center text-gray-400 mt-2">
        © 2025 MustafaTaşlıalan. Tüm hakları saklıdır.
      </p>
    </footer>
    
  );

};

