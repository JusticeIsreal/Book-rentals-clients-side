import React, { useState, useEffect, useRef } from "react";
import Loader from "../Loader";
import { FaEye } from "react-icons/fa";
function products({ newArrival, romance, scifi, motivation, products }) {
  const romanceRef = useRef();
  const scifiRef = useRef();
  const motivationRef = useRef();
  const [allProducts, setAllProducts] = useState([]);
  const [firstRenderProduct, setFirstRenderProduct] = useState(true);
  const filterByCategory = (e) => {
    let category = e.target.innerHTML;
    setAllProducts(products);
    if (category === "All") {
      setAllProducts(products);
      setFirstRenderProduct(false);
    } else if (category === "Romance") {
      setAllProducts(romance);
      setFirstRenderProduct(false);
    } else if (category === "Scifi") {
      setAllProducts(scifi);
      setFirstRenderProduct(false);
    } else if (category === "Motivation") {
      setAllProducts(motivation);
      setFirstRenderProduct(false);
    } else {
      setAllProducts(products);
    }
  };

  return (
    <div>
      <section className="featured" id="featured">
        <h1 className="heading">
          <span
            style={{
              background: "transparent",
              border: "none",
              fontSize: "20px",
            }}
          >
            New Arrivals
          </span>{" "}
        </h1>

        <div className="swiper featured-slider">
          {newArrival.map((product) => {
            return <SingleNewArrival key={product._id} {...product} />;
          })}
        </div>

        {/*ALL PRODUCTS  */}
        <h1 className="heading" style={{ marginTop: "50px" }}>
          <span
            style={{
              background: "transparent",
              border: "none",
              fontSize: "50px",
            }}
          >
            Shelf
          </span>
        </h1>
        <div
          style={{
            margin: "0 auto",
            marginTop: "-20px",
          }}
        >
          <form
            style={{
              margin: "0 auto",
              width: "280px",
            }}
          >
            <input
              type="text"
              style={{
                margin: "5px",
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "5px",
                border: "1px solid gray",
              }}
            />
            <div
              style={{
                width: "100px",
                margin: "0 auto",
              }}
            >
              <button
                style={{
                  width: "100%",
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "350px",
            height: "30px",
            margin: "0 auto",
            marginTop: "50px",
          }}
        >
          <div
            onClick={(e) => filterByCategory(e)}
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "white",
              background: "#3d91e6",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            All
          </div>
          <div
            onClick={(e) => filterByCategory(e)}
            ref={scifiRef}
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "white",
              background: "#3d91e6",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            Scifi
          </div>
          <div
            onClick={(e) => filterByCategory(e)}
            ref={motivationRef}
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "white",
              background: "#3d91e6",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            Motivation
          </div>
          <div
            onClick={(e) => filterByCategory(e)}
            ref={romanceRef}
            style={{
              fontSize: "17px",
              fontWeight: "600",
              color: "white",
              background: "#3d91e6",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            Romance
          </div>
        </div>
        <div className="swiper featured-slider main-products-list">
          {firstRenderProduct ? (
            <>
              {products.map((product) => (
                <SingleProduct key={product._id} {...product} />
              ))}
            </>
          ) : (
            <>
              {allProducts.map((product) => (
                <SingleProduct key={product._id} {...product} />
              ))}
            </>
          )}
        </div>
        <div className="see-more-products">
          <p>See more</p>
        </div>
      </section>
    </div>
  );
}

export default products;

function SingleNewArrival({
  _id,
  productimage,
  productname,
}) {
  return (
    <div>
      <div className="swiper-slide box">
        <div className="image">
          <img src={productimage} alt="" />
        </div>
        <div className="content">
          <h3>{productname}</h3>
        </div>
      </div>
    </div>
  );
}

function SingleProduct({
  _id,
  productimage,
  productname,
  productprice,
  productoldprice,
}) {
  return (
    <div className="products-single-con">
      <div className="swiper-slide box">
        <div className="image">
          <img src={productimage} alt="" />
        </div>
        <div className="content">
          <h3>{productname}</h3>
          <div className="price">
            {productprice}
            <span>{productoldprice}</span>
          </div>
          <a href="" className="btn">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
