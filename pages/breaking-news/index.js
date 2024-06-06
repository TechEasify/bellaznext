import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import vladimirputin from "../../public/images/vladimir-putin.svg";
import Screenshot2024 from "../../public/images/Screenshot2024.svg";
import Frame from "../../public/images/Frame.svg";
import ExportedImage from "next-image-export-optimizer";
import News from "../../components/News/News";
import { gql, useQuery } from "@apollo/client";

const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="flex flex-col justify-center border-r pr-0 md:pr-5">
      <div className="bg-gray-300 mb-2 w-full h-64 md:h-96"></div>
      <div className="h-4 bg-gray-300 mb-2 w-3/4"></div>
      <div className="h-8 bg-gray-300 mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
      <div className="h-4 bg-gray-300 mb-2 w-1/4"></div>
      <div className="h-3 bg-gray-300 mb-3 w-full"></div>
      <div className="h-3 bg-gray-300 mb-3 w-5/6"></div>
    </div>
    <div className="w-full max-w-4xl mx-auto mt-6">
      <div className="bg-gray-300 mb-2 w-full h-48 md:h-64"></div>
      <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
      <div className="h-6 bg-gray-300 mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 mb-2 w-1/4"></div>
      <div className="h-3 bg-gray-300 mb-3 w-full"></div>
      <div className="h-3 bg-gray-300 mb-3 w-5/6"></div>
    </div>
  </div>
);

function Breakingnews({ nodeByUri, loading }) {
  console.log(nodeByUri, "nodeByUri");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (loading || !isClient) return <SkeletonLoader />;

  return (
    <>
      {/* <Nav /> */}
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center border-r pr-0 md:pr-5">
              {nodeByUri !== undefined && nodeByUri?.posts?.nodes?.length > 0 && (
                <>
                  <ExportedImage
                    className="mb-2"
                    priority={true}
                    src={vladimirputin}
                    alt={vladimirputin}
                    width={907}
                    height={492}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "500px",
                    }}
                  />
                  <p className="text-base font-bold text-red-800">
                    {nodeByUri !== undefined && nodeByUri?.name}
                  </p>
                  <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                    {nodeByUri !== undefined && nodeByUri?.posts?.nodes[0]?.title}
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
                      {nodeByUri !== undefined && nodeByUri?.posts?.nodes[0]?.author?.node.name}
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
                      __html: nodeByUri !== undefined && nodeByUri?.posts?.nodes[0]?.content,
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
              alt={Frame}
              width={432}
              height={293}
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
            <p className="text-[10px] md:text-[12px] text-base font-bold text-red-800">
              UKRAINE - RUSSIA WAR
            </p>
            <h5 className="text-[13px] md:text-[15px] text-black-900 font-bold">
              {nodeByUri !== undefined && nodeByUri?.posts?.nodes[1]?.title}
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
                {nodeByUri !== undefined && nodeByUri?.posts?.nodes[1]?.author?.node.name}
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
                __html: nodeByUri !== undefined && nodeByUri?.posts?.nodes[1]?.content,
              }}
            />
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
    </>
  );
}

export default Breakingnews;
