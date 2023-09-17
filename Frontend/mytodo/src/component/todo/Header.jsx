import Styles from "./styles/header.module.css";
import logo from "../../resources/logo.png";
import { useState } from "react";
export default function Header() {
  const [id, setId] = useState(null);

  return (
    <header className={Styles.headerflex}>
      <div>
        <img id={Styles.logo} src={logo} alt="" />
        <span id={Styles.todotextcolor}>Todo</span>
      </div>
      <div>
        <input
          className={Styles.searchid}
          type="number"
          name=""
          placeholder="Search by Id"
          value={id}
          onChange={(e) => {
            id < 0 ? setId(0) : setId(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="btn">Register</button>
        <button className="btn">Login</button>
      </div>
    </header>
  );
}
