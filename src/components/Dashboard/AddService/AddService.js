import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const serviceData = {
            serviceTitle: data.serviceTitle,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        }

        fetch('https://fathomless-river-35723.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
    };

    const imageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1700808f047b1d6d5c6058f995df69ed');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='p-3 w-100 h-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div className="mb-3">
                    <label for="serviceTitle" className="form-label">Service Title</label>
                    <input type="text" name='serviceTitle' className="form-control" ref={register} />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" ref={register} />
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="text" name="price" className="form-control" ref={register} />
                </div>
                <div className="mb-3">
                    <label for="icon" className="form-label">Icon</label>
                    <input onChange={imageUpload} type="file" name="icon" className="form-control" />
                </div>
                <button type="submit" className={`btn btn-primary ${imageURL ? '' : 'disabled'}`}>Submit</button>
            </form>
        </div>
    );
};

export default AddService;