import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const pokemonFetch = async () => {
      try {
        //har søk på google for å grense hvor mange pokemon skal jeg vise
        //jeg har fant en løsning via stack overflow "https://stackoverflow.com/a/62609757", men dette funket ikke
        //derfor spurte jeg til chatgpt at jeg vil grense og spurte hvofor løsningen fra stackoverflow funket ikke og chatgpt git meg det kode "pokemon?/limit=9"
        const pokemonResponse = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=9"
        );
        const pokemonData = await pokemonResponse.json();
        setPokemon(pokemonData.results);

        const typeResponse = await fetch("https://pokeapi.co/api/v2/type");
        const typeData = await typeResponse.json();
        setPokemonTypes(typeData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    pokemonFetch();
  }, []);

  return (
    <>
      <h1>Main Pokemons</h1>
      <ul>
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {pokemonTypes.map((type) => (
          <li key={type.name}>
            <Link to={`/${type.name}`}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
