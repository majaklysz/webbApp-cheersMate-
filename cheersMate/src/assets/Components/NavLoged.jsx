import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavLoged({ uid }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
      const response = await fetch(url);
      const data = await response.json();

      setUser(data);
    }
    getUser();
  }, [uid]);

  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src="/src/assets/Icons/Logo.svg" alt="" />
      </NavLink>
      <NavLink to="/profile">
        <p>{user.name}</p>
        <img className="userProfile" src="/src/assets/Icons/☺.svg" alt="" />
      </NavLink>
    </nav>
  );
}
