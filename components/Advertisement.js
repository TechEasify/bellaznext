import React from "react";
import ExportedImage from "next-image-export-optimizer";
import barcode from "../public/images/barcode.svg";
import Ads from "./googleAds/Ads";
import { useDialog } from "./DialogContext";
import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Advertisement = () => {
  const { bannerData } = useDialog();
  return (
    <div className="hidden md:block px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {/* {data !== undefined &&
      <>
        {data.page.homePage.allCategories.nodes.slice(0, 1).map((item) => {
          console.log(item.posts.nodes, "item");
          const firstNodeWithImage = item.posts.nodes.find(
            (node) =>
              node.featuredImage &&
              node.featuredImage.node &&
              node.featuredImage.node.srcSet
          );
        
          return (
            <React.Fragment key={item.id}>
              {firstNodeWithImage && (
                <ExportedImage
                  style={{
                    width: "1134px",
                    height: "245px",
                    objectFit: "fill",
                    margin: "0 auto",
                  }}
                  priority={true}
                  src={firstNodeWithImage.featuredImage.node.srcSet}
                  alt={firstNodeWithImage.featuredImage.node.srcSet}
                  width={1134}
                  height={245}
                />
              )}
            </React.Fragment>
          );
        })}
      </>
      }         */}
      {bannerData?.page?.homePage?.topHeadlineBottomAd?.topHeadlineBottomAdImage
        ?.node?.sourceUrl ? (
        <Link
          href={{
            pathname:
              bannerData?.page?.homePage?.topHeadlineBottomAd
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
              bannerData.page.homePage.topHeadlineBottomAd
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
