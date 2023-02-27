const initialState = {
  products: [
    {
      id: 1,
      name: "Spring and summershoes",
      category: "Mens Shoes",
      price: 400,
      img: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      quantity: 5,
    },
    {
      id: 2,
      name: "Women Winter Clothes",
      category: "Tops",
      price: 100,
      img: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
      quantity: 3,
    },
  ],
  cart: [
    {
      id: 1,
      name: "Spring and summershoes",
      category: "Mens Shoes",
      price: 400,
      img: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      quantity: 0,
    },
    {
      id: 2,
      name: "Women Winter Clothes",
      category: "Tops",
      price: 100,
      img: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
      quantity: 0,
    },
  ],
};

export default initialState;
