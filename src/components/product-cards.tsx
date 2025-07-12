"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isOrdering, setIsOrdering] = useState(false);

  // Check if it's weekend (Saturday = 6, Sunday = 0)
  const isWeekend = () => {
    const day = new Date().getDay();
    return day === 0 || day === 6;
  };

  const handleWhatsAppOrder = () => {
    if (isWeekend()) return;

    setIsOrdering(true);

    const message = `Hi! I'd like to pre-order:

📦 ${product.name}
💰 $${product.price}

Please confirm availability and delivery details. Thank you!`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;

    // Simulate brief loading state for better UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsOrdering(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-50">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-orange-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Order Button */}
        {isWeekend() ? (
          <div className="space-y-3">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-amber-800 font-medium">Weekend Break 🌻</p>
              <p className="text-amber-700 text-sm mt-1">
                We&apos;re taking a rest! Orders resume Monday.
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={handleWhatsAppOrder}
            disabled={isOrdering}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-lg min-h-[56px] shadow-lg hover:shadow-xl"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            {isOrdering ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Opening WhatsApp...
              </>
            ) : (
              <>
                <MessageCircle className="h-6 w-6" />
                Order via WhatsApp
              </>
            )}
          </button>
        )}

        <p className="text-sm text-gray-500 text-center">
          No registration needed • Instant ordering
        </p>
      </div>
    </div>
  );
}
