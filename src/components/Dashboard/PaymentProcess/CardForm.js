import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardForm = ({ handlePayment }) => {
  const [paymentError, setPaymentError] = useState(null)
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setSuccess(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      handlePayment(paymentMethod.id);
      setSuccess(paymentMethod.id);
      setPaymentError(null);
    }
  };

  return (
    <div>
      <form className="bg-dark text-white w-50 p-3 rounded" onSubmit={handleSubmit}>
        <CardElement className="bg-light text-light py-2" />
        <button className='btn btn-primary mt-3' type="submit" disabled={!stripe}>
          Pay
      </button>
      </form>
      {
        paymentError && <p className="text-danger">{paymentError}</p>
      }
      {
        success && <p className="text-success">Your Payment is successfully</p>
      }
    </div>
  );
};

export default CardForm;