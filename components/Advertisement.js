import React from "react";
import ExportedImage from "next-image-export-optimizer";
import barcode from "../public/images/barcode.svg";
import { gql, useQuery } from "@apollo/client";

const GET_ADVERTISE_PAGE = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        allCategories {
          nodes {
            ... on Category {
              posts {
                nodes {
                  categories {
                    nodes {
                      name
                    }
                  }
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                    }
                  }
                  content
                }
              }
            }
          }
        }
        footerAdvertisementImage {
          node {
            altText
            srcSet
          }
        }
        footerAdvertisementCode
      }
    }
  }
`;

const Advertisement = () => {
  const { data, loading, error } = useQuery(GET_ADVERTISE_PAGE);
  console.log(data, "data");
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl">
      <div className="relative flex items-center mb-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 font-normal">ADVERTISEMENT</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      {/* {data !== undefined &&
        data.page.homePage.allCategories.nodes.map(
          (item) => (
            console.log(item.posts.nodes, "item"),
            (
              <>
                {item.posts.nodes.map((node) => (
                  <ExportedImage
                    style={{ margin: "0 auto" }}
                    priority={true}
                    src={node.featuredImage.node.srcSet}
                    alt={node.featuredImage.node.srcSet}
                    width={1134}
                    height={245}
                  />
                ))}
              </>
            )
          )
        )} */}
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
