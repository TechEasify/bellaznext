import { gql } from "@apollo/client";

export const GET_NAV_SECTION = gql`
  query ($id: ID = "230") {
    menu(id: $id, idType: DATABASE_ID) {
      header {
        topFirst
        topFirstLinks {
          url
        }
        topSecond
        topSecondLinks {
          url
        }
        topThird
        topThirdLinks {
          url
        }
        topFore
        topForeLinks {
          url
        }
        foreSquareFirst
        foreSquareFirstLink {
          url
        }
        foreSquareSecond
        foreSquareSecondLink {
          url
        }
        foreSquareThird
        foreSquareThirdLink {
          url
        }
        headerButton {
          link
          text
        }
        headerBackgroundColor
        mainMenuFirst
        mainMenuFirstLink {
          url
        }
        mainMenuSecond
        mainMenuSecondLink {
          url
        }
        mainMenuThird
        mainMenuThirdLink {
          url
        }
        subFirst
        subFirstLink {
          url
        }
        subSecond
        subSecondLink {
          url
        }
        subThird
        subThirdLink {
          url
        }
      }
    }
  }
`;

export const GET_ICON_SECTION = gql`
  query ($id: ID = "230") {
    menu(id: $id, idType: DATABASE_ID) {
      socialIcons {
        facebookIcon {
          node {
            altText
            srcSet
          }
        }
        facebookLink
        instagramIcon {
          node {
            altText
            srcSet
          }
        }
        instagramLink
        twiterIcon {
          node {
            altText
            srcSet
          }
        }
        twiterLink
        whatsappIcon {
          node {
            altText
            srcSet
          }
        }
        whatsappLink
        youtubeIcon {
          node {
            altText
            srcSet
          }
        }
        youtubeLink
      }
      followBelaazOnWhatsapp {
        whatsappGroupLink
        whatsappStatusLink
      }
    }
  }
`;

export const GET_HOME_PAGE = gql`
  query GetNodeByUriAndHomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        heroSection {
          heroPostCategory {
            nodes {
              ... on Category {
                posts {
                  nodes {
                    slug
                    categories {
                      nodes {
                        name
                      }
                    }
                    title
                    content
                    excerpt
                    author {
                      node {
                        name
                      }
                    }
                    featuredImage {
                      node {
                        altText
                        srcSet
                        slug
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlinesTitle
        topHeadlineTitleLineColor
        topHeadlinesPost {
          nodes {
            ... on Category {
              name
              slug
              posts {
                nodes {
                  slug
                  featuredImage {
                    node {
                      altText
                      slug
                      srcSet
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  content
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
        topHeadlineSidebarTitle
        topHeadlineSidebarTitleLineColor
        topHeadlineSidebarPosts {
          nodes {
            ... on Category {
              id
              name
              slug
              posts {
                nodes {
                  slug
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlineSidebarFirstAd {
          topHeadlineFirstAd {
            node {
              slug
              altText
              srcSet
              sourceUrl
            }
          }
          topHeadlineFirstAdCode
          topHeadlineFirstAdLink
        }
        topHeadlineSidebarSinglePosts {
          nodes {
            ... on Category {
              name
              slug
              posts {
                nodes {
                  slug
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  featuredImage {
                    node {
                      altText
                      srcSet
                      slug
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        }
        topHeadlineSidebarSecondAd {
          topHeadlineSecondAdImage {
            node {
              altText
              srcSet
              slug
              sourceUrl
            }
          }
          topHeadlineSecondAdLink
          topHeadlineSecondAdCode
        }
        topHeadlineBottomAd {
          topHeadlineBottomAdImage {
            node {
              altText
              srcSet
              slug
              sourceUrl
            }
          }
          topHeadlineBottomAdCode
          topHeadlineBottomAdLink
        }
        twitterEmbedCodes {
          twitterEmbedCode1
          twitterEmbedCode2
          twitterEmbedCode3
          twitterEmbedCode4
          twitterEmbedCode5
          twitterEmbedCode6
        }
        ctaTitle
        ctaDescription
        ctaBackgroundImage {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_INSIGHTS_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        insightsTitle
        insightsTitleBottomLineColor
        insightsPost {
          nodes {
            ... on Category {
              name
              slug
              posts {
                nodes {
                  featuredImage {
                    node {
                      altText
                      slug
                      srcSet
                      sourceUrl
                    }
                  }
                  title
                  slug
                  categories {
                    nodes {
                      name
                    }
                  }
                  author {
                    node {
                      name
                    }
                  }
                  content
                }
              }
            }
          }
        }
        insightsAd {
          insightAdLink
          insightsAdCode
          insightAdImage {
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
`;

export const GET_MUSIC_SECTION = gql`
  query HomePage($id: ID = "745") {
    page(id: $id, idType: DATABASE_ID) {
      homePage {
        musicTitle
        musicBottomLineColor
        musicPosts {
          nodes {
            ... on Category {
              posts {
                nodes {
                  slug
                  featuredImage {
                    node {
                      altText
                      srcSet
                      sourceUrl
                    }
                  }
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  author {
                    node {
                      name
                    }
                  }
                  content
                }
              }
            }
          }
        }
        musicAd {
          musicAdImage {
            node {
              altText
              srcSet
              sourceUrl
            }
          }
          musicAdCode
          musicAdLink
        }
        musicBottomAd {
          musicBottomAdImage {
            node {
              altText
              srcSet
              sourceUrl
            }
          }
          musicBottomAdCode
          musicBottomAdLink
        }
      }
    }
  }
`;

export const GET_TESTIMONIAL_SECTION = gql`
  query MyQuery2 {
    page(id: "3114", idType: DATABASE_ID) {
      id
      advertise {
        testimonials {
          testimonial {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial1 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial2 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial3 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial4 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial5 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial6 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial7 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial8 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial9 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
          testimonial10 {
            authorName
            authorImage {
              node {
                altText
                srcSet
                sourceUrl
              }
            }
            message
            rating
          }
        }
      }
    }
  }
`;
