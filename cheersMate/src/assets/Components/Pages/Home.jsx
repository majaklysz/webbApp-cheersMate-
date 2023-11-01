export default function Home() {
  return (
    <div className="pickChoose">
      <div className="pickHeading">
        <h1>
          Pick & Choose
          <span className="smilyFace">
            <img src="src\assets\Icons\☺.svg" />
          </span>
        </h1>
      </div>
      <div className="pickContent">
        <div className="cardFav topCards">
          <img src="src\assets\Icons\heart.svg" />
          <h3>Favorite</h3>
        </div>
      </div>
    </div>
  );
}
