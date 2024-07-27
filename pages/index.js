import getConfig from "next/config";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Topheadlines from "../components/Topheadlines";
import Advertisement from "../components/Advertisement";
import Insights from "../components/Insights";
import Music from "../components/Music";
import Sliders from "../components/Sliders";
import PlacementPartners from "../components/PlacementPartners";
import Footer from "../components/Footer";
import Excusivenews from "../components/Excusivenews";
import Cardnews from "../components/Cardnews";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { GET_HOME_PAGE } from "../components/queries/Queries";
import { useDialog } from "../components/DialogContext";
import Primarylogo from "../public/images/Primarylogo.svg";
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";

const { publicRuntimeConfig } = getConfig();
const { name, url } = publicRuntimeConfig.site;

const customLoader = ({ src }) => {
  return src;
};

const SkeletonLoader = () => (
  <div className="spinner">
    <Image
      priority={true}
      loader={customLoader}
      src={Primarylogo}
      alt="Loading..."
      className="blinking-image"
      width={250}
      height={54}
    />
  </div>
);

const Home = () => {
  const router = useRouter();

  // const uri = router.asPath; // Define your URI here. This is an example for the home page.

  // const { loading, error, data } = useQuery(GET_HOME_PAGE);
  const { bannerData, bannerLoading, bannerError } = useDialog();
  console.log(bannerData, "bannerData home page");
  console.log(url, "urlurlurlurl");

  if (bannerLoading) return <SkeletonLoader />;
  if (bannerError) return <p>Error loading data: {bannerError.message}</p>;

  // const title = bannerData?.generalSettings?.title || "Default Title";
  // const siteDescription =
  //   bannerData?.generalSettings?.description || "Default Description";
  // const menuItems = bannerData?.primaryMenuItems?.nodes || [];

  const page = bannerData?.page;
  const seo = page?.homePage?.heroSection?.heroPostCategory?.nodes?.[0]?.posts?.nodes?.[0]?.seo || {};
  console.log(seo, "seo");
  const title = seo.title || "Belaaz News";
  const description = seo.metaDesc || "Default Description";
  const canonical = seo.canonical || `${url}${router.asPath}`;

  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head> */}

      <main>
        <section>
          <Layout title={title} description={description} canonical={canonical}>
            <Banner />
            <Advertisement />
            <Insights />
            <Sliders />
            <Music />
            <PlacementPartners />
            <Excusivenews />
            <Cardnews />
          </Layout>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
