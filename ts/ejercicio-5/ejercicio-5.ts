interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: {
    front_default: string | null;
  };
}

function isPokemon(data: unknown): data is Pokemon {
  if (typeof data !== "object" || data === null) return false;

  const d = data as Record<string, unknown>;

  return (
    typeof d.id === "number" &&
    typeof d.name === "string" &&
    typeof d.height === "number" &&
    typeof d.weight === "number" &&
    Array.isArray(d.types) &&
    typeof d.sprites === "object" &&
    d.sprites !== null
  );
}

async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: unknown = await res.json();

  if (!isPokemon(data)) {
    throw new Error("La respuesta no tiene el formato esperado de Pokemon");
  }

  return data;
}

getPokemon("ditto").then((pokemon) => {
  console.log(pokemon.name, pokemon.height, pokemon.sprites.front_default);
});
