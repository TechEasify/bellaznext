import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import Insight from "../../components/Insight";
import Music from "../../components/categoryMusic";
import { useEffect, useState } from "react";
import News from "../../components/News";
import { GET_NEWS_SECTION } from "../../components/queries/categoryQueries";
import { useDialog } from "../../components/DialogContext";
import ExportedImage from "next-image-export-optimizer";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Image from "next/image";
import { useHeader } from "../../components/HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const SkeletonLoader = () => (
  // <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800">
  //   <hr />
  //   <div className="px-4 mx-auto flex bg-black items-center justify-center">
  //     <p className="text-base font-normal text-white">Ukraine & Russia War</p>
  //     <span className="text-white px-2">|</span>
  //     <p className="text-base font-normal text-white">Manage Your Money</p>
  //     <span className="text-white px-2">|</span>
  //     <p className="text-base font-normal text-white">Top Stocks</p>
  //   </div>
  //   <hr />
  //   <div className="px-4 mx-auto max-w-screen-xl">
  //     <div className="flex flex-wrap justify-center items-center gap-6">
  //       <div className="flex flex-col max-w-2xl text-white" style={{ width: "800px" }}>
  //         <div className="bg-black py-8 px-8 animate-pulse">
  //           <div className="h-6 w-32 bg-red-800 mb-4"></div>
  //           <div className="h-8 w-3/4 bg-gray-300 mb-4"></div>
  //           <div className="h-4 w-1/2 bg-gray-300 mb-2"></div>
  //           <div className="h-4 w-1/4 bg-gray-300 mb-2"></div>
  //         </div>
  //         <div className="mb-2">
  //           <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
  //         </div>
  //         <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
  //         <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
  //       </div>
  //       <div className="flex max-w-2xl">
  //         <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
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

const NewsPage = () => {
  const router = useRouter();
  console.log(router, "routerrouterrouter");
  const { nodeByUri, setNodeByUri } = useDialog();
  const { navData, setNavData} = useHeader();
  const { slug } = router.query;
  const uri = `/${slug}`;

  const { data, loading, error } = useQuery(GET_NEWS_SECTION, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });

  console.log(data, "news data");
  console.log(router.asPath === `/news${uri}`, "router.asPath === `/news/${uri}`");

  useEffect(() => {
    if (data) {
      setNavData(data);
      setNodeByUri(data.nodeByUri);
    }
  }, [data]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <Head>
        <title>{nodeByUri?.title} - News</title>
      </Head>
      <Nav uri={uri} />
      <main>
        <News />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default NewsPage;
