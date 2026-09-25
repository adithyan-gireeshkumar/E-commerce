export const PRODUCTS = [
  {
    id: "fresh-coconut",
    name: "Fresh Coconut",
    category: "Fresh Produce",

    description:
      "Fresh Kerala coconut sourced directly from local farmers.",

    price: {
      regular: 80,
      sale: null,
      currency: "INR",
    },

    images: [
      {
        src: "/products/coconut-1.jpg",
        alt: "Fresh coconut",
      },
      {
        src: "/products/coconut-2.jpg",
        alt: "Fresh coconut",
      },
    ],

    rating: 4.5,

    reviews: 128,

    stock: 25,

    details: {
      origin: "Kerala",
      weight: "1 kg",
      category: "Fresh Produce",
    },
  },

  {
    id: "kerala-banana",
    name: "Kerala Banana",

    category: "Fruits",

    description:
      "Fresh and naturally ripened Kerala bananas.",

    price: {
      regular: 60,
      sale: 50,
      currency: "INR",
    },

    images: [
      {
        src: "/products/banana-1.jpg",
        alt: "Kerala banana",
      },
    ],

    rating: 4.7,

    reviews: 245,

    stock: 50,
  },
];