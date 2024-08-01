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
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import Group4 from "../public/images/Group4.svg";
import Status208 from "../public/images/Status208.svg";
import Group209 from "../public/images/Group209.svg";
import mike_von from "../public/images/mike_von.svg";
import location from "../public/images/location.svg";
import sun from "../public/images/sun.svg";
import ExportedImage from "next-image-export-optimizer";
import Primarylogo from "../public/images/Primarylogo.svg";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import axios from "axios";
import Link from "next/link";
import Topheadlines from "./Topheadlines";
import Ads from "./googleAds/Ads";
import Image from "next/image";
import { useRouter } from "next/router";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const SkeletonLoader = () => (
  <div className="spinner">
    <Image
      priority={true}
      loader={customLoader}
      src={Primarylogo}
      alt="Loading..."
      className="blinking-image"
      width={250}
      height={54}
    />
  </div>
);

const Banner = () => {
  const { bannerData, searchData } = useDialog();
  const { iconDataResult, dataIcon } = useHeader();
  const router = useRouter();
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const displayedCategories = new Set();
  const [searchTerm, setSearchTerm] = useState("");

  console.log(iconDataResult, "bannerDatabannerDatabannerData");

  const kelvinToFahrenheit = (kelvin) =>
    (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);

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

          const hourlyData = forecastResponse.data.list
            .slice(0, 5)
            .map((slot) => ({
              time: new Date(slot.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              temp: kelvinToFahrenheit(slot.main.temp),
              image: getWeatherImage(slot.weather[0].icon),
            }));

          setHourlyForecast(hourlyData);
          setLoading(false);
        };

        const errorCallback = (error) => {
          console.error("Error fetching location:", error.message);
          latitude = 40.7128; // New York latitude
          longitude = -74.006; // New York longitude

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_FORCAST_KEY}`
            )
            .then((weatherResponse) => {
              setWeatherData(weatherResponse.data);

              const defaultHourlyData = [
                { time: "2 pm", temp: 72, image: image_sun },
                { time: "3 pm", temp: 70, image: image_sun1 },
                { time: "4 pm", temp: 69, image: image_sun2 },
                { time: "5 pm", temp: 75, image: image_sun3 },
                { time: "6 pm", temp: 76, image: image_sun4 },
              ];

              setHourlyForecast(defaultHourlyData);
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
        return image_sun4; // Ensure this fallback image is valid
    }
  };

  console.log(weatherData, "weatherData");

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!weatherData) {
    return <p>Failed to fetch weather data</p>;
  }

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

  const sortedPosts =
    bannerData?.page?.homePage?.heroSection?.heroPostCategory?.nodes
      .flatMap((item) => item.posts.nodes)
      .filter((post) => post.categories.nodes.some((category) => category.name))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  const sortedPostss =
    bannerData?.page?.homePage?.heroSection?.heroSidebarPosts?.nodes
      .flatMap((item) => item.posts.nodes)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleSearch = (event) => {
    event.preventDefault();

    const searchWords = searchTerm.toLowerCase().split(" ");
    localStorage.setItem("searchTerm", searchTerm); // Store the search term
    console.log(searchWords, "searchWords");

    const post = searchData?.categories?.nodes
      .flatMap((item) => item.posts.nodes)
      .find((p) =>
        searchWords.every((word) => p?.title?.toLowerCase().includes(word))
      );

    if (post) {
      router.push(`/search`);
      console.log(post, "post search");
    } else {
      router.push("/search");
    }
  };

  console.log(sortedPostss, "sortedPostss");

  console.log(sortedPosts, "sortedPosts");

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col justify-center">
              {sortedPosts?.slice(0, 1).map((post) => {
                console.log(post, "postpostpostpostpostpostpost");
                const contentText = post?.content
                  ? post?.content?.replace(/(<([^>]+)>)/gi, "") // Remove HTML tags
                  : ""; // Fallback if content is not available

                const wordCount = contentText
                  ? contentText?.split(" ").length
                  : 0;
                const readingTime =
                  wordCount > 0 ? Math.ceil(wordCount / 250) : 0; // Assuming 250 words per minute

                return (
                  <div key={post.id}>
                    <p className="text-[15px] text-base font-semibold text-red-800 tracking-widest">
                      {post.categories.nodes[0]?.name}
                    </p>
                    <Link
                      href={{
                        pathname: `/news/${post.slug}`,
                      }}
                      passHref
                    >
                      <h1 className="text-[30px] text-black-900 font-bold hover:text-skyBlue mb-2">
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
                        className="text-[15px] text-base text-gray-800 mb-3 cursor-pointer"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                    </Link>
                    <p className="text-[15px] text-base text-gray-800 mb-4 font-extralight">
                      <span
                        className="text-[20px] w-[3px] h-[18px] font-extrabold mr-1"
                        style={{ color: "#40A6FB" }}
                      >
                        |
                      </span>
                      By
                      <span
                        className="font-extrabold ml-1 text-[15px]"
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
                    {post.featuredImage?.node?.sourceUrl && (
                      <Link
                        href={{
                          pathname: `/news/${post.slug}`,
                        }}
                        passHref
                      >
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="object-cover"
                          src={post?.featuredImage?.node?.sourceUrl}
                          alt={post?.featuredImage?.node?.altText}
                          width={150}
                          height={150}
                          unoptimized
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "500px",
                          }}
                        />
                      </Link>
                    )}
                  </div>
                );
              })}

              <Topheadlines
                topheadData={bannerData}
                displayedCategories={displayedCategories}
              />
            </div>
          </div>
          <div className="hidden md:block w-full max-w-3xl mx-auto">
            <div className="relative hidden md:block w-full mb-2">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zm-5.442 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
              </svg>
              <input
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                id="FullName"
                type="text"
                placeholder="Zmanim"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  console.log(e, "eeeeee");
                  if (e.key === "Enter") {
                    handleSearch(e);
                  }
                }}
              />
            </div>

            {/* <div
              className="hidden md:block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
                <Image
                  priority={true}
                  loader={customLoader}
                  src={sun}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mr-2 object-cover"
                />
              </div>
              <div className="flex items-center">
                <Image
                  priority={true}
                  loader={customLoader}
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
                <Image
                  priority={true}
                  loader={customLoader}
                  src={mdi_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">{clouds.all}%</p>
                <Image
                  priority={true}
                  loader={customLoader}
                  src={typcn_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">
                  {(main.feels_like - 273.15).toFixed(1)}°C
                </p>
                <Image
                  priority={true}
                  loader={customLoader}
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
                <Image
                  priority={true}
                  loader={customLoader}
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
                      <Image
                        priority={true}
                        loader={customLoader}
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
            </div> */}

            <div
              className="hidden md:block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
                <Image
                  priority={true}
                  loader={customLoader}
                  src={sun}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mr-2 object-cover"
                />
              </div>
              <div className="flex items-center">
                <Image
                  priority={true}
                  loader={customLoader}
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
                <Image
                  priority={true}
                  loader={customLoader}
                  src={mdi_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">{clouds.all}%</p>
                <Image
                  priority={true}
                  loader={customLoader}
                  src={typcn_weather}
                  alt="Cloud"
                  className="h-4 w-4 object-cover"
                />
                <p className="font-xs text-white text-sm">
                  {(main.feels_like - 273.15).toFixed(1)}°C
                </p>
                <Image
                  priority={true}
                  loader={customLoader}
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
                <Image
                  priority={true}
                  loader={customLoader}
                  src={jam_menu}
                  alt="Toggle"
                  className="h-6 w-6"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center text-center">
                  {hourlyForecast.length > 0 ? (
                    hourlyForecast.map((slot, index) => (
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
                        <Image
                          priority={true}
                          loader={customLoader}
                          src={slot.image}
                          alt="Weather Icon"
                          style={{ margin: "0 auto" }}
                          className="h-7 w-7"
                        />
                        <p className="text-xs text-white mt-1">{slot.temp}°F</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-white">
                      No hourly forecast data available.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl mx-auto mt-5">
              <p className="text-[22px] font-bold text-black-900 italic">
                {bannerData?.page?.homePage?.topHeadlineSidebarTitle}
              </p>
              <hr
                className="text-red-800"
                style={{
                  height: "7px",
                  background: `${bannerData?.page?.homePage?.topHeadlineSidebarTitleLineColor}`,
                }}
              />

              {bannerData?.page?.homePage?.topHeadlineSidebarPosts?.nodes
                .slice()
                .sort((a, b) => (a.title < b.title ? 1 : -1))
                .slice(0, 2)
                .map((side) => {
                  console.log(side, "sidesidesidesidesideside");
                  if (displayedCategories.has(side.name)) return null; // Skip if already displayed
                  displayedCategories.add(side.name); // Add category to set

                  return (
                    <div className="mt-5 mb-5" key={side.name}>
                      {side.posts.nodes
                        .slice()
                        .sort((a, b) => (a.title < b.title ? 1 : -1))
                        .slice(0, 2)
                        .map((itemdata) => (
                          <div key={itemdata.slug}>
                            <div className="flex justify-between align-center">
                              <div className="mr-2 w-56 mb-2">
                                <p className="text-[12px] font-bold text-red-800 tracking-widest uppercase">
                                  {side.name}
                                </p>
                                <Link
                                  href={{
                                    pathname: `/news/${itemdata.slug}`,
                                  }}
                                  passHref
                                >
                                  <p className="text-[16px] font-semibold text-black-800 hover:text-skyBlue">
                                    {itemdata.title}
                                  </p>
                                </Link>
                              </div>
                              {itemdata?.featuredImage?.node?.sourceUrl ? (
                                <Link
                                  href={{
                                    pathname: `/news/${itemdata.slug}`,
                                  }}
                                  passHref
                                >
                                  <Image
                                    priority={true}
                                    loader={customLoader}
                                    src={itemdata.featuredImage.node.sourceUrl}
                                    alt={itemdata.title}
                                    className="object-cover w-[90px] h-[87px] mr-2"
                                    width={90}
                                    height={87}
                                  />
                                </Link>
                              ) : (
                                <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center mb-5">
                                  No Image
                                </div>
                              )}
                            </div>
                            <hr className="m-3" />
                          </div>
                        ))}
                    </div>
                  );
                })}
              <div className="flex mt-5">
                {bannerData?.page?.homePage?.topHeadlineSidebarFirstAd
                  ?.topHeadlineFirstAd?.node?.sourceUrl ? (
                  <Link
                    href={{
                      pathname:
                        bannerData?.page?.homePage?.topHeadlineSidebarFirstAd
                          ?.topHeadlineFirstAdLink,
                    }}
                    passHref
                    target="_blank"
                  >
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        bannerData.page.homePage.topHeadlineSidebarFirstAd
                          .topHeadlineFirstAd.node.sourceUrl
                      }
                      alt="Partly Cloudy"
                      className="object-cover w-[318px] h-[107px] mr-2"
                      width={318}
                      height={107}
                    />
                  </Link>
                ) : (
                  <Ads
                    className=""
                    style={{
                      display: "block",
                      width: "318px",
                      height: "107px",
                      margin: "0 auto",
                    }}
                    adClient="ca-pub-3209848804552918"
                    adSlot="9293720177"
                  />
                )}
              </div>

              <hr className="mt-5" />

              {bannerData?.page?.homePage?.topHeadlineSidebarSinglePosts?.nodes
                .slice()
                .sort((a, b) => (a.title < b.title ? 1 : -1))
                .slice(0, 1)
                .map(
                  (side) => (
                    console.log(side, "side"),
                    (
                      <div className="flex justify-between mt-5 mb-5">
                        {side.posts.nodes
                          .slice()
                          .sort((a, b) => (a.title < b.title ? 1 : -1)) // Sorting in descending order based on the title (or any other property)
                          .slice(0, 1) // Limiting to only one item
                          .map(
                            (itemdata) => (
                              console.log(
                                itemdata.featuredImage?.node?.srcSet,
                                "itemdata"
                              ),
                              (
                                <>
                                  <div className="mr-2">
                                    <p className="tracking-widest text-[12px] font-semibold text-red-800 uppercase">
                                      {side.name}
                                    </p>
                                    <Link
                                      href={{
                                        pathname: `/news/${itemdata.slug}`,
                                      }}
                                      passHref
                                    >
                                      <p className="text-[15px] font-semibold text-black-800 mb-3 hover:text-skyBlue">
                                        {itemdata.title}
                                      </p>
                                    </Link>
                                  </div>
                                  {itemdata?.featuredImage?.node?.sourceUrl ? (
                                    <Link
                                      href={{
                                        pathname: `/news/${itemdata.slug}`,
                                      }}
                                      passHref
                                    >
                                      <Image
                                        priority={true}
                                        loader={customLoader}
                                        src={
                                          itemdata.featuredImage.node.sourceUrl
                                        }
                                        alt={itemdata.title}
                                        className="object-cover w-[90px] h-[88px] mr-2"
                                        width={90}
                                        height={88}
                                      />
                                    </Link>
                                  ) : (
                                    <div className="h-13 w-13 mr-2 bg-gray-200 flex items-center justify-center">
                                      No Image
                                    </div>
                                  )}
                                </>
                              )
                            )
                          )}
                      </div>
                    )
                  )
                )}
              <div className="flex mb-5 mt-10 justify-center">
                {bannerData?.page?.homePage?.topHeadlineSidebarSecondAd
                  ?.topHeadlineSecondAdImage?.node?.sourceUrl ? (
                  <Link
                    href={{
                      pathname:
                        bannerData?.page?.homePage?.topHeadlineSidebarSecondAd
                          ?.topHeadlineSecondAdLink,
                    }}
                    passHref
                    target="_blank"
                  >
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        bannerData?.page?.homePage?.topHeadlineSidebarSecondAd
                          ?.topHeadlineSecondAdImage?.node?.sourceUrl
                      }
                      alt="Partly Cloudy"
                      className="object-cover w-[314px] h-[441px] mr-2"
                      width={314}
                      height={441}
                    />
                  </Link>
                ) : (
                  <Ads
                    className=""
                    style={{
                      display: "block",
                      width: "314px",
                      height: "441px",
                      margin: "0 auto",
                    }}
                    adClient="ca-pub-3209848804552918"
                    adSlot="9293720177"
                  />
                )}
              </div>

              <p className="text-[15px] font-bold text-black-900 italic">
                FOLLOW US
              </p>
              <hr
                className="text-red-800"
                style={{ height: "7px", background: "#CE3A42" }}
              />

              {console.log(dataIcon, "dataIcon")}

              <div className="flex mt-5 mb-8">
                <Link href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}>
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="WhatsApp Icon"
                      className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}>
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}>
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}>
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}>
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="YouTube Icon"
                      className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>

              <p className="text-[15px] font-bold text-black-900 italic">
                FOLLOW BELAAZ ON WhatsApp
              </p>
              <hr
                className="text-red-800"
                style={{ height: "7px", background: "#CE3A42" }}
              />

              <div className="flex mt-5 mb-8">
                <Link
                  href={
                    dataIcon?.menu?.followBelaazOnWhatsapp
                      ?.whatsappStatusLink ?? "/"
                  }
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={Status208}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                    width={101}
                    height={32}
                  />
                </Link>
                <Link
                  href={
                    dataIcon?.menu?.followBelaazOnWhatsapp?.whatsappGroupLink ??
                    "/"
                  }
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    src={Group209}
                    alt="Partly Cloudy"
                    className="h-13 w-13 mx-2 object-cover transition-transform duration-200 hover:scale-110 hover:opacity-80"
                    width={101}
                    height={32}
                  />
                </Link>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
