
import "./App.css";
import WheelOfFortune from "./assets/Components/GamePopup";
import { Route, Routes } from "react-router-dom";
import Nav from "./assets/Components/Nav";
import Profile from "./assets/Components/Pages/Profile";
import Home from "./assets/Components/Pages/Home";
import Game from "./assets/Components/Game";
function App() {
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

export default App;
