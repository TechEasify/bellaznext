import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MUSICPOST_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        musicAd {
          musicAdImage {
            node {
              altText
              srcSet
              sourceUrl
            }
          }
          musicAdCode
        }
      }
    }
  }
`;

const PlacementPartners = () => {
  const { loading, error, data } = useQuery(GET_MUSICPOST_SECTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const imageUrl = data?.page?.homePage?.musicAd?.musicAdImage?.node?.sourceUrl;

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {imageUrl ? (
        <ExportedImage
          style={{ margin: "0 auto", width: "1134px", height: "169px", objectFit: "fill" }}
          priority={true}
          src={imageUrl}
          alt="PR_01CFA"
          width={1134}
          height={169}
        />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default PlacementPartners;
