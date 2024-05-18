import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Pokemon() {
  const { pokemon } = useParams();
  const [thisPokemon, setThisPokemon] = useState();
  const [pokemonAbility, setPokemonAbility] = useState();

  useEffect(() => {
    const pokemonFetch = async () => {
      try {
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        );
        const pokemonData = await pokemonResponse.json();
        setThisPokemon(pokemonData);

        //Spurte chagpt hvordan jeg skal fetche apien som ligger inne i objekten.
        //jeg har sendt json versjon til dataen og gitt min kode, og spurte hvordan jeg skal få ut api-en inne i data og fetche den. så fikk jeg promise.all osv
        const abilities = await Promise.all(
          pokemonData.abilities.map(async (a) => {
            const abilityResponse = await fetch(a.ability.url);
            const abilityData = await abilityResponse.json();
            const effectEntry = abilityData.effect_entries.find(
              (entry) => entry.language.name === "en"
            );
            const effect = effectEntry
              ? effectEntry.effect
              : abilityData.effect_entries[0]?.effect || "No effect available";
            const shortEffect = effectEntry
              ? effectEntry.short_effect
              : abilityData.effect_entries[0]?.short_effect ||
                "No short effect available";
            return {
              name: abilityData.name,
              effect: effect,
              shortEffect: shortEffect,
            };
          })
        );

        setPokemonAbility(abilities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    pokemonFetch();
  }, [pokemon]);

  return (
    <>
      <h1>{pokemon}</h1>
      {/* jeg kunne ikke hente dataene fordi jeg har ikke brukt spørsmålstegn til å sjekke thisPokemon. 
      Jeg har sente feilkoden til chat gpt og koden min og chatgpt git meg kode for å sjekke om data i thisPokemon eksisterer. 
      Koden er klik slik jeg fikk
      "thisPokemon.types && thisPokemon.types.map". 
      Da jeg husket at jeg kan bruke spørsmålstegn, men her måtte jeg plassere forskjellig sted for at den skal funke */}
      <img src={thisPokemon?.sprites.front_default} alt={thisPokemon?.name} />
      <p>Types: {thisPokemon?.types.map((t) => t.type.name).join(", ")}</p>
      <p>Stats</p>
      <ul>
        {thisPokemon?.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
      <p>Ablibities</p>
      <ul>
        {pokemonAbility?.map((a, i) => (
          <li key={i}>
            <h2>{a.name}</h2>
            <strong>Effect</strong>: {a.effect}
            <br />
            <strong>Short effect</strong>: {a.shortEffect}
          </li>
        ))}
      </ul>
    </>
  );
}
