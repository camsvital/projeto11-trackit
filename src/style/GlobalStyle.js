import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lexend Deca', sans-serif;
		background: #FFFFFF;
		height: 100vh;
    }
	button {
        background: #52b6ff;
        border-radius: 5px;
		border-style: none;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 10px 20px;
        box-sizing: border-box;
        width: 303px;
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		border: 1px solid #D5D5D5;
        border-radius: 5px;
		height: 45px;
		padding: 0 10px;
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
		display: flex;
		align-items: center;
        width: 303px;
		font-family: Lexend Deca;
		font-size: 20px;
		font-weight: 400;

        
        box-sizing: border-box;
        &::placeholder{
			color: #DBDBDB;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
`;

export default GlobalStyle;
