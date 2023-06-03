import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThreeDots from "react-three-dots";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/img/logo.svg";
import UsuarioContext from "../context/usuarioContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault();
    if (email && password) {
      setDisable(true);
      const obj = { email, password };
      const url =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
      const promise = axios.post(url, obj);
      promise.then((resposta) => {
        console.log(resposta.data);
        const usuario = { ...resposta.data };
        setUsuario(usuario);
        navigate("/")
      });

      promise.catch((erro) => {
        console.log(erro.response.data.message);
        alert(erro.response.data.message);
        setDisable(false);
      });
    } else {
      alert("preencha os campos para prosseguir!");
    }
  }

  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <form>
        <input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
          required
        ></input>
        <input
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable}
          required
        ></input>
        <button type="submit" disabled={disable}>
          {disable ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-disable"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link to={`/cadastro`}>
        <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  padding-top: 35px;
`;

const Logo = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: none;
  margin: 3px;
  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
`;

const Cadastro = styled.p`
  margin-top: 25px;
  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #52b6ff;
  }
`;