import React from "react";
import ExportedImage from "next-image-export-optimizer";
import barcode from "../public/images/barcode.svg";
import Ads from "./googleAds/Ads";
import { useDialog } from "./DialogContext";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const Advertisement = ({dataNav}) => {
  // const { dataNav } = useHeader()
  return (
    <div className="hidden md:block px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {dataNav?.nodeByUri?.homePage?.topHeadlineBottomAd?.topHeadlineBottomAdImage
        ?.node?.sourceUrl ? (
        <Link
          href={{
            pathname:
            dataNav?.nodeByUri?.homePage?.topHeadlineBottomAd
                ?.topHeadlineBottomAdLink,
          }}
          passHref
          target="_blank"
        >
          <Image
            priority={true}
            loader={customLoader}
            style={{
              margin: "0 auto",
            }}
            src={
              dataNav.nodeByUri.homePage.topHeadlineBottomAd
                .topHeadlineBottomAdImage.node.sourceUrl
            }
            alt="barcode"
            className="object-cover w-[1134px] h-[169px]"
            width={1134}
            height={169}
          />
        </Link>
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

export default Advertisement;
