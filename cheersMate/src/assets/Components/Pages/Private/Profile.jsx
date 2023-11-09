//Maja
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../../../firebase";
import { useNavigate } from "react-router";
import GameCard from "../../GameCard";

export default function Profile() {
  const auth1 = getAuth(); // Initialize auth1 before using it
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/users/${auth1.currentUser?.uid}.json`;
  const [name, setName] = useState("");
  const [authUser, setAuthUser] = useState(null);

  console.log(authUser);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url);
      const userData = await response.json();

      if (userData) {
        setName(userData.name);
      }
    }
    getUser();
  }, [auth1.currentUser, url]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const [games, setGames] = useState([]);
  const [likedGames, setLikedGames] = useState([]);

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
  useEffect(() => {
    // This effect runs when the component mounts.
    // It retrieves the liked games from localStorage and sets the initial state.
    const likedGamesArray = games.filter(
      (game) => localStorage.getItem(`liked_${game.id}`) === "true"
    );
    setLikedGames(likedGamesArray);
  }, [games]);
  return (
    <section className="profile">
      <div className="user">
        <div className="userImage">
          <img src="/src/assets/Icons/☺.svg" alt="" />
        </div>
        <h1>@{name}</h1>
      </div>
      <div className="favgame">
        <h2>Favorite Games:</h2>
        <div className="allGames">
          {likedGames.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      </div>

      <div>
        <button className="byebye" onClick={userSignOut}>
          Sign Out
        </button>
      </div>
    </section>
  );
}
