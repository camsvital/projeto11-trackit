import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../src/style/GlobalStyle";
import Login from "./pages/LoginPage";
import Cadastro from "./pages/CadastroPage";
/*import Habitos from "./pages/HabitosPage";
import Hoje from "./pages/HojePage";
import Historico from "./pages/HistoricoPage"*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
