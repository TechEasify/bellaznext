import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import ana_flavia_1 from "../public/images/ana_flavia_1.svg";
import Frame212 from "../public/images/Frame212.svg";
import Frame214 from "../public/images/Frame214.svg";
import download3 from "../public/images/download3.svg";
import addpost from "../public/images/addpost.svg";

const Insights = () => {
  const { openDialog } = useDialog();
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">
            INSIGHTS
          </h1>
          <hr
            className="text-red-800 mr-5"
            style={{ height: "7px", background: "#1877F2" }}
          />
          <br />
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            <div className="mr-2">
              <ExportedImage
                src={Frame212}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">HEALTH</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Here's What
                They Found.
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
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <div className="mr-2">
                <p className="text-[12px] font-bold text-red-800">ANALYSIS</p>
                <p className="text-[15px] font-semibold text-gray-800">
                  Our DeSantis and Haley Reporters switched places Here's What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={ana_flavia_1}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
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

          <div className="max-w-md bg-white mb-6 mx-auto">
            <a href="#">
              <ExportedImage
                priority={true}
                src={download3}
                alt="vladimirputin"
              />
            </a>
            <p className="text-base font-bold text-red-800 mt-2">CONGRESS</p>
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                ‘We have to get this done’: A top House Republican pushes for
                Ukraine aid
              </h5>
            </a>
            <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
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
            <p className="text-[12px] font-normal text-gray-800 mt-2">
              Intel Chair Mike Turner says he’s confident Speaker Mike Johnson
              will allow a vote sending new funding to Kyiv.
            </p>
          </div>

          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            <div className="mr-2">
              <ExportedImage
                src={Frame214}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">HEALTH</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Here's What
                They Found.
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
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <ExportedImage
                src={addpost}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
