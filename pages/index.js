import getConfig from "next/config";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Topheadlines from "../components/Topheadlines";
import Advertisement from "../components/Advertisement";
import Insights from "../components/Insights";
import Music from "../components/Music";
import Sliders from "../components/Sliders";
import PlacementPartners from "../components/PlacementPartners";
import Footer from "../components/Footer";
import Excusivenews from "../components/Excusivenews";
import Cardnews from "../components/Cardnews";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { GET_HOME_PAGE } from "../components/queries/Queries";
import { useDialog } from "../components/DialogContext";
import Primarylogo from "../public/images/Primarylogo.svg";
import ExportedImage from "next-image-export-optimizer";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const SkeletonLoader = () => (
  // <>
  //    <div className="px-4 py-8 mx-auto max-w-screen-xl bg-gray-800" style={{ background: "#002d73" }}>
  //     <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
  //       <div className="w-full max-w-5xl mx-auto">
  //         <div className="flex flex-col justify-center">
  //           {[...Array(3)].map((_, index) => (
  //             <div key={index} className="mb-6">
  //               <div className="h-4 bg-red-800 rounded w-32 mb-2 animate-pulse"></div>
  //               <div className="h-8 bg-black-900 rounded w-2/3 mb-2 animate-pulse"></div>
  //               <div className="h-16 bg-gray-800 rounded mb-3 animate-pulse"></div>
  //               <div className="h-64 bg-gray-300 rounded mb-3 animate-pulse"></div>
  //             </div>
  //           ))}
  //           <div className="flex items-center mb-4">
  //             <div className="h-6 w-1 bg-blue-500 rounded-l animate-pulse"></div>
  //             <div className="h-6 bg-blue-500 rounded-r w-24 ml-1 animate-pulse"></div>
  //             <div className="h-6 bg-blue-500 rounded-full w-6 mx-1 animate-pulse"></div>
  //             <div className="h-6 bg-blue-500 rounded w-20 animate-pulse"></div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-full max-w-3xl mx-auto">
  //         <div className="h-10 bg-gray-200 rounded mb-4 animate-pulse"></div>
  //         <div
  //           className="block max-w-sm p-6 rounded-lg shadow animate-pulse"
  //           style={{
  //             background:
  //               'linear-gradient(to bottom right, #002D73, #40A6FB)',
  //             padding: '10px',
  //             borderRadius: '10px',
  //           }}
  //         >
  //           <div className="flex items-center justify-between mb-1">
  //             <div>
  //               <div className="h-4 bg-white rounded w-24 mb-1 animate-pulse"></div>
  //               <div className="h-6 bg-white rounded w-32 animate-pulse"></div>
  //             </div>
  //             <div className="h-16 w-16 bg-white rounded-full animate-pulse"></div>
  //           </div>
  //           <div className="flex items-center mb-2">
  //             <div className="h-4 w-4 bg-white rounded-full mr-2 animate-pulse"></div>
  //             <div className="h-4 bg-white rounded w-48 animate-pulse"></div>
  //           </div>
  //           <div className="flex justify-around items-center mb-6">
  //             <div className="h-8 bg-white rounded w-12 animate-pulse"></div>
  //             <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
  //             <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
  //             <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
  //             <div className="h-4 bg-white rounded w-8 animate-pulse"></div>
  //             <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
  //             <div className="h-4 bg-white rounded w-16 animate-pulse"></div>
  //           </div>
  //           <div className="flex justify-between items-center mb-8">
  //             <div className="h-4 bg-white rounded w-32 animate-pulse"></div>
  //             <div className="h-6 w-6 bg-white rounded-full animate-pulse"></div>
  //           </div>
  //           <div className="flex justify-between items-center text-center">
  //             {[...Array(5)].map((_, index) => (
  //               <div key={index}>
  //                 <div className="h-4 bg-white rounded w-12 mb-1 animate-pulse"></div>
  //                 <div className="h-8 w-8 bg-white rounded-full animate-pulse mx-auto mb-1"></div>
  //                 <div className="h-4 bg-white rounded w-12 animate-pulse"></div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //         {[...Array(3)].map((_, index) => (
  //           <div key={index} className="flex mt-5 justify-between">
  //             <div className="mr-2">
  //               <div className="h-4 bg-red-800 rounded w-20 mb-1 animate-pulse"></div>
  //               <div className="h-6 bg-gray-800 rounded w-32 animate-pulse"></div>
  //             </div>
  //             <div className="h-16 w-16 bg-gray-300 rounded object-contain animate-pulse"></div>
  //           </div>
  //         ))}
  //         <hr className="my-6" />
  //       </div>
  //     </div>
  //   </div>
  // </>
  <div className="spinner">
    <ExportedImage
      src={Primarylogo}
      alt="Loading..."
      className="blinking-image"
    />
  </div>
);

const Home = () => {
  const router = useRouter();

  // const uri = router.asPath; // Define your URI here. This is an example for the home page.

  // const { loading, error, data } = useQuery(GET_HOME_PAGE);
  const { bannerData, bannerLoading, bannerError } = useDialog();

  if (bannerLoading) return <SkeletonLoader />;
  if (bannerError) return <p>Error loading data: {bannerError.message}</p>;

  const title = bannerData?.generalSettings?.title || "Default Title";
  const siteDescription =
    bannerData?.generalSettings?.description || "Default Description";
  const menuItems = bannerData?.primaryMenuItems?.nodes || [];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <section>
          <Layout>
            <Banner />
            <Advertisement />
            <Insights />
            <Sliders />
            <Music />
            <PlacementPartners />
            <Excusivenews />
            <Cardnews />
          </Layout>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
