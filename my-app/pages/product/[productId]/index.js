import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();

  const productId = router.query.productId;

  return (
    <div>
      <h1>Details of dynamic product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
