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
    <section className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-xl text-white p-8 md:p-12">
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Hubungi Kami</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Tim kami yang ramah siap membantu Anda dengan informasi produk, detail
          pengiriman, atau pertanyaan lainnya.
        </p>

        <button
          onClick={handleWhatsAppContact}
          className="bg-white text-orange-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-lg mx-auto min-h-[56px] shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="h-6 w-6" />
          Hubungi via WhatsApp
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Biasanya merespon dalam 2-5 menit</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Tersedia 9 AM - 8 PM setiap hari</span>
          </div>
        </div>
      </div>
    </section>
  );
}
