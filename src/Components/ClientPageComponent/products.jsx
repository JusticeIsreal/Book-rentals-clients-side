import React from "react";
import { FaEye } from "react-icons/fa";
function products() {
  return (
    <div>
      {" "}
      <section className="featured" id="featured">
        <h1 className="heading">
          <span style={{ background: "transparent", border: "none" }}>
            Recommended books
          </span>{" "}
        </h1>

        <div className="swiper featured-slider">
          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-1.png" alt="" />
            </div>
            <div className="content">
              <h3>The Art City</h3>
              <div className="price">
                $10.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-2.png" alt="" />
            </div>
            <div className="content">
              <h3>Give Thanks in Everything</h3>
              <div className="price">
                $13.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-3.png" alt="" />
            </div>
            <div className="content">
              <h3>Your name</h3>
              <div className="price">
                $12.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-4.png" alt="" />
            </div>
            <div className="content">
              <h3>Your title goes here</h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-5.png" alt="" />
            </div>
            <div className="content">
              <h3>Listen Music</h3>
              <div className="price">
                $14.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-6.png" alt="" />
            </div>
            <div className="content">
              <h3>Sample Text</h3>
              <div className="price">
                $13.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-7.png" alt="" />
            </div>
            <div className="content">
              <h3>Beach lives matters</h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-8.png" alt="" />
            </div>
            <div className="content">
              <h3>Black history month</h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-9.png" alt="" />
            </div>
            <div className="content">
              <h3>Love</h3>
              <div className="price">
                $12.99 <span>$20.99</span>
              </div>
            </div>
          </div>

          <div className="swiper-slide box">
            <div className="image">
              <img src="../../../public/images/book-10.png" alt="" />
            </div>
            <div className="content">
              <h3>Retro</h3>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default products;

// <section className="featured" id="featured">
//   <h1 className="heading">
//     <span>Recommended books</span>{" "}
//   </h1>

//   <div className="swiper featured-slider">
//     <div className="swiper-slide box">
//       {/* <div className="icons">
//           <FaEye className="fas fa-eye" />
//         </div> */}
//       <div className="image">
//         <img src="../../../public/images/book-1.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>The Art City</h3>
//         <div className="price">
//           $10.99 <span>$20.99</span>
//         </div>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-2.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Give Thanks in Everything</h3>
//         <div className="price">
//           $13.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-3.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Your name</h3>
//         <div className="price">
//           $12.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-4.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Your title goes here</h3>
//         <div className="price">
//           $15.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-5.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Listen Music</h3>
//         <div className="price">
//           $14.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-6.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Sample Text</h3>
//         <div className="price">
//           $13.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-7.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Beach lives matters</h3>
//         <div className="price">
//           $15.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-8.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Black history month</h3>
//         <div className="price">
//           $15.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-9.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Love</h3>
//         <div className="price">
//           $12.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           Add to cart
//         </a>
//       </div>
//     </div>

//     <div className="swiper-slide box">
//       <div className="icons">
//         <FaEye className="fas fa-eye" />
//       </div>
//       <div className="image">
//         <img src="../../../public/images/book-10.png" alt="" />
//       </div>
//       <div className="content">
//         <h3>Retro</h3>
//         <div className="price">
//           $15.99 <span>$20.99</span>
//         </div>
//         <a href="#" className="btn">
//           add to cart
//         </a>
//       </div>
//     </div>
//   </div>
// </section>;
