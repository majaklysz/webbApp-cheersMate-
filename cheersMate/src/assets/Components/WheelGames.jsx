import { useEffect, useState } from "react";

export default function WheelGames() {
  const [selectedTags, setSelectedTags] = useState([]);
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
    }
    getGames();
  }, []);

  return (
    <section className="gridContainer">
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
    </section>
  );
}
