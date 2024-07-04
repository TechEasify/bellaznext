import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import download312 from "../public/images/download312.svg";
import Screenshot2024 from "../public/images/Screenshot2024.svg";
import GettyImages12 from "../public/images/GettyImages12.svg";
import ExportedImage from "next-image-export-optimizer";
import NewsPolitics from "./News/NewsPolitics";
import Link from "next/link";

function PoliticsCategory({ nodeByUri, fetchMore, loading }) {
  const posts = nodeByUri?.nodeByUri?.posts?.nodes || [];
  const firstPost = posts[0];
  const fourthPost = posts[3];

  return (
    <>
      {/* <Nav /> */}
      {/* <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center border-r pr-0 md:pr-5">
              {firstPost && (
                <>
                  <Link
                    href={{
                      pathname: `/news/${firstPost.slug}`,
                    }}
                    passHref
                  >
                    <ExportedImage
                      className="mb-2"
                      priority={true}
                      src={firstPost.featuredImage?.node?.sourceUrl || ""}
                      alt="download312"
                      width={909}
                      height={492}
                      style={{ width: "909px", height: "492px" }}
                    />
                  </Link>
                  <p className="text-base font-bold text-red-800">
                    {nodeByUri?.nodeByUri?.name}
                  </p>
                  <Link
                    href={{
                      pathname: `/news/${firstPost.slug}`,
                    }}
                    passHref
                  >
                    <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                      {firstPost.title}
                    </h1>
                  </Link>
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
                      {firstPost.author?.node?.name}
                      <span
                        className="text-[20px] md:text-[25px] font-extrabold mx-1"
                        style={{ color: "#40A6FB" }}
                      >
                        .
                      </span>
                    </span>
                    6 MIN READ
                  </p>
                  <p
                    className="text-[13px] md:text-[15px] text-base font-normal text-gray-600 mb-3"
                    dangerouslySetInnerHTML={{
                      __html: firstPost.content,
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            {fourthPost && (
              <>
                <Link
                  href={{
                    pathname: `/news/${fourthPost.slug}`,
                  }}
                  passHref
                >
                  <ExportedImage
                    className="mb-2"
                    priority={true}
                    src={fourthPost.featuredImage?.node?.sourceUrl || ""}
                    alt="vladimirputin"
                    width={367}
                    height={205}
                    style={{ width: "100%", height: "auto", maxHeight: "500px" }}
                  />
                </Link>
                <p className="text-[10px] md:text-[12px] text-base font-bold text-red-800">
                  {nodeByUri?.nodeByUri?.name}
                </p>
                <Link
                  href={{
                    pathname: `/news/${fourthPost.slug}`,
                  }}
                  passHref
                >
                  <h5 className="text-[13px] md:text-[15px] text-black-900 font-bold">
                    {fourthPost.title}
                  </h5>
                </Link>
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
                    {fourthPost.author?.node?.name}
                    <span
                      className="text-[20px] md:text-[25px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
                <p
                  className="text-[13px] md:text-[15px] text-base font-normal text-gray-600 mb-3"
                  dangerouslySetInnerHTML={{
                    __html: fourthPost.content,
                  }}
                />
              </>
            )}
            <ExportedImage
              className="mb-2"
              priority={true}
              src={Screenshot2024}
              alt="Screenshot2024"
            />
          </div>
        </div>
      </div> */}
      <NewsPolitics
        nodeByUri={nodeByUri.nodeByUri}
        fetchMore={fetchMore}
        loading={loading}
      />
      {/* <News /> */}
      {/* <Footer /> */}
    </>
  );
}

export default PoliticsCategory;
