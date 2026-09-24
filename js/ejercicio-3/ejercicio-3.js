// Código 1
const user = {
  name: "Pedro",
  lastName: "Sánchez",
  age: 45,
  profession: "Barro man",
};

const getFullName = ({ name, lastName }) => `Me llamo ${name} ${lastName}`;

console.log(getFullName(user));

///

// Código 2
const user2 = {
  name: "Pedro",
  lastName: "Sánchez",
  age: 45,
  salary: 1000,
  profession: "Barro man",
};

const getFullName2 = ({ name, lastName }) => `${name} ${lastName}`;

const getAnnualSalary = ({ salary }) => salary * 12;

const myNameSalaryIs = (fullName, annualSalary) =>
  `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;

const isGreetingAvalible = ({ name, lastName, salary }) => name && lastName && salary;

if (isGreetingAvalible(user2)) {
  console.log(myNameSalaryIs(getFullName2(user2), getAnnualSalary(user2)));
} else {
  console.log("No existen todos los datos");
}

///

// Código 3
const user3 = {
  name: "Álvaro",
  lastName: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esAptoParaAyuda(user) {
  const esExtranjero = user.nationality !== "España";
  const tiene30Anios = user.age === 30;

  return esExtranjero && tiene30Anios
    ? "Apto para la ayuda del gobierno"
    : "No es apto para la ayuda del gobierno";
}

console.log(esAptoParaAyuda(user3));