import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./assets/Components/Nav";
import Home from "./assets/Components/Pages/Home";
import Profile from "./assets/Components/Pages/Profile";
import Game from "./assets/Components/Game";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/games/:gameId" element={<Game />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
