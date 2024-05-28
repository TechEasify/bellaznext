import React from "react";
import Primarylogo from "../../public/images/Primarylogo.svg";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";

function index() {
    const router = useRouter();
    console.log(router.query.subscribe, "router");
    const handleClose = () => {
        router.push(router.query.subscribe);
      };
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#002D73" }}>
      <div className="flex justify-between items-center p-4">
        <ExportedImage
          src={Primarylogo}
          loading="lazy"
          alt="Primarylogo"
          className="max-h-32 object-fill hidden md:block"
        />
        <button
          type="button"
          className="text-base w-7 h-7 text-gray-800 rounded-full hidden md:block"
          onClick={handleClose}
        >
          <svg
            className="w-6 h-6 mx-auto p-1"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "white" }}
          >
            <path
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              d="M3,3 L21,21 M3,21 L21,3"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center p-5 md:p-10 lg:p-20 flex-grow">
        <p className="text-[20px] md:text-[25px] text-white font-semibold text-center mb-5">
          Get the latest Jewish and breaking <br className="hidden md:block" />{" "}
          news delivered straight to your inbox.{" "}
          <br className="hidden md:block" /> Subscribe now!
        </p>
        <div className="w-full max-w-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full mb-3 md:mb-0 md:mr-3">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full md:w-auto">
              <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-400 to-blue-500 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
