import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Topheadlines from "../components/Topheadlines";
import Advertisement from "../components/Advertisement";
import Insights from "../components/Insights";
import Sliders from "../components/Sliders";
import Music from "../components/Music";
import PlacementPartners from "../components/PlacementPartners";
import Excusivenews from "../components/Excusivenews";
import Cardnews from "../components/Cardnews";

export default function Component(props) {
  console.log(props, "props");
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      /> */}
      <Nav
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title="Welcome to the Faust Scaffold Blueprint" />

        {/* <section>
          <Link
            href="https://faustjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Documentation →</h3>
            <p>
              Learn more about Faust.js through guides and reference
              documentation.
            </p>
          </Link>

          <Link
            href="https://my.wpengine.com/atlas#/create/blueprint"
            target="_blank"
            rel="noopener noreferrer"
            className={style.card}
          >
            <h3>Blueprints →</h3>
            <p>Explore production ready Faust.js starter projects.</p>
          </Link>

          <Link
            href="https://wpengine.com/atlas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Deploy →</h3>
            <p>
              Deploy your Faust.js app to Atlas along with your WordPress
              instance.
            </p>
          </Link>

          <Link
            href="https://github.com/wpengine/faustjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Contribute →</h3>
            <p>Visit us on GitHub to explore how you can contribute!</p>
          </Link>
        </section> */}

        <section>
          <Layout>
            <Banner />
            <Topheadlines />
            <Advertisement />
            <Insights />
            <Sliders />
            <Music />
            <PlacementPartners />
            <Excusivenews />
            <Cardnews />
            <PlacementPartners />
          </Layout>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Component.query = gql`
//   ${Nav.fragments.entry}
//   query GetHomePage {
//     ...NavFragment
//   }
// `;

Component.query = gql`
  ${Nav.fragments.entry}
  query GetHomePage {
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        ...NavFragment
      }
    }
    generalSettings {
      title
      description
    }
  }
`;
