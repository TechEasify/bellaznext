import ExportedImage from "next-image-export-optimizer";
import React from "react";
import { gql, useQuery } from "@apollo/client";
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

const Newscard = ({ nodeByUri }) => {
  console.log(nodeByUri, "nodeByUri news card");
  
  const section1 =
    nodeByUri?.categoryTamplate?.template1?.relatedCategory?.section1
      ?.selectCategory?.nodes;

  const section2 =
    nodeByUri?.categoryTamplate?.template1?.relatedCategory?.section2
      ?.selectCategory?.nodes;

  const section3 =
    nodeByUri?.categoryTamplate?.template1?.relatedCategory?.section3
      ?.selectCategory?.nodes;

  const displayedCategories = new Set();

  return (
    <>
      <div className="hidden md:block px-4 py-8 mx-auto max-w-screen-xl">
        <div className="w-full mx-auto flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-around">
            {section1?.map((item, index) => {
              if (displayedCategories.has(item.name)) {
                return null;
              }
              displayedCategories.add(item.name);

              const bottomLineColor = (() => {
                switch (item.name) {
                  case "Insights":
                    return "#1877F2";
                  case "Jewish News":
                    return "#40A6FB";
                  case "music":
                    return "#25AC7D";
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
                  key={index}
                  className="max-w-xs bg-white mr-4 items-center"
                >
                  <div className="mr-2 mb-20">
                    <h5 className="text-[18px] font-extrabold text-black-900 italic">
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
                      {item?.posts?.nodes[0]?.featuredImage?.node
                        ?.sourceUrl && (
                        <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              item?.posts?.nodes[0]?.featuredImage?.node
                                ?.sourceUrl
                            }
                            alt="vladimirputin"
                            className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                            width={397}
                            height={210}
                          />
                        </Link>
                      )}
                      <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[0]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[1]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[2]?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {section2?.map((item, index) => {
              if (displayedCategories.has(item.name)) {
                return null;
              }
              displayedCategories.add(item.name);

              const bottomLineColor = (() => {
                switch (item.name) {
                  case "Insights":
                    return "#1877F2";
                  case "Jewish News":
                    return "#40A6FB";
                  case "music":
                    return "#25AC7D";
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
                  key={index}
                  className="max-w-xs bg-white mr-4 items-center"
                >
                  <div className="mr-2 mb-20">
                    <h5 className="text-[18px] font-extrabold text-black-900 italic">
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
                      {item?.posts?.nodes[0]?.featuredImage?.node
                        ?.sourceUrl && (
                        <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              item?.posts?.nodes[0]?.featuredImage?.node
                                ?.sourceUrl
                            }
                            alt="vladimirputin"
                            className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                            width={397}
                            height={210}
                          />
                        </Link>
                      )}
                      <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[0]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[1]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[2]?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {section3?.map((item, index) => {
              if (displayedCategories.has(item.name)) {
                return null;
              }
              displayedCategories.add(item.name);

              const bottomLineColor = (() => {
                switch (item.name) {
                  case "Insights":
                    return "#1877F2";
                  case "Jewish News":
                    return "#40A6FB";
                  case "music":
                    return "#25AC7D";
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
                  key={index}
                  className="max-w-xs bg-white mr-4 items-center"
                >
                  <div className="mr-2 mb-20">
                    <h5 className="text-[18px] font-extrabold text-black-900 italic">
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
                      {item?.posts?.nodes[0]?.featuredImage?.node
                        ?.sourceUrl && (
                        <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              item?.posts?.nodes[0]?.featuredImage?.node
                                ?.sourceUrl
                            }
                            alt="vladimirputin"
                            className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                            width={397}
                            height={210}
                          />
                        </Link>
                      )}
                      <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[0]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[1]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[2]?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* {data.page.homePage.allCategories.nodes.slice(0, 3).map((item) => {
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
                    <h5 className="text-[18px] font-extrabold text-black-900 italic">
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
                      {item?.posts?.nodes[0]?.featuredImage?.node
                        ?.sourceUrl && (
                        <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={
                              item?.posts?.nodes[0]?.featuredImage?.node
                                ?.sourceUrl
                            }
                            alt="vladimirputin"
                            className="h-[210px] w-[397px] mr-2 mb-2 object-cover"
                            width={397}
                            height={210}
                          />
                        </Link>
                      )}
                      <Link href={`/news/${item?.posts?.nodes[0]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[0]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[1]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[1]?.title}
                        </p>
                      </Link>
                    </div>
                    <div key={item.id}>
                      <Link href={`/news/${item?.posts?.nodes[2]?.slug}`}>
                        <p className="text-[17px] font-medium text-black-800 mb-2 hover:text-skyBlue">
                          {item?.posts?.nodes[2]?.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Newscard;
