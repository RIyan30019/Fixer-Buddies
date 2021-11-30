import React from 'react';

const SingleNews = ({ news }) => {
    const { title, description, image } = news;
    return (
        <div className="col-md-4 mb-2">
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h3 className="card-text">{title}</h3>
                    <p className="card-text text-mute">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;