import styled from "styled-components";
import { ShortTextWrapper, Reset } from "../../styles/styles";

export const IntroWrapper = styled.article`
  position: sticky;
  position: -webkit-sticky;
  top: 1rem;
  height: 100vh;
`;

export const IntroText = styled.h1`
  ${ShortTextWrapper}
  ${Reset}
  font-weight: normal;
  line-height: 1.3;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Italic = styled.span`
  font-style: italic;
  font-family: "Reckless Neue TRIAL";
`;
