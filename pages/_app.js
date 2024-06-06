import "../styles/global.css";
import "../faust.config";
import { DialogProvider } from "../components/DialogContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/ga/index";
import { FaustProvider } from "@faustwp/core";

const App = ({ Component, pageProps }) => {
  console.log(pageProps, "pageProps");
  const router = useRouter();

  useEffect(() => {
    // ga.pageview(window.location);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <FaustProvider pageProps={pageProps}>
      <DialogProvider>
        <Component {...pageProps} key={router.asPath}/>
      </DialogProvider>
    </FaustProvider>
  );
};

export default App;
