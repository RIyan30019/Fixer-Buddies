import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Order = ({ id }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderData, setOrderData] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [order, setOrder] = useState(null)

    const onSubmit = data => {
        setOrder(data)
    }
    

    const handlePayment = id => {
        const newOrder = {...order, id, status: 'Pending'}
        fetch('https://fathomless-river-35723.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
    }

    useEffect(() => {
        fetch(`https://fathomless-river-35723.herokuapp.com/getOrderData/${id}`)
            .then(res => res.json())
            .then(data => setOrderData(...data))
    }, [id])

    
    return (
        <div className='p-3 w-100 h-100'>
            <div className={`${order ? 'd-none':'block'}`}>
                <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" value={loggedInUser.name} name='name' className="form-control" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" value={loggedInUser.email} name="email" className="form-control" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serviceTitle" className="form-label">serviceTitle</label>
                        <input type="text" value={orderData.serviceTitle} name="serviceTitle" className="form-control" ref={register} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" value={orderData.price} name="price" className="form-control" ref={register} />
                    </div>
                    <button type="submit" className={`btn btn-primary`}>Submit</button>
                </form>
            </div>
            <div className={`pt-3 ${order ? 'block':'d-none'}`}>
                <PaymentProcess handlePayment={handlePayment} />
            </div>
        </div>
    );
};

export default Order;