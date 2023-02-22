import React from "react";
// import { Table } from "@mantine/core";
const img =
  "https://res.cloudinary.com/isreal/image/upload/v1675285922/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb.png";

// ICONS
import { FaShoppingCart, FaPeopleCarry, FaChartLine } from "react-icons/fa";
function DashboardMain() {
  return (
    <div id="content">
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span className="text">Download PDF</span>
          </a>
        </div>

        <ul className="box-info">
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

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Recent Orders</h3>
              <i className="bx bx-search"></i>
              <i className="bx bx-filter"></i>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status process">Process</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr className="table-d">
                  <td>
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardMain;
