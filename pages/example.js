import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import { getNextStaticProps } from "@faustwp/core";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);
  console.log(data, "data");

  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Nav
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql`
  ${Nav.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page,
  });
}
