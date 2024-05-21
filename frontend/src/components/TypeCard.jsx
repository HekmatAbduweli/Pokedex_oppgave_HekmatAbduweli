import { Link } from "react-router-dom";

export default function TypeCard({ type }) {
  return (
    //her opretter type kort
    <>
      <li key={type.name} className="type_btn btn_style">
        <Link to={`/${type.name}`}>
          <h3 className="initial_to_up">{type.name}</h3>
        </Link>
      </li>
    </>
  );
}
