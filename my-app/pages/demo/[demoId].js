import Head from "next/head";

function Demo({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>Demo pages</h1>
    </>
  );
}

export default Demo;

export async function getServerSideProps() {
  return {
    props: {
      title: "Article title",
      description: "Article description",
    },
  };
}
