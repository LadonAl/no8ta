import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div<{ w?: string }>`
  position: relative;
  box-sizing: border-box;
  width: ${(props) => props.w || "100%"};
  height: 2.5em;
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.gray[200]};
  border: none;
  border-radius: 0.5em;
  padding-left: 4em;
`;

export const Icon = styled(AiOutlineSearch)`
  position: absolute;
  top: 0;
  left: 0.75em;
  height: 100%;
  font-size: 1.25em;
  pointer-events: none;
`;
