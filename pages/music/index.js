import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Screenshot2024 from "../../public/images/Screenshot2024.svg";
import vladimir from "../../public/images/221109vladimir.svg";
import ExportedImage from "next-image-export-optimizer";
import News from "../../components/News/News";
import colinlloyd from "../../public/images/colinlloyd.svg";
import anaflavia from "../../public/images/anaflavia.svg";
import Frame220 from "../../public/images/Frame220.svg";
import anaflavia2 from "../../public/images/anaflavia2.svg";
import sidepost from "../../public/images/sidepost.svg";
import Group from "../../public/images/Group.svg";
import Group1 from "../../public/images/Group (1).svg";
import Group2 from "../../public/images/Group (2).svg";
import Group3 from "../../public/images/Group (3).svg";
import Group4 from "../../public/images/Group4.svg";
import Frame208 from "../../public/images/Frame208.svg";
import Frame209 from "../../public/images/Frame209.svg";
import mikevon1 from "../../public/images/mikevon1.svg";
import iphone from "../../public/images/iphone.svg";
import threeByTwoSmall from "../../public/images/threeByTwoSmall.svg";
import GettyImages1 from "../../public/images/GettyImages1.svg";
import Fame216 from "../../public/images/Fame216.svg";
import jeuol4a_prince1 from "../../public/images/jeuol4a_prince1.svg";
import Musicpage from "../../components/Music/Musicpage";

function Music() {
  return (
    <>
      <Nav />
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_900px] gap-6">
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-[15px] font-bold text-black-900 italic">
              Trending
            </p>
            <hr
              className="text-red-800"
              style={{ height: "7px", background: "#CE3A42" }}
            />

            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
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
                <p className="text-[12px] font-bold text-red-800">HOLLYWOOD</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={anaflavia}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
            <hr />
            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">EUROPE</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={mikevon1}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>

            <div className="flex mt-5 mb-5">
              <ExportedImage
                src={iphone}
                alt="Partly Cloudy"
                className="w-full mr-2"
              />
            </div>
            <div className="mr-2">
              <ExportedImage
                src={Frame220}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">OSCARS</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Her’s What They
                Found.
              </p>
              <p className="text-[10px] text-base font-bold text-gray-800">
                <span
                  className="text-[10px] font-extrabold mr-1"
                  style={{ color: "#40A6FB" }}
                >
                  |
                </span>
                By
                <span
                  className="font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  Linah Absteen
                  <span
                    className="text-[36px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
            </div>
            <hr />
            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">ANALYSIS</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={anaflavia2}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto relative">
            <ExportedImage
              className="mb-2"
              priority={true}
              src={vladimir}
              alt="vladimirputin"
              style={{ width: "100%", height: "auto"}}
            />

            <div
              className="absolute bg-white p-6 border border-green-600 shadow"
              style={{ maxWidth: "750px", border: "1px solid #25AC7D", top: "27%", left: "8%" }}
            >
              <p className="text-[12px] font-bold text-red-800">MUSIC</p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Taylor swift wins 4 Grammy’s
              </h5>
              <p className="text-[10px] text-base font-bold text-gray-800 mb-2">
                <span
                  className="text-[10px] font-extrabold mr-1"
                  style={{ color: "#40A6FB" }}
                >
                  |
                </span>
                By
                <span
                  className="font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  Linah Absteen
                  <span
                    className="text-[36px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Speaking after the race, Vasseur praised Leclerc's tactical
                thinking in the closing stages of the race before jokingly
                pointing the finger at Mercedes.
              </p>
            </div>

            <div className="flex flex-wrap justify-around mt-24">
              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={GettyImages1}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  POLITICS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Biden campaigns touts $42M raised in january
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[36px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
              </div>

              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={Fame216}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  ELECTIONS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Federal agencies scramble to finish Biden’s rules - and
                    protect his legacy from trump
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[36px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
              </div>
              
              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={threeByTwoSmall}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  POLITICS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Biden campaigns touts $42M raised in january
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[36px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
              </div>
              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={jeuol4a_prince1}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  ELECTIONS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Federal agencies scramble to finish Biden’s rules - and
                    protect his legacy from trump
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[36px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Musicpage />
      <Footer />
    </>
  );
}

export default Music;
