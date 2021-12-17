import styled, { css } from "styled-components";

export const Reset = css`
  margin: 0;
  padding: 0;
`;

export const Main = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const OpeningsContainer = styled.section`
  background: transparent;
`;

export const OpeningWrapper = styled.article`
   {
    border-bottom: 1px solid black;
    padding: 1.25rem 0;
  }
`;
