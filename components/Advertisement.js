import React from "react";
import ExportedImage from "next-image-export-optimizer";
import barcode from "../public/images/barcode.svg";
import { gql, useQuery } from "@apollo/client";
import Ads from "./googleAds/Ads";

const GET_ADVERTISE_PAGE = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        topHeadlineBottomAd {
          topHeadlineBottomAdImage {
            node {
              altText
              srcSet
            }
          }
          topHeadlineBottomAdCode
        }
      }
    }
  }
`;

const Advertisement = () => {
  const { data, loading, error } = useQuery(GET_ADVERTISE_PAGE);
  console.log(
    data?.page?.homePage?.topHeadlineBottomAd?.topHeadlineBottomAdImage?.node
      ?.srcSet,
    "data"
  );
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
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
      {data?.page?.homePage?.topHeadlineBottomAd?.topHeadlineBottomAdImage?.node
        ?.srcSet && (
        <ExportedImage
          style={{
            width: "1134px",
            height: "169px",
            objectFit: "fill",
            margin: "0 auto",
          }}
          priority={true}
          src={
            data.page.homePage.topHeadlineBottomAd.topHeadlineBottomAdImage.node
              .srcSet
          }
          alt="barcode"
          width={1134}
          height={169}
        />
      )}
      {/* <Ads
        className=""
        style={{
          display: "block",
          width: "1134px",
          height: "169px"
        }}
        adClient="ca-pub-3209848804552918"
        adSlot="9293720177"
      /> */}
    </div>
  );
};

export default Advertisement;
