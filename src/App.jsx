import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resultado from "./pages/Resultado";
import Erro from "./pages/Erro";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/erro" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;