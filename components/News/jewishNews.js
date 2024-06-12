import ExportedImage from "next-image-export-optimizer";
import React, { useState } from "react";
import Screenshot1 from "../../public/images/Screenshot1.svg";
import ferrari from "../../public/images/ferrari.svg";
import Rectangle367 from "../../public/images/Rectangle367.svg";
import Group from "../../public/images/Group.svg";
import Group1 from "../../public/images/Group (1).svg";
import Group2 from "../../public/images/Group (2).svg";
import Group3 from "../../public/images/Group (3).svg";
import pexelstara1 from "../../public/images/pexelstara1.svg";
import jeuol4aprinceharry from "../../public/images/jeuol4aprinceharry.svg";
import andreas from "../../public/images/andreas.svg";
import Newscard from "./Newscard";

const CategoryjewishNews = ({ nodeByUri }) => {
  const [numToShow, setNumToShow] = useState(1);

  const handleViewMore = () => {
    setNumToShow(nodeByUri.posts.nodes.length);
  };
  return (
    <>
      <div className="px-4 py-16" style={{ background: "#F2F2F2" }}>
        <ExportedImage
          style={{ margin: "0 auto" }}
          priority={true}
          src={Screenshot1}
          alt="PR_01CFA"
        />
      </div>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            {nodeByUri?.posts?.nodes?.slice(0, numToShow).map(
              (item) => (
                console.log(item.featuredImage.node.sourceUrl, "item Insights"),
                (
                  <>
                    <div className="flex flex-col md:flex-row mb-5">
                      <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                        <ExportedImage
                          priority={true}
                          src={item?.featuredImage?.node?.sourceUrl}
                          alt="ferrari4"
                          width={357}
                          height={261}
                          style={{ width: "357px", height: "261px" }}
                        />
                      </div>
                      <div className="ml-0 md:ml-5 w-full md:w-3/5">
                        <p
                          className="text-base font-bold text-red-800"
                          style={{
                            background: "rgb(87, 160, 238)",
                            // background: `${nodeByUri.categoryTamplate.insightTamplate.insightTitleBackgroundColor}`,
                            color: "#fff",
                            padding: "0 10px",
                            width: "150px",
                            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "2px",
                          }}
                        >
                          {nodeByUri.name}
                        </p>
                        <h5 className="text-[20px] text-black-900 font-bold">
                          {item.title}
                        </h5>
                        <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                          <span
                            className="text-[12px] font-extrabold mr-1"
                            style={{ color: "#40A6FB" }}
                          >
                            |
                          </span>
                          By
                          <span
                            className="font-extrabold ml-1"
                            style={{ color: "#40A6FB" }}
                          >
                            {item.author.node.name}
                            <span
                              className="text-[25px] font-extrabold mx-1"
                              style={{ color: "#40A6FB" }}
                            >
                              .
                            </span>
                          </span>
                          6 MIN READ
                        </p>
                        <p
                          className="text-[15px] text-base font-normal text-gray-600 mb-3"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                    <hr className="my-5" />
                  </>
                )
              )
            )}
            {/* <hr className="my-5" />
            <div className="flex flex-col md:flex-row mb-5">
              <div className="mr-5 mb-5 md:mb-0">
                <ExportedImage
                  priority={true}
                  src={pexelstara1}
                  alt="pexelstara1"
                />
              </div>
              <div className="ml-0 md:ml-5 w-full md:w-3/5">
                <p className="text-[12px] text-base font-bold text-red-800">POLITICS</p>
                <h5 className="text-[20px] text-black-900 font-bold">
                  Ferrari F1 boss makes savage Mercedes dig after constructors'
                  setback.
                </h5>
                <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[12px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold ml-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[25px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
                <p className="text-[15px] text-base font-normal text-gray-600 mb-3">
                  President Vladimir Putin said Wednesday that Russia is ready
                  to use nuclear weapons if its sovereignty or independence is
                  threatened, issuing another blunt warning to the West
                </p>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex flex-col md:flex-row mb-5">
              <div className="mr-5 mb-5 md:mb-0">
                <ExportedImage
                  priority={true}
                  src={jeuol4aprinceharry}
                  alt="ferrari"
                />
              </div>
              <div className="ml-0 md:ml-5 w-full md:w-3/5">
                <p className="text-[12px] text-base font-bold text-red-800">POLITICS</p>
                <h5 className="text-[20px] text-black-900 font-bold">
                  Ferrari F1 boss makes savage Mercedes dig after constructors'
                  setback.
                </h5>
                <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[12px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold ml-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[25px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
                <p className="text-[15px] text-base font-normal text-gray-600 mb-3">
                  President Vladimir Putin said Wednesday that Russia is ready
                  to use nuclear weapons if its sovereignty or independence is
                  threatened, issuing another blunt warning to the West
                </p>
              </div>
            </div>
            <hr className="my-5" />
            <div className="text-[12px] flex flex-col md:flex-row mb-5">
              <div className="mr-5 mb-5 md:mb-0">
                <ExportedImage priority={true} src={andreas} alt="andreas" />
              </div>
              <div className="ml-0 md:ml-5 w-full md:w-3/5">
                <p className="text-[12px] text-base font-bold text-red-800">POLITICS</p>
                <h5 className="text-[20px] text-black-900 font-bold">
                  Ferrari F1 boss makes savage Mercedes dig after constructors'
                  setback.
                </h5>
                <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                  <span
                    className="text-[12px] font-extrabold mr-1"
                    style={{ color: "#40A6FB" }}
                  >
                    |
                  </span>
                  By
                  <span
                    className="font-extrabold ml-1"
                    style={{ color: "#40A6FB" }}
                  >
                    Linah Absteen
                    <span
                      className="text-[25px] font-extrabold mx-1"
                      style={{ color: "#40A6FB" }}
                    >
                      .
                    </span>
                  </span>
                  6 MIN READ
                </p>
                <p className="text-[15px] text-base font-normal text-gray-600 mb-3">
                  President Vladimir Putin said Wednesday that Russia is ready
                  to use nuclear weapons if its sovereignty or independence is
                  threatened, issuing another blunt warning to the West
                </p>
              </div>
            </div> */}
            <button className="viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center" onClick={handleViewMore}>
              VIEW MORE
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <ExportedImage
              className="mb-2 w-full h-auto max-h-96"
              priority={true}
              src={Rectangle367}
              alt="Rectangle367"
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
            <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
            <hr
              className="text-red-800 my-3"
              style={{ height: "3px", background: "black" }}
            />
            <div className="flex justify-around mt-5 mb-8">
              <ExportedImage
                src={Group}
                alt="Partly Cloudy"
                className="h-13 w-13"
              />
              <ExportedImage
                src={Group1}
                alt="Partly Cloudy"
                className="h-13 w-13"
              />
              <ExportedImage
                src={Group2}
                alt="Partly Cloudy"
                className="h-13 w-13"
              />
              <ExportedImage
                src={Group3}
                alt="Partly Cloudy"
                className="h-13 w-13"
              />
            </div>
          </div>
        </div>
      </div>
      <Newscard />
    </>
  );
};

export default CategoryjewishNews;