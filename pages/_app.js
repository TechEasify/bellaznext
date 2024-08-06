import "../styles/global.css";
import "../faust.config";
import { DialogProvider } from "../components/DialogContext";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import * as ga from "../lib/ga/index";
import { FaustProvider } from "@faustwp/core";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { HeaderProvider, useHeader } from "../components/HeaderContext";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <HeaderProvider>
        <Nav />
        <DialogProvider>
          <Component {...pageProps} key={router.asPath} />
        </DialogProvider>
        <Footer/>
      </HeaderProvider>
    </FaustProvider>
  );
};

export default App;
