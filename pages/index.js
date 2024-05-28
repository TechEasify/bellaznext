import getConfig from "next/config";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Topheadlines from "../components/Topheadlines";
import Advertisement from "../components/Advertisement";
import Insights from "../components/Insights";
import Music from "../components/Music";
import Sliders from "../components/Sliders";
import PlacementPartners from "../components/PlacementPartners";
import Footer from "../components/Footer";
import Excusivenews from "../components/Excusivenews";
import Cardnews from "../components/Cardnews";
import Nav from "../components/Nav";
// import EntryHeader from "../components/entry-header";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const GET_HOME_PAGE = gql`
 
query HeaderFragment {
  primaryMenuItems: menuItems(where: {location: PRIMARY}) {
    nodes {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  }
  generalSettings {
    title
    description
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  console.log(data);
  const { title, description: siteDescription } =
    data.generalSettings;

    console.log(title, "title");
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* <Nav
        siteTitle={title}
        siteDescription={siteDescription}
        menuItems={menuItems}
      /> */}

      <main className="container">
        {/* <EntryHeader title="Welcome to the Faust Scaffold Blueprint" /> */}

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
};

export default Home;
