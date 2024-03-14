import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

const imageStyle = {
  padding: '0 150px',
  width: '100%', // Set image width to 100%
  height: '560px', // Set image height to 100%
  objectFit: 'cover', // Maintain aspect ratio and cover entire space
};

function HeroSection() {
  const sliderStyle = {
    width: '95%', // Set the width to 100%
    height: '500px', // Set a fixed height (you can change this value)
    paddingLeft:'30px',
    marginLeft:'20px'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} style={sliderStyle}>
      <div style={{ padding: '10vw', height:'50px',marginTop:"20px"}}>
        <img 
          src="https://images.pexels.com/photos/197907/pexels-photo-197907.jpeg"
          alt=""
          style={imageStyle}
        />
      </div>
      <div style={{ padding: '10vw' }}>
        <img
          src="https://images.pexels.com/photos/3373945/pexels-photo-3373945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={imageStyle}
        />
      </div>
      <div style={{ padding: '10vw' }}>
        <img
          src="https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={imageStyle}
        />
      </div>
    </Slider>
  );
}

export default HeroSection;
