import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51QVzFpBGQQ3qeXlGSjpGR2B80VKnC4CYRfmjCcZiKT5s8K28uUO4WXgsaXDT3vFkNi8rJzYufQur0aGWetPl38Nx00TVhH2sso"
);

export default function Payment() {
  const location = useLocation();
  console.log(location);
  const amount = new URLSearchParams(location.search).get("amount");

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}
