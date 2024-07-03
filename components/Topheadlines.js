import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import GettyImages from "../public/images/GettyImages.svg";
import dctaxdeal from "../public/images/dctaxdeal.svg";
import jeuol4a_prince from "../public/images/jeuol4a_prince.svg";
import Frame from "../public/images/Frame.svg";
import download from "../public/images/download.svg";
import parthasarathy from "../public/images/parthasarathy.svg";
import ana_flavia_1 from "../public/images/ana_flavia_1.svg";
import mikevon from "../public/images/mikevon.svg";
import desing from "../public/images/desing.svg";
import colin_lloyd from "../public/images/colin_lloyd.svg";
import sidepost from "../public/images/sidepost.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import Group4 from "../public/images/Group4.svg";
import Frame208 from "../public/images/Frame208.svg";
import Frame209 from "../public/images/Frame209.svg";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Ads from "./googleAds/Ads";

const GET_TOPHEADLINE_PAGE = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        topHeadlinesTitle
        topHeadlineTitleLineColor
        topHeadlinesPost {
          nodes {
            ... on Category {
              name
              slug
              posts {
                nodes {
                  slug
                  featuredImage {
                    node {
                      altText
                      slug
                      srcSet
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  author {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlineSidebarTitle
        topHeadlineSidebarTitleLineColor
        topHeadlineSidebarPosts {
          nodes {
            ... on Category {
              id
              name
              slug
              posts {
                nodes {
                  slug
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlineSidebarFirstAd {
          topHeadlineFirstAd {
            node {
              slug
              altText
              srcSet
              sourceUrl
            }
          }
          topHeadlineFirstAdCode
        }
        topHeadlineSidebarSinglePosts {
          nodes {
            ... on Category {
              name
              slug
              posts {
                nodes {
                  slug
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlineSidebarSecondAd {
          topHeadlineSecondAdImage {
            node {
              altText
              srcSet
              slug
              sourceUrl
            }
          }
          topHeadlineSecondAdCode
        }
        topHeadlineBottomAd {
          topHeadlineBottomAdImage {
            node {
              altText
              srcSet
              slug
              sourceUrl
            }
          }
          topHeadlineBottomAdCode
        }
      }
    }
  }
`;

const Topheadlines = () => {
  const { data, loading, error } = useQuery(GET_TOPHEADLINE_PAGE);
  console.log(data?.page?.homePage, "headline data");
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-7">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <h1 className="text-[25px] font-bold text-black-900 italic">
              {data?.page?.homePage?.topHeadlinesTitle}
            </h1>
            <hr
              className="text-red-800 mr-5"
              style={{
                height: "7px",
                background: `${data?.page?.homePage?.topHeadlineTitleLineColor}`,
              }}
            />
            <br />
          </div>

          <div className="flex flex-wrap justify-around px-2">
            {data?.page?.homePage?.topHeadlinesPost?.nodes.slice(0, 6).map(
              (item) => (
                console.log(item, "item item topheadline"),
                (
                  <div key={item.id}>
                    {item?.posts?.nodes.slice(0, 1).map((post) =>
                      post?.featuredImage?.node?.sourceUrl ? (
                        <div className="max-w-md bg-white mb-6" key={post.id}>
                          <Link href={`/news/${post.slug}`}>
                            <ExportedImage
                              priority={true}
                              src={post?.featuredImage?.node?.sourceUrl}
                              alt={post?.featuredImage?.node?.sourceUrl || ""}
                              width={432}
                              height={293}
                              style={{
                                width: "432px",
                                height: "293px",
                                objectFit: "cover",
                              }}
                            />
                          </Link>
                          <p className="text-base font-bold text-red-800 mt-2">
                            {item.name}
                          </p>
                          <Link href={`/news/${post.slug}`}>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {post?.title}
                            </h5>
                          </Link>
                          <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                            <span
                              className="text-[25px] font-extrabold mr-1"
                              style={{ color: "#40A6FB" }}
                            >
                              |
                            </span>
                            By
                            <span
                              className="font-extrabold mx-1"
                              style={{ color: "#40A6FB" }}
                            >
                              {post?.author?.node?.name || ""}
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
                      ) : null
                    )}
                  </div>
                )
              )
            )}
          </div>

          <hr className="mx-6 mb-8" />
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <p className="text-[15px] font-bold text-black-900 italic">
            {data?.page?.homePage?.topHeadlineSidebarTitle}
          </p>
          <hr
            className="text-red-800"
            style={{
              height: "7px",
              background: `${data?.page?.homePage?.topHeadlineSidebarTitleLineColor}`,
            }}
          />

          {data?.page?.homePage?.topHeadlineSidebarPosts?.nodes
            .slice()
            .sort((a, b) => (a.title < b.title ? 1 : -1))
            .slice(0, 2)
            .map(
              (side) => (
                console.log(side, "side"),
                (
                  <div className="flex flex-wrap mt-5 mb-5">
                    {side.posts.nodes
                      .slice()
                      .sort((a, b) => (a.title < b.title ? 1 : -1))
                      .slice(0, 2)
                      .map(
                        (itemdata) => (
                          console.log(itemdata, "itemdata"),
                          (
                            <>
                              <div className="mr-2 w-48 mb-2">
                                <p className="text-[12px] font-bold text-red-800">
                                  {side.name}
                                </p>
                                <Link
                                  href={{
                                    pathname: `/news/${itemdata.slug}`,
                                  }}
                                  passHref
                                >
                                  <p className="text-[15px] font-semibold text-gray-800">
                                    {itemdata.title}
                                  </p>
                                </Link>
                              </div>
                              {itemdata?.featuredImage?.node?.sourceUrl ? (
                                <ExportedImage
                                  src={itemdata.featuredImage.node.sourceUrl}
                                  alt={itemdata.title}
                                  className="h-13 w-13 mr-2"
                                  width={90}
                                  height={87}
                                  style={{
                                    width: "90px",
                                    height: "87px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center mb-5">
                                  No Image
                                </div>
                              )}
                            </>
                          )
                        )
                      )}
                  </div>
                )
              )
            )}
          <hr />
          <div className="flex mt-5">
            {data?.page?.homePage?.topHeadlineSidebarFirstAd?.topHeadlineFirstAd
              ?.node?.sourceUrl ? (
              <ExportedImage
                src={
                  data.page.homePage.topHeadlineSidebarFirstAd
                    .topHeadlineFirstAd.node.sourceUrl
                }
                alt="Partly Cloudy"
                className="w-full mr-2"
                width={318}
                height={107}
                style={{ width: "318px", height: "107px", objectFit: "cover" }}
              />
            ) : (
              <Ads
                className=""
                style={{
                  display: "block",
                  width: "318px",
                  height: "107px",
                  margin: "0 auto",
                }}
                adClient="ca-pub-3209848804552918"
                adSlot="9293720177"
              />
            )}
          </div>

          <hr />

          {data?.page?.homePage?.topHeadlineSidebarSinglePosts?.nodes
            .slice()
            .sort((a, b) => (a.title < b.title ? 1 : -1))
            .slice(0, 1)
            .map(
              (side) => (
                console.log(side, "side"),
                (
                  <div className="flex mt-5 mb-5">
                    {side.posts.nodes
                      .slice()
                      .sort((a, b) => (a.title < b.title ? 1 : -1)) // Sorting in descending order based on the title (or any other property)
                      .slice(0, 1) // Limiting to only one item
                      .map(
                        (itemdata) => (
                          console.log(
                            itemdata.featuredImage?.node?.srcSet,
                            "itemdata"
                          ),
                          (
                            <>
                              <div className="mr-2">
                                <p className="text-[12px] font-bold text-red-800">
                                  {side.name}
                                </p>
                                <Link
                                  href={{
                                    pathname: `/news/${itemdata.slug}`,
                                  }}
                                  passHref
                                >
                                  <p className="text-[15px] font-semibold text-gray-800 mb-3">
                                    {itemdata.title}
                                  </p>
                                </Link>
                              </div>
                              {itemdata?.featuredImage?.node?.sourceUrl ? (
                                <ExportedImage
                                  src={itemdata.featuredImage.node.sourceUrl}
                                  alt={itemdata.title}
                                  className="h-13 w-13 mr-2"
                                  width={90}
                                  height={87}
                                  style={{
                                    width: "90px",
                                    height: "87px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center">
                                  No Image
                                </div>
                              )}
                            </>
                          )
                        )
                      )}
                  </div>
                )
              )
            )}
          {/* <div className="flex mt-5">
            <div className="mr-2">
              <p className="text-[12px] font-bold text-red-800">ANALYSIS</p>
              <p className="text-[15px] font-semibold text-gray-800 mb-3">
                Our DeSantis and Haley Reporters switched places Her’s What They
                Found.
              </p>
            </div>
            <ExportedImage
              src={colin_lloyd}
              alt="Partly Cloudy"
              className="h-13 w-13 mr-2"
            />
          </div> */}

          <div className="flex mb-5 mt-10">
            {data?.page?.homePage?.topHeadlineSidebarSecondAd
              ?.topHeadlineSecondAdImage?.node?.sourceUrl ? (
              <ExportedImage
                src={
                  data?.page?.homePage?.topHeadlineSidebarSecondAd
                    ?.topHeadlineSecondAdImage?.node?.sourceUrl
                }
                alt="Partly Cloudy"
                className="w-full mr-2"
                width={314}
                height={441}
                style={{ width: "314px", height: "441px", objectFit: "cover" }}
              />
            ) : (
              <Ads
                className=""
                style={{
                  display: "block",
                  width: "314px",
                  height: "441px",
                  margin: "0 auto",
                }}
                adClient="ca-pub-3209848804552918"
                adSlot="9293720177"
              />
            )}
          </div>

          {/* <div className="flex mb-5 mt-10">
            <ExportedImage
              src={sidepost}
              alt="Partly Cloudy"
              className="w-full mr-2"
              width={314}
              height={441}
            />
          </div> */}

          <p className="text-[15px] font-bold text-black-900 italic">
            FOLLOW US
          </p>
          <hr
            className="text-red-800"
            style={{ height: "7px", background: "#CE3A42" }}
          />

          <div className="flex mt-5 mb-8">
            <ExportedImage
              src={Group}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
            <ExportedImage
              src={Group1}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
            <ExportedImage
              src={Group2}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
            <ExportedImage
              src={Group3}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
            <ExportedImage
              src={Group4}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
          </div>

          <p className="text-[15px] font-bold text-black-900 italic">
            FOLLOW BELAAZ ON WhatsApp
          </p>
          <hr
            className="text-red-800"
            style={{ height: "7px", background: "#CE3A42" }}
          />

          <div className="flex mt-5 mb-8">
            <ExportedImage
              src={Frame208}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
            <ExportedImage
              src={Frame209}
              alt="Partly Cloudy"
              className="h-13 w-13 mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheadlines;
