
import "./App.css";
import WheelOfFortune from "./assets/Components/GamePopup";
import { Route, Routes } from "react-router-dom";
import Nav from "./assets/Components/Nav";
import Profile from "./assets/Components/Pages/Profile";
import Home from "./assets/Components/Pages/Home";
import Game from "./assets/Components/Game";

  // variable holding all private routes including the nav bar
  const privateRoutes = (
    <>
      <Routes>
        <Route path="/" element={<HomeLoged />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="/addgame" element={<CreateGame />} />
        <Route path="/editgame/:gameId" element={<EditGame />} />
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
    </Routes>
  );

  // if user is authenticated, show privateRoutes, else show publicRoutes
  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<Game />} />

          <Route path="/spin" element={<WheelOfFortune />} />
        </Routes>
      </main>
    </>
  );
}
