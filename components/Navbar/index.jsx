import Link from "next/link";
import { Nav, Header } from "./styles";

export const Navbar = () => (
  <Header>
    <h1>the chess guide</h1>
    <p>
      Welcome to Off the Rook. This is a collection of all the most common
      openings available in chess.
    </p>
    <Nav>
      <Link href="/">Openings</Link>
      <Link href="/">Players</Link>
      <Link href="/">Learn Chess</Link>
    </Nav>
    <p>
      Like these openings? Submit your favorite opening or gambit if you don’t
      see it listed!
    </p>
  </Header>
);
