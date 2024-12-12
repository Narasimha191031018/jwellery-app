import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import images from './image';
import Homecss from './Home.module.css';

const HomeComp = () => {
  return (
    <div>
      <header>
        <div className={Homecss.stylebrand}>
          <img className={Homecss.logo} src={images.logo} alt="Narasimha Jewellery logo" />
          <h1 className={Homecss.brandname}>Narasimha Jewellery</h1>
        </div>
      </header>
      <nav>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
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
          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className={`d-block w-100 ${Homecss.corousalImg1}`}
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
                className={`d-block w-100 ${Homecss.corousalImg2}`}
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
                className={`d-block w-100 ${Homecss.corousalImg3}`}
                src={images.corousalImg3}
                alt="Silver Jewellery"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
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
        <br />
        {/* Additional Content */}
        <div>
          <div className={Homecss.flex}>
            <img className={Homecss.rimage} src={images.rimage1} alt="Special Offers" />
            <img className={Homecss.rimage} src={images.rimage2} alt="New Arrivals" />
            <img className={Homecss.rimage} src={images.rimage3} alt="Coins & Bars" />
            <img className={Homecss.rimage} src={images.rimage4} alt="Pendants" />
            <img className={Homecss.rimage} src={images.rimage5} alt="Silver Coins" />
            <img className={Homecss.rimage} src={images.rimage6} alt="Rings" />
          </div>
        </div>
      </nav>
      <div className='text1'>
        <h1>Gold Jewellery</h1>
        <h4>Embrace the golden glow this festive season</h4>
      </div>

    <div className="container my-4">
      <div className="row">
        {/* First Row */}
        <div className="col-md-6 mb-4">
          <img className={`img-fluid ${Homecss.goldimg1}`} src={images.goldimg1} alt="Necklace" />
        </div>
        <div className="col-md-6 mb-4">
          <img className={`img-fluid ${Homecss.goldimg2}`} src={images.goldimg2} alt="Bangles" />
        </div>
      </div>
      <div className="row">
        {/* Second Row */}
        <div className="col-md-6 mb-4">
          <img className={`img-fluid ${Homecss.goldimg3}`} src={images.goldimg3} alt="Rings" />
        </div>
        <div className="col-md-6 mb-4">
          <img className={`img-fluid ${Homecss.goldimg4}`} src={images.goldimg4} alt="Earrings" />
        </div>
      </div>
    </div>

    <div>
      <h1>Diamond Jewellery</h1>
      <h4>Sparkle through the events with timeless diamonds</h4>
    </div>
    <div className="container my-4">
      <div className="row">
        {/* Left Image */}
        <div className="col-md-4">
          <img className={`img-fluid ${Homecss.bimg1}`} src={images.bimg1} alt="Left Image" style={{ height: '612px', objectFit: 'cover' }}/>
        </div>
        {/* Right Section */}
        <div className="col-md-8">
          {/* Top Image on Right */}
          <div className="row mb-3">
            <div className="col-md-12">
              <img className={`img-fluid ${Homecss.bimg2}`} src={images.bimg2} alt="Top Right Image" />
            </div>
          </div>
          {/* Bottom Images on Right */}
          <div className="row">
            <div className="col-md-6">
              <img className={`img-fluid ${Homecss.bimg3}`} src={images.bimg3} alt="Bottom Left Image" />
            </div>
            <div className="col-md-6">
              <img className={`img-fluid ${Homecss.bimg4}`} src={images.bimg4} alt="Bottom Right Image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default HomeComp;
