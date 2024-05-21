import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "./PokeCard";
//import '../style/color.css'

export default function Type() {
  const { type } = useParams();
  const [typePokemons, setTypePokemons] = useState([]);

  useEffect(() => {
    const typeFetch = async () => {
      try {
        const typeResponse = await fetch(
          `https://pokeapi.co/api/v2/type/${type}/`
        );
        const typeData = await typeResponse.json();
        const pokemonUrls = typeData.pokemon.map((p) => p.pokemon.url);

        const pokemonDetails = await Promise.all(
          pokemonUrls.slice(0, 20).map(async (url) => {
            const response = await fetch(url);
            return response.json();
          })
        );
        setTypePokemons(pokemonDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    typeFetch();
  }, [type]);

  return (
    //her skriver ut pokemon som tilhører i en type 
    <>
      <section className="type-page">
        <h1 className="title">{type}</h1>
        <ul className="type-pokemons">
          {/* for å begrense pokemon til 20 søkte jeg på google limiting map og fant
        jeg løsning via stackoverflow "https://stackoverflow.com/a/42374933" */}
          {typePokemons.slice(0, 20).map((p) => (
            <PokeCard key={p.name} pokemon={p} />
          ))}
        </ul>
      </section>
    </>
  );
}
