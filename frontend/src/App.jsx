import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Teams from "./components/Teams";
import Type from "./components/Type";
import Searchresult from "./components/Searchresult";
import Pokemon from "./components/Pokemon";

function App() {
  const [inputVal, setInputVal] = useState();
  const navigate = useNavigate();

  const inputChange = (e) => {
    setInputVal(e.target.value);
  };


  // fikk error om noe med warnig jeg sendte error fra log og koden min og chatgpt ambefalte meg å bruke searchresult via usenavigate og submit via onsubmit
  const submit = (e) => {
    e.preventDefault();
    navigate(`/searchresult/${inputVal}`);
  }

  return (
    <>
      <nav>
        <header>
          <a href="/">UNI POKEDEX</a>
          <a href="/teams">Teams</a>
          <form onSubmit={submit}>
            <input type="text" onChange={inputChange} />
            <button>
              <img src="search-icon.png" alt="search" />
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
