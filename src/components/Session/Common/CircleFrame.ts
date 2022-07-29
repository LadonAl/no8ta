import styled from "styled-components";

export const CircleFrame = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  border: 3px solid ${(props) => props.color || props.theme.colors.white};
  color: ${(props) => props.color || props.theme.colors.white};
  margin: auto;

  svg {
    font-size: 1.25em;
    stroke-width: 3em;
  }
`;
