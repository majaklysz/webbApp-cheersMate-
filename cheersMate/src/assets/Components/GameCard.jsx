export default function GameCard({ game }) {
  return (
    <article className="mainCard" key={game.id}>
      <img className="gameImage" src={game.imageURL} alt={game.name} />
      <div className="cardSmallDescription">
        <div className="players">
          <img src="src\assets\Icons\blackIcons\playersIcon.png" alt="" />
          {game.people}
        </div>
        <img
          className="heartIconMain"
          src="src\assets\Icons\blackIcons\blackheart.svg"
          alt=""
        />
      </div>
    </article>
  );
}
