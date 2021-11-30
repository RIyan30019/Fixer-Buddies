import React from 'react';

const Team = ({ team }) => {
    const { name, position, imgLink } = team;
    return (
        <div className="col-md-3 mb-3">
            <div className="card border-0 shadow-sm h-100">
                <div>
                    <img src={imgLink} className="card-img-top w-100" alt="..." />
                </div>
                <div className="bg-light text-center p-3">
                    <h4 className='card-text '>{name}</h4>
                    <h6 className='card-text text-secondary'>{position}</h6>
                </div>
            </div>
        </div>
    );
};

export default Team;