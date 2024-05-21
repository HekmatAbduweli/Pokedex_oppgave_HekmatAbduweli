import { useState } from "react";
import { Link } from "react-router-dom";

export default function PokeCard({ pokemon }) {
  return (
    <>
      <li
        key={pokemon.name}
        className={`initial_to_up ${pokemon.name} pokemon_btn btn_style`}
      >
        <Link to={`/pokemons/${pokemon?.name}`}>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <h3 className="initial_to_up">{pokemon?.name}</h3>
        </Link>
      </li>
    </>
  );
}
