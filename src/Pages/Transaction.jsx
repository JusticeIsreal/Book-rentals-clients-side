import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HiRefresh, HiCloudDownload } from "react-icons/hi";
import { MdArrowBackIos } from "react-icons/md";
// ICONS
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";

import { FaShoppingCart, FaPeopleCarry, FaChartLine } from "react-icons/fa";
function Transaction({ fetchProducts, products, sortTransaction }) {
  // Navgat back
  const history = useNavigate();

  return (
    <div id="content">
      <main>
        <div
          className="head-title"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <div
              className="left"
              style={{
                marginBottom: "10px",
              }}
            >
              <h1>Transactions</h1>

              <ul className="breadcrumb">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li onClick={() => history(-1)}>
                  <a
                    className="active"
                    href=""
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MdArrowBackIos /> Back
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-download">
              <b className="bx bxs-cloud-download">
                <HiCloudDownload />{" "}
              </b>
              <span className="text">Download PDF</span>
            </div>
          </div>

          <div className="transaction-ul">
            <ul
              className="box-info"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <li>
                <FaStoreAlt className="bx bxs-calendar-check" />
                <span className="text">
                  {/* <h3>{products.length}</h3> */}
                  <p>Products</p>
                </span>
              </li>
              <li>
                <FaShoppingCart className="bx bxs-calendar-check" />
                <span className="text">
                  <h3>1020</h3>
                  <p>New Order</p>
                </span>
              </li>
              <li>
                <FaPeopleCarry className="bx bxs-group" />
                <span className="text">
                  <h3>2834</h3>
                  <p>Visitors</p>
                </span>
              </li>
              <li>
                <FaChartLine className="bx bxs-dollar-circle" />
                <span className="text">
                  <h3>$2543</h3>
                  <p>Total Sales</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
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
              <h3>Order List</h3>
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
                  <th>User</th>
                  <th>Address</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>payment</th>
                </tr>
              </thead>

              {sortTransaction.map((transaction) => (
                <StoreTransaction
                  key={transaction._id}
                  {...transaction}
                  fetchProducts={fetchProducts}
                />
              ))}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Transaction;

function StoreTransaction({
  _id,
  deliveryaddress,
  totalAmount,
  user,
  product,
  usernumber,
  timestamp,
  status,
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
        fetchProducts();
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    //
    <tbody style={{ color: "black" }}>
      <tr>
        <td style={{ display: "block", fontSize: "13px" }}>
          {user[0].name} <br />
          <a
            href={`https://${user[0].email}`}
            target="_blank"
            style={{ display: "block" }}
          >
            {user[0].email}
          </a>
          <br />
          <a
            href={`tel:${usernumber}`}
            target="_blank"
            style={{ display: "block", fontSize: "12px" }}
          >
            {usernumber}
          </a>
        </td>

        <td>
          <a
            href={`https://www.google.com/maps?q=${deliveryaddress}`}
            target="_blank"
            style={{ fontSize: "12px" }}
          >
            {deliveryaddress}
          </a>
        </td>
        <td>
          {product.map((product) => (
            <div key={product._id} style={{ fontSize: "12px" }}>
              {product.productname}-N{product.productprice} -{product.quantity}
            </div>
          ))}
        </td>
        <td> N{totalAmount}</td>
        <td style={{ fontSize: "12px" }}>{timestamp}</td>
        <td>
          <b
            style={{
              backgroundColor: (() => {
                switch (status) {
                  case "Open":
                    return "#db504a";
                  case "Processing":
                    return "#ffce26";
                  case "Delivered":
                    return "#3d91e6";
                  default:
                    return "#3d91e6";
                }
              })(),
              color: "white",
              padding: "0 5px",
              borderRadius: "5px",
              fontSize: "12px",
            }}
          >
            {status}
          </b>
        </td>
        <td>
          <b
            style={{
              backgroundColor: (() => {
                switch (status) {
                  case "Failed":
                    return "#db504a";
                  case "Pending":
                    return "#ffce26";
                  case "Success":
                    return "#3d91e6";
                  default:
                    return "#3d91e6";
                }
              })(),
              color: "white",
              padding: "0 5px",
              borderRadius: "5px",
              fontSize: "12px",
            }}
          >
            Success
          </b>
        </td>
        <td
          style={{
            fontSize: "20px",
          }}
        >
          <Link to={`/transactionedit/${_id}`}>
            <FaEdit
              style={{ cursor: "pointer", color: "#3c91e6", margin: "0 12px" }}
            />
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
