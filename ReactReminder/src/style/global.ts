import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --black-300: #303c40;
 --black-600: #212529;
 --black-900: #292836;
 --yellow-600: #febe01;
 --yellow-300: #fff30d;

 --font-yellow:#febe01;
 --font-black:#212529;
 --font-white:#ffffff;
 --font-grey: #A0A0A0;
}

* {
 margin:0;
 padding: 0;
 box-sizing: border-box;
}

html {
 @media (max-width: 1080px) {
  font-size: 93.75%; //15 pixels
 }
 @media (max-width: 720px) {
  font-size: 87.5%; // 14 pixels
 }
}

h1 {
 color: var(--black-300);
 font-family: 'Roboto';
}
`
