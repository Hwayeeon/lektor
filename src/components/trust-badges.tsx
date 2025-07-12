import { Shield, Truck, Heart, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Trusted Seller",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: Heart,
    title: "Family Business",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Kenapa Memilih Kami?
        </h2>
        <p className="text-lg text-gray-600">
          Kepuasan Anda adalah prioritas kami
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div key={index} className="text-center space-y-3 p-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{badge.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
