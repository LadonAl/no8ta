import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 4.5em auto;
  height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  grid-column: 1/4;
`;

export const Column = styled.section`
  height: 100%;
`;
