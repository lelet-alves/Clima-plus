import { useNavigate } from "react-router-dom";

function Erro() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="error-title">Cidade não encontrada</h2>
      <p className="error-text">
        Verifique o nome e tente novamente.
      </p>

      <button 
        className="primary-button"
        onClick={() => navigate("/")}
      >
        Tentar novamente
      </button>
    </div>
  );
}

export default Erro;