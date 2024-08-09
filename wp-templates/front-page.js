import Nav from "../components/Nav";
import { GET_NAV_SECTION } from "../components/queries/Queries";
import Banner from "../components/Banner";
import Advertisement from "../components/Advertisement";
import Insights from "../components/Insights";
import Sliders from "../components/Sliders";
import PlacementPartners from "../components/PlacementPartners";
import Excusivenews from "../components/Excusivenews";
import Cardnews from "../components/Cardnews";
import Music from "../components/Music";
import Footer from "../components/Footer";

export default function Component(props) {
  console.log(props, "props front-page");

  return (
    <>
      <Nav dataNav={props.data} />
      <Banner dataNav={props.data} />
      <Advertisement dataNav={props.data} />
      <Insights dataNav={props.data} />
      <Sliders dataNav={props.data} />
      <Music dataNav={props.data} />
      <PlacementPartners dataNav={props.data} />
      <Excusivenews dataNav={props.data} />
      <Cardnews dataNav={props.data} />
      <Footer dataNav={props.data} />
    </>
  );
}

Component.query = GET_NAV_SECTION;


Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
  };
};