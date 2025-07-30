import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Hakkımızda",
};

export default function Hakkimizda() {
  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-900 text-white-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Hakkımızda</h1>
      <p className="mb-4 text-gray-200"></p>
      <p className="mb-4 text-gray-200">
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
    <p className="text-gray-200">
       Github : https://github.com/MustafaTaslialann
      </p>
      <p className="text-gray-200">
        İnstagram: tslln.mustafa</p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-100">
  Özgeçmişim (PDF)
</h2>
<iframe
  src="/mustafa-taslialan-cv.pdf"
  width="100%"
  height="900px"
  className="border-2 border-gray-300 rounded-md"
/>

      <div></div>
      <Link
        href="/"
        className="mt-6 text-gray-100 underline hover:text-yellow-400 w-max"
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
