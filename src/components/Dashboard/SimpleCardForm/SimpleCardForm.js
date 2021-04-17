import React, { useMemo } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import './SimpleCardForm.css';
import { Col, Row } from 'react-bootstrap';

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }));

  return options;
};

const SimpleCardForm = ({ handlePayment, servicePrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      console.log('[error]', error);
    } else {
      handlePayment(paymentMethod);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <>
      <form className="paymentForm" onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
        </label>
        <Row>
          <Col>
            <label>
              Expiration date
              <CardExpiryElement
                options={options}
                onReady={() => {
                  console.log('CardNumberElement [ready]');
                }}
                onChange={(event) => {
                  console.log('CardNumberElement [change]', event);
                }}
                onBlur={() => {
                  console.log('CardNumberElement [blur]');
                }}
                onFocus={() => {
                  console.log('CardNumberElement [focus]');
                }}
              />
            </label>
          </Col>
          <Col>
            <label>
              CVC
              <CardCvcElement
                options={options}
                onReady={() => {
                  console.log('CardNumberElement [ready]');
                }}
                onChange={(event) => {
                  console.log('CardNumberElement [change]', event);
                }}
                onBlur={() => {
                  console.log('CardNumberElement [blur]');
                }}
                onFocus={() => {
                  console.log('CardNumberElement [focus]');
                }}
              />
            </label>
          </Col>
        </Row>
        <span className="charge">
          Your Service Charge{' '}
          <span className="servicePrice">{servicePrice}$</span>
        </span>
        <button
          style={{ padding: '10px 30px' }}
          className="btn button btn__link float-right"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default SimpleCardForm;
