import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Our Locations</h3>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> india{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> USA{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> russia{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> france{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> japan{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> africa{" "}
            </a>
          </div>

          <div className="box">
            <h3>Quick Links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> featured{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> arrivals{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> reviews{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> account info{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> ordered items{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> privacy policy{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> payment method{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> our serivces{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +234-901-657-3922
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +234-806-390-3997{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i>abmaxi1234@gmail.com
            </a>
            <img
              src="../../../public/images/worldmap.png"
              className="map"
              alt=""
            />
          </div>
        </div>

        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>

        <div className="credit">
          {" "}
          created by <span>Ultimate Coding Legendz</span> | copyright &copy;2023
          | all rights reserved!{" "}
        </div>
      </section>
    </div>
  );
}

export default Footer;
