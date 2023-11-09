import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinResult from "./SpinResult";

export default function PopupRules2() {
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
  const specificGameId = "doDrink"; // Specify the ID you want to display

  const specificGame = gamesRules.find((game) => game.id === specificGameId);

  return (
    <section>
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
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16663 16C1.07889 16.0005 0.991913 15.9837 0.910688 15.9505C0.829463 15.9174 0.755586 15.8685 0.693293 15.8067C0.630807 15.7447 0.581211 15.671 0.547365 15.5897C0.513519 15.5085 0.496094 15.4214 0.496094 15.3334C0.496094 15.2453 0.513519 15.1582 0.547365 15.077C0.581211 14.9957 0.630807 14.922 0.693293 14.86L6.13996 9.41336C6.51449 9.03836 6.72487 8.53003 6.72487 8.00003C6.72487 7.47003 6.51449 6.9617 6.13996 6.5867L0.693293 1.14004C0.567757 1.01451 0.497231 0.844242 0.497231 0.666708C0.497231 0.489174 0.567757 0.318911 0.693293 0.193375C0.818828 0.0678396 0.989092 -0.00268555 1.16663 -0.00268555C1.34416 -0.00268555 1.51442 0.0678396 1.63996 0.193375L7.08663 5.64004C7.39705 5.94967 7.64333 6.31751 7.81138 6.72248C7.97942 7.12744 8.06592 7.56158 8.06592 8.00003C8.06592 8.43848 7.97942 8.87262 7.81138 9.27759C7.64333 9.68256 7.39705 10.0504 7.08663 10.36L1.63996 15.8067C1.57767 15.8685 1.50379 15.9174 1.42256 15.9505C1.34134 15.9837 1.25436 16.0005 1.16663 16Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
