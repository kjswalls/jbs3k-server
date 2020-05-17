const { v4: uniqueId } = require("uuid");

const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Consumer goods" },
  { id: 2, name: "Altruism" },
  { id: 3, name: "Lifestyle" },
  { id: 4, name: "Conquest" },
  { id: 5, name: "???" },
];

const items = [
  {
    id: uniqueId(),
    title: "End world hunger",
    description: "Do it for the kids!",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/v1589680449/jbs3k/Burger_gzueoh.svg",
    largeImage: null,
    price: 20_000_000_000,
    category: 2,
    source: null,
  },
  {
    id: uniqueId(),
    title: "Sick mansion",
    description: "Nice crib, yo",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/v1589680450/jbs3k/Mansion_jnwfr3.svg",
    largeImage: null,
    price: 10_000_000,
    category: 3,
    source: null,
  },
  {
    id: uniqueId(),
    title: "M1-A1 Abrams tank",
    description: "Boom boom",
    image: "",
    largeImage: null,
    price: 50_000_000,
    category: 4,
    source: null,
  },
  {
    id: uniqueId(),
    title: "Nintendo Switch",
    description: "Itsa me, Mario",
    image: "",
    largeImage: null,
    price: 299,
    category: 1,
    source: null,
  },
];

module.exports = {
  items,
  categories,
};
