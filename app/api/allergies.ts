import { NextApiRequest, NextApiResponse } from "next";
import { Category } from "../page";
type Data = {
    allergies: Allergie[];
}
type Allergie = {
    gerecht: Category;
    allergie: string;
}



export const getallergies = (allergie: string) => {
    const allergenen = [
      {
        gerecht: Category.Aperitief,
        gerechten: ['agua_de_valencia (alcohol)', 'orange_zip', 'tappas_platter (noten)', 'albondigas (vlees)'],
      },
      {
        gerecht: Category.Voorgerecht,
        gerechten: ['Spanakopita (/)'],
      },
      {
        gerecht: Category.Hoofdgerecht,
        gerechten: ['Cevapcici (vlees - neem veggie optie)'],
      },
      {
        gerecht: Category.Dessert,
        gerechten: ['Panna_Cotta (/)', 'Semifreddo (lactose)', 'Italian_Coffee (alcohol)'],
      },
    ];
  
    const allergies = allergenen.find((allergien) => allergien.gerecht === allergie)?.gerechten;
    return allergies || [];
  };
