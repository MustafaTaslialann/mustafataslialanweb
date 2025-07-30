"use client";

import { useState } from "react";

export default function TeklifAlPage() {
  const [form, setForm] = useState({ ad: "", telefon: "", aciklama: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Bilgiler alındı! Teşekkür ederiz.");
  }

 return (
  <main className="min-h-screen max-w-xl mx-auto p-6 bg-gray-900 rounded shadow mt-8 text-gray-100">
    <h1 className="text-2xl font-bold mb-4 text-yellow-300">Teklif Al</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="ad"
        type="text"
        placeholder="Adınız Soyadınız"
        value={form.ad}
        onChange={handleChange}
        className="w-full border border-yellow-400 bg-[#0A1D56] text-yellow-300 p-2 rounded placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        required
      />
      <input
        name="telefon"
        type="tel"
        placeholder="Telefon Numaranız"
        value={form.telefon}
        onChange={handleChange}
        className="w-full border border-yellow-400 bg-[#0A1D56] text-yellow-300 p-2 rounded placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        required
      />
      <textarea
        name="aciklama"
        placeholder="Kısaca hizmet ihtiyacınız..."
        value={form.aciklama}
        onChange={handleChange}
        className="w-full border border-yellow-400 bg-[#0A1D56] text-yellow-300 p-2 rounded placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        rows={4}
      ></textarea>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-[#0A1D56] font-semibold px-4 py-2 rounded transition w-full"
      >
        Gönder
      </button>

      <a
        href="tel:+905065019612"
        className="bg-yellow-400 hover:bg-yellow-300 text-[#0A1D56] font-semibold px-4 py-2 rounded transition block text-center w-full"
      >
        Şimdi Ara
      </a>
    </form>

   

    
  </main>
);

}

