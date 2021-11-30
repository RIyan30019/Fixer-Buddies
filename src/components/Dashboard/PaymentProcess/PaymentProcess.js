import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PaymentProcess = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CardForm handlePayment={handlePayment} />
            </Elements>
        </div>
    );
};

export default PaymentProcess;