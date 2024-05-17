import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Teams from "./components/Teams";
import Type from "./components/Type";
import Searchresult from "./components/Searchresult";
import Pokemon from "./components/Pokemon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <a href="/">UNI POKEDEX</a>
          <a href="/teams">Teams</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
            <Route path="/:type" element={<Type />}></Route>
            <Route path="/searchresult/:pokemon" element={<Searchresult />}></Route>
            <Route path="/pokemons/:pokemon" element={<Pokemon />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
