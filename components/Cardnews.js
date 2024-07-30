import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import markus_spiske from "../public/images/markus_spiske.svg";
import pexelstara from "../public/images/pexelstara.svg";
import pexelspixabay from "../public/images/pexelspixabay.svg";
import { gql, useQuery } from "@apollo/client";
import FooterTopAd from "./FooterTopAd";
import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const GET_CARD_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        allCategories {
          nodes {
            id
            ... on Category {
              name
              posts {
                nodes {
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      altText
                      srcSet
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        footerAdvertisementImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        footerAdLink
        footerAdvertisementCode
        allCategoryBottomLineColor {
          block1
          block2
          block3
        }
      }
    }
  }
`;

const Cardnews = () => {
  const { openDialog } = useDialog();
  const { loading, error, data } = useQuery(GET_CARD_SECTION);
  console.log(data, "datadatadata");
  const displayedCategories = new Set();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.page || !data.page.homePage) {
    return <p>No data available</p>;
  }

  console.log(data, "data card");

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-around">
          {data.page.homePage.allCategories.nodes.slice(0, 3).map((item) => {
            console.log(item, "item card inside");
            if (displayedCategories.has(item.name)) {
              return null;
            }
            displayedCategories.add(item.name);

            const bottomLineColor = (() => {
              switch (item.name) {
                case "Insights":
                  return data.page.homePage.allCategoryBottomLineColor.block1;
                case "Jewish News":
                  return data.page.homePage.allCategoryBottomLineColor.block2;
                case "music":
                  return data.page.homePage.allCategoryBottomLineColor.block3;
                case "Breaking News":
                  return "rgb(206, 58, 66)";
                case "ANALYSIS":
                  return "#FFA500";
                case "HEALTH":
                  return "rgb(24, 119, 242)";
                case "Israel":
                  return "rgb(206, 58, 66)";
                default:
                  return "#FFA500";
              }
            })();

            return (
              <div
                key={item.id}
                className="max-w-xs bg-white mr-4 items-center"
              >
                <div className="mr-2 mb-20">
                  <h5 className="text-[15px] font-bold text-black-900">
                    {item.name}
                  </h5>
                  <hr
                    className="text-red-800 mb-3"
                    style={{
                      height: "7px",
                      background: bottomLineColor,
                    }}
                  />

                  <div key={item.id}>
                    <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                      <Image
                        priority={true}
                        loader={customLoader}
                        src={
                          item?.posts?.nodes[0]?.featuredImage?.node?.sourceUrl
                        }
                        alt="vladimirputin"
                        className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                        width={397}
                        height={210}
                      />
                    </Link>
                    <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                      <p className="text-[15px] font-semibold text-gray-800 mb-2 hover:text-skyBlue">
                        {item?.posts?.nodes[0]?.title}
                      </p>
                    </Link>
                  </div>
                  <div key={item.id}>
                    <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                      <p className="text-[15px] font-semibold text-gray-800 mb-2 hover:text-skyBlue">
                        {item?.posts?.nodes[1]?.title}
                      </p>
                    </Link>
                  </div>
                  <div key={item.id}>
                    <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                      <p className="text-[15px] font-semibold text-gray-800 mb-2 hover:text-skyBlue">
                        {item?.posts?.nodes[2]?.title}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FooterTopAd data={data} />
    </div>
  );
};

export default Cardnews;
