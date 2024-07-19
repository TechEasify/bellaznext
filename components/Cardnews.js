import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import markus_spiske from "../public/images/markus_spiske.svg";
import pexelstara from "../public/images/pexelstara.svg";
import pexelspixabay from "../public/images/pexelspixabay.svg";
import { gql, useQuery } from "@apollo/client";
import FooterTopAd from "./FooterTopAd";
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
          d
          e
          f
        }
      }
    }
  }
`;

const Cardnews = () => {
  const { openDialog } = useDialog();
  const { loading, error, data } = useQuery(GET_CARD_SECTION);
  console.log(data, "datadatadata");
  const displayedCategories = new Set();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.page || !data.page.homePage) {
    return <p>No data available</p>;
  }

  console.log(data, "data card");

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto flex flex-wrap justify-center">
        {/* {data.page.homePage.allCategories.nodes.slice(0, 3).map((item) => {
          console.log(item, "itemitemitemitemitem");
          return (
            <React.Fragment key={item.id}>
              {item.posts.nodes.map((post) => {
                console.log(post, "postpostpostpostpostpostpostpost");
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
                    case "politics":
                      return data.page.homePage.allCategoryBottomLineColor.d;
                    case "ukraineRussiaWar":
                      return data.page.homePage.allCategoryBottomLineColor.e;
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
                  <div className="flex flex-wrap justify-around" key={post.id}>
                    <div className="max-w-xs bg-white mr-4 items-center">
                      <div className="mr-2 mb-20">
                        <h5 className="text-[15px] font-bold text-black-900">
                          {item.name}
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
                          className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                          width={397}
                          height={210}
                        />
                        <Link href={`/news/${post.slug}`}>
                          <p className="text-[15px] font-semibold text-gray-800 mb-2">
                            {post.title}
                          </p>
                        </Link>
                        {data.page.homePage.allCategories.nodes.slice(3, 6).map((item) => {
                          console.log(item, "item inside data");
                          return (
                            <div key={item.id}>
                              {item.posts.nodes.map((post) => {
                                console.log(post, "post inside posts");
                                return (
                                  <div key={post.id}>
                                    <Link href={`/news/${post.slug}`}>
                                      <p className="text-[15px] font-semibold text-gray-800 mb-2">
                                        {post.title}
                                      </p>
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })} */}
        <div className="flex flex-wrap justify-around">
          {data.page.homePage.allCategories.nodes.slice(0, 3).map((item) => {
            console.log(item, "item card inside");
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
                case "politics":
                  return data.page.homePage.allCategoryBottomLineColor.d;
                case "ukraineRussiaWar":
                  return data.page.homePage.allCategoryBottomLineColor.e;
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
                      width: "20%",
                    }}
                  />
                  
                    <div key={item.id}>
                      <ExportedImage
                        src={item?.posts?.nodes[0]?.featuredImage?.node?.sourceUrl}
                        alt="vladimirputin"
                        className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                        width={397}
                        height={210}
                      />
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
      <FooterTopAd data={data} />
    </div>
  );
};

export default Cardnews;
