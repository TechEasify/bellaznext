import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Frame274 from "../../public/images/Frame274.svg";
import Frame275 from "../../public/images/Frame275.svg";
import Frame276 from "../../public/images/Frame276.svg";
import Frame277 from "../../public/images/Frame277.svg";
import Frame278 from "../../public/images/Frame278.svg";
import Link from "next/link";

function Index() {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <Nav />
      <div className="px-4 py-20 mx-auto max-w-screen-xl mb-20">
        <hr className="border-gray-300 mb-5" />
        <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
          <div className="w-full md:w-1/3 mb-5 md:mb-0">
            <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
              ABOUT US
            </h5>
          </div>
          <div className="w-full md:w-2/3 text-left">
            <p className="font-normal">
              Welcome to Belaaz, your go-to source for online exclusive Jewish <br/>
              and Breaking news. Through our website, Instagram, and Twitter <br/>
              channels, we deliver timely updates and insightful coverage across <br/>
              a variety of categories including breaking news, politics, Jewish <br/>
              news, insights, and music.
            </p>
          </div>
        </div>
        <hr className="border-gray-300 mt-5 mb-8" />
        <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
          <div className="w-full md:w-1/3 mb-5 md:mb-0">
            <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
              OUR TEAM
            </h5>
          </div>
          <div className="w-full md:w-2/3 text-left">
            <div className="mb-6 flex flex-col md:flex-row items-center">
              <ExportedImage
                className="h-25 mr-5"
                priority={true}
                src={Frame274}
                alt="Frame274"
              />
              <div>
                <p className="text-[20px] font-semibold text-black">Yeshanahu</p>
                <span>Editor-in-Chief</span>
              </div>
            </div>
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center">
              <div className="flex items-center mb-5 md:mb-0 md:mr-10 w-full">
                <ExportedImage
                  className="h-25 mr-5"
                  priority={true}
                  src={Frame275}
                  alt="Frame275"
                />
                <div>
                  <p className="text-[20px] font-semibold text-black">
                    JohnMichael
                  </p>
                  <span>Deputy Editor-in-Chief</span>
                </div>
              </div>
              <div className="flex items-center mb-5 md:mb-0 md:mr-10 w-full">
                <ExportedImage
                  className="h-25 mr-5"
                  priority={true}
                  src={Frame276}
                  alt="Frame276"
                />
                <div>
                  <p className="text-[20px] font-semibold text-black">
                    Rob William
                  </p>
                  <span>Managing Editor</span>
                </div>
              </div>
            </div>
            <div className="mb-6 flex flex-col md:flex-row items-center justify-center">
              <div className="flex items-center mb-5 md:mb-0 md:mr-10 w-full">
                <ExportedImage
                  className="h-25 mr-5"
                  priority={true}
                  src={Frame277}
                  alt="Frame277"
                />
                <div>
                  <p className="text-[20px] font-semibold text-black">Sarah</p>
                  <span>Associate Editor</span>
                </div>
              </div>
              <div className="flex items-center mb-5 md:mb-0 md:mr-10 w-full">
                <ExportedImage
                  className="h-25 mr-5"
                  priority={true}
                  src={Frame278}
                  alt="Frame278"
                />
                <div>
                  <p className="text-[20px] font-semibold text-black">Jacob</p>
                  <span>Associate Editor</span>
                </div>
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
