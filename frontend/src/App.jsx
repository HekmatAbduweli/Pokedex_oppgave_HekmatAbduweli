import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import Teams from "./components/Teams";
import Type from "./components/Type";
import Searchresult from "./components/Searchresult";
import Pokemon from "./components/Pokemon";

function App() {
  const [inputVal, setInputVal] = useState();
  const [PokemonLink, setPokemonLink] = useState();

  const inputChange = (e) => {
    setInputVal(e.target.value);
  };

  const submit = () => {
    setPokemonLink(inputVal);
  }

  return (
    <>
      <nav>
        <header>
          <a href="/">UNI POKEDEX</a>
          <a href="/teams">Teams</a>
          <form>
            <input type="text" value={inputVal} onChange={inputChange} />
            <button onClick={submit}>
              <img src="search-icon.png" alt="search" />
              <Link to={`/searchresult/${PokemonLink}`}></Link>
            </button>
          </form>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
            <Route path="/:type" element={<Type />}></Route>
            <Route
              path="/searchresult/:pokemon"
              element={<Searchresult />}
            ></Route>
            <Route path="/pokemons/:pokemon" element={<Pokemon />}></Route>
          </Routes>
        </main>
      </nav>
    </>
  );
}

export default App;
