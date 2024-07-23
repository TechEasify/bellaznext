import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
                  title
                  slug
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
          {/* {data?.page?.homePage?.allCategories?.nodes.slice(0, 3).map((item) => (
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
          ))} */}
          <div className="flex flex-wrap justify-around">
            {data.page.homePage.allCategories.nodes.slice(0, 3).map((item) => {
              console.log(item, "item card inside category");
              if (displayedCategories.has(item.name)) {
                return null;
              }
              displayedCategories.add(item.name);

              const bottomLineColor = (() => {
                switch (item.name) {
                  case "Insights":
                    return data.page.homePage.allCategoryBottomLineColor.a;
                  case "Jewish News":
                    return data.page.homePage.allCategoryBottomLineColor.b;
                  case "music":
                    return data.page.homePage.allCategoryBottomLineColor.c;
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
                  key={item.id}
                  className="max-w-xs bg-white mr-4 items-center"
                >
                  <div className="mr-2 mb-20">
                    <h5 className="text-[15px] font-bold text-black-900">
                      {item.name}
                    </h5>
                    <hr
                      className="text-red-800 mb-3"
                      style={{
                        height: "7px",
                        background: bottomLineColor,
                      }}
                    />

                    <div key={item.id}>
                      {item?.posts?.nodes[0]?.featuredImage?.node?.sourceUrl && (
                        <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                          <ExportedImage
                            src={
                              item?.posts?.nodes[0]?.featuredImage?.node
                                ?.sourceUrl
                            }
                            alt="vladimirputin"
                            className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                            width={397}
                            height={210}
                          />
                        </Link>
                      )}
                      <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                        <p className="text-[15px] font-semibold text-gray-800 mb-2">
                          {item?.posts?.nodes[0]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                        <p className="text-[15px] font-semibold text-gray-800 mb-2">
                          {item?.posts?.nodes[1]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                        <p className="text-[15px] font-semibold text-gray-800 mb-2">
                          {item?.posts?.nodes[2]?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Newscard;
