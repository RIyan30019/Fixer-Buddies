import React, { useEffect, useState } from 'react';
import ManageSingleService from '../ManageSingleService/ManageSingleService';

const ManageServices = () => {
    const [manageService, setManageService] = useState([])
    console.log(manageService)
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageService(data))
    }, [])
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr className="bg-dark text-light">
                        <th scope="col">Service</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageService.map(manage => <ManageSingleService key={manage._id} manage={manage}/> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;