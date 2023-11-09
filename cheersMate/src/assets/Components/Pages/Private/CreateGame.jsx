//Maja
import { useNavigate } from "react-router-dom";
import CreateGameForm from "../../CreateGameForm";

export default function CreateGame() {
  const navigate = useNavigate("");

  async function createGame(newPost) {
    const url =
      "https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/games.json";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      navigate("/");
    }
  }
  return (
    <section className="addNewGame">
      <h1>Add New Game:</h1>
      <CreateGameForm saveGame={createGame} />
    </section>
  );
}
