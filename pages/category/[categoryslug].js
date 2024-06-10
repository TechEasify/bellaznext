// [categoryslug].js
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breakingnews from "../../components/breaking-news";
import Link from "next/link";
import Insight from "../../components/Insight";
import Jewishnews from "../../components/jewish-news";
import Politics from "../../components/politics";
import Music from "../../components/categoryMusic";

// Define your CATEGORY_QUERY here
const CATEGORY_QUERY = gql`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Category {
        name
        posts {
          nodes {
            id
            title
            link
          }
        }
      }
    }
  }
`;

const CategoryPage = () => {
  const router = useRouter();
  const { categoryslug } = router.query;
  const uri = `/category/${categoryslug}`;

  console.log("categoryslug:", categoryslug);
  console.log("uri:", uri);

  const { data, loading, error } = useQuery(CATEGORY_QUERY, {
    variables: { uri },
  });

// const { data, loading, error } = useQuery(CATEGORY_QUERY);

  if (!categoryslug) {
    return <p>Loading...</p>;
  }

  if (loading) {
    return <p>....Loading</p>;
  }

  if (error || !data.nodeByUri) {
    return <p>Category not found</p>;
  }

  const { nodeByUri } = data;

  console.log(nodeByUri, "nodeByUri");

  return (
    <>
      <Head>
        <title>{nodeByUri.name} - News</title>
      </Head>
      <Nav uri={uri}/>
      <main>
        {router.asPath === "/category/breaking-news" && nodeByUri !== undefined ? (
          <Breakingnews nodeByUri={nodeByUri} loading={loading} />
        ) : router.asPath === "/category/insights" && nodeByUri !== undefined ? (
            <Insight nodeByUri={nodeByUri} loading={loading} />
          ) : router.asPath === "/category/jewish-news" && nodeByUri !== undefined ? (
            <Jewishnews nodeByUri={nodeByUri} loading={loading} />
          ) : router.asPath === "/category/politics" && nodeByUri !== undefined ? (
            <Politics nodeByUri={nodeByUri} loading={loading} />
          ) : router.asPath === "/category/music" && nodeByUri !== undefined ? (
            <Music nodeByUri={nodeByUri} loading={loading} />
          ) : (
          <ul>
            {nodeByUri.posts.nodes.map((post) =>
              post.link ? (
                <li key={post.id}>
                  <Link href={post.link}>{post.title}</Link>
                </li>
              ) : null
            )}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
