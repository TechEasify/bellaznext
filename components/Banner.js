import { useDialog } from "./DialogContext";
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
import Link from "next/link";

const SkeletonLoader = () => (
  <>
    <div
      className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800"
      style={{ background: "#002d73" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            {[...Array(1)].map((_, index) => (
              <div key={index} className="mb-6">
                <div className="h-4 bg-red-800 rounded w-32 mb-2 animate-pulse"></div>
                <div className="h-8 bg-black-900 rounded w-2/3 mb-2 animate-pulse"></div>
                <div className="h-16 bg-gray-800 rounded mb-3 animate-pulse"></div>
                <div className="h-64 bg-gray-300 rounded mb-3 animate-pulse"></div>
              </div>
            ))}
            <div className="flex items-center mb-4">
              <div className="h-6 w-1 bg-blue-500 rounded-l animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded-r w-24 ml-1 animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded-full w-6 mx-1 animate-pulse"></div>
              <div className="h-6 bg-blue-500 rounded w-20 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-10 bg-gray-200 rounded mb-4 animate-pulse"></div>
          <div
            className="block max-w-sm p-6 rounded-lg shadow animate-pulse"
            style={{
              background: "linear-gradient(to bottom right, #002D73, #40A6FB)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <div className="h-4 bg-white rounded w-24 mb-1 animate-pulse"></div>
                <div className="h-6 bg-white rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-16 w-16 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center mb-2">
              <div className="h-4 w-4 bg-white rounded-full mr-2 animate-pulse"></div>
              <div className="h-4 bg-white rounded w-48 animate-pulse"></div>
            </div>
            <div className="flex justify-around items-center mb-6">
              <div className="h-8 bg-white rounded w-12 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
              <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
              <div className="h-4 bg-white rounded w-16 animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="h-4 bg-white rounded w-32 animate-pulse"></div>
              <div className="h-6 w-6 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center text-center">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <div className="h-4 bg-white rounded w-12 mb-1 animate-pulse"></div>
                  <div className="h-8 w-8 bg-white rounded-full animate-pulse mx-auto mb-1"></div>
                  <div className="h-4 bg-white rounded w-12 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex mt-5 justify-between">
              <div className="mr-2">
                <div className="h-4 bg-red-800 rounded w-20 mb-1 animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-16 w-16 bg-gray-300 rounded object-contain animate-pulse"></div>
            </div>
          ))}
          <hr className="my-6" />
        </div>
      </div>
    </div>
  </>
);

const Banner = () => {
  const { openDialog, bannerData } = useDialog();
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let latitude, longitude;

        const successCallback = async (position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_FORCAST_KEY}`
          );
          const forecastResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_FORCAST_KEY}`
          );

          setWeatherData(weatherResponse.data);

          // Extract the next 5 time slots from the forecast data
          const hourlyData = forecastResponse.data.list
            .slice(0, 5)
            .map((slot) => ({
              time: new Date(slot.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              temp: (((slot.main.temp - 273.15) * 9) / 5 + 32).toFixed(2),
              image: getWeatherImage(slot.weather[0].icon),
            }));

          setHourlyForecast(hourlyData);
          setLoading(false);
        };

        const errorCallback = (error) => {
          console.error("Error fetching location:", error.message);
          // If location access is denied or error occurs, default to New York coordinates
          latitude = 40.7128; // New York latitude
          longitude = -74.006; // New York longitude

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_FORCAST_KEY}`
            )
            .then((weatherResponse) => {
              console.log(weatherResponse, "weatherResponse");
              setWeatherData(weatherResponse.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error.message);
              setLoading(false);
            });
        };

        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } catch (error) {
        console.error(
          "Error fetching the weather data",
          error.response ? error.response.data : error.message
        );
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherImage = (icon) => {
    switch (icon) {
      case "01d":
        return image_sun;
      case "01n":
        return image_sun1;
      case "02d":
        return image_sun2;
      case "02n":
        return image_sun3;
      default:
        return image_sun4;
    }
  };

  console.log(weatherData, "weatherData");

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!weatherData) {
    return <p>Failed to fetch weather data</p>;
  }

  const kelvinToFahrenheit = (kelvin) =>
    (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);

  const { main, weather, wind, name, sys, clouds } = weatherData;
  const { description } = weather[0];
  const tempF = kelvinToFahrenheit(main.temp);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date
      .toLocaleDateString("en-US", options)
      .replace(/(\d+)(, \d+)/, "$1th$2");
  };

  const date = formatDate(weatherData.dt);

  const timeSlots = [
    { time: "2 pm", temp: 72, image: image_sun },
    { time: "3 pm", temp: 70, image: image_sun1 },
    { time: "4 pm", temp: 69, image: image_sun2 },
    { time: "5 pm", temp: 75, image: image_sun3 },
    { time: "6 pm", temp: 76, image: image_sun4 },
  ];

  const sortedPosts = bannerData?.page?.homePage?.heroSection?.heroPostCategory?.nodes
    .flatMap((item) => item.posts.nodes)
    .filter((post) =>
      post.categories.nodes.some(
        (category) => category.name === "Breaking News"
      )
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const sortedPostss = bannerData?.page?.homePage?.heroSection?.heroSidebarPosts?.nodes
    .flatMap((item) => item.posts.nodes)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(sortedPostss, "sortedPostss");

  console.log(sortedPosts, "sortedPosts");

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center">
              {sortedPosts?.map(
                (post) => (
                  console.log(post, "post"),
                  (
                    <div key={post.id}>
                      <p className="text-base font-bold text-red-800">
                        {post.categories.nodes[0]?.name}
                      </p>
                      <Link
                        href={{
                          pathname: `/news/${post.slug}`,
                        }}
                        passHref
                      >
                        <h1 className="text-[30px] text-b.lack-900 font-bold hover:text-skyBlue">
                          {post.title}
                        </h1>
                      </Link>
                      <Link
                        href={{
                          pathname: `/news/${post.slug}`,
                        }}
                        passHref
                      >
                        <p
                          className="text-[15px] text-base font-bold text-gray-800 mb-3 cursor-pointer"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
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
                      {post.featuredImage?.node?.sourceUrl && (
                        <ExportedImage
                          priority={true}
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt={post?.featuredImage?.node?.altText}
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
                  )
                )
              )}
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
                    Chance of rain {main.humidity}%
                  </p>
                  <h5 className="text-xl text-white font-medium">
                    {description.charAt(0).toUpperCase() + description.slice(1)}
                  </h5>
                </div>
                <ExportedImage
                  src={sun}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mr-2 object-cover"
                />
              </div>
              <div className="flex items-center">
                <ExportedImage
                  src={location}
                  alt="Location"
                  className="h-5 w-5 mr-2 object-cover"
                />
                <p className="text-normal tracking-tight text-white">
                  {name}, {sys.country}
                </p>
              </div>
              <div
                className="flex items-center mt-2"
                style={{
                  justifyContent: "space-around",
                  marginBottom: "20px",
                }}
              >
                <p className="font-bold text-white mr-px text-base">
                  {tempF}°F
                </p>
                <ExportedImage
                  src={mdi_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">{clouds.all}%</p>
                <ExportedImage
                  src={typcn_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">
                  {(main.feels_like - 273.15).toFixed(1)}°C
                </p>
                <ExportedImage
                  src={wind_weather}
                  alt="Wind"
                  className="h-4 w-4"
                />
                <p className="font-xs text-white text-sm">{wind.speed} mp/h</p>
              </div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "30px" }}
              >
                <p className="text-white mt-4 font-medium">{date}</p>
                <ExportedImage
                  src={jam_menu}
                  alt="Toggle"
                  className="h-6 w-6"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-center">
                  {hourlyForecast.map((slot, index) => (
                    <div
                      key={index}
                      style={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p className="text-xs text-white mr-2 mb-1">
                        {slot.time}
                      </p>
                      <ExportedImage
                        src={slot.image}
                        alt="Sun"
                        style={{ margin: "0 auto" }}
                        className="h-7 w-7"
                      />
                      <p className="text-xs text-white mt-1">{slot.temp}°F</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {sortedPostss?.slice(0, 2).map(
              (item) => (
                console.log(item, "item banner"),
                (
                  <>
                    <div className="flex mt-5 justify-between">
                      <div className="mr-2">
                        <p className="text-[12px] font-bold text-red-800">
                          {item.categories.nodes[0].name}
                        </p>
                        <Link
                          href={{
                            pathname: `/news/${item.slug}`,
                          }}
                          passHref
                        >
                          <p className="text-[15px] font-semibold text-gray-800 mb-3 hover:text-skyBlue">
                            {item.title}
                          </p>
                        </Link>
                      </div>
                      {item.featuredImage?.node?.sourceUrl && (
                        <ExportedImage
                          src={item.featuredImage.node.sourceUrl}
                          alt={item.featuredImage.node.sourceUrl}
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
