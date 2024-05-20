import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
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
        setTypePokemons(typeData.pokemon.map((p) => p.pokemon));
        console.log(typeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    typeFetch();
  }, [type]);

  return (
    <>
      <h1 className="title">{type}</h1>
      <ul>
        {/* for å begrense pokemon til 20 søkte jeg på google limiting map og fant
        jeg løsning via stackoverflow "https://stackoverflow.com/a/42374933" */}
        {typePokemons.slice(0, 20).map((p) => (
          <li key={p.name} className={p.name}>
            <Link to={`/pokemons/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
