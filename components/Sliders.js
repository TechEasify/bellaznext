import { useDialog } from "./DialogContext";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Group3 from "../public/images/Group (3).svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const { bannerData } = useDialog();
  const twitterEmbedCodes = bannerData?.page?.homePage?.twitterEmbedCodes;

  // Extracting the embed codes into an array
  const carouselData = [
    { id: 1, embedCode: twitterEmbedCodes?.twitterEmbedCode1 },
    { id: 2, embedCode: twitterEmbedCodes?.twitterEmbedCode2 },
    { id: 3, embedCode: twitterEmbedCodes?.twitterEmbedCode3 },
    { id: 4, embedCode: twitterEmbedCodes?.twitterEmbedCode4 },
    { id: 5, embedCode: twitterEmbedCodes?.twitterEmbedCode5 },
    { id: 6, embedCode: twitterEmbedCodes?.twitterEmbedCode6 },
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      },
    ],
  };

  return (
    <div className="hidden md:block px-4 py-8 mx-auto max-w-screen-xl">
      <div
        className="px-4 py-8 w-full flex flex-col md:flex-row mx-auto justify-around items-center"
        style={{ background: "#40A6FB" }}
      >
        <div className="mb-8 md:mb-0">
          <h5 className="text-[35px] md:text-[65px] mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            LATEST <br />
            <span className="flex">
              ON{" "}
              <ExportedImage
                style={{ marginLeft: "20px", width: "50px" }}
                priority={true}
                src={Group3}
                alt="vladimirputin"
              />
            </span>{" "}
          </h5>
        </div>
        <div className="w-full md:w-2/3" id="tweet">
          <Slider {...settings}>
            {carouselData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden mx-2" // Added mx-2 for horizontal margin
                style={{ margin: '0 10px' }} // You can adjust the margin as needed
              >
                <div className="p-4">
                  <div
                    className="tweet-embed overflow-hidden max-h-24"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.embedCode }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
