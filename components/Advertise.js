import React from "react";
import SocialIconsX from "../public/images/SocialIconsX.svg";
import Ademail from "../public/images/Ademail.svg";
import SocialIcon from "../public/images/SocialIcon.svg";
import SocialIcons3 from "../public/images/SocialIcons3.svg";
import PrimaryBlue2 from "../public/images/PrimaryBlue2.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Testimonial from "../components/Testimonial";
import Primarylogo from "../public/images/Primarylogo.svg";
import Image from "next/image";
import { useDialog } from "../components/DialogContext";
import Layout from "../components/Layout";

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

function Advertise({advertiseQuery}) {
    console.log(advertiseQuery, "advertiseQuery");
    
  const router = useRouter();
  const getImageSrc = (srcSet) => srcSet.split(",")[0].split(" ")[0];

  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <div className="px-4 py-8 mx-auto max-w-[821px]">
          <h1 className="text-[24px] md:text-[40px] text-center text-black-900 font-semibold mb-3">
            {advertiseQuery?.nodeByUri?.advertise?.title}
          </h1>
          <p
            className="text-[24px] text-center text-base font-light text-gray-600 mb-5"
            dangerouslySetInnerHTML={{
              __html: advertiseQuery?.nodeByUri?.advertise?.description,
            }}
          />
          <div className="flex justify-center">
            <button
              className="inline-flex items-center justify-center w-[278px] h-[49px] px-8 font-semibold md:w-auto focus:outline-none tracking-widest uppercase hover:bg-skyBlue"
              style={{
                color: advertiseQuery?.nodeByUri?.advertise?.button?.buttonTextColor,
                border: `1px solid ${advertiseQuery?.nodeByUri?.advertise?.button?.buttonBorderColor}`,
                backgroundColor:
                advertiseQuery?.nodeByUri?.advertise?.button
                    ?.buttonBackgroundColor,
              }}
              onClick={() =>
                router.push(advertiseQuery?.nodeByUri?.advertise?.button?.buttonLink)
              }
            >
              {advertiseQuery?.nodeByUri?.advertise?.button?.advertiseWithUs}
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-left md:items-center mt-8 space-y-4 md:space-y-0 md:space-x-11">
            <div className="flex items-left md:items-center">
            <div className="flex items-left md:items-center space-x-3 mr-5">
              <p className="text-[18px] tracking-widest text-center text-base font-semibold text-gray-600">
                SHARE
              </p>
              <Image
                priority={true}
                loader={customLoader}
                width={20}
                height={18}
                className="h-[18px] w-[20px] cursor-pointer"
                src={SocialIconsX}
                alt="Social Icon"
                onClick={() =>
                  (window.location.href =
                    advertiseQuery?.nodeByUri?.advertise?.share?.iconFirst)
                }
              />
              <Image
                priority={true}
                loader={customLoader}
                width={20}
                height={20}
                className="h-[20px] w-[20px] cursor-pointer"
                src={Ademail}
                alt="Email Icon"
                onClick={() =>
                  (window.location.href = `mailto:${advertiseQuery?.nodeByUri?.advertise?.share?.email}`)
                }
              />
            </div>
            <div className="flex space-x-3 mr-10 items-left md:items-center">
              <p className="text-[18px] text-center text-base font-semibold text-gray-600 tracking-widest">
                FOLLOW
              </p>
              <Image
                priority={true}
                loader={customLoader}
                width={70}
                height={70}
                className="h-5 w-5 cursor-pointer"
                src={SocialIcon}
                alt="Facebook Icon"
                onClick={() =>
                  (window.location.href =
                    advertiseQuery?.nodeByUri?.advertise?.follow?.facebookLink)
                }
              />
              <Image
                priority={true}
                loader={customLoader}
                width={70}
                height={70}
                className="h-5 w-5 cursor-pointer"
                src={SocialIconsX}
                alt="Twitter Icon"
                onClick={() =>
                  (window.location.href =
                    advertiseQuery?.nodeByUri?.advertise?.follow?.twiterLink)
                }
              />
              <Image
                priority={true}
                loader={customLoader}
                width={70}
                height={70}
                className="h-5 w-5 cursor-pointer"
                src={SocialIcons3}
                alt="Instagram Icon"
                onClick={() =>
                  (window.location.href =
                    advertiseQuery?.nodeByUri?.advertise?.follow?.instagramLink)
                }
              />
            </div>
            <div className="flex space-x-3 mx-10 items-left md:items-center">
              <Link
                className="text-[18px] font-semibold hover:underline"
                href="https://belaaz.com/"
                style={{ color: "#40A6FB" }}
              >
                BELAAZ.COM/
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16" style={{ background: "#002D73" }}>
          <Image
            priority={true}
            loader={customLoader}
            style={{ margin: "0 auto" }}
            src={PrimaryBlue2}
            alt="PrimaryBlue2"
            width={600}
            height={128}
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <p className="text-[17px] text-center text-base font-semibold mb-5">
            Companies that trust us.
          </p>
        </div>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageA && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageA?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageA?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageB && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageB?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageB?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageC && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageC?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageC?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageD && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageD?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageD?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
        </div>
        <hr className="border-gray-300 my-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageE && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageE?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageE?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageF && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageF?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageF?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageG && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageG?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageG?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageH && (
            <Image
              priority={true}
              loader={customLoader}
              className="h-25 mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageH?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageH?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
        </div>
        <hr className="border-gray-300 my-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageI && (
            <Image
              priority={true}
              loader={customLoader}
              className="object-cover w-[150px] h-[100px] mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageI?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageI?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageJ && (
            <Image
              priority={true}
              loader={customLoader}
              className="object-cover w-[150px] h-[100px] mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageJ?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageJ?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageK && (
            <Image
              priority={true}
              loader={customLoader}
              className="object-cover w-[150px] h-[100px] mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageK?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageK?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
          {advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageL && (
            <Image
              priority={true}
              loader={customLoader}
              className="object-cover w-[150px] h-[100px] mx-auto"
              src={getImageSrc(
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageL?.node
                  ?.srcSet
              )}
              alt={
                advertiseQuery?.nodeByUri?.advertise?.clientImages?.imageL?.node
                  ?.altText
              }
              width={150}
              height={100}
            />
          )}
        </div>
        <hr className="border-gray-300 my-10" />
        <div className="mb-10 sm:hidden">
          <div
            className="px-4 py-4 mx-auto max-w-screen-xl"
            style={{
              background:
                advertiseQuery?.nodeByUri?.advertise?.cta?.backgroundColor ||
                "#40A6FB",
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-20 py-6">
              <h5
                className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-6 md:mb-0 md:mr-10"
                style={{ color: "#002D73" }}
              >
                {advertiseQuery?.nodeByUri?.advertise?.cta?.leftSideTitle}
              </h5>
              <div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                    EMAIL:
                  </span>
                  <Link
                    href={`mailto:${advertiseQuery?.nodeByUri?.advertise?.cta?.emailAddress}`}
                  >
                    <span className="flex flex-col md:flex-row items-center text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold underline mb-3 md:mb-0 md:mr-3">
                      {advertiseQuery?.nodeByUri?.advertise?.cta?.emailAddress}
                      {/* <ExportedImage
                      className="h-8 md:h-10 ml-2"
                      priority={true}
                      src={arrowtop_right_thick}
                      alt="arrowtop_right_thick"
                    /> */}
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0">
                  <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                    CALL:
                  </span>
                  <Link
                    href={`tel:${advertiseQuery?.nodeByUri?.advertise?.cta?.phoneNumber}`}
                  >
                    <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold">
                      {advertiseQuery?.nodeByUri?.advertise?.cta?.phoneNumber}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mb-52">
          <Testimonial />
        </div>
        <div className="px-4 py-20 hidden sm:block mx-auto max-w-screen-xl relative">
          <div
            className="absolute top-[-143%] md:top-[-40%] left-[5%] w-[90%] px-4 py-4 h-auto mx-auto max-w-screen-xl"
            style={{
              background:
                advertiseQuery?.nodeByUri?.advertise?.cta?.backgroundColor ||
                "#40A6FB",
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-20 py-6">
              <h5
                className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-6 md:mb-0 md:mr-10"
                style={{ color: "#002D73" }}
              >
                {advertiseQuery?.nodeByUri?.advertise?.cta?.leftSideTitle}
              </h5>
              <div>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                    EMAIL:
                  </span>
                  <Link
                    href={`mailto:${advertiseQuery?.nodeByUri?.advertise?.cta?.emailAddress}`}
                  >
                    <span className="flex flex-col md:flex-row items-center text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold underline mb-3 md:mb-0 md:mr-3">
                      {advertiseQuery?.nodeByUri?.advertise?.cta?.emailAddress}
                      {/* <ExportedImage
                      className="h-8 md:h-10 ml-2"
                      priority={true}
                      src={arrowtop_right_thick}
                      alt="arrowtop_right_thick"
                    /> */}
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0">
                  <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                    CALL:
                  </span>
                  <Link
                    href={`tel:${advertiseQuery?.nodeByUri?.advertise?.cta?.phoneNumber}`}
                  >
                    <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold">
                      {advertiseQuery?.nodeByUri?.advertise?.cta?.phoneNumber}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default Advertise;