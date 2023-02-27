import Link from "next/link";
import React from "react";

const Blog = ({ blogId = 100 }) => {
  return (
    <>
      <h1>welcome to blog page</h1>

      <Link href="/blog/first"> blog 1</Link>
      <Link href="/blog/blog-second"> blog 2</Link>
    </>
  );
};

export default Blog;
