//Maja

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Game() {
  const [game, setGame] = useState({});
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [des, setDes] = useState("");
  const [intro, setIntro] = useState("");
  const [winning, setWinning] = useState("");

  const params = useParams();
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games/${params.gameId}.json`;
  const navigate = useNavigate();
  useEffect(() => {
    async function getGame() {
      const response = await fetch(url);
      const data = await response.json();
      setGame(data);

      if (data) {
        setName(data.name);
        setImage(data.imageURL);
        setEquipment(data.equipment);
        setTime(data.time);
        setPeople(data.people);

        if (data.rules) {
          setDes(data.rules.description || "");
          setIntro(data.rules.intro || "");
          setWinning(data.rules.winning || "");
        }
      }
    }
    getGame();
  }, [url]);

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
    : "/src/assets/Icons/blackIcons/png/WhiteHeart.png";

  return (
    <article className="gamePage" key={game}>
      <div className="imageGameBox">
        <img src={image} alt="Game Image" />
      </div>
      <div className="underImage">
        <div className="titleUnder">
          <h1>{name}</h1>
          <div className="shareHeart">
            <img src="/src/assets/Icons/fi-rr-share.svg" alt="" />
            <img
              className="heartIconMain"
              src={heartIconSrc}
              onClick={toggleLike}
            />
          </div>
        </div>
        <div className="iconsBox">
          <div className="iconBox people">
            <img src="/src/assets/Icons/people.svg" alt="time" />
            <p>{people}</p>
          </div>
          <div className="iconBox">
            <img src="/src/assets/Icons/hourglass.svg" alt="time" />
            <p>{time}</p>
          </div>
          <div className="iconBox">
            <img src="/src/assets/Icons/bowling.svg" alt="time" />
            <p>{equipment}</p>
          </div>
        </div>
        <div className="rulesBox">
          <div className="ruresDropdown">
            <h2>Basic Rules</h2>
          </div>
          <div className="rulesContentBox">
            <div className="introBox">
              <h2>Intro</h2>
              <p>{intro}</p>
            </div>
            <div className="introBox">
              <h2>Rules</h2>
              <p>{des}</p>
            </div>
            <div className="introBox">
              <h2>Winning</h2>
              <p>{winning}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="editDelete">
        <button
          className="edit"
          onClick={() => navigate(`/editgame/${game.id}`)}
        >
          Edit
        </button>
      </div>
    </article>
  );
}
