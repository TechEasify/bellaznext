import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Favicons, Google site verification and other common meta tags across the site. */}
          <link rel="icon" href="/belaazicon.ico" />

          {/* <script
            async
            defer
            src="https://proxy.beyondwords.io/npm/@beyondwords/player@latest/dist/umd.js"
          ></script> */}

          <script
            async
            type="text/javascript"
            src="https://www.klaviyo.com/onsite/js/klaviyo.js?company_id=REMqmH"
          ></script>

          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
          />
          <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

          {/* text to speech vocie */}
          {/* <script src="https://code.responsivevoice.org/responsivevoice.js?key=ynt9eohG"></script> */}
          {/* <script src="https://code.responsivevoice.org/responsivevoice.js?key=kM8Dgkjj"></script> */}
          {/* <script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@3/+esm"></script> */}

          {/* <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-VGJ09RD0RZ'
          ></script>
          <script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `function gtag(){dataLayer.push(arguments)}
              window.dataLayer=window.dataLayer||[],gtag("set","allow_ad_personalization_signals",!1),gtag("js",new
              Date),gtag("config","G-VGJ09RD0RZ"),gtag("config","AW-875271460")
            `,
            }}
          ></script> */}
          {process.env.NODE_ENV == "production" && (
            <Script
              strategy="lazyOnload"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3209848804552918"
              crossorigin="anonymous"
            ></Script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
