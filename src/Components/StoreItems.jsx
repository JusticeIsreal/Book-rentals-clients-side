import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiRefresh } from "react-icons/hi";
// ICONS
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function StoreItems({ fetchProducts, products }) {
  return (
    <div>
      <div className="table-data">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
            paddingTop: "50px",
          }}
        >
          <div className="head">
            <h3>Product List</h3>
          </div>
          <div
            className="head"
            onClick={() => fetchProducts()}
            style={{
              border: "2px solid #3c91e6",
              padding: "0 5px",
              cursor: "pointer",
            }}
          >
            <HiRefresh />
            Re-Fresh
          </div>
        </div>
        <div className="order" style={{ position: "relative" }}>
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
                <th>Name</th>
                <th>Price</th>
                <th>Slash</th>
                <th>ISBN</th>
                <th>Cat</th>
                <th>Class</th>
                <th>Desc</th>
                <th>Edit</th>
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
  _id,
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
  const deleteProduct = async (_id) => {
    //     const tokenSaved = localStorage.getItem("token");
    // const jsonData = JSON.parse(tokenSaved);
    // const token = jsonData.token;
    await axios
      .delete(
        `http://localhost:1234/api/v1/products/deleteproduct/${_id}`
        // {
        //   // headers: {
        //   //   authorization: `Bearer ${token}`,
        //   // },
        // }
      )

      .then((resp) => {
        // window.location.reload();
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    //
    <tbody style={{ color: "black" }}>
      <tr>
        <td>
          <img
            src={productimage}
            alt={productname}
            style={{ width: "40px", borderRadius: "0%", margin: "5px" }}
          />
        </td>
        <td style={{ width: "11%" }}>
          <p>{productname}</p>
        </td>
        <td style={{ width: "10%", margin: "5px" }}>{productprice}</td>
        <td style={{ width: "10%", margin: "5px" }}>{productoldprice}</td>
        <td style={{ width: "10%", margin: "5px" }}>{productnumber}</td>
        <td style={{ width: "10%", margin: "5px" }}>{productcategory}</td>
        <td style={{ width: "10%", margin: "5px" }}>{productclass}</td>
        <td style={{ width: "27%", margin: "5px" }}>{productdescription}</td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <Link to={`/productedit/${_id}`}>
            <FaEdit
              style={{ cursor: "pointer", color: "#3c91e6", margin: "0 12px" }}
            />
          </Link>{" "}
          <FaTrashAlt
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => deleteProduct(_id)}
          />
        </td>
      </tr>
    </tbody>
  );
}
