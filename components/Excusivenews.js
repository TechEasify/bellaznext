import ExportedImage from "next-image-export-optimizer";
import React, { useState } from "react";
import VectorRouded from "../public/images/VectorRouded.svg";
import VectorRouded1 from "../public/images/VectorRouded(1).svg";
import Frame396 from "../public/images/Frame396.svg";
import { useDialog } from "./DialogContext";
import { useRouter } from "next/router";
import { subscribeToNewsletter } from "../lib/klaviyo";

const Excusivenews = () => {
  const { bannerData } = useDialog();
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubscribe = async () => {
    try {
      await subscribeToNewsletter(email);
      alert('Thank you for subscribing!');
      setEmail(''); // Clear the email input field
    } catch (error) {
      alert('There was an error subscribing. Please try again later.');
    }
  };
  let backgroundImage =
    bannerData?.page?.homePage?.ctaBackgroundImage?.node?.sourceUrl;

  // Clean up the URL by removing newline characters and trimming spaces
  if (backgroundImage) {
    backgroundImage = backgroundImage.replace(/\s+/g, "");
  }

  console.log(
    bannerData?.page?.homePage?.ctaBackgroundImage,
    "bannerDatabannerDatabannerData"
  );
  console.log(backgroundImage, "backgroundImage");

  return (
    <div
      className="hidden md:block px-1 py-20 mx-auto max-w-[1523px]"
      style={{
        backgroundImage: `url(${backgroundImage || Frame396.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0 auto"
      }}
    >
      <div className="w-full flex flex-col md:flex-row justify-around items-stretch relative">
        <div className="md:mr-20 mb-8 md:mb-0 w-[470px]">
          <h1 className="text-[25px] md:text-[53px] text-white font-semibold mb-2">
            {bannerData?.page?.homePage?.ctaTitle}
          </h1>
          <p className="text-[14px] md:text-[18px] font-semibold text-white">
            {bannerData?.page?.homePage?.ctaDescription}
          </p>
        </div>
        <div className="md:mr-20 mb-8 md:mb-0 w-[470px]" style={{ margin: "auto 0" }}>
          <div className="flex flex-col md:flex-row w-full md:w-auto">
          <div className="flex flex-col w-full md:w-auto">
            <input
              className="h-12 w-full md:w-[320px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mb-2 md:mb-0 md:mr-4"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-[9px] text-white mt-2 font-light">
              By Signing Up, I agree to the Terms & to receive emails from
              Belaaz
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              className="inline-flex items-center justify-center h-12 w-full md:w-auto px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-gradient-to-r focus:outline-none"
              style={{ background: "#40A6FB" }}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excusivenews;
