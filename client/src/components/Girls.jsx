import girls from "../assets/images/girl-symbol.png";

function Girls() {
  return (
    <div className="girls">
      <button type="button" className="girls-button">
        <img src={girls} alt="Symbol of gender girls" />
      </button>
      <h2>Hello my name is</h2>
      <p>Jade</p>
    </div>
  );
}

export default Girls;
