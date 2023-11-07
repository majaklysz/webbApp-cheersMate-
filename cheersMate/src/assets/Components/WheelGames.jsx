// import { useEffect, useState } from "react";

// export default function Games() {
//   const [games, setGames] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [sortBy, setSortBy] = useState("createdAt");
//   const [selectedTags, setSelectedTags] = useState([]);
//   const allTags = [
//     "indoor",
//     "outdoor",
//     "cards",
//     "dices",
//     "team",
//     "pen&paper",
//     "non-drinkers",
//     "recomended",
//   ];



//   // Define handleTagSelection function
//   const handleTagSelection = (e) => {
//     const tag = e.target.value;
//     if (e.target.checked) {
//       setSelectedTags([...selectedTags, tag]);
//     } else {
//       setSelectedTags(
//         selectedTags.filter((selectedTag) => selectedTag !== tag)
//       );
//     }
//   };

//   useEffect(() => {
//     async function getGames() {
//       const url =
//         "https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games.json";
//       const response = await fetch(url);
//       const data = await response.json();
//       const gamesArray = Object.keys(data).map((key) => ({
//         id: key,
//         ...data[key],
//       }));
//       setGames(gamesArray);
//     }
//     getGames();
//   }, []);

//   let gamesToDisplay = [...games];

//   if (searchValue) {
//     gamesToDisplay = gamesToDisplay.filter((game) =>
//       game.name.toLowerCase().includes(searchValue)
//     );
//   }

//   if (selectedTags.length > 0) {
//     gamesToDisplay = gamesToDisplay.filter((game) =>
//       selectedTags.every((tag) => game.tags.includes(tag))
//     );
//   }

//   gamesToDisplay.sort((game1, game2) => {
//     if (sortBy === "name") {
//       return game1.name.localeCompare(game2.name);
//     } else if (sortBy === "createdAt") {
//       return game2.id - game1.id;
//     }
//   });

//   return (
//     <section className="gridContainer">
//       {allTags.map((tag) => (
//         <label key={tag}>
//           <input
//             type="checkbox"
//             value={tag}
//             checked={selectedTags.includes(tag)}
//             onChange={handleTagSelection}
//           />
//           {tag}
//         </label>
//       ))}
//     </section>
//   );
// }
