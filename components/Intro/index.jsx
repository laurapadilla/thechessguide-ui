import { IntroText, Italic } from "./styles";

export const Intro = () => (
  <article>
    <IntroText>
      Welcome to Off the Rook. This is a <Italic>collection</Italic> of all the
      most common <Italic>openings</Italic> available in <Italic>chess</Italic>.
    </IntroText>
    <IntroText>
      <b>Like these openings?</b> Submit your favorite opening or gambit if you
      don’t see it listed!
    </IntroText>
  </article>
);
