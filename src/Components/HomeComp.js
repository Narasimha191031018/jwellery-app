import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import images from"./image";
import Homecss from "./Home.module.css";
const HomeComp = () => {
  return (
    <div>
        <header>
            <div className={Homecss.stylebrand}>
                <img className={Homecss.logo} src={images.logo} alt='logo'></img>
                <h1 className={Homecss.brandname}>Narasimha Jewellery</h1>
            </div>
        </header>
        <nav>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        className={Homecss.corousalImg1}
        src={images.corousalImg1}
        alt="Men Gold Kada"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img
        className={Homecss.corousalImg2}
        src={images.corousalImg2}
        alt="Gold Chain"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img
        className={Homecss.corousalImg3}
        src={images.corousalImg3}
        alt="Silver Jewellery"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div>
    <div className={Homecss.flex}>
      <img className={Homecss.rimage} src={images.rimage1} alt="offersimg"></img>
      <img className={Homecss.rimage} src={images.rimage2} alt="NewArrivals"></img>
      <img className={Homecss.rimage} src={images.rimage3} alt="Coins & bars"></img>
      <img className={Homecss.rimage} src={images.rimage4} alt="pedants"></img>
      <img className={Homecss.rimage} src={images.rimage5} alt="silvercoins"></img>
      <img className={Homecss.rimage} src={images.rimage6} alt="ring"></img>
      
    </div>
      

</div>
 </nav>
    </div>
  )
}
export default HomeComp;
