// fragments.js
import { gql } from "@apollo/client";

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    content
    excerpt
    link
    slug
    featuredImage {
      node {
        ...ImageFields
      }
    }
    author {
      node {
        name
      }
    }
  }
`;

export const SIMPLE_ADVERTISEMENT_FIELDS = gql`
  fragment SimpleAdvertisementFields on SimpleAdvertisement {
    simpleAdImage {
      node {
        ...ImageFields
        sourceUrl
      }
    }
    simpleAdCode
  }
`;

export const SIMPLE_HERO_SECTION_FIELDS = gql`
  fragment SimpleHeroSectionFields on SimpleHeroSection {
    heroSidebarAdImage {
      node {
        altText
        srcSet
      }
    }
    heroSidebarAdCode
  }
`;

export const SIMPLE_TEMPLATE_FIELDS = gql`
  fragment SimpleTemplateFields on SimpleTemplate {
    simpleTitleBackgroundColor
    simpleHeroSection {
      ...SimpleHeroSectionFields
    }
    simpleAdvertisementImage {
      ...SimpleAdvertisementFields
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
  ${SIMPLE_HERO_SECTION_FIELDS}
  ${SIMPLE_ADVERTISEMENT_FIELDS}
`;

export const INSIGHTS_CATEGORY = gql`
  fragment InsightTamplate on Insight {
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
`;

export const CATEGORY_FIELDS = gql`
  fragment CategoryFields on Category {
    name
    posts {
      nodes {
        ...PostFields
      }
    }
    categoryTemplate {
      simpleTamplate {
        simpleTitleBackgroundColor
        simpleHeroSection {
          ...SimpleHeroSectionFields
        }
        SimpleAdvertisement {
          ...SimpleAdvertisementFields
        }
        simpleAllPostsSidebarAds {
          allSidebarAdCode
          allSidebarAdImage {
            node {
              ...ImageFields
              sourceUrl
            }
          }
        }
      }
    }
  }
  ${POST_FIELDS}
`;

export const TAG_FIELDS = gql`
  fragment TagFields on Tag {
    name
    posts {
      nodes {
        id
        title
        uri
      }
    }
  }
`;
