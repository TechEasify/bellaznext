import ExportedImage from "next-image-export-optimizer";
import { useDialog } from "./DialogContext";
import React, { useEffect, useState } from "react";
import Primarylogo from "../public/images/Primarylogo.svg";
import Vector from "../public/images/Vector.svg";
import Vector1 from "../public/images/Vector-1.svg";
import Vector2 from "../public/images/Vector-2.svg";
import Frame283 from "../public/images/Frame 283.svg";
import magnify from "../public/images/magnify.svg";
import Closeicon from "../public/images/Closeicon.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import closewhite from "../public/images/closewhite.svg";
import BELAAZICON from "../public/images/BELAAZICON.svg";
import Vector_red from "../public/images/Vector_red.svg";
import Vector_yellow from "../public/images/Vector_yellow.svg";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check on mount
    updateIsMobile();

    // Listener for window resize
    window.addEventListener("resize", updateIsMobile);

    // Clean-up on component unmount
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};

const SkeletonLoader = () => (
  <header className="bg-header">
    {/* Breadcrumb Skeleton */}
    <nav aria-label="Breadcrumb" className="flex justify-center p-4 lg:px-6">
      <ol className="inline-flex items-center space-x-2 lg:space-x-4">
        <li>
          <div className="flex items-center">
            <div className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white bg-gray-200 animate-pulse w-20 md:w-32">
              &nbsp;
            </div>
          </div>
        </li>
        <span className="text-gray-400">|</span>
        <li aria-current="page">
          <div className="flex items-center">
            <div className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white bg-gray-200 animate-pulse w-20 md:w-32">
              &nbsp;
            </div>
          </div>
        </li>
        <span className="text-gray-400">|</span>
        <li aria-current="page">
          <div className="flex items-center">
            <div className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white bg-gray-200 animate-pulse w-20 md:w-32">
              &nbsp;
            </div>
          </div>
        </li>
      </ol>
    </nav>

    {/* Main Navigation Skeleton */}
    <nav className="mx-auto flex flex-col lg:flex-row items-center justify-between p-4 lg:px-6">
      <div className="flex justify-between lg:justify-start items-center">
        <div className="-m-1.5 p-1.5">
          <div className="sr-only">BELAAZ</div>
          <div className="h-12 w-auto md:h-14 bg-gray-200 animate-pulse"></div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-start items-center space-x-2 md:space-x-5">
          {/* Main Menu First Skeleton */}
          <div className="relative mx-2 md:mx-5">
            <div className="flex text-white font-bold items-center bg-gray-200 animate-pulse w-20 md:w-32">
              &nbsp;
            </div>
          </div>
          {/* Main Menu Second Skeleton */}
          <div className="flex text-white font-bold items-center bg-gray-200 animate-pulse w-20 md:w-32">
            &nbsp;
          </div>
          {/* Main Menu Third Skeleton */}
          <div className="flex text-white font-bold items-center bg-gray-200 animate-pulse w-20 md:w-32">
            &nbsp;
          </div>
          {/* Contact Header Toggle Skeleton */}
          <div className="flex text-white font-bold items-center bg-gray-200 animate-pulse w-20 md:w-32">
            &nbsp;
          </div>
          {/* Search Toggle Skeleton */}
          <div className="flex text-white font-bold items-center bg-gray-200 animate-pulse w-20 md:w-32">
            &nbsp;
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end mt-4 lg:mt-0">
        {/* Subscribe Button Skeleton */}
        <div className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-200 animate-pulse w-40 md:w-60">
          &nbsp;
        </div>
      </div>
    </nav>
  </header>
);

const SkeletonArticleLoader = () => (
  <header className="bg-black">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
      aria-label="Global"
    >
      <div className="flex justify-between lg:justify-start items-center">
        <div className="h-12 w-36 bg-gray-700 animate-pulse md:h-14"></div>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
        <div className="inline-flex items-center justify-center w-32 h-12 bg-gray-700 animate-pulse rounded shadow-md md:w-40"></div>
        <div className="h-5 w-5 bg-gray-700 animate-pulse rounded-full"></div>
      </div>
    </nav>
  </header>
);

