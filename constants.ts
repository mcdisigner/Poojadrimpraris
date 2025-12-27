import { Product, Review } from './types';

export const CAKE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Velvet Rose Delight",
    description: "Rich red velvet layers with smooth cream cheese frosting and rose petal accents.",
    price: 45.00,
    image: "https://picsum.photos/id/431/600/600",
    category: "Signature"
  },
  {
    id: 2,
    title: "Double Chocolate Truffle",
    description: "Decadent dark chocolate sponge layered with ganache and truffle toppings.",
    price: 55.00,
    image: "https://picsum.photos/id/1060/600/600",
    category: "Chocolate"
  },
  {
    id: 3,
    title: "Lemon Meringue Bliss",
    description: "Zesty lemon curd sandwiched between vanilla sponge, topped with torched meringue.",
    price: 40.00,
    image: "https://picsum.photos/id/486/600/600",
    category: "Fruit"
  },
  {
    id: 4,
    title: "Strawberry Cloud",
    description: "Light chiffon cake with fresh strawberries and whipped mascarpone cream.",
    price: 48.00,
    image: "https://picsum.photos/id/425/600/600",
    category: "Fruit"
  },
  {
    id: 5,
    title: "Salted Caramel Drip",
    description: "Vanilla bean cake with salted caramel buttercream and a golden drip finish.",
    price: 50.00,
    image: "https://picsum.photos/id/292/600/600",
    category: "Signature"
  },
  {
    id: 6,
    title: "Pistachio & Raspberry",
    description: "Nutty pistachio cake paired with tart raspberry compote and buttercream.",
    price: 52.00,
    image: "https://picsum.photos/id/365/600/600",
    category: "Nutty"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Eleanor Rigby",
    rating: 5,
    comment: "The Velvet Rose Delight was the centerpiece of our anniversary. Absolutely stunning and delicious!",
    date: "2023-10-15"
  },
  {
    id: 2,
    name: "Jude Smith",
    rating: 4,
    comment: "Great flavor on the Chocolate Truffle, though it is very rich. Perfect for sharing.",
    date: "2023-11-02"
  },
  {
    id: 3,
    name: "Lucy Sky",
    rating: 5,
    comment: "Ordered the Lemon Meringue for a birthday. It arrived fresh and looked exactly like the photos.",
    date: "2023-11-20"
  }
];