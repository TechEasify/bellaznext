import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

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
  console.log(data, "data");
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  if (loading)
    return (
      <div className="px-4 py-20 mx-auto max-w-screen-xl mb-20 animate-pulse bg-gray-300" style={{ background: "#002d73", height: "100vh" }}>
        <hr className="border-gray-300 mb-5" />
        <div>
          <div className="bg-white animate-pulse bg-gray-300 w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
            <div className="w-full md:w-1/3 mb-5 md:mb-0 animate-pulse bg-gray-300">
              <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold animate-pulse bg-gray-300"></h5>
            </div>
            <div className="w-full md:w-2/3 text-left animate-pulse bg-gray-300">
              <p className="font-normal animate-pulse bg-gray-300" />
            </div>
          </div>
          <hr className="border-gray-300 mt-5 mb-8 animate-pulse bg-gray-300" />
          <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8" style={{ height: "150px" }}>
            <div className="w-full md:w-1/3 mb-5 md:mb-0 animate-pulse bg-gray-300">
              <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold animate-pulse bg-gray-300">
              </h5>
            </div>
            <div className="w-full md:w-2/3 text-left animate-pulse bg-gray-300">
              <div className="mb-6 flex flex-col md:flex-row items-center animate-pulse bg-gray-300">
                <div>
                  <p className="text-[20px] font-semibold text-black animate-pulse bg-gray-300"></p>
                  <span className="animate-pulse bg-gray-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Nav />
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
            <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
              <div className="w-full md:w-1/3 mb-5 md:mb-0">
                <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                  {data.page.about.ourTeamTitle}
                </h5>
              </div>
              <div className="w-full md:w-2/3 text-left">
                {Object.keys(data.page.about.ourTeamMembers).map((teamKey) => {
                  const member = data.page.about.ourTeamMembers[teamKey];
                  if (!member || !member.name) return null;

                  // Assuming default width and height values for images
                  const imageWidth = 75;
                  const imageHeight = 75;

                  return (
                    <div key={teamKey} className="mb-6 flex flex-col md:flex-row items-center">
                      {member.image && member.image.node.srcSet && (
                        <ExportedImage
                          className="h-25 mr-5"
                          priority={true}
                          src={member.image.node.srcSet.split(",")[0].split(" ")[0]}
                          alt={member.image.node.altText}
                          width={imageWidth}
                          height={imageHeight}
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
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Index;
