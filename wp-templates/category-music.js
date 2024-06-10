import { gql } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Music from "../components/categoryMusic";

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
        {
          router.asPath === "/category/music" && props.data.nodeByUri ?
          console.log("true")
          :
          console.log("false")
        }
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
          musicTamplate {
            musicTitleBackgroundColor
            musicHeroSection {
              heroSidebarTitle
              heroSidebarTitleLineColor
              musicHeroSidebarAds {
                musicSidebarAdImage {
                  node {
                    altText
                    srcSet
                  }
                }
                musicSidebarAdCode
              }
            }
            musicAdervtiseImage {
              adImage {
                node {
                  altText
                  srcSet
                }
              }
              adCode
            }
            musicAllPostsSidebarAds {
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
