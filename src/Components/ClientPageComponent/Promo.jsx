import React from "react";
import { Fade, Slide } from "react-slideshow-image";
function Promo({ promo }) {
  return (
    <div>
      <section className="deal">
        <div className="content">
          <h3>Deal of the day</h3>
          <h1>Up to 40% discount</h1>
          {/* <p>
            Get interesting motivational books at discount price of 40% off.
            Note that discount prices are only available for signed up users.
            Click to shop now
          </p> */}
          <a href="#" className="btn">
            Shop now
          </a>
        </div>
        <div
          style={{
            border: "2px solid red",
          }}
        >
          <Fade arrows={false} className="fade-con">
            {promo.map((item, index) => (
              <div
                className="image"
                key={index}
                style={{
                  // width: "50px",
                  // height: "100px",

                  position: "absolute",
                }}
              >
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
// <Slide
// // arrows={true}
// // transitionDuration={1000}
// // duration={1000}
// // autoplay={true}
// // infinite={true}
// // canSwipe={true}
// >
//   {promo.map((index) => (
//     <div className="each-fade" key={index._id}>
//       <div className="image-container">
//         <img src={index.productimage} alt="" style={{ width: "50px" }} />
//       </div>
//     </div>
//   ))}
// </Slide>;
