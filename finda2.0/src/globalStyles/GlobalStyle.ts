import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const mixin = {
  flexbox: ({ dir = 'row', horizontal = '', vertical = '' }) => `
	  display: flex;
	  flex-direction: ${dir};
	  justify-content: ${horizontal};
	  align-items: ${vertical};
	  `,
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
	box-sizing:border-box;
}
html{
    margin:0;
    padding:0;
}
body {
		width: 100vw;
		height: 100vh;
		font-family: "Noto Sans KR", sans-serif;
	}

	img {
		width: 100%;
		height: 100%;
	}

	button {
		font: inherit;
		cursor: pointer;
	}

	input {
		font: inherit;
	}

	a {
		text-decoration:none;
    cursor: pointer;
	}
`;
