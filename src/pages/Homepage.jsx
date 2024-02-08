import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchCara from '../assets/watchEg1.jpg'
import FlashSale from '../components/homepage/FlashSale';

const Homepage = () => {


    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }
  return (
    <div className="main_homepage_container">
        <div className="home_size_manager">
            {/* Categories and Carasoul */}
            <div className="cat_car">
                <div className="categories">
                    {/* <h3>Categories</h3> */}
                </div>
                <div className="carasoul_container">
                    <Slider {...settings}>
                        <div className='img'>
                            <img src={WatchCara} alt="watchCara" />
                        </div>
                        <div className='img'>
                            <img src={WatchCara} alt="watchCara" />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* Ongoing Sales Banners */}
            <div className="ongoing_sales_banner">
                <div className="sales_size_manager">
                </div>
            </div>


            {/* Flash Sale */}
            <FlashSale/>
        </div>
    </div>
  )
}

export default Homepage