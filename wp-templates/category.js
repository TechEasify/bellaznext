import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Insight from "../components/Insight";
import { CATEGORY_BREAKING_QUERY } from "../components/queries/categoryQueries";
import Music from "../components/categoryMusic";

export default function Component(props) {
  console.log(props, "props category");
  
  // const { title: siteTitle, description: siteDescription } =
  //   props.data.generalSettings;
  // const menuItems = props.data.primaryMenuItems.nodes;
  const { archiveType, name, posts } = props.data.nodeByUri;
  // const htmlTitle = `${archiveType}: ${name} - ${siteTitle}`;
  const { nodeByUri, pages } = props.data;
  const router = useRouter();

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
              nodeByUri={props.data.nodeByUri}
            />
          </main>
        ) : props?.data?.nodeByUri?.categoryTamplate?.selectYourTempleteType[0] === "Template-2" ? (
          <main>
            <Music
              nodeByUri={props.data.nodeByUri}
            />
          </main>
        ) : (
          <ul>
            {nodeByUri !== null &&
              nodeByUri?.posts?.nodes.map((post) =>
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
