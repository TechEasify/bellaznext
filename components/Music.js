import { useDialog } from "./DialogContext";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

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
            style={{
              height: "7px",
              background: `${
                musicQuery?.page?.homePage?.musicBottomLineColor
                  ? musicQuery?.page?.homePage?.musicBottomLineColor
                  : "#25AC7D"
              }`,
            }}
          />
          <br />
        </div>

        <div className="flex justify-around items-stretch md:flex-row flex-col">
          <div>
            {musicQuery?.page?.homePage?.musicPosts?.nodes.map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(1, 2).map((post) => {
                  const contentText = post?.content
                    ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                    : ""; // Fallback if content is not available

                  const wordCount = contentText
                    ? contentText?.split(" ").length
                    : 0;
                  const readingTime =
                    wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                  return (
                    <div className="flex flex-col items-center" key={post.id}>
                      <div className="max-w-xs bg-white mb-6 mr-4 items-center">
                        <div className="mr-2">
                          <Link
                            href={{
                              pathname: `/news/${post.slug}`,
                            }}
                            passHref
                          >
                            <Image
                              priority={true}
                              loader={customLoader}
                              src={post?.featuredImage?.node?.sourceUrl}
                              alt="vladimirputin"
                              className="object-cover w-[317px] h-[194px] mr-2 mb-2"
                              width={317}
                              height={194}
                            />
                          </Link>
                          <p className="text-[12px] font-semibold text-red-800 tracking-widest uppercase">
                            {musicQuery?.page?.homePage?.musicTitle}
                          </p>
                          <Link
                            href={{
                              pathname: `/news/${post.slug}`,
                            }}
                            passHref
                          >
                            <p className="text-[20px] font-semibold text-black-800 hover:text-skyBlue">
                              {post.title}
                            </p>
                          </Link>
                          <p className="text-[12px] text-base font-extralight text-gray-800 w-full text-start mb-5">
                            <span
                              className="text-[12px] font-extralight mr-1"
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
                            {readingTime} MIN READ
                          </p>
                        </div>
                      <hr className="my-3"/>
                      </div>
                      <div className="flex max-w-xs bg-white mr-4 items-center">
                        <div className="mr-2">
                          <p className="text-[12px] font-semibold text-red-800 tracking-widest uppercase">
                            {musicQuery?.page?.homePage?.musicTitle}
                          </p>
                          <Link
                            href={{
                              pathname: `/news/${post.slug}`,
                            }}
                            passHref
                          >
                            <p className="text-[20px] font-semibold text-black-800 hover:text-skyBlue">
                              {post.title}
                            </p>
                          </Link>
                          <p className="text-[12px] font-extralight text-gray-800">
                            <span
                              className="text-[12px] font-extrabold mr-1 w-[2px] h-[14px]"
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
                            {readingTime} MIN READ
                          </p>
                        </div>
                        <Link
                          href={{
                            pathname: `/news/${post.slug}`,
                          }}
                          passHref
                        >
                          <Image
                            priority={true}
                            loader={customLoader}
                            src={post?.featuredImage?.node?.sourceUrl}
                            alt="Partly Cloudy"
                            className="object-cover w-[240px] h-[97px] mr-2"
                            width={120}
                            height={97}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })
              )
            )}
          </div>
          <div className="max-w-md bg-white mb-6 mx-auto hidden md:block">
            {musicQuery?.page?.homePage?.musicPosts?.nodes.slice(0, 1).map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(0, 1).map((post) => {
                  const contentText = post?.content
                    ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                    : ""; // Fallback if content is not available

                  const wordCount = contentText
                    ? contentText?.split(" ").length
                    : 0;
                  const readingTime =
                    wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                  return (
                    <React.Fragment key={post.id}>
                      <Link
                        href={{
                          pathname: `/news/${post.slug}`,
                        }}
                        passHref
                      >
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="object-cover w-[593px] h-[395px]"
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt="vladimirputin"
                          width={593}
                          height={395}
                        />
                      </Link>
                      <p className="text-[12px] tracking-wide font-semibold text-red-800 mt-2 uppercase tracking-widest">
                        {musicQuery?.page?.homePage?.musicTitle}
                      </p>
                      <Link
                        href={{
                          pathname: `/news/${post.slug}`,
                        }}
                        passHref
                      >
                        <h5 className="mb-2 text-[28px] font-semibold tracking-tight text-black-900 dark:text-white hover:text-skyBlue">
                          {post.title}
                        </h5>
                      </Link>
                      <p className="text-[12px] text-base font-extralight text-gray-800 mb-4">
                        <span
                          className="text-[12px] font-extrabold mr-1"
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
                        {readingTime} MIN READ
                      </p>
                      <p
                        className="text-[16px] font-extralight text-gray-800 mt-2 export"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </React.Fragment>
                  );
                })
              )
            )}
          </div>
          <div className="max-w-xs bg-white mb-6 mr-4 items-center lg:block xl:block hidden">
            {musicQuery?.page?.homePage?.musicPosts?.nodes.map(
              (item) => (
                console.log(item, "item music"),
                item.posts?.nodes.slice(2, 3).map((post) => {
                  const contentText = post?.content
                    ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                    : ""; // Fallback if content is not available

                  const wordCount = contentText
                    ? contentText?.split(" ").length
                    : 0;
                  const readingTime =
                    wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                  return (
                    <React.Fragment key={post.id}>
                      <div className="mr-2">
                        <Image
                          priority={true}
                          loader={customLoader}
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt="vladimirputin"
                          className="object-cover w-[317px] h-[194px] mr-2 mb-2"
                          width={317}
                          height={194}
                        />
                        <p className="text-[12px] font-semibold text-red-800 uppercase tracking-widest">
                          {musicQuery?.page?.homePage?.musicTitle}
                        </p>
                        <Link
                          href={{
                            pathname: `/news/${post.slug}`,
                          }}
                          passHref
                        >
                          <p className="text-[20px] font-semibold text-black-800 hover:text-skyBlue">
                            {post.title}
                          </p>
                        </Link>
                        <p className="text-[12px] font-extralight text-gray-800">
                          <span
                            className="text-[12px] font-extrabold mr-1"
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
                          {readingTime} MIN READ
                        </p>
                      </div>
                      <div className="hidden md:block flex max-w-xs bg-white mr-4 items-center">
                        {musicQuery?.page?.homePage?.musicAd?.musicAdImage?.node
                          ?.sourceUrl ? (
                          <Link
                            href={{
                              pathname:
                                musicQuery?.page?.homePage?.musicAd
                                  ?.musicAdLink,
                            }}
                            passHref
                            target="_blank"
                          >
                            <Image
                              priority={true}
                              loader={customLoader}
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
                  );
                })
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
