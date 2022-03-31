import "./Game.css";

export default function game(props) {
  return (
    <div className="Game">
      <img src={props.img} alt="logo" className="game-logo" />
      <h2>{props.title}</h2>
    </div>
  );
}
