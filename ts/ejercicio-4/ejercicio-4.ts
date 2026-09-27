type DogRace = "Husky" | "Labrador" | "Chucho";

interface Dog {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
  race: DogRace;
  age: number;
}

const dogs: Dog[] = [
  {
    name: "Firulais",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Labrador",
    age: 3,
  },
  {
    name: "Toby",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Husky",
    age: 2,
  },
];

// 1. Genéricos
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstDog = getFirst(dogs);
const firstName = getFirst(["a", "b"]);

console.log(firstDog, firstName);

// Si tipas el parámetro como any[], pierdes el autocompletado y la validación de tipos:
// getFirst devolvería "any", y TypeScript ya no te avisaría si usas mal el resultado.

// El tipo de retorno ya contempla el array vacío con "T | undefined".

// 2. Pick y Omit
type DogPreview = Pick<Dog, "name" | "race">;
type DogWithoutAge = Omit<Dog, "age">;

const preview: DogPreview = { name: "Firulais", race: "Labrador" };
const noAge: DogWithoutAge = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
};

// 3. Readonly
type FrozenDog = Readonly<Dog>;

const frozen: FrozenDog = dogs[0];
// frozen.age = 5;
// Error: Cannot assign to 'age' because it is a read-only property.

// 4. Partial
function updateDog(dog: Dog, changes: Partial<Dog>): Dog {
  return { ...dog, ...changes };
}

const updatedDog = updateDog(dogs[0], { age: 4 });
console.log(updatedDog);
