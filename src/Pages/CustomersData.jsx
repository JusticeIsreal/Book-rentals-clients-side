import StoreItems from "../Components/StoreItems";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

// ICON
import { HiRefresh, HiCloudDownload } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { GrUserWorker, GrUserAdmin } from "react-icons/gr";
import { FaEdit, FaUsers } from "react-icons/fa";

function CustomersData({ users }) {
  const [client, setClient] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admin, setAdmin] = useState([]);

  const filterUsers = () => {
    // FETCH TRANSACTION
    fetch("http://localhost:1234/api/v1/userverification/filterusers")
      .then((res) => res.json())
      .then((data) => {
        setClient(data.client);
        setStaff(data.staff);
        setAdmin(data.admin);
        console.log(admin.length);
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  useEffect(() => {
    filterUsers();
  }, []);

  // display form on and of
  const [formShow, setFormShow] = useState(false);
  // NAVIGATE PAGE BACK
  const history = useNavigate();
  return (
    <div id="content">
      <main>
        <div
          className="head-title"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
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
              <h1>Users</h1>

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

          <div className="user-ul">
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
                <FaUsers className="bx bxs-group" />
                <span className="text">
                  <h3>{client.length}</h3>
                  <p>Users</p>
                </span>
              </li>
              <li>
                <GrUserWorker className="bx bxs-calendar-check" />
                <span className="text">
                  <h3>{staff.length}</h3>
                  <p>Staff</p>
                </span>
              </li>
              <li>
                <GrUserAdmin className="bx bxs-calendar-check" />
                <span className="text">
                  <h3>{admin.length}</h3>
                  <p>Admin</p>
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
              overflow: "hidden",
            }}
          >
            <div className="head">
              <h3>Customer's List</h3>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>

              {users.map((user) => (
                <UserTable
                  key={user._id}
                  {...user}
                  // fetchProducts={fetchProducts}
                />
              ))}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CustomersData;

function UserTable({ _id, name, email, position, verified }) {
  return (
    <tbody style={{ color: "black" }}>
      <tr>
        <td>
          <p>{name}</p>
        </td>
        <td>{email}</td>
        <td>{position}</td>
        <td>{verified ? "True" : "False"}</td>
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
              style={{
                cursor: "pointer",
                color: "#3c91e6",
                margin: "0 12px",
              }}
            />
          </Link>{" "}
        </td>
      </tr>
    </tbody>
  );
}
