import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Digital-7';
    src: url(./fonts/digital-7.ttf) format('truetype');
  }

  body {
    background: #e4e4e4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .fa {
    margin-left: 15px;
    font-size: 1.1rem;
  }

  a {
    font-size: 1.1rem;
    text-decoration: none;
  }

  .message {
    background: #da9090;
    border: 2px solid rgb(255, 115, 0);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 1.5rem;
    font-family: monospace, Arial, Helvetica, sans-serif;
    text-align: center;
  }

  @media (max-width: 770px) {
    .calendar, .ampm {
      font-size: 0.7rem;
    }

    .hour {
      font-size: 4rem;
    }

    .clock {
      padding: 5px;
    }
  }
`;

export default GlobalStyle;