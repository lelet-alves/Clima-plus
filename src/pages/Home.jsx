import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarClima } from "../services/api";
import Loader from "../components/Loader";

function Home() {
  const [cidade, setCidade] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBuscar = async () => {
    if (!cidade) return;

    try {
      setLoading(true);
      const dados = await buscarClima(cidade);
      navigate("/resultado", { state: dados });
    } catch (error) {
      navigate("/erro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Clima Plus ☀️</h1>
      <p className="subtitle">Consulte o clima da sua cidade</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>

      {loading && <Loader />}
    </div>
  );
}

export default Home;