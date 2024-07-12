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
          id
          ... on Category {
            name
            posts {
              nodes {
                content
                featuredImage {
                  node {
                    altText
                    srcSet
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
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
  const { loading, error, data } = useQuery(GET_CARD_SECTION);
  console.log(data, "datadatadata")
  const displayedCategories = new Set();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.page || !data.page.homePage) {
    return <p>No data available</p>;
  }

  console.log(data, "data card");

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto flex flex-wrap justify-between">
        {data.page.homePage.allCategories.nodes.slice(0, 6).map((item) => (
          <React.Fragment key={item.id}>
            {item.posts.nodes.map((post) => (
              console.log(post, "postpostpostpostpostpostpost"),
              <div
                className="flex flex-wrap justify-around"
                key={post.id}
              >
                {post.categories.nodes.slice(0, 6).map((category) => {
                  if (displayedCategories.has(category.name)) {
                    return null;
                  }
                  displayedCategories.add(category.name);

                  const bottomLineColor = (() => {
                    switch (category.name) {
                      case "Insights":
                        return data.page.homePage.allCategoryBottomLineColor.insights;
                      case "Jewish News":
                        return data.page.homePage.allCategoryBottomLineColor.jewishNews;
                      case "music":
                        return data.page.homePage.allCategoryBottomLineColor.music;
                      case "politics":
                        return data.page.homePage.allCategoryBottomLineColor.politics;
                      case "ukraineRussiaWar":
                        return data.page.homePage.allCategoryBottomLineColor.ukraineRussiaWar;
                      case "Breaking News":
                        return "rgb(206, 58, 66)";
                      case "ANALYSIS":
                        return "#FFA500";
                      case "HEALTH":
                        return "rgb(24, 119, 242)";
                      case "Israel":
                        return "rgb(206, 58, 66)";
                      default:
                        return "#FFA500";
                    }
                  })();

                  return (
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
                            background: bottomLineColor,
                            width: "20%",
                          }}
                        />
                        <ExportedImage
                          src={post?.featuredImage?.node?.sourceUrl}
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
                  );
                })}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cardnews;
