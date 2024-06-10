// breaking-news.js
import React, { useState, useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import News from "./News/News";
import vladimirputin from "../public/images/vladimir-putin.svg";
import Frame from "../public/images/Frame.svg";
import Nav from "./Nav";

const SkeletonLoader = () => (
  <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col justify-center border-r pr-0 md:pr-5 bg-white p-4 rounded-md animate-pulse">
        <div className="mb-2 rounded-md bg-gray-200 h-60"></div>
        <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-200 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-200 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 w-2/3"></div>
      </div>
    </div>
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-4 rounded-md animate-pulse">
        <div className="mb-2 rounded-md bg-gray-200 h-60"></div>
        <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-200 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-200 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 w-2/3"></div>
      </div>
    </div>
  </div>
  {/* Placeholder for the News component */}
</div>
);

function Breakingnews({ nodeByUri, loading, uri }) {
  const [isClient, setIsClient] = useState(false);

  console.log(nodeByUri, "nodeByUri");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (loading || !isClient) return <SkeletonLoader />;

  return (
    <>
    <Nav uri={uri}/>
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center border-r pr-0 md:pr-5">
            {nodeByUri?.posts?.nodes?.length > 0 && (
              <>
                <ExportedImage
                  className="mb-2"
                  priority={true}
                  src={vladimirputin}
                  alt="vladimirputin"
                  width={907}
                  height={492}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
                  }}
                />
                <p className="text-base font-bold text-red-800">
                  {nodeByUri?.name}
                </p>
                <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                  {nodeByUri?.posts?.nodes[0]?.title}
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
                    {nodeByUri?.posts?.nodes[0]?.author?.node?.name}
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
                    __html: nodeByUri?.posts?.nodes[0]?.content,
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <ExportedImage
            className="mb-2"
            priority={true}
            src={Frame}
            alt="Frame"
            width={432}
            height={293}
            style={{ width: "100%", height: "auto", maxHeight: "500px" }}
          />
          <p className="text-[10px] md:text-[12px] text-base font-bold text-red-800">
            UKRAINE - RUSSIA WAR
          </p>
          <h5 className="text-[13px] md:text-[15px] text-black-900 font-bold">
            {nodeByUri?.posts?.nodes[1]?.title}
          </h5>
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
              {nodeByUri?.posts?.nodes[0]?.author?.node?.name}
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
              __html: nodeByUri?.posts?.nodes[0]?.content,
            }}
          />
        </div>
      </div>
      <News categoryTamplate={nodeByUri.categoryTamplate}/>
    </div>    
    </>
  );
}

export default Breakingnews;
