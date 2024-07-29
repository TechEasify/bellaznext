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
  console.log(pageProps, "pageProps");
  const router = useRouter();

  // Use useEffect for analytics or any other side effects
  useEffect(() => {
    // ga.pageview(window.location);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <FaustProvider pageProps={pageProps}>
      <HeaderProvider>
        <NavAndFooterWrapper>
          <DialogProvider>
            <Component {...pageProps} key={router.asPath} />
          </DialogProvider>
        </NavAndFooterWrapper>
      </HeaderProvider>
    </FaustProvider>
  );
};

const NavAndFooterWrapper = ({ children }) => {
  const { navData, footerData } = useHeader();

  const MemoizedNav = useMemo(() => <Nav data={navData} />, [navData]);
  const MemoizedFooter = useMemo(
    () => <Footer data={footerData} />,
    [footerData]
  );

  return (
    <>
      {MemoizedNav}
      {children}
      {MemoizedFooter}
    </>
  );
};

export default App;
