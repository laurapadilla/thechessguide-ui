import { TextWrapper } from "../../styles/styles";
import { IntroText, IntroWrapper, Italic } from "./styles";

export const Intro = () => (
  <IntroWrapper>
    <TextWrapper>
      <IntroText>
        Welcome to The Chess Guide. This is a <Italic>collection</Italic> of all
        the most common <Italic>openings</Italic> available in{" "}
        <Italic>chess</Italic>.
      </IntroText>
      <IntroText>
        <b>Like these openings?</b> Submit your favorite opening or gambit if
        you don’t see it listed!
      </IntroText>
    </TextWrapper>
  </IntroWrapper>
);
