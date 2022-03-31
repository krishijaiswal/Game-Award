import "./NavBar.css";

export default function Game() {
  //navbar that only shows logo and title
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://img.onesignal.com/permanent/e0e1bcf6-82a1-41de-ad65-ed81b8d18f2a"
          alt="logo"
          className="navbar-logo-img"
        />
      </div>
      <div className="navbar-title">
        <h1>Game Awards</h1>
      </div>
    </div>
  );
}
