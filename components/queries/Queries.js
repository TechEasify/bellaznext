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
            sourceUrl
          }
        }
        facebookLink
        instagramIcon {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        instagramLink
        twiterIcon {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        twiterLink
        whatsappIcon {
          node {
            altText
            srcSet
            sourceUrl
          }
        }
        whatsappLink
        youtubeIcon {
          node {
            altText
            srcSet
            sourceUrl
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
      ... on Page {
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

export const SEARCH_QUERY = gql`
  query MyQuery2(
    $last: Int
    $first: Int = 10
    $before: String
    $after: String
    $after1: String
    $before1: String
    $first1: Int = 10
    $last1: Int
  ) {
    categories(after: $after, before: $before, first: $first, last: $last) {
      nodes {
        name
        posts(after: $after1, before: $before1, first: $first1, last: $last1) {
          nodes {
            title
            slug
            featuredImage {
              node {
                altText
                slug
                sourceUrl
                srcSet
                description
              }
            }
            excerpt
            content
            author {
              node {
                name
              }
            }
            categories {
              nodes {
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
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const SEO_QUERY = gql`
  query NewQuery($uri: String = "") {
    nodeByUri(uri: $uri) {
      ... on Category {
        id
        name
        seo {
          canonical
          fullHead
          metaDesc
          title
        }
      }
      ... on Page {
        id
        title
        seo {
          canonical
          fullHead
          metaDesc
          title
        }
      }
      ... on Post {
        id
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

export const GET_CONTACT_PAGE = gql`
  query AboutPage($id: ID = "3163") {
    page(id: $id, idType: DATABASE_ID) {
      contactUs {
        advertise {
          advertiseTitle
          description
          emailAddress
          whatsappLink
          fieldGroupName
        }
        submitNewsTip {
          description
          emailAddress
          fieldGroupName
          submitNewsTipTitle
          whatsappLink
        }
        noteToEditor {
          description
          emailAddress
          fieldGroupName
          noteToEditorTitle
          whatsappLink
        }
      }
    }
  }
`;

export const GET_FOOTER_PAGE = gql`
  query footer($id: ID = "229") {
    menu(id: $id, idType: DATABASE_ID) {
      footer {
        companyTitle
        companyFirst
        companyFirstLink {
          url
        }
        companySecond
        companySecondLink {
          url
        }
        companyThird
        companyThirdLink {
          url
        }
        companyFore
        companyForeLink {
          url
        }
        companyFive
        companyFiveLink {
          url
        }
        footerBackgroundColor
        newsTitle
        newsFirst
        newsFirstLinks {
          url
        }
        newsSecond
        newsSecondLinks {
          url
        }
        newsThird
        newsThirdLinks {
          url
        }
        newsFore
        newsForeLinks {
          url
        }
        newsFive
        newsFiveLinks {
          url
        }
        belaazTwitter
        belaazTwitterLink
        belaazFacebook
        belaazFacebookLink
        belaazInstagram
        belaazInstagramLink
        belaazYoutube
        belaazYoutubeLink
        belaazTelegram
        belaazTelegramLink
        copyrightText
      }
    }
  }
`;

export const GET_ABOUT_PAGE = gql`
  query ($id: ID = "3082") {
    page(id: $id, idType: DATABASE_ID) {
      about {
        pageTitle
        description
        ourTeamTitle
        ourTeamMembers {
          teamA {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamB {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamC {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamD {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamE {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamF {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamG {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
          teamH {
            image {
              node {
                altText
                srcSet
              }
            }
            name
            designation
          }
        }
      }
    }
  }
`;

export const GET_ADVERTISE_PAGE = gql`
  query ($id: ID = "3114") {
    page(id: $id, idType: DATABASE_ID) {
      advertise {
        title
        description
        button {
          advertiseWithUs
          buttonLink
          buttonTextColor
          buttonBorderColor
          buttonBackgroundColor
        }
        share {
          iconFirst
          email
        }
        follow {
          twiterLink
          instagramLink
          facebookLink
        }
        logoSection {
          backgroundColor
          logoImage {
            node {
              altText
              srcSet
              slug
            }
          }
        }
        clientImages {
          imageA {
            node {
              altText
              srcSet
            }
          }
          imageB {
            node {
              altText
              srcSet
            }
          }
          imageC {
            node {
              altText
              srcSet
            }
          }
          imageD {
            node {
              altText
              srcSet
            }
          }
          imageE {
            node {
              altText
              srcSet
            }
          }
          imageF {
            node {
              altText
              srcSet
            }
          }
          imageG {
            node {
              altText
              srcSet
            }
          }
          imageH {
            node {
              altText
              srcSet
            }
          }
          imageI {
            node {
              altText
              srcSet
            }
          }
          imageJ {
            node {
              altText
              srcSet
            }
          }
          imageK {
            node {
              altText
              srcSet
            }
          }
          imageL {
            node {
              altText
              srcSet
            }
          }
          imageM {
            node {
              altText
              srcSet
            }
          }
          imageN {
            node {
              altText
              srcSet
            }
          }
          imageO {
            node {
              altText
              srcSet
            }
          }
          imageP {
            node {
              altText
              srcSet
            }
          }
        }
        cta {
          leftSideTitle
          emailAddress
          phoneNumber
          backgroundColor
          backgroundImage {
            node {
              altText
              srcSet
              slug
            }
          }
        }
      }
    }
  }
`;
