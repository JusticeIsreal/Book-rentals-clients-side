import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONETS
import Topbar from "./Components/AdminPageComponents/Topbar";
import Sidebar from "./Components/AdminPageComponents/Sidebar";

//ADMIN PAGES
import Store from "./Pages/Adminpage/Store";
import AdminDashboard from "./Pages/Adminpage/AdminDashboard";
import EditProduct from "./Pages/Adminpage/EditProduct";
import Transaction from "./Pages/Adminpage/Transaction";
import EditTransaction from "./Pages/Adminpage/EditTransaction";
import CustomersData from "./Pages/Adminpage/CustomersData";
// CLIENT PAGES
import Sample from "./Pages/ClientPage/Sample";
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
        <Routes>
          {/* ADMIN PAGE ROUTES */}
          <Route
            path="/admindashboard"
            element={
              <AdminDashboard
                products={products}
                transaction={transaction}
                users={users}
                sortTransaction={sortTransaction}
              />
            }
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
                transaction={transaction}
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
          {/* ADMIN PAGE ROUTE ENDS */}

          {/* CLIENT PAGE STARTS */}
          <Route path="/sample" element={<Sample products={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
