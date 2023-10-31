import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./assets/Components/Nav";
import Home from "./assets/Components/Pages/Home";
import Profile from "./assets/Components/Pages/Profile";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
