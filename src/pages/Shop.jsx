import React, { useEffect } from "react";
import ProductDisplay from "../components/products/ProductDisplay";

const Shop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ProductDisplay />
    </>
  );
};

export default Shop;
