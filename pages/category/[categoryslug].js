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

// Define your CATEGORY_QUERY here
const CATEGORY_BREAKING_QUERY = gql`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Category {
        name
        posts {
          nodes {
            featuredImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            title
            content
            author {
              node {
                name
                slug
              }
            }
            excerpt
            link
            slug
            id
          }
        }
        categoryTamplate {
          simpleTamplate {
            simpleTitleBackgroundColor
            simpleHeroSection {
              heroSidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
              heroSidebarAdCode
            }
            simpleAdvertisementImage {
              simpleAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
              simpleAdCode
            }
            simpleAllPostsSidebarAds {
              allSidebarAdCode
              allSidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
            }
          }
          insightTamplate {
            insightTitleBackgroundColor
            insightSidebarAdvertisementImage {
              sidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
              sidebarAdCode
            }
          }
          musicTamplate {
            musicTitleBackgroundColor
            musicHeroSection {
              heroSidebarTitle
              heroSidebarTitleLineColor
              musicHeroSidebarAds {
                musicSidebarAdImage {
                  node {
                    altText
                    srcSet
                  }
                }
                musicSidebarAdCode
              }
            }
            musicAdervtiseImage {
              adImage {
                node {
                  altText
                  srcSet
                }
              }
              adCode
            }
            musicAllPostsSidebarAds {
              sidebarAdImage {
                node {
                  altText
                  srcSet
                }
              }
              sidebarAdCode
            }
          }
        }
      }
    }
  }
`;

const SkeletonLoader = () => (
  <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white p-4 rounded-md animate-pulse">
        <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
        <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-500 w-full mb-2"></div>
        <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-500 w-2/3"></div>
      </div>
    </div>
    <div className="w-full max-w-4xl mx-auto mb-5">
      <div className="bg-white p-4 rounded-md animate-pulse">
        <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
        <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-500 w-full mb-2"></div>
        <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-500 w-2/3"></div>
      </div>
    </div>
  </div>

  <div className="w-full h-40 bg-gray-300 animate-pulse mx-auto mb-8"></div>
  <div className="px-4 py-8 mx-auto max-w-screen-xl">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
      <div className="w-full max-w-5xl mx-auto">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row mb-5 animate-pulse">
              <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                <div className="w-72 h-52 bg-gray-300"></div>
              </div>
              <div className="ml-0 md:ml-5 w-full md:w-3/5">
                <div className="bg-red-800 w-36 h-5 mb-3"></div>
                <div className="bg-gray-300 w-3/4 h-8 mb-3"></div>
                <div className="bg-gray-300 w-1/2 h-4 mb-4"></div>
                <div className="bg-gray-300 w-full h-6 mb-3"></div>
              </div>
            </div>
            <hr className="my-5" />
          </div>
        ))}
        <button className="w-full py-2 mt-5 text-center text-white bg-gray-300 font-semibold animate-pulse">
          VIEW MORE
        </button>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-2 w-full h-64 bg-gray-300 animate-pulse"></div>
        <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
        <hr className="text-red-800 my-3" style={{ height: "3px", background: "black" }} />
        <div className="flex justify-around mt-5 mb-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-16 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
);

const CategoryPage = () => {
  const router = useRouter();
  const { categoryslug } = router.query;
  const [navData, setNavData] = useState(null);
  const uri = `/category/${categoryslug}`;

  console.log("categoryslug:", categoryslug);
  console.log("uri:", uri);

  const { data, loading, error } = useQuery(CATEGORY_BREAKING_QUERY, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });

  // const { data, loading, error } = useQuery(CATEGORY_QUERY);

  useEffect(() => {
    if (data) {
      setNavData(data);
    }
  }, [data]);

  if (!categoryslug) {
    return <SkeletonLoader />;
  }

  if (loading || !navData) {
    return <SkeletonLoader />;
  }

  if (error || !data.nodeByUri) {
    return <p>Category not found</p>;
  }

  const { nodeByUri } = data;

  console.log(nodeByUri, "nodeByUri");

  return (
    <>
      <Head>
        <title>{nodeByUri.name} - News</title>
      </Head>
      <Nav uri={uri} />
      <main>
        {router.asPath === "/category/breaking-news" &&
        nodeByUri !== undefined ? (
          <Breakingnews nodeByUri={nodeByUri} loading={loading} />
        ) : router.asPath === "/category/insights" &&
          nodeByUri !== undefined ? (
          <Insight nodeByUri={nodeByUri} loading={loading} />
        ) : router.asPath === "/category/jewish-news" &&
          nodeByUri !== undefined ? (
          <Jewishnews nodeByUri={nodeByUri} loading={loading} />
        ) : router.asPath === "/category/politics" &&
          nodeByUri !== undefined ? (
          <PoliticsCategory nodeByUri={nodeByUri} loading={loading} />
        ) : router.asPath === "/category/music" && nodeByUri !== undefined ? (
          <Music nodeByUri={nodeByUri} loading={loading} />
        ) : (
          <ul>
            {nodeByUri.posts.nodes.map((post) =>
              post.link ? (
                <li key={post.id}>
                  <Link href={post.link}>{post.title}</Link>
                </li>
              ) : null
            )}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
