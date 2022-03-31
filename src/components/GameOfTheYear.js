import "./GameOf.css";
import { Link } from "react-router-dom";

export default function game() {
  return (
    <Link to="/game1">
      <div className="GameOf">
        <div className="container">
          <div className="title">
            <h5>Game of the Year</h5>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU_P2_Box_Art_2.png"
            alt="logo"
            className="logo"
          />
          <h1>Last of Us Part 2</h1>
        </div>
      </div>
    </Link>
  );
}
