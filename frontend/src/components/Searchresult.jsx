import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
    return <p>Finner ikke noe om "{pokemon}"</p>
  }

  return (
    <>
      <h1>Resultater</h1>
      <ul>
        <li>
          <Link to={`/pokemons/${result?.name}`}>
            <h2>{result?.name.toUpperCase()}</h2>
            <img src={result?.sprites.front_default} alt={result?.name} />
          </Link>
        </li>
      </ul>
    </>
  );
}
