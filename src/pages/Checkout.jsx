import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="p-4">
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

// create a form becasue we cannot use useStripe and elements hook outside Elements component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      toast.error("Error making the payment");
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      toast.success("Payment successful");
      navigate("/thankyou");
    } else {
      toast.error("Payment could not be completed.");
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <PaymentElement />
      <button
        className="btn mt-3"
        style={{ backgroundColor: "#625FBC", color: "white" }}
        type="submit"
      >
        Pay Now
      </button>
    </form>
  );
};

export default Checkout;
