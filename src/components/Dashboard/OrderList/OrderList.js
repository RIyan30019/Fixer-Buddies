import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    
    useEffect(()=> {
        fetch(`https://fathomless-river-35723.herokuapp.com/userOrder/?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <div className='p-5'>
            <table className="table table-hover">
                <thead>
                    <tr className="bg-dark text-light">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            return <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceTitle}</td>
                                <td>{order.status}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;