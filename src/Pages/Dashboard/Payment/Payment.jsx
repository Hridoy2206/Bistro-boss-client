import React from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_key)
const Payment = () => {
    return (
        <div className='w-full '>
            <SectionHeading subheading={'Please Process'} heading={'Payment'} />
            <h2 className="text-3xl text-center">PEYMENT </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;