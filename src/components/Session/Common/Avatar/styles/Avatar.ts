import styled from "styled-components";

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  border-radius: 50%;
  text-align: center;
  background: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts["Urbanist"]};
  font-weight: 300;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
