//Maja

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src="/src/assets/Icons/Logo.svg" alt="" />
      </NavLink>
      <NavLink to="/signup">
        <img
          className="userProfile"
          src="/src/assets/Icons/profileIconWhole.svg"
          alt=""
        />
      </NavLink>
    </nav>
  );
}
