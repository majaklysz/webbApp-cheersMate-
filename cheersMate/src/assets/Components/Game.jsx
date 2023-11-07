import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Game() {
  const [game, setGame] = useState({});
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [des, setDes] = useState("");
  const [intro, setIntro] = useState("");
  const [winning, setWinning] = useState(""); // Corrected the typo here.

  const params = useParams();
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games/${params.gameId}.json`;

  useEffect(() => {
    async function getPost() {
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
    getPost();
  }, [url]);

  return (
    <article key={game}>
      <div className="gameBox">
        <img src={image} alt="Game Image" />
      </div>
      <div>
        <h2>{name}</h2>
        <div className="eqBox">
          <img src="src\assets\Icons\bowling.svg" alt="time" />
          <p>{equipment}</p>
        </div>
        <div className="players">
          <img src="src\assets\Icons\people.svg" alt="time" />
          <p>{people}</p>
        </div>
        <div className="timeBox">
          <img src="src\assets\Icons\hourglass.svg" alt="time" />
          <p>{time}</p>
        </div>
        <div>
          <p>Description: {des}</p>
          <p>Intro: {intro}</p>
          <p>Winning: {winning}</p>
        </div>
      </div>
    </article>
  );
}
