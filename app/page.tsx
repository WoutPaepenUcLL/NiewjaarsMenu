'use client';
import { Category } from '@/public/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();
  const handleItemClick = (category:Category) => {
    router.push(`/gang/${category}/`);
  };
  return (
    <main className="bg-cyan-100 min-h-screen p-8">
    <h1 className="text-5xl font-bold mb-4 text-cyan-800 text-center">Nieuwjaars Menu</h1>
    <p className="text-lg text-cyan-800 mb-2 text-center">Scouts Herent</p>
    <p className="text-lg text-cyan-800 mb-8 text-center">2023-2024</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Aperitief */}
        <div onClick={()=>handleItemClick(Category.Aperitief)} className="menu-category">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl  font-semibold">Aperitief</h2>
            <p className="text-center text-gray-500 mb-4 opacity-40">(Klik voor allergenen)</p>
            <div className="flex items-center space-x-2">
              {/* Uncomment the Image component when you have the actual images */}
              {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg' width={30} height={20} alt={''} /> */}
              <h3 className="text-lg text-cyan-800">Spanje</h3>
            </div>
          </div>
          <ul>
            <li>agua de valencia </li>
            <li>orange zip</li>
            <li>tappas platter </li>
            <li>albondigas</li>
          </ul>
        </div>

        {/* Voorgerecht */}
        <div onClick={()=>handleItemClick(Category.Voorgerecht)} className="menu-category">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Voorgerecht</h2>
            <p className="text-center text-gray-500 mb-4 opacity-40">(Klik voor allergenen)</p>

            <div className="flex items-center space-x-2">
              {/* Uncomment the Image component when you have the actual images */}
              {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg' width={30} height={20} alt={''} /> */}
              <h3 className="text-lg text-cyan-800">Griekenland</h3>
            </div>
          </div>
          <ul>
            <li>Spanakopita</li>
          </ul>
        </div>

        {/* Hoofdgerecht */}
        <div onClick={()=>handleItemClick(Category.Hoofdgerecht)} className="menu-category">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Hoofdgerecht</h2>
            <p className="text-center text-gray-500 mb-4 opacity-40">(Klik voor allergenen)</p>

            <div className="flex items-center space-x-2">
              {/* Uncomment the Image component when you have the actual images */}
              {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg' width={30} height={20} alt={''} /> */}
              <h3 className="text-lg text-cyan-800">Kroatië</h3>
            </div>
          </div>
          <ul>
            <li>Cevapcici </li>
          </ul>
        </div>

        {/* Dessert */}
        <div onClick={()=>handleItemClick(Category.Dessert)} className="menu-category">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Dessert</h2>
            <p className="text-center text-gray-500 mb-4 opacity-40">(Klik voor allergenen)</p>

            <div className="flex items-center space-x-2">
              {/* Uncomment the Image component when you have the actual images */}
              {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' width={30} height={20} alt={''} /> */}
              <h3 className="text-lg text-cyan-800">Italië</h3>
            </div>
          </div>
          <ul>
            <li>Panna Cotta</li>
            <li>Semifreddo</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
