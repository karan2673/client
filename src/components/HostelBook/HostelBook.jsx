// HostelBook.jsx
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import styles from "./HostelBook.module.css";
import Navbar from "../Navbar/Navbar";

export const HostelBook = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(10000); // Default deposit amount
  const stripe = useStripe();
  const elements = useElements();
  const [cardDetails, setCardDetails] = useState({
    senderCardNumber: "",
    receiverCardNumber: "",
  });

  const handleSenderCardChange = (event) => {
    setCardDetails({ ...cardDetails, senderCardNumber: event.target.value });
  };

  const handleReceiverCardChange = (event) => {
    setCardDetails({ ...cardDetails, receiverCardNumber: event.target.value });
  };

  // Prevent user from changing the amount
  const handleAmountChange = () => {
    // Do nothing to keep the amount fixed at the default value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const senderPaymentMethod = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const receiverPaymentMethod = await stripe.createPaymentMethod({
      type: "card",
      card: cardDetails.receiverCardNumber,
    });

    if (senderPaymentMethod.error || receiverPaymentMethod.error) {
      console.error(
        "Stripe error:",
        senderPaymentMethod.error || receiverPaymentMethod.error
      );
      setLoading(false);
      return;
    }

    try {
      // Send payment details to your server
      const response = await axios.post("/process-payment", {
        senderPaymentMethodId: senderPaymentMethod.paymentMethod.id,
        receiverPaymentMethodId: receiverPaymentMethod.paymentMethod.id,
        amount: amount * 100, // Convert amount to cents
        currency: "inr", // Indian Rupees
      });

      console.log("Payment processed successfully:", response.data);
      // Handle success
    } catch (error) {
      console.error("Server error:", error);
      // Handle server error
    }

    setLoading(false);
  };

  return (
    <>
      <div className={styles.HostelBook_container}>
        <div className={styles.HostelBook_details_header}>
          <h3>Payment Page</h3>
          <h1>Payment in terms of Card</h1>
        </div>
      </div>
      <div className={styles.book_container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.card_element}>
            <CardElement />
          </div>
          <input
            type="text"
            placeholder="Sender Card Number"
            value={cardDetails.senderCardNumber}
            onChange={handleSenderCardChange}
            className={styles.input_field}
          />
          <input
            type="text"
            placeholder="Receiver Card Number"
            value={cardDetails.receiverCardNumber}
            onChange={handleReceiverCardChange}
            className={styles.input_field}
          />
          <div className={styles.input_field}>
            <label htmlFor="amount">Deposit Amount (INR):</label>
            <input
              type="number"
              id="amount"
              value={amount}
              readOnly // Set input field to read-only
              onChange={handleAmountChange}
              className={styles.amount_input}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe || loading}
            className={styles.button}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </>
  );
};
