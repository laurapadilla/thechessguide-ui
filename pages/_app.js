import "../styles/globals.css";
import { Main } from "../styles/styles";
import { HeaderBar } from "../components/HeaderBar";
import { Intro } from "../components/Intro";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HeaderBar />
      <Main>
        <Intro />
        <Component {...pageProps} />
      </Main>
    </div>
  );
}

export default MyApp;
