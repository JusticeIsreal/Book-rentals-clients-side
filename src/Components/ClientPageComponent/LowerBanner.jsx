import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
function LowerBanner() {
  return (
    <div>
      {" "}
      <section className="icons-container">
        <div className="icons">
          <FaShippingFast className="fas fa-shipping-fast" />
          <div className="content">
            <h3>Free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div className="icons">
          <BiLock className="fas fa-lock" />
          <div className="content">
            <h3>Secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <TbTruckReturn className="fas fa-redo-alt" />
          <div className="content">
            <h3>Easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div className="icons">
          <FiPhoneCall className="fas fa-headset" />
          <div className="content">
            <h3>24/7 support</h3>
            <p>Call us anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LowerBanner;
