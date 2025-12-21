export type MenuItem = {
  name: string;
  priceClp?: number;
  priceText?: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cafes-te",
    title: "Cafés / Té",
    items: [
      { name: "Ristretto", priceClp: 1800 },
      { name: "Espresso", priceClp: 1800 },
      { name: "Doble Espresso", priceClp: 2400 },
      { name: "Americano", priceClp: 2800 },
      { name: "Cortado", priceClp: 3200 },
      { name: "Cortado Doble", priceClp: 3500 },
      { name: "Mokachino", priceClp: 3500 },
      { name: "Latte", priceClp: 3200 },
      { name: "Capuchino", priceClp: 3200 },
      { name: "Capuchino Vainilla", priceClp: 3400 },
      { name: "Capuchino Vainilla Francesa Freddo", priceClp: 3700 },
      { name: "Chocolate Caliente", priceClp: 3200 },
      { name: "Té", priceClp: 1400 },
      { name: "Teteras variedad de la casa", priceClp: 3500 },
      { name: "Tetera de la NONNA", priceClp: 3000 },
    ],
  },
  {
    id: "promociones",
    title: "Promociones",
    items: [
      {
        name: "Desayuno/Once Clásico",
        priceClp: 5600,
        description:
          "Café o té a elección. Vitamina naranja. Trozo de pastafrola. Tostada con mantequilla y mermelada. O tostada con palta. Pan ciabatta o molde.",
      },
      {
        name: "Desayuno/Once Especial",
        priceClp: 7900,
        description:
          "Café o té a elección. Vitamina naranja. Elegir a elección: trozo de pastafrola o yogur con granola. Elegir a elección: tostadas con huevo revuelto o croissant jamón y queso.",
      },
    ],
  },
  {
    id: "paninni",
    title: "Paninni",
    items: [
      {
        name: "Paninni de Carne",
        priceClp: 8400,
        description:
          "Paninni carne mechada, panceta y queso mozzarella derretido con cebolla asada.",
      },
      {
        name: "Paninni las Nonnas",
        priceClp: 7000,
        description:
          "Paninni fresco con toque de aceite de oliva, rúcula, prosciutto, queso mozzarella con pesto acompañado con tomate cherry.",
      },
      {
        name: "Mozarella Caprese",
        priceClp: 6800,
        description:
          "Pan ciabatta con toque de aceite de oliva, tomate cherry, albahaca, queso mozzarella y rúcula.",
      },
      {
        name: "Ciabatta Champiñón",
        priceClp: 7600,
        description:
          "Pan ciabatta fresco, caliente con base de mantequilla, champiñón salteado, acompañado con queso y jamón serrano.",
      },
      {
        name: "Claros Vegetales",
        priceClp: 6500,
        description:
          "Pan ciabatta fresco, con toque de aceite oliva, champiñón, espinaca y tomate cherry en cubitos salteados en oliva, toque parmesano.",
      },
    ],
  },
  {
    id: "croissant",
    title: "Croissant",
    items: [
      {
        name: "Croissant de casa",
        priceClp: 4900,
        description:
          "Croissant al horno con jamón prosciutto y queso mozzarella (opcional: queso mantecoso).",
      },
      {
        name: "Croissant Queso Pepperoni",
        priceClp: 6200,
        description:
          "Croissant a la plancha con un toque de mantequilla, queso mozzarella derretido y pepperoni.",
      },
      {
        name: "Croissant dulce",
        priceClp: 4900,
        description:
          "Cornetto italiano con crema dulce, nutella y frutillas.",
      },
      {
        name: "Croissant de las Nonnas",
        priceClp: 7000,
        description:
          "Croissant fresco con toque de aceite de oliva, rúcula, prosciutto, queso mozzarella con pesto acompañado con tomate cherry.",
      },
    ],
  },
  {
    id: "bebestibles",
    title: "Bebestibles",
    items: [
      { name: "Agua mineral Porvenir con gas", priceClp: 1800 },
      { name: "Agua mineral Porvenir sin gas", priceClp: 1800 },
      { name: "Bebidas", priceClp: 2000 },
      { name: "Jugo natural", priceClp: 3500 },
      { name: "Vitamina Naranja", priceClp: 3700 },
      { name: "Smoothie", priceClp: 4000 },
      { name: "Té helado", priceClp: 2500 },
      { name: "Café helado", priceClp: 3500 },
    ],
  },
  {
    id: "tostadas",
    title: "Tostadas",
    items: [
      {
        name: "Tostada",
        priceClp: 3500,
        description:
          "Tostada de ciabatta fresca con mantequilla y mermelada.",
      },
      {
        name: "Tostada con palta",
        priceClp: 4200,
        description: "Tostado de ciabatta o pan molde fresco con palta.",
      },
      {
        name: "Tostada de la casa",
        priceClp: 3800,
        description: "Tostada ciabatta fresca con tomate rallado y oliva.",
      },
      {
        name: "Tostada de campo",
        priceClp: 4200,
        description: "Tostada de ciabatta o holgaza fresca con huevos revueltos.",
      },
    ],
  },
  {
    id: "almuerzos",
    title: "Almuerzos",
    items: [
      {
        name: "Sopa a la NONNA del día",
        priceClp: 3500,
        description:
          "Crema de frescas verduras de la estación, crutones y queso parmesano.",
      },
      {
        name: "Ensalada cesar pollo",
        priceClp: 6200,
        description:
          "Vegetales verdes, lechuga, rúcula, y mix verde, aderezo y pollo, acompañados de queso parmesano y salsa dressing.",
      },
      {
        name: "Pasta del día",
        priceClp: 7500,
        description:
          "Pasta casera la Nonna, y salsas, sugerencia y sabor de la casa.",
      },
      {
        name: "Omelette claro vegetal",
        priceClp: 8900,
        description:
          "Omelette huevo de la casa, acompañamiento de verduras salteadas, tomate cubitos, champiñones París, pimentón rojo y verde, espinaca salteadas, queso parmesano y salsa italiana.",
      },
      {
        name: "Ensalada la NONNA",
        priceClp: 7500,
        description:
          "Mix verdes, queso cabra y paltas en cubitos, acompañamiento de jamón serrano, alcaparras y queso parmesano.",
      },
      {
        name: "Menú del día",
        priceClp: 6500,
        description: "Entrada. Fondo. Postre.",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    items: [
      {
        name: "Pizza las Nonnas",
        priceClp: 8000,
        description:
          "Suave masa fermentada 48 hrs con base de tomate triturado italiano, albahaca y relleno de la casa de la nonna.",
      },
      {
        name: "Pizza Prosciutto",
        priceClp: 10000,
        description:
          "Suave masa fermentada 48 hrs con base de tomate triturado italiano, queso mozzarella, rúcula, aceitunas negras, tomate cherry y prosciutto.",
      },
    ],
  },
  {
    id: "pizzetas",
    title: "Pizzetas",
    items: [
      {
        name: "Pizzeta Jamón Queso",
        priceClp: 5500,
        description:
          "Suave masa fermentada 48 hrs con base de tomate triturado italiano, queso mozzarella, y jamón.",
      },
      {
        name: "Pizzeta Champiñón Queso",
        priceText: "Consultar",
        description:
          "Suave masa fermentada 48 hrs con base de tomate triturado italiano, queso mozzarella, y champiñón.",
      },
      {
        name: "Pizzeta Queso Salame",
        priceText: "Consultar",
        description:
          "Suave masa fermentada 48 hrs con base de tomate triturado italiano, queso mozzarella, y salame.",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      {
        name: "Trozo de Torta del Día",
        priceClp: 4600,
        description: "Sugerencia y sabor de casa.",
      },
      { name: "Pie de Limón", priceClp: 4200 },
      {
        name: "Tiramisú la NONNA",
        priceClp: 5800,
        description:
          "Delicioso postre italiano a base de galletas en café mascarpone.",
      },
      {
        name: "Barattolo Mepiacche 3 sabores",
        priceClp: 4200,
        description:
          "Helado artesanal Mepiacche 3 sabores a elección, sugerencia de la casa.",
      },
      { name: "Panqueque Celestino", priceClp: 4900 },
      { name: "Torta especial", priceClp: 5500 },
      { name: "Kuchen casero la NONNA", priceClp: 4200 },
      {
        name: "Brownie artesanal con helado Mepiacche",
        priceClp: 4800,
      },
      {
        name: "Paleta de Helado Artesanal Italiano Miapache",
        priceClp: 2000,
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { name: "Crema de Nutella", priceClp: 1000 },
      { name: "Bolita de helado Mepiacche", priceClp: 1800 },
    ],
  },
];

export const restaurantTagline =
  "En las Nonnas, la mesa siempre está lista para recibirte como en casa....";
