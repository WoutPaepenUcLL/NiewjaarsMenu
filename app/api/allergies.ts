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
          allergie: 'alcohol',
        description: ' Een verfrissende Spaanse cocktail met sinaasappelsap, cava, wodka en gin, om de feeststemming te starten.' },
          { name: 'orange_zip',
          allergie: '/',
        description: 'Een bruisende en fruitige sinaasappelcocktail met een pittige twist, perfect voor een sprankelend begin van de avond.'},
          { name: 'tappas_platter',
          allergie: 'noten',
        description:'Een smakelijke selectie van Spaanse hapjes, waaronder olijven, chorizo, en Manchego-kaas, om te delen en te genieten.'},
          { name: 'albondigas',
          allergie: 'vlees',
        description: 'Smaakvolle Spaanse gehaktballetjes, geserveerd in een pittige tomatensaus voor een verrukkelijke start van de maaltijd.'},
        ]
      },
      {
        gerecht: Category.Voorgerecht,
        // gerechten: ['Spanakopita (/)'],
        gerechten: [
          { name: 'Spanakopita',
          allergie: '/',
        description: 'Een heerlijk Grieks gerecht met laagjes knapperig filodeeg gevuld met spinazie en feta, gebakken tot perfectie.'},
        ]
      },
      {
        gerecht: Category.Hoofdgerecht,
        // gerechten: ['Cevapcici (vlees - neem veggie optie)'],
        gerechten: [
          { name: 'Cevapcici',
          allergie: 'vlees',
        description: 'Sappige en gekruide Balkan-gehaktrolletjes, gegrild tot in de perfectie en geserveerd met verse kruiden en een zijdezachte saus. Ook beschikbaar in een vegetarische optie.'},
        ]
      },
      {
        gerecht: Category.Dessert,
        // gerechten: ['Panna_Cotta (/)', 'Semifreddo (lactose)', 'Italian_Coffee (alcohol)'],
        gerechten: [
          { name: 'Panna_Cotta',
          allergie: 'pistach noten',
        description: 'Een heerlijk Italiaans dessert met een zijdezachte textuur en een rijke frambozensmaak, geserveerd met een pistachnoten en honing.'},
          { name: 'Semifreddo',
          allergie: 'lactose, noten, chocolade',
        description: 'Een luchtig Italiaans ijsdessert, half bevroren en verrijkt met noten en chocolade voor een decadente smaakervaring.'},
          { name: 'Italian_Coffee',
          allergie: 'alcohol',
        description: 'Een heerlijke Italiaanse koffiecocktail met een scheutje amaretto en een vleugje cacao, perfect om de maaltijd af te sluiten.'},
        ]
      },
    ];
  
    const allergies = allergenen.find((allergien) => allergien.gerecht === allergie)?.gerechten;
    return allergies || [];
  };
