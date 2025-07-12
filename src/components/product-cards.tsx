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

  // Check if today is a weekend day
  const isWeekend = () => {
    const today = new Date().getDay();
    return today === 0 || today === 6; // Sunday or Saturday
  };

  const handleOrderClick = () => {
    if (isWeekend()) return;

    setIsOrdering(true);

    // Format WhatsApp message
    const message = `Hello! I want to pre-order:
  ${product.name}
  $${product.price}

Can you confirm availability and delivery? Thanks!`;

    const waUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;

    // Add a slight delay for UX feedback
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsOrdering(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-60 bg-gray-100">
        <Image
          src={product.image || "/images/fallback.jpg"}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-500">
            ${product.price}
          </span>
          <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">
            {product.category}
          </span>
        </div>

        {/* Order Button or Weekend Notice */}
        {isWeekend() ? (
          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md text-center">
            <p className="text-yellow-800 font-medium">Closed on Weekends</p>
            <p className="text-yellow-700 text-xs mt-1">
              Back to orders on Monday!
            </p>
          </div>
        ) : (
          <button
            onClick={handleOrderClick}
            disabled={isOrdering}
            className="w-full bg-green-500 text-white font-semibold py-3 px-5 rounded-lg hover:bg-green-600 disabled:bg-green-300 flex items-center justify-center gap-2 transition-colors duration-150 min-h-[48px]"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            {isOrdering ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Connecting to WhatsApp...
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                Order Now
              </>
            )}
          </button>
        )}

        <p className="text-center text-gray-500 text-xs">
          No sign-up required • Quick ordering
        </p>
      </div>
    </div>
  );
}
