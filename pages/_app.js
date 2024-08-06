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

  const memoizedNav = useMemo(() => <Nav />, []);
  const memoizedFooter = useMemo(() => <Footer />, []);

  return (
    <FaustProvider pageProps={pageProps}>
      <HeaderProvider>
        {memoizedNav}
        <DialogProvider>
          <Component {...pageProps} key={router.asPath} />
        </DialogProvider>
        {memoizedFooter}
      </HeaderProvider>
    </FaustProvider>
  );
};

export default App;
