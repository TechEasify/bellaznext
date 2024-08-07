import ExportedImage from "next-image-export-optimizer";
import { useDialog } from "./DialogContext";
import React, { useEffect, useState } from "react";
import Primarylogo from "../public/images/Primarylogo.svg";
import Vector from "../public/images/Vector.svg";
import Vector1 from "../public/images/Vector-1.svg";
import Vector2 from "../public/images/Vector-2.svg";
import Frame283 from "../public/images/Frame 283.svg";
import MenuFrame166 from "../public/images/MenuFrame166.svg";
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
import Head from "next/head";
import { CATEGORY_BREAKING_QUERY } from "./queries/categoryQueries";

const customLoader = ({ src }) => {
  return src;
};

const parseMetaContent = (metaContent) => {
  if (metaContent && typeof metaContent === "string") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(metaContent, "text/html");
    const metaElements = [];

    Array.from(doc.head.children).forEach((node) => {
      if (node.tagName === "META" || node.tagName === "TITLE") {
        const attributes = {};
        Array.from(node.attributes).forEach((attr) => {
          attributes[attr.name] = attr.value;
        });
        if (node.tagName === "TITLE") {
          metaElements.push({
            tag: node.tagName.toLowerCase(),
            content: node.textContent,
          });
        } else {
          metaElements.push({ tag: node.tagName.toLowerCase(), attributes });
        }
      }
    });

    return metaElements;
  }
  return [];
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

