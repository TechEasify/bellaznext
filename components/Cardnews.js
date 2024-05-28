import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import markus_spiske from "../public/images/markus_spiske.svg";
import pexelstara from "../public/images/pexelstara.svg";
import pexelspixabay from "../public/images/pexelspixabay.svg";

const Cardnews = () => {
  const { openDialog } = useDialog();
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap justify-around">
          <div>
            <div className="max-w-xs bg-white mb-6 mr-4 items-center">
              <div className="mr-2 mb-20">
                <h5 className="text-[15px] font-bold text-black-900">
                  Politics
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#FFA500", width: "20%" }}
                />
                <ExportedImage
                  src={markus_spiske}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>

              <div className="mr-2">
                <h5 className="text-[15px] font-bold text-black-900">
                Elections
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#CE3A42", width: "23%" }}
                />
                <ExportedImage
                  src={markus_spiske}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md bg-white mb-6 mx-auto">
            <div className="max-w-xs bg-white mb-6 mr-4 items-center">
              <div className="mr-2 mb-20">
                <h5 className="text-[15px] font-bold text-black-900">
                Insights
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#1877F2", width: "34%" }}
                />
                <ExportedImage
                  src={pexelstara}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>
              <div className="mr-2">
                <h5 className="text-[15px] font-bold text-black-900">
                Ukraine - Russia War
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#CE3A42", width: "53%" }}
                />
                <ExportedImage
                  src={pexelstara}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>
            </div>
          </div>
          
            <div className="max-w-xs bg-white mb-6 mr-4 items-center">
              <div className="mr-2 mb-20">
                <h5 className="text-[15px] font-bold text-black-900">
                Jewish News
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#1877F2", width: "25%" }}
                />
                <ExportedImage
                  src={pexelspixabay}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>
              <div className="mr-2">
                <h5 className="text-[15px] font-bold text-black-900">
                Music
                </h5>
                <hr
                  className="text-red-800 mb-3"
                  style={{ height: "7px", background: "#25AC7D", width: "17%" }}
                />
                <ExportedImage
                  src={pexelspixabay}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the heart at
                  beach
                </p>
                <p className="text-[15px] font-semibold text-gray-800 mb-2">
                  The Mystery at the Heart of the OpenAI Chaos, the value of
                  mystic
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cardnews;
