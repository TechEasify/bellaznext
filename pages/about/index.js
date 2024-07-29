import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import Testimonial from "../../components/Testimonial";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useDialog } from "../../components/DialogContext";
import getConfig from "next/config";

const customLoader = ({ src }) => {
  return src;
};

const { publicRuntimeConfig } = getConfig();
const { name, url } = publicRuntimeConfig.site;

const GET_ABOUT_PAGE = gql`
  query ($id: ID = "3082") {
    page(id: $id, idType: DATABASE_ID) {
      about {
        pageTitle
        description
        ourTeamTitle
        ourTeamMembers {
          teamA {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamB {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamC {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamD {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamE {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamF {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamG {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamH {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
        }
      }
    }
  }
`;

function Index() {
  const { loading, error, data } = useQuery(GET_ABOUT_PAGE);
  console.log(data, "data about");
  const { seoData } = useDialog();
  console.log(seoData, "about data");
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  let title;
  let description;
  let canonical;

  console.log(router.asPath, "url contact");

  seoData?.pages?.nodes.flatMap((item) => {
    console.log(item, "item page");
    if (item.title === "About" && router.asPath === `/${item.slug}`) {
      console.log("if inside", item?.seo?.title);
      title = item?.seo?.title || "Belaaz News";
      description = item?.seo?.metaDesc || "Default Description";
      canonical = item?.seo?.canonical || `${url}${router.asPath}`;
    }
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
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
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <Nav /> */}
      <Layout title={title} description={description} canonical={canonical}>
        <div className="px-4 py-20 mx-auto max-w-screen-xl mb-20">
          <hr className="border-gray-300 mb-5" />
          {data && data.page && (
            <div>
              <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
                <div className="w-full md:w-1/3 mb-5 md:mb-0">
                  <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                    {data.page.about.pageTitle}
                  </h5>
                </div>
                <div className="w-full md:w-2/3 text-left">
                  <p
                    className="font-normal"
                    dangerouslySetInnerHTML={{
                      __html: data.page.about.description,
                    }}
                  />
                </div>
              </div>
              <hr className="border-gray-300 mt-5 mb-8" />
              <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-20">
                <div className="w-full md:w-1/3 mb-5 md:mb-0">
                  <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                    {data.page.about.ourTeamTitle}
                  </h5>
                </div>
                <div className="flex flex-wrap w-full md:w-2/3 text-left">
                  {Object.keys(data.page.about.ourTeamMembers).map(
                    (teamKey) => {
                      const member = data.page.about.ourTeamMembers[teamKey];
                      if (!member || !member.name) return null;

                      return (
                        <div
                          key={teamKey}
                          className="m-6 flex flex-row md:flex-row items-center w-full md:w-1/2 lg:w-1/3"
                        >
                          {member.image && member.image.node.srcSet && (
                            <Image
                              priority={true}
                              loader={customLoader}
                              className="h-[75px] mr-5 rounded-full w-[75px] object-cover"
                              src={
                                member.image.node.srcSet
                                  .split(",")[0]
                                  .split(" ")[0]
                              }
                              alt={member.image.node.altText}
                              width={75}
                              height={75}
                            />
                          )}
                          <div>
                            <p className="text-[20px] font-semibold text-black">
                              {member.name}
                            </p>
                            <span>{member.designation}</span>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
          <Testimonial />
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default Index;
