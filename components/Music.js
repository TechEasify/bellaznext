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

const Music = () => {
  const { openDialog, musicQuery, musicError, musicLoading } = useDialog();
  console.log(musicQuery, "musicQuerymusicQuerymusicQuery");
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">
            {musicQuery?.page?.homePage?.musicTitle}
          </h1>
          <hr
            className="text-red-800 mr-5"
            style={{ height: "7px", background: "#25AC7D" }}
          />
          <br />
        </div>

        <div className="flex flex-wrap justify-around">
          <div>
            {musicQuery?.page?.homePage?.musicPosts?.nodes.map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(1, 2).map(
                  (post) => (
                    console.log(post, "post"),
                    (
                      <React.Fragment key={post.id}>
                        <div className="max-w-xs bg-white mb-6 mr-4 items-center">
                          <div className="mr-2">
                            <Link
                              href={{
                                pathname: `/news/${post.slug}`,
                              }}
                              passHref
                            >
                              <ExportedImage
                                src={post?.featuredImage?.node?.sourceUrl}
                                alt="vladimirputin"
                                className="object-cover w-[317px] h-[194px] mr-2 mb-2"
                                width={317}
                                height={194}
                              />
                            </Link>
                            <p className="text-[12px] font-bold text-red-800">
                              {musicQuery?.page?.homePage?.musicTitle}
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
                              {musicQuery?.page?.homePage?.musicTitle}
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
                          <Link
                            href={{
                              pathname: `/news/${post.slug}`,
                            }}
                            passHref
                          >
                            <ExportedImage
                              src={post?.featuredImage?.node?.sourceUrl}
                              alt="Partly Cloudy"
                              className="object-cover w-[240px] h-[97px] mr-2"
                              width={120}
                              height={97}
                            />
                          </Link>
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
                      </React.Fragment>
                    )
                  )
                )
              )
            )}
          </div>
          <div className="max-w-md bg-white mb-6 mx-auto">
            {musicQuery?.page?.homePage?.musicPosts?.nodes.slice(0, 1).map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(0, 1).map(
                  (post) => (
                    console.log(post, "post"),
                    (
                      <React.Fragment key={post.id}>
                        <Link
                          href={{
                            pathname: `/news/${post.slug}`,
                          }}
                          passHref
                        >
                          <ExportedImage
                            priority={true}
                            className="object-cover w-[593px] h-[395px]"
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="vladimirputin"
                            width={593}
                            height={395}
                          />
                        </Link>
                        <p className="text-base font-bold text-red-800 mt-2">
                          {musicQuery?.page?.homePage?.musicTitle}
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
                          className="text-[12px] font-normal text-gray-800 mt-2 export"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                      </React.Fragment>
                    )
                  )
                )
              )
            )}
          </div>
          <div className="max-w-xs bg-white mb-6 mr-4 items-center">
            {musicQuery?.page?.homePage?.musicPosts?.nodes.map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(2, 3).map(
                  (post) => (
                    console.log(post, "post"),
                    (
                      <React.Fragment key={post.id}>
                        <div className="mr-2">
                          <ExportedImage
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="vladimirputin"
                            className="object-cover w-[317px] h-[194px] mr-2 mb-2"
                            width={317}
                            height={194}
                          />
                          <p className="text-[12px] font-bold text-red-800">
                            {musicQuery?.page?.homePage?.musicTitle}
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
                        <div className="hidden md:block flex max-w-xs bg-white mr-4 items-center">
                          {musicQuery?.page?.homePage?.musicAd?.musicAdImage
                            ?.node?.sourceUrl ? (
                            <Link
                              href={{
                                pathname:
                                  musicQuery?.page?.homePage?.musicAd
                                    ?.musicAdLink,
                              }}
                              passHref
                              target="_blank"
                            >
                              <ExportedImage
                                src={
                                  musicQuery.page.homePage.musicAd.musicAdImage
                                    .node.sourceUrl
                                }
                                alt="Partly Cloudy"
                                className="object-cover w-[317px] h-[214px] mr-2"
                                width={317}
                                height={214}
                              />
                            </Link>
                          ) : (
                            <Ads
                              className=""
                              style={{
                                display: "block",
                                width: "317px",
                                height: "214px",
                                margin: "0 auto",
                              }}
                              adClient="ca-pub-3209848804552918"
                              adSlot="9293720177"
                            />
                          )}
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
    </div>
  );
};

export default Music;
