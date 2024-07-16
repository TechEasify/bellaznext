import ExportedImage from "next-image-export-optimizer";
import React, { useEffect, useState } from "react";
import Screenshot1 from "../public/images/Screenshot1.svg";
import ferrari4 from "../public/images/ferrari4.svg";
import Rectangle367 from "../public/images/Rectangle367.svg";
import Group from "../public/images/Group.svg";
import Group1 from "../public/images/Group (1).svg";
import Group2 from "../public/images/Group (2).svg";
import Group3 from "../public/images/Group (3).svg";
import Group4 from "../public/images/Group4.svg";
import Frame208 from "../public/images/Frame208.svg";
import Frame209 from "../public/images/Frame209.svg";
import pexels_tarawinstead from "../public/images/pexels_tarawinstead.svg";
import jeuol4a_princeharry from "../public/images/jeuol4a_princeharry.svg";
import andreasm from "../public/images/andreasm.svg";
import pexels_tarawinstead1 from "../public/images/pexels_tarawinstead1.svg";
import harry_afp from "../public/images/harry_afp.svg";
import andreasm1 from "../public/images/andreasm1.svg";
import Nav from "./Nav";
import Footer from "./Footer";
import Link from "next/link";
import Ads from "./googleAds/Ads";
import { gql, useQuery } from "@apollo/client";
import { INSIGHTS_DATA } from "./queries/categoryQueries";
import { useDialog } from "./DialogContext";

// const IIHT_DATA = gql`
// query NewQuery($first: Int = 50, $after: String = "", $before: String = "") {
//   posts(first: $first, after: $after, before: $before) {
//     nodes {
//       excerpt
//       link
//       slug
//       title
//       uri
//       featuredImage {
//         node {
//           altText
//           srcSet
//           sourceUrl
//         }
//         cursor
//       }
//     }
//   }
// }

// `;

// const Insight = ({ nodeByUri }) => {
//   console.log(nodeByUri, "nodeByUri");
//   const [numToShow, setNumToShow] = useState(1);

//   const { loading, data, error } = useQuery(IIHT_DATA)
//   console.log(data, "data");

//   const handleViewMore = () => {
//     setNumToShow(nodeByUri.posts.nodes.length);
//   };
//   return (
//     <>
//       {/* <Nav /> */}
//       <div className="px-4 py-8 mx-auto max-w-screen-xl mt-5">
//         <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
//           <div className="w-full max-w-5xl mx-auto">
//             {nodeByUri.posts.nodes.slice(0, numToShow).map(
//               (item) => (
//                 console.log(item.featuredImage.node.sourceUrl, "item Insights"),
//                 (
//                   <>
//                     <div className="flex flex-col md:flex-row mb-5">
//                       <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
//                         <Link
//                           href={{
//                             pathname: `/news/${item.slug}`,
//                           }}
//                           passHref
//                         >
//                           <ExportedImage
//                             priority={true}
//                             src={item?.featuredImage?.node?.sourceUrl}
//                             alt="ferrari4"
//                             width={357}
//                             height={261}
//                             style={{ width: "357px", height: "261px" }}
//                           />
//                         </Link>
//                       </div>
//                       <div className="ml-0 md:ml-5 w-full md:w-3/5">
//                         <p
//                           className="text-base font-bold text-red-800"
//                           style={{
//                             // background: "rgb(198 40 40 / var(--tw-text-opacity))",
//                             background: `${nodeByUri.categoryTamplate.insightTamplate.insightTitleBackgroundColor}`,
//                             color: "#fff",
//                             padding: "0 10px",
//                             width: "100px",
//                             clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
//                             fontSize: "12px",
//                             fontWeight: 500,
//                             letterSpacing: "2px",
//                           }}
//                         >
//                           {nodeByUri.name}
//                         </p>
//                         <Link
//                           href={{
//                             pathname: `/news/${item.slug}`,
//                           }}
//                           passHref
//                         >
//                           <h5 className="text-[20px] text-black-900 font-bold">
//                             {item.title}
//                           </h5>
//                         </Link>
//                         <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
//                           <span
//                             className="text-[12px] font-extrabold mr-1"
//                             style={{ color: "#40A6FB" }}
//                           >
//                             |
//                           </span>
//                           By
//                           <span
//                             className="font-extrabold ml-1"
//                             style={{ color: "#40A6FB" }}
//                           >
//                             {item.author.node.name}
//                             <span
//                               className="text-[25px] font-extrabold mx-1"
//                               style={{ color: "#40A6FB" }}
//                             >
//                               .
//                             </span>
//                           </span>
//                           6 MIN READ
//                         </p>
//                         <p
//                           className="text-[15px] text-base font-normal text-gray-600 mb-3"
//                           dangerouslySetInnerHTML={{ __html: item.content }}
//                         />
//                       </div>
//                     </div>
//                     <hr className="my-5" />
//                   </>
//                 )
//               )
//             )}
//             <button
//               className="viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center hover:bg-blue-700"
//               onClick={handleViewMore}
//             >
//               VIEW MORE
//             </button>
//           </div>

