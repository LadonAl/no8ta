import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  all: initial;
  background-color: red;
  border-radius: 1em;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 10em;
  outline: solid red 1px;
  width: 100%;
  > *:nth-child(1) {
    flex: 1;
  }
  > *:nth-child(2) {
    flex: 2;
  }
`;

export const Text = styled.h1<{ color?: string }>`
  color: ${(props) => props.color || props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.Urbanist};
  font-size: 2rem;
  margin: 0;
`;
