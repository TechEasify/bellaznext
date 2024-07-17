import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Ads from "./googleAds/Ads";

const FooterTopAd = ({data}) => {
  console.log(data, "datadata footer top ads");

  const imageUrl = data?.page?.homePage?.footerAdvertisementImage?.node?.sourceUrl;

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {imageUrl ? (
        <ExportedImage
          style={{
            margin: "0 auto",
          }}
          priority={true}
          src={imageUrl}
          alt="PR_01CFA"
          className="object-fill w-[1134px] h-[169px]"
          width={1134}
          height={169}
        />
      ) : (
        <Ads
          className=""
          style={{
            display: "block",
            width: "1134px",
            height: "169px",
            margin: "0 auto",
          }}
          adClient="ca-pub-3209848804552918"
          adSlot="9293720177"
        />
      )}
    </div>
  );
};

export default FooterTopAd;
