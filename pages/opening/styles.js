import styled from "styled-components";
import { Reset } from "../../styles/styles";

export const Container = styled.main`
  position: relative;
  background-color: lightcyan;
  padding-bottom: 4rem;
`;

export const OpeningDetails = styled.article`
  display: flex;
`;

export const OpeningName = styled.h1`
  ${Reset}
  font-size: 2.25rem;
  flex: 1;
`;

export const Moves = styled.h4`
  ${Reset}
  font-size: 0.875rem;
  font-weight: normal;
  margin-bottom: 1.25rem;
`;

export const Description = styled.div`
  max-width: 65ch;
  width: 100%;
`;

export const Sup = styled.sup`
  ${Reset}
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
  position: absolute;
  bottom: 0;
`;
