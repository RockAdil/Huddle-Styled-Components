import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  h1 {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2.1rem;
    }
  }

  p {
    opacity: 0.6;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
    }
  }

  img {
    max-width: 100%;
}
`;
