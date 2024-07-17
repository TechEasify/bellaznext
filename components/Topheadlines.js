import React, { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Topheadlines = ({topheadData}) => {
  console.log(topheadData, "topheadDatatopheadData");
  const sortedTopHeadlines =
    topheadData?.page?.homePage?.topHeadlinesPost?.nodes
      .slice(0, 6)
      .flatMap((item) => item?.posts?.nodes)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

      console.log(sortedTopHeadlines, "sortedTopHeadlinessortedTopHeadlinessortedTopHeadlinessortedTopHeadlines");

  // Keep track of categories that have been used
  const usedCategories = new Set();

  const uniqueCategoryPosts = sortedTopHeadlines?.filter((item) => {
      const categories = item.categories.nodes;
      const uniqueCategory = categories.find(
        (category) => !usedCategories.has(category.name)
      );
      if (uniqueCategory) {
        usedCategories.add(uniqueCategory.name);
        return true;
      }
      return false;
    })
    .slice(0, 6);

  console.log(
    sortedTopHeadlines,
    "sortedTopHeadlinessortedTopHeadlinessortedTopHeadlines"
  );

  return (
    <div className="py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 gap-7">
        <div className="w-full max-w-5xl mx-auto md:border-r">
          <div className="flex flex-col justify-center mx-auto md:mx-0">
            <h1 className="text-[25px] font-bold text-black-900 italic">
              {topheadData?.page?.homePage?.topHeadlinesTitle}
            </h1>
            <hr
              className="text-red-800 mr-5"
              style={{
                height: "7px",
                background: `${topheadData?.page?.homePage?.topHeadlineTitleLineColor}`,
              }}
            />
            <br />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
            {uniqueCategoryPosts?.map((item) => (
              <>
              <div key={item.id} className="max-w-md bg-white mb-6">
                {item.categories.nodes.slice(0, 1).map((category) => (
                  <div key={category.id}>
                    <Link href={`/news/${item.slug}`}>
                      <ExportedImage
                        priority={true}
                        src={item?.featuredImage?.node?.sourceUrl}
                        alt={item?.featuredImage?.node?.sourceUrl || ""}
                        width={432}
                        height={293}
                        className="object-cover w-[432px] h-[293px]"
                      />
                    </Link>
                    <p className="text-base font-bold text-red-800 mt-2">
                      {category.name}
                    </p>
                    <Link href={`/news/${item.slug}`}>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-skyBlue">
                        {item?.title}
                      </h5>
                    </Link>
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
                        {item?.author?.node?.name || ""}
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
                ))}
              </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheadlines;
