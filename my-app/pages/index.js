import Link from "next/link";
import { useRouter } from "next/router";

const home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <>
      <h1>Welcome to home page</h1>

      <Link href="/blog">Blog page</Link>
      <br />
      <Link href="/product">Product page</Link>

      <button onClick={handleClick}>Product page</button>

      <br />
      <br />
      <Link href="/posts">Post Page</Link>
    </>
  );
};

export default home;
