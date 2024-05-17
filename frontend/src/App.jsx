import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Teams from "./components/Teams";

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
            <Route path="/teams" element={<Teams/>}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
