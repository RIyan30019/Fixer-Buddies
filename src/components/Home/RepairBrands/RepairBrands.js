import React from 'react';
import hp from '../../../img/hp.png'
import dell from '../../../img/dell.png'
import sony from '../../../img/sony.png'
import apple from '../../../img/apple.png'

const RepairBrands = () => {
    const brandsData = [
        {
            icon: hp
        },
        {
            icon: dell
        },
        {
            icon: sony
        },
        {
            icon: apple
        }
    ]
    return (
        <section className="repairBrands py-5">
            <div className="container py-5">
                <div className="row ps-3">
                    <div className="col-md-4 mb-4">
                        <h3 className='fw-bold fs-1 pb-3 text-dark '>Repair Brands</h3>
                        <p className="text-muted">
                            We work with various kinds of brands and we provide the money back services.
                        </p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        {
                            brandsData.map(data => {
                                return <div key={data.icon} className='d-flex ps-3 border border-warning me-3 p-3 mx-auto'>
                                    <img className="w-50 mx-auto" src={data.icon} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairBrands;