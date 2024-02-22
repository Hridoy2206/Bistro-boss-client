import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('errror message', error);
            setCardError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setCardError('')
        }

    }
    return (
        <div className='w-11/12 mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement 
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',

                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    
                />
                <div className=' text-center'>
                    <button className='bg-[#570DF8] px-16 lg:px-24 py-2 rounded-lg text-white mt-4' type="submit" disabled={!stripe}>Pay</button>
                </div>
            </form>
            {cardError && <p className='text-red-500 text-center mt-8'>{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;