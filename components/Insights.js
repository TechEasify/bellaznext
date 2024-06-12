import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import ana_flavia_1 from "../public/images/ana_flavia_1.svg";
import Frame212 from "../public/images/Frame212.svg";
import Frame214 from "../public/images/Frame214.svg";
import download3 from "../public/images/download3.svg";
import addpost from "../public/images/addpost.svg";
import { gql, useQuery } from "@apollo/client";

const GET_INSIGHTS_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        insightsTitle
        insightsTitleBottomLineColor
        insightsPost {
          nodes {
            ... on Category {
              name
              posts {
                nodes {
                  featuredImage {
                    node {
                      altText
                      slug
                      srcSet
                      sourceUrl
                    }
                  }
                  title
                  categories {
                    nodes {
                      name
                    }
                  }
                  author {
                    node {
                      name
                    }
                  }
                  content
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

const Insights = () => {
  const { openDialog } = useDialog();
  const { loading, error, data } = useQuery(GET_INSIGHTS_SECTION);
  console.log(data, "data insights");
  if (loading) return <SkeletonLoader />;

  const insightsPost = data.page.homePage.insightsPost.nodes;

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">
            {data.page.homePage.insightsTitle}
          </h1>
          <hr
            className="text-red-800 mr-5"
            style={{ height: "7px", background: `${data.page.homePage.insightsTitleBottomLineColor}` }}
          />
          <br />
        </div>

        {insightsPost.map((item) => (
          // console.log(item, "item"),
          <>
            {item.name === "Insights" && (
              <div className="flex flex-wrap justify-around items-stretch">
                {item.posts.nodes.slice(0, 1).map(
                  (node) => (
                    console.log(node, "node insights"),
                    (
                      <>
                        <div className="flex flex-col">
                          <div className="max-w-xs bg-white mb-6 items-center">
                            <div className="mr-2 mb-2">
                              <ExportedImage
                                src={node.featuredImage?.node?.sourceUrl || ""}
                                alt={node.featuredImage?.node?.sourceUrl || ""}
                                className="h-13 w-13 mr-2 mb-2"
                                width={317}
                                height={194}
                              />
                              <p className="text-[12px] font-bold text-red-800">
                                {item.name}
                              </p>
                              <p className="text-[15px] font-semibold text-gray-800">
                                {node.title}
                              </p>
                              <p className="text-[10px] text-base font-bold text-gray-800">
                                <span
                                  className="text-[10px] font-extrabold mr-1"
                                  style={{ color: "#40A6FB" }}
                                >
                                  |
                                </span>
                                By
                                <span
                                  className="font-extrabold mx-1"
                                  style={{ color: "#40A6FB" }}
                                >
                                  {node.author.node.name}
                                  <span
                                    className="text-[36px] font-extrabold mx-1"
                                    style={{ color: "#40A6FB" }}
                                  >
                                    .
                                  </span>
                                </span>
                                6 MIN READ
                              </p>
                            </div>
                            <div className="flex max-w-xs bg-white mr-4 items-center justify-between">
                              <div className="mr-2">
                                <p className="text-[12px] font-bold text-red-800">
                                  {item.name}
                                </p>
                                <p className="text-[15px] font-semibold text-gray-800">
                                  {node.title}
                                </p>
                              </div>
                              <ExportedImage
                                src={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                                alt={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                                className="h-13 w-13 mr-2"
                                width={90}
                                height={87}
                              />
                            </div>
                            <p className="text-[10px] text-base font-bold text-gray-800">
                              <span
                                className="text-[10px] font-extrabold mr-1"
                                style={{ color: "#40A6FB" }}
                              >
                                |
                              </span>
                              By
                              <span
                                className="font-extrabold mx-1"
                                style={{ color: "#40A6FB" }}
                              >
                                {node.author.node.name}
                                <span
                                  className="text-[36px] font-extrabold mx-1"
                                  style={{ color: "#40A6FB" }}
                                >
                                  .
                                </span>
                              </span>
                              6 MIN READ
                            </p>
                          </div>
                        </div>
                        <div className="max-w-md bg-white mb-6 mx-auto">
                          <a href="#">
                            <ExportedImage
                              priority={true}
                              src={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                              alt={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                              width={593}
                              height={395}
                              style={{ width: "593px", height: "395px", objectFit: "cover" }}
                            />
                          </a>
                          <p className="text-base font-bold text-red-800 mt-2">
                            {item.name}
                          </p>
                          <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {node.title}
                            </h5>
                          </a>
                          <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                            <span
                              className="text-[10px] font-extrabold mr-1"
                              style={{ color: "#40A6FB" }}
                            >
                              |
                            </span>
                            By
                            <span
                              className="font-extrabold mx-1"
                              style={{ color: "#40A6FB" }}
                            >
                              {node.author.node.name}
                              <span
                                className="text-[36px] font-extrabold mx-1"
                                style={{ color: "#40A6FB" }}
                              >
                                .
                              </span>
                            </span>
                            6 MIN READ
                          </p>
                          <p className="text-[12px] font-normal text-gray-800 mt-2" dangerouslySetInnerHTML={{ __html: node.content }}/>
                        </div>
                        <div className="max-w-xs bg-white mb-6 mr-4 items-center">
                          <div className="mr-2">
                            <ExportedImage
                              src={Frame214}
                              alt="vladimirputin"
                              className="h-13 w-13 mr-2 mb-2"
                              width={317}
                              height={194}
                              style={{ width: "317px", height: "194px", objectFit: "cover"}}
                            />
                            <p className="text-[12px] font-bold text-red-800">
                              HEALTH
                            </p>
                            <p className="text-[15px] font-semibold text-gray-800">
                              Our DeSantis and Haley Reporters switched places
                              Here's What They Found.
                            </p>
                            <p className="text-[10px] text-base font-bold text-gray-800 mb-3">
                              <span
                                className="text-[10px] font-extrabold mr-1"
                                style={{ color: "#40A6FB" }}
                              >
                                |
                              </span>
                              By
                              <span
                                className="font-extrabold mx-1"
                                style={{ color: "#40A6FB" }}
                              >
                                Linah Absteen
                                <span
                                  className="text-[36px] font-extrabold mx-1"
                                  style={{ color: "#40A6FB" }}
                                >
                                  .
                                </span>
                              </span>
                              6 MIN READ
                            </p>
                          </div>
                          <div className="flex max-w-xs bg-white mr-4 items-center">
                            <ExportedImage
                              src={addpost}
                              alt="Partly Cloudy"
                              className="h-13 w-13 mr-2"
                            />
                          </div>
                        </div>
                      </>
                    )
                  )
                )}
              </div>
            )}
          </>
        ))}

        {/* <div className="flex flex-wrap justify-around">
          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            <div className="mr-2">
              <ExportedImage
                src={Frame212}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">HEALTH</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Here's What
                They Found.
              </p>
              <p className="text-[10px] text-base font-bold text-gray-800">
                <span
                  className="text-[10px] font-extrabold mr-1"
                  style={{ color: "#40A6FB" }}
                >
                  |
                </span>
                By
                <span
                  className="font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  Linah Absteen
                  <span
                    className="text-[36px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
            </div>
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <div className="mr-2">
                <p className="text-[12px] font-bold text-red-800">ANALYSIS</p>
                <p className="text-[15px] font-semibold text-gray-800">
                  Our DeSantis and Haley Reporters switched places Here's What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={ana_flavia_1}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
            <p className="text-[10px] text-base font-bold text-gray-800">
              <span
                className="text-[10px] font-extrabold mr-1"
                style={{ color: "#40A6FB" }}
              >
                |
              </span>
              By
              <span
                className="font-extrabold mx-1"
                style={{ color: "#40A6FB" }}
              >
                Linah Absteen
                <span
                  className="text-[36px] font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  .
                </span>
              </span>
              6 MIN READ
            </p>
          </div>

          <div className="max-w-md bg-white mb-6 mx-auto">
            <a href="#">
              <ExportedImage
                priority={true}
                src={download3}
                alt="vladimirputin"
              />
            </a>
            <p className="text-base font-bold text-red-800 mt-2">CONGRESS</p>
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                ‘We have to get this done’: A top House Republican pushes for
                Ukraine aid
              </h5>
            </a>
            <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
              <span
                className="text-[10px] font-extrabold mr-1"
                style={{ color: "#40A6FB" }}
              >
                |
              </span>
              By
              <span
                className="font-extrabold mx-1"
                style={{ color: "#40A6FB" }}
              >
                Linah Absteen
                <span
                  className="text-[36px] font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  .
                </span>
              </span>
              6 MIN READ
            </p>
            <p className="text-[12px] font-normal text-gray-800 mt-2">
              Intel Chair Mike Turner says he’s confident Speaker Mike Johnson
              will allow a vote sending new funding to Kyiv.
            </p>
          </div>

          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            <div className="mr-2">
              <ExportedImage
                src={Frame214}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">HEALTH</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Here's What
                They Found.
              </p>
              <p className="text-[10px] text-base font-bold text-gray-800">
                <span
                  className="text-[10px] font-extrabold mr-1"
                  style={{ color: "#40A6FB" }}
                >
                  |
                </span>
                By
                <span
                  className="font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  Linah Absteen
                  <span
                    className="text-[36px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
            </div>
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <ExportedImage
                src={addpost}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Insights;
