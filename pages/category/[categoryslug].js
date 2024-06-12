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
import Politics from "../../components/Politics";
import Music from "../../components/categoryMusic";
import { useEffect, useState } from "react";

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
  <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col justify-center border-r pr-0 md:pr-5 bg-white p-4 rounded-md animate-pulse">
          <div className="mb-2 rounded-md bg-gray-200 h-60"></div>
          <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 w-full mb-2"></div>
          <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 w-2/3"></div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-md animate-pulse">
          <div className="mb-2 rounded-md bg-gray-200 h-60"></div>
          <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 w-full mb-2"></div>
          <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 w-2/3"></div>
        </div>
      </div>
    </div>
    {/* Placeholder for the News component */}
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
          <Politics nodeByUri={nodeByUri} loading={loading} />
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
