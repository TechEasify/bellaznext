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
      }
    }
  }
`;

export const GET_MENU_SECTION = gql`
  query ($id: ID = "230") {
    menu(id: $id, idType: DATABASE_ID) {
      header {
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

export const GET_SUBMENU_SECTION = gql`
  query ($id: ID = "230") {
    menu(id: $id, idType: DATABASE_ID) {
      header {
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
    }
  }
`;