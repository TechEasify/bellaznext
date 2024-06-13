import { useDialog } from "./DialogContext";
import bannerImg from "../public/images/banner1.webp";
import vladimirputin from "../public/images/vladimir-putin.svg";
import mdi_weather from "../public/images/mdi_weather.svg";
import typcn_weather from "../public/images/typcn_weather.svg";
import jam_menu from "../public/images/jam_menu.svg";
import wind_weather from "../public/images/wind_weather.svg";
import image_sun1 from "../public/images/image_sun1.svg";
import image_sun from "../public/images/image_sun.svg";
import image_sun2 from "../public/images/image_sun2.svg";
import image_sun3 from "../public/images/image_sun3.svg";
import image_sun4 from "../public/images/image_sun4.svg";
import ana_flavia from "../public/images/ana-flavia.svg";
import mike_von from "../public/images/mike_von.svg";
import location from "../public/images/location.svg";
import sun from "../public/images/sun.svg";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import axios from "axios";

const Banner = ({ data }) => {
  // const { openDialog } = useDialog();
  console.log(data, "data props");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const response = await axios.get(
  //         // `https://api.openweathermap.org/data/2.5/forecast?lat={LATITUDE}&lon={LONGITUDE}&appid={YOUR_API_KEY}&units=imperial`
  //         `https://api.openweathermap.org/data/2.5/forecast?lat=38.9072&lon=-77.0369&appid=YOUR_DUMMY_API_KEY&units=imperial`
  //       );
  //       setWeatherData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching the weather data", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchWeatherData();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (!weatherData) {
  //   return <p>Failed to fetch weather data</p>;
  // }

  const sortedPosts = data.page.homePage.heroSection.heroPostCategory.nodes
    .flatMap((item) => item.posts.nodes)
    .filter((post) =>
      post.categories.nodes.some(
        (category) => category.name === "Breaking News"
      )
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const sortedPostss = data.page.homePage.heroSection.heroSidebarPosts.nodes
    .flatMap((item) => item.posts.nodes)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(sortedPostss, "sortedPostss");

  console.log(sortedPosts, "sortedPosts");

  // const hourlyForecast = weatherData.list.slice(0, 6);

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center">
              {sortedPosts.map((post) => (
                <div key={post.id}>
                  <p className="text-base font-bold text-red-800">
                    {post.categories.nodes[0]?.name}
                  </p>
                  <h1 className="text-[30px] text-black-900 font-bold">
                    {post.title}
                  </h1>
                  <p
                    className="text-[15px] text-base font-bold text-gray-800 mb-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
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
                  {post.featuredImage?.node?.srcSet && (
                    <ExportedImage
                      priority={true}
                      src={post.featuredImage.node.srcSet}
                      alt={post.featuredImage.node.altText || "Featured Image"}
                      width={150}
                      height={150}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                      }}
                    />
                  )}
                </div>
              ))}
              {/* <p className="text-base font-bold text-red-800">POLITICS</p>
              <h1 className="text-[30px] text-black-900 font-bold">
                Who will become america's last hope
              </h1>
              <p className="text-[15px] text-base font-bold text-gray-800 mb-3">
                Speaking after the race, Vasseur praised Leclerc's tactical
                thinking in the closing stages of the race before jokingly
                pointing the finger at Mercedes.
              </p> */}
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <input
              style={{ width: "100%", marginBottom: "10px" }}
              id="FullName"
              type="text"
              placeholder="Search"
            />
            {/* <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              style={{
                background:
                  "linear-gradient(to bottom right, #002D73, #40A6FB)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-xs tracking-tight text-white">
                    Chance of rain {hourlyForecast[0].pop * 100}%
                  </p>
                  <h5 className="text-xl text-white font-medium">
                    {hourlyForecast[0].weather[0].description}
                  </h5>
                </div>
                <ExportedImage
                  src={`/icons/${hourlyForecast[0].weather[0].icon}.png`}
                  alt={hourlyForecast[0].weather[0].description}
                  className="h-13 w-13 mr-2"
                />
              </div>
              <div className="flex items-center">
                <ExportedImage
                  src="/icons/location.png"
                  alt="Location"
                  className="h-5 w-5 mr-2"
                />
                <p className="text-normal tracking-tight text-white">
                  {weatherData.city.name}, {weatherData.city.country}
                </p>
              </div>
              <div
                className="flex items-center mt-2"
                style={{
                  justifyContent: "space-around",
                  marginBottom: "20px",
                }}
              >
                <p className="font-bold text-white mr-px" mr-1>
                  {Math.round(hourlyForecast[0].main.temp)}°F
                </p>
                <ExportedImage
                  src="/icons/mdi_weather.png"
                  alt="Cloud"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">
                  {hourlyForecast[0].clouds.all}%
                </p>
                <ExportedImage
                  src="/icons/typcn_weather.png"
                  alt="Cloud"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">
                  {hourlyForecast[0].main.humidity}%
                </p>
                <ExportedImage
                  src="/icons/wind_weather.png"
                  alt="Wind"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">
                  {Math.round(hourlyForecast[0].wind.speed)} mph
                </p>
              </div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "30px" }}
              >
                <p className="text-white mt-4 font-medium">
                  {new Date(hourlyForecast[0].dt_txt).toLocaleDateString()}
                </p>
                <ExportedImage
                  src="/icons/jam_menu.png"
                  alt="Toggle"
                  className="h-6 w-6"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-center">
                  {hourlyForecast.map((forecast, index) => (
                    <div key={index}>
                      <p className="text-sm text-white mr-2 mb-1">
                        {new Date(forecast.dt_txt).getHours()} pm
                      </p>
                      <ExportedImage
                        src={`/icons/${forecast.weather[0].icon}.png`}
                        alt={forecast.weather[0].description}
                        style={{ margin: "0 auto" }}
                        className="h-7 w-7"
                      />
                      <p className="text-sm text-white mt-1">
                        {Math.round(forecast.main.temp)}°F
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              style={{
                background:
                  "linear-gradient(to bottom right, #002D73, #40A6FB)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-xs tracking-tight text-white">
                    Chance of rain 60%
                  </p>
                  <h5 className="text-xl text-white font-medium">
                    Partly Cloudy
                  </h5>
                </div>
                <ExportedImage
                  src={sun}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mr-2"
                />
              </div>
              <div className="flex items-center">
                <ExportedImage
                  src={location}
                  alt="Location"
                  className="h-5 w-5 mr-2"
                />
                <p className="text-normal tracking-tight text-white">
                  Washington DC, USA
                </p>
              </div>
              <div
                className="flex items-center mt-2"
                style={{
                  justifyContent: "space-around",
                  marginBottom: "20px",
                }}
              >
                <p className="font-bold text-white mr-px" mr-1>
                  72°F
                </p>
                <ExportedImage
                  src={mdi_weather}
                  alt="Cloud"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">10%</p>
                <ExportedImage
                  src={typcn_weather}
                  alt="Cloud"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">0.5</p>
                <ExportedImage
                  src={wind_weather}
                  alt="Sun"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white">124 mp/h</p>
              </div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "30px" }}
              >
                <p className="text-white mt-4 font-medium">August, 10th 2020</p>
                <ExportedImage
                  src={jam_menu}
                  alt="Toggle"
                  className="h-6 w-6"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-center">
                  <div>
                    <p className="text-sm text-white mr-2 mb-1">2 pm</p>
                    <ExportedImage
                      src={image_sun}
                      alt="Sun"
                      style={{ margin: "0 auto" }}
                      className="h-7 w-7"
                    />
                    <p className="text-sm text-white mt-1">72°F</p>
                  </div>
                  <div>
                    <p className="text-sm text-white mr-2 mb-1">3 pm</p>
                    <ExportedImage
                      src={image_sun1}
                      alt="Sun"
                      style={{ margin: "0 auto" }}
                      className="h-7 w-7"
                    />
                    <p className="text-sm text-white mt-1">70°F</p>
                  </div>
                  <div>
                    <p className="text-sm text-white mr-2 mb-1">4 pm</p>
                    <ExportedImage
                      src={image_sun2}
                      alt="Sun"
                      style={{ margin: "0 auto" }}
                      className="h-7 w-7"
                    />
                    <p className="text-sm text-white mt-1">69°F</p>
                  </div>
                  <div>
                    <p className="text-sm text-white mr-2 mb-1">5 pm</p>
                    <ExportedImage
                      src={image_sun3}
                      alt="Sun"
                      style={{ margin: "0 auto" }}
                      className="h-7 w-7"
                    />
                    <p className="text-sm text-white mt-1">75°F</p>
                  </div>
                  <div>
                    <p className="text-sm text-white mr-2 mb-1">6 pm</p>
                    <ExportedImage
                      src={image_sun4}
                      alt="Sun"
                      style={{ margin: "0 auto" }}
                      className="h-7 w-7"
                    />
                    <p className="text-sm text-white mt-1">76°F</p>
                  </div>
                </div>
              </div>
            </div>

            {sortedPostss.slice(0, 2).map(
              (item) => (
                console.log(item.featuredImage.node.srcSet, "item"),
                (
                  <>
                    <div className="flex mt-5 justify-between">
                      <div className="mr-2">
                        <p className="text-[12px] font-bold text-red-800">
                          {item.categories.nodes[0].name}
                        </p>
                        <p className="text-[15px] font-semibold text-gray-800 mb-3">
                          {item.title}
                        </p>
                      </div>
                      {item.featuredImage?.node?.srcSet && (
                        <ExportedImage
                          src={item.featuredImage.node.srcSet}
                          alt={item.featuredImage.node.srcSet}
                          className="h-13 w-13 mr-2 object-contain"
                          width={90}
                          height={87}
                        />
                      )}
                    </div>
                  </>
                )
              )
            )}
            <hr />
            {/* <div className="flex mt-5">
              <div className="mr-2">
                <p className="text-[12px] font-bold text-red-800">EUROPE</p>
                <p className="text-[15px] font-semibold text-gray-800 mb-3">
                  Our DeSantis and Haley Reporters switched places Her’s What
                  They Found.
                </p>
              </div>
              <ExportedImage
                src={mike_von}
                alt="Partly Cloudy"
                className="h-13 w-13 mr-2"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
