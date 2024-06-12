import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import download312 from "../public/images/download312.svg";
import Screenshot2024 from "../public/images/Screenshot2024.svg";
import GettyImages12 from "../public/images/GettyImages12.svg";
import ExportedImage from "next-image-export-optimizer";
import NewsPolitics from "./News/NewsPolitics";

function PoliticsCategory({nodeByUri}) {
  return (
    <>
      {/* <Nav /> */}
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center border-r pr-0 md:pr-5">
              <ExportedImage
                className="mb-2"
                priority={true}
                src={download312}
                alt="download312"
                style={{ width: "100%", height: "auto", maxHeight: "500px" }}
              />
              <p className="text-base font-bold text-red-800">POLITICS</p>
              <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                Putin warns West: Russia ready for nuke war if sovereignty
                threatened
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
                  Linah Absteen
                  <span
                    className="text-[20px] md:text-[25px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
              <p className="text-[13px] md:text-[15px] text-base font-normal text-gray-600 mb-3">
                President Vladimir Putin said Wednesday that Russia is ready to
                use nuclear weapons if its sovereignty or independence is
                threatened, issuing another blunt warning to the West.
              </p>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <ExportedImage
              className="mb-2"
              priority={true}
              src={GettyImages12}
              alt="vladimirputin"
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
            <p className="text-[10px] md:text-[12px] text-base font-bold text-red-800">
              UKRAINE - RUSSIA WAR
            </p>
            <h5 className="text-[13px] md:text-[15px] text-black-900 font-bold">
              Zelensky rules out Erdogan's idea of peace summit with Russia
              during Turkey visit
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
                Linah Absteen
                <span
                  className="text-[20px] md:text-[25px] font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  .
                </span>
              </span>
              6 MIN READ
            </p>
            <p className="text-[13px] md:text-[15px] text-base font-normal text-gray-600 mb-3">
              President Vladimir Putin said Wednesday that Russia is ready to
              use nuclear weapons if its sovereignty or independence is
              threatened, issuing another blunt warning to the West.
            </p>
            <ExportedImage
              className="mb-2"
              priority={true}
              src={Screenshot2024}
              alt="Screenshot2024"
            />
          </div>
        </div>
      </div>
      <NewsPolitics nodeByUri={nodeByUri}/>
      {/* <News /> */}
      {/* <Footer /> */}
    </>
  );
}

export default PoliticsCategory;
