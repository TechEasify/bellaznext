import { getWordPressProps, WordPressTemplate } from '@faustwp/core';

export default function Page(props) {
  console.log(props, "props");
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  console.log(ctx, "ctx");
  return await getWordPressProps({ ctx });

  // if using WPGraphQL Smart Cache, uncomment this
  //return { ...(await getWordPressProps({ ctx })), revalidate: 1 }

}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
