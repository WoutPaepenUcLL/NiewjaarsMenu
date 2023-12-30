import { Category } from "@/public/types/types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    allergies: Allergie[];
}
type Allergie = {
    gerecht: Category;
    allergie: any;
}



export const getallergies = (allergie: string) => {
    const allergenen = [
      {
        gerecht: Category.Aperitief,
        // gerechten: ['agua_de_valencia (alcohol)', 'orange_zip', 'tappas_platter (noten)', 'albondigas (vlees)'],
        gerechten: [
         { name: 'agua_de_valencia ',
          allergie: 'alcohol'},
          { name: 'orange_zip',
          allergie: '/'},
          { name: 'tappas_platter',
          allergie: 'noten'},
          { name: 'albondigas',
          allergie: 'vlees'},
        ]
      },
      {
        gerecht: Category.Voorgerecht,
        // gerechten: ['Spanakopita (/)'],
        gerechten: [
          { name: 'Spanakopita',
          allergie: '/'},
        ]
      },
      {
        gerecht: Category.Hoofdgerecht,
        // gerechten: ['Cevapcici (vlees - neem veggie optie)'],
        gerechten: [
          { name: 'Cevapcici',
          allergie: 'vlees'},
        ]
      },
      {
        gerecht: Category.Dessert,
        // gerechten: ['Panna_Cotta (/)', 'Semifreddo (lactose)', 'Italian_Coffee (alcohol)'],
        gerechten: [
          { name: 'Panna_Cotta',
          allergie: '/'},
          { name: 'Semifreddo',
          allergie: 'lactose'},
          { name: 'Italian_Coffee',
          allergie: 'alcohol'},
        ]
      },
    ];
  
    const allergies = allergenen.find((allergien) => allergien.gerecht === allergie)?.gerechten;
    return allergies || [];
  };
