import StoreItems from "../Components/StoreItems";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function EditProduct({ products }) {
  // FETCH SINGLE ITEM
  const { _id } = useParams();
  const [item, setItem] = useState([]);

  const singleProduct = () => {
    axios
      .get(`http://localhost:1234/api/v1/products/findoneproduct/${_id}`)
      .then((resp) => {
        setItem(resp.data.Singleproduct);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    singleProduct();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // IMAGE PREVIEW
  const [previewImg, setPreviewImg] = useState(null);
  // uploadImage
  const [imageBase64, setImageBase64] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    setPreviewImg(file);
    const base64 = await convertBase64(file);
    setImageBase64(base64);

    // make image review
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPreviewImg(readerEvent.target.result);
    };
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = () => reject(Error);
    });
  };

  // POST PRODUCT

  const onSubmit = (data) => {
    const productDetails = { ...data, productimage: imageBase64 };

    axios
      .patch(
        `http://localhost:1234/api/v1/products/updateproduct/${_id}`,
        productDetails
      )
      .then((resp) => {
        singleProduct();
        setFormShow(false);
      })
      .catch((error) => console.log(error));
  };

  // display form on and of
  const [formShow, setFormShow] = useState(false);

  return (
    <div>
      <div className="store-main-con">
        <div id="content">
          <main>
            <div className="head-title">
              <div className="left">
                <h1>Update Product</h1>

                <ul className="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Store
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      product
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="btn-download"
                onClick={() => setFormShow(!formShow)}
              >
                <a href="#updateform" style={{ color: "white" }}>
                  {" "}
                  <b className="bx bxs-cloud-download"> + </b>
                  <span className="text">Update Product</span>
                </a>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ width: "300px", margin: "10px" }}>
                <img
                  src={item.productimage}
                  alt=""
                  style={{ objectFit: "contain", width: "300px" }}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  margin: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Product Name :
                  </span>{" "}
                  {item.productname}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Price :
                  </span>{" "}
                  {item.productprice}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Old Price :
                  </span>{" "}
                  {item.productoldprice}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Number :
                  </span>{" "}
                  {item.productnumber}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Category :
                  </span>{" "}
                  {item.productcategory}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Class :
                  </span>{" "}
                  {item.productclass}
                </p>
                <p>
                  <span style={{ fontWeight: "bolder", color: "#3d91e6" }}>
                    Description :
                  </span>{" "}
                  {item.productdescription}
                </p>
              </div>
            </div>
            {formShow && (
              <div className="store-form-container" id="updateform">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* PRODUCT PRICE */}
                  <label>Product Name</label>

                  <input
                    type="text"
                    defaultValue={item.productname}
                    placeholder="Enter Product Name"
                    {...register("productname", { required: true })}
                  />
                  {errors.productname && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Name
                    </span>
                  )}
                  {/* PRODUCT PRICE */}
                  <label>Product Price</label>
                  <input
                    type="Number"
                    defaultValue={item.productprice}
                    placeholder="Enter Product Price"
                    {...register("productprice", { required: true })}
                  />
                  {errors.productprice && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Price
                    </span>
                  )}
                  {/* PRODUCT OLD PRICE */}
                  <label>Product Old Price</label>
                  <input
                    type="Number"
                    defaultValue={item.productoldprice}
                    placeholder="Enter Product Old Price"
                    {...register("productoldprice", { required: true })}
                  />
                  {errors.productoldprice && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Old Price
                    </span>
                  )}
                  {/* PRODUCT NUMBER */}
                  <label>Product Number</label>
                  <input
                    type="Number"
                    defaultValue={item.productnumber}
                    placeholder="Enter Product Number"
                    {...register("productnumber", { required: true })}
                  />
                  {errors.productnumber && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Number
                    </span>
                  )}
                  {/* PRODUCT CATEGORY */}
                  <label>Product Category</label>
                  <select {...register("productcategory", { required: true })}>
                    <option value={item.productcategory}>
                      {item.productcategory}
                    </option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-fi</option>
                    <option value="motivation">Motivation</option>
                  </select>
                  {errors.productcategory && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Category
                    </span>
                  )}
                  {/* PRODUCT CLASS */}
                  <label>Product Class</label>
                  <select {...register("productclass", { required: true })}>
                    <option value={item.productclass}>
                      {item.productclass}
                    </option>
                    <option value="promo">Promo</option>
                    <option value="newarrival">New</option>
                    <option value="bestseller">Best-Seller</option>
                  </select>
                  {errors.productclass && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Class
                    </span>
                  )}
                  {/* PRODUCT DISCRIPTION */}
                  <label>Product Description</label>
                  <input
                    type="text"
                    defaultValue={item.productdescription}
                    placeholder="Enter Product Description"
                    {...register("productdescription", { required: true })}
                  />
                  {errors.productdescription && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Description
                    </span>
                  )}
                  {/* PRODUCT IMAGE*/}
                  <label>Product Image</label>
                  <div style={{ display: "flex" }}>
                    <input
                      className="file-input"
                      type="file"
                      placeholder="Enter Product Number"
                      {...register("productimage", { required: true })}
                      onChange={(e) => uploadImage(e)}
                    />
                    <img
                      src={previewImg}
                      alt="img"
                      style={{ width: "40px", marginBottom: "10px" }}
                    />
                  </div>

                  {errors.productimage && (
                    <span
                      className="errror-msg"
                      style={{
                        fontSize: "12px",
                        fontStyle: "italic",
                        color: "red",
                      }}
                    >
                      Kindly Enter Product Image
                    </span>
                  )}
                  <input type="submit" className="submit-btn" />
                </form>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
