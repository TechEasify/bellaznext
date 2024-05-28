import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ExportedImage from "next-image-export-optimizer";
import SocialIcons from "../../public/images/SocialIcons.svg";
import email from "../../public/images/email.svg";
import SocialIcons1 from "../../public/images/SocialIcons1.svg";
import SocialIcons2 from "../../public/images/SocialIcons2.svg";
import PrimaryBlue2 from "../../public/images/PrimaryBlue2.svg";
import google from "../../public/images/google.svg";
import marvel from "../../public/images/marvel.svg";
import Wb from "../../public/images/Wb.svg";
import Redbull from "../../public/images/Redbull.svg";
import SV from "../../public/images/SV.svg";
import gucci from "../../public/images/gucci.svg";
import netfilx from "../../public/images/netfilx.svg";
import disney from "../../public/images/disney.svg";
import adidas from "../../public/images/adidas.svg";
import starbucks from "../../public/images/starbucks.svg";
import nike from "../../public/images/nike.svg";
import calvinkelvin from "../../public/images/calvinkelvin.svg";
import arrowtop_right_thick from "../../public/images/arrowtop_right_thick.svg";
import Frame193 from "../../public/images/Frame193.svg";
import Link from "next/link";

function Index() {
  return (
    <>
      <Nav />
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <h1 className="text-[24px] md:text-[30px] text-center text-black-900 font-bold mb-3">
          Welcome to Belaaz Advertising, Home of{" "}
          <br className="hidden md:block" /> One Platform™.
        </h1>
        <p className="text-[17px] text-center text-base font-semibold text-gray-600 mb-5">
          Belaaz is your online hub for exclusive Jewish and breaking{" "}
          <br className="hidden md:block" />
          news, delivered through our website and social media platforms.{" "}
          <br className="hidden md:block" />
          Advertise with us to reach a diverse range of audiences.
        </p>
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center w-full h-12 px-8 font-semibold md:w-auto focus:outline-none"
            style={{ color: "#002D73", border: "1px solid #002D73" }}
          >
            ADVERTISE WITH US
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex space-x-3 mr-5">
            <p className="text-[18px] text-center text-base font-semibold text-gray-600">
              SHARE
            </p>
            <ExportedImage
              priority={true}
              className="h-5 w-5"
              src={SocialIcons}
              alt="Search Icon"
            />
            <ExportedImage
              priority={true}
              className="h-5 w-5"
              src={email}
              alt="email"
            />
          </div>
          <div className="flex space-x-3 mr-5">
            <p className="text-[18px] text-center text-base font-semibold text-gray-600">
              FOLLOW
            </p>
            <ExportedImage
              priority={true}
              className="h-5 w-5"
              src={SocialIcons1}
              alt="Search Icon"
            />
            <ExportedImage
              priority={true}
              className="h-5 w-5"
              src={SocialIcons}
              alt="SocialIcons"
            />
            <ExportedImage
              priority={true}
              className="h-5 w-5"
              src={SocialIcons2}
              alt="SocialIcons"
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
        />
      </div>
      <div className="flex justify-center mt-10">
        <p className="text-[17px] text-center text-base font-semibold mb-5">
          Companies that trust us.
        </p>
      </div>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={google}
          alt="google"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={marvel}
          alt="marvel"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={Wb}
          alt="Wb"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={Redbull}
          alt="Redbull"
        />
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={SV}
          alt="SV"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={gucci}
          alt="gucci"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={netfilx}
          alt="netfilx"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={disney}
          alt="disney"
        />
      </div>
      <hr className="border-gray-300 my-10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-3">
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={adidas}
          alt="adidas"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={starbucks}
          alt="starbucks"
        />
        <ExportedImage
          className="h-25 mx-auto"
          priority={true}
          src={nike}
          alt="nike"
        />
        <ExportedImage
          className="h-20 mx-auto"
          priority={true}
          src={calvinkelvin}
          alt="calvinkelvin"
        />
      </div>
      <hr className="border-gray-300 mb-96" />
      <div
        className="px-4 py-20 mx-auto max-w-screen-xl"
        style={{
          backgroundImage: `url(${Frame193.src})`,
          position: "absolute",
          top: "208%",
          left: "5%",
          width: "90%",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <h5 className="text-[24px] md:text-[36px] text-white font-bold mb-6 md:mb-0 md:mr-10">
            TO LEARN MORE <br className="hidden md:block" /> ABOUT ADVERTISING{" "}
            <br className="hidden md:block" /> CONTACT US
          </h5>
          <Link href="#">
            <span className="flex flex-col md:flex-row items-center text-[24px] md:text-[36px] text-white font-bold underline mb-3 md:mb-0 md:mr-3">
              Ads@belaaz.com
              <ExportedImage
                className="h-10 ml-2"
                priority={true}
                src={arrowtop_right_thick}
                alt="arrowtop_right_thick"
              />
            </span>
            <span
              className="text-[24px] md:text-[36px] text-white font-bold"
              style={{ color: "#40A6FB" }}
            >
              917-623-2692
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
