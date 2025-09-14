import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

const Checkout = () => {
  const { clientSecret } = useParams();
  const stripePromise = loadStripe(import.meta.env.STRIPE_PK);

  const handleOnSubmit = async (event) => {
    // event.preventDefault();
    // if (!stripe || !elements) {
    //   // setError("Stripe has not loaded. Please try again.");
    //   return;
    // }
    // const { error: paymentError } = await stripe.confirmPayment({
    //   elements,
    //   redirect: "if_required",
    // });
    // if (paymentError) {
    //   console.log(paymentError.message);
    // } else {
    //   // api to update borrow status
    //   let data = await updateBorrowApi({
    //     borrowId,
    //     clientSecret,
    //   });
    //   navigate("/dashboard");
    // }
  };

  return (
    <div>
      <h1>Securely Checkout</h1>
      <form onSubmit={handleOnSubmit}>
        {/* Your payment components */}
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <PaymentElement />
        </Elements>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
