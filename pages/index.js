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

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const GET_HOME_PAGE = gql`
  query GetNodeByUriAndHomePage($uri: String!, $id: ID = "745") {
    node: nodeByUri(uri: $uri) {
      ...NodeByUri
    }
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        heroSection {
          heroPostCategory {
            nodes {
              ... on Category {
                posts {
                  nodes {
                    categories {
                      nodes {
                        name
                      }
                    }
                    title
                    content
                    author {
                      node {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        altText
                        srcSet
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
          heroSidebarPosts {
            nodes {
              ... on Category {
                name
                posts {
                  nodes {
                    categories {
                      nodes {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        slug
                      }
                    }
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment NodeByUri on UniformResourceIdentifiable {
    __typename
    uri
    id
    ...DatabaseIdentifier
    ...ContentType
    ...User
    ...TermNode
    ...ContentNode
    ...MediaItem
    ...Page
  }
  fragment DatabaseIdentifier on DatabaseIdentifier {
    databaseId
  }
  fragment MediaItem on MediaItem {
    id
    mimeType
  }
  fragment ContentType on ContentType {
    name
    isFrontPage
    isPostsPage
  }
  fragment Page on Page {
    isFrontPage
    isPostsPage
  }
  fragment TermNode on TermNode {
    isTermNode
    slug
    taxonomyName
  }
  fragment ContentNode on ContentNode {
    isContentNode
    slug
    contentType {
      node {
        name
      }
    }
    template {
      templateName
    }
  }
  fragment User on User {
    name
    userId
    databaseId
  }
`;

const SkeletonLoader = () => (
  <>
    <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
          </div>
          <div className="h-64 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-40 bg-gray-300 rounded w-full mb-4"></div>
          <div className="flex mt-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
          <hr />
          <div className="flex mt-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
            <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>
          </div>

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="w-full h-40 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>

          <div className="flex mb-5 mt-10">
            <div className="w-full h-40 bg-gray-200 animate-pulse mr-2"></div>
          </div>

          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-8">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="h-13 w-13 bg-gray-200 animate-pulse mx-2"
                ></div>
              ))}
          </div>

          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-8">
            <div className="h-13 w-13 bg-gray-200 animate-pulse mx-2"></div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mx-2"></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Home = () => {
  const uri = "/"; // Define your URI here. This is an example for the home page.

  const { loading, error, data } = useQuery(GET_HOME_PAGE, {
    variables: { uri }, // Pass the URI variable here
  });

  console.log(data, "data home page");

  if (loading) return <SkeletonLoader />;
  if (error) return <p>Error loading data: {error.message}</p>;

  const title = data?.generalSettings?.title || "Default Title";
  const siteDescription =
    data?.generalSettings?.description || "Default Description";
  const menuItems = data?.primaryMenuItems?.nodes || [];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <section>
          <Layout>
            <Banner data={data}/>
            <Topheadlines />
            <Advertisement />
            <Insights />
            <Sliders />
            <Music />
            <PlacementPartners />
            <Excusivenews />
            <Cardnews />
            <PlacementPartners />
          </Layout>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
