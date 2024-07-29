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
import { lazy, Suspense } from "react";

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

// Lazy load component
const LazyComponent = lazy(() =>
  import("../components/lazyComponent/LazyComponent")
);

const Home = () => {
  const router = useRouter();

  // const uri = router.asPath; // Define your URI here. This is an example for the home page.

  // const { loading, error, data } = useQuery(GET_HOME_PAGE);
  const { bannerData, bannerLoading, bannerError, seoData } = useDialog();
  console.log(seoData, "bannerData home page");
  console.log(url, "urlurlurlurl");

  if (bannerLoading) return <SkeletonLoader />;
  if (bannerError) return <p>Error loading data: {bannerError.message}</p>;

  let title;
  let description;
  let canonical;

  seoData?.pages?.nodes.flatMap((item) => {
    console.log(item, "item page");
    if (item.title === "Home" && router.asPath === "/") {
      console.log("if inside", item?.seo?.title);
      title = item?.seo?.title || "Belaaz News";
      description = item?.seo?.metaDesc || "Default Description";
      canonical = item?.seo?.canonical || `${url}${router.asPath}`;
    }
  });

  return (
    <>
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

      {/* <Footer /> */}
    </>
  );
};

export default Home;
