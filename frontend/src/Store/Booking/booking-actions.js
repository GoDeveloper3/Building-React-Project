import axios from "axios";
import { addBooking,setBookingDetails,setBookings } from "./booking-slice";

export const createBooking = (bookingDate) => async (dispatch) => {
   try{
      const response = await axios.post("/api/v1/rent/user/booking/new", bookingDate);
      console.log(response.data.data.booking);
      dispatch(addBooking(response.data.data.booking));
   }
   catch(error){
     console.error(error);
   }
}

export const fetchBookingDetails = (bookingId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/rent/user/booking/${bookingId}`);
    dispatch(setBookingDetails(response.data.data));
  } catch (error) {
    console.error(error);
  }
}

export const fetchUserBookings = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/rent/user/booking");
    dispatch(setBookings(response.data.data.bookings));
  } catch (error) {
    console.error("Error in Fetching Booking",error);
  }
}
