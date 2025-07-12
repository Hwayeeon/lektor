"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-cards";

const products = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: 25,
    image:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    description: "Nasi goreng dengan bumbu spesial dan bahan segar pilihan.",
    category: "Makanan",
  },
  {
    id: 2,
    name: "Nasi Uduk",
    price: 18,
    image:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    description: "Nasi uduk harum dengan santan asli dan rempah khas.",
    category: "Makanan",
  },
  {
    id: 3,
    name: "Ayam Goreng Kalasan",
    price: 12,
    image: "/images/ayam-kalasan.jpg",
    description:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    category: "Pedas",
  },
  {
    id: 4,
    name: "Ayam Gepuk",
    price: 15,
    image:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    description: "Ayam gepuk pedas dengan sambal khas yang nendang.",
    category: "Pedas",
  },
  {
    id: 5,
    name: "Sate Babi",
    price: 22,
    image:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    description: "Sate babi empuk dengan bumbu kacang kental nan lezat.",
    category: "Sate",
  },
  {
    id: 6,
    name: "Sate Ayam",
    price: 16,
    image:
      "https://okutimurpos.bacakoran.co/upload/0e2a0c221312f77847683427dc7bdfaa.jpg",
    description: "Sate ayam juicy dengan saus kacang yang nikmat.",
    category: "Sate",
  },
];

export function ProductGrid() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Get unique categories from products
  const categories = [...new Set(products.map((item) => item.category))];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Filter products based on selected categories
  const displayedProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((item) => selectedCategories.includes(item.category));

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Menu Kami
        </h2>
        <p className="mt-2 text-gray-600 text-base max-w-xl mx-auto">
          Pilihan makanan sehat dan lezat untuk hari Anda
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-5 py-2 rounded-lg font-medium text-base transition-colors duration-150 ${
                isSelected
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-orange-100 hover:border-orange-400"
              }`}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
        <button
          onClick={() => setSelectedCategories([])}
          className="px-5 py-2 rounded-lg font-medium text-base bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-150"
        >
          Hapus Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
