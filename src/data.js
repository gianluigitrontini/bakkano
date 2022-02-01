import PinsaRomana from './assets/images/section-prodotti/prodotti/pinsa-romana-compressed.jpg';
import PinsaRomanaMini from './assets/images/section-prodotti/prodotti/pinsa-romana-mini-compressed.jpg';
import Hamburger from './assets/images/section-prodotti/prodotti/hamburger-compressed.jpg';
import HamburgerMini from './assets/images/section-prodotti/prodotti/hamburger-mini-compressed.jpg';
import Pane2k from './assets/images/section-prodotti/prodotti/pane-in-cassetta-compressed.jpg';
import Pane1k from './assets/images/section-prodotti/prodotti/pane-in-cassetta-compressed.jpg';
import PinsaInPala from './assets/images/section-prodotti/prodotti/pinsa-in-pala-compressed.jpg';
import Pinsotto from './assets/images/section-prodotti/prodotti/pinsotto-compressed.jpg';
import PinsottoMini from './assets/images/section-prodotti/prodotti/pinsotto-mini-compressed.jpg';
import PinsottoMaxi from './assets/images/section-prodotti/prodotti/pinsotto-maxi-compressed.jpg';
import Teglia from './assets/images/section-prodotti/prodotti/teglia-romana-compressed.jpg';
import TegliaMezza from './assets/images/section-prodotti/prodotti/teglia-romana-mezza-compressed.jpg';
import Tonda from './assets/images/section-prodotti/prodotti/tonda-romana-compressed.jpg';

// Perche Noi Section
import Artigianale from './assets/images/section-perche-noi/icons/artigianali.png';
import Vantaggi from './assets/images/section-perche-noi/icons/vantaggi.png';
import Versatile from './assets/images/section-perche-noi/icons/versatile.png';
import ImpastoNelForno from './assets/images/section-perche-noi/foto-impasto.jpg';
import FotoPinsaCondita from './assets/images/section-perche-noi/foto-pinsa-condita-2.jpg';
import FotoLocale from './assets/images/section-perche-noi/foto-locale.jpg';

// Base Section
import ZeroConservanti from './assets/images/section-base/icons/0-conservanti.png';
import IngredientiCertificati from './assets/images/section-base/icons/certified.png';
import FattaAMano from './assets/images/section-base/icons/fatta-a-mano.png';
import MixFarine from './assets/images/section-base/icons/mix-farine.png';

const products = [
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
];

const users = [
  { id: 1, email: 'me@admin.it', password: '123456', isAdmin: true },
  { id: 2, email: 'me@cliente.it', password: '123456', isAdmin: false },
];

