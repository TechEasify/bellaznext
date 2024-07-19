// [categoryslug].js
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import Insight from "../../components/Insight";
import Music from "../../components/categoryMusic";
import { useEffect, useState } from "react";
import Primarylogo from "../../public/images/Primarylogo.svg";
import { useDialog } from "../../components/DialogContext";
import { CATEGORY_BREAKING_QUERY } from "../../components/queries/categoryQueries";
import ExportedImage from "next-image-export-optimizer";

const SkeletonLoader = () => (
  // <div
  //   className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800"
  //   style={{ background: "#002d73" }}
  // >
  //   <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
  //     <div className="w-full max-w-5xl mx-auto">
  //       <div className="bg-white p-4 rounded-md animate-pulse">
  //         <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
  //         <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
  //         <div className="h-6 bg-gray-500 w-full mb-2"></div>
  //         <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
  //         <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
  //         <div className="h-4 bg-gray-500 w-2/3"></div>
  //       </div>
  //     </div>
  //     <div className="w-full max-w-4xl mx-auto mb-5">
  //       <div className="bg-white p-4 rounded-md animate-pulse">
  //         <div className="mb-2 rounded-md bg-gray-500 h-60"></div>
  //         <div className="h-4 bg-gray-500 w-3/4 mb-2"></div>
  //         <div className="h-6 bg-gray-500 w-full mb-2"></div>
  //         <div className="h-4 bg-gray-500 w-1/2 mb-2"></div>
  //         <div className="h-3 bg-gray-500 w-3/4 mb-2"></div>
  //         <div className="h-4 bg-gray-500 w-2/3"></div>
  //       </div>
  //     </div>
  //   </div>

  //   <div className="w-full h-40 bg-gray-300 animate-pulse mx-auto mb-8"></div>
  //   <div className="px-4 py-8 mx-auto max-w-screen-xl">
  //     <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
  //       <div className="w-full max-w-5xl mx-auto">
  //         {Array.from({ length: 3 }).map((_, index) => (
  //           <div key={index}>
  //             <div className="flex flex-col md:flex-row mb-5 animate-pulse">
  //               <div className="mr-0 md:mr-5 mb-5 md:mb-0 flex justify-center md:block">
  //                 <div className="w-72 h-52 bg-gray-300"></div>
  //               </div>
  //               <div className="ml-0 md:ml-5 w-full md:w-3/5">
  //                 <div className="bg-red-800 w-36 h-5 mb-3"></div>
  //                 <div className="bg-gray-300 w-3/4 h-8 mb-3"></div>
  //                 <div className="bg-gray-300 w-1/2 h-4 mb-4"></div>
  //                 <div className="bg-gray-300 w-full h-6 mb-3"></div>
  //               </div>
  //             </div>
  //             <hr className="my-5" />
  //           </div>
  //         ))}
  //         <button className="w-full py-2 mt-5 text-center text-white bg-gray-300 font-semibold animate-pulse">
  //           VIEW MORE
  //         </button>
  //       </div>

  //       <div className="w-full max-w-4xl mx-auto">
  //         <div className="mb-2 w-full h-64 bg-gray-300 animate-pulse"></div>
  //         <p className="text-[15px] font-bold text-black-900">FOLLOW US</p>
  //         <hr
  //           className="text-red-800 my-3"
  //           style={{ height: "3px", background: "black" }}
  //         />
  //         <div className="flex justify-around mt-5 mb-8">
  //           {Array.from({ length: 4 }).map((_, index) => (
  //             <div
  //               key={index}
  //               className="w-16 h-16 bg-gray-300 animate-pulse rounded-full"
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="spinner">
    <ExportedImage
      src={Primarylogo}
      alt="Loading..."
      className="blinking-image"
    />
  </div>
);

const CategoryPage = () => {
  const router = useRouter();
  console.log(router.query.categoryslug, "router category");
  const {
    navData,
    setNavData,
    setNodeByUri,
    nodeByUri,
    uri,
    loadingCategory,
    fetchMore,
  } = useDialog();
  const { categoryslug } = router.query;
  console.log(nodeByUri, "nodeByUri category");
  // const [navData, setNavData] = useState(null);

  // console.log("categoryslug:", categoryslug);
  // console.log("uri:", uri);

  // const { data, loading, error } = useQuery(CATEGORY_QUERY);

  // useEffect(() => {
  //   if (data) {
  //     setNavData(data);
  //     setNodeByUri(data.nodeByUri)
  //   }
  // }, [data]);

  // if (!categoryslug) {
  //   return <SkeletonLoader />;
  // }

  if (loadingCategory) {
    return <SkeletonLoader />;
  }

  // if (error) {
  //   return <p>Category not found</p>;
  // }

  // const { nodeByUri } = data;

  // console.log(data, "datadatadatadatadatadatadatadata");

  return (
    <>
      <Head>
        <title>{nodeByUri?.nodeByUri !== null && nodeByUri?.nodeByUri?.name} - News</title>
      </Head>
      <Nav uri={uri} />

      {/* <main>
        {router.asPath === `/category/breaking-news` &&
        nodeByUri !== undefined &&
        nodeByUri !== null ? (
          <Breakingnews
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        ) : router.asPath === "/category/insights" &&
          nodeByUri !== undefined &&
          nodeByUri !== null ? (
          <Insight
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        ) : router.asPath === "/category/jewish-news" &&
          nodeByUri !== undefined &&
          nodeByUri !== null ? (
          <Jewishnews
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        ) : router.asPath === "/category/politics" &&
          nodeByUri !== undefined &&
          nodeByUri !== null ? (
          <PoliticsCategory
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        ) : router.asPath === "/category/music" &&
          nodeByUri !== undefined &&
          nodeByUri !== null ? (
          <Music
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        ) : (
          <ul>
            {nodeByUri !== null &&
              nodeByUri?.posts?.nodes.map((post) =>
                post.link
                  ? (console.log(post, "post"),
                    (
                      <li key={post.id}>
                        <Link href={post.link}>{post.title}</Link>
                      </li>
                    ))
                  : null
              )}
          </ul>
        )}
      </main> */}
      {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTemplateType[0] ===
      "Simple" ? (
        <main>
          <Insight
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        </main>
      ) : nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTemplateType[0] ===
        "Music" ? (
        <main>
          <Music
            nodeByUri={nodeByUri}
            loading={loadingCategory}
            navData={navData}
            fetchMore={fetchMore}
          />
        </main>
      ) : (
        <ul>
          {nodeByUri !== null &&
            nodeByUri?.posts?.nodes.map((post) =>
              post.link
                ? (console.log(post, "post"),
                  (
                    <li key={post.id}>
                      <Link href={post.link}>{post.title}</Link>
                    </li>
                  ))
                : null
            )}
        </ul>
      )}

      <Footer />
    </>
  );
};

export default CategoryPage;
