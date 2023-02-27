import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      {products.length === 0 ? (
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            <h1>No Products Found</h1>
          </div>
          {/* <!-- products container ends --> */}
          <div>
            {/* <!-- Product Input Form --> */}
            <AddProduct />
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      ) : (
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* <!-- products container ends --> */}
          <div>
            {/* <!-- Product Input Form --> */}
            <AddProduct />
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
