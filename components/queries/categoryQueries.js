import { gql } from "@apollo/client";

// Define your CATEGORY_QUERY here
export const CATEGORY_BREAKING_QUERY = gql`
  query GetArchive(
    $uri: String!
    $first: Int = 10
    $after: String
    $last: Int
    $before: String
  ) {
    nodeByUri(uri: $uri) {
      ... on Category {
        name
        posts(first: $first, after: $after, last: $last, before: $before) {
          nodes {
            featuredImage {
              node {
                altText
                srcSet
                sourceUrl
              }
              cursor
            }
            title
            content
            author {
              node {
                name
                slug
              }
            }
            excerpt
            link
            slug
            id
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
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
                  sourceUrl
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
          insightTamplate {
            insightTitleBackgroundColor
            insightSidebarAdvertisementImage {
              sidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
              sidebarAdCode
            }
          }
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
    }
  }
`;

// category insights data
export const INSIGHTS_DATA = gql`
  query NewQuery(
    $first: Int = 10
    $after: String
    $last: Int
    $before: String
  ) {
    posts(first: $first, after: $after, last: $last, before: $before) {
      nodes {
        excerpt
        link
        slug
        title
        uri
        featuredImage {
          node {
            altText
            srcSet
            sourceUrl
          }
          cursor
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

// news detail category
export const GET_NEWS_SECTION = gql`
  query MyQuery2($uri: String!) {
  nodeByUri(uri: $uri) {
    id
    ... on Post {
      id
      link
      excerpt
      slug
      content
      featuredImage {
        node {
          altText
          slug
          sourceUrl
          srcSet
          title
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
          posts {
            nodes {
              title
              slug
              featuredImage {
                node {
                  altText
                  slug
                  sourceUrl
                  srcSet
                  title
                }
              }
              postView {
                view
              }
            }
          }
        }
      }
      postView {
        view
      }
      date
      dateGmt
      title
      beyondwords {
        contentId
        podcastId
        projectId
      }
    }
  }
}
`;
