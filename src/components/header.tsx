import { Phone, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b-2 border-orange-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            PO Galang Dana
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Fresh, Natural Products Delivered to Your Door
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-600" />
              <span>Order Via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span>Ambil di gereja</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
