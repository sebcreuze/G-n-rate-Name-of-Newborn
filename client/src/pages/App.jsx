import "../styles/App.css";
import Boys from "../components/Boys";
import Girls from "../components/Girls";
import Mixtes from "../components/Mixtes";

function App() {
  return (
    <section className="page-container">
      <h1>Hello Newborn What’s your Name ?</h1>
      <section className="symbol-container">
        <Boys />
        <Mixtes />
        <Girls />
      </section>
    </section>
  );
}

export default App;
