// PaymentPage.jsx
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { HostelBook } from "./HostelBook"; // Ensure to import the correct file path

// Replace 'YOUR_STRIPE_PUBLIC_KEY' with your actual Stripe public key
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>

      <HostelBook />
    </Elements>
  );
};

export default PaymentPage;
