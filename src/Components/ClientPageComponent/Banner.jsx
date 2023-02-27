import React from "react";
function Banner() {
  return (
    <div>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>Up to 75% off</h3>
            <p>
              Get to read over many books of different types offline. Rentals
              also provides you with most of the best books with affordable
              rates{" "}
            </p>
            <a href="#" className="btn">
              Shop now
            </a>
          </div>
          <div className="swiper books-slider">
            <div className="swiper-wrapper">
              <a href="#" className="swiper-slide">
                <img src="../../../public/images/book-1.png" alt="" />
              </a>
              <a href="#" className="swiper-slide">
                <img src="../../../public/images/book-2.png" alt="" />
              </a>
             
            </div>
            <img
              src="../../../public/images/stand.png"
              className="stand"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
