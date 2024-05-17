import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const pokemonFetch = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();
        setPokemonTypes(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    pokemonFetch();
  }, []);

  return (
    <>
      <h1>Main Pokemons</h1>
      <h2>Types</h2>
      <ul>
        {pokemonTypes.map((type) => (
          <li key={type.name}>{type.name}</li>
        ))}
      </ul>
    </>
  );
}
