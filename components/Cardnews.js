import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import markus_spiske from "../public/images/markus_spiske.svg";
import pexelstara from "../public/images/pexelstara.svg";
import pexelspixabay from "../public/images/pexelspixabay.svg";
import { gql, useQuery } from "@apollo/client";

const GET_CARD_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        allCategories {
          nodes {
            ... on Category {
              posts {
                nodes {
                  slug
                  categories {
                    nodes {
                      name
                      slug
                    }
                  }
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                      sourceUrl
                    }
                  }
                  content
                }
              }
            }
          }
        }
        footerAdvertisementImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        footerAdvertisementCode
        allCategoryBottomLineColor {
          insights
          jewishNews
          music
          politics
          ukraineRussiaWar
        }
      }
    }
  }
`;

const Cardnews = () => {
  const { openDialog } = useDialog();
  const { loading, music, data } = useQuery(GET_CARD_SECTION);
  const displayedCategories = new Set();

  console.log(data, "data card");
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto flex flex-wrap justify-between">
        {data?.page?.homePage?.allCategories?.nodes.slice(0, 6).map(
          (item) => (
            console.log(item, "item cardnews"),
            (
              <React.Fragment key={item.id}>
                {item.posts.nodes.map(
                  (post) => (
                    console.log(post, "post cardNews"),
                    (
                      <div
                        className="flex flex-wrap justify-around"
                        key={post.id}
                      >
                        {post.categories.nodes.slice(0, 6).map((category) => {
                          if (displayedCategories.has(category.name)) {
                            return null;
                          }
                          displayedCategories.add(category.name);

                          return (
                            console.log(category.name, "category card"),
                            (
                              <div
                                className="max-w-xs bg-white mb-6 mr-4 items-center"
                                key={category.id}
                              >
                                <div className="mr-2 mb-20">
                                  <h5 className="text-[15px] font-bold text-black-900">
                                    {category.name}
                                  </h5>
                                  <hr
                                    className="text-red-800 mb-3"
                                    style={{
                                      height: "7px",
                                      background: `${
                                        category.name === "Insights"
                                          ? data.page.homePage
                                              .allCategoryBottomLineColor
                                              .insights
                                          : category.name === "Jewish News"
                                          ? data.page.homePage
                                              .allCategoryBottomLineColor
                                              .jewishNews
                                          : category.name === "music"
                                          ? data.page.homePage
                                              .allCategoryBottomLineColor.music
                                          : category.name === "politics"
                                          ? data.page.homePage
                                              .allCategoryBottomLineColor
                                              .politics
                                          : category.name === "ukraineRussiaWar"
                                          ? data.page.homePage
                                              .allCategoryBottomLineColor
                                              .ukraineRussiaWar
                                          : category.name === "Breaking News"
                                          ? "rgb(206, 58, 66)"
                                          : category.name === "ANALYSIS"
                                          ? "#FFA500"
                                          : category.name === "HEALTH"
                                          ? "rgb(24, 119, 242)"
                                          : category.name === "Israel"
                                          ? "rgb(206, 58, 66)"
                                          : "FFA500"
                                      }`,
                                      width: "20%",
                                    }}
                                  />
                                  <ExportedImage
                                    src={post.featuredImage.node.sourceUrl}
                                    alt="vladimirputin"
                                    className="h-13 w-13 mr-2 mb-2"
                                    width={397}
                                    height={210}
                                    style={{
                                      width: "397px",
                                      height: "210px",
                                    }}
                                  />
                                  <p
                                    className="text-[15px] font-semibold text-gray-800 mb-2"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        post.content ||
                                        "The Mystery at the Heart of the OpenAI Chaos the heart at beach",
                                    }}
                                  />
                                </div>
                              </div>
                            )
                          );
                        })}
                      </div>
                    )
                  )
                )}
              </React.Fragment>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Cardnews;
