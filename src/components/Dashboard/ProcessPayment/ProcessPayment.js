import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './ProcessPayment.css';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
const stripePromise = loadStripe(
  'pk_test_51IeBX9Jlu0l6tTUFLBWtTLszcdsSFnlVpIHqO13s8K8NxBDGVy3IZkBHIy1vtzzf6GOx46LZTdY7KssTIRNAwAUe00esFLC7Ud'
);
const ProcessPayment = ({ handlePayment, servicePrice }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm
        servicePrice={servicePrice}
        handlePayment={handlePayment}
      />
    </Elements>
  );
};

export default ProcessPayment;
