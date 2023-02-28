import React, { useEffect, useState } from "react";
import "./clientStyle.css";
import TopNavbar from "../../Components/ClientPageComponent/TopNavbar";
import Banner from "../../Components/ClientPageComponent/Banner";
import LowerBanner from "../../Components/ClientPageComponent/LowerBanner";
import Products from "../../Components/ClientPageComponent/products";
import NewsLetter from "../../Components/ClientPageComponent/NewsLetter";
import Promo from "../../Components/ClientPageComponent/Promo";
import PromoFile from "../../Components/ClientPageComponent/PromoFile";
import Review from "../../Components/ClientPageComponent/Review";
import Footer from "../../Components/ClientPageComponent/Footer";
import Loader from "../../Components/Loader";
function Sample({ products }) {
  const [newArrival, setNewArrival] = useState(null);
  const [promo, setPromo] = useState([]);
  const [romance, setRomance] = useState([]);
  const [scifi, setScifi] = useState([]);
  const [motivation, setMotivation] = useState([]);

  const filterProduct = () => {
    // FETCH  FILTERED PRODUCTS
    fetch("http://localhost:1234/api/v1/products/filterproduct")
      .then((res) => res.json())
      .then((data) => {
        const newArrivalImages = data.newArrival.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });
        const promoImages = data.promo.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });
        const romanceImages = data.romance.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });
        const scifiImages = data.scifi.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });
        const motivationImages = data.motivation.map((product) => {
          const encodedImage = product.productimage;
          const blob = b64toBlob(encodedImage);
          const imageUrl = URL.createObjectURL(blob);
          return {
            ...product,
            productimage: imageUrl,
          };
        });

        // Sort products by timestamp in reverse order
        const filterPromo = promoImages.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        const filterNewArrival = newArrivalImages.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        const filterRomance = romanceImages.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        const filterScifi = scifiImages.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        const filterMotivation = motivationImages.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setNewArrival(filterNewArrival);
        setRomance(filterRomance);
        setScifi(filterScifi);
        setMotivation(filterMotivation);
        setPromo(filterPromo);
      });
  };
  console.log(promo);
  useEffect(() => {
    filterProduct();
  }, []);

  // function to convert base64 string to blob object
  const b64toBlob = (base64String) => {
    const byteString = atob(base64String.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" });
    // assuming the image is PNG format
  };
  return (
    <div>
      {newArrival ? (
        <div>
          <TopNavbar />
          {/* 3 */}
          {/* 4 */}
          <Banner />

          {/* 5 */}
          {/* <LowerBanner /> */}
          {/* 6 */}
          <Products
            products={products}
            newArrival={newArrival}
            romance={romance}
            scifi={scifi}
            motivation={motivation}
          />
          {/* 7 */}
          <NewsLetter />
          {/* 8 */}
          {/* 8 */}
          <Promo promo={promo} />
          {/* 9 */}
          {/* <PromoFile promo={promo} /> */}
          <Review />
          {/* 10 */}
          <Footer />
          {/* 11 */}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Sample;
