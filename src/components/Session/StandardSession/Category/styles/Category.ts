import styled from "styled-components";

export const Container = styled.button`
  all: initial;
  width: 100%;
  border-radius: 1em;
  min-height: 10em;
  outline: solid red 1px;
  display: flex;
  flex-direction: row;
  background-color: red;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > *:nth-child(1) {
    flex: 1;
  }
  > *:nth-child(2) {
    flex: 2;
  }
`;

export const Text = styled.h1<{ color?: string }>`
  font-size: 2rem;
  color: ${(props) => props.color || props.theme.colors.white};
  margin: 0;
  font-family: ${(props) => props.theme.fonts.Urbanist};
`;
