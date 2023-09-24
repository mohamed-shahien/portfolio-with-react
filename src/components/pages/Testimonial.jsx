import React from 'react'
import { testimonials } from '../data/dummydata'
import { FormatQuote } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
        <div className="testimonial hero">
            <div className="container">
            <Slider {...settings}>
                {testimonials.map((val,i)=>(
                    <div className="box" data-aos="fade-up"
                    data-aos-duration="3000">
                        <i>
                            <FormatQuote/>
                        </i>
                        <p>{val.text}</p>
                        <div data-aos="zoom-out-right" className="img">
                            <img src={val.image} alt="" />
                        </div>
                        <h3>{val.name}</h3>
                        <label>{val.post}</label>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default Testimonial
