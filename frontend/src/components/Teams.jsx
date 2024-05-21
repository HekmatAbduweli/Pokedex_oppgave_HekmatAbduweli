// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getTeams } from "../../sanity/client";

// export default async function Teams() {
  export default function Teams() {
    // const pokemonTeam = await getTeams();

    return (
      <section className="teams-container">
        <h1>Teams</h1>
        {/* {pokemonTeam.map((team) => (
        <div key={team.slug.current} className="team-card">
          <h3>{team.title}</h3>
        </div>
      ))} */}
      </section>
    );
  }

  //her skulle skrive ut tre teams 