const contenuto = {
  percheNoiSection: [
    {
      image: ImpastoNelForno,
      title: '100% Artigianali & Made in Italy',
      icon: Artigianale,
      text: [
        'Ogni base è realizzata rigorosamente a mano',
        'Utilizziamo solo farine Made in Italy e prodotti naturali',
        'Garantiamo un prodotto sicuro e buono come appena sfornato',
      ],
    },
    {
      image: FotoPinsaCondita,
      title: 'Versatile e pronta in 5 minuti',
      icon: Versatile,
      text: [
        'Veloce da preparare perchè è una base già pronta',
        'Perfetta da farcire come vuoi',
        'Buona come appena sfornata. Per terminare la cottura servono solo 5 minuti in un qualsiasi forno sia professionale che casalingo',
      ],
    },
    {
      image: FotoLocale,
      title: 'Tanti vantaggi per il tuo locale',
      icon: Vantaggi,
      text: [
        'Offrire un prodotto di alta qualità senza assumere un pizzaiolo professionista',
        'Effettuare anche piccoli ordini per evitare le eccedenze',
        'Eliminare i costi di macchinari di produzione e della loro manutenzione',
        'Rendere il tuo menù ancora più ricco e gustoso',
      ],
    },
  ],
  baseSection: [
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2016/11/DSC_0499-750x500.jpg',
      title: 'Farine Selezionate',
      text: 'Tutte le nostre Pinse vengono realizzate utilizzando un mix di farine selezionate: farine di frumento tenero, farina di riso, farina di soia, lievito madre, acqua e sale e lasciate lievitare tra le 48 e le 72 ore.',
      icon: MixFarine,
    },
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2016/11/DSC_0499-750x500.jpg',
      title: 'Fatta a mano',
      text: 'Ogni base viene spianata a mano in forma ovale dai nostri pinsaioli seguendo la tradizione artigianale della vera Pinsa Romana®, per un prodotto altamente digeribile, gustoso e fragrante.',
      icon: FattaAMano,
    },
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2016/11/DSC_0499-750x500.jpg',
      title: 'Ingredienti Certificati',
      text: 'Utilizziamo solo materie prime certificate che rispettano il protocollo di produzione. Questo ci permette di utilizzare il marchio Pinsa Romana® Originale.',
      icon: IngredientiCertificati,
    },

    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2016/11/DSC_0499-750x500.jpg',
      title: 'Zero Conservanti',
      text: 'Le nostre basi artigianali sono fresche, non congelate e senza conservanti o additivi aggiunti. Per lasciare inalterato il gusto e la freschezza, dopo una rapida scottatura, le lasciamo raffreddare per poi conservarle in ATM. Per questo consigliamo di consumare il prodotto entro 50 giorni dal confezionamento.',
      icon: ZeroConservanti,
    },
  ],
  garanzieSection: [
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2015/07/fotopiccoleperhome1.jpg',
      titolo: 'Ingredienti Freschi',
      contenuto:
        'Utilizziamo solo ingredienti certificati e naturali. La nostra attenzione verso il cliente fa sì che tutti la amino - vegani e celiaci inclusi.',
    },
    {
      image:
        'https://www.pinsaromana.info/wp-content/uploads/2015/09/AssociazioneBollino.png',
      titolo: 'La Pinsa Originale',
      contenuto:
        "Siamo certificati al 100%. Quella che finisce sulla tua tavola è l'autentica Pinsa Romana.",
    },
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2015/07/pinsapersito-1-280x162.jpg',
      titolo: 'Zero Sprechi',
      contenuto:
        "Ordina solo quello che ti serve, quando vuoi tu. Le nostre Pinse hanno un'ottima conservazione - ma non troppo a lungo, per garantirti la freschezza dei nostri prodotti.",
    },
    {
      image:
        'https://bakkanoinviamanara.com/wp-content/uploads/2015/07/fotopiccolepermail3.jpg',
      titolo: 'La Qualità prima di tutto',
      contenuto:
        'I nostri prodotti sono amati in tutta Italia. Anni di passione ci hanno permesso di creare un prodotto estremamente versatile e salutare.',
    },
  ],
  contactAccordion: [
    {
      title: 'Come posso effettuare un ordine?',
      content:
        'Se è il tuo primo ordine, contattaci tramite il form integrato oppure inviando una email a <span class="text-red-500 tracking-wide">ordini@bakkano.it</span>. Ti ricontatteremo via email o telefonicamente con tutti i dettagli necessari per creare il tuo account.',
    },
    {
      title: "C'è una quantità minima?",
      content: 'No.',
    },
    {
      title:
        'Sono un privato, posso ordinare i vostri prodotti tramite questa pagina web?',
      content:
        "Attualmente, il servizio é riservato ai possessori di un'attività con Partita IVA nel settore Ho.Re.Ca.",
    },
    {
      title: 'Come posso avere più informazioni?',
      content:
        "Basta contattarci all'indirizzo email <span class='text-red-500 tracking-wide'>ordini@bakkano.it</span> oppure utilizzando il form integrato. Ti ricontatteremo al più presto!",
    },
  ],
};

export { products, contenuto, users };
