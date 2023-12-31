'use client';
import { getallergies } from '@/app/api/allergies';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Index = ({ params }: { params: { category: string } }) => {
  const [allergenen, setAllergenen] = React.useState<any[] | null>(null);
  const [activeGerecht, setActiveGerecht] = React.useState<any | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchAllergenen = async () => {
      const response = await getallergies(params.category);
      setAllergenen(response!);
      console.log(response);
    };
    setActiveGerecht(null)
    fetchAllergenen();
  }, []);

  const handleTitleClicked = () => {
    router.push('/');
  };
  const handleitemClicked = (allergie: any) => {
    setActiveGerecht(allergie)
  }
  const renderStrong = (text: any) => {
    return <span><strong>{`${text.name}: `}</strong>{text.description}</span>;
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen font-mono select-none">
      <h1
        onClick={handleTitleClicked}
        className="text-5xl font-bold mb-4 text-center cursor-pointer"
      >
        {params.category}
      </h1>
      


     {activeGerecht?<div className="m-0 top-50 fixed z-5 w-full">
      {/* a x button to set activeGerecht to null */}
  
      <p className="activeGerecht">{renderStrong(activeGerecht)}</p>
      <button onClick={()=>setActiveGerecht(null)} className="mb-2 p-2 rounded-md absolute self-end">X</button>
      </div>:null
      }

      <div className="z-0 flex flex-col justify-center mt-8">
        {window.screen.width>=600?<div className="flex justify-center mb-4 z-1">
          <table className="min-w-full border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Naam</th>
                <th className="px-6 py-3 text-left">Beschrijving</th>
              </tr>
            </thead>
            <tbody>
              {allergenen?.map((allergie) => (
                <tr
                  key={allergie.name}
                  className="hover:bg-gray-100 hover:text-black transition duration-300"
                >
                  <td className="border px-6 py-4">{allergie.name}</td>
                  <td className="border px-6 py-4">{allergie.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>:<div className="flex justify-center mb-4">
          <table className="min-w-full border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Naam</th>
                <th className="px-6 py-3 text-left">Beschrijving</th>
              </tr>
            </thead>
            <tbody>
              {allergenen?.map((allergie) => (
                <tr
                  key={allergie.name}
                  className="hover:bg-gray-100 hover:text-black transition duration-300"
                >
                  <td className="border px-6 py-4">{allergie.name}</td>
                  <td onClick={()=>handleitemClicked(allergie)} className="border px-6 py-4 hover:bg-slate-300 hover:text-black">klik hier voor uitleg gerecht</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
        <h2 className="text-2xl font-semibold mb-2 text-center">Allergie-informatie</h2>
        
        <table className="min-w-full border border-gray-300 shadow-sm rounded-lg overflow-hidden">
  <thead className="bg-gray-800 text-white">
    <tr>
      <th className="px-6 py-3 text-left">Naam</th>
      <th className="px-6 py-3 text-left">Allergie</th>
    </tr>
  </thead>
  <tbody>
    {allergenen?.map((allergie) => (
      <tr key={allergie.name} className="hover:bg-gray-100 hover:text-black transition duration-300">
        <td className="border px-6 py-4">{allergie.name}</td>
        <td className="border px-6 py-4">{allergie.allergie}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </main>
  );
};

export default Index;
