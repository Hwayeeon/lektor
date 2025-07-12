import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">
              PO Galang Dana
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              temporibus consectetur sint inventore eveniet dolorum doloribus
              est quo libero porro, beatae ipsam necessitatibus, vero numquam
              consequatur enim eos tempora eaque.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">
              Contact Information
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>Gereja Maria Bunda Karmel</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span>+62 858-8521-2427</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span>hello@po-galang-dana.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">
              Jam Operasional
            </h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p>Senin - Jumat: 9:00 AM - 8:00 PM</p>
                  <p>Sabtu - Minggu: Tutup</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Pesanan akhir pekan akan diproses pada hari Senin
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PO Galang Dana. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
