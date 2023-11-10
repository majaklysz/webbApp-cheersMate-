//Maciek

import { useState, useEffect } from "react";

export default function SpinResult({ game }) {
  const localStorageKey = `liked_${game.id}`;
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );

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
    : "/src/assets/Icons/heart.svg";

  return (
    <article className="popupcontent">
      <img className="spinImage" src={game.imageURL} />
      <div className="modaltext">
        <div className="row1">
          <h2 className="gamename">{game.name}</h2>
          <span className="icons">
            <img src="/src/assets/Icons/fi-rr-share.svg" alt="time" />
            <div className="heartBox">
              <img
                className="heartIconMain"
                src={heartIconSrc}
                onClick={toggleLike}
              />
            </div>
          </span>
        </div>
        <br />
        <br />
        <div className="row2">
          <span className="icons">
            <img src="/src/assets/Icons/people.svg" alt="time" />
            <h3 className="gamename">{game.people}</h3>
          </span>
          <span className="icons">
            <img
              src="/src/assets/Icons/hourglass.svg"
              alt="time"
            />
            <h3 className="gamename">{game.time}</h3>
          </span>
        </div>
        <br />
        <div className="row3">
          <span className="icons">
            <img src="/src/assets/Icons/bowling.svg" alt="time" />
            <h3 className="gamename">{game.equipment}</h3>
          </span>
        </div>
      </div>
    </article>
  );
}
