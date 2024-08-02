import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Screenshot2024 from "../public/images/Screenshot2024.svg";
import vladimir from "../public/images/221109vladimir.svg";
import ExportedImage from "next-image-export-optimizer";
import News from "./News/News";
import colinlloyd from "../public/images/colinlloyd.svg";
import anaflavia from "../public/images/anaflavia.svg";
import Frame220 from "../public/images/Frame220.svg";
import anaflavia2 from "../public/images/anaflavia2.svg";
import sidepost from "../public/images/sidepost.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import Group4 from "../public/images/Group4.svg";
import Frame208 from "../public/images/Frame208.svg";
import Frame209 from "../public/images/Frame209.svg";
import mikevon1 from "../public/images/mikevon1.svg";
import iphone from "../public/images/iphone.svg";
import threeByTwoSmall from "../public/images/threeByTwoSmall.svg";
import GettyImages1 from "../public/images/GettyImages1.svg";
import Fame216 from "../public/images/Fame216.svg";
import jeuol4a_prince1 from "../public/images/jeuol4a_prince1.svg";
import Musicpage from "./Music/Musicpage";
import Ads from "./googleAds/Ads";
import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

// Utility function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Music({ nodeByUri, fetchMore, loading }) {
  const posts = [];
  const [shuffledPost, setShuffledPosts] = useState([]);

  console.log(nodeByUri, "nodeByUri music");

  useEffect(() => {
    if (
      nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
        ?.selectCategoryForAllPost?.nodes
    ) {
      const posts =
        nodeByUri.nodeByUri.categoryTamplate.musicTemplete.selectCategoryForAllPost.nodes.flatMap(
          (item) => item.posts.nodes
        );
      console.log(posts, "posts use Music");
      setShuffledPosts(posts);
    }
  }, [nodeByUri]);

  console.log(shuffledPost, "shuffledPost");

  nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete?.musicHeroSection?.selectCategoryForSidebarPosts?.nodes.forEach(
    (item) => {
      item.posts.nodes.forEach((post) => {
        posts.push({ ...post, categoryName: item.name });
      });
    }
  );

  const shuffledPosts = shuffle(posts);

  // Check if posts have unique identifier (id or slug)
  const hasUniqueId = (post) => post.id || post.slug;

  // Sort the shuffled posts by unique identifier
  const sortedPosts = shuffledPosts.filter(hasUniqueId).sort((a, b) => {
    const idA = a.id || a.slug;
    const idB = b.id || b.slug;
    return idA.localeCompare(idB);
  });
  // Shuffle the posts array and take the first 3 elements
  const randomPosts = shuffle(posts).slice(0, 3);

  // Slice for the first layout (ascending order)
  const firstLayoutPosts = sortedPosts.slice(0, 1);

  // Slice for the second layout (descending order)
  const secondLayoutPosts = sortedPosts.slice().reverse().slice(0, 1);
  return (
    <>
      {/* <Nav /> */}
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_900px] gap-6">
          <div className="hidden lg:block w-full max-w-3xl mx-auto">
            <p className="text-[22px] font-extrabold text-black-900 italic uppercase">
              {
                nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                  ?.musicHeroSection?.heroSidebarTitle
              }
            </p>
            <hr
              className="text-red-800"
              style={{
                height: "7px",
                background: `${
                  nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                    ?.musicHeroSection?.heroSidebarTitleLineColor || "#000"
                }`,
              }}
            />
            {randomPosts.map((post, index) => (
              <React.Fragment key={index}>
                <div className="flex mt-5">
                  <div className="mr-2 flex-1">
                    <p className="text-[12px] font-semibold text-red-800 uppercase tracking-widest">
                      {post?.categoryName || ""}
                    </p>
                    <Link href={`/news/${post.slug}`}>
                      <p className="text-[16px] font-semibold text-black-800 mb-3 hover:text-skyBlue">
                        {post?.title || ""}
                      </p>
                    </Link>
                  </div>
                  {post?.featuredImage?.node?.sourceUrl && (
                    <Link href={`/news/${post.slug}`}>
                      <Image
                        priority={true}
                        loader={customLoader}
                        src={post.featuredImage.node.sourceUrl}
                        alt="Partly Cloudy"
                        className="h-13 w-13 mr-2 object-cover w-[90px] h-[87px]"
                        width={90}
                        height={87}
                      />
                    </Link>
                  )}
                </div>
                <hr className="my-3" />
              </React.Fragment>
            ))}
            <div className="flex mt-5 mb-5">
              {nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                ?.musicHeroSection?.musicHeroSidebarAds?.musicSidebarAdImage
                ?.node?.sourceUrl ? (
                <Link
                  href={{
                    pathname:
                      nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                        ?.musicHeroSection?.musicHeroSidebarAds
                        ?.musicSidebarAdLink,
                  }}
                  passHref
                  target="_blank"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={
                      nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                        ?.musicHeroSection?.musicHeroSidebarAds
                        ?.musicSidebarAdImage?.node?.sourceUrl
                    }
                    alt="Partly Cloudy"
                    className="w-full mr-2 object-cover w-[316px] h-[336px]"
                    width={316}
                    height={336}
                  />
                </Link>
              ) : (
                <Ads
                  className=""
                  style={{
                    display: "block",
                    width: "316px",
                    height: "336px",
                    margin: "0 auto",
                  }}
                  adClient="ca-pub-3209848804552918"
                  adSlot="9293720177"
                />
              )}
            </div>
            <hr className="my-3" />
            {/* {firstLayoutPosts.map((post, index) => {
              const contentText = post?.content
                ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                : ""; // Fallback if content is not available
              const wordCount = contentText
                ? contentText?.split(" ").length
                : 0;
              const readingTime =
                wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
              return (
                <React.Fragment key={index}>
                  <div className="mr-2 my-2">
                    {post?.featuredImage?.node?.sourceUrl && (
                      <Link href={`/news/${post.slug}`}>
                        <Image
                          priority={true}
                          loader={customLoader}
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt="vladimirputin"
                          className="h-13 w-13 mr-2 mb-2 object-cover w-[317px] h-[194px]"
                          width={317}
                          height={194}
                        />
                      </Link>
                    )}
                    <p className="text-[12px] font-bold text-red-800 uppercase tracking-widest">
                      {post?.categoryName || ""}
                    </p>
                    <Link href={`/news/${post.slug}`}>
                      <p className="text-[20px] font-semibold text-gray-800 hover:text-skyBlue">
                        {post?.title || ""}
                      </p>
                    </Link>
                    <p className="text-[12px] text-base font-bold text-gray-800">
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
                        {post?.author?.node?.name}
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
                  <hr className="my-3" />
                </React.Fragment>
              );
            })} */}
            {secondLayoutPosts.map((post, index) => {
              const contentText = post?.content
                ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                : ""; // Fallback if content is not available
              const wordCount = contentText
                ? contentText?.split(" ").length
                : 0;
              const readingTime =
                wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
              return (
                <React.Fragment key={index}>
                  <div className="flex my-5">
                    <div className="mr-2 flex-1">
                      <p className="text-[12px] font-semibold text-red-800 tracking-widest uppercase">
                        {post?.categoryName || ""}
                      </p>
                      <Link href={`/news/${post.slug}`}>
                        <p className="text-[20px] font-semibold text-black-800 mb-3 hover:text-skyBlue">
                          {post?.title || ""}
                        </p>
                      </Link>
                      <p className="text-[12px] text-base font-bold text-gray-800">
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
                          {post?.author?.node?.name}
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
                    {post?.featuredImage?.node?.sourceUrl && (
                      <Link href={`/news/${post.slug}`}>
                        <Image
                          priority={true}
                          loader={customLoader}
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt="Partly Cloudy"
                          className="h-13 w-13 mr-2 object-cover w-[120px] h-[97px]"
                          width={120}
                          height={97}
                        />
                      </Link>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          {shuffledPost.slice(0, 1).map((musicpost) => {
            console.log(musicpost, "musicpostmusicpostmusicpost");
            const contentText = musicpost?.content
              ? musicpost?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
              : ""; // Fallback if content is not available
            const wordCount = contentText ? contentText?.split(" ").length : 0;
            const readingTime = wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
            return (
              <div className="w-full max-w-5xl mx-auto relative">
                {shuffledPost[0]?.featuredImage?.node?.sourceUrl && (
                  <Link href={`/news/${musicpost.slug}`}>
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="object-cover w-full md:w-[910px] max-h-[554px] relative"
                      src={shuffledPost[0]?.featuredImage?.node?.sourceUrl}
                      width={910}
                      height={554}
                      alt="vladimirputin"
                    />
                  </Link>
                )}
                {/* absolute top-[22%] left-[8%] bg-white p-6 border border-[#25AC7D] shadow max-w-[750px] w-full md:max-w-[750px] h-60 tablet-custom mobile-custom */}
                  <div className="relative bottom-[8%] mx-6 z-50 bg-white p-4 border border-[#25AC7D] shadow h-64 tablet-custom mobile-custom">
                    <p className="text-[15px] font-semibold text-red-800 uppercase tracking-widest">
                      {nodeByUri?.nodeByUri?.name}
                    </p>
                    <Link href={`/news/${musicpost.slug}`}>
                      <h5 className="text-[40px] font-extrabold text-black-900 dark:text-white hover:text-skyBlue mobile-custom-h5">
                        {musicpost?.title}
                      </h5>
                    </Link>
                    <p className="text-[15px] text-base font-extralight text-gray-800 mb-2">
                      <span
                        className="text-[18px] font-extrabold mr-1"
                        style={{ color: "#40A6FB" }}
                      >
                        |
                      </span>
                      By
                      <span
                        className="font-extrabold mx-1"
                        style={{ color: "#40A6FB" }}
                      >
                        {musicpost?.author?.node?.name}
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
                      className="text-[16px] font-extralight hidden md:block font-normal text-gray-700 dark:text-gray-400"
                      dangerouslySetInnerHTML={{ __html: musicpost?.excerpt }}
                    />
                  </div>

                <div className="flex flex-wrap justify-around mt-[-8%]">
                  {nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete?.selectCategoryForAllPost?.nodes
                    .map((item) =>
                      item.posts.nodes.slice(1, 5).map((post) => {
                        const contentText = post?.content
                          ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                          : ""; // Fallback if content is not available
                        const wordCount = contentText
                          ? contentText?.split(" ").length
                          : 0;
                        const readingTime =
                          wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                        return (
                          <div
                            key={post.slug}
                            className="max-w-md bg-white mb-6 w-full md:w-[calc(50%-1rem)] md:mx-2"
                          >
                            {post?.featuredImage?.node?.sourceUrl && (
                              <Link href={`/news/${post.slug}`}>
                                <Image
                                  priority={true}
                                  loader={customLoader}
                                  className="object-cover w-full h-[293px]"
                                  src={post?.featuredImage?.node?.sourceUrl}
                                  alt="vladimirputin"
                                  width={432}
                                  height={293}
                                />
                              </Link>
                            )}
                            <p className="text-[12px] font-semibold text-red-800 mt-2 tracking-widest uppercase mb-2">
                              {item.name}
                            </p>
                            <Link href={`/news/${post.slug}`}>
                              <h5 className="text-[28px] mb-2 text-xl font-semibold text-black-900 dark:text-white hover:text-skyBlue leading-9">
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
                                {post.author.node.name}
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
                        );
                      })
                    )
                    .slice(0, 4)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_900px] gap-6">
          <div className="w-full max-w-3xl mx-auto">
            <p className="text-[15px] font-bold text-black-900 italic">
              Trending
            </p>
            <hr
              className="text-red-800"
              style={{ height: "7px", background: "#CE3A42" }}
            />

            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={colinlloyd}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
            <hr />
            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">HOLLYWOOD</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={anaflavia}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
            <hr />
            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">EUROPE</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={mikevon1}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>

            <div className="flex mt-5 mb-5">
              <ExportedImage
                src={iphone}
                alt="Partly Cloudy"
                className="w-full mr-2"
              />
            </div>
            <div className="mr-2">
              <ExportedImage
                src={Frame220}
                alt="vladimirputin"
                className="h-13 w-13 mr-2 mb-2"
              />
              <p className="text-[12px] font-bold text-red-800">OSCARS</p>
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
            <hr />
            <div className="flex mt-5">
              <div className="mr-2 flex-1">
                <p className="text-[12px] font-bold text-red-800">ANALYSIS</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={anaflavia2}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto relative">
            <ExportedImage
              className="mb-2"
              priority={true}
              src={vladimir}
              alt="vladimirputin"
              style={{ width: "100%", height: "auto" }}
            />

            <div
              className="absolute bg-white p-6 border border-green-600 shadow
                max-w-750px md:top-[27%] md:left-[8%]
                lg:max-w-264px top-[294%] left-[8%] h-[150px]
                "
                style={{
                  maxWidth: "750px",
                  border: "1px solid #25AC7D",
                  top: "27%",
                  left: "8%",
                }}
            >
              <div>
                <p className="text-[12px] font-bold text-red-800">MUSIC</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Taylor swift wins 4 Grammy’s
                </h5>
                <p className="text-[10px] text-base font-bold text-gray-800 mb-2">
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
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Speaking after the race, Vasseur praised Leclerc's tactical
                  thinking in the closing stages of the race before jokingly
                  pointing the finger at Mercedes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-around mt-24">
              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={GettyImages1}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  POLITICS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Biden campaigns touts $42M raised in january
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
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

              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={Fame216}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  ELECTIONS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Federal agencies scramble to finish Biden’s rules - and
                    protect his legacy from trump
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
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

              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={threeByTwoSmall}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  POLITICS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Biden campaigns touts $42M raised in january
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
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
              <div className="max-w-md bg-white mb-6">
                <a href="#">
                  <ExportedImage
                    priority={true}
                    src={jeuol4a_prince1}
                    alt="vladimirputin"
                  />
                </a>
                <p className="text-base font-bold text-red-800 mt-2">
                  ELECTIONS
                </p>
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Federal agencies scramble to finish Biden’s rules - and
                    protect his legacy from trump
                  </h5>
                </a>
                <p className="text-[15px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[25px] font-extrabold mr-1"
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
          </div>
        </div>
      </div> */}
      <Musicpage
        nodeByUri={nodeByUri?.nodeByUri}
        fetchMore={fetchMore}
        loading={loading}
      />
      {/* <Footer /> */}
    </>
  );
}

export default Music;
