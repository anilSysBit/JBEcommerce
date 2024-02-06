import React,{useState} from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Rating from "@mui/material/Rating";
import ImageGallery from "react-image-gallery";

import { useCart} from "../Context/CartContext";

const EachProduct = () => {

    const {updateCartItems,cartItems} = useCart();

    const [quantity,setQuantity] = useState(1);

  const productDetail = {
    name: 'Ryte Blaze Smartwatch | 1.8" HD Display | HD Voice Calling/Receive | 6 months Warranty | Bright Torch | Multi Sports Mode | Health Monitoring |',
    rating: 4.5,
    totalRatings: 84,
    answeredQuestions: 42,
    brand: "Ryte | More Wearable Technology from Ryte",
    currentPrice: 1999,
    websitePrice: 4990,
    discountPercentage: 60,
    inventory:5,
    imgSrc: [
      {
        original:
          "https://static-01.daraz.com.np/p/fdd960c0f600e009953fdad32865cb18.jpg_750x750.jpg_.webp",
        thumbnail:
          "https://static-01.daraz.com.np/p/fdd960c0f600e009953fdad32865cb18.jpg_750x750.jpg_.webp",
      },
      {
        original:
          "https://static-01.daraz.com.np/p/0d2044f2d0421afbb3f04de5ef69b5a3.jpg_750x750.jpg_.webp",
        thumbnail:
          "https://static-01.daraz.com.np/p/fdd960c0f600e009953fdad32865cb18.jpg_750x750.jpg_.webp",
      },
      {
        original:
          "https://static-01.daraz.com.np/p/cb3773f8b631d86435d0c9c87da12dd6.jpg_750x750.jpg_.webp",
        thumbnail:
          "https://static-01.daraz.com.np/p/fdd960c0f600e009953fdad32865cb18.jpg_750x750.jpg_.webp",
      },
    ],
  };

  const settings = {
    showNav: false,
    showPlayButton: false,
    showFullscreenButton: false,
    slideOnThumbnailOver: true,
  };

  const breadCrumbs = [
    <Link underline="hover" key="1" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" href="/">
      Products
    </Link>,
    <Link underline="hover" key="3" href="/">
      Products1
    </Link>,
    <Typography key="3" color="text.primary">
      BreadCrumb
    </Typography>,
  ];
  return (
    <div className="each_product_container">
      <div className="product_size_manager">
        <div className="breadcrum_navigation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadCrumbs}
          </Breadcrumbs>
        </div>
        <div className="product_detail_body">
          {/* Top Detail */}
          <div className="detail_body">
            <div className="detail_size_manager">
              <div className="img_container">
                <ImageGallery items={productDetail.imgSrc} {...settings} />
              </div>
              <div className="detail_container">
                <h4>{productDetail.name}</h4>
                <div className="pd_rating">
                <p><Rating name="read-only" value={productDetail.rating} precision={0.5} readOnly size="small" /> ratings| {productDetail.answeredQuestions} Answered Questions</p>

                </div>
                <p className="brand_info">
                    Brand : {productDetail.brand}
                </p>
                <hr/>

                <h2>Rs.{productDetail.currentPrice}</h2>
                <p className="discount_price">
                    <span>Rs.{productDetail.websitePrice}</span>  
                     -{productDetail.discountPercentage}%
                </p>

                <div className="promotions">
                    <p>Promotions : <span>Min Spend 244 on 599 total sales</span></p>
                </div>


                <div className="quantity">
                    Quantity: 
                    <button onClick={()=>quantity >1 ?setQuantity(quantity-1):quantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
                    Only {productDetail.inventory} items left
                </div>

                <div className="buy_and_cart_button">
                    <button className="buy_now">Buy Now</button>
                    <button className="add_to_cart" onClick={()=>updateCartItems(cartItems+1)}>Add to Cart</button>
                </div>
              </div>
              <div className="others_details"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
