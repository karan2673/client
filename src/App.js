import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Authentication/Signup/Signup";
import Login from "./Authentication/Login/Login";
import HomePage from "./components/HomePage/HomePage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin/Admin_Page/Admin.jsx";
import Users from "./pages/Admin/Users/Users.jsx";
import HostelForm from "./pages/Admin/HostelForm/HostelForm.jsx";
import BookingPage from "./components/BookingPage/BookingPage.jsx";
import HostelDetails from "./components/HostelDetails/HostelDetails.jsx";
import Contact from "./components/ContactUs/Contact.jsx";
import { HostelBook } from "./components/HostelBook/HostelBook.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import PaymentPage from "./components/HostelBook/PaymentPage.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          {/* Admin Part */}
          <Route path="/admin" exact element={<Admin />}></Route>
          <Route path="/users" exact element={<Users />}></Route>
          <Route path="/locations" exact element={<Users />}></Route>
          <Route path="/hostelforms" exact element={<HostelForm />}></Route>
          {/* Admin Part */}

          {/* Users Part */}
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/bookings" exact element={<BookingPage />} />
          <Route path="/:hostelId" element={<HostelDetails />} />
          <Route path="/hostelbook/:hostelId" element={<PaymentPage />} />
          {/* Users Part */}

          {/* Contact-Us Part */}
          <Route path="/contact-us" exact element={<Contact />}></Route>
          {/* Contact-Us Part */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
