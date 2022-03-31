import "./allpage.css";

export default function all(props) {
  console.log(props);
  return (
    <div className="gamePage">
      <img src={props.data.img} alt="" />
      <h1>{props.data.info}</h1>
    </div>
  );
}
