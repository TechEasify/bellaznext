import ExportedImage from "next-image-export-optimizer";
import React from "react";
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
                excerpt
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
        a
        b
        c
        d
        e
        f
      }
    }
  }
}
`;

const Newscard = ({ nodeByUri }) => {
  console.log(nodeByUri, "nodeByUri newsCard");
  const { loading, error, data } = useQuery(GET_CARD_SECTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data, "data new acara a atabv");
  const displayedCategories = new Set();

  return (
    <>
      <div className="hidden md:block px-4 py-8 mx-auto max-w-screen-xl">
        <div className="w-full mx-auto flex flex-wrap justify-center">
          {data?.page?.homePage?.allCategories?.nodes.slice(0, 3).map((item) => (
            console.log(item, "item cardnews"),
            <React.Fragment key={item.id}>
              {item.posts.nodes.map((post) => (
                console.log(post, "post cardNews"),
                <div className="flex flex-wrap justify-around" key={post.id}>
                  {post.categories.nodes.slice(0, 6).map((category) => {
                    if (displayedCategories.has(category.name)) {
                      return null;
                    }
                    displayedCategories.add(category.name);

                    return (
                      console.log(category.name, "category card"),
                      <div className="max-w-xs bg-white mb-6 mr-4 items-center" key={category.id}>
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
                                  ? data.page.homePage.allCategoryBottomLineColor.a
                                  : category.name === "Jewish News"
                                  ? data.page.homePage.allCategoryBottomLineColor.b
                                  : category.name === "music"
                                  ? data.page.homePage.allCategoryBottomLineColor.c
                                  : category.name === "politics"
                                  ? data.page.homePage.allCategoryBottomLineColor.d
                                  : category.name === "ukraineRussiaWar"
                                  ? data.page.homePage.allCategoryBottomLineColor.e
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
                          {post?.featuredImage?.node?.sourceUrl && (
                            <ExportedImage
                              src={post.featuredImage.node.sourceUrl}
                              alt={post.featuredImage.node.altText || ""}
                              className="object-cover w-[397px] h-[210px] mr-2 mb-2"
                              width={397}
                              height={210}
                            />
                          )}
                          <p
                            className="text-[15px] font-semibold text-gray-800 mb-2"
                            dangerouslySetInnerHTML={{
                              __html:
                                post.excerpt ||
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
    </>
  );
};

export default Newscard;
