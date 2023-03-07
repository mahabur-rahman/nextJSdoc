import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
// import '../styles/globals.css'

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
