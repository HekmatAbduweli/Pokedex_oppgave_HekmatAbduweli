import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PokeCard from "./PokeCard";

export default function Searchresult() {
  const [result, setResult] = useState();
  const [na, setNa] = useState(false);

  const { pokemon } = useParams();

  useEffect(() => {
    const resultFetch = async () => {
      try {
        const resultResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        );
        const resultData = await resultResponse.json();
        setNa(false);
        setResult(resultData);
        console.log(resultData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNa(true);
      }
    };
    resultFetch();
  }, [pokemon]);

  if (na) {
    return <p>Finner ikke noe om "{pokemon}"</p>;
  }

  return (
    <>
      <section className="result-page">
        <h1>Resultater</h1>
        <ul>
          {
            //fikk feilmelding at result.name er undefined jeg spurte chatgpt at jeg har fått error og hvorda jeg kan fikse og chatgpt ambefalte meg å bruke {redult &&}
          }
          {result && <PokeCard key={result.name} pokemon={result} />}
        </ul>
      </section>
    </>
  );
}
