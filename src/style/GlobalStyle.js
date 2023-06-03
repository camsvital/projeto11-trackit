import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lexend Deca', sans-serif;
		background-color: #f2f2f2;
		height: 100vh;
    }
	button {
        background: #52b6ff;
        border-radius: 5px;
		border-style: none;
        font-style: normal;
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
        
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
        border-radius: 5px;
		height: 45px;
		margin-bottom: 6px;
		padding: 0 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
		display: flex;
		align-items: center;
        width: 300px;
        
        box-sizing: border-box;
        &::placeholder{
			color: #DBDBDB;
		}
	}
`;

export default GlobalStyle;