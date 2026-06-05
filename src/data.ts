import { Product } from "./types";

export const EXCLUSIVE_SHADES = [
  { id: "ivory", name: "Éclat Ivoire", hex: "#f5ebe0", className: "bg-[#f5ebe0]" },
  { id: "sand", name: "Sable Doré", hex: "#e5c9b8", className: "bg-[#e5c9b8]" },
  { id: "terracotta", name: "Terre Chaude", hex: "#b07d62", className: "bg-[#b07d62]" },
  { id: "cocoa", name: "Moka Royal", hex: "#7f5539", className: "bg-[#7f5539]" },
  { id: "noir", name: "Noir Absolu", hex: "#1f1a1b", className: "bg-[#1f1a1b]" },
];

export const PRODUCTS: Product[] = [
  {
    id: "eclat-absolu-body",
    name: "Body Éclat Absolu",
    price: 139,
    originalPrice: 175,
    tag: "Bestseller",
    technology: "Nanomedicina Textil Integrada",
    description: "La joya de la corona de nuestra biotecnología moldeadora. Diseñado con una capa externa de compresión milimétrica y un forro enriquecido con principios activos dermo-cosméticos.",
    benefits: [
      "Microcápsulas de ácido hialurónico y cafeína que se activan con la temperatura corporal.",
      "Costuras de seda ultrasónicas completamente invisibles bajo telas ultra ajustadas.",
      "Compresión ergonómica que mejora la postura lumbar de forma natural."
    ],
    imageUrl: "https://images.unsplash.com/photo-1594235222953-ee826ac7af53?auto=format&fit=crop&w=600&q=80",
    shades: [
      EXCLUSIVE_SHADES[0], // Ivoire
      EXCLUSIVE_SHADES[1], // Sable
      EXCLUSIVE_SHADES[3], // Moka
      EXCLUSIVE_SHADES[4], // Noir
    ]
  },
  {
    id: "corset-biologique",
    name: "Corset Biologique Infini",
    price: 159,
    tag: "Alta Costura",
    technology: "Biocerámica Térmica",
    description: "Un tributo a la corsetería francesa clásica fusionado con ingeniería médica. Esculpe con suavidad y calidez gracias a sus micro-paneles de biocerámica activa.",
    benefits: [
      "Fibras que reflejan el calor infrarrojo lejano del propio cuerpo para estimular la circulación.",
      "Varillas de polímero con memoria que se adaptan a la silueta sin maltratar ni asfixiar.",
      "Reducción visual inmediata de hasta 4 cm de cintura con confort garantizado de 24 horas."
    ],
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    shades: [
      EXCLUSIVE_SHADES[0], // Ivoire
      EXCLUSIVE_SHADES[1], // Sable
      EXCLUSIVE_SHADES[2], // Terre
      EXCLUSIVE_SHADES[4], // Noir
    ]
  },
  {
    id: "cinturilla-sculpt",
    name: "Cinturilla Sculpt-Active 3D",
    price: 95,
    originalPrice: 120,
    tag: "Innovación",
    technology: "Tejido Tridimensional Nano-Carbono",
    description: "Escultura intensiva de talle alto con la ligereza de una segunda piel. Creada con hilos de nano-carbono autoventilados para disipar el sudor y concentrar la firmeza.",
    benefits: [
      "Tejido hidrófugo con patrón hexagonal de ultra elasticidad progresiva.",
      "Cierre micrométrico ajustable de tres posiciones para una definición personalizada de curva.",
      "Neutraliza olores de manera natural gracias a las propiedades purificantes de los hilos de carbono."
    ],
    imageUrl: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=600&q=80",
    shades: [
      EXCLUSIVE_SHADES[1], // Sable
      EXCLUSIVE_SHADES[3], // Moka
      EXCLUSIVE_SHADES[4], // Noir
    ]
  },
  {
    id: "legging-hydra",
    name: "Legging Hydra-Éclat 360",
    price: 119,
    tag: "Novedad",
    technology: "Hidratación Dinámica de Micro-Lípidos",
    description: "Prenda de control y uso exterior de alto impacto, que redefine glúteos e hidrata profundamente la piel de las piernas con el roce de cada paso.",
    benefits: [
      "Liberación prolongada de micro-lípidos que eliminan la sequedad cutánea durante el día.",
      "Efecto 'Push-Up' bioconstruido patentado sin rellenos artificiales.",
      "Adecuado tanto para uso deportivo de élite como para elevar conjuntos de diario con gran distinción."
    ],
    imageUrl: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=600&q=80",
    shades: [
      EXCLUSIVE_SHADES[2], // Terre
      EXCLUSIVE_SHADES[3], // Moka
      EXCLUSIVE_SHADES[4], // Noir
    ]
  }
];

export const TESTIMONIALS = [
  {
    author: "Alessandra V.",
    role: "Editora de Moda & Estilista",
    text: "Éclat Wear cambió mi percepción de las prendas moldeadoras. No solo la silueta es deslumbrante, sino que el tacto sedoso y su frescura tecnológica la hacen perfecta para acompañar vestidos de satén sumamente demandantes.",
    rating: 5
  },
  {
    author: "Dr. Elena Thorne",
    role: "Especialista en Medicina Estética",
    text: "La incorporación de microcápsulas de ácido hialurónico en los hilos de compresión representa un avance sin precedentes. Mis pacientes reportan una mejora notable en la elasticidad y suavidad cutánea de inmediato.",
    rating: 5
  },
  {
    author: "Gabriela Espino",
    role: "Cliente VIP Éclat Club",
    text: "La asesoría por WhatsApp para tallas fue sumamente respetuosa y precisa. Mi Body Éclat Absolu llegó perfumado y me queda exactamente como un guante. La compresión de cintura es firme pero 100% respirable.",
    rating: 5
  }
];
