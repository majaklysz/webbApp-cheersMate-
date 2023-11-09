//Maja

import { useEffect, useState } from "react";

export default function CreateGameForm({ saveGame, game }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");
  const [equipment, setEquipment] = useState("");
  const [intro, setIntro] = useState("");
  const [description, setDescription] = useState("");
  const [winning, setWinning] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (game) {
      setImage(game.imageURL);
      setName(game.name);
      setPeople(game.people);
      setTime(game.time);
      setEquipment(game.equipment);
      setIntro(game.rules.intro || "");
      setDescription(game.rules.description || "");
      setWinning(game.rules.winning || "");
    }
  }, [game]);

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (file.size < 500000) {
      // image file size must be below 0,5MB
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage state
    } else {
      // if not below 0.5MB display an error message using the errorMessage state
      setErrorMessage("The image file must be below 0,5 MB");
    }
  }
  async function uploadImage() {
    const url = `https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/${imageFile.name}`;
    const response = await fetch(url, {
      method: "POST",
      body: imageFile,
      headers: { "Content-Type": imageFile.type },
    });
    const data = await response.json();
    console.log(data);
    const imageURL = `${url}?alt=media`;
    return imageURL;
  }

  async function handleSub(event) {
    event.preventDefault();
    const imageURL = await uploadImage();
    const post = {
      image: imageURL,
      name: name,
      people: people,
      time: time,
      equipment: equipment,
      rules: {
        intro: intro,
        description: description,
        winning: winning,
      },
    }; // new post that's being created needs these properties/values

    const validForm =
      post.name &&
      post.image &&
      post.people &&
      post.time &&
      post.equipment &&
      post.rules.intro &&
      post.rules.description &&
      post.rules.winning; // will return false if one of the properties doesn't have a value

    if (validForm) {
      try {
        const savedGame = await saveGame(post);

        // Check if the saveGame function returns an ID
        if (savedGame && savedGame.id) {
          console.log("Game saved successfully with ID:", savedGame.id);
          setErrorMessage(""); // Reset error message
        } else {
          setErrorMessage("Error: Game ID not found in the saved data.");
        }
      } catch (error) {
        // Handle error during save
        console.error("Error saving the game:", error);
        setErrorMessage("Error saving the game. Please try again.");
      }
    } else {
      // if not, set errorMessage state.
      setErrorMessage("Please, fill in all fields.");
    }
  }

  return (
    <form className="createForm" onSubmit={handleSub}>
      <div className="cellForm">
        <label>Name of the game</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="cellForm">
        <label>Players</label>
        <input
          type="text"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="Eg. 4+"
        />
      </div>
      <div className="cellForm">
        <label>Time of the game</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Eg. 30+ min"
        />
      </div>
      <div className="cellForm">
        <label>Equipment needed</label>
        <input
          type="text"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="cellForm">
        <label>Small intro for the game</label>
        <input
          type="text"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="cellForm">
        <label>Rules of the game</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="cellForm">
        <label>Who is winning the game?</label>
        <input
          type="text"
          value={winning}
          onChange={(e) => setWinning(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div className="cellForm">
        <label>Image</label>
        <input type="file" onChange={handleImageChange} />
        <div className="imageBox">
          <img
            className="image-preview"
            src={image}
            alt="Choose"
            onError={(event) => (event.target.src = "")}
          />
        </div>
      </div>
      <p className="text-error">{errorMessage}</p>
      <button type="submit" className="createGame">
        Create
      </button>
    </form>
  );
}
