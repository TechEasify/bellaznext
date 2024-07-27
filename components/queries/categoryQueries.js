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
            seo {
              title
              metaDesc
              canonical
              focuskw
            }
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
        categoryTamplate {
          selectYourTempleteType
          simpleTemplete {
            simpleTitleBackgroundColor
            simpleHeroSection {
              heroSidebarAdCode
              heroSidebarAdLink
              heroSidebarAdImage {
                node {
                  altText
                  srcSet
                  sourceUrl
                }
              }
            }
            selectCategoryForAllPost {
              nodes {
                ... on Category {
                  id
                  name
                  slug
                  posts {
                    nodes {
                      slug
                      author {
                        node {
                          name
                        }
                      }
                      content
                      excerpt
                      featuredImage {
                        node {
                          altText
                          sourceUrl
                          srcSet
                        }
                      }
                      title
                      seo {
                        title
                        metaDesc
                        canonical
                        focuskw
                      }
                    }
                  }
                }
              }
            }
          }
          musicTemplete {
            musicTitleBackgroundColor
            musicHeroSection {
              heroSidebarTitle
              selectCategoryForSidebarPosts {
                nodes {
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        link
                        slug
                        title
                        featuredImage {
                          node {
                            altText
                            srcSet
                            sourceUrl
                          }
                        }
                        author {
                          node {
                            name
                          }
                        }
                        seo {
                          title
                          metaDesc
                          canonical
                          focuskw
                        }
                      }
                    }
                  }
                }
              }
              heroSidebarTitleLineColor
              musicHeroSidebarAds {
                musicSidebarAdLink
                musicSidebarAdCode
                musicSidebarAdImage {
                  node {
                    altText
                    title
                    srcSet
                    sourceUrl
                  }
                }
              }
            }
            musicAdervtiseImage {
              adLink
              adCode
              adImage {
                node {
                  altText
                  sourceUrl
                  srcSet
                }
              }
            }
            musicAllPostsSidebar {
              sidebarAdCode
              sidebarAdLink
              sidebarAdImage {
                node {
                  altText
                  sourceUrl
                  srcSet
                }
              }
            }
            selectCategoryForAllPost {
              nodes {
                ... on Category {
                  name
                  posts {
                    nodes {
                      author {
                        node {
                          name
                        }
                      }
                      title
                      slug
                      content
                      excerpt
                      featuredImage {
                        node {
                          altText
                          srcSet
                          sourceUrl
                        }
                      }
                      seo {
                        title
                        metaDesc
                        canonical
                        focuskw
                      }
                    }
                  }
                }
              }
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
        seo {
          title
          metaDesc
          canonical
          focuskw
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
                seo {
                  title
                  metaDesc
                  canonical
                  focuskw
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
      }
    }
  }
`;
