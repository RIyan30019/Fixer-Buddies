import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newAdmin = {
            email: data.email
        }

        fetch('https://fathomless-river-35723.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
        .then(res => {
            if(res) {
                alert('Admin Created successfully');
            }
        })
    };

    return (
        <div className='p-3 w-100 h-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" placeholder="johndue5@email.com" name="email" className="form-control" ref={register} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;