import React from 'react'
import Blogs from './Blogs';
import Deal from './Deal';
import Feature from './Feature';
import Footer from './Footer';
import Header from './Header/Header';
import Icon from './Icon';
import Login from './Login';
import NavBottom  from './NavBottom';
import NewArrivals from './NewArrivals';
import NewLetter from './NewLetter';
import Reviews from './Reviews';


  


function Home() {
  return (
    <>
    <Header></Header>
    <NavBottom></NavBottom>
    <Login></Login>



    <section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" className="btn">shop now</a>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" className="swiper-slide"><img src="image/book-1.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-2.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-3.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-4.png" alt=""/></a>
                <a href="#" className="swiper-slide"><img src="image/book-5.png" alt=""/></a>
            </div>
            <img src="image/stand.png" className="stand" alt=""/>
        </div>

    </div>

</section>
  
     <Icon></Icon>
     <Feature></Feature>
     {/* <NewLetter></NewLetter> */}
     <NewArrivals></NewArrivals>
     <Deal></Deal>
     <Reviews></Reviews>
     <Blogs></Blogs>
     <Footer></Footer>
{/* 
     <div class="loader-container">
    <img src="image/loader-img.gif" alt=""/>
</div> */}


  
    </>
  )
}

export default Home