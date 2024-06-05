import { gql } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Component(props) {
  console.log(props, "props");
    // Loading state for previews
    if (props.loading) {
        return <>Loading...</>;
    }

    const { title: siteTitle, description: siteDescription } =
        props.data.generalSettings;
    const menuItems = props.data.primaryMenuItems.nodes;
    const { title, content, date, author } = props.data.contentNode;

    return (
        <>
            <Head>
                <title>{`${title} - ${siteTitle}`}</title>
            </Head>

            <Nav
                siteTitle={siteTitle}
                siteDescription={siteDescription}
                menuItems={menuItems}
            />

            <main className="container">
                <EntryHeader title={title} date={date} author={author?.node?.name} />
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </main>

            <Footer />
        </>
    );
}

Component.variables = ({ databaseId }, ctx) => {
    return {
        databaseId,
        asPreview: ctx?.asPreview,
    };
};

Component.query = gql`
  ${Nav.fragments.entry}
  query GetSingularContentNode($databaseId: ID!, $asPreview: Boolean = false) {
    contentNode(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      ...on NodeWithTitle {
       title
      }
      ...on NodeWithContentEditor {
        content
      }
      date
      ...on NodeWithAuthor {
        author {
          node {
            name
          }
        }
      }
    }
    ...HeaderFragment
  }
`;
