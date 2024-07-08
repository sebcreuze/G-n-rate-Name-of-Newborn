import boys from "../assets/images/boy-symbol.png";

function Boys() {
  return (
    <div className="boys">
      <button className="boys-button" type="button">
        <img src={boys} alt="Symbol of gender boys" />
      </button>
      <h2>Hello my name is</h2>
      <p>Sébastien</p>
    </div>
  );
}

export default Boys;
