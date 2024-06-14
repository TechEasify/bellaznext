// [categoryslug].js
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breakingnews from "../../components/breaking-news";
import Link from "next/link";
import Insight from "../../components/Insight";
import Jewishnews from "../../components/jewish-news";
import Music from "../../components/categoryMusic";
import { useEffect, useState } from "react";
import PoliticsCategory from "../../components/PoliticsCategory";
import News from "../../components/News";

const GET_NEWS_SECTION = gql`
 query MyQuery2($uri: String!) {
  nodeByUri(uri: $uri) {
    id
    ... on Post {
      id
      link
      excerpt
      slug
      content
      featuredImage {
        node {
          altText
          slug
          sourceUrl
          srcSet
          title
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      date
      dateGmt
      title
    }
  }
}
`;

const SkeletonLoader = () => (
  <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800">
    <hr />
    <div className="px-4 mx-auto flex bg-black items-center justify-center">
      <p className="text-base font-normal text-white">Ukraine & Russia War</p>
      <span className="text-white px-2">|</span>
      <p className="text-base font-normal text-white">Manage Your Money</p>
      <span className="text-white px-2">|</span>
      <p className="text-base font-normal text-white">Top Stocks</p>
    </div>
    <hr />
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div
          className="flex flex-col max-w-2xl text-white"
          style={{ width: "800px" }}
        >
          <div className="bg-black py-8 px-8 animate-pulse">
            <div className="h-6 w-32 bg-red-800 mb-4"></div>
            <div className="h-8 w-3/4 bg-gray-300 mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-300 mb-2"></div>
            <div className="h-4 w-1/4 bg-gray-300 mb-2"></div>
          </div>
          <div className="mb-2">
            <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
          </div>
          <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 mb-4 animate-pulse"></div>
        </div>
        <div className="flex max-w-2xl">
          <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const NewsPage = () => {
  const router = useRouter();
  console.log(router, "router");
  const { news, slug } = router.query;
  console.log(news, "news");
  const [navData, setNavData] = useState(null);
  const uri = `/${slug}`;

  console.log("news:", news);
  console.log("uri:", uri);

  const { data, loading, error } = useQuery(GET_NEWS_SECTION, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });

  console.log(data, "data news slug");

  // // const { data, loading, error } = useQuery(CATEGORY_QUERY);

  useEffect(() => {
    if (data) {
      setNavData(data);
    }
  }, [data]);

  if (loading || !navData) {
    return <SkeletonLoader />;
  }

  if (error || !data.nodeByUri) {
    return <p>article not found</p>;
  }

  const { nodeByUri } = data;

  console.log(navData, "navData");

  return (
    <>
      <Head>{/* <title>{nodeByUri.name} - News</title> */}</Head>
      <Nav uri={uri} />
      <main>
        {nodeByUri.__typename === "Post" && <News nodeByUri={nodeByUri} />}
        {/* <ul>
            {nodeByUri.posts.nodes.map((post) =>
              post.link ? (
                console.log(post, "post"),
                <li key={post.id}>
                  <Link href={post.link}>{post.title}</Link>
                </li>
              ) : null
            )}
          </ul> */}
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