//           <div className="w-full max-w-4xl mx-auto">
//             {nodeByUri.categoryTamplate.insightTamplate
//               .insightSidebarAdvertisementImage.sidebarAdImage.node
//               .sourceUrl ? (
//               <ExportedImage
//                 className="mb-2 w-full h-auto max-h-96"
//                 priority={true}
//                 src={
//                   nodeByUri.categoryTamplate.insightTamplate
//                     .insightSidebarAdvertisementImage.sidebarAdImage.node
//                     .sourceUrl
//                 }
//                 alt="Rectangle367"
//                 width={297}
//                 height={503}
//                 style={{ width: "100%", height: "auto", maxHeight: "500px" }}
//               />
//             ) : (
//               <Ads
//                 className=""
//                 style={{
//                   display: "block",
//                   width: "297px",
//                   height: "503px",
//                   margin: "0 auto",
//                 }}
//                 adClient="ca-pub-3209848804552918"
//                 adSlot="9293720177"
//               />
//             )}
//             <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
//             <hr
//               className="text-red-800 my-3"
//               style={{ height: "3px", background: "black" }}
//             />
//             <div className="flex justify-around mt-5 mb-8">
//               <ExportedImage
//                 src={Group}
//                 alt="Partly Cloudy"
//                 className="h-13 w-13"
//               />
//               <ExportedImage
//                 src={Group1}
//                 alt="Partly Cloudy"
//                 className="h-13 w-13"
//               />
//               <ExportedImage
//                 src={Group2}
//                 alt="Partly Cloudy"
//                 className="h-13 w-13"
//               />
//               <ExportedImage
//                 src={Group3}
//                 alt="Partly Cloudy"
//                 className="h-13 w-13"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Insight;

