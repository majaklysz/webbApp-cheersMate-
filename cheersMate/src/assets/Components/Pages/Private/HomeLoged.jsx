//Maja
import { useNavigate } from "react-router";
import Games from "../../Games";
import NewGames from "../../newGames";

export default function HomeLoged() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pickChoose">
        <div className="pickHeading">
          <h1>Pick & Choose</h1>
          <div className="smilyFace">
            <img src="src\assets\Icons\☺.svg" />
          </div>
        </div>
        <div className="pickContent">
          <div
            className="cardFav pickCards"
            onClick={() => navigate("/profile")}
          >
            <img src="src\assets\Icons\heart.svg" />
            <h3>Favorite</h3>
          </div>
          <a href="/spin">
            <div className="cardRandom pickCards">
              <img src="src\assets\Icons\randomIcon.svg" />
              <h3>Random</h3>
            </div>
          </a>
          <div className="cardDice pickCards">
            <img src="src\assets\Icons\diceIcon.svg" />
            <h3>Dices</h3>
          </div>
          <div className="cardCards pickCards">
            <img src="src\assets\Icons\cardsIcon.svg" />
            <h3>Cards</h3>
          </div>
          <div className="cardIndoor pickCards">
            <img src="src\assets\Icons\home.svg" />
            <h3>Indoor</h3>
          </div>
          <div className="cardOutdoor pickCards">
            <img src="src\assets\Icons\treeIcon.svg" />
            <h3>Outdoor</h3>
          </div>
        </div>
      </div>
      <div className="newGamesSection">
        <NewGames />
      </div>
      <div className="recoGamesSection"></div>
      <div className="allGamesSection">
        <Games />
      </div>
    </>
  );
}
