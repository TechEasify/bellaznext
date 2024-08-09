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
import Image from "next/image";
import { useHeader } from "./HeaderContext";

const customLoader = ({ src }) => {
  return src;
};

const Footer = ({dataNav}) => {
  console.log(dataNav, "dataNav footer");  
  const { dataIcon, footerData, loadingFooter, errorFooter } = useHeader();
  const router = useRouter();

  return (
    <>
    {
      router.asPath == "/subscribe" ?
      <></>
      :
      <div className="footer bg-gray-800 text-white">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-center md:hidden">
            <div className="mr-2">
              <button
                className="px-5 py-1 rounded flex items-center"
                style={{ border: "1px solid #25D366" }}
              >
                Status
                <Image
                  priority={true}
                  loader={customLoader}
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
                <Image
                  priority={true}
                  loader={customLoader}
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
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-center md:text-left">
                  {/* First Column */}
                  <div className="mb-8 md:mb-0">
                    <h2 className="mb-3 text-[23px] font-semibold text-white">
                      {/* {footerData?.menu?.footer?.newsTitle} */}
                      News
                    </h2>
                    <ul className="text-white font-medium">
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer?.edges[0]?.node?.uri ?? "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer?.edges[0]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer?.edges[1]?.node?.uri ??
                            "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer?.edges[1]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer?.edges[2]?.node?.uri ?? "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer?.edges[2]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer?.edges[3]?.node?.uri ?? "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer?.edges[3]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer?.edges[4]?.node?.uri ?? "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer?.edges[4]?.node?.label}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Second Column */}
                  <div className="mb-8 md:mb-0">
                    <h2 className="mb-3 text-[23px] font-semibold text-white">
                      {/* {footerData?.menu?.footer?.companyTitle} */}
                      Company
                    </h2>
                    <ul className="text-white font-medium">
                    <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer1?.edges[0]?.node?.uri ??
                            "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer1?.edges[0]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer1?.edges[1]?.node?.uri ??
                            "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer1?.edges[1]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer1?.edges[2]?.node?.uri ??
                            "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer1?.edges[2]?.node?.label}
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          href={
                            dataNav?.footer1?.edges[3]?.node?.uri ??
                            "/"
                          }
                          className="hover:underline text-[19px]"
                        >
                          {dataNav?.footer1?.edges[3]?.node?.label}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Third Column (Social Links - Hidden on Mobile) */}
                  <div className="hidden md:block">
                    <h2 className="mb-3 text-[23px] font-semibold text-white">
                      Social
                    </h2>
                    <ul className="text-white font-medium">
                      {dataNav?.footer2?.edges[0]?.node?.uri && (
                        <li className="mb-4">
                          <Link
                            href={dataNav?.footer2?.edges[0]?.node?.uri}
                            className="hover:underline text-[19px]"
                            target="_blank"
                          >
                            {dataNav?.footer2?.edges[0]?.node?.label}
                          </Link>
                        </li>
                      )}
                      {dataNav?.footer2?.edges[1]?.node?.uri && (
                        <li className="mb-4">
                          <Link
                            href={dataNav?.footer2?.edges[1]?.node?.uri}
                            className="hover:underline text-[19px]"
                            target="_blank"
                          >
                            {dataNav?.footer2?.edges[1]?.node?.label}
                          </Link>
                        </li>
                      )}
                      {dataNav?.footer2?.edges[2]?.node?.uri && (
                        <li className="mb-4">
                          <Link
                            href={dataNav?.footer2?.edges[2]?.node?.uri}
                            className="hover:underline text-[19px]"
                            target="_blank"
                          >
                            {dataNav?.footer2?.edges[2]?.node?.label}
                          </Link>
                        </li>
                      )}
                      {dataNav?.footer2?.edges[3]?.node?.uri && (
                        <li className="mb-4">
                          <Link
                            href={dataNav?.footer2?.edges[3]?.node?.uri}
                            className="hover:underline text-[19px]"
                            target="_blank"
                          >
                            {dataNav?.footer2?.edges[3]?.node?.label}
                          </Link>
                        </li>
                      )}
                      {dataNav?.footer2?.edges[4]?.node?.uri && (
                        <li className="mb-4">
                          <Link
                            href={dataNav?.footer2?.edges[4]?.node?.uri}
                            className="hover:underline text-[19px]"
                            target="_blank"
                          >
                            {dataNav?.footer2?.edges[4]?.node?.label}
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
                <Image
                  priority={true}
                  loader={customLoader}
                  className="h-12 w-auto"
                  src={Primarylogo}
                  alt="Belaaz logo"
                  width={250}
                  height={54}
                />
              </Link>
            </div>
            {/* Social Icons and Copyright Section */}
            <div className="text-center">
              <div className="flex justify-center mb-3 space-x-2">
                <Link
                  href={dataIcon?.menu?.socialIcons?.whatsappLink ?? "/"}
                  target="_blank"
                >
                  {dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 object-cover hover:scale-110 hover:opacity-80"
                      src={
                        dataIcon?.menu?.socialIcons?.whatsappIcon?.node
                          ?.sourceUrl
                      }
                      alt="Whatsapp Icon"
                      width={39.75}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={dataIcon?.menu?.socialIcons?.facebookLink ?? "/"}
                  target="_blank"
                >
                  {dataIcon?.menu?.socialIcons?.facebookIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 object-cover hover:scale-110 hover:opacity-80"
                      src={
                        dataIcon?.menu?.socialIcons?.facebookIcon?.node
                          ?.sourceUrl
                      }
                      alt="Facebook Icon"
                      width={39.75}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={dataIcon?.menu?.socialIcons?.instagramLink ?? "/"}
                  target="_blank"
                >
                  {dataIcon?.menu?.socialIcons?.instagramIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 object-cover hover:scale-110 hover:opacity-80"
                      src={
                        dataIcon?.menu?.socialIcons?.instagramIcon?.node
                          ?.sourceUrl
                      }
                      alt="Instagram Icon"
                      width={39.75}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={dataIcon?.menu?.socialIcons?.twiterLink ?? "/"}
                  target="_blank"
                >
                  {dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 object-cover hover:scale-110 hover:opacity-80"
                      src={
                        dataIcon?.menu?.socialIcons?.twiterIcon?.node?.sourceUrl
                      }
                      alt="Twitter Icon"
                      width={39.75}
                      height={40}
                    />
                  )}
                </Link>
                <Link
                  href={dataIcon?.menu?.socialIcons?.youtubeLink ?? "/"}
                  target="_blank"
                >
                  {dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                    ?.sourceUrl && (
                    <Image
                      priority={true}
                      loader={customLoader}
                      className="h-8 w-8 object-cover hover:scale-110 hover:opacity-80"
                      src={
                        dataIcon?.menu?.socialIcons?.youtubeIcon?.node
                          ?.sourceUrl
                      }
                      alt="Youtube Icon"
                      width={39.75}
                      height={40}
                    />
                  )}
                </Link>
              </div>
              <p className="text-sm text-white font-semibold">
                {dataNav?.footer3?.edges[0]?.node?.menu?.node?.footer?.copyrightText}
              </p>
            </div>
            {/* Contact Us Button Section */}
            <div className="text-center hidden md:block">
              <div className="flex justify-center mb-3 space-x-2">
                <button
                  className="hover:bg-skyBlue"
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
    }
    </>
  );
};

export default Footer;