const Nav = ({
  siteTitle,
  siteDescription,
  menuItems,
  archiveType,
  name,
  uri,
}) => {
  const {
    navData,
    setNavData,
    loadingNav,
    loadingMenu,
    loadingsubMenu,
    loadingIcon,
    dataNav,
    dataMenu,
    datasubMenu,
    dataIcon,
    iconDataResult,
  } = useDialog();
  const router = useRouter();
  console.log(router.asPath, "router");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [isContactHeaderVisible, setContactHeaderVisible] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (dataNav && dataMenu && datasubMenu && dataIcon) {
      setNavData({ dataNav, dataMenu, datasubMenu, dataIcon });
    }
  }, [dataNav, dataMenu, datasubMenu, dataIcon]);

  useEffect(() => {
    setSubscribe(router.pathname);
  }, [subscribe]);

  if (loadingNav || loadingMenu || loadingsubMenu || !navData) {
    if (router.asPath === `/news${uri}`) {
      return <SkeletonArticleLoader />;
    } else {
      return <SkeletonLoader />;
    }
  }

  const handleLinkClick = (link) => {
    console.log(link, "link");
    setActiveLink(link);
  };

  console.log(subscribe, "subscribe");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsDropdownSearch(false);
  };

  const toggleDropdownMobile = () => {
    setToggleDropdown1(!toggleDropdown1);
  };

  const closeDropdown = () => setDropdownOpen(false);

  const toggleDropdownSearch = () => {
    setIsDropdownSearch(!isDropdownSearch);
    setDropdownOpen(false);
  };

  const closeSearch = () => setIsDropdownSearch(false);

  const toggleContactHeader = () => {
    setContactHeaderVisible(!isContactHeaderVisible);
  };

  const handleSub = () => {
    localStorage.setItem("lastPathname", router.asPath);
    router.push({
      pathname: "/subscribe",
    });
  };

  console.log(
    `/news${uri}`,
    "navDataResultnavDataResultnavDataResultnavDataResult"
  );

  return (
    <>
      {router.pathname === "/contact-us" ? (
        <header className="bg-header">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14 mr-5"
                  src={BELAAZICON}
                  alt="BELAAZICON"
                />
              </Link>
              <button
                onClick={() => router.push("/")}
                className="flex text-white font-bold"
              >
                Home
              </button>
            </div>

            <div className="flex lg:flex-1 justify-end">
              <button
                onClick={toggleContactHeader}
                className="flex mr-2 text-white font-bold items-center"
              >
                {isContactHeaderVisible ? (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                  />
                ) : (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/about" ? (
        <header className="bg-header">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14 mr-5 object-cover"
                  src={BELAAZICON}
                  alt="BELAAZICON"
                />
              </Link>
              <Link href="/" className="flex text-white font-bold">
                Home
              </Link>
            </div>

            <div className="flex lg:flex-1 justify-end">
              <button
                onClick={toggleContactHeader}
                className="flex mr-2 text-white font-bold items-center"
              >
                {isContactHeaderVisible ? (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                  />
                ) : (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/news${uri}` ? (
        <header className="bg-black">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between lg:justify-start items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14 object-cover"
                  src={Primarylogo}
                  alt="Primarylogo"
                />
              </Link>
            </div>

            <div className="flex flex-1 justify-end items-center">
              <button
                onClick={handleSub}
                className="hidden lg:inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                style={{ background: "#CE3A42" }}
              >
                Subscribe
              </button>
              <button
                onClick={toggleContactHeader}
                className="flex text-white font-bold items-center lg:mr-2"
              >
                {isContactHeaderVisible ? (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                  />
                ) : (
                  <ExportedImage
                    priority={true}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : (
        <header className="bg-header">
          {/* Breadcrumb */}
          {router.pathname === "/" && (
            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex justify-center p-4 lg:px-6"
            >
              <ol className="inline-flex items-center space-x-2 lg:space-x-4">
                <li>
                  <div className="flex items-center">
                    <button
                      id="dropdownDatabase"
                      data-dropdown-toggle="dropdown-database"
                      className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white"
                    >
                      {dataNav !== undefined && dataNav?.menu?.header?.topFirst}
                    </button>
                  </div>
                </li>
                <span className="text-gray-400">|</span>
                <li aria-current="page">
                  <div className="flex items-center">
                    <button
                      id="dropdownDatabase"
                      data-dropdown-toggle="dropdown-database"
                      className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white"
                    >
                      {dataNav !== undefined &&
                        dataNav?.menu?.header?.topSecond}
                    </button>
                  </div>
                </li>
                <span className="text-gray-400">|</span>
                <li aria-current="page">
                  <div className="flex items-center">
                    <button
                      id="dropdownDatabase"
                      data-dropdown-toggle="dropdown-database"
                      className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white"
                    >
                      {dataNav !== undefined && dataNav?.menu?.header?.topThird}
                    </button>
                  </div>
                </li>
              </ol>
            </nav>
          )}

          {/* Main Navigation */}
          <nav
            className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between lg:justify-start items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14 object-cover"
                  src={Primarylogo}
                  alt="Primarylogo"
                />
              </Link>
              <div className="flex justify-center lg:justify-start items-center">
                <div className="relative mx-2 md:mx-5 hidden lg:block">
                  <button
                    onClick={toggleDropdown}
                    className="flex text-white font-bold items-center"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                </div>
                <Link
                  href="/category/insights"
                  // onClick={() => router.push("/category/insights")}
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  // onClick={() => router.push("/category/music")}
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <button
                  onClick={toggleContactHeader}
                  className="flex mr-2 text-white font-bold items-center ml-2"
                >
                  {isContactHeaderVisible ? (
                    <ExportedImage
                      priority={true}
                      className="h-5 w-5 mx-2"
                      src={closewhite}
                      alt="close Icon"
                    />
                  ) : (
                    <ExportedImage
                      priority={true}
                      className="h-5 w-5 mx-2"
                      src={Frame283}
                      alt="Contact Toggle Icon"
                    />
                  )}
                </button>
                <button
                  onClick={toggleDropdownSearch}
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  <ExportedImage
                    priority={true}
                    className="h-6 w-6 mx-2"
                    src={magnify}
                    alt="Search Icon"
                  />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end mt-4 lg:mt-0">
              <button
                onClick={handleSub}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </nav>
        </header>
      )}

      {name === "music" || router.asPath === "/category/music" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#25AC7D" }}
        >
          <span className="text-white font-medium">
            {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
          </span>
        </div>
      ) : name === "Insights" || router.asPath === "/category/insights" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#1662D4" }}
        >
          <span className="text-white font-medium">
            {dataMenu !== undefined && dataMenu.menu.header.mainMenuSecond}
          </span>
        </div>
      ) : name === "Jewish News" ||
        router.asPath === "/category/jewish-news" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#57A0EE" }}
        >
          <span className="text-white font-medium">
            {dataMenu !== undefined && dataMenu.menu.header.subThird}
          </span>
        </div>
      ) : name === "Breaking News" ||
        router.asPath === "/category/breaking-news" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#ce3a42" }}
        >
          <span className="text-white font-medium">
            {dataMenu !== undefined && dataMenu.menu.header.subFirst}
          </span>
        </div>
      ) : name === "Politics" || router.asPath === "/category/politics" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#FFA500" }}
        >
          <span className="text-white font-medium">
            {dataMenu !== undefined && dataMenu.menu.header.subSecond}
          </span>
        </div>
      ) : (
        <div>
          {/* <span className="text-white font-medium">BREAKING NEWS</span> */}
        </div>
      )}

      {isDropdownOpen && (
        <div className="bg-white font-medium inline-flex items-center md:ml-28">
          <div className="flex flex-col items-center">
            <Link
              href="/category/breaking-news"
              className={`px-4 text-gray-800 ${
                activeLink === "/category/breaking-news"
                  ? "border-b-3 border-red-600"
                  : "hover:border-b-3 hover:border-red-600"
              }`}
              onClick={() => handleLinkClick("/category/breaking-news")}
            >
              {dataMenu !== undefined && dataMenu.menu.header.subFirst}
            </Link>
            {activeLink === "/category/breaking-news" && (
              <hr className="w-full border-red-600" />
            )}
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="/category/politics"
              className={`politics px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink === "/category/politics" ||
                router.asPath === "/category/politics"
                  ? `border-b-2 bg-change`
                  : ""
              }`}
              onClick={() => handleLinkClick("/category/politics")}
            >
              {dataMenu !== undefined && dataMenu.menu.header.subSecond}
            </Link>
            {activeLink === "/category/politics" &&
              router.asPath === "/category/politics" && (
                <hr className="w-full bg-change" />
              )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/category/jewish-news"
              className={`px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink === "/category/jewish-news" ||
                router.asPath === "/category/jewish-news"
                  ? "border-b-2 bg-change1"
                  : ""
              }`}
              onClick={() => handleLinkClick("/category/jewish-news")}
            >
              {dataMenu !== undefined && dataMenu.menu.header.subThird}
            </Link>
            {activeLink === "/category/jewish-news" &&
              router.asPath === "/category/jewish-news" && (
                <hr className="w-full bg-change1" />
              )}
          </div>
          <button
            onClick={() => setDropdownOpen(false)}
            className="px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <ExportedImage
              priority={true}
              className="h-4 w-4 mx-2"
              src={Closeicon}
              alt="Close Icon"
            />
          </button>
        </div>
      )}

      {isDropdownSearch && (
        <div className="bg-white font-medium inline-flex flex-col items-center md:flex-row md:ml-10 py-2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative mb-2 md:mb-0">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to Search"
              required
              style={{ width: "166px" }} // Set width 166px for mobile view
            />
          </div>
          <div className="flex md:ml-2">
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "20px",
                background: "#ce3a42",
              }}
            >
              Search
            </button>
            <button
              onClick={closeSearch}
              className="px-4 py-2 text-gray-800 hover:bg-gray-100 ml-2"
            >
              <ExportedImage
                priority={true}
                className="h-4 w-4 mx-2"
                src={Closeicon}
                alt="Close Icon"
              />
            </button>
          </div>
        </div>
      )}
      {console.log(uri, "uri uri")}

      {router.asPath === `/news${uri}` ? (
        <header
        className={`bg-header transition-all duration-500 ${
          isContactHeaderVisible
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{
          position: "absolute",
          zIndex: "9999999999",
          top: "80px",
          left: "0px",
          background: "black",
          width: "100%",
        }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center bg-black justify-around p-4 lg:px-6"
          aria-label="Global"
        >
          {/* Mobile View */}
          <div className="block lg:hidden w-full">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type to Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-2"
                  style={{
                    borderRadius: "20px",
                    background: "#ce3a42",
                  }}
                >
                  Search
                </button>
              </div>
              <div className="flex justify-end mb-3">
                <button
                  onClick={handleSub}
                  className="w-auto inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
              <div className="relative mb-3">
                <button
                  onClick={toggleDropdownMobile}
                  className="flex text-white font-bold items-center"
                >
                  {dataMenu !== undefined && dataMenu?.menu?.header?.mainMenuFirst}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 ml-2"
                    src={Vector1}
                    alt="Dropdown Icon"
                  />
                </button>
                {toggleDropdown1 && (
                  <>
                    <Link
                      href="/category/breaking-news"
                      className="flex text-white font-bold items-center mt-2"
                    >
                      {dataMenu !== undefined && dataMenu.menu.header.subFirst}
                      <ExportedImage
                        priority={true}
                        className="h-3 w-3 mx-2"
                        src={Vector_red}
                        alt="Dropdown Icon"
                      />
                    </Link>
                    <Link
                      href="/category/politics"
                      className="flex text-white font-bold items-center mt-2"
                    >
                      {dataMenu !== undefined && dataMenu.menu.header.subSecond}
                      <ExportedImage
                        priority={true}
                        className="h-3 w-3 mx-2"
                        src={Vector_yellow}
                        alt="Dropdown Icon"
                      />
                    </Link>
                    <Link
                      href="/category/jewish-news"
                      className="flex text-white font-bold items-center mt-2"
                    >
                      {dataMenu !== undefined && dataMenu.menu.header.subThird}
                      <ExportedImage
                        priority={true}
                        className="h-3 w-3 mx-2"
                        src={Vector}
                        alt="Dropdown Icon"
                      />
                    </Link>
                  </>
                )}
              </div>
              <Link
                href="/category/insights"
                className="flex text-white font-bold items-center mb-3"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.mainMenuSecond}
                <ExportedImage
                  priority={true}
                  className="h-3 w-3 mx-2"
                  src={Vector}
                  alt="Dropdown Icon"
                />
              </Link>
              <Link
                href="/category/music"
                className="flex text-white font-bold items-center mb-3"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.mainMenuThird}
                <ExportedImage
                  priority={true}
                  className="h-3 w-3 mx-2"
                  src={Vector2}
                  alt="Dropdown Icon"
                />
              </Link>
              <hr className="my-2" />
              <div className="flex flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div className="flex justify-end items-end mt-4">
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden lg:flex lg:flex-row items-center">
            <div className="flex flex-col mr-5">
              <Link
                href="/category/breaking-news"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.subFirst}
              </Link>
              <Link
                href="/category/politics"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.subSecond}
              </Link>
              <Link
                href="/category/jewish-news"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.subThird}
              </Link>
              <Link
                href="/category/insights"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.mainMenuSecond}
              </Link>
              <Link
                href="/category/music"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {dataMenu !== undefined && dataMenu?.menu?.header?.mainMenuThird}
              </Link>
            </div>
            <div className="flex flex-col lg:items-center">
              <Link
                href="/contact-us"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {datasubMenu !== undefined &&
                  datasubMenu?.menu?.header?.foreSquareFirst}
              </Link>
              <Link
                href="/contact-us"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {datasubMenu !== undefined &&
                  datasubMenu?.menu?.header?.foreSquareSecond}
              </Link>
              <Link
                href="/advertise"
                className="flex text-white font-bold items-center my-2 lg:mr-2"
              >
                {datasubMenu !== undefined &&
                  datasubMenu?.menu?.header?.foreSquareThird}
              </Link>
            </div>
          </div>
          <div
            className="hidden lg:flex lg:justify-end items-end"
            style={{ height: "230px" }}
          >
            <Link
              href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
              className="px-4 py-2"
            >
              <ExportedImage
                priority={true}
                className="h-8 w-8 mx-1"
                src={Group}
                alt="Whatsapp Icon"
              />
            </Link>
            <Link
              href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
              className="px-4 py-2"
            >
              <ExportedImage
                priority={true}
                className="h-8 w-8 mx-1"
                src={Group1}
                alt="Facebook Icon"
              />
            </Link>
            <Link
              href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
              className="px-4 py-2"
            >
              <ExportedImage
                priority={true}
                className="h-8 w-8 mx-1"
                src={Group2}
                alt="Instagram Icon"
              />
            </Link>
            <Link
              href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
              className="px-4 py-2"
            >
              <ExportedImage
                priority={true}
                className="h-8 w-8 mx-1"
                src={Group3}
                alt="Twitter Icon"
              />
            </Link>
          </div>
        </nav>
      </header>
      
      ) : router.pathname === "/about" ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category${uri}` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/music` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/politics` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/jewish-news` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/breaking-news` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/insights` ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/contact-us" ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/advertise" ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "80px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      ) : (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: isMobile ? "75px" : "156px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mb-2 md:mb-0 mr-2">
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type to Search"
                      required
                      style={{ width: "166px" }} // Set width 166px for mobile view
                    />
                  </div>
                  <div className="flex md:ml-2 flex-col">
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "20px",
                        background: "#ce3a42",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={handleSub}
                    className="w-auto inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataMenu !== undefined &&
                      dataMenu?.menu?.header?.mainMenuFirst}
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href="/category/breaking-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subFirst}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/politics"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subSecond}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                        />
                      </Link>
                      <Link
                        href="/category/jewish-news"
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataMenu !== undefined &&
                          dataMenu.menu.header.subThird}
                        <ExportedImage
                          priority={true}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href="/category/insights"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined &&
                    dataMenu.menu.header.mainMenuSecond}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </Link>
                <Link
                  href="/category/music"
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataMenu !== undefined && dataMenu.menu.header.mainMenuThird}
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href="/advertise"
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {datasubMenu !== undefined &&
                      datasubMenu?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 mx-1"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href="/contact-us"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href="/advertise"
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {datasubMenu !== undefined &&
                    datasubMenu?.menu?.header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </Link>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

Nav.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};

export default Nav;
