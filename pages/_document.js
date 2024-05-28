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
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <script
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
          ></script>
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
