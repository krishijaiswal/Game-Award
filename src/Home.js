import GameOfTheYear from "./components/GameOfTheYear";
import Game from "./components/Games";

export default function Home() {
  return (
    <div className="main">
      <GameOfTheYear />

      <Game />
    </div>
  );
}
