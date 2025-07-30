import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "Anasayfa",
};

export default function Anasayfa() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 justify-center">
          Mustafa Taşlıalan Web Sitesi
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Mustafa Taşlıalan Web Sitesine hoşgeldiniz burada sizlere kendimi
          tanıtacağım.Bilgisayar Mühendisi olarak Web sitesi hizmetlerinde,Otomasyon hizmetleri,Blog yazarlığı,Oyun geliştirme hizmetleriyle sizlere daha iyi bir hizmet vermek için bu web sitesini oluşturdum.
        </p>
        <Link
          href="/teklif-al"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition"
        >
          Hemen Randevu Al
        </Link>

        <a
          href="tel:+905065019612"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition mt-4"
        >
          Şimdi Ara
        </a>
      </section>
      <p className="text-lg md:text-xl mb-6">
        Ben Mustafa Taşlıalan. 2000 yılında Mersin’in Silifke ilçesinde doğdum,
        aslen Gülnarlıyım. 2023 yılında Hatay İskenderun Teknik Üniversitesi
        Bilgisayar Mühendisliği bölümünden mezun oldum. Veri analizi, yazılım
        geliştirme ve proje yönetimi alanlarında kendimi geliştirmeye devam
        ediyorum. 2024 yılı başından 2025 Nisan’a kadar İçtaş Endüstriyel
        A.Ş.’de Veri Girişi ve Raporlama Uzmanı olarak görev aldım. Bu süreçte
        büyük ölçekli sanayi projelerinde veri entegrasyonu, Excel ve SQL ile
        raporlama, proje sunumları gibi kritik görevlerde aktif rol üstlendim.
        Şu anda Mersin Teknopark bünyesindeki Eterna şirketinde staj yapıyorum.
        Burada Yapay zekâ ile veri analizi, AI model raporlaması ve HTML ile web
        sitesi geliştirme gibi alanlarda çalışmalar yürütüyorum. Bu deneyim, hem
        teknik becerilerimi pekiştiriyor hem de yapay zekâ tabanlı projelere
        olan ilgimi daha da artırıyor. Veri odaklı düşünme, takım çalışması ve
        çözüm üretme yeteneklerimi sahada kullanma fırsatı bulduğum her görevde;
        iş süreçlerine değer katmayı, yenilikçi teknolojiler üretmeyi
        hedefliyorum. Boş zamanlarımda satranç oynamayı, yeni yerler keşfetmeyi
        severim.
      </p>
    </main>
  );
}
