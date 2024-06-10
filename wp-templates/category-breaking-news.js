// Component.js
import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breakingnews from "../components/breaking-news";
import { CATEGORY_QUERY } from "../lib/ga/queries";

export default function Component(props) {
  console.log(props, "props");
  const { archiveType, name, posts } = props.data.nodeByUri || {};
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${archiveType}: ${name}`}</title>
      </Head>
      <Nav name={name} />
      <main>
        {router.asPath === "/category/breaking-news" && props.data.nodeByUri ? (
          <Breakingnews nodeByUri={props.data.nodeByUri} loading={props.loading} />
        ) : (
          <ul>
            {posts.nodes.map((post) =>
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
}

Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
  };
};

Component.query = CATEGORY_QUERY;
