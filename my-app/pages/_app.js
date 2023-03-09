import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
// import '../styles/globals.css'
import "styles/layout.css";

import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import Footer from "components/Footer";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
