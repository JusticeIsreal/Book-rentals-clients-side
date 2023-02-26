import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONETS
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Store from "./Pages/Store";
import EditProduct from "./Pages/EditProduct";
import Transaction from "./Pages/Transaction";
import EditTransaction from "./Pages/EditTransaction";
import CustomersData from "./Pages/CustomersData";
// PAGES
import AdminDashboard from "./Pages/AdminDashboard";
function App() {
  const [products, setProducts] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchProducts = () => {
    // FETCH PRODUCTS
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
    // FETCH TRANSACTION
    fetch("http://localhost:1234/api/v1/transaction/alltransaction")
      .then((res) => res.json())
      .then((data) => {
        setTransaction(data.data);
        // console.log(transaction);
      })
      .catch((err) => {
        throw err;
      });

    // FETCH USERS
    fetch("http://localhost:1234/api/v1/userverification/allusers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  // SORT TRANSACTION
  const sortTransaction = transaction.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
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
      <Router>
        <Topbar />
        <Sidebar />
        <Routes>
          <Route
            path="/admindashboard"
            element={<AdminDashboard products={products} />}
          />
          <Route
            path="/store"
            element={
              <Store fetchProducts={fetchProducts} products={products} />
            }
          />
          <Route
            path="/productedit/:_id"
            element={<EditProduct products={products} />}
          />
          <Route
            path="/transaction"
            element={
              <Transaction
                fetchProducts={fetchProducts}
                products={products}
                sortTransaction={sortTransaction}
              />
            }
          />
          <Route
            path="/transactionedit/:_id"
            element={
              <EditTransaction
                fetchProducts={fetchProducts}
                products={products}
                sortTransaction={sortTransaction}
              />
            }
          />
          <Route
            path="/customer"
            element={
              <CustomersData users={users} fetchProducts={fetchProducts} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
