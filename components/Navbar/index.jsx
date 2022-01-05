import { Header } from "./styles";
import { ShortText } from "../../styles/styles";

export const Navbar = () => (
  <Header>
    <h1>The Chess Guide</h1>
    <ShortText>
      Welcome to Off the Rook. This is a collection of all the most common
      openings available in chess.
    </ShortText>
    <ShortText>
      Like these openings? Submit your favorite opening or gambit if you don’t
      see it listed!
    </ShortText>
  </Header>
);
