import ExportedImage from "next-image-export-optimizer";
import React, { useEffect, useState } from "react";
import Screenshot1 from "../../public/images/Screenshot1.svg";
import ferrari from "../../public/images/ferrari.svg";
import Rectangle367 from "../../public/images/Rectangle367.svg";
import Group from "../../public/images/Group.svg";
import Group1 from "../../public/images/Group (1).svg";
import Group2 from "../../public/images/Group (2).svg";
import Group3 from "../../public/images/Group (3).svg";
import Group4 from "../../public/images/Group4.svg";
import Frame208 from "../../public/images/Frame208.svg";
import Frame209 from "../../public/images/Frame209.svg";
import pexelstara1 from "../../public/images/pexelstara1.svg";
import jeuol4aprinceharry from "../../public/images/jeuol4aprinceharry.svg";
import andreas from "../../public/images/andreas.svg";
import PR_01CFA from "../../public/images/PR_01CFA.svg";
import Link from "next/link";
import { useDialog } from "../DialogContext";
import Ads from "../googleAds/Ads";
import Newscard from "../News/Newscard";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Musicpage = ({ nodeByUri, fetchMore, loading, navData }) => {
  console.log(nodeByUri, "nodeByUri news");
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { iconDataResult, dataIcon } = useDialog();

  useEffect(() => {
    if (nodeByUri?.posts?.nodes) {
      const initialPosts = nodeByUri?.posts?.nodes;
      setPosts(initialPosts);
      setCursor(nodeByUri.posts.pageInfo.endCursor);
      setHasNextPage(nodeByUri.posts.pageInfo.hasNextPage);
      console.log("Initial posts set:", initialPosts);
    }
  }, [nodeByUri]);

  const handleViewMore = async () => {
    if (hasNextPage && !loading) {
      try {
        const { data } = await fetchMore({
          variables: {
            after: cursor,
          },
        });
        console.log(data, "data view more");
        if (data && data.nodeByUri.posts.nodes.length > 0) {
          const newPosts = data.nodeByUri.posts.nodes;
          console.log("New posts fetched:", newPosts);
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          setCursor(data.nodeByUri.posts.pageInfo.endCursor);
          setHasNextPage(data.nodeByUri.posts.pageInfo.hasNextPage);
        } else {
          console.log("No new posts fetched.");
        }
      } catch (error) {
        console.error("Error fetching more posts:", error);
      }
    }
  };

  console.log(
    nodeByUri?.categoryTamplate?.selectYourTempleteType[0],
    "nodeByUri?.categoryTamplate"
  );

  return (
    <>
      <div className="hidden md:block px-4 py-16 mx-auto max-w-screen-xl">
        <div className="relative flex items-center mb-3">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {nodeByUri?.categoryTamplate?.selectYourTempleteType[0] === "Simple" ||
        (nodeByUri?.categoryTamplate?.selectYourTempleteType[0] === "Music" &&
          nodeByUri?.categoryTamplate?.musicTemplete?.musicAdervtiseImage
            ?.adImage?.node?.sourceUrl) ? (
          <Link
            href={{
              pathname:
                nodeByUri?.categoryTamplate?.musicTemplete?.musicAdervtiseImage
                  ?.adLink,
            }}
            passHref
            target="_blank"
          >
            <Image
              priority={true}
              loader={customLoader}
              style={{
                width: "1134px",
                height: "169px",
                margin: "0 auto",
                objectFit: "cover",
              }}
              width={1134}
              height={169}
              src={
                nodeByUri?.categoryTamplate?.musicTemplete?.musicAdervtiseImage
                  ?.adImage?.node?.sourceUrl
              }
              alt="PR_01CFA"
            />
          </Link>
        ) : (
          <Ads
            className=""
            style={{
              display: "block",
              width: "1134px",
              height: "169px",
              margin: "0 auto",
            }}
            adClient="ca-pub-3209848804552918"
            adSlot="9293720177"
          />
        )}
      </div>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            {posts.slice(5).map((item) => {
              const contentText = item?.content
                ? item.content.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                : ""; // Fallback if content is not available

              const wordCount = contentText ? contentText.split(" ").length : 0;
              const readingTime =
                wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
              return (
                <>
                  <div className="flex flex-col md:flex-row mb-5">
                    <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                      <Link
                        href={{
                          pathname: `/news/${item.slug}`,
                          query: {
                            state: JSON.stringify(navData),
                          },
                        }}
                        passHref
                      >
                        {item?.featuredImage?.node?.sourceUrl && (
                          <ExportedImage
                            className="object-cover w-[357px] h-[261px]"
                            priority={true}
                            src={item?.featuredImage?.node?.sourceUrl}
                            alt="ferrari4"
                            width={357}
                            height={261}
                          />
                        )}
                      </Link>
                    </div>
                    <div className="ml-0 md:ml-5 w-full md:w-3/5">
                      <p
                        className="text-base font-bold text-red-800"
                        style={{
                          background: "#25AC7D",
                          // background: `${nodeByUri.categoryTamplate.insightTamplate.insightTitleBackgroundColor}`,
                          color: "#fff",
                          padding: "0 10px",
                          width: "150px",
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                          fontSize: "12px",
                          fontWeight: 500,
                          letterSpacing: "2px",
                        }}
                      >
                        {nodeByUri.name}
                      </p>
                      <Link
                        href={{
                          pathname: `/news/${item.slug}`,
                          query: {
                            state: JSON.stringify(navData),
                          },
                        }}
                        passHref
                      >
                        <h5 className="text-[20px] text-black-900 font-bold hover:text-skyBlue">
                          {item.title}
                        </h5>
                      </Link>
                      <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                        <span
                          className="text-[12px] font-extrabold mr-1"
                          style={{ color: "#40A6FB" }}
                        >
                          |
                        </span>
                        By
                        <span
                          className="font-extrabold ml-1"
                          style={{ color: "#40A6FB" }}
                        >
                          {item.author.node.name}
                          <span
                            className="text-[25px] font-extrabold mx-1"
                            style={{ color: "#40A6FB" }}
                          >
                            .
                          </span>
                        </span>
                        {readingTime} MIN READ
                      </p>
                      <p
                        className="text-[15px] text-base font-normal text-gray-600 mb-3 export"
                        dangerouslySetInnerHTML={{ __html: item.excerpt }}
                      />
                    </div>
                  </div>
                  <hr className="my-5" />
                </>
              );
            })}
            <div className="flex justify-between">
              <button
                className="viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center hover:bg-blue-700"
                onClick={handleViewMore}
                disabled={!hasNextPage || loading}
              >
                {hasNextPage ? "VIEW MORE" : "NO MORE POSTS"}
              </button>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-4xl mx-auto">
            {(nodeByUri?.categoryTamplate?.selectYourTempleteType &&
              ["Simple", "Music"].includes(
                nodeByUri.categoryTamplate.selectYourTempleteType[0]
              )) ||
            nodeByUri?.categoryTamplate?.musicTemplete?.musicAllPostsSidebar
              ?.sidebarAdImage?.node?.sourceUrl !== null ? (
              nodeByUri?.categoryTamplate?.musicTemplete?.musicAllPostsSidebar
                ?.sidebarAdImage?.node?.sourceUrl ? (
                <Link
                  href={{
                    pathname:
                      nodeByUri?.categoryTamplate?.musicTemplete
                        ?.musicAllPostsSidebar?.sidebarAdLink,
                  }}
                  passHref
                  target="_blank"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="mb-2 w-full h-auto max-h-96"
                    src={
                      nodeByUri?.categoryTamplate?.musicTemplete
                        ?.musicAllPostsSidebar?.sidebarAdImage?.node?.sourceUrl
                    }
                    width={297}
                    height={503}
                    alt="Rectangle367"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px",
                    }}
                  />
                </Link>
              ) : (
                <Ads
                  className=""
                  style={{
                    display: "block",
                    width: "297px",
                    height: "503px",
                    margin: "0 auto",
                  }}
                  adClient="ca-pub-3209848804552918"
                  adSlot="9293720177"
                />
              )
            ) : null}

            <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
            <hr
              className="text-red-800 my-3"
              style={{ height: "3px", background: "black" }}
            />
            <div className="flex justify-around mt-5 mb-8">
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
              >
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
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
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}>
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover"
                    width={39.99}
                    height={40}
                  />
                )}
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
              <Link
                href={
                  iconDataResult?.menu?.followBelaazOnWhatsapp
                    ?.whatsappStatusLink ?? "/"
                }
              >
                <Image
                  priority={true}
                  loader={customLoader}
                  src={Frame208}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mx-2 object-cover"
                  width={101}
                  height={32}
                />
              </Link>
              <Link
                href={
                  iconDataResult?.menu?.followBelaazOnWhatsapp
                    ?.whatsappGroupLink ?? "/"
                }
              >
                <Image
                  priority={true}
                  loader={customLoader}
                  src={Frame209}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mx-2 object-cover"
                  width={101}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
        <Newscard />
      </div>
    </>
  );
};

export default Musicpage;
