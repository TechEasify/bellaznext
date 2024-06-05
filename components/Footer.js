import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React, { useState } from "react";
import Primarylogo from "../public/images/Primarylogo.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import { gql, useQuery } from "@apollo/client";

const GET_COMPANY_PAGE = gql`
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
      }
    }
  }
`;

const GET_FOOTER_PAGE = gql`
  query footer($id: ID = "229") {
    menu(id: $id, idType: DATABASE_ID) {
      footer {
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
      }
    }
  }
`;

const GET_SOCIALLINK_PAGE = gql`
  query footer($id: ID = "229") {
    menu(id: $id, idType: DATABASE_ID) {
      footer {
        belaazTwitter
        belaazTwitterLink
        belaazFacebook
        belaazFacebookLink
        belaazInstagram
        belaazInstagramLink
        copyrightText
      }
    }
  }
`;

const Footer = () => {
  const {
    loading: loadingFooter,
    error: errorFooter,
    data: dataFooter,
  } = useQuery(GET_FOOTER_PAGE);

  const {
    loading: loadingCompany,
    error: errorCompany,
    data: dataCompany,
  } = useQuery(GET_COMPANY_PAGE);

  const {
    loading: loadingSocial,
    error: errorSocial,
    data: dataSocial,
  } = useQuery(GET_SOCIALLINK_PAGE);

  console.log(dataSocial, "dataSocial");
  console.log(dataCompany, "dataCompany");
  console.log(dataFooter, "data footer");
  return (
    <div className="footer bg-gray-800 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center">
          <div className="lg:col-span-12">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">
                    {dataFooter !== undefined &&
                      dataFooter.menu.footer.newsTitle}
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link href="/breaking_news" className="hover:underline">
                        {dataFooter !== undefined &&
                          dataFooter.menu.footer.newsFirst}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/politics" className="hover:underline">
                        {dataFooter !== undefined &&
                          dataFooter.menu.footer.newsSecond}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/jewish_news" className="hover:underline">
                        {dataFooter !== undefined &&
                          dataFooter.menu.footer.newsThird}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/insights" className="hover:underline">
                        {dataFooter !== undefined &&
                          dataFooter.menu.footer.newsFore}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/music" className="hover:underline">
                        {dataFooter !== undefined &&
                          dataFooter.menu.footer.newsFive}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">
                    {dataCompany !== undefined &&
                      dataCompany.menu.footer.companyTitle}
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link href="/contact-us" className="hover:underline">
                        {dataCompany !== undefined &&
                          dataCompany.menu.footer.companyFirst}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/about" className="hover:underline">
                        About us
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/advertise" className="hover:underline">
                        {dataCompany !== undefined &&
                          dataCompany.menu.footer.companySecond}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/contact-us" className="hover:underline">
                        {dataCompany !== undefined &&
                          dataCompany.menu.footer.companyThird}
                      </Link>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        {dataCompany !== undefined &&
                          dataCompany.menu.footer.companyFore}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">
                    Social
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        {dataSocial !== undefined &&
                          dataSocial.menu.footer.belaazTwitter}
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        {dataSocial !== undefined &&
                          dataSocial.menu.footer.belaazFacebook}
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        {dataSocial !== undefined &&
                          dataSocial.menu.footer.belaazInstagram}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-5 md:flex-row md:justify-between">
          <div className="flex items-center space-x-4">
            <Link href={"/"}>
              {/* <span className="sr-only">IIHT Surat</span> */}
              <ExportedImage
                className="h-12 w-auto"
                src={Primarylogo}
                alt="Manipal University Jaipur logo - IIHT Surat"
              />
            </Link>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3 space-x-2">
              <ExportedImage
                priority={true}
                className="h-8 w-8"
                src={Group}
                alt="Whatsapp Icon"
              />
              <ExportedImage
                priority={true}
                className="h-8 w-8"
                src={Group1}
                alt="Facebook Icon"
              />
              <ExportedImage
                priority={true}
                className="h-8 w-8"
                src={Group2}
                alt="Instagram Icon"
              />
              <ExportedImage
                priority={true}
                className="h-8 w-8"
                src={Group3}
                alt="Twitter Icon"
              />
            </div>
            <p className="text-sm text-white font-semibold">
              {dataSocial !== undefined && dataSocial.menu.footer.copyrightText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