const SkeletonLoader = () => (
  <div
    className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800"
    style={{ background: "#002d73" }}
  >
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white p-4 rounded-md animate-pulse">
          <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
          <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-500 w-full mb-2"></div>
          <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-500 w-2/3"></div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mb-5">
        <div className="bg-white p-4 rounded-md animate-pulse">
          <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
          <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-500 w-full mb-2"></div>
          <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-500 w-2/3"></div>
        </div>
      </div>
    </div>

    <div className="w-full h-40 bg-gray-300 animate-pulse mx-auto mb-8"></div>
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
        <div className="w-full max-w-5xl mx-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row mb-5 animate-pulse">
                <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                  <div className="w-72 h-52 bg-gray-300"></div>
                </div>
                <div className="ml-0 md:ml-5 w-full md:w-3/5">
                  <div className="bg-red-800 w-36 h-5 mb-3"></div>
                  <div className="bg-gray-300 w-3/4 h-8 mb-3"></div>
                  <div className="bg-gray-300 w-1/2 h-4 mb-4"></div>
                  <div className="bg-gray-300 w-full h-6 mb-3"></div>
                </div>
              </div>
              <hr className="my-5" />
            </div>
          ))}
          <button className="w-full py-2 mt-5 text-center text-white bg-gray-300 font-semibold animate-pulse">
            VIEW MORE
          </button>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-2 w-full h-64 bg-gray-300 animate-pulse"></div>
          <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
          <hr
            className="text-red-800 my-3"
            style={{ height: "3px", background: "black" }}
          />
          <div className="flex justify-around mt-5 mb-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-300 animate-pulse rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Insight = () => {
  const {
    setCursor,
    cursor,
    setPosts,
    posts,
    iconDataResult,
    categoryError,
    categoryInsightData,
    categoryLoading,
    nodeByUri,
    insightFetchMore,
  } = useDialog();
  console.log(nodeByUri.nodeByUri, "nodeByUrinodeByUrinodeByUrinodeByUri");
  const [hasNextPage, setHasNextPage] = useState(true);

  // Effect to initialize posts when data changes
  useEffect(() => {
    if (
      nodeByUri?.nodeByUri &&
      nodeByUri?.nodeByUri?.categoryTamplate?.simpleTamplate
        ?.selectCategoryForAllPost.nodes
    ) {
      setPosts(
        nodeByUri?.nodeByUri?.categoryTamplate?.simpleTamplate
          ?.selectCategoryForAllPost.nodes
      );
      setCursor(nodeByUri?.nodeByUri?.posts?.pageInfo?.endCursor);
      setHasNextPage(nodeByUri?.nodeByUri?.posts?.pageInfo?.hasNextPage);
    }
  }, [nodeByUri?.nodeByUri]);

  // Function to handle "View More" button click
  const handleViewMore = async () => {
    if (hasNextPage && !categoryLoading) {
      const { data } = await insightFetchMore({
        variables: {
          after: cursor,
        },
      });

      if (data) {
        const newPosts = data.posts.nodes;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setCursor(data.posts.pageInfo.endCursor);
        setHasNextPage(data.posts.pageInfo.hasNextPage);
      }
    }
  };

  console.log(posts, "posts");

  // Render loading state
  if (categoryLoading && posts.length === 0) return <SkeletonLoader />;

  // Render error state
  if (categoryError) return <p>Error: {categoryError.message}</p>;

  return (
    <>
      <div className="px-4 py-8 mx-auto max-w-screen-xl mt-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="w-full max-w-5xl mx-auto">
            {posts.map(
              (item) => (
                console.log(item, "itemitemitemitemitemitemitemitemitem"),
                item.posts.nodes.map((posts) => (
                  <div key={posts.slug}>
                    <div className="flex flex-col md:flex-row mb-5">
                      <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
                        <Link
                          href={{
                            pathname: `/news/${posts.slug}`,
                          }}
                          passHref
                        >
                          <ExportedImage
                            className="object-cover w-[357px] h-[261px]"
                            priority={true}
                            src={posts?.featuredImage?.node?.sourceUrl}
                            alt="ferrari4"
                            width={357}
                            height={261}
                          />
                        </Link>
                      </div>
                      <div className="ml-0 md:ml-5 w-full md:w-3/5">
                        <p
                          className="text-base font-bold text-red-800"
                          style={{
                            background: `${nodeByUri?.nodeByUri?.categoryTamplate?.simpleTamplate?.simpleTitleBackgroundColor}`,
                            color: "#fff",
                            padding: "0 10px",
                            width: "100px",
                            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "2px",
                          }}
                        >
                          {nodeByUri?.nodeByUri?.name}
                        </p>
                        <Link
                          href={{
                            pathname: `/news/${posts.slug}`,
                          }}
                          passHref
                        >
                          <h5 className="text-[20px] text-black-900 font-bold hover:text-skyBlue">
                            {posts.title}
                          </h5>
                        </Link>
                        <p className="text-[10px] text-base font-bold text-gray-800 mb-4">
                          <span
                            className="text-[12px] font-extrabold mr-1"
                            style={{ color: "#40A6FB" }}
                          >
                            |
                          </span>
                          By
                          <span
                            className="font-extrabold ml-1"
                            style={{ color: "#40A6FB" }}
                          >
                            {posts?.author?.node?.name}
                            <span
                              className="text-[25px] font-extrabold mx-1"
                              style={{ color: "#40A6FB" }}
                            >
                              .
                            </span>
                          </span>
                          6 MIN READ
                        </p>
                        <p
                          className="text-[15px] text-base font-normal text-gray-600 mb-3"
                          dangerouslySetInnerHTML={{ __html: posts.excerpt }}
                        />
                      </div>
                    </div>
                    <hr className="my-5" />
                  </div>
                ))
              )
            )}
            <div className="flex justify-between">
              <button
                className="viewmore w-full py-2 text-center justify-center mt-5 flex mr-2 text-white font-semibold items-center hover:bg-blue-700"
                onClick={handleViewMore}
                disabled={!hasNextPage || categoryLoading}
              >
                {hasNextPage ? "VIEW MORE" : "NO MORE POSTS"}
              </button>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            {/* {(nodeByUri?.nodeByUri?.categoryTamplate
              ?.selectYourTemplateType[0] === "Simple" ||
              nodeByUri?.nodeByUri?.categoryTamplate
                ?.selectYourTemplateType[0] === "Music") &&
            nodeByUri?.nodeByUri?.categoryTamplate?.simpleTamplate
              ?.simpleHeroSection?.heroSidebarAdImage?.node?.sourceUrl !==
              null ? (
              <ExportedImage
                className="mb-2 w-full h-auto max-h-96"
                priority={true}
                src={
                  nodeByUri?.nodeByUri?.categoryTamplate?.simpleTamplate
                    ?.simpleHeroSection?.heroSidebarAdImage?.node?.sourceUrl
                }
                alt="Rectangle367"
                width={297}
                height={503}
                style={{ width: "100%", height: "auto", maxHeight: "500px" }}
              />
            ) : (
              <Ads
                className=""
                style={{
                  display: "block",
                  width: "297px",
                  height: "503px",
                  margin: "0 auto",
                }}
                adClient="ca-pub-3209848804552918"
                adSlot="9293720177"
              />
            )} */}

            <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
            <hr
              className="text-red-800 my-3"
              style={{ height: "3px", background: "black" }}
            />
            <div className="flex justify-around mt-5 mb-8">
              <Link
                href={iconDataResult?.menu?.socialIcons?.whatsappLink ?? "/"}
              >
                <ExportedImage
                  src={Group}
                  alt="Partly Cloudy"
                  className="h-13 w-13 object-cover"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.facebookLink ?? "/"}
              >
                <ExportedImage
                  src={Group1}
                  alt="Partly Cloudy"
                  className="h-13 w-13 object-cover"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.instagramLink ?? "/"}
              >
                <ExportedImage
                  src={Group2}
                  alt="Partly Cloudy"
                  className="h-13 w-13 object-cover"
                />
              </Link>
              <Link href={iconDataResult?.menu?.socialIcons?.twiterLink ?? "/"}>
                <ExportedImage
                  src={Group3}
                  alt="Partly Cloudy"
                  className="h-13 w-13 object-cover"
                />
              </Link>
              <Link
                href={iconDataResult?.menu?.socialIcons?.youtubeLink ?? "/"}
              >
                <ExportedImage
                  src={Group4}
                  alt="Partly Cloudy"
                  className="h-13 w-13 mx-2 object-cover"
                />
              </Link>
            </div>
            <p className="text-[15px] font-bold text-black-900 italic">
              FOLLOW BELAAZ ON WhatsApp
            </p>
            <hr
              className="text-red-800"
              style={{ height: "7px", background: "#CE3A42" }}
            />

            <div className="flex mt-5 mb-8">
              <ExportedImage
                src={Frame208}
                alt="Partly Cloudy"
                className="h-13 w-13 mx-2 object-cover"
              />
              <ExportedImage
                src={Frame209}
                alt="Partly Cloudy"
                className="h-13 w-13 mx-2 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
