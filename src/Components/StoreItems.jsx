import React, { useState, useEffect } from "react";

function StoreItems() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:1234/api/v1/products/allproducts")
      .then((res) => res.json())
      .then((data) => {
        const productsWithImage = data.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });
        // Sort products by timestamp in reverse order
        const sortedProducts = productsWithImage.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setProducts(sortedProducts);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // function to convert base64 string to blob object
  const b64toBlob = (base64String) => {
    const byteString = atob(base64String.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" }); // assuming the image is PNG format
  };

  return (
    <div>
      <div
        onClick={() => fetchProducts()}
        style={{ border: "2px solid red", cursor: "pointer" }}
      >
        PRESS
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Product List</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>

          <table
            className="table"
            style={{
              width: "100%",
              minWidth: "500px",
            }}
          >
            <thead>
              <tr>
                <th>Img</th>
                <th style={{ width: "10%" }}>Name</th>
                <th style={{ width: "10%" }}>Price</th>
                <th style={{ width: "10%" }}>Slash</th>
                <th style={{ width: "10%" }}>ISBN</th>
                <th style={{ width: "10%" }}>Cat</th>
                <th style={{ width: "10%" }}>Class</th>
                <th style={{ width: "30%" }}>Desc</th>
                <th style={{ width: "10%" }}>Status</th>
              </tr>
            </thead>

            {products.map((product) => (
              <StoreItemsIndividual key={product._id} {...product} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default StoreItems;

function StoreItemsIndividual({
  productimage,
  productname,
  productprice,
  productnumber,
  productoldprice,
  productcategory,
  productclass,
  productavailable,
  productdescription,
}) {
  return (
    <tbody>
      <tr>
        <td>
          <img
            src={productimage}
            alt={productname}
            style={{ width: "40px", borderRadius: "0%", margin: "5px" }}
          />
        </td>
        <td>
          <p>{productname}</p>
        </td>
        <td>{productprice}</td>
        <td>{productoldprice}</td>
        <td>{productnumber}</td>
        <td>{productcategory}</td>
        <td>{productclass}</td>
        <td>{productdescription}</td>

        <td>
          <span className="status completed">Completed</span>
        </td>
      </tr>
    </tbody>
  );
}
