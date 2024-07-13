import { useDialog } from "./DialogContext";
import React, { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import imageTwitter from "../public/images/imageTwitter.svg";
import Group3 from "../public/images/Group (3).svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const ACCESS_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAANYiuQEAAAAAotltTVwd1XSr4N5DScaaJCoqFK0%3D7qzGDbLbL6GvLZjZoMagoPmTeBJRJUVk3TxH68ezEGJGHXZKt5";

const Sliders = () => {
  const { openDialog } = useDialog();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          "https://api.twitter.com/2/tweets?ids=28910294",
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "*",
            },
          }
        );
        console.log(response, "response");
        setTweets(response.data.data); // Assuming Twitter API response is an array of tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  // Sample data for the carousel
  const carouselData = [
    { id: 1, image: imageTwitter, title: "Barcode" },
    { id: 2, image: imageTwitter, title: "Twitter" },
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div
        className="px-4 py-8 w-full flex flex-col md:flex-row mx-auto justify-around items-center"
        style={{ background: "#40A6FB" }}
      >
        <div className="mb-8 md:mb-0">
          <h5 className="text-[35px] md:text-[65px] mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            LATEST <br />{" "}
            <span className="flex">
              ON{" "}
              <ExportedImage
                style={{ marginLeft: "20px" }}
                priority={true}
                src={Group3}
                alt="vladimirputin"
                className="object-cover w-[50px]"
              />
            </span>{" "}
          </h5>
        </div>
        <div className="w-full md:w-2/3">
          <Slider {...settings}>
            {carouselData.map((item) => (
              <div key={item.id} className="px-4">
                <ExportedImage src={item.image} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
