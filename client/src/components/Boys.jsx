import { useState, useEffect } from "react";
import axios from "axios";
import boys from "../assets/images/boy-symbol.png";

function Boys() {
  const [names, setNames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Définition de fetchData avant son utilisation dans useEffect
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://127.0.0.1:3310/api/boys");

      if (Array.isArray(response.data) && response.data.length > 0) {
        setNames(response.data.map((item) => item.Boy_name));
        setCurrentIndex(0); // Définir l'index initial à 0
      } else {
        setError("Aucun prénom trouvé dans la réponse de l'API");
      }
    } catch (err) {
      setError("Erreur lors de la récupération des prénoms");
      console.error("Erreur lors de la récupération des prénoms:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showNextName = () => {
    const nextIndex = (currentIndex + 1) % names.length; // Calcul du prochain index circulairement
    setCurrentIndex(nextIndex);
  };

  const handleClickImage = () => {
    showNextName();
  };

  const renderContent = () => {
    if (loading) {
      return <p>Chargement...</p>;
    }
    if (error) {
      return <p>{error}</p>;
    }
    if (names.length === 0) {
      return <p>Aucun prénom disponible</p>;
    }
    return <p>{names[currentIndex]}</p>;
  };

  return (
    <div className="boys">
      <button className="boys-button" onClick={handleClickImage} type="button">
        <img src={boys} alt="Symbol of gender boys" />
      </button>
      <h2>Hello my name is</h2>
      {renderContent()}
    </div>
  );
}

export default Boys;
