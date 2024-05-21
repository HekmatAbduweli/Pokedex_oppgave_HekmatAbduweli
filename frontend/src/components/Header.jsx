import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../images/search-icon.png";

export default function Header() {
    const [inputVal, setInputVal] = useState();
    const navigate = useNavigate();

    const inputChange = (e) => {
      setInputVal(e.target.value);
    };

    // fikk error om noe med warnig jeg sendte error fra log og koden min og chatgpt ambefalte meg å bruke searchresult via usenavigate og submit via onsubmit
    const submit = (e) => {
      e.preventDefault();
      navigate(`/searchresult/${inputVal.toLowerCase()}`);
    };
  return (
      //her skriver ut header skanppen skil uni pokedex teams og search-bar
      <>
        <header>
          <span>
            <Link to="/" className="title">
              UNI POKEDEX
            </Link>
            <Link to="/teams" className="title">
              Teams
            </Link>
          </span>
          <form onSubmit={submit}>
            <input type="text" onChange={inputChange} placeholder="Søk etter pokemon"/>
            <button>
              <img src={icon} alt="search" />
            </button>
          </form>
        </header>
      </>
    );
}