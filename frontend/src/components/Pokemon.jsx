import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import TypeCard from "./TypeCard";

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
      <section className="pokemon-card">
        <section className="row">
          <section className="pokemon-name">
            <h1 className="title">{pokemon}</h1>
            {/* jeg kunne ikke hente dataene fordi jeg har ikke brukt spørsmålstegn til å sjekke thisPokemon. 
            Jeg har sente feilkoden til chat gpt og koden min og chatgpt git meg kode for å sjekke om data i thisPokemon eksisterer. 
            Koden er klik slik jeg fikk
            "thisPokemon.types && thisPokemon.types.map". 
            Da jeg husket at jeg kan bruke spørsmålstegn, men her måtte jeg plassere forskjellig sted for at den skal funke */}
            <img
              src={thisPokemon?.sprites.other["dream_world"].front_default}
              alt={thisPokemon?.name}
            />
          </section>
          <section className="detail">
            <h1 className="title">Type(s)</h1>
            <ul className="pokemon-types">
              {thisPokemon?.types.map((t) => (
                <TypeCard key={t.type.name} type={t.type} />
              ))}
            </ul>
            <h1 className="title">Stats</h1>
            <ul className="stats">
              {thisPokemon?.stats.map((s) => (
                <li key={s.stat.name} className="title">
                  <span className="stats-name">{s.stat.name}</span>{" "}
                  <span>{s.base_stat}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="abilities">
          <h1 className="title">Ablibities</h1>
          <ul>
            {pokemonAbility?.map((a, i) => (
              <li key={i}>
                <h3 className="initial_to_up">{a.name}</h3>
                <strong>Effect</strong>: {a.effect}
                <br />
                <strong>Short effect</strong>: {a.shortEffect}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
