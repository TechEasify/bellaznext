// pages/category/[[...categoryslug]].js
import { useRouter } from "next/router";
import Link from "next/link";
import Insight from "../../components/Insight";
import Music from "../../components/categoryMusic";
import Primarylogo from "../../public/images/Primarylogo.svg";
import { useDialog } from "../../components/DialogContext";
import Image from "next/image";
import Layout from "../../components/Layout";

const customLoader = ({ src }) => {
  return src;
};

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
  navData
}) => {
  const { nodeByUri, loadingCategory, fetchMore } = useDialog();

  if (loadingCategory) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <Layout>
        {nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
        "Template-1" ? (
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
