import getConfig from "next/config";

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

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Topheadlines />
      <Advertisement />
      <Insights />
      <Sliders />
      <Music />
      <PlacementPartners />
      <Excusivenews/>
      <Cardnews/>
      <PlacementPartners />
      <Footer />
    </Layout>
  );
};

export default Home;
