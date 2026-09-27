interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

type DogRace = "Husky" | "Labrador" | "Chucho";

interface Dog extends Animal {
  race: DogRace;
  age: number;
}

const dog: Dog = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 3,
};

console.log(dog);

