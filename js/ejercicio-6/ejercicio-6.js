const user = { name: "Pedro", age: 45 };
const user2 = { name: "Lucía", age: 31 };
const findAnimal = (name) => `Buscando ${name}...`;
const color = "azul";

const myMap = new Map();
myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);

console.log(myMap);
console.log(myMap.get("moroso"));
console.log(myMap.has("hola"));
console.log(myMap.size);
myMap.forEach((value, key) => console.log(key, value));
myMap.delete("agarrado");
myMap.clear();

const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
const etiquetas = ["vue", "nuxt", "vue", "css", "nuxt"];

const numerosUnicos = [...new Set(numeros)];
const etiquetasUnicas = [...new Set(etiquetas)];

const mySet = new Set();
mySet.add("a");
mySet.add("b");
mySet.add("a");
console.log(mySet.size);
console.log(mySet.has("a"));
mySet.delete("b");
mySet.forEach((v) => console.log(v));

const setConObjetos = new Set([{ id: 1 }, { id: 1 }]);
console.log(setConObjetos.size);