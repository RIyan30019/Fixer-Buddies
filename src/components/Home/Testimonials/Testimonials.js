import React, { useEffect, useState } from 'react';
import Sliders from '../Sliders/Sliders';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, []);

    return (
        <section className="testimonials pt-5 pb-2 mb-3">
            <div>
                <div className='text-center text-light'>
                    <h2 className='fw-bold fs-1'>Testimonials</h2>
                    <hr className='text-center mx-auto text-light' style={{ width: '40px', height: '6px' }} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                </div>
            </div>
            {/* <div className="container py-5">
                <div className="row pb-3">
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </div>
            </div> */}
            <Sliders/>
        </section>
    );
};

export default Testimonials;