import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="pt-3 pb-5">
            <div>
                <div className='text-center text-muted'>
                    <h2 className='fw-bold fs-1'>Our Services</h2>
                    <hr className='text-center mx-auto' style={{ width: '40px', height: '6px', color: 'orange' }} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sit.
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row pb-3">
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;