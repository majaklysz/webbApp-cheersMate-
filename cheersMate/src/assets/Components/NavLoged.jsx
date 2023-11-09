//Maja

import { getAuth } from "@firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavLoged() {
  const auth1 = getAuth(); // Initialize auth1 before using it
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/users/${auth1.currentUser?.uid}.json`;
  const [name, setName] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url);
      const userData = await response.json();

      if (userData) {
        setName(userData.name);
      }
    }
    getUser();
  }, [auth1.currentUser, url]);
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src="/src/assets/Icons/Logo.svg" alt="" />
      </NavLink>
      <NavLink to="/profile">
        <div className="profileLoged">
          <p className="userNameNav">{name}</p>
          <img className="userProfile" src="/src/assets/Icons/☺.svg" alt="" />
        </div>
      </NavLink>
    </nav>
  );
}
