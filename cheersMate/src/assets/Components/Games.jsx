import { useEffect, useState } from "react";

import GameCard from "./GameCard";

export default function Games() {
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
      })); // from object to array

      setGames(gamesArray);
    }
    getGames();
  }, []);
  return (
    <section className="gridContainer">
      <h1>Games</h1>
      <section className="allGames ">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </section>
  );
}
