import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};

const Topheadlines = ({ topheadData, displayedCategories }) => {
  console.log(topheadData, "topheadData");
  
  const [displayCount, setDisplayCount] = useState(6);

  const sortedTopHeadlines =
    topheadData?.nodeByUri?.homePage?.topHeadlinesPost?.nodes
      .slice(0, 6)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  const usedCategories = new Set();

  const uniqueCategoryPosts = sortedTopHeadlines
    ?.filter((item) => {
      console.log(item, "item tophead");
      const categories = item?.posts?.nodes
      console.log(categories, "categories");
      
      const uniqueCategory = categories.find(
        (category) => !usedCategories.has(item.name)
      );
      console.log(uniqueCategory, "uniqueCategory");
      
      if (uniqueCategory) {
        usedCategories.add(uniqueCategory.name);
        return true;
      }
      return false;
    })
    .slice(0, displayCount);

  const sortedTopHeadlinesSidebar =
    topheadData?.nodeByUri?.homePage?.topHeadlineSidebarSinglePosts?.nodes
      .slice()
      .sort((a, b) => (a.title < b.title ? 1 : -1));

  const hasMorePosts = displayCount < sortedTopHeadlinesSidebar?.length;

  return (
    <div className="py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 gap-7">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center md:mx-0">
            <h1 className="text-[25px] font-bold text-black-900 italic">
              {topheadData?.nodeByUri?.homePage?.topHeadlinesTitle}
            </h1>
            <hr
              className="text-red-800 mr-8"
              style={{
                height: "7px",
                background: `${topheadData?.nodeByUri?.homePage?.topHeadlineTitleLineColor}`,
              }}
            />
            <br />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pr-8">
            {uniqueCategoryPosts?.map(
              (item, index) => (
                console.log(item, "uniqueCategoryPosts"),
                (
                  <>
                    <div key={index} className="max-w-md bg-white mb-6">
                      {item.posts.nodes.slice(0, 1).map((category, index) => {
                        console.log(category, "posts category");
                        
                        const contentText = item?.content
                          ? item.content.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                          : ""; // Fallback if content is not available

                        const wordCount = contentText
                          ? contentText.split(" ").length
                          : 0;
                        const readingTime =
                          wordCount > 0 ? Math.ceil(wordCount / 250) : 0;
                        return (
                          <div key={index}>
                            <Link href={`/news/${category.slug}`}>
                              <Image
                                priority={true}
                                loader={customLoader}
                                src={category?.featuredImage?.node?.sourceUrl}
                                alt={category?.featuredImage?.node?.sourceUrl || ""}
                                width={432}
                                height={293}
                                className="object-cover w-[432px] h-[293px]"
                              />
                            </Link>
                            <p className="text-[12px] tracking-widest font-semibold text-red-800 mt-2 uppercase">
                              {item.name}
                            </p>
                            <Link href={`/news/${category.slug}`}>
                              <h5 className="mb-2 text-xl font-semibold tracking-tight text-black-900 dark:text-white hover:text-skyBlue">
                                {category?.title}
                              </h5>
                            </Link>
                            <p className="text-[12px] text-base font-extralight text-gray-800 mb-4">
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
                                {category?.author?.node?.name || ""}
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
                      })}
                    </div>
                  </>
                )
              )
            )}
          </div>
          <div className="w-full max-w-3xl mx-auto mt-5 md:hidden">
            {sortedTopHeadlinesSidebar !== null &&
              sortedTopHeadlinesSidebar?.slice(0, displayCount).map((side, index) => (
                <div className="mt-5 mb-5 sm:flex" key={index}>
                  {side.posts.nodes
                    .slice()
                    .sort((a, b) => (a.title < b.title ? 1 : -1))
                    .map((itemdata) => (
                      <React.Fragment key={itemdata.id}>
                        <div className="flex justify-between">
                          <div className="mr-2 mb-5 w-[203px]">
                            <p className="text-[12px] font-bold text-red-800">
                              {side.name}
                            </p>
                            <Link href={`/news/${side.slug}`} passHref>
                              <p className="text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
                                {itemdata.title}
                              </p>
                            </Link>
                          </div>
                          {itemdata?.featuredImage?.node?.sourceUrl ? (
                            <Link href={`/news/${side.slug}`} passHref>
                              <Image
                                priority={true}
                                loader={customLoader}
                                src={itemdata.featuredImage.node.sourceUrl}
                                alt={itemdata.title}
                                className="object-cover w-[90px] h-[87px] mr-2"
                                width={150}
                                height={87}
                              />
                            </Link>
                          ) : (
                            <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center">
                              No Image
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              ))}

            <div className="flex justify-between">
              <button
                className={`viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center hover:bg-blue-700 lg:hidden`}
                onClick={() => {
                  if (hasMorePosts)
                    setDisplayCount((prevCount) => prevCount + 2);
                }}
                disabled={!hasMorePosts}
              >
                {hasMorePosts ? "VIEW MORE" : "NO MORE POSTS"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheadlines;