const Nav = () => {
  const { dataNav, dataIcon, searchData, seoData } = useHeader();
  const router = useRouter();
  const { categoryslug, slug } = router.query;
  const uri = `/category/${categoryslug}`;

  const {
    data: nodeByUri,
    loading: loadingCategory,
    error: errorCategory,
    fetchMore,
  } = useQuery(CATEGORY_BREAKING_QUERY, {
    variables: { uri },
    fetchPolicy: "cache-first",
  });
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [isContactHeaderVisible, setContactHeaderVisible] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    setSubscribe(router.pathname);
  }, [subscribe]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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

    const post = searchData?.categories?.nodes
      .flatMap((item) => item.posts.nodes)
      .find((p) =>
        searchWords.every((word) => p?.title?.toLowerCase().includes(word))
      );

    if (post) {
      router.push(`/search`);
      setIsDropdownSearch(!isDropdownSearch);
    } else {
      router.push("/search");
      setIsDropdownSearch(!isDropdownSearch);
    }
  };

  return (
    <>
      <Head>
        {parseMetaContent(seoData?.nodeByUri?.seo?.fullHead).map(
          (element, index) =>
            element.tag === "title" ? (
              <title key={index}>{element.content}</title>
            ) : (
              <element.tag key={index} {...element.attributes} />
            )
        )}
      </Head>
      {router.pathname === "/about" || router.pathname === "/contact-us" ? (
        <header
          className="bg-header"
          style={{
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor,
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between hidden md:flex items-center">
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

            <div className="flex justify-between md:hidden items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 mr-5"
                  src={Primarylogo}
                  alt="Primarylogo"
                  width={250}
                  height={54}
                />
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
                    className="mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                    width={21}
                    height={18}
                  />
                ) : (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="mx-2 object-cover"
                    src={MenuFrame166}
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
        <header
          className="bg-header"
          style={{
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor,
          }}
        >
          <nav
            aria-label="Breadcrumb"
            className="hidden lg:flex justify-center pt-3"
          >
            <div className="flex justify-between items-center w-full ml-[30%]">
              <ol className="inline-flex items-center space-x-2 lg:space-x-4"></ol>
              <div className="w-[37%] text-center">
                <p className="text-white text-[19px] font-regular">בס״ד</p>
              </div>
            </div>
          </nav>
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between hidden md:flex items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 object-cover mr-9"
                  src={Primarylogo}
                  alt="Primarylogo"
                  width={250}
                  height={54}
                />
              </Link>
            </div>

            <div className="flex justify-between md:hidden items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto md:h-14 mr-5"
                  src={Primarylogo}
                  alt="Primarylogo"
                  width={250}
                  height={54}
                />
              </Link>
            </div>
            <div className="flex lg:flex-1 justify-end">
              <div className="hidden lg:flex lg:flex-1 lg:justify-end mt-4 lg:mt-0">
                <button
                  onClick={handleSub}
                  className="inline-flex items-center justify-center w-[120px] h-[38px] px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
              <button
                onClick={toggleContactHeader}
                className="flex mr-2 text-white font-bold items-center"
              >
                {isContactHeaderVisible ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="mx-2 object-cover"
                    src={closewhite}
                    alt="close Icon"
                    width={21}
                    height={18}
                  />
                ) : (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="mx-2 object-cover"
                    src={MenuFrame166}
                    alt="Contact Toggle Icon"
                    width={21}
                    height={18}
                  />
                )}
              </button>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/subscribe" ? (
        <></>
      ) : (
        <header className="bg-header">
          {/* Breadcrumb */}
          {router.pathname === "/" ? (
            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex justify-center pt-8"
            >
              <div className="flex justify-between items-center w-full ml-[30%]">
                <ol className="inline-flex items-center space-x-2 lg:space-x-4">
                  <li>
                    <div className="flex items-center">
                      <button
                        id="dropdownDatabase"
                        data-dropdown-toggle="dropdown-database"
                        className="inline-flex items-center px-3 py-2 text-[13px] font-normal text-center text-white"
                        onClick={() =>
                          dataNav?.menus?.nodes[0].header?.topFirstLinks?.url &&
                          router.push(
                            dataNav?.menus?.nodes[0].header?.topFirstLinks.url
                          )
                        }
                      >
                        {dataNav !== undefined &&
                          dataNav?.menus?.nodes[0].header?.topFirst}
                      </button>
                    </div>
                  </li>
                  <span className="text-gray-400">|</span>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <button
                        id="dropdownDatabase"
                        data-dropdown-toggle="dropdown-database"
                        className="inline-flex items-center px-3 py-2 text-[13px] font-normal text-center text-white"
                        onClick={() =>
                          dataNav?.menus?.nodes[0].header?.topSecondLinks
                            ?.url &&
                          router.push(
                            dataNav?.menus?.nodes[0].header?.topSecondLinks.url
                          )
                        }
                      >
                        {dataNav !== undefined &&
                          dataNav?.menus?.nodes[0].header?.topSecond}
                      </button>
                    </div>
                  </li>
                  <span className="text-gray-400">|</span>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <button
                        id="dropdownDatabase"
                        data-dropdown-toggle="dropdown-database"
                        className="inline-flex items-center px-3 py-2 text-[13px] font-normal text-center text-white"
                        onClick={() =>
                          dataNav?.menus?.nodes[0].header?.topThirdLinks?.url &&
                          router.push(
                            dataNav?.menus?.nodes[0].header.topThirdLinks.url
                          )
                        }
                      >
                        {dataNav !== undefined &&
                          dataNav?.menus?.nodes[0].header?.topThird}
                      </button>
                    </div>
                  </li>
                  <span className="text-gray-400">|</span>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <button
                        id="dropdownDatabase"
                        data-dropdown-toggle="dropdown-database"
                        className="inline-flex items-center px-3 py-2 text-[13px] font-normal text-center text-white"
                        onClick={() =>
                          dataNav?.menus?.nodes[0].header?.topForeLinks?.url &&
                          router.push(
                            dataNav?.menus?.nodes[0].header.topForeLinks.url
                          )
                        }
                      >
                        {dataNav !== undefined &&
                          dataNav?.menus?.nodes[0].header?.topFore}
                      </button>
                    </div>
                  </li>
                </ol>
                <div className="w-[37%] text-center">
                  <p className="text-white text-[19px] font-regular">בס״ד</p>
                </div>
              </div>
            </nav>
          ) : (
            <nav
              aria-label="Breadcrumb"
              className="hidden lg:flex justify-center pt-3"
            >
              <div className="flex justify-between items-center w-full ml-[30%]">
                <ol className="inline-flex items-center space-x-2 lg:space-x-4"></ol>
                <div className="w-[37%] text-center">
                  <p className="text-white text-[19px] font-regular">בס״ד</p>
                </div>
              </div>
            </nav>
          )}
          {/* Main Navigation  */}
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
                  className="h-12 w-auto md:h-14 object-cover mr-9"
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
                    className="flex text-white font-medium items-center text-[20px]"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menus?.nodes[0].header?.mainMenuFirst}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-[20px] text-white font-medium items-center hidden lg:flex"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuSecond}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-[20px] text-white font-medium items-center hidden lg:flex"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuThird}
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
                      className="mx-2 object-cover"
                      src={closewhite}
                      alt="close Icon"
                      width={21}
                      height={18}
                    />
                  ) : (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="mx-2 object-cover"
                      src={MenuFrame166}
                      alt="Contact Toggle Icon"
                      width={21}
                      height={18}
                    />
                  )}
                </button>
                <button
                  onClick={toggleDropdownSearch}
                  className="flex mr-2 text-[20px] text-white font-bold items-center hidden lg:flex"
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
                className="inline-flex items-center justify-center w-[120px] h-[38px] px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </nav>
        </header>
      )}

      {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
      "Template-2" ? (
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
        "Template-1" ? (
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
        <div className="bg-white font-medium inline-flex items-center md:ml-80">
          <div className="flex flex-col items-center">
            <Link
              href={
                dataNav?.menus?.nodes[0].header?.subFirstLink !== null
                  ? dataNav?.menus?.nodes[0].header?.subFirstLink?.url
                  : "/"
              }
              className={`breaking_news px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink ===
                  dataNav?.menus?.nodes[0].header?.subFirstLink?.url ||
                router.asPath ===
                  dataNav?.menus?.nodes[0].header?.subFirstLink?.url
                  ? "border-b-3 bg-change2"
                  : ""
              }`}
              onClick={() =>
                handleLinkClick(
                  dataNav?.menus?.nodes[0].header?.subFirstLink?.url
                )
              }
            >
              {dataNav !== undefined &&
                dataNav?.menus?.nodes[0].header.subFirst}
            </Link>
            {activeLink ===
              dataNav?.menus?.nodes[0].header?.subFirstLink?.url &&
              router.asPath ===
                dataNav?.menus?.nodes[0].header?.subFirstLink?.url && (
                <hr className="w-full bg-change2" />
              )}
          </div>

          <div className="flex flex-col items-center">
            <Link
              href={
                dataNav?.menus?.nodes[0].header?.subSecondLink !== null
                  ? dataNav?.menus?.nodes[0].header?.subSecondLink?.url
                  : "/"
              }
              className={`politics px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink ===
                  dataNav?.menus?.nodes[0].header?.subSecondLink?.url ||
                router.asPath ===
                  dataNav?.menus?.nodes[0].header?.subSecondLink?.url
                  ? `border-b-3 bg-change`
                  : ""
              }`}
              onClick={() =>
                handleLinkClick(
                  dataNav?.menus?.nodes[0].header?.subSecondLink?.url
                )
              }
            >
              {dataNav !== undefined &&
                dataNav?.menus?.nodes[0].header.subSecond}
            </Link>
            {activeLink ===
              dataNav?.menus?.nodes[0].header?.subSecondLink?.url &&
              router.asPath ===
                dataNav?.menus?.nodes[0].header?.subSecondLink?.url && (
                <hr className="w-full bg-change" />
              )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              href={
                dataNav?.menus?.nodes[0].header?.subThirdLink !== null
                  ? dataNav?.menus?.nodes[0].header?.subThirdLink?.url
                  : "/"
              }
              className={`px-4 text-gray-800 hover:bg-gray-100 ${
                activeLink ===
                  dataNav?.menus?.nodes[0].header?.subThirdLink?.url ||
                router.asPath ===
                  dataNav?.menus?.nodes[0].header?.subThirdLink?.url
                  ? "border-b-3 bg-change1"
                  : ""
              }`}
              onClick={() =>
                handleLinkClick(
                  dataNav?.menus?.nodes[0].header?.subThirdLink?.url
                )
              }
            >
              {dataNav !== undefined &&
                dataNav?.menus?.nodes[0].header.subThird}
            </Link>
            {activeLink ===
              dataNav?.menus?.nodes[0].header?.subThirdLink?.url &&
              router.asPath ===
                dataNav?.menus?.nodes[0].header?.subThirdLink?.url && (
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[612px] pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Type to Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              required
            />
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-black dark:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 011.707 13.707l4.596 4.596a1 1 0 001.414-1.414l-4.596-4.596A7 7 0 1111 4z"
              />
            </svg>
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
            top: "112px",
            left: "0px",
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor,
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
                      dataNav?.menus?.nodes[0].header?.mainMenuFirst}
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
                          dataNav?.menus?.nodes[0].header?.subFirstLink?.url
                        }
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
                        href={
                          dataNav?.menus?.nodes[0].header?.subSecondLink?.url
                        }
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
                        href={
                          dataNav?.menus?.nodes[0].header?.subThirdLink?.url
                        }
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
                  href={
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url
                  }
                  className="flex text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuSecond}
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
                  href={dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url}
                  className="flex text-white font-bold items-center mb-3"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuThird}
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
                      dataNav?.menus?.nodes[0].header?.foreSquareFirstLink?.url
                    }
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menus?.nodes[0].header?.foreSquareFirst}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareSecondLink?.url
                    }
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menus?.nodes[0].header?.foreSquareSecond}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareThirdLink?.url
                    }
                    className="flex text-white font-bold items-center my-2"
                  >
                    {dataNav !== undefined &&
                      dataNav?.menus?.nodes[0].header?.foreSquareThird}
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <Link
                  href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                  href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                  href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                  href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                  href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                  className="px-4 py-2"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                  href={dataNav?.menus?.nodes[0].header?.subFirstLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.subFirst}
                </Link>
                <Link
                  href={dataNav?.menus?.nodes[0].header?.subSecondLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.subSecond}
                </Link>
                <Link
                  href={dataNav?.menus?.nodes[0].header?.subThirdLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.subThird}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuSecond}
                </Link>
                <Link
                  href={dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.mainMenuThird}
                </Link>
              </div>
              <div className="flex flex-col lg:items-center">
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareFirstLink?.url
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.foreSquareFirst}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareSecondLink?.url
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.foreSquareSecond}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareThirdLink?.url
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav !== undefined &&
                    dataNav?.menus?.nodes[0].header?.foreSquareThird}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end items-end"
              style={{ height: "230px" }}
            >
              <Link
                href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                  ?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
                href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl && (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
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
            top: isMobile ? "75px" : "150px",
            left: "0px",
            width: "100%",
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor,
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor:
                dataNav?.menus?.nodes[0].header?.headerBackgroundColor,
            }}
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex justify-between">
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
                    className="inline-flex items-center justify-center w-[120px] h-[38px] px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataNav?.menus?.nodes[0].header?.mainMenuFirst ??
                      "Default Menu First"}
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
                          dataNav?.menus?.nodes[0].header?.subFirstLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subFirst ??
                          "Sub First"}
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
                          dataNav?.menus?.nodes[0].header?.subSecondLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subSecond ??
                          "Sub Second"}
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
                          dataNav?.menus?.nodes[0].header?.subThirdLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subThird ??
                          "Sub Third"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuSecond ??
                    "Main Menu Second"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuThird ??
                    "Main Menu Third"}
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
                      dataNav?.menus?.nodes[0].header?.foreSquareFirstLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareFirst ??
                      "ForeSquare First"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareSecondLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareSecond ??
                      "ForeSquare Second"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareThirdLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareThird ??
                      "ForeSquare Third"}
                  </Link>
                </div>
                <div className="flex justify-end items-end mt-4">
                  <Link
                    href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                            ?.sourceUrl
                        }
                        alt="Whatsapp Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.facebookIcon?.node
                            ?.sourceUrl
                        }
                        alt="Facebook Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.instagramIcon?.node
                            ?.sourceUrl
                        }
                        alt="Instagram Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.twiterIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.twiterIcon?.node
                            ?.sourceUrl
                        }
                        alt="Twitter Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                            ?.sourceUrl
                        }
                        alt="Youtube Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareFirstLink?.url ??
                    "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0].header?.foreSquareFirst ??
                    "ForeSquare First"}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareSecondLink
                      ?.url ?? "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0].header?.foreSquareSecond ??
                    "ForeSquare Second"}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0].header?.foreSquareThirdLink?.url ??
                    "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0].header?.foreSquareThird ??
                    "ForeSquare Third"}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
            </div>
          </nav>
        </header>
      ) : router.pathname === "/subscribe" ? (
        <></>
      ) : router.pathname === "/about" || router.pathname === "/contact-us" ? (
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
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor ||
              "defaultColor",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor:
                dataNav?.menus?.nodes[0].header?.headerBackgroundColor ||
                "defaultColor",
            }}
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex justify-between">
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
                    className="inline-flex items-center justify-center w-[120px] h-[38px] px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataNav?.menus?.nodes[0].header?.mainMenuFirst ??
                      "Default Menu First"}
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
                          dataNav?.menus?.nodes[0].header?.subFirstLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subFirst ??
                          "Sub First"}
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
                          dataNav?.menus?.nodes[0].header?.subSecondLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subSecond ??
                          "Sub Second"}
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
                          dataNav?.menus?.nodes[0].header?.subThirdLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subThird ??
                          "Sub Third"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuSecond ??
                    "Main Menu Second"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuThird ??
                    "Main Menu Third"}
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
                      dataNav?.menus?.nodes[0].header?.foreSquareFirstLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareFirst ??
                      "ForeSquare First"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareSecondLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareSecond ??
                      "ForeSquare Second"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareThirdLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareThird ??
                      "ForeSquare Third"}
                  </Link>
                </div>
                <div className="flex justify-end items-end mt-4">
                  <Link
                    href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                            ?.sourceUrl
                        }
                        alt="Whatsapp Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.facebookIcon?.node
                            ?.sourceUrl
                        }
                        alt="Facebook Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.instagramIcon?.node
                            ?.sourceUrl
                        }
                        alt="Instagram Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.twiterIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.twiterIcon?.node
                            ?.sourceUrl
                        }
                        alt="Twitter Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                            ?.sourceUrl
                        }
                        alt="Youtube Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menus?.nodes[0]?.header?.foreSquareFirstLink
                      ?.url ?? "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareFirst ??
                    "ForeSquare First"}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0]?.header?.foreSquareSecondLink
                      ?.url ?? "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareSecond ??
                    "ForeSquare Second"}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.nodes[0]?.header?.foreSquareThirdLink?.url ??
                    "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareThird ??
                    "ForeSquare Third"}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
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
            top: "112px",
            left: "0px",
            width: "100%",
            backgroundColor:
              dataNav?.menus?.nodes[0].header?.headerBackgroundColor ||
              "defaultColor",
          }}
        >
          <nav
            className="bg-header mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
            style={{
              backgroundColor:
                dataNav?.menus?.nodes[0].header?.headerBackgroundColor ||
                "defaultColor",
            }}
          >
            {/* Mobile View */}
            <div className="block lg:hidden items-center">
              <div className="flex flex-col">
                <div className="block lg:hidden flex justify-between">
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
                    className="inline-flex items-center justify-center w-[120px] h-[38px] px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdownMobile}
                    className="flex text-white font-bold items-center mb-3"
                  >
                    {dataNav?.menus?.nodes[0].header?.mainMenuFirst ??
                      "Default Menu First"}
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
                          dataNav?.menus?.nodes[0].header?.subFirstLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subFirst ??
                          "Sub First"}
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
                          dataNav?.menus?.nodes[0].header?.subSecondLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subSecond ??
                          "Sub Second"}
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
                          dataNav?.menus?.nodes[0].header?.subThirdLink?.url ??
                          "/"
                        }
                        className="flex mr-2 text-white font-bold items-center mb-3"
                      >
                        {dataNav?.menus?.nodes[0].header?.subThird ??
                          "Sub Third"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuSecondLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuSecond ??
                    "Main Menu Second"}
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
                    dataNav?.menus?.nodes[0].header?.mainMenuThirdLink?.url ??
                    "/"
                  }
                  className="flex mr-2 text-white font-bold items-center mb-3"
                >
                  {dataNav?.menus?.nodes[0].header?.mainMenuThird ??
                    "Main Menu Third"}
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
                      dataNav?.menus?.nodes[0].header?.foreSquareFirstLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareFirst ??
                      "ForeSquare First"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareSecondLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareSecond ??
                      "ForeSquare Second"}
                  </Link>
                  <Link
                    href={
                      dataNav?.menus?.nodes[0].header?.foreSquareThirdLink
                        ?.url ?? "/"
                    }
                    className="flex text-white font-bold items-center my-2 lg:mr-2"
                  >
                    {dataNav?.menus?.nodes[0].header?.foreSquareThird ??
                      "ForeSquare Third"}
                  </Link>
                </div>
                <div className="flex justify-end items-end mt-4">
                  <Link
                    href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                            ?.sourceUrl
                        }
                        alt="Whatsapp Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.facebookIcon?.node
                            ?.sourceUrl
                        }
                        alt="Facebook Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.instagramIcon?.node
                            ?.sourceUrl
                        }
                        alt="Instagram Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.twiterIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.twiterIcon?.node
                            ?.sourceUrl
                        }
                        alt="Twitter Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                  <Link
                    href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                    className="px-4 py-2"
                  >
                    {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                      ?.sourceUrl ? (
                      <Image
                        priority={true}
                        loader={customLoader}
                        className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                        src={
                          dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                            ?.sourceUrl
                        }
                        alt="Youtube Icon"
                        width={39.99}
                        height={40}
                      />
                    ) : null}
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet View */}
            <div className="hidden lg:block items-center">
              <div className="flex flex-col lg:flex-col">
                <Link
                  href={
                    dataNav?.menus?.nodes[0]?.header?.foreSquareFirstLink
                      ?.url ?? "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareFirst ??
                    "ForeSquare First"}
                </Link>
                <Link
                  href={
                    dataNav?.menus?.nodes[0]?.header?.foreSquareSecondLink
                      ?.url ?? "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareSecond ??
                    "ForeSquare Second"}
                </Link>
                <Link
                  href={
                    dataNav?.menu?.nodes[0]?.header?.foreSquareThirdLink?.url ??
                    "/"
                  }
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  {dataNav?.menus?.nodes[0]?.header?.foreSquareThird ??
                    "ForeSquare Third"}
                </Link>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end lg:items-end"
              style={{ height: "150px" }}
            >
              <Link
                href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.whatsappIcon?.node?.sourceUrl
                    }
                    alt="Whatsapp Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.facebookIcon?.node?.sourceUrl
                    }
                    alt="Facebook Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.instagramIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.instagramIcon?.node
                        ?.sourceUrl
                    }
                    alt="Instagram Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                    }
                    alt="Twitter Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
              </Link>
              <Link
                href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                className="px-4 py-2"
              >
                {dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl ? (
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-8 w-8 mx-1 hover:scale-110 hover:opacity-80"
                    src={
                      dataIcon?.menu?.socialIcons?.youtubeIcon?.node?.sourceUrl
                    }
                    alt="Youtube Icon"
                    width={39.99}
                    height={40}
                  />
                ) : null}
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

Nav.query = gql`
  query HeaderQuery {
    generalSettings {
      title
      description
    }
    menuItems(where: { location: PRIMARY }) {
      nodes {
        path
        label
        childItems {
          nodes {
            title
            path
          }
        }
      }
    }
  }
`;

export default Nav;
