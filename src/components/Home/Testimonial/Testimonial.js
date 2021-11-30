import React from 'react';
import './Testimonial.css'
const Testimonial = ({ testimonial }) => {
    const { description, name, photo } = testimonial
    return (
        <div className="col-md-3 ms-3 widthCol mb-2">
            <div className="card h-100 border-0 shadow">
                <img src={photo} className="card-img-top w-25 rounded-circle py-3 mx-auto" alt="..." />
                <div className="card-body text-center">
                    <span className="text-warning pe-3 fw-bold">{name}</span>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;