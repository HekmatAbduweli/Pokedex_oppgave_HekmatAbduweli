import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PokeCard from "./PokeCard";
import TypeCard from "./TypeCard";
//import "../style/color.css";

export default function Home() {
  //her fetcher og skriver ut pokemon kort og type kort alle data blir sendt til podecard og typecard
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
        

        //kunne ikke få ut bilder etter jeg har lagd pokecard komponenter og spurte hjelp fra chatgpt for å få bildet ut 
        const detailedPokemonPromises = pokemonData.results.map((p) =>
          fetch(p.url).then((res) => res.json())
        );
        const detailedPokemon = await Promise.all(detailedPokemonPromises);
        setPokemon(detailedPokemon);



        const typeResponse = await fetch("https://pokeapi.co/api/v2/type?limit=18");
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
      <section className="home-page">
        <h1 className="title">Main Pokemons</h1>
        <ul className="home-pokemons">
          {pokemon?.map((pokemon) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
        <h2 className="title">Types</h2>
        <ul className="home-types">
          {pokemonTypes.map((type) => (
              <TypeCard key={type.name} type={type}/>
          ))}
        </ul>
      </section>
    </>
  );
}
