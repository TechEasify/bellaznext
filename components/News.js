import React, { useEffect, useState } from "react";
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
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { GET_NEWS_SECTION } from "./queries/categoryQueries";

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

function News() {
  const {
    iconDataResult,
    navData,
    setNavData,
    nodeByUri,
    setNodeByUri,
    dataNav,
  } = useDialog();
  const router = useRouter();
  const { slug } = router.query;
  const uri = `/${slug}`;
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const { data, loading, error } = useQuery(GET_TOPHEADLINE_PAGE);
  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useQuery(GET_NEWS_SECTION, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });
  console.log(newsData.nodeByUri, "newsData");

  useEffect(() => {
    if (newsData) {
      setNavData(newsData);
      setNodeByUri(newsData.nodeByUri);
    }
  }, [newsData]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, "MMMM d, yyyy");
    } catch (error) {
      console.error("Invalid date:", dateString);
      return "Invalid date";
    }
  };

  console.log(currentUrl, "currentUrl");

  const toggleShareOptions = () => {
    setIsOpen(!isOpen);
  };

  const posts =
    newsData?.nodeByUri?.categories?.nodes?.flatMap((item) =>
      item.posts?.nodes?.map((post) => ({
        ...post,
        categoryName: item.name,
        categoryViews: post.postView.view,
      }))
    ) || [];

  // Sorting posts by category view count in descending order
  posts.sort((a, b) => b.categoryViews - a.categoryViews);

  const contentText = newsData?.nodeByUri?.content
    ? newsData?.nodeByUri?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
    : ""; // Fallback if content is not available

  const wordCount = contentText ? contentText?.split(" ").length : 0;
  const readingTime = wordCount > 0 ? Math.ceil(wordCount / 250) : 0;

  console.log(posts, "postspostspostsposts");

  return (
    <>
      {/* <Nav /> */}
      {newsData?.nodeByUri?.__typename === "Post" && (
        <>
          <hr />
          <div className="w-full px-4 mx-auto flex bg-black items-center justify-center flex-wrap sm:flex-nowrap">
            <p
              className="text-base sm:text-xs md:text-sm lg:text-base font-normal text-white px-2 cursor-pointer"
              onClick={() =>  
                dataNav?.menu?.header?.topFirstLinks?.url &&
                router.push(dataNav.menu.header.topFirstLinks.url)
              }
            >
              {dataNav !== undefined && dataNav?.menu?.header?.topFirst}
            </p>
            <span className="text-white px-2">|</span>
            <p
              className="text-base sm:text-xs md:text-sm lg:text-base font-normal text-white px-2 cursor-pointer"
              onClick={() =>
                dataNav?.menu?.header?.topSecondLinks?.url &&
                router.push(dataNav.menu.header.topSecondLinks.url)
              }
            >
              {dataNav !== undefined && dataNav?.menu?.header?.topSecond}
            </p>
            <span className="text-white px-2">|</span>
            <p
              className="text-base sm:text-xs md:text-sm lg:text-base font-normal text-white px-2 cursor-pointer"
              onClick={() =>
                dataNav?.menu?.header?.topThirdLinks?.url &&
                router.push(dataNav.menu.header.topThirdLinks.url)
              }
            >
              {dataNav !== undefined && dataNav?.menu?.header?.topThird}
            </p>
          </div>

          <hr />
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0px] gap-7">
              <div className="flex flex-col md:flex-row justify-center gap-6 px-3 ">
                <div className="max-w-4xl text-white">
                  <div className="py-8 px-0 mx-8 md:px-8">
                    <div className="flex w-full justify-between items-center">
                      <p className="text-base font-bold text-red-800">
                        {newsData?.nodeByUri?.categories?.nodes[0]?.name}
                      </p>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 max-w-[40px] max-h-[40px] rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        style={{ background: "#CE3A42" }}
                        onClick={toggleShareOptions}
                      >
                        <ShareIcon />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="absolute left-[50%] transform -translate-x-1/2 flex sm:flex-row justify-around mt-2 p-2 bg-white border rounded-lg shadow-lg sm:w-64 md:w-80 lg:w-96 xl:w-[30rem]">
                        <FacebookShareButton url={currentUrl} className="mr-3">
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={currentUrl} className="mr-3">
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton url={currentUrl} className="mr-3">
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TelegramShareButton url={currentUrl} className="mr-3">
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <EmailShareButton url={currentUrl} className="mr-3">
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                      </div>
                    )}
                    <h1 className="text-[24px] md:text-[40px] text-black font-bold">
                      {newsData?.nodeByUri?.title}
                    </h1>
                    <p className="text-[15px] md:text-[15px] text-base font-bold text-gray-800 mb-4">
                      <span
                        className="text-[15px] md:text-[15px] font-extrabold mr-1"
                        style={{ color: "#40A6FB" }}
                      >
                        |
                      </span>
                      By
                      <span
                        className="font-extrabold ml-1"
                        style={{ color: "#40A6FB" }}
                      >
                        {newsData?.nodeByUri?.author?.node?.name}
                        <span
                          className="text-[20px] md:text-[25px] font-extrabold mx-1"
                          style={{ color: "#40A6FB" }}
                        >
                          .
                        </span>
                      </span>
                      {readingTime} MIN READ
                    </p>

                    <p className="text-[8px] md:text-[14px] text-base font-bold text-gray-800 mb-4">
                      <span className="ml-1 mr-1">
                        Published {formatDate(nodeByUri?.date)}
                      </span>
                      <span className="text-[14px] md:text-[12px] font-extrabold mr-1">
                        |
                      </span>
                      Updated{" "}
                      {format(
                        newsData?.nodeByUri?.dateGmt,
                        "MMM. d, yyyy, h:mm a"
                      )}{" "}
                      ET
                    </p>
                  </div>
                  {newsData?.nodeByUri?.featuredImage?.node?.sourceUrl && (
                    <ExportedImage
                      className="w-full mb-2 mx-auto w-[760px] h-[498px] object-cover"
                      priority={true}
                      src={newsData?.nodeByUri?.featuredImage?.node?.sourceUrl}
                      alt="article"
                      width={760}
                      height={498}
                    />
                  )}
                  {/* <Responsivevoice nodeByUri={nodeByUri} /> */}
                  <p
                    className="font-semibold mb-5 w-full md:w-[760px] mx-auto"
                    style={{ color: "#2B2B2B" }}
                    dangerouslySetInnerHTML={{
                      __html: newsData?.nodeByUri?.content,
                    }}
                  />

                  <div className="w-full md:w-[760px] mt-10 mx-auto mb-5">
                    <div className="flex items-center">
                      <p className="text-[18px] md:text-[20px] font-bold text-black italic mr-3">
                        MORE STORIES
                      </p>
                      <Link
                        href="/"
                        className="text-[10px] md:text-[12px] font-bold text-black underline"
                      >
                        More
                      </Link>
                    </div>
                    <hr
                      className="text-red-800"
                      style={{ height: "5px", background: "#CE3A42" }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                      {newsData?.nodeByUri?.categories?.nodes
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
                                <p className="text-[10px] md:text-[12px] font-bold text-red-800">
                                  {post.categoryName}
                                </p>
                                <Link
                                  href={{
                                    pathname: `/news/${post.slug}`,
                                  }}
                                >
                                  <p className="text-[13px] md:text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
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
                                    className="h-[70px] w-[70px] md:h-[87px] md:w-[90px] object-cover mr-2"
                                    width={90}
                                    height={87}
                                  />
                                </Link>
                              )}
                            </div>
                            {(index + 1) % 2 === 0 && <hr />}
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="hidden md:block w-full md:w-[760px] mt-10 mb-20 mx-auto">
                    <div className="flex items-center">
                      <p className="text-[18px] md:text-[20px] font-bold text-black italic mr-3">
                        MOST READ
                      </p>
                    </div>
                    <hr
                      className="text-red-800"
                      style={{ height: "5px", background: "#CE3A42" }}
                    />
                    {posts.map(
                      (post, index) => (
                        console.log(post, "postpostpostpostpostpost"),
                        (
                          <div key={index}>
                            <div className="flex mt-5">
                              <div className="mr-2 flex-1">
                                <p className="text-[10px] md:text-[12px] font-bold text-red-800">
                                  {post.categoryName}
                                </p>
                                <Link
                                  href={{
                                    pathname: `/news/${post.slug}`,
                                  }}
                                >
                                  <p className="text-[13px] md:text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
                                    {post.title}
                                  </p>
                                </Link>
                              </div>
                              {post?.featuredImage?.node?.sourceUrl && (
                                <ExportedImage
                                  src={post?.featuredImage?.node?.sourceUrl}
                                  alt="Partly Cloudy"
                                  className="object-cover w-[70px] h-[70px] md:w-[90px] md:h-[87px] mr-2"
                                  width={90}
                                  height={87}
                                />
                              )}
                            </div>
                            <hr className="mt-5" />
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
                <div
                  className="max-w-custom block md:hidden lg:hidden xl:block"
                  style={{ maxWidth: "500px" }}
                >
                  <ExportedImage
                    className="mb-2 object-cover"
                    priority={true}
                    src={Screenshot202}
                    alt="Screenshot202"
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
                      .map((side) => (
                        <div className="mt-5 mb-5 w-64" key={side.id}>
                          {side.posts.nodes
                            .slice()
                            .sort((a, b) => (a.title < b.title ? 1 : -1))
                            .slice(0, 2)
                            .map((itemdata) => (
                              <div key={itemdata.id}>
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
                                  {itemdata?.featuredImage?.node?.sourceUrl ? (
                                    <ExportedImage
                                      src={
                                        itemdata.featuredImage.node.sourceUrl
                                      }
                                      alt={itemdata.title}
                                      className="object-cover w-[90px] h-[87px] mr-2"
                                      width={90}
                                      height={87}
                                    />
                                  ) : (
                                    <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center mb-5">
                                      No Image
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}
                    <hr />
                    <p className="text-[15px] font-bold text-black-900 italic mt-10">
                      FOLLOW US
                    </p>
                    <hr
                      className="text-red-800"
                      style={{ height: "7px", background: "#CE3A42" }}
                    />
                    <div className="flex mt-5 mb-8">
                      <Link
                        href={
                          iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"
                        }
                      >
                        <ExportedImage
                          src={Group}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mx-2 object-cover"
                        />
                      </Link>
                      <Link
                        href={
                          iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"
                        }
                      >
                        <ExportedImage
                          src={Group1}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mx-2 object-cover"
                        />
                      </Link>
                      <Link
                        href={
                          iconDataResult?.menu?.socialIcons?.instagramLink ??
                          "/"
                        }
                      >
                        <ExportedImage
                          src={Group2}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mx-2 object-cover"
                        />
                      </Link>
                      <Link
                        href={
                          iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"
                        }
                      >
                        <ExportedImage
                          src={Group3}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mx-2 object-cover"
                        />
                      </Link>
                      <Link
                        href={
                          iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"
                        }
                      >
                        <ExportedImage
                          src={Group4}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mx-2 object-cover"
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
                        className="h-13 w-13 mx-2 object-cover"
                      />
                      <ExportedImage
                        src={Frame209}
                        alt="Partly Cloudy"
                        className="h-13 w-13 mx-2 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default News;
