import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'İletişim sayfası'
}

export default function Iletisim() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">İletişim</h1>
      <p className="mb-4 text-gray-100">
        Mustafa Taşlıalan :05065019612
        <br />
        Silifke/Mersin
      </p>
      <p className="text-gray-100">
        Müşteri memnuniyeti önceliğimizdir.
      </p>
    <div className="flex justify-center mt-4">
        <a
          href="tel:+905065019612"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-4 py-2 rounded-lg text-sm md:text-base transition"
        >
          Hemen Ara
        </a>
      </div>

      <Link href="/" className="mt-6 text-white-200 underline hover:text-yellow-200 w-max">
        Ana Sayfaya Dön
      </Link>
    
      
    
    </main>
   
  );
}

