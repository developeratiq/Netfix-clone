import React from 'react'
import '../Styling/Style.css'

function Header() {
  return (
    <div>
      <header class="header">

<div class="header-1">

    <a href="#" class="logo"> <i class="fas fa-book"></i> bookly </a>

    <form action="" class="search-form">
        <input type="search" name="" placeholder="search here..." id="search-box"/>
        <label for="search-box" class="fas fa-search"></label>
    </form>

    <div class="icons">
        <div id="search-btn" class="fas fa-search"></div>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-shopping-cart"></a>
        <div id="login-btn" class="fas fa-user"></div>
    </div>

</div>

<div class="header-2">
    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#featured">featured</a>
        <a href="#arrivals">arrivals</a>
        <a href="#reviews">reviews</a>
        <a href="#blogs">blogs</a>
    </nav>
</div>

</header>



    </div>
  )
}

export default Header