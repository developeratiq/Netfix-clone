import React from 'react'
import './Styling/Style.css'
function Blogs() {
  return (
    <div>
          <section class="blogs" id="blogs">

<h1 class="heading"> <span>our blogs</span> </h1>

<div class="swiper blogs-slider">

    <div class="swiper-wrapper">

        <div class="swiper-slide box">
            <div class="image">
                <img src="image/blog-1.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <div class="image">
                <img src="image/blog-2.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <div class="image">
                <img src="image/blog-3.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <div class="image">
                <img src="image/blog-4.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <div class="image">
                <img src="image/blog-5.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

    </div>

</div>

</section>


    </div>
  )
}

export default Blogs