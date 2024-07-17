import { useDialog } from "./DialogContext";
import React, { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import ana_flavia_1 from "../public/images/ana_flavia_1.svg";
import Frame212 from "../public/images/Frame212.svg";
import Frame214 from "../public/images/Frame214.svg";
import download3 from "../public/images/download3.svg";
import addpost from "../public/images/addpost.svg";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const SkeletonLoader = () => (
  <>
    <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
          </div>
          <div className="h-64 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-40 bg-gray-300 rounded w-full mb-4"></div>
          <div className="flex mt-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
          <hr />
          <div className="flex mt-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
            <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>
          </div>

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>

          <hr className="mx-6 mb-8" />

          <div className="flex flex-wrap justify-around">
            {Array(2)
              .fill()
              .map((_, index) => (
                <div key={index} className="max-w-md bg-white mb-6 p-4">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-full"></div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="w-full h-40 bg-gray-200 animate-pulse mr-2"></div>
          </div>
          <hr />
          <div className="flex mt-5 mb-5">
            <div className="mr-2">
              <div className="h-4 bg-gray-200 animate-pulse mb-2 w-20"></div>
              <div className="h-6 bg-gray-200 animate-pulse mb-2 w-40"></div>
            </div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mr-2"></div>
          </div>

          <div className="flex mb-5 mt-10">
            <div className="w-full h-40 bg-gray-200 animate-pulse mr-2"></div>
          </div>

          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-8">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="h-13 w-13 bg-gray-200 animate-pulse mx-2"
                ></div>
              ))}
          </div>

          <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/2"></div>
          <div className="h-1 bg-gray-200 animate-pulse mb-5 w-20"></div>

          <div className="flex mt-5 mb-8">
            <div className="h-13 w-13 bg-gray-200 animate-pulse mx-2"></div>
            <div className="h-13 w-13 bg-gray-200 animate-pulse mx-2"></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const Insights = () => {
  const { openDialog, insightsQuery, insightsLoading, insightsError, musicQuery } =
    useDialog();
  const [randomPost, setRandomPost] = useState(null);
  console.log(insightsQuery, "insightsQuery");

  const insightsPost = insightsQuery?.page?.homePage?.insightsPost?.nodes;
  console.log(insightsPost, "insightsPost");

  useEffect(() => {
    if (insightsPost && insightsPost.length > 0) {
      const shuffledPosts = insightsPost.sort(() => 0.5 - Math.random());
      setRandomPost(shuffledPosts[0]);
    }
  }, [insightsPost]);

  if (insightsLoading) return <SkeletonLoader />;
  if (insightsError) return <p>Fetch data error.</p>;
  if (!randomPost) return null;

  const insight = randomPost.posts.nodes;

  console.log(insight, "randomPost");
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <h1 className="text-[25px] font-bold text-black-900 italic">
            {insightsQuery?.page?.homePage?.insightsTitle}
          </h1>
          <hr
            className="text-red-800 mr-5"
            style={{
              height: "7px",
              background: `${insightsQuery?.page?.homePage?.insightsTitleBottomLineColor}`,
            }}
          />
          <br />
        </div>

        <div className="flex flex-wrap justify-around items-stretch">
          {insight?.slice(1, 2)?.map((item) => (
            <div className="flex flex-col" key={item.name}>
              <div
                className="max-w-xs bg-white mb-6 items-center"
                key={item.slug}
              >
                <div className="mr-2 mb-2">
                  <ExportedImage
                    src={item.featuredImage?.node?.sourceUrl || ""}
                    alt={item.featuredImage?.node?.sourceUrl || ""}
                    className="object-cover mr-2 mb-2"
                    width={317}
                    height={194}
                  />
                  <p className="text-[12px] font-bold text-red-800">
                    {insightsPost[0].name}
                  </p>
                  <Link href={`/news/${item.slug}`} passHref>
                    <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                      {item.title}
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
                      {item.author.node.name}
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
                <div className="flex max-w-xs bg-white mr-4 items-center justify-between">
                  <div className="mr-2">
                    <p className="text-[12px] font-bold text-red-800">
                    {insightsPost[0].name}
                    </p>
                    <Link href={`/news/${item.slug}`} passHref>
                      <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                        {item.title}
                      </p>
                    </Link>
                  </div>
                  <ExportedImage
                    src={
                      item.featuredImage.node.sourceUrl !== null &&
                      item.featuredImage.node.sourceUrl
                    }
                    alt={
                      item.featuredImage.node.sourceUrl !== null &&
                      item.featuredImage.node.sourceUrl
                    }
                    className="h-[87px] w-13 mr-2"
                    width={90}
                    height={87}
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
                    {item.author.node.name}
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
          ))}

          {insightsPost?.map((item) => (
            item.name === 'Insights' && (
              <div className="max-w-md bg-white mb-6 mx-auto" key={item.name}>
                {item.posts.nodes.slice(0, 1).map((node) => (
                  <div key={node.slug}>
                    <Link href={`/news/${node.slug}`} passHref>
                      <ExportedImage
                        priority={true}
                        src={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                        alt={node.featuredImage.node.sourceUrl !== null && node.featuredImage.node.sourceUrl}
                        className="object-cover w-[593px] h-[395px]"
                        width={593}
                        height={395}
                      />
                    </Link>
                    <p className="text-base font-bold text-red-800 mt-2">
                      {item.name}
                    </p>
                    <Link href={`/news/${node.slug}`} passHref>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-skyBlue">
                        {node.title}
                      </h5>
                    </Link>
                    <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                      <span
                        className="text-[10px] font-extrabold mr-1"
                        style={{ color: '#40A6FB' }}
                      >
                        |
                      </span>
                      By
                      <span
                        className="font-extrabold mx-1"
                        style={{ color: '#40A6FB' }}
                      >
                        {node.author.node.name}
                        <span
                          className="text-[36px] font-extrabold mx-1"
                          style={{ color: '#40A6FB' }}
                        >
                          .
                        </span>
                      </span>
                      6 MIN READ
                    </p>
                    <p
                      className="text-[12px] font-normal text-gray-800 mt-2 export"
                      dangerouslySetInnerHTML={{ __html: node.content }}
                    />
                  </div>
                ))}
              </div>
            )
          ))}

          {insight?.slice(2, 3)?.map((item) => (
              <div className="max-w-xs bg-white mb-6 mr-4 items-center" key={item.name}>
                  <div key={item.slug}>
                    <div className="mr-2">
                      <ExportedImage
                        src={item.featuredImage?.node?.sourceUrl || ''}
                        alt={item.featuredImage?.node?.sourceUrl || ''}
                        className="object-cover w-[317px] h-[194px] mr-2 mb-2"
                        width={317}
                        height={194}
                      />
                      <p className="text-[12px] font-bold text-red-800">
                        {item.name}
                      </p>
                      <Link href={`/news/${item.slug}`} passHref>
                        <p className="text-[15px] font-semibold text-gray-800 hover:text-skyBlue">
                          {item.title}
                        </p>
                      </Link>
                      <p className="text-[10px] text-base font-bold text-gray-800 mb-3">
                        <span
                          className="text-[10px] font-extrabold mr-1"
                          style={{ color: '#40A6FB' }}
                        >
                          |
                        </span>
                        By
                        <span
                          className="font-extrabold mx-1"
                          style={{ color: '#40A6FB' }}
                        >
                          {item.author.node.name}
                          <span
                            className="text-[36px] font-extrabold mx-1"
                            style={{ color: '#40A6FB' }}
                          >
                            .
                          </span>
                        </span>
                        6 MIN READ
                      </p>
                    </div>
                    <div className="flex max-w-xs bg-white mr-4 items-center">
                      <ExportedImage
                        src={insightsQuery?.page?.homePage?.insightsAd?.insightAdImage?.node?.sourceUrl || ''}
                        alt={insightsQuery?.page?.homePage?.insightsAd?.insightAdImage?.node?.sourceUrl || ''}
                        className="object-cover w-[317px] h-[214px] mr-2"
                        width={317}
                        height={214}
                      />
                    </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
