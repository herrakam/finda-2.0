import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

type sortProperty =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | ''
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';

type flexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type flexboxType = {
  dir?: flexDirectionType;
  horizontal?: sortProperty;
  vertical?: sortProperty;
};

const flexbox = ({
  dir = 'row',
  horizontal = 'flex-start',
  vertical = 'stretch',
}: flexboxType) => `
display: flex;
flex-direction: ${dir};
justify-content: ${horizontal};
align-items: ${vertical};
`;

const checkLayout = () => `border:1px solid black`;

export const mixin = {
  flexbox,
  checkLayout,
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
	box-sizing:border-box;
}
html{
    margin:0;
    padding:0;
    font-size:62.5%;
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

const size = {
  mobile: '480px',
  // tablet:'768px'
  web: '1240px',
};

export const viewSize = {
  mobile: `(max-width:${size.mobile})`,
  web: `(max-width:${size.web})`,
};
