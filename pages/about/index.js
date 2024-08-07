import React from "react";
import Testimonial from "../../components/Testimonial";
import Primarylogo from "../../public/images/Primarylogo.svg";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useDialog } from "../../components/DialogContext";

const customLoader = ({ src }) => {
  return src;
};

function Index() { 
  const { aboutQuery, aboutLoading } = useDialog();
  
  if (aboutLoading)
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

  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <div className="px-4 py-20 mx-auto max-w-screen-xl sm:mb-20">
          {aboutQuery && aboutQuery?.page && (
            <div>
              <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-8">
                <div className="w-full md:w-1/3 mb-5 md:mb-0">
                  <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                    {aboutQuery?.page?.about?.pageTitle}
                  </h5>
                </div>
                <div className="w-full md:w-2/3 text-left">
                  <p
                    className="font-normal"
                    dangerouslySetInnerHTML={{
                      __html: aboutQuery?.page?.about?.description,
                    }}
                  />
                </div>
              </div>
              <hr className="border-gray-300 mt-5 mb-8" />
              <div className="bg-white w-full flex flex-col md:flex-row items-start md:items-center text-left mb-20">
                <div className="w-full md:w-1/3 mb-5 md:mb-0">
                  <h5 className="text-[24px] md:text-[30px] text-black-900 font-bold">
                    {aboutQuery?.page?.about?.ourTeamTitle}
                  </h5>
                </div>
                <div className="flex flex-wrap w-full md:w-2/3 text-left">
                  {Object.keys(aboutQuery?.page?.about?.ourTeamMembers).map(
                    (teamKey) => {
                      const member = aboutQuery?.page?.about?.ourTeamMembers[teamKey];
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
