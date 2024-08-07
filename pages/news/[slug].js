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
  const { nodeByUri, setNodeByUri } = useDialog();
  const { navData, setNavData } = useHeader();
  const { slug } = router.query;
  const uri = `/${slug}`;

  const { data, loading, error } = useQuery(GET_NEWS_SECTION, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });

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
        <title>{data?.nodeByUri?.title} - News</title>
      </Head>
      <main>
        <News />
      </main>
    </>
  );
};

export default NewsPage;
