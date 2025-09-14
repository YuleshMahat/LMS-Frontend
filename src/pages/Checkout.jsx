import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const Checkout = () => {
  const { clientSecret } = useParams();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  return (
    <div>
      <h1>Securely Checkout</h1>

      {/* Your payment components */}
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
        }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      toast.error("Error making the payment");
    } else {
      toast.success("Payment successful");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <PaymentElement />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default Checkout;
