import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import article from "../public/images/article.svg";
import NewsVector from "../public/images/NewsVector.svg";
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
import Image from "next/image";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

function News({ nodeByUri }) {
  console.log(nodeByUri, "news nodeByUri");

  const { dataNav, dataIcon } = useHeader();
  const router = useRouter();
  const { slug } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

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

  const toggleShareOptions = () => {
    setIsOpen(!isOpen);
  };

  const posts =
    nodeByUri?.postDetailsEdit?.moreNewsSelectCategory?.nodes?.flatMap((item) =>
      item.posts?.nodes?.map((post) => post)
    ) || [];

  console.log(posts, "posts");

  // Sorting posts by category view count in descending order
  posts.sort((a, b) => b.categoryViews - a.categoryViews);

  const contentText = nodeByUri?.content
    ? nodeByUri?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
    : ""; // Fallback if content is not available

  const wordCount = contentText ? contentText?.split(" ").length : 0;
  const readingTime = wordCount > 0 ? Math.ceil(wordCount / 250) : 0;

  const sidebarAds =
    nodeByUri?.postDetailsEdit?.sidebarFirstAd?.adImage?.node?.sourceUrl;

  console.log(sidebarAds, "sidebarAds");

  return (
    <>
      {/* <Nav /> */}
      {nodeByUri?.__typename === "Post" && (
        <>
          <div className="w-full px-4 mx-auto flex bg-black items-center justify-center flex-wrap sm:flex-nowrap">
            <p
              className="text-[11px] md:text-[13px] font-normal text-white px-2 cursor-pointer"
              onClick={() =>
                dataNav?.menus?.nodes[0].header?.topFirstLinks?.url &&
                router.push(dataNav?.menus?.nodes[0].header?.topFirstLinks?.url)
              }
            >
              {dataNav?.menus?.nodes[0].header?.topFirst ||
                "Ukraine & Russia War"}
            </p>
            <span className="text-white px-2">|</span>
            <p
              className="text-[11px] md:text-[13px] font-normal text-white px-2 cursor-pointer"
              onClick={() =>
                dataNav?.menus?.nodes[0].header?.topSecondLinks?.url &&
                router.push(
                  dataNav?.menus?.nodes[0].header?.topSecondLinks?.url
                )
              }
            >
              {dataNav?.menus?.nodes[0].header?.topSecond ||
                "Manage Your Money"}
            </p>
            <span className="text-white px-2">|</span>
            <p
              className="text-[11px] md:text-[13px] font-normal text-white px-2 cursor-pointer"
              onClick={() =>
                dataNav?.menus?.nodes[0].header?.topThirdLinks?.url &&
                router.push(dataNav?.menus?.nodes[0].header?.topThirdLinks?.url)
              }
            >
              {dataNav?.menus?.nodes[0].header?.topThird || "Top Stocks"}
            </p>
          </div>

          <hr />
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0px] gap-7">
              <div className="flex flex-col md:flex-row justify-center gap-6 px-3 ">
                <div className="max-w-4xl text-white border-x-2">
                  <div className="py-8 mx-5 px-0 md:px-8 text-left">
                    <div className="flex w-full justify-between items-center">
                      <p className="text-[15px] uppercase tracking-widest text-base font-semibold text-red-800">
                        {nodeByUri?.categories?.nodes[0]?.name}
                      </p>
                      <button
                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 max-w-[40px] max-h-[40px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        style={{ background: "#CE3A42" }}
                        onClick={toggleShareOptions}
                      >
                        <ShareIcon />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="absolute left-[56%] transform -translate-x-1/2 flex sm:flex-row justify-end mt-2 p-2 bg-white border rounded-lg shadow-lg sm:w-64 md:w-80 lg:w-96 xl:w-[15rem]">
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
                      {nodeByUri?.title}
                    </h1>
                    <p className="text-[15px] md:text-[15px] text-base font-extralight text-gray-800 mb-4">
                      <span
                        className="text-[18px] md:text-[15px] font-extrabold mr-1"
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
                      {readingTime} MIN READ
                    </p>

                    {/* <p className="text-[8px] md:text-[14px] text-base font-extralight text-gray-800 mb-4">
                      <span className="ml-1 mr-1">
                        Published {formatDate(nodeByUri?.date)}
                      </span>
                      <span className="text-[14px] md:text-[12px] font-extrabold mr-1">
                        |
                      </span>
                      Updated{" "}
                      {format(
                        nodeByUri?.dateGmt,
                        "MMM. d, yyyy, h:mm a"
                      )}{" "}
                      ET
                    </p> */}
                  </div>
                  {nodeByUri?.featuredImage?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="w-full mb-2 mx-auto w-[760px] h-[498px] object-cover"
                      src={nodeByUri?.featuredImage?.node?.sourceUrl}
                      alt="article"
                      width={760}
                      height={498}
                    />
                  )}
                  <div
                    className="text-[20px] font-extralight mb-5 w-full md:w-[760px] mx-auto wp-block"
                    dangerouslySetInnerHTML={{
                      __html: nodeByUri?.content,
                    }}
                  />

                  <div className="w-full md:w-[760px] mt-10 mx-auto mb-5">
                    <div className="flex items-center">
                      <p className="text-[18px] md:text-[22px] font-extrabold text-black italic mr-3">
                        MORE STORIES
                      </p>
                      <Link
                        href="/"
                        className="text-[10px] md:text-[14px] font-bold text-black mr-1 underline"
                      >
                        More
                      </Link>
                      <Image
                        priority={true}
                        loader={customLoader}
                        src={NewsVector}
                        alt="Partly Cloudy"
                        className="h-[7px] w-[5px] md:h-[7px] md:w-[5px] object-cover mr-2"
                        width={5}
                        height={7}
                      />
                    </div>
                    <hr
                      className="text-red-800"
                      style={{ height: "5px", background: "#CE3A42" }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                      {nodeByUri?.postDetailsEdit?.moreNewsSelectCategory?.nodes
                        ?.flatMap((item) =>
                          item.posts?.nodes?.map((post) => ({
                            ...post,
                            categoryName: item.name,
                          }))
                        )
                        ?.map((post, index) => {
                          if (post.slug !== slug) {
                            return (
                              <div
                                key={index}
                                className="flex items-center w-full"
                              >
                                <div className="flex w-full">
                                  <div className="mr-2 flex-1">
                                    <p className="text-[10px] md:text-[12px] font-semibold tracking-widest text-red-800 uppercase">
                                      {post?.categoryName}
                                    </p>
                                    <Link
                                      href={
                                        post?.slug !== undefined
                                          ? `/news/${post.slug}`
                                          : "/"
                                      }
                                    >
                                      <p className="text-[13px] md:text-[16px] font-semibold text-black mb-3 hover:text-skyBlue">
                                        {post?.title}
                                      </p>
                                    </Link>
                                  </div>
                                  {post?.featuredImage?.node?.sourceUrl && (
                                    <Link
                                      href={
                                        post?.slug !== undefined
                                          ? `/news/${post.slug}`
                                          : "/"
                                      }
                                    >
                                      <Image
                                        priority={true}
                                        loader={customLoader}
                                        src={
                                          post?.featuredImage?.node?.sourceUrl
                                        }
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
                            );
                          }
                          return null; // Return null to avoid rendering anything if the condition is not met
                        })}
                    </div>
                  </div>

                  <div className="hidden md:block w-full md:w-[760px] mt-10 mb-20 mx-auto">
                    <div className="flex items-center">
                      <p className="text-[18px] md:text-[22px] font-extrabold text-black italic mr-3">
                        MOST READ
                      </p>
                    </div>
                    <hr
                      className="text-red-800"
                      style={{ height: "5px", background: "#CE3A42" }}
                    />
                    {posts.map((post, index) => {
                      console.log(post, "post map");

                      if (post.slug !== slug) {
                        return (
                          <div key={index}>
                            <div className="flex mt-5 pl-3">
                              <div className="mr-2 flex-1">
                                <h5
                                  className="text-[35px] text-black"
                                  style={{ color: "#CE3A42" }}
                                >
                                  {index + 1}
                                </h5>
                              </div>
                              <div className="flex">
                                <div className="mr-2 flex-2 w-[203px]">
                                  <p className="text-[10px] md:text-[12px] font-semibold text-red-800 uppercase tracking-widest">
                                    {post?.categoryName}
                                  </p>
                                  <Link
                                    href={
                                      post?.slug !== undefined
                                        ? `/news/${post.slug}`
                                        : "/"
                                    }
                                  >
                                    <p className="text-[13px] md:text-[16px] font-bold text-black mb-3 hover:text-skyBlue">
                                      {post?.title}
                                    </p>
                                  </Link>
                                </div>
                                {post?.featuredImage?.node?.sourceUrl && (
                                  <Image
                                    priority={true}
                                    loader={customLoader}
                                    src={post?.featuredImage?.node?.sourceUrl}
                                    alt="Partly Cloudy"
                                    className="object-cover w-[70px] h-[70px] md:w-[90px] md:h-[87px] mr-2"
                                    width={90}
                                    height={87}
                                  />
                                )}
                              </div>
                            </div>
                            <hr className="mt-5" />
                          </div>
                        );
                      }

                      return null; // Return null if the condition is not met
                    })}
                  </div>
                </div>
                <div
                  className="max-w-custom hidden lg:block"
                  style={{ maxWidth: "251px" }}
                >
                  {sidebarAds && (
                    <Image
                      identifier
                      priority={true}
                      loader={customLoader}
                      className="mt-8 mb-9 object-cover w-[251px] h-[496px]"
                      src={sidebarAds}
                      alt="Screenshot202"
                      width={251}
                      height={496}
                    />
                  )}

                  {nodeByUri?.postDetailsEdit?.moreNewsSelectCategory?.nodes.slice(0, 2).map((item, index) =>
                      item.posts.nodes.slice(0, 4).map(
                        (posts, index) => (
                          console.log(posts, "posts detail"),
                          (
                            <div
                              key={index}
                              className="w-full max-w-3xl mx-auto"
                            >
                              {
                                index === 0 && 
                                (<>
                                <p className="text-[22px] font-bold text-black-900 italic">
                                  {nodeByUri?.postDetailsEdit?.title}
                                </p>
                                <hr
                                  className="text-red-800"
                                  style={{
                                    height: "7px",
                                    background: "#CE3A42",
                                  }}
                                />
                                </>)
                              }
                              <div className="mt-5 mb-5 w-64">
                                <div className="w-[251px]">
                                  <div className="flex my-3">
                                    <div className="mr-2 w-48 mb-2">
                                      <p className="text-[10px] font-bold text-red-800 uppercase tracking-widest">
                                        {item?.name}
                                      </p>
                                      <Link
                                        href={
                                          posts?.slug !== undefined
                                            ? `/news/${posts?.slug}`
                                            : "/"
                                        }
                                        passHref
                                      >
                                        <p className="text-[13px] font-semibold text-black hover:text-skyBlue">
                                          {posts?.title}
                                        </p>
                                      </Link>
                                    </div>
                                    {posts?.featuredImage?.node?.sourceUrl ? (
                                      <Image
                                        priority={true}
                                        loader={customLoader}
                                        src={
                                          posts?.featuredImage?.node?.sourceUrl
                                        }
                                        alt={posts?.title}
                                        className="object-cover w-[68px] h-[76px] mr-2"
                                        width={68}
                                        height={76}
                                      />
                                    ) : (
                                      <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center mb-5">
                                        No Image
                                      </div>
                                    )}
                                  </div>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          )
                        )
                      )
                    )}
                  <p className="text-[15px] font-bold text-black-900 italic mt-10">
                    FOLLOW US
                  </p>
                  <hr
                    className="text-red-800"
                    style={{ height: "7px", background: "#CE3A42" }}
                  />
                  <div className="flex mt-5 mb-8">
                    {dataIcon?.menu?.socialIcons?.whatsappLink && (
                      <Link
                        href={
                          dataIcon !== undefined &&
                          dataIcon?.menu?.socialIcons?.whatsappLink !==
                            undefined
                            ? dataIcon?.menu?.socialIcons?.whatsappLink
                            : "/"
                        }
                      >
                        {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl && (
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                                ?.sourceUrl
                            }
                            alt="WhatsApp"
                            className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                            width={39.99}
                            height={40}
                          />
                        )}
                      </Link>
                    )}
                    {dataIcon?.menu?.socialIcons?.facebookLink && (
                      <Link
                        href={
                          dataIcon !== undefined &&
                          dataIcon?.menu?.socialIcons?.facebookLink !==
                            undefined
                            ? dataIcon?.menu?.socialIcons?.facebookLink
                            : "/"
                        }
                      >
                        {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl && (
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              dataIcon?.menu?.socialIcons?.facebookIcon?.node
                                ?.sourceUrl
                            }
                            alt="Facebook"
                            className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                            width={39.99}
                            height={40}
                          />
                        )}
                      </Link>
                    )}
                    {dataIcon?.menu?.socialIcons?.instagramLink && (
                      <Link
                        href={
                          dataIcon !== undefined &&
                          dataIcon?.menu?.socialIcons?.instagramLink !==
                            undefined
                            ? dataIcon?.menu?.socialIcons?.instagramLink
                            : "/"
                        }
                      >
                        {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl && (
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              dataIcon?.menu?.socialIcons?.instagramIcon?.node
                                ?.sourceUrl
                            }
                            alt="Instagram"
                            className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                            width={39.99}
                            height={40}
                          />
                        )}
                      </Link>
                    )}
                    {dataIcon?.menu?.socialIcons?.twiterLink && (
                      <Link
                        href={
                          dataIcon !== undefined &&
                          dataIcon?.menu?.socialIcons?.twiterLink !== undefined
                            ? dataIcon?.menu?.socialIcons?.twiterLink
                            : "/"
                        }
                      >
                        {dataIcon?.menu?.socialIcons?.twiterIcon?.node
                          ?.sourceUrl && (
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              dataIcon?.menu?.socialIcons?.twiterIcon?.node
                                ?.sourceUrl
                            }
                            alt="Twitter"
                            className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                            width={39.99}
                            height={40}
                          />
                        )}
                      </Link>
                    )}
                    {dataIcon?.menu?.socialIcons?.youtubeLink && (
                      <Link
                        href={
                          dataIcon !== undefined &&
                          dataIcon?.menu?.socialIcons?.youtubeLink !== undefined
                            ? dataIcon?.menu?.socialIcons?.youtubeLink
                            : "/"
                        }
                      >
                        {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl && (
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                                ?.sourceUrl
                            }
                            alt="YouTube"
                            className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                            width={39.99}
                            height={40}
                          />
                        )}
                      </Link>
                    )}
                  </div>
                  <p className="text-[15px] font-bold text-black-900 italic">
                    FOLLOW BELAAZ ON WhatsApp
                  </p>
                  <hr
                    className="text-red-800"
                    style={{ height: "7px", background: "#CE3A42" }}
                  />
                  <div className="flex mt-5 mb-8">
                    <Link
                      href={
                        dataIcon !== undefined &&
                        dataIcon?.menu?.followBelaazOnWhatsapp
                          ?.whatsappStatusLink !== undefined
                          ? dataIcon?.menu?.followBelaazOnWhatsapp
                              ?.whatsappStatusLink
                          : "/"
                      }
                    >
                      <Image
                        priority={true}
                        loader={customLoader}
                        src={Frame208}
                        alt="WhatsApp Status"
                        className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                        width={101}
                        height={32}
                      />
                    </Link>
                    <Link
                      href={
                        dataIcon !== undefined &&
                        dataIcon?.menu?.followBelaazOnWhatsapp
                          ?.whatsappGroupLink !== undefined
                          ? dataIcon?.menu?.followBelaazOnWhatsapp
                              ?.whatsappGroupLink
                          : "/"
                      }
                    >
                      <Image
                        priority={true}
                        loader={customLoader}
                        src={Frame209}
                        alt="WhatsApp Group"
                        className="h-13 w-13 mx-2 object-cover hover:scale-110 hover:opacity-80"
                        width={101}
                        height={32}
                      />
                    </Link>
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
