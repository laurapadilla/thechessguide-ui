import styled, { css } from "styled-components";

export const Reset = css`
  margin: 0;
  padding: 0;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 4.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    margin-left: 60px;
    gap: 3rem;
    margin-top: 0;
    padding: 2rem;
  }
`;

export const Container = styled.section`
  position: relative;

  @media (min-width: 768px) {
    border-left: 1px solid black;
    padding-left: 2.5rem;
  }
`;

export const Wrapper = styled.div`
  article:first-child {
    padding: 0;
  }
`;

export const OpeningWrapper = styled.article`
  border-bottom: 1px solid black;
  padding: 1.25rem 0;
`;

export const ShortTextWrapper = css`
  div {
    max-width: 30ch;
  }
`;

export const TextWrapper = styled.div`
  max-width: 40ch;
  width: 100%;

  p {
    ${Reset}
    margin-bottom: 2rem;
  }
`;

export const OpeningDetails = styled.article`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    align-items: top;
  }
`;

export const OpeningName = styled.h1`
  ${Reset}
  font-weight: 600;
  font-size: 2.25rem;
  flex: 1;

  &:hover {
    cursor: pointer;
    color: #37a969;
  }
`;

export const Moves = styled.h4`
  ${Reset}
  font-size: 0.875rem;
  font-weight: normal;
  margin-bottom: 1.25rem;
`;

export const Sup = styled.sup`
  ${Reset}
  font-family: 'Reckless Neue TRIAL';
  font-weight: 400;
  font-size: 1.5rem;
  vertical-align: top;
  margin-right: 1rem;
`;

export const piece = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Black = styled(piece)`
  background-color: black;
`;

export const White = styled(piece)`
  background-color: white;
  border: 1px solid black;
`;

export const BackLinkWrapper = styled.div`
  background-color: #e9e6e4;

  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
