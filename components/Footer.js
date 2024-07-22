import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React, { useState } from "react";
import Primarylogo from "../public/images/Primarylogo.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import imgbin_whatsapp from "../public/images/imgbin_whatsapp.svg";
import { gql, useQuery } from "@apollo/client";
import { useDialog } from "./DialogContext";
import { useRouter } from "next/router";

const GET_FOOTER_PAGE = gql`
  query footer($id: ID = "229") {
    menu(id: $id, idType: DATABASE_ID) {
      footer {
        companyTitle
        companyFirst
        companyFirstLink {
          url
        }
        companySecond
        companySecondLink {
          url
        }
        companyThird
        companyThirdLink {
          url
        }
        companyFore
        companyForeLink {
          url
        }
        footerBackgroundColor
        newsTitle
        newsFirst
        newsFirstLinks {
          url
        }
        newsSecond
        newsSecondLinks {
          url
        }
        newsThird
        newsThirdLinks {
          url
        }
        newsFore
        newsForeLinks {
          url
        }
        newsFive
        newsFiveLinks {
          url
        }
        belaazTwitter
        belaazTwitterLink
        belaazFacebook
        belaazFacebookLink
        belaazInstagram
        belaazInstagramLink
        belaazYoutube
        belaazYoutubeLink
        belaazTelegram
        belaazTelegramLink
        copyrightText
      }
    }
  }
`;

const Footer = () => {
  const { iconDataResult } = useDialog();
  const router = useRouter();
  const {
    loading: loadingFooter,
    error: errorFooter,
    data: dataFooter,
  } = useQuery(GET_FOOTER_PAGE);

  console.log(dataFooter, "dataFooterdataFooter");

  return (
    <>
      <div className="footer bg-gray-800 text-white">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-center md:hidden">
            <div className="mr-2">
              <button
                className="px-5 py-1 rounded flex items-center"
                style={{ border: "1px solid #25D366" }}
              >
                Status
                <ExportedImage
                  priority={true}
                  className="ml-2 h-4 w-4"
                  src={imgbin_whatsapp}
                  alt="Whatsapp Icon"
                />
              </button>
            </div>
            <div className="">
              <button
                className="px-5 py-1 rounded flex items-center"
                style={{ border: "1px solid #25D366" }}
              >
                Group
                <ExportedImage
                  priority={true}
                  className="ml-2 h-4 w-4"
                  src={imgbin_whatsapp}
                  alt="Whatsapp Icon"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="lg:col-span-12">
              <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                  {/* First Column */}
                  <div className="mb-8 md:mb-0">
                    <h2 className="mb-6 text-[20px] font-semibold text-white">
                      {dataFooter?.menu?.footer?.newsTitle}
                    </h2>
                    <ul className="text-white font-medium">
                      <li className="mb-4">
                        <Link
                          href="/category/breaking-news"
                          className="hover:underline"
                        >
                          {dataFooter?.menu?.footer?.newsFirst}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="/category/politics"
                          className="hover:underline"
                        >
                          {dataFooter?.menu?.footer?.newsSecond}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="/category/jewish-news"
                          className="hover:underline"
                        >
                          {dataFooter?.menu?.footer?.newsThird}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="/category/insights"
                          className="hover:underline"
                        >
                          {dataFooter?.menu?.footer?.newsFore}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href="/category/music"
                          className="hover:underline"
                        >
                          {dataFooter?.menu?.footer?.newsFive}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Second Column */}
                  <div className="mb-8 md:mb-0">
                    <h2 className="mb-6 text-[20px] font-semibold text-white">
                      {dataFooter?.menu?.footer?.companyTitle}
                    </h2>
                    <ul className="text-white font-medium">
                      <li className="mb-4">
                        <Link href="/contact-us" className="hover:underline">
                          {dataFooter?.menu?.footer?.companyFirst}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/about" className="hover:underline">
                          About us
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link href="/advertise" className="hover:underline">
                          {dataFooter?.menu?.footer?.companyThird}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          {dataFooter?.menu?.footer?.companyFore}
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Third Column (Social Links - Hidden on Mobile) */}
                  <div className="hidden md:block">
                    <h2 className="mb-6 text-[20px] font-semibold text-white">
                      Social
                    </h2>
                    <ul className="text-white font-medium">
                      {dataFooter?.menu?.footer?.belaazTwitterLink && (
                        <li className="mb-4">
                          <Link
                            href={dataFooter.menu.footer.belaazTwitterLink}
                            className="hover:underline"
                          >
                            {dataFooter.menu.footer.belaazTwitter}
                          </Link>
                        </li>
                      )}
                      {dataFooter?.menu?.footer?.belaazFacebookLink && (
                        <li className="mb-4">
                          <Link
                            href={dataFooter.menu.footer.belaazFacebookLink}
                            className="hover:underline"
                          >
                            {dataFooter.menu.footer.belaazFacebook}
                          </Link>
                        </li>
                      )}
                      {dataFooter?.menu?.footer?.belaazInstagramLink && (
                        <li className="mb-4">
                          <Link
                            href={dataFooter.menu.footer.belaazInstagramLink}
                            className="hover:underline"
                          >
                            {dataFooter.menu.footer.belaazInstagram}
                          </Link>
                        </li>
                      )}
                      {dataFooter?.menu?.footer?.belaazYoutubeLink && (
                        <li className="mb-4">
                          <Link
                            href={dataFooter.menu.footer.belaazYoutubeLink}
                            className="hover:underline"
                          >
                            {dataFooter.menu.footer.belaazYoutube}
                          </Link>
                        </li>
                      )}
                      {dataFooter?.menu?.footer?.belaazTelegramLink && (
                        <li className="mb-4">
                          <Link
                            href={dataFooter.menu.footer.belaazTelegramLink}
                            className="hover:underline"
                          >
                            {dataFooter.menu.footer.belaazTelegram}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-4 py-5 md:flex-row md:justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href={"/"}>
                <ExportedImage
                  className="h-12 w-auto"
                  src={Primarylogo}
                  alt="Manipal University Jaipur logo - IIHT Surat"
                />
              </Link>
            </div>
            {/* Social Icons and Copyright Section */}
            <div className="text-center">
              <div className="flex justify-center mb-3 space-x-2">
                <Link
                  href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 object-cover"
                    src={Group}
                    alt="Whatsapp Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 object-cover"
                    src={Group1}
                    alt="Facebook Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 object-cover"
                    src={Group2}
                    alt="Instagram Icon"
                  />
                </Link>
                <Link
                  href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}
                >
                  <ExportedImage
                    priority={true}
                    className="h-8 w-8 object-cover"
                    src={Group3}
                    alt="Twitter Icon"
                  />
                </Link>
              </div>
              <p className="text-sm text-white font-semibold">
                {dataFooter?.menu?.footer?.copyrightText}
              </p>
            </div>
            {/* Contact Us Button Section */}
            <div className="text-center hidden md:block">
              <div className="flex justify-center mb-3 space-x-2">
                <button
                  style={{ border: "1px solid", padding: "5px" }}
                  onClick={() => router.push("/contact-us")}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
