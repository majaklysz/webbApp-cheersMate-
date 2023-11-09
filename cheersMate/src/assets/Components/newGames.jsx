//Maja

import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function NewGames() {
  const [games, setGames] = useState([]);

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

  const [sortBy] = useState("createdAt");

  let gamesToDisplay = [...games];

  // Sort the games by createdAt property in descending order
  gamesToDisplay.sort((game1, game2) => game2[sortBy] - game1[sortBy]);

  // Limit the displayed games to the 6 newest posts
  gamesToDisplay = gamesToDisplay.slice(0, 5);

  return (
    <section className="gridContainer2">
      <div className="titleAllGames">
        <h1>Newest Games</h1>
      </div>

      <section className="newGames">
        {gamesToDisplay.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
        <div className="seeMore">
          <img src="src\assets\Icons\eyeIcon.svg" alt="" />
          <h3>See More</h3>
        </div>
      </section>
    </section>
  );
}
