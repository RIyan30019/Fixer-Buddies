import React from 'react';
import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Sliders.css'
const Sliders = ({ sl }) => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container py-5">
            <div className="row mx-3 mx-md-0 pb-3">
                <Slider {...settings}>
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Sliders;