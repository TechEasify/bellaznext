import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import anaflavia_kR5VQr3 from "../public/images/anaflavia_kR5VQr3.svg";
import Frame256 from "../public/images/Frame256.svg";
import Frame257 from "../public/images/Frame257.svg";
import download6 from "../public/images/download6.svg";
import spotifydeal from "../public/images/spotifydeal.svg";
import { gql, useQuery } from "@apollo/client";

const GET_MUSIC_SECTION = gql`
  query ($id: ID = "3080") {
    page(id: $id, idType: DATABASE_ID) {
      music {
        pageTitleBackgroundColor {
          backgroundColor
        }
        heroPostCategory {
          nodes {
            ... on Category {
              posts {
                nodes {
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  author {
                    node {
                      name
                    }
                  }
                  content
                }
              }
            }
          }
        }
        trending
        trendingBottomLineColor
        heroPostSidebar {
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
                  title
                }
              }
            }
          }
        }
        heroSiderbarAd
        siderbarPosts {
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
                  title
                }
              }
              name
            }
          }
        }
        adversitement
        allCategories {
          nodes {
            ... on Category {
              name
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
                  title
                  content
                  author {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        sidebarAd
      }
    }
  }
`;

const Music = () => {
  const { loading, error, data } = useQuery(GET_MUSIC_SECTION)
  console.log(data, "data music");
  const { openDialog } = useDialog();

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">MUSIC</h1>
          <hr
            className="text-red-800 mr-5"
            style={{ height: "7px", background: "#25AC7D" }}
          />
          <br />
        </div>

        <div className="flex flex-wrap justify-around">
          <div>
            <div className="max-w-xs bg-white mb-6 mr-4 items-center">
              <div className="mr-2">
                <ExportedImage
                  src={Frame256}
                  alt="vladimirputin"
                  className="h-13 w-13 mr-2 mb-2"
                />
                <p className="text-[12px] font-bold text-red-800">OSCARS</p>
                <p className="text-[15px] font-semibold text-gray-800">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
                <p className="text-[10px] text-base font-bold text-gray-800">
                  <span
                    className="text-[10px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[36px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
              </div>
            </div>
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <div className="mr-2">
                <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                <p className="text-[15px] font-semibold text-gray-800">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={anaflavia_kR5VQr3}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
            <p className="text-[10px] text-base font-bold text-gray-800">
              <span
                className="text-[10px] font-extrabold mr-1"
                style={{ color: "#40A6FB" }}
              >
                |
              </span>
              By
              <span
                className="font-extrabold mx-1"
                style={{ color: "#40A6FB" }}
              >
                Linah Absteen
                <span
                  className="text-[36px] font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  .
                </span>
              </span>
              6 MIN READ
            </p>
          </div>
          <div className="max-w-md bg-white mb-6 mx-auto">
            <a href="#">
              <ExportedImage
                priority={true}
                src={download6}
                alt="vladimirputin"
              />
            </a>
            <p className="text-base font-bold text-red-800 mt-2">HOLLYWOOD</p>
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                ‘We have to get this done’: A top House Republican pushes for
                Ukraine aid
              </h5>
            </a>
            <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
              <span
                className="text-[10px] font-extrabold mr-1"
                style={{ color: "#40A6FB" }}
              >
                |
              </span>
              By
              <span
                className="font-extrabold mx-1"
                style={{ color: "#40A6FB" }}
              >
                Linah Absteen
                <span
                  className="text-[36px] font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  .
                </span>
              </span>
              6 MIN READ
            </p>
            <p className="text-[12px] font-normal text-gray-800 mt-2">
              Intel Chair Mike Turner says he’s confident Speaker Mike Johnson
              will allow a vote sending new funding to Kyiv.
            </p>
          </div>
          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            <div className="mr-2">
              <ExportedImage
                src={Frame257}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">MUSIC</p>
              <p className="text-[15px] font-semibold text-gray-800">
                Our DeSantis and Haley Reporters switched places Her’s What They
                Found.
              </p>
              <p className="text-[10px] text-base font-bold text-gray-800">
                <span
                  className="text-[10px] font-extrabold mr-1"
                  style={{ color: "#40A6FB" }}
                >
                  |
                </span>
                By
                <span
                  className="font-extrabold mx-1"
                  style={{ color: "#40A6FB" }}
                >
                  Linah Absteen
                  <span
                    className="text-[36px] font-extrabold mx-1"
                    style={{ color: "#40A6FB" }}
                  >
                    .
                  </span>
                </span>
                6 MIN READ
              </p>
            </div>
            <div className="flex max-w-xs bg-white mr-4 items-center">
              <ExportedImage
                src={spotifydeal}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
