import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import anaflavia_kR5VQr3 from "../public/images/anaflavia_kR5VQr3.svg";
import Frame256 from "../public/images/Frame256.svg";
import Frame257 from "../public/images/Frame257.svg";
import download6 from "../public/images/download6.svg";
import spotifydeal from "../public/images/spotifydeal.svg";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_MUSIC_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        musicTitle
        musicBottomLineColor
        musicPosts {
          nodes {
            ... on Category {
              posts {
                nodes {
                  slug
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
        musicBottomAd {
          musicBottomAdImage {
            node {
              altText
              srcSet
              sourceUrl
            }
          }
          musicBottomAdCode
        }
      }
    }
  }
`;

const Music = () => {
  const { loading, error, data } = useQuery(GET_MUSIC_SECTION);
  console.log(data, "data music");
  const { openDialog } = useDialog();

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">
            {data?.page?.homePage?.musicTitle}
          </h1>
          <hr
            className="text-red-800 mr-5"
            style={{ height: "7px", background: "#25AC7D" }}
          />
          <br />
        </div>

        <div className="flex flex-wrap justify-around">
          {data?.page?.homePage?.musicPosts?.nodes.slice(0, 1).map(
            (item) => (
              console.log(item, "item music"),
              item.posts?.nodes.slice(0, 1).map(
                (post) => (
                  console.log(post, "post"),
                  (
                    <React.Fragment key={post.id}>
                      <div>
                        <div className="max-w-xs bg-white mb-6 mr-4 items-center">
                          <div className="mr-2">
                            {/* {item.featuredImage?.node?.sourceUrl && (
                              <ExportedImage
                                src={item.featuredImage.node.sourceUrl}
                                alt="vladimirputin"
                                className="h-13 w-13 mr-2 mb-2"
                                width={317}
                                height={194}
                                style={{ width: "317px", height: "194px" }}
                              />
                            )} */}
                            <ExportedImage
                              src={post?.featuredImage?.node?.sourceUrl}
                              alt="vladimirputin"
                              className="h-13 w-13 mr-2 mb-2"
                              width={317}
                              height={194}
                              style={{ width: "317px", height: "194px" }}
                            />
                            <p className="text-[12px] font-bold text-red-800">
                              {data?.page?.homePage?.musicTitle}
                            </p>
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                              passHref
                            >
                              <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                                {post.title}
                              </p>
                            </Link>
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
                                {post.author?.node?.name}
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
                            <p className="text-[12px] font-bold text-red-800">
                              {data?.page?.homePage?.musicTitle}
                            </p>
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                              passHref
                            >
                              <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                                {post.title}
                              </p>
                            </Link>
                          </div>
                          <ExportedImage
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="Partly Cloudy"
                            className="h-13 w-13 mr-2"
                            width={120}
                            height={97}
                            style={{
                              width: "120px",
                              height: "97px",
                              objectFit: "cover",
                            }}
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
                            {post.author?.node?.name}
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
                        <Link
                          href={{
                            pathname: `/news/${post.slug}`,
                          }}
                          passHref
                        >
                          <ExportedImage
                            priority={true}
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="vladimirputin"
                            width={593}
                            height={395}
                            style={{
                              width: "593px",
                              height: "395px",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                        <p className="text-base font-bold text-red-800 mt-2">
                          {data?.page?.homePage?.musicTitle}
                        </p>
                        <Link
                          href={{
                            pathname: `/news/${post.slug}`,
                          }}
                          passHref
                        >
                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-skyBlue">
                            {post.title}
                          </h5>
                        </Link>
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
                            {post.author?.node?.name}
                            <span
                              className="text-[36px] font-extrabold mx-1"
                              style={{ color: "#40A6FB" }}
                            >
                              .
                            </span>
                          </span>
                          6 MIN READ
                        </p>
                        <p
                          className="text-[12px] font-normal text-gray-800 mt-2"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                      </div>
                      <div className="max-w-xs bg-white mb-6 mr-4 items-center">
                        <div className="mr-2">
                          <ExportedImage
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="vladimirputin"
                            className="h-13 w-13 mr-2 mb-2"
                            width={317}
                            height={194}
                            style={{
                              width: "317px",
                              height: "194px",
                              objectFit: "cover",
                            }}
                          />
                          <p className="text-[12px] font-bold text-red-800">
                            {data?.page?.homePage?.musicTitle}
                          </p>
                          <Link
                            href={{
                              pathname: `/news/${post.slug}`,
                            }}
                            passHref
                          >
                            <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                              {post.title}
                            </p>
                          </Link>
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
                              {post.author?.node?.name}
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
                          {data?.page?.homePage?.musicBottomAd
                            ?.musicBottomAdImage?.node?.sourceUrl && (
                            <ExportedImage
                              src={
                                data.page.homePage.musicBottomAd
                                  .musicBottomAdImage.node.sourceUrl
                              }
                              alt="Partly Cloudy"
                              className="h-13 w-13 mr-2"
                              width={317}
                              height={214}
                              style={{
                                width: "317px",
                                height: "214px",
                                objectFit: "cover",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  )
                )
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;
