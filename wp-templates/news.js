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
  
  const { archiveType, name, posts } = props.data.nodeByUri || {};
  const router = useRouter();
  const { slug } = router.query;
  const uri = `/${slug}`;
  return (
    <>
      <Nav name={name} />
      <main>
        <News nodeByUri={nodeByUri} newsData={data} />
        <ul>
          {posts.nodes.map((post) =>
            post.link ? (
              <li key={post.id}>
                <Link href={post.link}>{post.title}</Link>
              </li>
            ) : null
          )}
        </ul>
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
