import React from "react";
import ExportedImage from "next-image-export-optimizer";
import barcode from "../public/images/barcode.svg";

const Advertisement = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <ExportedImage
        style={{ margin: "0 auto" }}
        priority={true}
        src={barcode}
        alt="barcode"
      />
    </div>
  );
};

export default Advertisement;
