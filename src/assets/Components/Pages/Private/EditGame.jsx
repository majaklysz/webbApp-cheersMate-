//Maja
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditGame() {
  const navigate = useNavigate();
  const params = useParams();
  const [game, setGame] = useState({});
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [intro, setIntro] = useState("");
  const [winning, setWinning] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games/${params.gameId}.json`;

  useEffect(() => {
    async function getGame() {
      const response = await fetch(url);
      const data = await response.json();
      setGame(data);
    }
    getGame();
  }, [url, params?.gameId]);

  useEffect(() => {
    setName(game?.name || "");
    setImageURL(game?.imageURL || "");
    setEquipment(game?.equipment || "");
    setPeople(game?.people || "");
    setTime(game?.time || "");
    setDescription(game.rules?.description || "");
    setIntro(game.rules?.intro || "");
    setWinning(game.rules?.winning || "");
  }, [game]);

  async function handleSub(event) {
    event.preventDefault();
    const gameToUpdate = {
      imageURL: imageURL,
      name: name,
      people: people,
      time: time,
      equipment: equipment,
      rules: {
        intro: intro,
        description: description,
        winning: winning,
      },
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(gameToUpdate),
    });

    if (response.ok) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // image file size must be below 0,5MB
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageURL(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage state
    } else {
      // if not below 0.5MB display an error message using the errorMessage state
      setErrorMessage("The image file is too big!");
    }
  }
  async function handleDelete() {
    const wantToDelete = confirm("Are you sure you want to delete?");

    if (wantToDelete) {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    }
  }
  return (
    <>
      <form className="createForm" onSubmit={handleSub}>
        <h1>Edit {name}</h1>
        <div className="cellForm">
          <label>Name of the game</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Players</label>
          <input
            type="text"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Time of the game</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Equipment needed</label>
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Small intro for the game</label>
          <input
            type="text"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Rules of the game</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Who is winning the game?</label>
          <input
            type="text"
            value={winning}
            onChange={(e) => setWinning(e.target.value)}
          />
        </div>
        <div className="cellForm">
          <label>Image</label>
          <input type="file" onChange={handleImageChange} />
          <div className="imageBox">
            <img
              className="image-preview"
              src={imageURL}
              alt="Choose"
              onError={(event) => (event.target.src = "")}
            />
          </div>
        </div>
        <p className="text-error">{errorMessage}</p>
        <button type="submit" className="createGame">
          Save Changes
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </>
  );
}
