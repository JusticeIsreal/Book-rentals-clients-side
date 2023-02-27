import React from "react";

function Promo() {
  return (
    <div>
      <section className="deal">
        <div className="content">
          <h3>Deal of the day</h3>
          <h1>Up to 40% discount</h1>
          <p>
            Get interesting motivational books at discount price of 40% off.
            Note that discount prices are only available for signed up users.
            Click to shop now
          </p>
          <a href="#" className="btn">
            Shop now
          </a>
        </div>

        <div className="image">
          <img src="../../../public/images/deal-img.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Promo;
