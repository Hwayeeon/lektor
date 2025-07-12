import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-14 pb-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Tentang */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400 mb-3">
            PO Galang Dana
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Program pemesanan makanan yang dibuat untuk mendukung kegiatan
            sosial dan pelayanan di lingkungan Gereja Maria Bunda Karmel. Setiap
            pembelian Anda ikut berkontribusi bagi sesama.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-3">
            Kontak Kami
          </h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
              <span>Gereja Maria Bunda Karmel, Jakarta Barat</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-orange-400" />
              <span>+62 858-8521-2427</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-orange-400" />
              <span>hello@po-galang-dana.com</span>
            </li>
          </ul>
        </div>

        {/* Jam Operasional */}
        <div>
          <h4 className="text-lg font-semibold text-orange-400 mb-3">
            Jam Operasional
          </h4>
          <div className="flex items-start gap-3 text-gray-300 text-sm">
            <Clock className="h-5 w-5 text-orange-400 mt-0.5" />
            <div>
              <p>Senin - Jumat: 09.00 - 20.00 WIB</p>
              <p>Sabtu - Minggu: Libur</p>
              <p className="text-gray-500 text-xs mt-1">
                Pesanan akhir pekan akan diproses pada hari kerja berikutnya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PO Galang Dana &mdash; Dibuat dengan
          cinta dan semangat pelayanan.
        </p>
      </div>
    </footer>
  );
}
