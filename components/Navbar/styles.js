import styled from "styled-components";
import { Reset } from "../../styles/styles";

export const Header = styled.header`
  h1 {
    ${Reset}
  }
  padding: 0 2rem;
`;

export const Nav = styled.nav`
  a {
    display: block;
    margin-bottom: 0.5rem;
  }
  padding: 1.5rem 0;
`;
