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

  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

  let gamesToDisplay = [...games];

  if (searchValue) {
    gamesToDisplay = gamesToDisplay.filter((game) =>
      game.name.toLowerCase().includes(searchValue)
    );
  }

  gamesToDisplay.sort((game1, game2) => {
    console.log(sortBy);
    if (sortBy === "name") {
      return game1[sortBy].localeCompare(game2[sortBy]);
    } else if (sortBy === "createdAt") {
      return game2[sortBy] - game1[sortBy];
    }
  });

  return (
    <section className="gridContainer">
      <div className="titleAllGames">
        <h1>All Games</h1>
        <input
          type="search"
          placeholder="🔍 Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
      </div>
      <section className="filters-sorting">
        <label>
          <img src="src\assets\Icons\sortingArrows.svg" alt="" />

          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="createdAt">Newest</option>
            <option value="name">Name</option>
          </select>
        </label>
      </section>
      <section className="allGames ">
        {gamesToDisplay.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </section>
  );
}
