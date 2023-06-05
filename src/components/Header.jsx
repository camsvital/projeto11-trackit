import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Header() {
  const { usuario } = useContext(Context);

  return (
    <>
      <Header>
        <span>TrackIt</span>
        <img src={usuario.image} alt="image" />
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #126ba5;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  top: 0;
  margin-bottom: 30px;
  span {
    font-weight: 400;
    text-align: left;
    top: 10px;
    border-radius: nullpx;
    color: #ffffff;
    font-family: Playball;
    height: 49px;
    width: 97px;
    left: 18px;
    font-size: 39px;
    margin: 0px 18px;
  }

  img {
    border-radius: 98.5px;
    height: 51px;
    object-fit: cover;
    width: 51px;
    margin: 0px 18px;
  }
`;
