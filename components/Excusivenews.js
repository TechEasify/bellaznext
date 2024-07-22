import ExportedImage from "next-image-export-optimizer";
import React from "react";
import VectorRouded from "../public/images/VectorRouded.svg";
import VectorRouded1 from "../public/images/VectorRouded(1).svg";
import Frame396 from "../public/images/Frame396.svg";
import { useDialog } from "./DialogContext";

const Excusivenews = () => {
  const { bannerData } = useDialog()
  
  return (
    <div
      className="hidden md:block px-4 py-20 mx-auto max-w-screen-xl"
      style={{
        backgroundImage: `url(${Frame396.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full items-center flex flex-col md:flex-row justify-evenly relative">
        <div className="md:mr-20 mb-8 md:mb-0 w-[470px]">
          <h1 className="text-[25px] md:text-[35px] text-white font-bold mb-2">
            {bannerData?.page?.homePage?.ctaTitle}
          </h1>
          <p className="text-[14px] md:text-[15px] font-semibold text-white">
            {bannerData?.page?.homePage?.ctaDescription}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <input
            className="h-12 w-full md:w-4/5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mb-4 md:mb-0 md:mr-4"
            id="agreement"
            type="email"
            placeholder="EMAIL"
          />
          <button className="inline-flex items-center justify-center h-12 w-full md:w-auto px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r focus:outline-none" style={{ background: "#40A6FB" }}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excusivenews;
