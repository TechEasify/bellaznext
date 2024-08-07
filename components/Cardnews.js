import { useDialog } from "./DialogContext";
import React from "react";
import FooterTopAd from "./FooterTopAd";
import Link from "next/link";
import Image from "next/image";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const Cardnews = ({dataNav}) => {
  const displayedCategories = new Set();

  if (!dataNav || !dataNav.nodeByUri || !dataNav.nodeByUri.homePage) {
    return <p>No data available</p>;
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl hidden md:block">
      <div className="w-full mx-auto flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-around">
          {dataNav?.nodeByUri?.homePage?.allCategories?.nodes?.slice(0, 3).map((item) => {
            if (displayedCategories.has(item.name)) {
              return null;
            }
            displayedCategories.add(item.name);

            const bottomLineColor = (() => {
              switch (item.name) {
                case "Insights":
                  return dataNav?.nodeByUri?.homePage?.allCategoryBottomLineColor?.block1;
                case "Jewish News":
                  return dataNav?.nodeByUri?.homePage?.allCategoryBottomLineColor?.block2;
                case "music":
                  return dataNav?.nodeByUri?.homePage?.allCategoryBottomLineColor?.block3;
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
                  <h5 className="text-[18px] font-extrabold text-black-900 italic uppercase">
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
        </div>
      </div>
      <FooterTopAd data={dataNav} />
    </div>
  );
};

export default Cardnews;
