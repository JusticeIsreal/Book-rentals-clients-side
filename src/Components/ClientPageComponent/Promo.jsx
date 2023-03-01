import React from "react";
import { Fade, Slide } from "react-slideshow-image";
function Promo({ promo }) {
  return (
    <div>
      <section className="deal">
        <div className="content">
          <h3>Deal of the day</h3>
          <h1>Up to 40% discount</h1>
          <a href="#" className="btn">
            Shop now
          </a>
        </div>
        <div className="fade-con">
          <Fade arrows={false} className="fade-con">
            {promo.map((item, index) => (
              <div className="image" key={index}>
                <img src={item.productimage} alt="" key={index._id} />
              </div>
            ))}
          </Fade>
        </div>
      </section>
      <div className="slide-container">{/* fade import */}</div>
    </div>
  );
}

export default Promo;
