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
import Image from "next/image";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

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
  navData
}) => {
  const {
    // navData,
    // setNavData,
    loadingNav,
    loadingMenu,
    loadingsubMenu,
    loadingIcon,
    dataNav,
    dataIcon,
    iconDataResult,
    nodeByUri,
    searchData,
  } = useHeader();
  const router = useRouter();
  console.log(router, "router");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [isContactHeaderVisible, setContactHeaderVisible] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();

  console.log(navData, "navData props");

  // useEffect(() => {
  //   if (dataNav && dataIcon) {
  //     setNavData({ dataNav, dataIcon });
  //   }
  // }, [dataNav, dataIcon]);

  useEffect(() => {
    setSubscribe(router.pathname);
  }, [subscribe]);

  if (loadingNav || loadingMenu || loadingsubMenu || !navData) {
    if (router.asPath.startsWith(`/news/${uri}`)) {
      return <SkeletonArticleLoader />;
    } else {
      return <SkeletonLoader />;
    }
  }

  const handleLinkClick = (link) => {
    console.log(link, "link");
    setActiveLink(link);
  };

  console.log(uri, "uri uri uri");

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

  return (
    <>
      {router.pathname === "/contact-us" ? (
        <header
          className="bg-header"
          style={{
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 mr-5"
                  src={BELAAZICON}
                  alt="BELAAZICON"
                  width={250}
                  height={54}
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
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                    width={21}
                    height={18}
                  />
                ) : (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                    width={21}
                    height={18}
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/about" ? (
        <header
          className="bg-header"
          style={{
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 mr-5"
                  src={BELAAZICON}
                  alt="BELAAZICON"
                  width={250}
                  height={54}
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
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                    width={21}
                    height={18}
                  />
                ) : (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                    width={21}
                    height={18}
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/news/${router.query.slug}` ? (
        console.log(router.asPath === `/news/${router.query.slug}`, "router.asPath === `/news${uri}`"),
        <header
          className="bg-black"
          style={{
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between lg:justify-start items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 object-cover"
                  src={Primarylogo}
                  alt="Primarylogo"
                  width={250}
                  height={54}
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
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                    width={21}
                    height={18}
                  />
                ) : (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-5 w-5 mx-2 object-cover"
                    src={Frame283}
                    alt="Contact Toggle Icon"
                    width={21}
                    height={18}
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/subscribe` ? (
        <></>
      ) : (
        <header
          className="bg-header"
          style={{
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
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
                      onClick={() =>
                        dataNav?.menu?.header?.topFirstLinks?.url &&
                        router.push(dataNav.menu.header.topFirstLinks.url)
                      }
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
                      onClick={() =>
                        dataNav?.menu?.header?.topSecondLinks?.url &&
                        router.push(dataNav.menu.header.topSecondLinks.url)
                      }
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
                      onClick={() =>
                        dataNav?.menu?.header?.topThirdLinks?.url &&
                        router.push(dataNav.menu.header.topThirdLinks.url)
                      }
                    >
                      {dataNav !== undefined && dataNav?.menu?.header?.topThird}
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
                      onClick={() =>
                        dataNav?.menu?.header?.topForeLinks?.url &&
                        router.push(dataNav.menu.header.topForeLinks.url)
                      }
                    >
                      {dataNav !== undefined && dataNav?.menu?.header?.topFore}
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
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 object-cover"
                  src={Primarylogo}
                  alt="Primarylogo"
                  width={250}
                  height={54}
                />
              </Link>
              <div className="flex justify-center lg:justify-start items-center">
                <div className="relative mx-2 md:mx-5 hidden lg:block">
                  <button
                    onClick={toggleDropdown}
                    className="flex text-white font-bold items-center"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <button
                  onClick={toggleContactHeader}
                  className="flex mr-2 text-white font-bold items-center ml-2"
                >
                  {isContactHeaderVisible ? (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-5 w-5 mx-2 object-cover"
                      src={closewhite}
                      alt="close Icon"
                      width={21}
                      height={18}
                    />
                  ) : (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-5 w-5 mx-2 object-cover"
                      src={Frame283}
                      alt="Contact Toggle Icon"
                      width={21}
                      height={18}
                    />
                  )}
                </button>
                <button
                  onClick={toggleDropdownSearch}
                  className="flex mr-2 text-white font-bold items-center hidden lg:flex"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-6 w-6 mx-2"
                    src={magnify}
                    alt="Search Icon"
                    width={30}
                    height={30}
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

      {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
      "Music" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{
            background: `${
              nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                ?.musicTitleBackgroundColor
                ? nodeByUri?.nodeByUri?.categoryTamplate?.musicTemplete
                    ?.musicTitleBackgroundColor
                : "#25AC7D"
            }`,
          }}
        >
          <span className="text-white font-medium">
            {nodeByUri?.nodeByUri !== undefined && nodeByUri?.nodeByUri?.name}
          </span>
        </div>
      ) : nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
        "Simple" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{
            background: `${
              nodeByUri?.nodeByUri?.categoryTamplate?.simpleTemplete
                ?.simpleTitleBackgroundColor
                ? nodeByUri?.nodeByUri?.categoryTamplate?.simpleTemplete
                    ?.simpleTitleBackgroundColor
                : "#1662D4"
            }`,
          }}
        >
          <span className="text-white font-medium">
            {nodeByUri?.nodeByUri !== undefined && nodeByUri?.nodeByUri?.name}
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
              href={
                dataNav?.menu?.header?.subFirstLink !== null
                  ? dataNav?.menu?.header?.subFirstLink?.url
                  : "/"
              }
              className={`px-4 text-gray-800 ${
                activeLink === dataNav?.menu?.header?.subFirstLink?.url ||
                router.asPath === dataNav?.menu?.header?.subFirstLink?.url
                  ? "border-b-3 bg-change2"
                  : "hover:border-b-3 hover:bg-change2"
              }`}
              onClick={() =>
                handleLinkClick(dataNav?.menu?.header?.subFirstLink?.url)
              }
            >
              {dataNav !== undefined && dataNav.menu.header.subFirst}
            </Link>
            {activeLink === dataNav?.menu?.header?.subFirstLink?.url &&
              router.asPath === dataNav?.menu?.header?.subFirstLink?.url && (
                <hr className="w-full bg-change2" />
              )}
          </div>

          <div className="flex flex-col items-center">
            <Link
              href={
                dataNav?.menu?.header?.subSecondLink !== null
                  ? dataNav?.menu?.header?.subSecondLink?.url
                  : "/"
              }
              className={`politics px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink === dataNav?.menu?.header?.subSecondLink?.url ||
                router.asPath === dataNav?.menu?.header?.subSecondLink?.url
                  ? `border-b-3 bg-change`
                  : ""
              }`}
              onClick={() =>
                handleLinkClick(dataNav?.menu?.header?.subSecondLink?.url)
              }
            >
              {dataNav !== undefined && dataNav.menu.header.subSecond}
            </Link>
            {activeLink === dataNav?.menu?.header?.subSecondLink?.url &&
              router.asPath === dataNav?.menu?.header?.subSecondLink?.url && (
                <hr className="w-full bg-change" />
              )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              href={
                dataNav?.menu?.header?.subThirdLink !== null
                  ? dataNav?.menu?.header?.subThirdLink?.url
                  : "/"
              }
              className={`px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink === dataNav?.menu?.header?.subThirdLink?.url ||
                router.asPath === dataNav?.menu?.header?.subThirdLink?.url
                  ? "border-b-3 bg-change1"
                  : ""
              }`}
              onClick={() =>
                handleLinkClick(dataNav?.menu?.header?.subThirdLink?.url)
              }
            >
              {dataNav !== undefined && dataNav.menu.header.subThird}
            </Link>
            {activeLink === dataNav?.menu?.header?.subThirdLink?.url &&
              router.asPath === dataNav?.menu?.header?.subThirdLink?.url && (
                <hr className="w-full bg-change1" />
              )}
          </div>
          <button
            onClick={() => setDropdownOpen(false)}
            className="px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <Image
              priority={true}
              loader={customLoader}
              className="h-4 w-4 mx-2"
              src={Closeicon}
              alt="Close Icon"
              width={21}
              height={18}
            />
          </button>
        </div>
      )}

      {isDropdownSearch && (
        <div className="bg-white flex justify-center w-full font-medium inline-flex flex-col items-center md:flex-row py-2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative mb-2 md:mb-0">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                console.log(e, "eeeeee");
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              required 
              style={{ width: "300px" }}
            />
          </div>
          <div className="flex md:ml-2">
            <button
              type="submit"
              onClick={handleSearch}
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
              <Image
                priority={true}
                loader={customLoader}
                className="h-4 w-4 mx-2"
                src={Closeicon}
                alt="Close Icon"
                width={21}
                height={18}
              />
            </button>
          </div>
        </div>
      )}
      {console.log(uri, "uri uri")}

      {router.asPath === `/news/${router.query.slug}` ? (
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

            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            width: "100%",
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={dataNav?.menu?.header?.subFirstLink?.url}
                        className="flex text-white font-bold items-center mt-2"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={dataNav?.menu?.header?.subSecondLink?.url}
                        className="flex text-white font-bold items-center mt-2"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={dataNav?.menu?.header?.subThirdLink?.url}
                        className="flex text-white font-bold items-center mt-2"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={dataNav?.menu?.header?.mainMenuSecondLink?.url}
                  className="flex text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={dataNav?.menu?.header?.mainMenuThirdLink?.url}
                  className="flex text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={dataNav?.menu?.header?.foreSquareFirstLink?.url}
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={dataNav?.menu?.header?.foreSquareSecondLink?.url}
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={dataNav?.menu?.header?.foreSquareThirdLink?.url}
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex lg:flex-row items-center">
              <div className="flex flex-col mr-5">
                <Link
                  href={dataNav?.menu?.header?.subFirstLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.subFirst}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.subSecondLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.subSecond}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.subThirdLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.subThird}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.mainMenuSecondLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.mainMenuSecond}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.mainMenuThirdLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.mainMenuThird}
                </Link>
              </div>
              <div className="flex flex-col lg:items-center">
                <Link
                  href={dataNav?.menu?.header?.foreSquareFirstLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.foreSquareSecondLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={dataNav?.menu?.header?.foreSquareThirdLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
            </div>
          </nav>
        </header>
      ) : router.asPath === `/category/${router.query.slug}` ? (
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav?.menu?.header?.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav?.menu?.header?.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav?.menu?.header?.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/" ? (
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav.menu.header.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/subscribe" ? (
        <></>
      ):(
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
            backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor: dataNav?.menu?.header?.headerBackgroundColor,
            }}
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
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.mainMenuFirst}
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                      width={12}
                      height={6}
                    />
                  </button>
                  {toggleDropdown1 && (
                    <>
                      <Link
                        href={
                          dataNav?.menu?.header?.subFirstLink !== null
                            ? dataNav?.menu?.header?.subFirstLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subFirst}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_red}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subSecondLink !== null
                            ? dataNav?.menu?.header?.subSecondLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subSecond}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector_yellow}
                          alt="Dropdown Icon"
                          width={39.99}
                          height={40}
                        />
                      </Link>
                      <Link
                        href={
                          dataNav?.menu?.header?.subThirdLink !== null
                            ? dataNav?.menu?.header?.subThirdLink?.url
                            : "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav !== undefined && dataNav.menu.header.subThird}
                        <Image
                          priority={true}
                          loader={customLoader}
                          className="h-3 w-3 mx-2"
                          src={Vector}
                          alt="Dropdown Icon"
                          width={12}
                          height={6}
                        />
                      </Link>
                    </>
                  )}
                </div>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuSecondLink !== null
                      ? dataNav?.menu?.header?.mainMenuSecondLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.mainMenuSecond}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.mainMenuThirdLink !== null
                      ? dataNav?.menu?.header?.mainMenuThirdLink?.url
                      : "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined && dataNav?.menu?.header?.mainMenuThird}
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                    width={12}
                    height={6}
                  />
                </Link>
                <hr className="my-2" />
                <div className="flex flex-col">
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareFirstLink !== null
                        ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareSecondLink !== null
                        ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menu?.header?.foreSquareThirdLink !== null
                        ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                        : "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menu?.header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.99}
                      height={40}
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareFirstLink !== null
                      ? dataNav?.menu?.header?.foreSquareFirstLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareSecondLink !== null
                      ? dataNav?.menu?.header?.foreSquareSecondLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.header?.foreSquareThirdLink !== null
                      ? dataNav?.menu?.header?.foreSquareThirdLink?.url
                      : "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menu?.header?.foreSquareThird}
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
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                )}
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                )}
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
