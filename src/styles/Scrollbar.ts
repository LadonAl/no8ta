import { createGlobalStyle } from "styled-components";

export const Scrollbar = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme.colors.green + " " + props.theme.colors.gray[200]};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray[200]};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 32px;
    height: 8vh;
  }
`;
