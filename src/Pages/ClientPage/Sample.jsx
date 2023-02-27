import React from "react";
import "./clientStyle.css";
import TopNavbar from "../../Components/ClientPageComponent/TopNavbar";
import Banner from "../../Components/ClientPageComponent/Banner";
import LowerBanner from "../../Components/ClientPageComponent/LowerBanner";
import Products from "../../Components/ClientPageComponent/products";
import NewsLetter from "../../Components/ClientPageComponent/NewsLetter";
import NewArrivals from "../../Components/ClientPageComponent/NewArrivals";
import Promo from "../../Components/ClientPageComponent/Promo";
import Review from "../../Components/ClientPageComponent/Review";
import Footer from "../../Components/ClientPageComponent/Footer";
function Sample() {
  return (
    <div>
      <div>
        <TopNavbar />
        {/* 3 */}
        {/* <div className="login-form-container">
          <div id="close-login-btn" className="fas fa-times"></div>

          <form action="">
            <h3>Sign in</h3>
            <span>Email</span>
            <input
              type="email"
              name=""
              className="box"
              placeholder="Enter your email"
              id=""
            />
            <span>Password</span>
            <input
              type="password"
              name=""
              className="box"
              placeholder="Enter your password"
              id=""
            />
            <div className="checkbox">
              <input type="checkbox" name="" id="remember-me" />
              <label> Remember me</label>
            </div>
            <input type="submit" value="sign in" className="btn" />
            <p>
              Forgot password ? <a href="#">click here to reset</a>
            </p>
            <p>
              Don't have an account ? <a href="/SignUp">Create one</a>
            </p>
          </form>
        </div>{" "} */}
        {/* 4 */}
        <Banner />

        {/* 5 */}
        <LowerBanner />
        {/* 6 */}
        <Products />
        {/* 7 */}
        <NewsLetter />
        {/* 8 */}
        <NewArrivals />
        {/* 8 */}
        <Promo />
        {/* 9 */}
        <Review />
        {/* 10 */}
        <Footer />
        {/* 11 */}
      </div>
    </div>
  );
}

export default Sample;
