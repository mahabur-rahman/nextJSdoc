import Link from "next/link";

const Product = ({ productId = 10 }) => {
  return (
    <div>
      <h1>Product page</h1>
      <Link href="/">Home Page</Link>
      <br />
      <br />
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2" replace>
        Product 2
      </Link>
      <Link href="/product/3">Product 3</Link>
      <Link href={`/product/${productId}`}>Product {productId}</Link>
    </div>
  );
};

export default Product;
