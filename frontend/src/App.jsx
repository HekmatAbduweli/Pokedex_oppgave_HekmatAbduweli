import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Type from "./components/Type";
import Searchresult from "./components/Searchresult";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";

function App() {
  return (
    //her router til sider
    <>
      <nav>
        <Header/>
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
