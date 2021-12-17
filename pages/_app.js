import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Main } from "../styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Navbar />
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
