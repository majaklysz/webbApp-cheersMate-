import { NavLink } from "react-router-dom";

export default function NavLoged() {
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src="/src/assets/Icons/Logo.svg" alt="" />
      </NavLink>
      <NavLink to="/profile">
        <div className="profileLoged">
          <p>user name</p>
          <img className="userProfile" src="/src/assets/Icons/☺.svg" alt="" />
        </div>
      </NavLink>
    </nav>
  );
}
