import Games from "../Games";

export default function Home() {
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
          <div className="cardFav pickCards">
            <img src="src\assets\Icons\heart.svg" />
            <h3>Favorite</h3>
          </div>
          <div className="cardRandom pickCards">
            <img src="src\assets\Icons\randomIcon.svg" />
            <h3>Random</h3>
          </div>
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
      <div className="newestgameSection">
        <Games />
      </div>
    </>
  );
}
