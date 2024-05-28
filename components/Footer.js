import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React, { useState } from "react";
import Primarylogo from "../public/images/Primarylogo.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center">
          <div className="lg:col-span-12">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">News</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link href="/breaking_news" className="hover:underline">Breaking News</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/politics" className="hover:underline">Politics</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/jewish_news" className="hover:underline">Jewish News</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/insights" className="hover:underline">Insights</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/music" className="hover:underline">Music</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">Company</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <Link href="/contact_us" className="hover:underline">Contact us</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/about" className="hover:underline">About us</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/advertise" className="hover:underline">Advertise</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/contact_us" className="hover:underline">Submit news</Link>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[20px] font-semibold text-white">Social</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Belaaz Twitter</a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Belaaz Facebook</a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">Belaaz Instagram</a>
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
              <span className="sr-only">IIHT Surat</span>
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
              © Copyright {new Date().getFullYear()} Belaaz.com | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
