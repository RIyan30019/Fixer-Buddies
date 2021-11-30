import React from 'react';
import './SingleWork.css'
const SingleWork = ({ work }) => {
    const { workName, description, icon } = work;
    return (
        <div className="col-md-3 text-white mb-2">
            <div className="card h-100 bg-dark p-3">
                <span><img src={icon} className='w-50' alt=""/></span>
                <h3 className='py-3'>{workName}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleWork;