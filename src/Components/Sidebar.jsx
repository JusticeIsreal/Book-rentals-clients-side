import React from "react";

// react icons
import { GiBookCover } from "react-icons/gi";
import { MdDashboard, MdGroup, MdSettings } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { FaStore, FaMoneyCheckAlt } from "react-icons/fa";
function Sidebar() {
  return (
    <div>
      <section id="sidebar" className="sidebar">
        <a className="brand">
          <GiBookCover className="bx" />
          <span className="text">TOP MINDS</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#" className="list-items">
              <MdDashboard className="list-icons" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="list-items">
              <FaStore className="list-icons" />
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#" className="list-items">
              <FaMoneyCheckAlt className="list-icons" />
              <span className="text">Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="list-items">
              <RiMessage2Fill className="list-icons" />
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#" className="list-items">
              <MdGroup className="list-icons" />
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu down">
          <li>
            <a href="#" className="list-items">
              <MdSettings className="list-icons" />
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <BiLogOutCircle className="list-icons" />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
