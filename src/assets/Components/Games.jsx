//Maja
import { useEffect, useState } from "react";
import GameCard from "./GameCard";

export default function Games() {
  const [games, setGames] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [selectedTags, setSelectedTags] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const allTags = [
    "indoor",
    "outdoor",
    "cards",
    "dices",
    "team",
    "pen&paper",
    "non-drinkers",
    "recomended",
  ];

  const handleDorpdown = () => {
    setDropdown(!dropdown);
  };

  // Define handleTagSelection function
  const handleTagSelection = (e) => {
    const tag = e.target.value;
    if (e.target.checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    }
  };

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

  let gamesToDisplay = [...games];

  if (searchValue) {
    gamesToDisplay = gamesToDisplay.filter((game) =>
      game.name.toLowerCase().includes(searchValue)
    );
  }

  if (selectedTags.length > 0) {
    gamesToDisplay = gamesToDisplay.filter(
      (game) => game.tags && selectedTags.some((tag) => game.tags.includes(tag))
    );
  }

  gamesToDisplay.sort((game1, game2) => {
    if (sortBy === "name") {
      return game1.name.localeCompare(game2.name);
    } else if (sortBy === "createdAt") {
      return game2.id - game1.id;
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
        <div>
          <div className="filter" onClick={handleDorpdown}>
            <img src="src\assets\Icons\fi-rr-filter.svg" alt="" />
            <h3>Filter</h3>
          </div>
          <div
            className="dropdown"
            style={{ display: dropdown ? "block" : "none" }}
          >
            {allTags.map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={handleTagSelection}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
        <label>
          <img src="src\assets\Icons\sortingArrows.svg" alt="" />
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="createdAt">Newest</option>
            <option value="name">Name</option>
          </select>
        </label>
      </section>
      <section className="allGames">
        {gamesToDisplay.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </section>
    </section>
  );
}
