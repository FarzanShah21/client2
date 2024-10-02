import React from 'react';
import CategoryItem from './CategoryItem';

const categories = [
  { href: "/Men-Suits", name: "Men's Suits", imageUrl: "image/Men Suits.jpg" },
  { href: "/Jeans", name: "Jeans", imageUrl: "image/Jeans.jpg" },
  { href: "/T-Shirts", name: "T-Shirts", imageUrl: "image/T-Shirts.webp" },
  { href: "/Traditional", name: "Traditional Wear", imageUrl: "image/Traditional.jpg" },
  { href: "/Accessories", name: "Accessories", imageUrl: "image/Accesories.jfif" },
  { href: "/Sale", name: "Sale", imageUrl: "image/Sale.jpg" }
];

const Landingpage = () => {
  return (
    <div className='relative min-h-screen text-white bg-gray-100 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='text-center text-6xl sm:text-6xl font-bold text-emerald-700 mb-4'>
          Discover the Best of PAK-CLOTH HOUSE
        </h1>
        <p className='text-center text-xl text-gray-700 mb-12'>
          Elevate Your Wardrobe With Premium Quality & Stylish Clothing.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
