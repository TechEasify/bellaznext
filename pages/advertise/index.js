import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ExportedImage from "next-image-export-optimizer";
import SocialIcons from "../../public/images/SocialIcons.svg";
import email from "../../public/images/email.svg";
import SocialIcons1 from "../../public/images/SocialIcons1.svg";
import Frame193 from "../../public/images/Frame193.svg";
import SocialIcons2 from "../../public/images/SocialIcons2.svg";
import PrimaryBlue2 from "../../public/images/PrimaryBlue2.svg";
import arrowtop_right_thick from "../../public/images/arrowtop_right_thick.svg";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Testimonial from "../../components/Testimonial";

const GET_ADVERTISE_PAGE = gql`
  query ($id: ID = "3114") {
    page(id: $id, idType: DATABASE_ID) {
      advertise {
        title
        description
        button {
          advertiseWithUs
          buttonLink
          buttonTextColor
          buttonBorderColor
          buttonBackgroundColor
        }
        share {
          iconFirst
          email
        }
        follow {
          twiterLink
          instagramLink
          facebookLink
        }
        logoSection {
          backgroundColor
          logoImage {
            node {
              altText
              srcSet
              slug
            }
          }
        }
        clientImages {
          imageA {
            node {
              altText
              srcSet
            }
          }
          imageB {
            node {
              altText
              srcSet
            }
          }
          imageC {
            node {
              altText
              srcSet
            }
          }
          imageD {
            node {
              altText
              srcSet
            }
          }
          imageE {
            node {
              altText
              srcSet
            }
          }
          imageF {
            node {
              altText
              srcSet
            }
          }
          imageG {
            node {
              altText
              srcSet
            }
          }
          imageH {
            node {
              altText
              srcSet
            }
          }
          imageI {
            node {
              altText
              srcSet
            }
          }
          imageJ {
            node {
              altText
              srcSet
            }
          }
          imageK {
            node {
              altText
              srcSet
            }
          }
          imageL {
            node {
              altText
              srcSet
            }
          }
          imageM {
            node {
              altText
              srcSet
            }
          }
          imageN {
            node {
              altText
              srcSet
            }
          }
          imageO {
            node {
              altText
              srcSet
            }
          }
          imageP {
            node {
              altText
              srcSet
            }
          }
        }
        cta {
          leftSideTitle
          emailAddress
          phoneNumber
          backgroundColor
          backgroundImage {
            node {
              altText
              srcSet
              slug
            }
          }
        }
      }
    }
  }
`;

const SkeletonLoader = () => (
  <>
    <div className="px-4 py-8 mx-auto max-w-screen-xl animate-pulse bg-gray-300">
      <h1 className="text-[24px] md:text-[30px] text-center text-black-900 font-bold mb-3 animate-pulse animate-pulse bg-gray-300" />
      <p className="text-[17px] text-center text-base font-semibold text-gray-600 mb-5 animate-pulse bg-gray-300" />
      <div className="flex justify-center animate-pulse"></div>

      <div className="flex flex-wrap justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4 animate-pulse bg-gray-300">
        <div className="flex space-x-3 mr-5 animate-pulse bg-gray-300"></div>
        <div className="flex space-x-3 mr-5 animate-pulse bg-gray-300"></div>
        <div className="flex space-x-3 ml-5 animate-pulse bg-gray-300"></div>
      </div>
    </div>
    <div className="px-4 py-16 animate-pulse bg-gray-300"></div>
    <div className="flex justify-center items-center mt-10 animate-pulse bg-gray-300">
      <p className="text-[17px] text-center text-base font-semibold mb-5 animate-pulse bg-gray-300"></p>
    </div>
    <hr className="border-gray-300 animate-pulse bg-gray-300" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3 animate-pulse bg-gray-300"></div>
    <hr className="border-gray-300 my-10 animate-pulse" />
    <div className="grid bg-gray-300 grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3 animate-pulse"></div>
    <hr className="border-gray-300 my-10 animate-pulse" />
    <div className="grid grid-cols-2 bg-gray-300 md:grid-cols-4 gap-4 items-center mt-3 animate-pulse"></div>
    <hr className="border-gray-300 bg-gray-300 mb-96 animate-pulse" />
    <div className="px-4 py-20 mx-auto bg-gray-300 max-w-screen-xl animate-pulse">
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left animate-pulse bg-gray-300">
        <h5 className="text-[24px] md:text-[36px] text-white font-bold mb-6 md:mb-0 md:mr-10 animate-pulse bg-gray-300"></h5>
      </div>
    </div>
  </>
);

