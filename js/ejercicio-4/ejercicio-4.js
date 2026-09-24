const products = [
  { id: 1, name: "Teclado", price: 45, stock: 10, category: "periféricos" },
  { id: 2, name: "Monitor", price: 220, stock: 0, category: "pantallas" },
  { id: 3, name: "Ratón", price: 25, stock: 3, category: "periféricos" },
  { id: 4, name: "Webcam", price: 60, stock: 7, category: "periféricos" },
  { id: 5, name: "Portátil", price: 950, stock: 2, category: "ordenadores" },
];

const productNames = products.map(({ name }) => name);

const withStock = products.filter(({ stock }) => stock > 0);

const webcam = products.find(({ id }) => id === 4);

const totalValue = products.reduce((acc, { price, stock }) => acc + price * stock, 0);

const hayCaro = products.some(({ price }) => price > 500);

const todosBaratos = products.every(({ price }) => price < 1000);

const porPrecio = [...products].sort((a, b) => a.price - b.price);

const perifericosSubidos = products
  .filter(({ category }) => category === "periféricos")
  .map((p) => ({ ...p, price: p.price * 1.1 }));

console.log(products);