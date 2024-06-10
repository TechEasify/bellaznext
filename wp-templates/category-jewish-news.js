import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { CATEGORY_QUERY } from "../lib/ga/queries";
import Jewishnews from "../components/jewish-news";

export default function Component(props) {
  console.log(props, "props");
  // const { title: siteTitle, description: siteDescription } =
  //   props.data.generalSettings;
  // const menuItems = props.data.primaryMenuItems.nodes;
  const { archiveType, name, posts } = props.data.nodeByUri;
  // const htmlTitle = `${archiveType}: ${name} - ${siteTitle}`;
  const { nodeByUri, pages } = props.data;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${archiveType}: ${name}`}</title>
      </Head>

      <Nav
        name={name}
        // archiveType={archiveType}
        // siteTitle={siteTitle}
        // siteDescription={siteDescription}
        // menuItems={menuItems}
      />

      <main>
        {router.asPath === "/category/jewish-news" && props.data.nodeByUri ? (
          <Jewishnews nodeByUri={nodeByUri} loading={props.loading} />
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
        <ul>
          {/* {posts.nodes.map((post) =>
            post.uri ? (
              <li key={post.id}>
                <Link href={post.uri}>{post.title}</Link>
              </li>
            ) : null
          )} */}
        </ul>
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
