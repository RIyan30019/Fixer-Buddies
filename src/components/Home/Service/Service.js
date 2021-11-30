import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const {serviceTitle, price, imageURL, _id} = service;
    
    let history = useHistory()

    const handleOrder = (_id)=> {
        history.push(`/makeOrder/${_id}`)
    }

    return (
        <div className="col-md-3 mb-2">
            <div className="card" onClick={()=>handleOrder(`${_id}`)}>
                <img src={imageURL} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h3 className="card-text">{serviceTitle}</h3>
                    <p className="card-text text-warning fw-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;