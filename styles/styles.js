import styled, { css } from "styled-components";

export const Reset = css`
  margin: 0;
  padding: 0;
`;

export const Main = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

// export const OpeningsContainer = styled.section`
//   background: transparent;
//   padding-left: 2rem;
// `;

export const OpeningWrapper = styled.article`
   {
    border-bottom: 1px solid black;
    padding: 1.25rem 0;
  }
`;

export const Text = styled.div`
  max-width: 55ch;
  width: 100%;
`;

export const ShortText = styled(Text)`
  max-width: 30ch;
`;

export const Container = styled.main`
  position: relative;
  height: calc(100vh - 2rem);

  @media (min-width: 768px) {
    border-left: 1px solid black;
    padding-left: 2.5rem;
  }
`;

export const OpeningDetails = styled.article`
  display: flex;
`;

export const OpeningName = styled.h1`
  ${Reset}
  font-weight: 600;
  font-size: 2.25rem;
  flex: 1;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  overflow: scroll;
`;
