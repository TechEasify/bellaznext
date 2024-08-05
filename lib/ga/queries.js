// queries.js
import { gql } from "@apollo/client";
import { CATEGORY_FIELDS, TAG_FIELDS, POST_FIELDS } from "./fragments";

export const CATEGORY_QUERY = gql`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        ...CategoryFields
      }
      ... on Post {
        ...PostFields
      }
      ... on Tag {
        ...TagFields
      }
    }
  }
  ${CATEGORY_FIELDS}
  ${POST_FIELDS}
  ${TAG_FIELDS}
`;