function Index() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ADVERTISE_PAGE);
  console.log(data, "data");
  if (loading) return <SkeletonLoader />;
  if (error) return <p>Error: {error.message}</p>;

  const getImageSrc = (srcSet) => srcSet.split(",")[0].split(" ")[0];

  return (
    <>
      <Nav />
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <h1 className="text-[24px] md:text-[30px] text-center text-black-900 font-bold mb-3">
          {data.page.advertise.title}
        </h1>
        <p
          className="text-[17px] text-center text-base font-semibold text-gray-600 mb-5"
          dangerouslySetInnerHTML={{ __html: data.page.advertise.description }}
        />
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center w-full h-12 px-8 font-semibold md:w-auto focus:outline-none"
            style={{
              color: data.page.advertise.button.buttonTextColor,
              border: `1px solid ${data.page.advertise.button.buttonBorderColor}`,
              backgroundColor: data.page.advertise.button.buttonBackgroundColor,
            }}
            onClick={() => router.push(data.page.advertise.button.buttonLink)}
          >
            {data.page.advertise.button.advertiseWithUs}
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex space-x-3 mr-5">
            <p className="text-[18px] text-center text-base font-semibold text-gray-600">
              SHARE
            </p>
            <ExportedImage
              priority={true}
              width={70}
              height={70}
              className="h-5 w-5 cursor-pointer"
              src={SocialIcons}
              alt="Social Icon"
              onClick={() =>
                (window.location.href = data.page.advertise.share.iconFirst)
              }
            />
            <ExportedImage
              width={70}
              height={70}
              priority={true}
              className="h-5 w-5 cursor-pointer"
              src={email}
              alt="Email Icon"
              onClick={() =>
                (window.location.href = `mailto:${data.page.advertise.share.email}`)
              }
            />
          </div>
          <div className="flex space-x-3 mr-5">
            <p className="text-[18px] text-center text-base font-semibold text-gray-600">
              FOLLOW
            </p>
            <ExportedImage
              width={70}
              height={70}
              priority={true}
              className="h-5 w-5 cursor-pointer"
              src={SocialIcons1}
              alt="Facebook Icon"
              onClick={() =>
                (window.location.href = data.page.advertise.follow.facebookLink)
              }
            />
            <ExportedImage
              width={70}
              height={70}
              priority={true}
              className="h-5 w-5 cursor-pointer"
              src={SocialIcons}
              alt="Twitter Icon"
              onClick={() =>
                (window.location.href = data.page.advertise.follow.twiterLink)
              }
            />
            <ExportedImage
              width={70}
              height={70}
              priority={true}
              className="h-5 w-5 cursor-pointer"
              src={SocialIcons2}
              alt="Instagram Icon"
              onClick={() =>
                (window.location.href =
                  data.page.advertise.follow.instagramLink)
              }
            />
          </div>
          <div className="flex space-x-3 ml-5">
            <Link
              className="underline font-semibold"
              href="https://belaaz.com/"
            >
              BELAAZ.COM/
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-16" style={{ background: "#002D73" }}>
        <ExportedImage
          style={{ margin: "0 auto" }}
          priority={true}
          src={PrimaryBlue2}
          alt="PrimaryBlue2"
          width="80%"
          height="auto"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="text-[17px] text-center text-base font-semibold mb-5">
          Companies that trust us.
        </p>
      </div>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        {data.page.advertise.clientImages.imageA && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageA.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageA.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageB && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageB.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageB.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageC && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageC.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageC.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageD && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageD.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageD.node.altText}
            width={150}
            height={100}
          />
        )}
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        {data.page.advertise.clientImages.imageE && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageE.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageE.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageF && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageF.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageF.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageG && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageG.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageG.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageH && (
          <ExportedImage
            className="h-25 mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageH.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageH.node.altText}
            width={150}
            height={100}
          />
        )}
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        {data.page.advertise.clientImages.imageI && (
          <ExportedImage
            className="object-cover w-[150px] h-[100px] mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageI.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageI.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageJ && (
          <ExportedImage
            className="object-cover w-[150px] h-[100px] mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageJ.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageJ.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageK && (
          <ExportedImage
            className="object-cover w-[150px] h-[100px] mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageK.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageK.node.altText}
            width={150}
            height={100}
          />
        )}
        {data.page.advertise.clientImages.imageL && (
          <ExportedImage
            className="object-cover w-[150px] h-[100px] mx-auto"
            priority={true}
            src={getImageSrc(
              data.page.advertise.clientImages.imageL.node.srcSet
            )}
            alt={data.page.advertise.clientImages.imageL.node.altText}
            width={150}
            height={100}
          />
        )}
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="mb-96">
        <Testimonial />
      </div>
      <div className="px-4 py-20 mx-auto max-w-screen-xl relative">
        <div
          className="absolute top-[-143%] md:top-[-40%] left-[5%] w-[90%] px-4 py-4 mx-auto max-w-screen-xl"
          style={{
            background: "#40A6FB",
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-20 py-6">
            <h5
              className="text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-6 md:mb-0 md:mr-10"
              style={{ color: "#002D73" }}
            >
              {data.page.advertise.cta.leftSideTitle}
            </h5>
            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                  EMAIL:
                </span>
                <Link href={`mailto:${data.page.advertise.cta.emailAddress}`}>
                  <span className="flex flex-col md:flex-row items-center text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold underline mb-3 md:mb-0 md:mr-3">
                    {data.page.advertise.cta.emailAddress}
                    <ExportedImage
                      className="h-8 md:h-10 ml-2"
                      priority={true}
                      src={arrowtop_right_thick}
                      alt="arrowtop_right_thick"
                    />
                  </span>
                </Link>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0">
                <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] text-white font-bold mr-5">
                  CALL:
                </span>
                <Link href={`tel:${data.page.advertise.cta.phoneNumber}`}>
                  <span className="text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold">
                    {data.page.advertise.cta.phoneNumber}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Index;
