import React, { useEffect, useState } from 'react';

const ServiceList = () => {
    const [status, setStatus] = useState('')
    const [orders, setOrders] = useState([])
    console.log(status)
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/getOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/update', {
            method: 'PATCH',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(status) 
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [status])

    return (
        <div className='p-5'>
            <table className="table table-hover">
                <thead>
                    <tr className="bg-dark text-light">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
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
                                <td>{order.price}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {order.status}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li onClick={()=> setStatus({status : 'pending', id: order._id })}>Pending</li>
                                            <li onClick={()=> setStatus({status : 'Done', id: order._id })}>Done</li>
                                            <li onClick={()=> setStatus({status : 'On going', id: order._id })}>On going</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceList;