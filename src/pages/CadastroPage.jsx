import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/img/logo.svg";
import { ThreeDots } from "react-loader-spinner";

export default function PaginaCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);
  const nav = useNavigate();

  function cadastrar(e) {
    if (email && name && image && password) {
      setDisable(true);
      e.preventDefault();
      const objeto = { email: email, name: name, image: image, password:password };
      console.log(objeto);
      const url =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
      const promise = axios.post(url, objeto);
      promise.then(() => {
        nav("/");
      });

      promise.catch((erro) => {
        console.log(erro);
        const resposta = erro.response.data.message;
        alert(resposta);
        setDisable(false);
      });
    } else {
      alert("preencha todos os campos para seguir!");
    }
  }

  return (
    <PageContainer>
      <Link to={"/"}>
        <img src={logo}></img>
      </Link>

      <form onSubmit={cadastrar}>
        <input
          data-test="email-input"
          placeholder="email"
          type="email"
          disabled={disable}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          data-test="password-input"
          placeholder="senha"
          type="password"
          disabled={disable}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          data-test="user-name-input"
          placeholder="nome"
          type="text"
          disabled={disable}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          data-test="user-image-input"
          placeholder="foto"
          type="text"
          disabled={disable}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>

        <button data-test="signup-btn" type="submit" disabled={disable}>
          {disable ? (
            <ThreeDots
              height="13"
              width="50"
              redius="90"
              color="white"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}
        </button>

        <Link to={"/"}>
          <Cadastro data-test="login-link">
            Já tem uma conta? Faça o login!
          </Cadastro>
        </Link>
      </form>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  padding-top: 35px;

  img {
    height: 180px;
    width: 180px;
    margin: 32px;
  }
`;

const Cadastro = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 25px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;
