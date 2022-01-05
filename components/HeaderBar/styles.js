import styled from "styled-components";
import { Reset } from "../../styles/styles";

export const Header = styled.header`
  background: #121212;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 100vh;
    transform: rotate(-90deg);
    position: fixed;
    left: 1.5rem;
    top: unset;
    bottom: -2.8rem;
    transform-origin: left;
    padding: 2rem 1rem 1rem 1.8rem;
  }

  h1 {
    ${Reset}
    font-size: 1.5rem;
    font-family: "Surt Extended";
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.3;
  }
`;
