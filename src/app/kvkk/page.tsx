import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK",
  description: "KVKK",
};

export default function KVKK() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-900 text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">KVKK</h1>
      <p className="mb-4 text-white-200">
   
      </p>
      <p className="text-yellow-200"></p>

      <Link
        href="/"
        className="mt-6 text-white-200 underline hover:text-yellow-400 w-max"
      >
        Ana Sayfaya Dön
      </Link>
  
    </main>
  );
}


