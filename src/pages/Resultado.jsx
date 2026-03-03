import { useLocation, useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const clima = location.state;

  if (!clima) {
    navigate("/");
    return null;
  }

  return (
    <div className="container">
      <WeatherCard clima={clima} />
    </div>
  );
}

export default Resultado;