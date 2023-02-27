import React from "react";
import { GiBookCover } from "react-icons/gi";
import { MdInsertComment } from "react-icons/md";
import { FaCartArrowDown, FaRegListAlt } from "react-icons/fa";
import { AiTwotoneHome, AiFillTag } from "react-icons/ai";
function TopNavbar() {
  return (
    <div>
      {/* header */}
      <header className="header">
        <div className="header-1">
          <a href="" className="logo">
            <GiBookCover />
            <span className="fas fa-book">Topmind Rentals</span>
          </a>

          <div className="icons">
            <FaCartArrowDown className="fas fa-heart a" />
            <img
              src="../../../public/images/book-2.png"
              alt=""
              className="fas fa-shopping-cart a"
            />
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#featured">Featured</a>
            <a href="#arrivals">Arrivals</a>
            <a href="#reviews">Reviews</a>
          </nav>
        </div>
      </header>
      {/* 2 */}
      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home">
          <AiTwotoneHome />
        </a>
        <a href="#featured" className="fas fa-list">
          <FaRegListAlt />
        </a>
        <a href="#arrivals" className="fas fa-tags">
          <AiFillTag />
        </a>
        <a href="#reviews" className="fas fa-comments">
          <MdInsertComment />
        </a>
      </nav>
    </div>
  );
}

export default TopNavbar;
