"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const handleWhatsAppContact = () => {
    const message =
      "Halo, Saya ingin menghubungi tim customer service untuk pertanyaan mengenai produk. Terima kasih!";
    const whatsappUrl = `https://wa.me/6285885212427?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-orange-700/95 rounded-xl text-white px-6 py-10 md:px-14 md:py-16 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Ada Pertanyaan? Hubungi Kami
        </h2>
        <p className="text-base md:text-lg text-orange-100 mb-8">
          Customer service kami siap membantu Anda setiap hari dari pukul 09.00
          hingga 20.00. Jangan ragu untuk menghubungi kami melalui WhatsApp atau
          email.
        </p>

        <button
          onClick={handleWhatsAppContact}
          className="bg-white text-orange-700 hover:bg-orange-100 transition duration-200 font-semibold px-6 py-3 md:py-4 md:px-8 rounded-lg inline-flex items-center gap-3 shadow-md hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-base md:text-lg">Chat via WhatsApp</span>
        </button>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-orange-100/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-200" />
            <span>Respon cepat: 2-5 menit</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-200" />
            <span>Jam Operasional: 09.00 - 20.00 WIB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
