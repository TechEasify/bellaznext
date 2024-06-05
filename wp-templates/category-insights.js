import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breakingnews from "../pages/breaking_news";
import Insight from "../pages/insights";
import Jewishnews from "../pages/jewish_news";
import Politics from "../pages/politics";
import Music from "../pages/music";
import { useRouter } from "next/router";

export default function Component(props) {
  console.log(props, "props");
  // const { title: siteTitle, description: siteDescription } =
  //   props.data.generalSettings;
  // const menuItems = props.data.primaryMenuItems.nodes;
  const { archiveType, name, posts } = props.data.nodeByUri;
  // const htmlTitle = `${archiveType}: ${name} - ${siteTitle}`;
  const { nodeByUri, pages } = props.data;
  const router = useRouter();
  console.log(router.asPath, "router");
  console.log(nodeByUri, "nodeByUri");

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
        {
          router.asPath === "/category/insights" ?
          <Insight nodeByUri={nodeByUri} loading={props.loading}/>
          :
          console.log("false")
        }
        {/* {name === "Breaking News" ? (
          <Breakingnews posts={posts} pages={pages} />
        ) : name === "Insights" ? (
          <Insight />
        ) : name === "Jewish News" ? (
          <Jewishnews />
        ) : name === "Music" ? (
          <Music />
        ) : name === "Politics" ? (
          <Politics />
        ) : (
          <></>
        )} */}
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

Component.query = gql`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts {
          nodes {
            featuredImage {
              node {
                altText
                srcSet
              }
            }
            title
            content
            author {
              node {
                name
              }
            }
            excerpt
          }
        }
        categoryTamplate {
          insightTamplate {
            insightTitleBackgroundColor
            insightSidebarAdvertisementImage {
              sidebarAdImage {
                node {
                  altText
                  srcSet
                }
              }
              sidebarAdCode
            }
          }
        }
      }
      ... on Tag {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
    }
  }
`;
