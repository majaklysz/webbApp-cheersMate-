//Maja

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./assets/Components/Nav";
import Home from "./assets/Components/Pages/Public/Home";
import Profile from "./assets/Components/Pages/Private/Profile";
import SignUpPage from "./assets/Components/Pages/Public/SignUpPage";
import SignInPage from "./assets/Components/Pages/Public/SignInPage";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import HomeLoged from "./assets/Components/Pages/Private/HomeLoged";
import NavLoged from "./assets/Components/NavLoged";
import Game from "./assets/Components/Game";
import CreateGame from "./assets/Components/Pages/Private/CreateGame";
import EditGame from "./assets/Components/Pages/Private/EditGame";
import WheelOfFortune from "./assets/Components/GamePopup";
export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage
  useEffect(() => {
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
      <Routes>
        <Route path="/" element={<HomeLoged />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="/addgame" element={<CreateGame />} />
        <Route path="/editgame/:gameId" element={<EditGame />} />
        <Route path="/spin" element={<WheelOfFortune />} />
      </Routes>
    </>
  );

  // variable holding all public routes without nav bar
  const publicRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/games/:gameId" element={<Game />} />
      <Route path="/editgame/:gameId" element={<SignInPage />} />
      <Route path="/spin" element={<WheelOfFortune />} />
    </Routes>
  );

  // if user is authenticated, show privateRoutes, else show publicRoutes
  return (
    <>
      {isAuth ? <NavLoged /> : <Nav />}
      <main>{isAuth ? privateRoutes : publicRoutes}</main>
    </>
  );
}
