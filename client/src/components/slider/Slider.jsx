import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";
import SlideCard from './slidecard/SlideCard';

function Slider() {

  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div>
    <Sliderr {...settings}>
      <div>
         <SlideCard/>
      </div>
      <div>
         <SlideCard/>
      </div>
      <div>
        <SlideCard/>
      </div>
      <div>
         <SlideCard/>
      </div>
      <div>
        <SlideCard/>
      </div>
      <div>
        <SlideCard/>
      </div>
    </Sliderr>
  </div>
  )
}

export default Slider