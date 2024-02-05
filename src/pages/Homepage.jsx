import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchCara from '../assets/watchEg1.jpg'

const Homepage = () => {


    let settings ={
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <div className="main_homepage_container">
        <div className="home_size_manager">
            {/* Categories and Carasoul */}
            <div className="cat_car">
                <div className="categories"></div>
                <div className="carasoul_container">
                    <Slider {...settings}>
                        <div>
                            <img src={WatchCara} alt="watchCara" />
                        </div>
                        <div>
                            <img src={WatchCara} alt="watchCara" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage