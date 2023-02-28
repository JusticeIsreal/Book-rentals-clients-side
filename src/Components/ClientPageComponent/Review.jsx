import React from "react";

function Review() {
  return (
    <div>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span>Client's reviews</span>{" "}
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="../../../public/images/pic-1.png" alt="" />
              <h3>John deo</h3>
              <p>
                Books from this website are top notch, i commend to be part of
                distributor someday
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="../../../public/images/pic-2.png" alt="" />
              <h3>Clara Jackson</h3>
              <p>
                So interesting, i would like to buy more books especially the
                book (Love), it's a great novel, please keep posting more
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="../../../public/images/pic-3.png" alt="" />
              <h3>Mavin Jerry</h3>
              <p>
                Very great novels and motivational books,please keep up with the
                provision of these books and also the novels
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              {/* <img src="../../../public/CSS/images/pic-4.png" alt="" /> */}
              <h3>Tracy Ben</h3>
              <p>
                So inspiring and nice novels i would like to read more, get more
                motivated and also, be a premium user in this site
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="../../../public/images/pic-5.png" alt="" />
              <h3>Peter Martins</h3>
              <p>
                Nice and interesting novels, please can you post some novels
                with series
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="../../../public/images/pic-6.png" alt="" />
              <h3>Natasha Richards</h3>
              <p>
                These are amazing novels, they so much inspire me. I want to buy
                A bundle of a novel in series
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
