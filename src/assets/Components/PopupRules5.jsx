//Maciek

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinResult from "./SpinResult";

export default function PopupRules5() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getGames() {
      const url =
        "https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games.json";
      const response = await fetch(url);
      const data = await response.json();
      const gamesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setGames(gamesArray);
    }
    getGames();
  }, []);
  const gamesRules = [...games];
  const specificGameId = "kingsCup"; // Specify the ID you want to display

  const specificGame = gamesRules.find((game) => game.id === specificGameId);

  return (
    <div className="popupcontent">
      <div className="popupcontainer">
        {specificGame && (
          <div className="randomgamepop" key={specificGame.id}>
            <SpinResult key={specificGame.id} game={specificGame} />
            <button
              className="seemoreMR"
              onClick={() => navigate(`/games/${specificGame.id}`)}
            >
              See Rules
              <img
                src="/src/assets/Icons/fi-rr-angle-small-right.svg"
                alt="arrow"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
