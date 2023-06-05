import { useContext } from "react";
import Context from "../context/Context";
import Header from "../components/Header";

export default function Habitos() {
  const { login } = useContext(Context);

  return (
    <Habitos>
      <Header />
      <AdicionarHabitos />
      <h1>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </h1>
      {console.log(login)}
      <Menu />
    </Habitos>
  );
}
