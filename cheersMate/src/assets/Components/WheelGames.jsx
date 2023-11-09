//Maciek

import { useEffect, useState } from "react";

export default function WheelGames() {
  const [games, setGames] = useState([]);
  const [searchValue] = useState("");
  const [sortBy] = useState("createdAt");
  const [selectedTags] = useState([]);
  const allTags = [
    "indoor",
    "outdoor",
    "cards",
    "dices",
    "team",
    "pen&paper",
    "non-drinkers",
    "recommended",
  ];

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
    gamesToDisplay = gamesToDisplay.filter((game) =>
      selectedTags.every((tag) => game.tags.includes(tag))
    );
  }
  gamesToDisplay.sort((game1, game2) => {
    if (sortBy === "name") {
      return game1.name.localeCompare(game2.name);
    } else if (sortBy === "createdAt") {
      return game2.id - game1.id;
    }
  });

  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };
  return (
    <section className="tagscontainer">
      {allTags.map((tag) => (
        <div className="wheeltags" key={tag}>
          <div
            onClick={() => handleTagClick(tag)}
            className={`wheeltagsinside ${
              selectedTag === tag ? "selected" : ""
            }`}
          >
            <label key={tag}>
              <input type="checkbox" value={tag} />
              {tag}
            </label>
            <div id="aesthetics"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
