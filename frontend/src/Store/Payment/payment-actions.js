import { setPaymentDetails } from "./payment-slice";
import {CardNumberElement} from '@stripe/react-stripe-js';
import axios from "axios";
import { createBooking } from "../Booking/booking-actions";

export const processPayment = ({
  totalAmount,
  stripe,
  elements,
  checkindate,
  checkoutdate,
  propertyName,
  address,
  maximumGuest,
  bookingId,
  propertyId,
  nights,
  dispatch, 
  navigate,
}) => {
  return async (events)=>{
    events.preventDefault();
    if(!stripe || !elements) {
      console.error("Stripe is not initialized");
      return;
    }
    const cardNumberElement = elements.getElement(CardNumberElement);
    try {
      const response = await axios.post("/api/v1/rent/user/checkout-session", {
        amount:totalAmount,
        currency:"inr",
        paymentMethodType:["card"],
        checkindate,
        checkoutdate,
        propertyName,
        address,
        maximumGuest,
        bookingId,
        propertyId,
        nights,
      },{
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data= response.data;
      await stripe.confirmCardPayment(data.clientSecret,{
        payment_method:{
          // type: 'card',
          card:cardNumberElement,
        }
      });
      dispatch(createBooking({
        checkindate,
        checkoutdate,
        propertyName,
        address,
        maximumGuest,
        bookingId,
        propertyId,
        nights,
      }));
      
      dispatch(setPaymentDetails({
        checkindate,
        checkoutdate,
        totalPrice:totalAmount,
        propertyName,
        address,
        maximumGuest,
        bookingId,
        nights,
      }));
      navigate("/user/booking");
    } catch (error) {
      console.log("Error Processing Payment",error);
    }
  }; 
};
