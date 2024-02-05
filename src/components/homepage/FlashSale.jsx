import React,{useState,useEffect} from 'react'

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const initialDate = new Date(2024,2,5)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const calculateTimeLeft =()=> {
    const today = new Date();
    const deadline = new Date(initialDate);
    deadline.setDate(deadline.getDate() + 3);
    const difference = deadline.getTime() - today.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

    const flashProducts = [
            {
              imageSrc: "https://static-01.daraz.com.np/p/ad8797c3d881004ae28c96b8d7547f74.jpg",
              productName: "Go 20 Ultralight Less Earbuds with EN....",
              actualPrice: 50,
              discountPrice: 40,
              discountPercentage:20,

            },
            {
              imageSrc: "https://static-01.daraz.com.np/p/b1f617302ad1c4570640e4ea2b65407b.png",
              productName: "Khatra product for versatile users...",
              actualPrice: 60,
              discountPrice: 45,
              discountPercentage:20,

            },
            {
              imageSrc: "https://static-01.daraz.com.np/p/f3d6e1e48c5a0dcbec7369d256216bd0.jpg",
              productName: "Hero Product for the SD tech tems",
              actualPrice: 70,
              discountPrice: 55,
              discountPercentage:20,

            },
            {
              imageSrc: "https://static-01.daraz.com.np/p/061873c77c4706415eaab6adc9c51284.jpg",
              productName: "I am a disco dancer ....",
              actualPrice: 80,
              discountPrice: 65,
              discountPercentage:20,

            },
            {
              imageSrc: "https://static-01.daraz.com.np/p/bb21c16d8405d4bf985314ba406b44b4.jpg",
              productName: "I will do every thing for you...",
              actualPrice: 90,
              discountPrice: 75,
              discountPercentage:20,

            },
            {
                imageSrc: "https://static-01.daraz.com.np/p/393d15e5c956557473577f43b93faaab.jpg",
                productName: "Sd tech hires Anil Wagle as React Developer.....",
                actualPrice: 90,
                discountPrice: 75,
                discountPercentage:20,
              }
    ]
  return (
    <div className="flash_sale_container">
            <h3>Flash Sale</h3>
        <div className="flash_size_manager">
            <div className="flash_header">
                <div className="head title">
                    <h4>On Sale Now</h4>
                    
                    <div className="timer">
                        <p>Ending IN <span>0{timeLeft.hours}</span> :<span>{timeLeft.minutes}</span> :<span>{timeLeft.seconds}</span></p>
                    </div>
                </div>
                    
                <div className="head shop_more">
                    <button>Shop More</button>
                </div>
            </div>
            <div className="flash_product_listing">
                <div className="product_size_manager">
                    {flashProducts.map((elem,index)=>{
                        return(
                            <div className="products" key={index}>
                                <img src={elem.imageSrc} alt={index} />
                                <p className='product_name'>{elem.productName}</p>
                                <h4 className='price_tag'>Rs.{elem.discountPrice}</h4>
                                <p><span className='underline_span'>Rs.{elem.actualPrice}</span> <span className='discount'>-{elem.discountPercentage}%</span></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlashSale