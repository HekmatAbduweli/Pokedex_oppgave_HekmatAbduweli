import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokeCard({ pokemon }) {

    const [pokemonId, setPokemonId] = useState()

//liten funksjon hvor den viser slik ut "002, 034, 130"
    useEffect(() => {
       if (pokemon?.id) {
         if (pokemon.id < 10) {
           setPokemonId(`00${pokemon.id}`);
         } else if (pokemon.id < 100) {
           setPokemonId(`0${pokemon.id}`);
         } else {
           setPokemonId(pokemon.id);
         }
       } 
    },[pokemon?.id])
      
  return (
    //her opretter pokemon kort
    <>
      <li
        key={pokemon.name}
        className={`initial_to_up ${pokemon.name} pokemon_btn btn_style`}
      >
        <Link to={`/pokemons/${pokemon?.name}`}>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          <h3 className="initial_to_up">{pokemon?.name}</h3>
          <p>#{pokemonId}</p>
        </Link>
      </li>
    </>
  );
}
