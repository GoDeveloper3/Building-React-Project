import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./Components/Home/Main";
import PropertyList from "./Components/Home/PropertyList";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import Login from "./Components/User/Login";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./Store/User/user-action";
import { userActions } from "./Store/User/user-slice";
import SignUp from "./Components/User/SignUp";
import Profile from "./Components/User/Profile";
import EditProfile from "./Components/User/EditProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import Payment from "./Components/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyBookings from "./Components/MyBookings/MyBookings";
import BookingDetails from "./Components/MyBookings/BookingDetails";
import AccomodationForm from "./Components/Accomodation/AccomodationForm";
import Accomodation from "./Components/Accomodation/Accomodation";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51OucB4SCRN1PZoBtoVI50eu84H55a95J1pVWs5WqHAhqUYsBYKY77ZaXV8I4xUb8nNp5P6iTupQf2N2KngNoLBca00OqNRkFfU"
  );
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearError());
    }
    dispatch(currentUser());
  }, [errors, dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} id="main" exact>
        <Route id="home" index element={<PropertyList />} exact />
        <Route
          id="propertyDetails"
          path="/propertylist/:id"
          element={<PropertyDetails />}
          exact
        />
        <Route id="login" path="login" element={<Login />} />
        <Route id="signup" path="signup" element={<SignUp />} />
        <Route id="profile" path="profile" element={<Profile />} />
        <Route id="editprofile" path="editprofile" element={<EditProfile />} />
        <Route
          id="updatepassword"
          path="user/updatepassword"
          element={<UpdatePassword />}
        />
        <Route
          id="forgotpassword"
          path="/user/forgotpassword"
          element={<ForgotPassword />}
        />
        <Route
          id="resetpassword"
          path="/user/resetpassword/:token"
          element={<ResetPassword />}
        />
        <Route
          id="payment"
          path="/payment/:propertyId"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        ></Route>
        <Route id="mybookings" path="user/booking" element={<MyBookings />} />
        <Route
          id="bookingdetails"
          path="user/booking/:id"
          element={<BookingDetails />}
        />
        <Route
          id="accommodation"
          path="accommodation"
          element={<Accomodation />}
        />
        <Route
          id="accommodationform"
          path="accommodationform"
          element={<AccomodationForm />}
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable={true}
        transition={Flip}
      ></ToastContainer>
    </div>
  );
}

export default App;
