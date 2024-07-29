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
  console.log(seoData, "nodeByUri category");
  console.log(router, "router category");
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
  console.log(
    nodeByUri?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0],
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
      {/* <Head>
        <title>{nodeByUri?.nodeByUri !== null && nodeByUri?.nodeByUri?.name} - News</title>
      </Head> */}

      <Layout title={title} description={description} canonical={canonical}>
        {/* <Nav uri={uri} /> */}

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
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default CategoryPage;
