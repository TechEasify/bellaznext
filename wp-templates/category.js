import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Insight from "../components/Insight";
import { CATEGORY_BREAKING_QUERY } from "../components/queries/categoryQueries";
import Music from "../components/categoryMusic";

export default function Component(props) {
  console.log(props, "props category");
  return (
    <>
      <Nav
        dataNav={props.data}
      />

      <main>
      {props?.data?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] ===
        "Template-1" ? (
          <main>
            <Insight
              nodeByUri={props?.data?.nodeByUri}
            />
          </main>
        ) : props?.data?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] === "Template-2" ? (
          <main>
            <Music
              nodeByUri={props?.data?.nodeByUri}
            />
          </main>
        ) : (
          <ul>
            {props?.data?.nodeByUri !== null &&
              props?.data?.nodeByUri?.posts?.nodes.map((post) =>
                post.link ? (
                  <li key={post.id}>
                    <Link href={post.link}>{post.title}</Link>
                  </li>
                ) : null
              )}
          </ul>
        )}
      </main>

      <Footer dataNav={props.data}/>
    </>
  );
}

Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
  };
};

Component.query = CATEGORY_BREAKING_QUERY;
