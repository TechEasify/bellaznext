// pages/category/[[...categoryslug]].js
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import Insight from "../../components/Insight";
import Music from "../../components/categoryMusic";
import Primarylogo from "../../public/images/Primarylogo.svg";
import { useDialog } from "../../components/DialogContext";
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import Layout from "../../components/Layout";
import getConfig from "next/config";
import { useHeader } from "../../components/HeaderContext";
import client from "../../lib/ga/apolloClient";
import { CATEGORY_BREAKING_QUERY } from "../../components/queries/categoryQueries";
import {
  GET_FOOTER_PAGE,
  GET_ICON_SECTION,
  GET_NAV_SECTION,
  SEARCH_QUERY,
  SEO_QUERY,
} from "../../components/queries/Queries";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

const customLoader = ({ src }) => {
  return src;
};

const { publicRuntimeConfig } = getConfig();
const { name, url } = publicRuntimeConfig.site;

const SkeletonLoader = () => (
  <div className="spinner">
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

const CategoryPage = ({
  categoryData,
  seoData,
  navData,
  iconDataResult,
  navDataSearch,
  dataFooter,
}) => {
  const router = useRouter();
  const { categoryslug } = router.query;
  const { nodeByUri, uri, loadingCategory, fetchMore } = useDialog();
  // const { seoData: headerSeoData, navData: headerNavData } = useHeader();

  const [title, setTitle] = useState("Belaaz News");
  const [description, setDescription] = useState("Default Description");
  const [canonical, setCanonical] = useState(`${url}${router.asPath}`);

  // useEffect(() => {
  //   if (headerSeoData && headerNavData) {
  //     headerSeoData.categories?.nodes.flatMap((item) => {
  //       if (`/category/${categoryslug}` === `/category/${item.slug}`) {
  //         setTitle(item?.seo?.title || "Belaaz News");
  //         setDescription(item?.seo?.metaDesc || "Default Description");
  //         setCanonical(item?.seo?.canonical || `${url}${router.asPath}`);
  //       }
  //     });
  //   }
  // }, [categoryslug, headerSeoData]);

  if (loadingCategory) {
    return <SkeletonLoader />;
  }

  // console.log(nodeByUri, "nodeByUri");
  // console.log(nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0], "nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType");
  

  return (
    <>
      <Layout title={title} description={description} canonical={canonical}>
        {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
        "Template-1" ? (
          console.log("true"),
          
          <main>
            <Insight
              nodeByUri={nodeByUri}
              loading={loadingCategory}
              navData={navData}
              fetchMore={fetchMore}
            />
          </main>
        ) : nodeByUri?.nodeByUri?.categoryTamplate
            ?.selectYourTempleteType[0] === "Template-2" ? (
              console.log("false"),
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
                post.link ? (
                  <li key={post.id}>
                    <Link href={post.link}>{post.title}</Link>
                  </li>
                ) : null
              )}
          </ul>
        )}
      </Layout>
    </>
  );
};

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//       query GetAllCategorySlugs($first: Int) {
//         categories(first: $first) {
//           nodes {
//             slug
//           }
//         }
//       }
//     `,
//     variables: { first: 50 }, // Fetch only the first 50 categories
//   });

//   const paths = data.categories.nodes.map((category) => ({
//     params: { categoryslug: [category.slug] },
//   }));

//   return {
//     paths,
//     fallback: "blocking", // Handle additional categories dynamically
//   };
// }

// export async function getStaticProps({ params }) {
//   const categoryslug = params.categoryslug ? params.categoryslug.join("/") : "";
//   const uri = `/category/${categoryslug}`;

//   try {
//     const { data: categoryData } = await client.query({
//       query: CATEGORY_BREAKING_QUERY,
//       variables: { uri },
//     });

//     const { data: seoData } = await client.query({
//       query: SEO_QUERY,
//     });

//     const { data: navData } = await client.query({
//       query: GET_NAV_SECTION,
//     });

//     const { data: iconDataResult } = await client.query({
//       query: GET_ICON_SECTION,
//     });

//     const { data: navDataSearch } = await client.query({
//       query: SEARCH_QUERY,
//     });

//     const { data: dataFooter } = await client.query({
//       query: GET_FOOTER_PAGE,
//     });

//     return {
//       props: {
//         categoryData,
//         seoData,
//         navData,
//         iconDataResult,
//         navDataSearch,
//         dataFooter,
//       },
//       revalidate: 10, // Revalidate the page every 10 seconds
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }

export default CategoryPage;
