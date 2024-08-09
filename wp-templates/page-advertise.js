import EntryHeader from "../components/entry-header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import About from "../components/About";
import { GET_ABOUT, GET_ADVERTISE_PAGE, GET_CONTACT_PAGE, GET_NAV_SECTION } from "../components/queries/Queries";
import Contactus from "../components/Contact-us";
import Advertise from "../components/Advertise";

export default function Component(props) {
  console.log(props, "props page advertise");
  const router = useRouter()
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Nav
        dataNav={props.data}
      />

      <main className="container">
        <Advertise advertiseQuery={props.data}/>
      </main>

      <Footer dataNav={props.data}/>
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = GET_ADVERTISE_PAGE
