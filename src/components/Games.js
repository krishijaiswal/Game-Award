import "./games.css";
import Game from "./Game";

export default function Games() {
  return (
    <div className="game-container">
      <Game
        img={
          " https://cdn.mos.cms.futurecdn.net/iPKatp6VvEFwBwMeYXSwhR-1024-80.jpg.webp"
        }
        title={"Doom Eternals"}
      />

      <Game
        img={
          " https://variety.com/wp-content/uploads/2021/03/ghost-of-tsushima-background-block-01-ps4-en-21jul20.jpeg?w=681&h=383&crop=1&resize=681%2C383"
        }
        title={"Ghost of Tsushima"}
      />

      <Game
        img={
          "https://cdn.vox-cdn.com/thumbor/YpWKIEGOf03LT7ru5Qj_p80weC8=/0x0:1920x1079/1220x813/filters:focal(826x298:1132x604):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67564496/Hades_Wallpaper_01.0.jpg"
        }
        title={"Hades"}
      />

      <Game
        img={
          "https://upload.wikimedia.org/wikipedia/en/0/05/Final_Fantasy_VI.jpg"
        }
        title={"Final Fantasy VI"}
      />
    </div>
  );
}
