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

interface Cat {
  name: string;
  color: string;
  canSleep: boolean;
}

interface Snake {
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
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

const cat: Cat = {
  name: "Michi",
  color: "negro",
  canSleep: true,
};

const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};

console.log(dog, cat, snake);
