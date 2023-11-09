//Maja

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function GameCard({ game }) {
  const localStorageKey = `liked_${game.id}`;
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );
  const navigate = useNavigate();
  const toggleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem(localStorageKey, newLikedState.toString());
  };

  useEffect(() => {
    // This effect runs when the component mounts.
    // It retrieves the liked state from localStorage and sets the initial state.
    setIsLiked(localStorage.getItem(localStorageKey) === "true");
  }, [localStorageKey]);

  const heartIconSrc = isLiked
    ? "/src/assets/Icons/blackIcons/png/heartcoloredFull.png"
    : "/src/assets/Icons/blackIcons/png/heartblackEmpty.png";
  return (
    <article className="mainCard" key={game.id}>
      <img
        onClick={() => navigate(`games/${game.id}`)}
        className="gameImage"
        src={game.imageURL}
        alt={game.name}
      />
      <div className="cardSmallDescription">
        <div className="players">
          <img src="src\assets\Icons\blackIcons\playersIcon.png" alt="" />
          {game.people}
        </div>
        <div className="heartBox">
          <img
            className="heartIconMain"
            src={heartIconSrc}
            onClick={toggleLike}
            alt="Heart Icon"
          />
        </div>
      </div>
    </article>
  );
}
