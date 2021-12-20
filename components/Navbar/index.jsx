import Link from "next/link";
import { Nav, Header } from "./styles";
import { ShortText } from "../../styles/styles";

export const Navbar = () => (
  <Header>
    <h1>the chess guide</h1>
    <ShortText>
      Welcome to Off the Rook. This is a collection of all the most common
      openings available in chess.
    </ShortText>
    <Nav>
      <Link href="/">Openings</Link>
      <Link href="/">Players</Link>
      <Link href="/">Learn Chess</Link>
    </Nav>
    <ShortText>
      Like these openings? Submit your favorite opening or gambit if you don’t
      see it listed!
    </ShortText>
  </Header>
);
