import { useNavigate } from "react-router-dom";

function WeatherCard({ clima }) {
  const navigate = useNavigate();

  return (
    <div className="weather-card">
      <h2>{clima.name}</h2>
      <h1 className="temp">{Math.round(clima.main.temp)}°C</h1>

      <p className="desc">{clima.weather[0].description}</p>

      <div className="details">
        <p>Temperatura: {clima.main.temp}°C</p>
        <p>Sensação térmica: {clima.main.feels_like}°C</p>
        <p>Umidade: {clima.main.humidity}%</p>
        <p>Vento: {clima.wind.speed} m/s</p>
        <p>{clima.weather[0].description}</p>
      </div>

      <button 
        className="primary-button"
        onClick={() => navigate("/")}
      >
        Nova busca
      </button>
    </div>
  );
}

export default WeatherCard;