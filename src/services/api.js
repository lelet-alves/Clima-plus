import axios from "axios";

const API_KEY = "04231dc0079a466f3b7f5bc4793f6951";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const buscarClima = async (cidade) => {
  try {
    const response = await api.get(
      `weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    throw error;
  }
};