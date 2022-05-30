import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolioo from "../../img/portfolioo1.png";
import Calculator from "../../img/calculator1.png";
import Crud from "../../img/crud1.png";
import Database from "../../img/database1.png";

function Portfolio() {
  return (
    
    <div className="portfolio" id='Portfolio'>

{/*heading */}
<div className="mpya">
<span>Recent Projects</span>
<span>Portfolio</span>
</div>

{/* slide */}

<Swiper
spaceBetween={-950}
slidePerView={3}
grabCursor={true}
className='portfolio-slider' >



<SwiperSlide>
<img src={Portfolioo} alt="" />
</SwiperSlide>

<SwiperSlide>
<img src={Calculator} alt="" />
</SwiperSlide>

<SwiperSlide>
<img src={Crud} alt="" />
</SwiperSlide>

<SwiperSlide>
<img src={Database} alt="" />
</SwiperSlide>


</Swiper>


 </div>
  )
}

export default Portfolio