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
import { useDialog } from "../../components/DialogContext";
import ExportedImage from "next-image-export-optimizer";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Image from "next/image";
import { useHeader } from "../../components/HeaderContext";
import { GET_NEWS_SECTION } from "../../components/queries/categoryQueries";

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

const parseMetaContent = (metaContent) => {
  if (metaContent && typeof metaContent === "string") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(metaContent, "text/html");
    const metaElements = [];

    Array.from(doc.head.children).forEach((node) => {
      if (node.tagName === "META" || node.tagName === "TITLE") {
        const attributes = {};
        Array.from(node.attributes).forEach((attr) => {
          attributes[attr.name] = attr.value;
        });
        if (node.tagName === "TITLE") {
          metaElements.push({
            tag: node.tagName.toLowerCase(),
            content: node.textContent,
          });
        } else {
          metaElements.push({ tag: node.tagName.toLowerCase(), attributes });
        }
      }
    });

    return metaElements;
  }
  return [];
};

const NewsPage = () => {
  const router = useRouter();
  const { navData, setNavData, seoData } = useHeader();
  const [nodeByUri, setNodeByUri] = useState(null);
  const { slug } = router.query;
  const uri = `/${slug}`;
  console.log(uri, "uri slug");

  const {
    data,
    loading,
    error,
  } = useQuery(GET_NEWS_SECTION, {
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
    return <div>Error: {error.message}</div>;
  }

  if (!data || !nodeByUri) {
    return <div>No data available</div>;
  }

  console.log(data, "newsData");

  return (
    <>
      <Head>
        {parseMetaContent(nodeByUri?.seo?.fullHead).map(
          (element, index) =>
            element.tag === "title" ? (
              <title key={index}>{element.content}</title>
            ) : (
              <element.tag key={index} {...element.attributes} />
            )
        )}
      </Head>
      <main>
        <News nodeByUri={nodeByUri} newsData={data} />
      </main>
    </>
  );
};

export default NewsPage;
