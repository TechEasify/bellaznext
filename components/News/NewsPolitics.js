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
import Newscard from "./Newscard";
import Link from "next/link";
import { useDialog } from "../DialogContext";

const NewsPolitics = ({ nodeByUri, fetchMore, loading }) => {
  console.log(nodeByUri, "nodeByUri politics");
  const { iconDataResult } = useDialog();
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  // Effect to initialize posts when data changes
  useEffect(() => {
    if (nodeByUri && nodeByUri.posts) {
      setPosts(nodeByUri.posts.nodes);
      setCursor(nodeByUri.posts.pageInfo.endCursor);
      setHasNextPage(nodeByUri.posts.pageInfo.hasNextPage);
    }
  }, [nodeByUri]);

  // Function to handle "View More" button click
  const handleViewMore = () => {
    if (hasNextPage && !loading) {
      fetchMore({
        variables: {
          after: cursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          const newPosts = fetchMoreResult.posts.nodes;
          return {
            posts: {
              __typename: previousResult.posts.__typename,
              nodes: [...previousResult.posts.nodes, ...newPosts],
              pageInfo: fetchMoreResult.posts.pageInfo,
            },
          };
        },
      });
    }
  };

  return (
    <>
      {/* <div className="px-4 py-16" style={{ background: "#F2F2F2" }}>
        <ExportedImage
          style={{ margin: "0 auto" }}
          priority={true}
          src={Screenshot1}
          alt="PR_01CFA"
        />
      </div> */}
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            {posts.map((item) => (
              <div key={item.slug}>
                <div className="flex flex-col md:flex-row mb-5">
                  <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                    <Link
                      href={{
                        pathname: `/news/${item.slug}`,
                      }}
                      passHref
                    >
                      <ExportedImage
                        priority={true}
                        src={item?.featuredImage?.node?.sourceUrl}
                        alt="ferrari4"
                        width={357}
                        height={261}
                        style={{ width: "357px", height: "261px" }}
                      />
                    </Link>
                  </div>
                  <div className="ml-0 md:ml-5 w-full md:w-3/5">
                    <p
                      className="text-base font-bold text-red-800"
                      style={{
                        background: `${
                          nodeByUri.categoryTamplate.insightTamplate
                            .insightTitleBackgroundColor || "rgb(255, 165, 0)"
                        }`,
                        color: "#fff",
                        padding: "0 10px",
                        width: "100px",
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
                        {item?.author?.node?.name}
                        <span
                          className="text-[25px] font-extrabold mx-1"
                          style={{ color: "#40A6FB" }}
                        >
                          .
                        </span>
                      </span>
                      6 MIN READ
                    </p>
                    <p
                      className="text-[15px] text-base font-normal text-gray-600 mb-3"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
                <hr className="my-5" />
              </div>
            ))}
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

          <div className="w-full max-w-4xl mx-auto">
            <ExportedImage
              className="mb-2 w-full h-auto max-h-96"
              priority={true}
              src={Rectangle367}
              alt="Rectangle367"
              width={367}
              height={262}
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
            <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
            <hr
              className="text-red-800 my-3"
              style={{ height: "3px", background: "black" }}
            />
            <div className="flex justify-around mt-5 mb-8">
              <Link href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}>
                <ExportedImage
                  src={Group}
                  alt="Partly Cloudy"
                  className="h-13 w-13"
                />
              </Link>
              <Link href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}>
                <ExportedImage
                  src={Group1}
                  alt="Partly Cloudy"
                  className="h-13 w-13"
                />
              </Link>
              <Link href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}>
                <ExportedImage
                  src={Group2}
                  alt="Partly Cloudy"
                  className="h-13 w-13"
                />
              </Link>
              <Link href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}>
                <ExportedImage
                  src={Group3}
                  alt="Partly Cloudy"
                  className="h-13 w-13"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
              >
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
        </div>
      </div>
      <Newscard />
    </>
  );
};

export default NewsPolitics;
