import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Searchresult() {
  const [result, setResult] = useState();

  const { pokemon } = useParams();

  
  return (
    <>
      <h1>Resultater</h1>
      <ul>
        <li>
          <h2>{pokemon}</h2>
        </li>
      </ul>
    </>
  );
}
