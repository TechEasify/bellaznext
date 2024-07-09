import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import article from "../public/images/article.svg";
import vladimirputin from "../public/images/vladimir-putin.svg";
import Screenshot202 from "../public/images/Screenshot202.svg";
import ExportedImage from "next-image-export-optimizer";
import colinlloyd from "../public/images/colinlloyd.svg";
import anaflavia from "../public/images/anaflavia.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Ads from "./googleAds/Ads";
import { gql, useQuery } from "@apollo/client";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import Group4 from "../public/images/Group4.svg";
import Frame208 from "../public/images/Frame208.svg";
import Frame209 from "../public/images/Frame209.svg";
import ShareIcon from "@mui/icons-material/Share";
import share_variant from "../public/images/share-variant.svg";
import { useDialog } from "./DialogContext";

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

function News({ nodeByUri }) {
  console.log(nodeByUri, "nodeByUrinodeByUrinodeByUri");
  const { data, loading, error } = useQuery(GET_TOPHEADLINE_PAGE);
  const { iconDataResult } = useDialog();
  console.log(nodeByUri, "nodeByUri News Detail");
  const router = useRouter();
  const { slug, state } = router.query;
  // const dataJson = JSON.parse(state);
  // console.log(dataJson, "state");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(date, "date");
    return format(date, "MMMM d, yyyy");
  };

  const posts =
    nodeByUri?.categories?.nodes?.flatMap((item) =>
      item.posts?.nodes?.map((post) => ({
        ...post,
        categoryName: item.name,
        categoryViews: post.postView.view,
      }))
    ) || [];

  // Sorting posts by category view count in descending order
  posts.sort((a, b) => b.categoryViews - a.categoryViews);

  console.log(posts, "postspostspostsposts");

  return (
    <>
      {/* <Nav /> */}
      <hr />
      <div className="px-4 mx-auto flex bg-black items-center justify-center">
        <p className="text-base font-normal text-white">Ukraine & Russia War</p>
        <span className="text-white px-2">|</span>
        <p className="text-base font-normal text-white">Manage Your Money</p>
        <span className="text-white px-2">|</span>
        <p className="text-base font-normal text-white">Top Stocks</p>
      </div>
      <hr />
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0px] gap-7">
          <div className="flex flex-col md:flex-row justify-center gap-6 px-3 ">
            <div className="max-w-4xl text-white md:ml-64">
              <div className="py-8 px-8">
                <div className="flex w-full justify-between items-center">
                  <p className="text-base font-bold text-red-800">
                    {nodeByUri?.categories?.nodes[0]?.name}
                  </p>
                  <button
                    class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                    style={{ background: "#CE3A42" }}
                  >
                    <ShareIcon />
                  </button>
                </div>
                <h1 className="text-[24px] md:text-[40px] text-black font-bold">
                  {nodeByUri?.title}
                </h1>
                <p className="text-[8px] md:text-[10px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[10px] md:text-[12px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold ml-1"
                    style={{ color: "#40A6FB" }}
                  >
                    {nodeByUri?.author?.node?.name}
                    <span
                      className="text-[20px] md:text-[25px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>

                <p className="text-[8px] md:text-[10px] text-base font-bold text-gray-800 mb-4">
                  <span className="font-extrabold ml-1 mr-1">
                    Published {formatDate(nodeByUri?.date)}
                  </span>
                  <span className="text-[10px] md:text-[12px] font-extrabold mr-1">
                    |
                  </span>
                  Updated {format(nodeByUri?.dateGmt, "MMM. d, yyyy, h:mm a")} ET
                </p>
              </div>
              <ExportedImage
                className="mb-2"
                priority={true}
                src={nodeByUri?.featuredImage?.node?.sourceUrl}
                alt="article"
                width={760}
                height={499}
                style={{ width: "100%", height: "499px", objectFit: "cover" }}
              />
              {/* <Responsivevoice nodeByUri={nodeByUri} /> */}
              <p
                className="font-semibold mb-5"
                style={{ color: "#2B2B2B" }}
                dangerouslySetInnerHTML={{ __html: nodeByUri?.content }}
              />

              <div className="w-full max-w-2xl mt-10">
                <div className="flex items-center">
                  <p className="text-[20px] font-bold text-black italic mr-3">
                    MORE STORIES
                  </p>
                  <Link
                    href="#"
                    className="text-[12px] font-bold text-black underline"
                  >
                    More
                  </Link>
                </div>
                <hr
                  className="text-red-800"
                  style={{ height: "7px", background: "#CE3A42" }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  {nodeByUri?.categories?.nodes
                    ?.flatMap((item) =>
                      item.posts?.nodes?.map((post) => ({
                        ...post,
                        categoryName: item.name,
                      }))
                    )
                    ?.map((post, index) => (
                      <div key={index} className="flex items-center w-full">
                        <div className="flex w-full">
                          <div className="mr-2 flex-1">
                            <p className="text-[12px] font-bold text-red-800">
                              {post.categoryName}
                            </p>
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                            >
                              <p className="text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
                                {post.title}
                              </p>
                            </Link>
                          </div>
                          {post.featuredImage?.node?.sourceUrl && (
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                            >
                              <ExportedImage
                                src={post.featuredImage.node.sourceUrl}
                                alt="Partly Cloudy"
                                className="h-13 w-13 mr-2"
                                width={90}
                                height={87}
                                style={{
                                  width: "90px",
                                  height: "87px",
                                  objectFit: "cover",
                                }}
                              />
                            </Link>
                          )}
                        </div>
                        {(index + 1) % 2 === 0 && <hr />}
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full mt-10 mb-20">
                <div className="flex items-center">
                  <p className="text-[20px] font-bold text-black italic mr-3">
                    MOST READ
                  </p>
                </div>
                <hr
                  className="text-red-800"
                  style={{ height: "7px", background: "#CE3A42" }}
                />
                {posts.map(
                  (post, index) => (
                    console.log(post, "postpostpostpostpostpost"),
                    (
                      <div key={index}>
                        <div className="flex mt-5">
                          <div className="mr-2 flex-1">
                            <p className="text-[12px] font-bold text-red-800">
                              {post.categoryName}
                            </p>
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                            >
                              <p className="text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
                                {post.title}
                              </p>
                            </Link>
                          </div>
                          <ExportedImage
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="Partly Cloudy"
                            className="h-13 w-13 mr-2"
                            width={90}
                            height={87}
                            style={{
                              width: "90px",
                              height: "87px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <hr className="mt-5" />
                      </div>
                    )
                  )
                )}
              </div>
            </div>
            <div
              className="max-w-custom md:m-auto"
              style={{ maxWidth: "500px" }}
            >
              <ExportedImage
                className="mb-2"
                priority={true}
                src={Screenshot202}
                alt="Screenshot202"
                // style={{
                //   color: "transparent",
                //   height: "auto",
                //   position: "absolute",
                //   top: "21%",
                // }}
              />
              <div className="w-full max-w-3xl mx-auto">
                <p className="text-[16px] font-bold text-black-900 italic">
                  MORE FROM BELAAZ NEWS
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
                        <div className="mt-5 mb-5 w-64">
                          {side.posts.nodes
                            .slice()
                            .sort((a, b) => (a.title < b.title ? 1 : -1))
                            .slice(0, 2)
                            .map(
                              (itemdata) => (
                                console.log(itemdata, "itemdata"),
                                (
                                  <>
                                    <div className="flex">
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
                                          <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                                            {itemdata.title}
                                          </p>
                                        </Link>
                                      </div>
                                      {itemdata?.featuredImage?.node
                                        ?.sourceUrl ? (
                                        <ExportedImage
                                          src={
                                            itemdata.featuredImage.node
                                              .sourceUrl
                                          }
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
                                    </div>
                                  </>
                                )
                              )
                            )}
                        </div>
                      )
                    )
                  )}
                <hr />
                <p className="text-[15px] font-bold text-black-900 italic mt-10">
                  FOLLOW US
                </p>
                <hr
                  className="text-red-800"
                  style={{ height: "7px", background: "#CE3A42" }}
                />

                <div className="flex mt-5 mb-8">
                  <Link href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}>
                    <ExportedImage
                      src={Group}
                      alt="Partly Cloudy"
                      className="h-13 w-13 mx-2"
                    />
                  </Link>
                  <Link href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}>
                    <ExportedImage
                      src={Group1}
                      alt="Partly Cloudy"
                      className="h-13 w-13 mx-2"
                    />
                  </Link>
                  <Link href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}>
                    <ExportedImage
                      src={Group2}
                      alt="Partly Cloudy"
                      className="h-13 w-13 mx-2"
                    />
                  </Link>
                  <Link href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}>
                    <ExportedImage
                      src={Group3}
                      alt="Partly Cloudy"
                      className="h-13 w-13 mx-2"
                    />
                  </Link>
                  <Link href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}>
                    <ExportedImage
                      src={Group4}
                      alt="Partly Cloudy"
                      className="h-13 w-13 mx-2"
                    />
                  </Link>
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
              {/* <Ads
              className=""
              style={{
                display: "block",
                width: "251px",
                height: "496px",
                color: "transparent",
                position: "absolute",
                top: "21%",
              }}
              adClient="ca-pub-3209848804552918"
              adSlot="9293720177" // Replace with your actual ad slot ID
            /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default News;
