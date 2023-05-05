import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

html{
    margin:0;
    padding:0;
}
`;
