import React from 'react'
import './Styling/Style.css'
 import { useState , useRef} from 'react'
 import jsonFile from './Json file/Data.json'
 import { Swiper, SwiperSlide } from "swiper/react";

 //import Swiper Styles
 import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Feature() {
   
    const [Books , setBooks] = useState(jsonFile);


  return (
    <>
   
    <div>
        <div className="Features-data">
            <h1>Features Section</h1>
        <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         {
            jsonFile&&jsonFile.map((b)=>{
                return (<>
                
                <SwiperSlide className='banner'>
                    <img className='feature-books' src={b.images} alt="" /> 
                    <h2 className='price'>{b.price} <span className='T_rate'>{b.OriginalPrice}</span></h2>
                    </SwiperSlide>
                
                </>)
            })
         }

        
      </Swiper>
 
 



        </div>
     


    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

</div>
</>


  )
}

export default Feature