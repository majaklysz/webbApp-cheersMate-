export default function Game({ game }) {
  return (
    <article key={game.id}>
      <img src={game.imageURL} alt={game.name} />
      <div>
        <h2>{game.name}</h2>
        <p>Equipment: {game.equipment}</p>
        <p>Number of Players: {game.people}</p>
        <p>Time: {game.time}</p>
        <div>
          <p>Description: {game.description}</p>
          <p>Description: {game.into}</p>
          <p>Description: {game.winning}</p>
        </div>
      </div>
    </article>
  );
}
