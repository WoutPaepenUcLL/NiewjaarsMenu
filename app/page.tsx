'use client';
import { Category } from '@/public/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();

  const handleItemClick = (category: Category) => {
    router.push(`/gang/${category}/`);
  };
  return (
    <main className="bg-gray-900 text-white min-h-screen  2xsm:pt-8">
      <h1 className="text-5xl font-bold mb-4 text-center">Nieuwjaars Menu</h1>
      <p className="text-lg mb-2 text-center">Scouts Herent</p>
      <p className="text-lg mb-8 text-center">2023-2024</p>

      <div className="grid gap-8 xsm:px-8  md:grid-cols-2 lg:grid-cols-4">
        {/* Aperitief */}
        <div
          onClick={() => handleItemClick(Category.Aperitief)}
          className="menu-category bg-gray-800 p-4 rounded-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Aperitief</h2>
            <p className="text-center text-gray-400 mb-4 opacity-70">(Klik voor details)</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg">Spanje</h3>
            </div>
          </div>
          <ul className="text-gray-400">
            <li>Agua de Valencia</li>
            <li>Orange Zip</li>
            <li>Tapas Platter</li>
            <li>Albondigas</li>
          </ul>
        </div>

        {/* Voorgerecht */}
        <div
          onClick={() => handleItemClick(Category.Voorgerecht)}
          className="menu-category bg-gray-800 p-4 rounded-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Voorgerecht</h2>
            <p className="text-center text-gray-400 mb-4 opacity-70">(Klik voor details)</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg">Griekenland</h3>
            </div>
          </div>
          <ul className="text-gray-400">
            <li>Spanakopita</li>
          </ul>
        </div>

        {/* Hoofdgerecht */}
        <div
          onClick={() => handleItemClick(Category.Hoofdgerecht)}
          className="menu-category bg-gray-800 p-4 rounded-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Hoofdgerecht</h2>
            <p className="text-center text-gray-400 mb-4 opacity-70">(Klik voor details)</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg">Kroatië</h3>
            </div>
          </div>
          <ul className="text-gray-400">
            <li>Cevapcici</li>
          </ul>
        </div>

        {/* Dessert */}
        <div
          onClick={() => handleItemClick(Category.Dessert)}
          className="menu-category bg-gray-800 p-4 rounded-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Dessert</h2>
            <p className="text-center text-gray-400 mb-4 opacity-70">(Klik voor details)</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg">Italië</h3>
            </div>
          </div>
          <ul className="text-gray-400">
            <li>Panna Cotta</li>
            <li>Semifreddo</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

