import { Phone, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-orange-200 shadow-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Main title with bold styling for the brand */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            PO Galang Dana
          </h1>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            Fresh & healthy meals — ready for delivery or pickup at church
          </p>

          {/* Contact and location info */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm text-gray-700 justify-center md:justify-start">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>Order via WhatsApp</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Pick up at MBK Church</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
