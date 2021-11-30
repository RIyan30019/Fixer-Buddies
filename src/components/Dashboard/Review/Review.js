import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {UserContext} from '../../../App'

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newReview = {
            name: data.UserName,
            company: data.companyName,
            description: data.description,
            photo: loggedInUser.image
        }

        fetch('https://fathomless-river-35723.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => {
            if(res){
                alert('review created successfully')
            }
        })
    }

    return (
        <div className='p-3 w-100 h-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 mx-auto p-5 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div className="mb-3">
                    <input type="text" name='UserName' className="form-control" placeholder="Your Name" ref={register} />
                </div>
                <div className="mb-3">
                    <input type="text" name="companyName" className="form-control" placeholder="Company's name, Destination" ref={register} />
                </div>
                <div className="mb-3">
                    <textarea name="description" className="form-control" cols="30" rows="5" ref={register}></textarea>
                </div>
                <button type="submit" className={`btn btn-primary`}>Submit</button>
            </form>
        </div>
    );
};

export default Review;