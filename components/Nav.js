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
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { gql } from "@apollo/client";

const Nav = (props) => {
  console.log(props, "props");
  const { openDialog } = useDialog();
  const router = useRouter();
  console.log(router.pathname, "router");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [isContactHeaderVisible, setContactHeaderVisible] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    setSubscribe(router.pathname)
  }, [subscribe])

  console.log(subscribe, "subscribe");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsDropdownSearch(false);
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
    console.log("iafvgakfjvbkafafv");

    router.push({
      pathname: "/subscribe",
      query: { subscribe: subscribe }
    });
  }

  return (
    <>
      {router.pathname === "/contact_us" ? (
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
            </div>
          </nav>
        </header>
      ) : router.pathname === "/article" ? (
        <header className="bg-black">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 justify-between lg:justify-start items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14"
                  src={Primarylogo}
                  alt="Primarylogo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                onClick={handleSub}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r focus:outline-none"
              >
                Subscribe
              </button>
              <button
                onClick={toggleContactHeader}
                className="flex mr-2 text-white font-bold items-center"
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
            </div>
          </nav>
        </header>
      ) : (
        <header className="bg-header">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 justify-between lg:justify-start items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">BELAAZ</span>
                <ExportedImage
                  priority={true}
                  className="h-12 w-auto md:h-14"
                  src={Primarylogo}
                  alt="Primarylogo"
                />
              </Link>
              <div className="flex flex-1 justify-center lg:justify-start items-center">
                <div className="relative mx-2 md:mx-5">
                  <button
                    onClick={toggleDropdown}
                    className="flex text-white font-bold items-center"
                  >
                    News
                    <ExportedImage
                      priority={true}
                      className="h-3 w-3 ml-2"
                      src={Vector1}
                      alt="Dropdown Icon"
                    />
                  </button>
                </div>
                <button
                  onClick={() => router.push("/insights")}
                  className="flex mr-2 text-white font-bold items-center"
                >
                  Insights
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector}
                    alt="Dropdown Icon"
                  />
                </button>
                <button
                  onClick={() => router.push("/music")}
                  className="flex mr-2 text-white font-bold items-center"
                >
                  Music
                  <ExportedImage
                    priority={true}
                    className="h-3 w-3 mx-2"
                    src={Vector2}
                    alt="Dropdown Icon"
                  />
                </button>
                <button
                  onClick={toggleContactHeader}
                  className="flex mr-2 text-white font-bold items-center"
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
                  className="flex mr-2 text-white font-bold items-center"
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

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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

      {router.pathname === "/music" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#25AC7D" }}
        >
          <span className="text-white font-medium">MUSIC</span>
        </div>
      ) : router.pathname === "/insights" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#1662D4" }}
        >
          <span className="text-white font-medium">INSIGHTS</span>
        </div>
      ) : router.pathname === "/jewish_news" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#57A0EE" }}
        >
          <span className="text-white font-medium">JEWISH NEWS</span>
        </div>
      ) : router.pathname === "/breaking_news" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#ce3a42" }}
        >
          <span className="text-white font-medium">BREAKING NEWS</span>
        </div>
      ) : router.pathname === "/politics" ? (
        <div
          className="w-full h-7 inline-flex items-center justify-center"
          style={{ background: "#FFA500" }}
        >
          <span className="text-white font-medium">POLITICS</span>
        </div>
      ) : (
        <div>
          {/* <span className="text-white font-medium">BREAKING NEWS</span> */}
        </div>
      )}

      {isDropdownOpen && (
        <div className="w-full bg-white font-medium inline-flex items-center md:ml-28">
          <Link
            href="/breaking_news"
            className="px-4 text-gray-800 hover:bg-gray-100"
          >
            Breaking News
          </Link>
          <Link
            href="/politics"
            className="px-4 text-gray-800 hover:bg-gray-100"
          >
            Politics
          </Link>
          <Link
            href="/jewish_news"
            className="px-4 text-gray-800 hover:bg-gray-100"
          >
            Jewish News
          </Link>
          <button
            onClick={closeDropdown}
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
        <div className="w-full bg-white font-medium inline-flex items-center md:ml-10 py-2">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to Search"
              style={{ width: "500px", marginRight: "10px" }}
              required
            />
          </div>
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
      )}

      {router.pathname === "/article" ? (
        <header
          className={`bg-header transition-all duration-500 ${
            isContactHeaderVisible
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            position: "absolute",
            zIndex: "9999999999",
            top: "87px",
            left: "0px",
            background: "black",
            width: "100%",
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="items-center flex">
              <div className="flex flex-col lg:flex-col mr-5">
                <button
                  onClick={() => router.push("/breaking_news")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Breaking News
                </button>
                <button
                  onClick={() => router.push("/politics")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Politics
                </button>
                <button
                  onClick={() => router.push("/jewish_news")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Jewish News
                </button>
                <button
                  onClick={() => router.push("/insights")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Insights
                </button>
                <button
                  onClick={() => router.push("/music")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Music
                </button>
              </div>
              <div className="flex flex-col lg:flex-col lg:items-center">
                <button
                  onClick={() => router.push("/contact_us")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Contact
                </button>
                <button
                  onClick={() => router.push("/contact_us")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Submit News
                </button>
                <button
                  onClick={() => router.push("/advertise")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Advertise
                </button>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end items-end"
              style={{ height: "230px" }}
            >
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </button>
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
            top: "87px",
            left: "0px",
            width: "100%",
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl items-center justify-around p-4 lg:px-6"
            aria-label="Global"
          >
            <div className="items-center">
              <div className="flex flex-col lg:flex-col">
                <button
                  onClick={() => router.push("/contact_us")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Contact
                </button>
                <button
                 onClick={() => router.push("/contact_us")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Submit News
                </button>
                <button
                  onClick={() => router.push("/advertise")}
                  className="flex text-white font-bold items-center my-2 lg:mr-2"
                >
                  Advertise
                </button>
              </div>
            </div>
            <div
              className="hidden lg:flex lg:justify-end items-end"
              style={{ height: "150px" }}
            >
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group}
                  alt="Whatsapp Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group1}
                  alt="Facebook Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group2}
                  alt="Instagram Icon"
                />
              </button>
              <button onClick={closeDropdown} className="px-4 py-2">
                <ExportedImage
                  priority={true}
                  className="h-8 w-8 mx-1"
                  src={Group3}
                  alt="Twitter Icon"
                />
              </button>
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

