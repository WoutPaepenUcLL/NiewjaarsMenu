'use client';
import {  getallergies } from '@/app/api/allergies';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const index = ({ params }: { params: { category: string } }) => {
  const [allergenen, setAllergenen] = React.useState<any[]|null>(null)
const router = useRouter();
  useEffect(() => {
    const fetchAllergenen = async () => {
      const response = await getallergies(params.category)
      setAllergenen(response!)
    }
    fetchAllergenen()
  }
    , [])
const handleTitleClicked = () => {
router.push("/")
}
  return (
    <main className="bg-cyan-100 min-h-screen p-8 font-mono">
      <h1 onClick={()=>handleTitleClicked()} className="text-5xl font-bold mb-4 text-cyan-800 text-center cursor-pointer">{params.category}</h1>
      <p className="text-center text-gray-500 mb-4">(Allergie-informatie)</p>

      <div className="bg-cyan-200 rounded-md p-4 transition transform hover:shadow-md">
        <h2 className="text-xl text-center font-semibold">{params.category}</h2>
        <ul className="list-disc list-inside">
          {/* Add your dish details here */}
        </ul>
      </div>

      <div className="flex flex-col justify-center mt-8">
        <h2 className="text-2xl font-semibold mb-2 text-center">Allergie-informatie</h2>
        <ul className="list-disc list-inside text-center">
          {allergenen?.map((allergie,index) => (
            <li key={index}>{allergie}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default index