import PinsaRomana from './assets/images/section-prodotti/prodotti/pinsa-romana.png';
import PinsaRomanaMini from './assets/images/section-prodotti/prodotti/pinsa-romana-mini.png';
import Hamburger from './assets/images/section-prodotti/prodotti/hamburger.png';
import HamburgerMini from './assets/images/section-prodotti/prodotti/hamburger-mini.png';
import Pane2k from './assets/images/section-prodotti/prodotti/pane-in-cassetta.png';
import Pane1k from './assets/images/section-prodotti/prodotti/pane-in-cassetta-1kg.png';
import PinsaInPala from './assets/images/section-prodotti/prodotti/pinsa-in-pala.png';
import Pinsotto from './assets/images/section-prodotti/prodotti/pinsotto.png';
import PinsottoMini from './assets/images/section-prodotti/prodotti/pinsotto-mini.png';
import PinsottoMaxi from './assets/images/section-prodotti/prodotti/pinsotto-maxi.png';
import Teglia from './assets/images/section-prodotti/prodotti/teglia-romana.png';
import TegliaMezza from './assets/images/section-prodotti/prodotti/teglia-romana-mezza.png';
import Tonda from './assets/images/section-prodotti/prodotti/tonda-romana.png';

const data = {
  products: [
    {
      name: 'Pinsa Romana',
      category: 'pinsa',
      images: [PinsaRomana],
      style: [
        {
          name: 'Classica',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale',
          allergens: 'Frumento (glutine), soia',
        },
        {
          name: 'Integrale',
          ingredients:
            'Farina di frumento, farina di riso, farina di segale, farina di avena, farina di farro, farina di soia, acqua, olio evo, lievito naturale, sale',
          allergens: 'Frumento (glutine), semi di sesamo, soia',
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
      category: 'senzaGlutine',
      images: [PinsaRomana],
      style: [
        {
          name: 'Pinsa Gluten Free',
          ingredients:
            'farina di quinoa, fecola di patata, maltodestrine, fibra vegetale (barbabietola e psyllium), idrossipropilmetil-cellulosa, proteine di pisello, pasta acida di riso, amido di mais, lievito naturale, olio evo, acqua, sale',
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
      category: 'pinsa',
      images: [PinsaRomanaMini],
      style: [
        {
          name: 'Classica',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale',
          allergens: 'Frumento (glutine), soia',
        },

        {
          name: 'Integrale',
          ingredients:
            'Farina di frumento, farina di riso, farina di segale, farina di avena, farina di farro, farina di soia, acqua, olio evo, lievito naturale, sale',
          allergens: 'Frumento (glutine), semi di sesamo, soia',
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
      ],
    },

    {
      name: 'Pinsotto S.G.',
      category: 'senzaGlutine',
      images: [Pinsotto],
      style: [
        {
          name: 'Pinsotto Gluten Free',
          ingredients:
            'Farina di quinoa, fecola di patata, maltodestrine, fibra vegetale (barbabietola e psyllium), idrossipropilmetil-cellulosa, proteine di pisello, pasta acida di riso, amido di mais, lievito naturale, olio evo, acqua, sale',
        },
      ],
      weight: 120,
      dimensions: '13 x 13 cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 24,
      isVegan: true,
      isGlutenFree: true,
      packageSizes: [
        {
          sm: 1,
          md: 10,
        },
      ],
    },

    {
      name: 'Pinsotto',
      category: 'pinsotti',
      images: [Pinsotto],
      style: [
        {
          name: 'Classico',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
        {
          name: 'Integrale',
          ingredients:
            'farina di frumento, farina di riso, farina di segale, farina di avena, farina di farro, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), semi di sesamo, soia',
        },
      ],
      weight: 120,
      dimensions: '13 x 13 cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          md: 8,
          lg: 24,
        },
      ],
    },

    {
      name: 'Pinsotto Maxi',
      category: 'pinsotti',
      images: [PinsottoMaxi],
      style: [
        {
          name: 'Classico',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 150,
      dimensions: '15 x 15 cm',
      expiration: 30,
      cookingTime: 6,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          md: 8,
          lg: 24,
        },
      ],
    },
    {
      name: 'Pinsotto Mini',
      category: 'pinsotti',
      images: [PinsottoMini],
      style: [
        {
          name: 'Classico',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 50,
      dimensions: '8 x 8 cm',
      expiration: 30,
      cookingTime: 3,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 4,
          md: 8,
          lg: 24,
        },
      ],
    },
    {
      name: 'Tonda Romana',
      category: 'teglie',
      images: [Tonda],
      style: [
        {
          name: 'Classica',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 240,
      dimensions: '32 x 32cm',
      expiration: 50,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          md: 8,
        },
        {
          sm: 5,
          md: 2,
        },
      ],
    },
    {
      name: 'Pinsa in Pala',
      category: 'pinsa',
      images: [PinsaInPala],
      style: [
        {
          name: 'Classica',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 550,
      dimensions: '30 x 60cm',
      expiration: 50,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 4,
          lg: 4,
        },
      ],
    },
    {
      name: 'Teglia Romana',
      category: 'teglie',
      images: [Teglia],
      style: [
        {
          name: 'Classica',
          ingredients:
            'farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale.',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 1250,
      dimensions: '60 x 40cm',
      expiration: 20,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 10,
          lg: 1,
        },
      ],
    },
    {
      name: '1/2 Teglia Romana',
      category: 'teglie',
      images: [TegliaMezza],
      style: [
        {
          name: 'Classica',
          ingredients:
            'Farina di frumento, farina di riso, farina di soia, acqua, olio evo, lievito naturale, sale',
          allergens: 'Frumento (glutine), soia',
        },
      ],
      weight: 650,
      dimensions: '30 x 40cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          lg: 10,
        },
      ],
    },
    {
      name: 'Hamburger',
      category: 'hamburgers',
      images: [Hamburger],
      style: [
        {
          name: 'Classico',
          ingredients:
            'farina di frumento, latte in polvere, lievito di birra, acqua, olio evo, sale',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
        {
          name: 'Integrale',
          ingredients:
            'Integrale: farina di frumento, farina di segale, mix di cereali (avena, sesamo, semi di lino), latte in polvere, acqua, olio evo, lievito di birra, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
      ],
      weight: 100,
      dimensions: '10 x 10cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 6,
          lg: 6,
        },
      ],
    },
    {
      name: 'Hamburger Mini',
      category: 'hamburgers',
      images: [HamburgerMini],
      style: [
        {
          name: 'Classico',
          ingredients:
            'farina di frumento, latte in polvere, lievito di birra, acqua, olio evo, sale',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
        {
          name: 'Integrale',
          ingredients:
            'Farina di frumento, farina di segale, mix di cereali (avena, sesamo, semi di lino), latte in polvere, acqua, olio evo, lievito di birra, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
      ],
      weight: 40,
      dimensions: '5 x 5cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 12,
          lg: 3,
        },
      ],
    },
    {
      name: 'Pane in Cassetta 2k',
      category: 'pane',
      images: [Pane2k],
      style: [
        {
          name: 'Classico',
          ingredients:
            'Farina di frumento, latte in polvere, lievito di birra, acqua, olio evo, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
        {
          name: 'Integrale',
          ingredients:
            'Farina di frumento, farina di segale, mix di cereali (avena, sesamo, semi di lino), latte in polvere, acqua, olio evo, lievito di birra, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
      ],
      weight: 2000,
      dimensions: '40 x 15 x 15cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 1,
          md: 2,
        },
      ],
    },
    {
      name: 'Pane in Cassetta 1k',
      category: 'pane',
      images: [Pane1k],
      style: [
        {
          name: 'Classico',
          ingredients:
            'Farina di frumento, latte in polvere, lievito di birra, acqua, olio evo, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
        {
          name: 'Integrale',
          ingredients:
            'Farina di frumento, farina di segale, mix di cereali (avena, sesamo, semi di lino), latte in polvere, acqua, olio evo, lievito di birra, sale.',
          allergens: 'frumento (glutine), latte, semi di sesamo',
        },
      ],
      weight: 1000,
      dimensions: '20 x 10 x 10cm',
      expiration: 30,
      cookingTime: 5,
      fermentationTime: 72,
      isVegan: true,
      isGlutenFree: false,
      packageSizes: [
        {
          sm: 2,
          md: 4,
        },
      ],
    },
  ],
};
export default data;
