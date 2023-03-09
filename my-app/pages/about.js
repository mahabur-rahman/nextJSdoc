import Head from "next/head";

function About() {
  const db = process.env.MONGO_URI;
  const user = process.env.USER;

  console.log(`db url : ${db} and user is ${user}`);
  return (
    <>
      <Head>
        <title>About page | next misc</title>
        <meta name="description" content="Free of tutorials on web dev" />
      </Head>

      <h1 className="content">About page</h1>
      <h1>{process.env.NEXT_PUBLIC_ANALYTICS}</h1>
    </>
  );
}

export default About;
