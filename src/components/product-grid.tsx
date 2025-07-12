"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-cards";

const products = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: 25,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description:
      "Nasi Goreng Spesial dengan bumbu rahasia dan bahan berkualitas tinggi.",
    category: "Makanan",
  },
  {
    id: 2,
    name: "Nasi Uduk",
    price: 18,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description: "Nasi Uduk dengan santan kelapa yang kaya dan bumbu khas.",
    category: "Makanan",
  },
  {
    id: 3,
    name: "Ayam Goreng Kalasan",
    price: 12,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description:
      "Ayam Goreng Kalasan dengan bumbu rempah yang kaya dan rasa yang menggugah selera.",
    category: "Pedas",
  },
  {
    id: 4,
    name: "Ayam Gepuk",
    price: 15,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description:
      "Ayam Gepuk dengan bumbu khas yang pedas dan menggugah selera.",
    category: "Pedas",
  },
  {
    id: 5,
    name: "Sate Babi",
    price: 22,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description:
      "Sate Babi dengan bumbu kacang yang kaya rasa dan daging yang empuk.",
    category: "Sate",
  },
  {
    id: 6,
    name: "Sate Ayam",
    price: 16,
    image:
      "https://preview-accessible-storefront-kzmnocumnx7ckgy6exrn.vusercontent.net/placeholder.svg?height=300&width=300",
    description:
      "Sate Ayam dengan bumbu kacang yang lezat dan daging ayam yang empuk.",
    category: "Sate",
  },
];

export function ProductGrid() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Produk Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Produk alami yang dipilih dengan cermat untuk gaya hidup sehat Anda
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 min-h-[48px] ${
                isActive
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
        {/* Reset Button */}
        <button
          onClick={() => setSelectedCategories([])}
          className="px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Reset Filter
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
