import React from "react";

function Loader() {
  return (
    <div
      className="loader-containe"
      style={{
        margin: "0 auto",
        // position: "relative",
        display: "flex",
        background: "transparent",
        width: "100%",
        marginTop: "100px",
      }}
    >
      <img
        src="../../../public/images/loader-img.gif"
        alt=""
        style={{
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default Loader;
