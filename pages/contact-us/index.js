import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import emailoutline from "../../public/images/email-outline.svg";
import whatsapp1 from "../../public/images/whatsapp1.svg";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const GET_CONTACT_PAGE = gql`
  query AboutPage($id: ID = "3163") {
    page(id: $id, idType: DATABASE_ID) {
      contactUs {
        advertise {
          advertiseTitle
          description
          emailAddress
          whatsappLink
          fieldGroupName
        }
        submitNewsTip {
          description
          emailAddress
          fieldGroupName
          submitNewsTipTitle
          whatsappLink
        }
        noteToEditor {
          description
          emailAddress
          fieldGroupName
          noteToEditorTitle
          whatsappLink
        }
      }
    }
  }
`;

function Index() {
  const { loading, error, data } = useQuery(GET_CONTACT_PAGE);
  console.log(data, "contact data");
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  if (loading)
    return (
      <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse bg-gray-300">
        <nav className="flex animate-pulse bg-gray-300" aria-label="Breadcrumb">
          <ol className="inline-flex items-center mb-3 sm:mb-0 animate-pulse bg-gray-300">
            <li>
              <div className="flex items-center animate-pulse bg-gray-300">
                <button
                  id="dropdownProject"
                  data-dropdown-toggle="dropdown-project"
                  className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700 animate-pulse bg-gray-300"
                >
                </button>
              </div>
            </li>
            <span className="mx-2 text-gray-400 animate-pulse bg-gray-300"></span>
            <li aria-current="page animate-pulse bg-gray-300">
              <div className="flex items-center animate-pulse bg-gray-300">
                <button
                  id="dropdownDatabase"
                  data-dropdown-toggle="dropdown-database"
                  className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700 animate-pulse bg-gray-300"
                >
                </button>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-[24px] md:text-[30px] text-black-900 font-bold mb-3 animate-pulse bg-gray-300">
        </h1>
      </div>
      <div
        className="px-4 py-8 mx-auto max-w-screen-xl mb-20 animate-pulse bg-gray-300"
      >
        <div
          id="accordion-color"
          data-accordion="collapse"
          data-active-classes="bg-blue-100 text-blue-600 dark:text-white w-50 px-10"
          className="bg-white w-full md:w-1/2 mx-auto animate-pulse bg-gray-300"
        >
          <h2 id="accordion-color-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 animate-pulse bg-gray-300"
            >
              <span className="animate-pulse bg-gray-300">
              </span>
            </button>
          </h2>
          <div
            id="accordion-color-body-1"
            className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 animate-pulse bg-gray-300"
            aria-labelledby="accordion-color-heading-1"
          >
            <p className="mb-2 font-normal animate-pulse bg-gray-300">
            </p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3 animate-pulse bg-gray-300">
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 animate-pulse bg-gray-300">
              <span className="mr-2 text-black animate-pulse bg-gray-300"></span>
            </div>
          </div>
          <h2 id="accordion-color-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 animate-pulse bg-gray-300"
            >
              <span className="animate-pulse bg-gray-300 animate-pulse bg-gray-300">
              </span>
            </button>
          </h2>
          <div
            id="accordion-color-body-2"
            className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 animate-pulse bg-gray-300"
            aria-labelledby="accordion-color-heading-2"
          >
            <p className="mb-2 font-normal animate-pulse bg-gray-300"></p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3 animate-pulse bg-gray-300">
              <span className="mr-2 text-black animate-pulse bg-gray-300"></span>
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 animate-pulse bg-gray-300">
              <span className="mr-2 text-black animate-pulse bg-gray-300"></span>
            </div>
          </div>
          <h2 className="animate-pulse bg-gray-300">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 animate-pulse bg-gray-300"
            >
              <span className="animate-pulse bg-gray-300">
              </span>
            </button>
          </h2>
          <div
            id="accordion-color-body-3"
            className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 animate-pulse bg-gray-300"
          >
            <p className="mb-2 font-normal animate-pulse bg-gray-300">
            </p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3 animate-pulse bg-gray-300">
              <span className="mr-2 text-black animate-pulse bg-gray-300"></span>
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 animate-pulse bg-gray-300"></div>
          </div>
          <p className="px-5 py-5 text-[12px] mb-2 text-black-500 dark:text-gray-400 animate-pulse bg-gray-300"></p>
        </div>
      </div>
      </>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Nav />
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <nav className="flex" aria-label="Breadcrumb">
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
        style={{ background: "#002D73" }}
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
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3 ${
                openAccordion === 1 ? "bg-blue-100 dark:bg-gray-800" : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <span>
                {data.page !== undefined &&
                  data.page.contactUs.advertise.advertiseTitle}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${openAccordion === 1 ? "rotate-180" : ""}`}
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
              {data.page !== undefined &&
                data.page.contactUs.advertise.description}
            </p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={emailoutline}
                alt="emailoutline"
              />
              <span className="mr-2 text-black">Email :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {data.page !== undefined &&
                  data.page.contactUs.advertise.emailAddress}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={whatsapp1}
                alt="whatsapp1"
              />
              <span className="mr-2 text-black">WhatsApp :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
              >
                {data.page !== undefined &&
                  data.page.contactUs.advertise.whatsappLink}
              </Link>
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
                {data.page !== undefined &&
                  data.page.contactUs.submitNewsTip.submitNewsTipTitle}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${openAccordion === 2 ? "rotate-180" : ""}`}
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
              {data.page !== undefined &&
                data.page.contactUs.submitNewsTip.description}
            </p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={emailoutline}
                alt="emailoutline"
              />
              <span className="mr-2 text-black">Email :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {data.page !== undefined &&
                  data.page.contactUs.submitNewsTip.emailAddress}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={whatsapp1}
                alt="whatsapp1"
              />
              <span className="mr-2 text-black">WhatsApp :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
              >
                {data.page !== undefined &&
                  data.page.contactUs.submitNewsTip.whatsappLink}
              </Link>
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
                {data.page !== undefined &&
                  data.page.contactUs.noteToEditor.noteToEditorTitle}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${openAccordion === 3 ? "rotate-180" : ""}`}
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
              {data.page !== undefined &&
                data.page.contactUs.noteToEditor.description}
            </p>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400 mb-3">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={emailoutline}
                alt="emailoutline"
              />
              <span className="mr-2 text-black">Email :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {data.page !== undefined &&
                  data.page.contactUs.noteToEditor.emailAddress}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row text-gray-500 dark:text-gray-400">
              <ExportedImage
                priority={true}
                className="h-5 w-5 mr-2"
                src={whatsapp1}
                alt="whatsapp1"
              />
              <span className="mr-2 text-black">WhatsApp :</span>
              <Link
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline md:mr-10"
              >
                {data.page !== undefined &&
                  data.page.contactUs.noteToEditor.whatsappLink}
              </Link>
            </div>
          </div>
          <p className="px-5 py-5 text-[12px] mb-2 text-black-500 dark:text-gray-400">
            Terms & Conditions: Your information will only be used to respond to
            your inquiry and will be treated according to our privacy policy.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
