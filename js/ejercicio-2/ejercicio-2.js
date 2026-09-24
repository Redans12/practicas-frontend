console.log(a);
var a = "hola";

console.log(b);
let b = "hola";

console.log(c);
const c = "hola";

sayHi();
function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}
sayBye();

console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log(null === undefined);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));

console.log(NaN == NaN);
console.log(Number.isNaN(Number("hola")));