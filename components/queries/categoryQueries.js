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
    primaryMenuItems: menuItems(where: { location: PRIMARY }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    newMenuLocationItems: menuItems(
      where: { location: TOP_MENU_LOCATION }
      first: 50
    ) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer: menuItems(where: { location: FOOTER_MENU_LOCATION_1 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer1: menuItems(where: { location: FOOTER_MENU_LOCATION_2 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer2: menuItems(where: { location: FOOTER_MENU_LOCATION_3 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer3: menuItems(where: { location: FOOTER }, first: 1) {
      edges {
        node {
          menu {
            node {
              footer {
                copyrightText
              }
            }
          }
        }
      }
    }
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
                        excerpt
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
  fragment MenuItemFragment on MenuItem {
    uri
    label
    cssClasses
    parentId
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
  query GetMenu($uri: String = "$uri") {
  primaryMenuItems: menuItems(where: { location: PRIMARY }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    newMenuLocationItems: menuItems(
      where: { location: TOP_MENU_LOCATION }
      first: 50
    ) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer: menuItems(where: { location: FOOTER_MENU_LOCATION_1 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer1: menuItems(where: { location: FOOTER_MENU_LOCATION_2 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer2: menuItems(where: { location: FOOTER_MENU_LOCATION_3 }, first: 50) {
      edges {
        node {
          ...MenuItemFragment
          childItems {
            nodes {
              ...MenuItemFragment
            }
          }
        }
      }
    }
    footer3: menuItems(where: { location: FOOTER }, first: 1) {
      edges {
        node {
          menu {
            node {
              footer {
                copyrightText
              }
            }
          }
        }
      }
    }
  nodeByUri(uri: $uri) {
    ... on Post {
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
                ...CategoryToPostConnectionFragment
              }
            }
          }
        }
        bottomLineColor
        title
      }
      author {
        node {
          name
        }
      }
      content
      featuredImage {
        node {
          altText
          sourceUrl
          srcSet
        }
      }
      title
      slug
    }
  }
}

fragment MenuItemFragment on MenuItem {
  uri
  label
  cssClasses
  parentId
}

fragment CategoryToPostConnectionFragment on CategoryToPostConnection {
  nodes {
    slug
    author {
      node {
        name
      }
    }
    title
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;
