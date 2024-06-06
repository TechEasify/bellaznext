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
  console.log(props, "props breaking news");
  console.log(props.__TEMPLATE_VARIABLES__.uri);
  // const { title: siteTitle, description: siteDescription } =
  //   props.data.generalSettings;
  // const menuItems = props.data.primaryMenuItems.nodes;
  const { archiveType, name, posts } = props.data.nodeByUri;
  console.log(posts, "posts");
  // const htmlTitle = `${archiveType}: ${name} - ${siteTitle}`;
  const { nodeByUri, pages } = props.data || {};
  console.log(pages, "pages");
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
        {props.__TEMPLATE_VARIABLES__.uri === "/category/breaking-news/" &&
        nodeByUri === undefined ? <p>...Loading</p> : nodeByUri !== undefined ? (
          <Breakingnews nodeByUri={nodeByUri} loading={props.loading} />
        ) : (
          console.log("false")
        )}
        <ul>
          {posts.nodes.map((post) =>
            post.link ? (
              <li key={post.id}>
                <Link href={post.link}>{post.title}</Link>
              </li>
            ) : null
          )}
        </ul>
      </main>

      <Footer />
    </>
  );
}

Component.variables = (seedQuery, ctx) => {
  console.log(seedQuery, "seedQuery");
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
            link
            slug
            id
          }
        }
        categoryTamplate {
          simpleTamplate {
            simpleTitleBackgroundColor
            simpleHeroSection {
              heroSidebarAdImage {
                node {
                  altText
                  srcSet
                }
              }
              heroSidebarAdCode
            }
            simpleAdvertisementImage {
              simpleAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
              simpleAdCode
            }
            simpleAllPostsSidebarAds {
              allSidebarAdCode
              allSidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
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
    pages {
      nodes {
        id
        title
        uri
      }
    }
  }
`;
