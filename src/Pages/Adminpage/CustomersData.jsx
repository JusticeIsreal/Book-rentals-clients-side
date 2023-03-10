import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Topbar from "../../Components/AdminPageComponents/Topbar";
import Sidebar from "../../Components/AdminPageComponents/Sidebar";
import Loader from "../../Components/Loader";
// ICON
import { HiRefresh, HiCloudDownload } from "react-icons/hi";
import { GrUserWorker, GrUserAdmin } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

function CustomersData({ users, fetchProducts }) {
  const [client, setClient] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admin, setAdmin] = useState([]);

  //using API END POINT fetch list of registered users by their position from the database
  const filterUsers = () => {
    // FETCH TRANSACTION
    fetch("http://localhost:1234/api/v1/userverification/filterusers")
      .then((res) => res.json())
      .then((data) => {
        setClient(data.client);
        setStaff(data.staff);
        setAdmin(data.admin);
        fetchProducts();
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  useEffect(() => {
    filterUsers();
  }, []);

  // NAVIGATE PAGE BACK
  const history = useNavigate();
  return (
    <>
      {" "}
      <Topbar />
      <Sidebar />
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
              {users.length >= 1 ? (
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
                      users={users}
                      fetchProducts={fetchProducts}
                      filterUsers={filterUsers}
                    />
                  ))}
                </table>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CustomersData;

function UserTable({
  _id,
  name,
  email,
  position,
  verified,
  users,
  fetchProducts,
  filterUsers,
}) {
  // useForm config setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // update user position via API END POINT
  const onSubmit = (data) => {
    const productDetails = { ...users, position: data.position };

    axios
      .patch(
        `http://localhost:1234/api/v1/userverification/updateuser/${_id}`,
        productDetails
      )
      .then((resp) => {
        fetchProducts();
        filterUsers();
        alert("Position has been updataed");
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  return (
    <tbody style={{ color: "black" }}>
      <tr>
        <td>
          <p>{name}</p>
        </td>
        <td>{email}</td>
        <td>{verified ? "True" : "False"}</td>
        <td>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select
              {...register("position", { required: true })}
              style={{
                backgroundColor: (() => {
                  switch (position) {
                    case "client":
                      return "#db504a";
                    case "staff":
                      return "#ffce26";
                    case "owner":
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
              <option value={position}>{position}</option>
              <option value="client">Client</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
            <input type="submit" className="submit-btn" />
          </form>
        </td>
      </tr>
    </tbody>
  );
}
