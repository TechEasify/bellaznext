import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Frame_209 from "../../public/images/Frame_209.png";
import Frame_208 from "../../public/images/Frame_208.png";
import News193 from "../../public/images/News193.svg";
import whatsapp1 from "../../public/images/whatsapp1.svg";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useDialog } from "../../components/DialogContext";
import getConfig from "next/config";
import { useHeader } from "../../components/HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const { publicRuntimeConfig } = getConfig();
const { name, url } = publicRuntimeConfig.site;

function Index() { 
  const { contactQuery } = useDialog();
  const { seoData } = useHeader();
  console.log(seoData, "contact data");
  console.log(contactQuery, "datadatadatadata contact");
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  let title;
  let description;
  let canonical;

  console.log(router.asPath, "url contact");

  seoData?.pages?.nodes.flatMap((item) => {
    console.log(item, "item page");
    if (item.title === "Contact Us" && router.asPath === `/${item.slug}`) {
      console.log("if inside", item?.seo?.title);
      title = item?.seo?.title || "Belaaz News";
      description = item?.seo?.metaDesc || "Default Description";
      canonical = item?.seo?.canonical || `${url}${router.asPath}`;
    }
  });

  return (
    <>
      <Layout title={title} description={description} canonical={canonical}>
        <div className="px-4 py-8 mx-auto max-w-screen-xl">
          <nav className="flex hidden md:block" aria-label="Breadcrumb">
            <ol className="inline-flex items-center mb-3 sm:mb-0">
              <li>
                <div className="flex items-center">
                  <button
                    id="dropdownProject"
                    data-dropdown-toggle="dropdown-project"
                    className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                    onClick={() => router.push("/")}
                  >
                    Home
                  </button>
                </div>
              </li>
              <span className="mx-2 text-gray-400">/</span>
              <li aria-current="page">
                <div className="flex items-center">
                  <button
                    id="dropdownDatabase"
                    data-dropdown-toggle="dropdown-database"
                    className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                  >
                    Contact us
                  </button>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold mb-3">
            Contact us
          </h1>
        </div>
        <div
          className="px-4 py-8 mx-auto max-w-screen-xl mb-20"
          style={!isMobile ? { backgroundImage: `url(${News193.src})`, backgroundSize: 'cover' } : {}}
        >
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-blue-100 text-blue-600 dark:text-white w-50 px-10"
            className="bg-white w-full md:w-1/2 mx-auto"
          >
            <h2 id="accordion-color-heading-1">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${
                  openAccordion === 1 ? "bg-blue-100 dark:bg-gray-800" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                <span>
                  {contactQuery?.page !== undefined &&
                    contactQuery?.page?.contactUs?.advertise?.advertiseTitle}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openAccordion === 1 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-1"
              className={`${
                openAccordion === 1 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
              aria-labelledby="accordion-color-heading-1"
            >
              <p className="mb-2 font-normal">
                {contactQuery?.page !== undefined &&
                  contactQuery?.page?.contactUs?.advertise?.description}
              </p>
              <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
                <Link
                  // href={
                  //   data.page !== undefined &&
                  //   data.page.contactUs.advertise.emailAddress
                  // }
                  href={`mailto:${contactQuery?.page?.contactUs?.advertise?.emailAddress}?subject=Subject&body=Message%20body`}
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[88px] mr-2 object-cover"
                    src={Frame_209}
                    alt="Frame_209"
                    width={88}
                    height={32}
                  />
                </Link>
                <Link
                  href={
                    contactQuery?.page !== undefined ?
                    contactQuery?.page?.contactUs?.advertise?.whatsappLink : "/"
                  }
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[140px] mr-2 object-cover"
                    src={Frame_208}
                    alt="Frame_208"
                    width={140}
                    height={32}
                  />
                </Link>
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.advertise.emailAddress}
                </Link> */}
              </div>
              <div className="flex flex-col justify-between md:flex-row text-gray-500 dark:text-gray-400">
                <span className="mr-2 text-black">929-9-Belaaz (235-229)</span>
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.advertise.whatsappLink}
                </Link> */}
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 underline text-end"
                >
                  Know more
                </Link>
              </div>
            </div>
            <h2 id="accordion-color-heading-2">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${
                  openAccordion === 2 ? "bg-blue-100 dark:bg-gray-800" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                <span>
                  {contactQuery?.page !== undefined &&
                    contactQuery?.page?.contactUs?.submitNewsTip?.submitNewsTipTitle}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openAccordion === 2 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-2"
              className={`${
                openAccordion === 2 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
              aria-labelledby="accordion-color-heading-2"
            >
              <p className="mb-2 font-normal">
                {contactQuery?.page !== undefined &&
                  contactQuery?.page?.contactUs?.submitNewsTip?.description}
              </p>
              <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
                <Link
                  // href={
                  //   data.page !== undefined &&
                  //   data.page.contactUs.submitNewsTip.emailAddress
                  // }
                  href={`mailto:${contactQuery?.page?.contactUs?.submitNewsTip?.emailAddress}?subject=Subject&body=Message%20body`}
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[88px] mr-2 object-cover"
                    src={Frame_209}
                    alt="Frame_209"
                    width={88}
                    height={32}
                  />
                </Link>
                <Link
                  href={
                    contactQuery?.page !== undefined ?
                    contactQuery?.page?.contactUs?.submitNewsTip?.whatsappLink : "/"
                  }
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[140px] mr-2 object-cover"
                    src={Frame_208}
                    alt="Frame_208"
                    width={140}
                    height={32}
                  />
                </Link>
                {/*                 
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.submitNewsTip.emailAddress}
                </Link> */}
              </div>
              <div className="flex flex-col justify-between md:flex-row text-gray-500 dark:text-gray-400">
                <span className="mr-2 text-black">929-9-Belaaz (235-229)</span>
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.advertise.whatsappLink}
                </Link> */}
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 underline text-end"
                >
                  Know more
                </Link> */}
              </div>
            </div>
            <h2 id="accordion-color-heading-3">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${
                  openAccordion === 3 ? "bg-blue-100 dark:bg-gray-800" : ""
                }`}
                onClick={() => toggleAccordion(3)}
              >
                <span>
                  {contactQuery?.page !== undefined &&
                    contactQuery?.page?.contactUs?.noteToEditor?.noteToEditorTitle}
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openAccordion === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-3"
              className={`${
                openAccordion === 3 ? "" : "hidden"
              } p-5 border border-t-0 border-gray-200 dark:border-gray-700`}
              aria-labelledby="accordion-color-heading-3"
            >
              <p className="mb-2 font-normal">
                {contactQuery?.page !== undefined &&
                  contactQuery?.page?.contactUs?.noteToEditor?.description}
              </p>
              <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
                <Link
                  // href={
                  //   data.page !== undefined &&
                  //   data.page.contactUs.noteToEditor.emailAddress
                  // }
                  href={`mailto:${contactQuery?.page?.contactUs?.noteToEditor?.emailAddress}?subject=Subject&body=Message%20body`}
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[88px] mr-2 object-cover"
                    src={Frame_209}
                    alt="Frame_209"
                    width={88}
                    height={32}
                  />
                </Link>
                <Link
                  href={
                    contactQuery?.page !== undefined ?
                    contactQuery?.page?.contactUs?.noteToEditor?.whatsappLink : "/"
                  }
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Image
                    priority={true}
                    loader={customLoader}
                    className="h-[32px] w-[140px] mr-2 object-cover"
                    src={Frame_208}
                    alt="Frame_208"
                    width={140}
                    height={32}
                  />
                </Link>
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.noteToEditor.emailAddress}
                </Link> */}
              </div>
              <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400">
                <span className="mr-2 text-black">929-9-Belaaz (235-229)</span>
                {/* <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
                >
                  {data.page !== undefined &&
                    data.page.contactUs.noteToEditor.whatsappLink}
                </Link> */}
              </div>
            </div>
            <p className="px-5 py-5 text-[12px] mb-2 text-black-500 dark:text-gray-400">
              Terms & Conditions: Your information will only be used to respond
              to your inquiry and will be treated according to our privacy
              policy.
            </p>
          </div>
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default Index;
