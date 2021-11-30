import React from 'react';
import './HeaderMain.css'
import headerMain from '../../../img/computer-specialist.jpg'
const HeaderMain = () => {
    return (
        <main className="py-5 bg-headerMain">
            <div className="container mt-5">
                <div className="row py-5">
                    <div className="col-md-6 text-white mx-auto text-center">
                        <h1 className='display-6 fw-bold py-3'>24/7 Repair Service Provider</h1>
                        <p className='text-light py-2'>
                            Our Experts Diagnosis and Provide Solutions Within 24 hours !

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, praesentium.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, incidunt! Praesentium odio illo eum ratione earum quod? Nulla, impedit libero?
                        </p>
                        <button className="btn btn-warning">Get started now</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;