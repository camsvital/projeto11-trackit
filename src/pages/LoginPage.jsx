import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/img/logo.svg";
import context from "../context/Context";

export default function Login() {
  const { usuario, setUsuario } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault();
    if (email && password) {
      setDisable(true);
      const obj = { email: email, password: password };
      const url =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
      const promise = axios.post(url, obj);
      promise.then((resposta) => {
        console.log(resposta.data);
        const user = { ...resposta.data };
        setUsuario(user);
        navigate("/");
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
      <img src={logo} alt="logo" />
      <form onSubmit={entrar}>
        <input
          data-test="email-input"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
        ></input>
        <input
          data-test="password-input"
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disable}
        ></input>
        <button data-test="login-btn" type="submit" disabled={disable}>
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
        <Cadastro data-test="signup-link">
          Não tem uma conta? Cadastre-se!
        </Cadastro>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 30px;
  padding-top: 60px;
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
