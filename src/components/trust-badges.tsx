import { Shield, Truck, Heart, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Penjual Terpercaya",
    description: "Kami menjamin kualitas dan keamanan setiap pesanan Anda.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Pesanan Anda tiba tepat waktu dengan layanan terpercaya.",
  },
  {
    icon: Heart,
    title: "Bisnis Keluarga",
    description: "Dikelola dengan cinta dan dedikasi untuk kepuasan Anda.",
  },
  {
    icon: Clock,
    title: "Respon Kilat",
    description: "Tim kami siap membantu Anda dengan cepat dan ramah.",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Mengapa Pilih Kami?
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Kami berkomitmen untuk memberikan yang terbaik untuk Anda
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className="text-center p-3 space-y-2">
              <div className="w-14 h-14 bg-orange-50 rounded-full mx-auto flex items-center justify-center">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="font-medium text-gray-800 text-base">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
