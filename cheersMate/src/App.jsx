import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./assets/Components/Nav";
import Home from "./assets/Components/Pages/Home";
import Profile from "./assets/Components/Pages/Profile";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import SignInPage from "./assets/Components/Pages/Signin";
import SignUpPage from "./assets/Components/Pages/SignUp";

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is authenticated / signed in
        setIsAuth(true); // set isAuth to true
        localStorage.setItem("isAuth", true); // also, save isAuth in localStorage
      } else {
        // user is not authenticated / not signed in
        setIsAuth(false); // set isAuth to false
        localStorage.removeItem("isAuth"); // remove isAuth from localStorage
      }
    });
  }, []);
  // variable holding all private routes including the nav bar
  const privateRoutes = (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );

  // variable holding all public routes without nav bar
  const publicRoutes = (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );

  return <main>{isAuth ? privateRoutes : publicRoutes}</main>;
}
