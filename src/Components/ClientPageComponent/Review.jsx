import React from "react";

function Review() {
  return (
    <div style={{ marginTop: "170px" }}>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span style={{ background: "transparent", border: "none" }}>
            Reviews
          </span>{" "}
        </h1>

        <div className="swiper reviews-slider reviews-main-con">
          <div className="swiper-wrapper reviews-con">
            <div className="review-box">
              <img src="../../../public/images/pic-1.png" alt="" />
              <h3>John deo</h3>
              <p>Books from this website are top notch,</p>
            </div>

            <div className="review-box bb">
              <img src="../../../public/images/pic-2.png" alt="" />
              <h3>Clara Jackson</h3>
              <p>
                So interesting, i would like to buy more books especially the
                book (Love),
              </p>
            </div>
            <div className="review-box">
              <img src="../../../public/images/pic-3.png" alt="" />
              <h3>Mavin Jerry</h3>
              <p>Very great novels and motivational books,</p>
            </div>
            <div className="review-box">
              <img src="../../../public/images/pic-4.png" alt="" />
              <h3>Tracy Ben</h3>
              <p>So inspiring and nice novels i would like to read more,</p>
            </div>
            <div className="review-box">
              <img src="../../../public/images/pic-5.png" alt="" />
              <h3>Peter Martins</h3>
              <p>
                Nice and interesting novels, please can you post some novels
                with series
              </p>
            </div>
            <div className="review-box">
              <img src="../../../public/images/pic-6.png" alt="" />
              <h3>Natasha Richards</h3>
              <p>These are amazing novels, they so much inspire me.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
