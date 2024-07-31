// [categoryslug].js
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
import client from '../../lib/ga/apolloClient';
import { CATEGORY_BREAKING_QUERY } from "../../components/queries/categoryQueries";
import { GET_FOOTER_PAGE, GET_ICON_SECTION, GET_NAV_SECTION, SEARCH_QUERY, SEO_QUERY } from "../../components/queries/Queries";
import { gql } from "@apollo/client";

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

const CategoryPage = () => {
  const router = useRouter();
  console.log(router.query.categoryslug, "router category");
  const {
    nodeByUri,
    uri,
    loadingCategory,
    fetchMore,
  } = useDialog();
  const {
    seoData,
    navData
  } = useHeader();
  const { categoryslug } = router.query;

  if (loadingCategory) {
    return <SkeletonLoader />;
  }

  console.log(
    nodeByUri,
    "nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0]"
  );

  let title;
  let description;
  let canonical;

  seoData?.categories?.nodes.flatMap((item) => {
    console.log(item, "item page");
    if (`/category/${categoryslug}` === `/category/${item.slug}`) {
      console.log("if inside", item?.seo?.title);
      title = item?.seo?.title || "Belaaz News";
      description = item?.seo?.metaDesc || "Default Description";
      canonical = item?.seo?.canonical || `${url}${router.asPath}`;
    }
  });

  return (
    <>
      <Layout title={title} description={description} canonical={canonical}>
        {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
        "Simple" ? (
          <main>
            <Insight
              nodeByUri={nodeByUri}
              loading={loadingCategory}
              navData={navData}
              fetchMore={fetchMore}
            />
          </main>
        ) : nodeByUri?.nodeByUri?.categoryTamplate
            ?.selectYourTempleteType[0] === "Music" ? (
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
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetAllCategorySlugs {
        categories {
          nodes {
            slug
          }
        }
      }
    `,
  });

  const paths = data.categories.nodes.map((category) => ({
    params: { categoryslug: category.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { categoryslug } = params;
  const uri = `/category/${categoryslug}`;

  const { data: categoryData } = await client.query({
    query: CATEGORY_BREAKING_QUERY,
    variables: { uri },
  });

  const { data: seoData } = await client.query({
    query: SEO_QUERY,
  });

  const { data: navData } = await client.query({
    query: GET_NAV_SECTION,
  });

  const { data: iconDataResult } = await client.query({
    query: GET_ICON_SECTION,
  });

  const { data: navDataSearch } = await client.query({
    query: SEARCH_QUERY,
  });

  const { data: dataFooter } = await client.query({
    query: GET_FOOTER_PAGE,
  });

  return {
    props: {
      categoryData,
      seoData,
      navData,
      iconDataResult,
      navDataSearch,
      dataFooter,
    },
    revalidate: 1, // optional: revalidate every second
  };
}

export default CategoryPage;
