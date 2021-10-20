import PinsaRomana from './assets/images/section-prodotti/prodotti/pinsa-romana.png';
import PinsaRomanaMini from './assets/images/section-prodotti/prodotti/pinsa-romana-mini.png';

const data = {
  products: [
    {
      name: 'Pinsa Romana',
      images: [PinsaRomana],
      description: "La vera Pinsa Romana. L'originale.",
      style: [
        {
          name: 'Pinsa Classica',
          ingredients: [
            'farina di frumento',
            'farina di riso',
            'farina di soia',
            'acqua',
            'olio evo',
            'lievito naturale',
            'sale',
          ],
          allergens: ['frumento (glutine)', 'soia'],
        },
        {
          name: 'Pinsa Integrale',
          ingredients: [
            'farina di frumento',
            'farina di riso',
            'farina di segale',
            'farina di avena',
            'farina di farro',
            'farina di soia',
            'acqua',
            'olio evo',
            'lievito naturale',
            'sale',
          ],
          allergens: ['frumento (glutine)', 'semi di sesamo', 'soia'],
        },
      ],
      weight: 240,
      dimensions: '20 x 33 cm',
      expiration: 50,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          md: 8,
          lg: 18,
        },
      ],
    },
    {
      name: 'Pinsa Romana S.G.',
      images: [PinsaRomana],
      description:
        "La vera Pinsa Romana senza Glutine. L'originale - ma senza glutine.",
      style: [
        {
          name: 'Pinsa Classica',
          ingredients: [
            'farina di quinoa',
            'fecola di patata',
            'maltodestrine',
            'fibra vegetale (barbabietola e psyllium)',
            'idrossipropilmetil-cellulosa',
            'proteine di pisello',
            'pasta acida di riso',
            'amido di mais',
            'lievito naturale',
            'olio evo',
            'acqua',
            'sale',
          ],
        },
      ],
      weight: 240,
      dimensions: '20 x 33 cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 24,
      isVegan: true,
      isGlutenFree: true,
      packageSizes: [
        {
          sm: 2,
          md: 8,
        },
      ],
    },
    {
      name: 'Pinsa Romana Mini',
      images: [PinsaRomanaMini],
      description: "La vera Pinsa Romana, mini. L'originale - peró mini.",
      style: [
        {
          name: 'Pinsa Classica',
          ingredients: [
            'farina di frumento',
            'farina di riso',
            'farina di soia',
            'acqua',
            'olio evo',
            'lievito naturale',
            'sale',
          ],
          allergens: ['frumento (glutine)', 'soia'],
        },
        {
          name: 'Pinsa Integrale',
          ingredients: [
            'farina di frumento',
            'farina di riso',
            'farina di segale',
            'farina di avena',
            'farina di farro',
            'farina di soia',
            'acqua',
            'olio evo',
            'lievito naturale',
            'sale',
          ],
          allergens: ['frumento (glutine)', 'semi di sesamo', 'soia'],
        },
      ],
      weight: 120,
      dimensions: '18 x 20 cm',
      expiration: 50,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 3,
          md: 8,
          lg: 20,
        },
        {
          sm: 2,

          lg: 25,
        },
      ],
    },
  ],
};
export default data;
