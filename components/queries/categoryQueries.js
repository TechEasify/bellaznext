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
          selectYourTemplateType
          simpleTamplate {
            simpleTitleBackgroundColor
            simpleHeroSection {
              heroSidebarAdCode
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
                    }
                  }
                }
              }
            }
          }
          musicTamplate {
            musicTitleBackgroundColor
            musicHeroSection {
              heroSidebarTitle
              selectCategory {
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
                      }
                    }
                  }
                }
              }
              heroSidebarTitleLineColor
              musicHeroSidebarAds {
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
      }
    }
  }
`;

export const Music_Query = gql`
  query MyQuery2 {
    category(id: "246", idType: DATABASE_ID) {
      categoryTamplate {
        musicTamplate {
          musicTitleBackgroundColor
          musicHeroSection {
            heroSidebarTitle
            selectCategory {
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
                    }
                  }
                }
              }
            }
            heroSidebarTitleLineColor
            musicHeroSidebarAds {
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
          heroSectionBottomPosts {
            nodes {
              name
              ... on Category {
                name
                posts {
                  nodes {
                    content
                    author {
                      node {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        altText
                        sourceUrl
                        srcSet
                      }
                    }
                    title
                  }
                }
              }
            }
          }
          musicAdervtiseImage {
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
            sidebarAdImage {
              node {
                altText
                sourceUrl
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
