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
            tags {
              nodes {
                name
              }
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
          template1 {
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

            relatedCategory {
              section1 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
              }
              section2 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
              }
              section3 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
              }
            }
          }
          template2 {
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
                        tags {
                          nodes {
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
            relatedCategory {
              section1 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
              }
              section2 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
              }
              section3 {
                categoryBottomLineColor
                selectCategory {
                  nodes {
                    name
                    ... on Category {
                      posts {
                        nodes {
                          title
                          featuredImage {
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
                postDetailsEdit {
                  sidebarFirstAd {
                    adImage {
                      node {
                        altText
                        srcSet
                        sourceUrl
                      }
                    }
                    adCode
                  }
                  moreNewsSelectCategory {
                    nodes {
                      name
                      ... on Category {
                        posts {
                          nodes {
                            title
                            featuredImage {
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
                  bottomLineColor
                  title
                }
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
        seo {
          canonical
          fullHead
          metaDesc
          title
        }
      }
    }
  }
`;
