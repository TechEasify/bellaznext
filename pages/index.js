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

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

// const GET_HOME_PAGE = gql`
//   query GetNodeByUriAndHomePage($uri: String!, $id: ID = "745") {
//     node: nodeByUri(uri: $uri) {
//       ...NodeByUri
//     }
//     page(id: $id, idType: DATABASE_ID) {
//       homePage {
//         heroSection {
//           heroPostCategory {
//             nodes {
//               ... on Category {
//                 posts {
//                   nodes {
//                     categories {
//                       nodes {
//                         name
//                       }
//                     }
//                     title
//                     content
//                     author {
//                       node {
//                         name
//                       }
//                     }
//                     featuredImage {
//                       node {
//                         altText
//                         srcSet
//                         slug
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//           heroSidebarPosts {
//             nodes {
//               ... on Category {
//                 name
//                 posts {
//                   nodes {
//                     categories {
//                       nodes {
//                         name
//                       }
//                     }
//                     featuredImage {
//                       node {
//                         srcSet
//                         slug
//                       }
//                     }
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   fragment NodeByUri on UniformResourceIdentifiable {
//     __typename
//     uri
//     id
//     ...DatabaseIdentifier
//     ...ContentType
//     ...User
//     ...TermNode
//     ...ContentNode
//     ...MediaItem
//     ...Page
//   }
//   fragment DatabaseIdentifier on DatabaseIdentifier {
//     databaseId
//   }
//   fragment MediaItem on MediaItem {
//     id
//     mimeType
//   }
//   fragment ContentType on ContentType {
//     name
//     isFrontPage
//     isPostsPage
//   }
//   fragment Page on Page {
//     isFrontPage
//     isPostsPage
//   }
//   fragment TermNode on TermNode {
//     isTermNode
//     slug
//     taxonomyName
//   }
//   fragment ContentNode on ContentNode {
//     isContentNode
//     slug
//     contentType {
//       node {
//         name
//       }
//     }
//     template {
//       templateName
//     }
//   }
//   fragment User on User {
//     name
//     userId
//     databaseId
//   }
// `;

const GET_HOME_PAGE = gql`
  query GetNodeByUriAndHomePage($id: ID = "745") {
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
`;

const SkeletonLoader = () => (
  <>
    {/* <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse">
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
            <div className="mr-2 flex-grow">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
          <hr className="my-5" />
          <div className="flex mt-5">
            <div className="mr-2 flex-grow">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <br />
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6"></div>
            <div className="max-w-md bg-white mb-6"></div>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6"></div>
            <div className="max-w-md bg-white mb-6"></div>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6"></div>
            <div className="max-w-md bg-white mb-6"></div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <p className="text-[15px] font-bold text-black-900 italic"></p>
          <hr className="text-red-800" />
          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-red-800"></p>
              <p className="text-[15px] font-semibold text-gray-800 mb-3"></p>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-gray-300"></p>
              <p className="text-[15px] font-semibold text-gray-300 mb-3"></p>
            </div>
          </div>
          <hr />
          <div className="flex mt-5"></div>
          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-gray-300"></p>
              <p className="text-[15px] font-semibold text-gray-300 mb-3"></p>
            </div>
          </div>
          <div className="flex mb-5 mt-10"></div>
          <p className="text-[15px] font-bold italic"></p>
          <div className="flex mt-5 mb-8"></div>
          <p className="text-[15px] font-bold text-black-900 italic"></p>
          <div className="flex mt-5 mb-8"></div>
        </div>
      </div>
    </div> */}
     <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="mb-6">
                <div className="h-4 bg-red-800 rounded w-32 mb-2 animate-pulse"></div>
                <div className="h-8 bg-black-900 rounded w-2/3 mb-2 animate-pulse"></div>
                <div className="h-16 bg-gray-800 rounded mb-3 animate-pulse"></div>
                <div className="h-64 bg-gray-300 rounded mb-3 animate-pulse"></div>
              </div>
            ))}
            <div className="flex items-center mb-4">
              <div className="h-6 w-1 bg-blue-500 rounded-l animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded-r w-24 ml-1 animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded-full w-6 mx-1 animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded w-20 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-10 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div
            className="block max-w-sm p-6 rounded-lg shadow animate-pulse"
            style={{
              background:
                'linear-gradient(to bottom right, #002D73, #40A6FB)',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <div className="h-4 bg-white rounded w-24 mb-1 animate-pulse"></div>
                <div className="h-6 bg-white rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-16 w-16 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center mb-2">
              <div className="h-4 w-4 bg-white rounded-full mr-2 animate-pulse"></div>
              <div className="h-4 bg-white rounded w-48 animate-pulse"></div>
            </div>
            <div className="flex justify-around items-center mb-6">
              <div className="h-8 bg-white rounded w-12 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-16 animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="h-4 bg-white rounded w-32 animate-pulse"></div>
              <div className="h-6 w-6 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center text-center">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <div className="h-4 bg-white rounded w-12 mb-1 animate-pulse"></div>
                  <div className="h-8 w-8 bg-white rounded-full animate-pulse mx-auto mb-1"></div>
                  <div className="h-4 bg-white rounded w-12 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex mt-5 justify-between">
              <div className="mr-2">
                <div className="h-4 bg-red-800 rounded w-20 mb-1 animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-16 w-16 bg-gray-300 rounded object-contain animate-pulse"></div>
            </div>
          ))}
          <hr className="my-6" />
        </div>
      </div>
    </div>
    {/* <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <h1 className="text-[25px] font-bold text-black-900 italic">
              TOP HEADLINES
            </h1>
            <hr className="text-red-800 mr-5" style={{ height: "7px", background: "#CE3A42" }} />
            <br />
          </div>

          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
            <div className="max-w-md bg-white mb-6 p-4 border border-gray-200 shadow-sm">
              <div className="h-48 bg-gray-300 animate-pulse"></div>
              <p className="text-base font-bold text-red-800 mt-2 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-gray-300 h-8 w-full animate-pulse"></h5>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-4 bg-gray-300 h-6 w-32 animate-pulse"></p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <p className="text-[15px] font-bold text-black-900 italic">
            SPOTLIGHT
          </p>
          <hr className="text-red-800" style={{ height: "7px", background: "#CE3A42" }} />

          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-red-800 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <p className="text-[15px] font-semibold text-gray-800 mb-3 bg-gray-300 h-6 w-full animate-pulse"></p>
            </div>
            <div className="h-13 w-13 bg-gray-300 animate-pulse"></div>
          </div>
          <hr />
          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-red-800 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <p className="text-[15px] font-semibold text-gray-800 mb-3 bg-gray-300 h-6 w-full animate-pulse"></p>
            </div>
            <div className="h-13 w-13 bg-gray-300 animate-pulse"></div>
          </div>
          <hr />
          <div className="flex mt-5">
            <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
          </div>
          <hr />
          <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-red-800 bg-gray-300 h-6 w-24 animate-pulse"></p>
              <p className="text-[15px] font-semibold text-gray-800 mb-3 bg-gray-300 h-6 w-full animate-pulse"></p>
            </div>
            <div className="h-13 w-13 bg-gray-300 animate-pulse"></div>
          </div>

          <div className="flex mb-5 mt-10">
            <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
          </div>

          <p className="text-[15px] font-bold text-black-900 italic">
            FOLLOW US
          </p>
          <hr className="text-red-800" style={{ height: "7px", background: "#CE3A42" }} />

          <div className="flex mt-5 mb-8">
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
          </div>

          <p className="text-[15px] font-bold text-black-900 italic">
            FOLLOW BELAAZ ON WhatsApp
          </p>
          <hr className="text-red-800" style={{ height: "7px", background: "#CE3A42" }} />

          <div className="flex mt-5 mb-8">
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
            <div className="h-13 w-13 bg-gray-300 mx-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div> */}
  </>
);

const Home = () => {
  const router = useRouter();

  // const uri = router.asPath; // Define your URI here. This is an example for the home page.

  const { loading, error, data } = useQuery(GET_HOME_PAGE);

  console.log(data, "data home");

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
            <Banner data={data} />
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
