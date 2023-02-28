import React from "react";
import { Fade, Slide } from "react-slideshow-image";
function PromoFile({ promo }) {
  return (
    <div
      style={{
        width: "50px",
        height: "100px",
        border: "2px solid red",
        display: "flex",
      }}
    >
      {" "}
      <Fade arrows={false} className="fade-con">
        {promo.map((item, index) => (
          <div
            className="image"
            key={index}
            style={{
              width: "50px",
              border: "2px solid red",
              display: "flex",
              position: "absolute",
            }}
          >
            <img
              src={item.productimage}
              alt=""
              key={index._id}
              style={{ width: "50px" }}
            />
          </div>
        ))}
      </Fade>
      PromoFile
    </div>
  );
}

export default PromoFile;
