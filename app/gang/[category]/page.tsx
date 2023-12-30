'use client';
import { getallergies } from '@/app/api/allergies';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Index = ({ params }: { params: { category: string } }) => {
  const [allergenen, setAllergenen] = React.useState<any[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAllergenen = async () => {
      const response = await getallergies(params.category);
      setAllergenen(response!);
      console.log(response);
    };
    fetchAllergenen();
  }, []);

  const handleTitleClicked = () => {
    router.push('/');
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8 font-mono">
      <h1
        onClick={handleTitleClicked}
        className="text-5xl font-bold mb-4 text-center cursor-pointer"
      >
        {params.category}
      </h1>
      <p className="text-center text-gray-500 mb-4">(Allergie-informatie)</p>

     

      <div className="flex flex-col justify-center mt-8">
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
      <tr key={allergie.name} className="hover:bg-gray-100 transition duration-300">
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
