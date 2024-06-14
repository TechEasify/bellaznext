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

function News({ nodeByUri }) {
  console.log(nodeByUri, "nodeByUri");
  const router = useRouter();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    console.log(date, "date");
    return format(date, "MMMM d, yyyy");
  };

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
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col max-w-2xl text-white">
            <div className="bg-black py-8 px-8">
              <p className="text-base font-bold text-red-800">
                {nodeByUri.categories.nodes[0].name}
              </p>
              <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                {nodeByUri.title}
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
                  {nodeByUri.author.node.name}
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
                  Published {formatDate(nodeByUri.date)}
                </span>
                <span className="text-[10px] md:text-[12px] font-extrabold mr-1">
                  |
                </span>
                Updated {format(nodeByUri.dateGmt, "MMM. d, yyyy, h:mm a")} ET
              </p>
            </div>
            <ExportedImage
              className="mb-2"
              priority={true}
              src={nodeByUri?.featuredImage?.node?.sourceUrl}
              alt="article"
              width={760}
              height={499}
              style={{ width: "760px", height: "499px", objectFit: "cover" }}
            />
            <p
              className="font-semibold mb-5"
              style={{ color: "#2B2B2B" }}
              dangerouslySetInnerHTML={{ __html: nodeByUri.content }}
            />

            {/* <p className="text-black mb-5">
              Bellu died at the age of 5 in 2016. Belli followed years later in
              2019, at the age of 12. In the wild, the average life expectancy
              of beluga whales is between 35 and 50 years.
            </p>

            <p className="text-black mb-5">
              Their deaths ignited a firestorm of criticism from South Korean
              animal rights activists, which prompted the company to act. In
              2019, Lotte pledged that it would release Bella.
            </p>

            <p className="text-black mb-5">
              But there is still no cause for celebration, activists say: it’s
              nearly 2024, more than four years later, and Bella remains on
              display. “Lotte says they are taking measures but we do not
              actually know,” Jo Yak-gol, co-founder of the South Korean marine
              life group Hot Pink Dolphins, told CNN.
            </p>

            <p className="text-black mb-5">
              “The exhibit is still open and no release date has been made
              public.” The whale also continues to show signs of “stereotypical”
              stress behavior following the deaths of her companions in their
              tank, Jo said. Videos sent to CNN showed her spinning around in
              small circles and floating listlessly near the water’s surface.
            </p>

            <ExportedImage
              className="mb-2"
              priority={true}
              src={vladimirputin}
              alt="vladimirputin"
            />
            <p className="font-semibold mb-5" style={{ color: "#2B2B2B" }}>
              President Zelensky has called for some of the Russian billions
              seized by world banks to be sent to rebuild Ukraine.
            </p>

            <p className="text-black mb-5">
              Bellu died at the age of 5 in 2016. Belli followed years later in
              2019, at the age of 12. In the wild, the average life expectancy
              of beluga whales is between 35 and 50 years.
            </p>

            <p className="text-black mb-5">
              Their deaths ignited a firestorm of criticism from South Korean
              animal rights activists, which prompted the company to act. In
              2019, Lotte pledged that it would release Bella.
            </p>

            <p className="text-black mb-5">
              But there is still no cause for celebration, activists say: it’s
              nearly 2024, more than four years later, and Bella remains on
              display. “Lotte says they are taking measures but we do not
              actually know,” Jo Yak-gol, co-founder of the South Korean marine
              life group Hot Pink Dolphins, told CNN.
            </p>

            <p className="text-black mb-5">
              “The exhibit is still open and no release date has been made
              public.” The whale also continues to show signs of “stereotypical”
              stress behavior following the deaths of her companions in their
              tank, Jo said. Videos sent to CNN showed her spinning around in
              small circles and floating listlessly near the water’s surface.
            </p> */}

            <div className="w-full max-w-2xl mx-auto mt-10">
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

              <div className="flex">
                <div className="flex mt-5 mr-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={colinlloyd}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">
                      HOLLYWOOD
                    </p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={anaflavia}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
              </div>

              <div className="flex">
                <div className="flex mt-5 mr-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={colinlloyd}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">
                      HOLLYWOOD
                    </p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={anaflavia}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
              </div>
            </div>

            <div className="w-full max-w-2xl mx-auto mt-10 mb-20">
              <div className="flex items-center">
                <p className="text-[20px] font-bold text-black italic mr-3">
                  MOST READ
                </p>
              </div>
              <hr
                className="text-red-800"
                style={{ height: "7px", background: "#CE3A42" }}
              />

              <div>
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={colinlloyd}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">
                      HOLLYWOOD
                    </p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={anaflavia}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
              </div>

              <div>
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={colinlloyd}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">
                      HOLLYWOOD
                    </p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={anaflavia}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-bold text-red-800">
                      HOLLYWOOD
                    </p>
                    <p className="text-[15px] font-semibold text-gray-800 mb-3">
                      Our DeSantis and Haley Reporters switched places Her’s
                      What They Found.
                    </p>
                  </div>
                  <ExportedImage
                    src={anaflavia}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mr-2"
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="flex max-w-2xl">
            {/* <ExportedImage
              className="mb-2"
              priority={true}
              src={Screenshot202}
              alt="Screenshot202"
              style={{
                color: "transparent",
                height: "auto",
                position: "absolute",
                top: "21%",
              }}
            /> */}
            <Ads
              className=""
              style={{ display: "block", width: "100%", height: "90px" }}
              adClient="ca-pub-3209848804552918"
              adSlot="9293720177" // Replace with your actual ad slot ID
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default News;
