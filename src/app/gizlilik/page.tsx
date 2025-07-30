import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Gizlilik Politikası",
};

export default function Gizlilik() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-900 text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-white-200">
        Gizlilik Politikası
      </h1>
      <p className="mb-4 text-white-200">
    Gizliliğinize önem veriyoruz Bilgileriniz 3.taraf şahıslarıyla paylaşılmamaktadır.
      </p>
      <p className="text-white-200">Tüm hakları saklıdır.</p>

      <Link
        href="/"
        className="mt-6 text-white-300 underline hover:text-yellow-400 w-max"
      >
        Ana Sayfaya Dön
      </Link>
     
    </main>
  );
}

