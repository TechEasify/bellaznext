// Component.js
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { CATEGORY_QUERY } from "../lib/ga/queries";
import News from "../components/News";
import { GET_NEWS_SECTION } from "../components/queries/categoryQueries";

export default function Component(props) {
  console.log(props.data, "news props");
  const router = useRouter();
  const { slug } = router.query;
  const uri = `/${slug}`;
  return (
    <>
      <Nav dataNav={props.data} />
      <main>
        <News nodeByUri={props.data.nodeByUri} />
      </main>
      <Footer />
    </>
  );
}

Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
  };
};

Component.query = GET_NEWS_SECTION;
