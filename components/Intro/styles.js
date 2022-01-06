import styled from "styled-components";
import { Reset } from "../../styles/styles";

export const IntroWrapper = styled.article`
  height: auto;

  @media (min-width: 768px) {
    position: sticky;
    position: -webkit-sticky;
    top: 1rem;
    height: 100vh;
    border: none;
  }
`;

export const IntroText = styled.h1`
  ${Reset}
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 2rem;
  font-size: 1rem;
  &:last-child {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Italic = styled.span`
  font-style: italic;
  font-family: "Reckless Neue TRIAL";
  font-weight: 400;
`;
