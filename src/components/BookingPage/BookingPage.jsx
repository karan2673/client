import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "./BookingPage.module.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import HostelDetails from "../HostelDetails/HostelDetails";
import PicassoFooter from "../HomePage/PicassoFooter/PicassoFooter";

const BookingPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [showACRooms, setShowACRooms] = useState(false);
  const [showDeluxeRooms, setShowDeluxeRooms] = useState(false);
  const [showNonACRooms, setShowNonACRooms] = useState(false);
  const [showprice, setShowPrice] = useState(false);
  const [showhighprice, setShowHighPrice] = useState(false);
  const [showAnand, setShowAnand] = useState(false);
  const [showBaroda, setShowBaroda] = useState(false);
  const [showChanga, setShowChanga] = useState(false);

  axios.defaults.baseURL = "http://localhost:8000/";

  const bookHostel = async (formData) => {
    if (formData && formData.name) {
      console.log(formData);
      navigate(`/${formData._id} `, { state: { formData } });
    } else {
      console.error("Error: _id is missing in formData", formData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/v1/admin/getImages");
        console.log(res);
        setData(res.data.data);
        if (res.data.success) {
          // toast.success("Data Fetched Successfully");
        }
      } catch (err) {
        console.log(err);
        toast.error("Error fetching images");
      }
    };
    fetchData();
  }, []);

  const filterACRooms = (formData) => {
    if (!showACRooms) {
      return true;
    }
    return formData.rooms.some(
      (room) => room.category === "A.C Room" || room.category === "A.C Rooms"
    );
  };

  const filterNonACRooms = (formData) => {
    if (!showNonACRooms) {
      return true;
    }
    return formData.rooms.some(
      (room) =>
        room.category === "Non AC Room" || room.category === "Non AC Rooms"
    );
  };

  const filterDeluxeRooms = (formData) => {
    if (!showDeluxeRooms) {
      return true;
    }
    return formData.rooms.some(
      (room) =>
        room.category === "Deluxe Room" || room.category === "Deluxe Rooms"
    );
  };

  const filterPrice = (formData) => {
    if (!showprice) {
      return true;
    }
    return formData.rooms.some((room) => parseInt(room.price) < 90000);
  };

  const filterhighPrice = (formData) => {
    if (!showhighprice) {
      return true;
    }
    return formData.rooms.some((room) => parseInt(room.price) > 90000);
  };

  const filterLocation = (formData) => {
    if (!showAnand && !showBaroda && !showChanga) {
      return true; // Show if no location filter is applied
    }
    const address = formData.address.toLowerCase();
    return (
      (showAnand && address === "anand") ||
      (showBaroda && address === "baroda") ||
      (showChanga && address === "changa")
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.book_container}>
        <div className={styles.book_header}>
          <h3>
            Home<span> / Rooms</span>
          </h3>
          <h1>Rooms</h1>
        </div>
      </div>
      {/* Main Div */}
      <div style={{ display: "grid", gridTemplateColumns: "18% 80%" }}>
        <div className={styles.checkbox}>
          <h3>Filter</h3>
          <label>
            <input
              type="checkbox"
              checked={showACRooms}
              onChange={(e) => setShowACRooms(e.target.checked)}
            />
            A.C Room
          </label>
          <label>
            <input
              type="checkbox"
              checked={showNonACRooms}
              onChange={(e) => setShowNonACRooms(e.target.checked)}
            />
            Non A.C Room
          </label>
          <label>
            <input
              type="checkbox"
              checked={showDeluxeRooms}
              onChange={(e) => setShowDeluxeRooms(e.target.checked)}
            />
            Deluxe Room
          </label>
          <label>
            <input
              type="checkbox"
              checked={showprice}
              onChange={(e) => setShowPrice(e.target.checked)}
            />
            Low Price
          </label>
          <label>
            <input
              type="checkbox"
              checked={showhighprice}
              onChange={(e) => setShowHighPrice(e.target.checked)}
            />
            High Price
          </label>
          <label>
            <input
              type="checkbox"
              checked={showAnand}
              onChange={(e) => setShowAnand(e.target.checked)}
            />
            Anand
          </label>
          <label>
            <input
              type="checkbox"
              checked={showBaroda}
              onChange={(e) => setShowBaroda(e.target.checked)}
            />
            Baroda
          </label>
          <label>
            <input
              type="checkbox"
              checked={showChanga}
              onChange={(e) => setShowChanga(e.target.checked)}
            />
            Changa
          </label>
        </div>

        <div className={styles.book_section}>
          {data ? (
            data.map(
              (formData, index) =>
                filterACRooms(formData) &&
                filterNonACRooms(formData) &&
                filterDeluxeRooms(formData) &&
                filterPrice(formData) &&
                filterhighPrice(formData) &&
                filterLocation(formData) && (
                  <div key={index} className={styles.book_card}>
                    <div className={styles.booking_image}>
                      {formData.images &&
                        formData.images.map((image, imageIndex) => (
                          <div key={imageIndex}>
                            <img
                              src={`http://localhost:8080/Images/${image}`}
                              alt={`Image ${imageIndex}`}
                            />
                          </div>
                        ))}
                    </div>
                    <div className={styles.booking_data}>
                      <div className={styles.book_head}>
                        Name: {formData.name}
                      </div>
                      <div className={styles.book_table}>
                        <div className={styles.book_data}>
                          Location: {formData.address}
                        </div>
                        <div className={styles.book_category}>
                          <div
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                          >
                            Rooms :
                          </div>
                          <div className={styles.book_ct1}>
                            {formData.rooms &&
                              formData.rooms.map((room, roomIndex) => (
                                <div
                                  key={roomIndex}
                                  className={styles.room_item}
                                >
                                  <div className={styles.category_item}>
                                    <img
                                      src="Category_Icon.png"
                                      width="30px"
                                      height="30px"
                                      alt="Category_Icon"
                                    />
                                    <span>{room.category}</span>
                                  </div>
                                  <div className={styles.price_item}>
                                    <img src="INR_Icon.png" alt="Price_Icon" />
                                    <span
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "GrayText",
                                          fontSize: "1.2rem",
                                        }}
                                      >
                                        {room.price}
                                      </span>
                                      <span>/ year</span>
                                    </span>
                                  </div>
                                </div>
                              ))}
                            <div className={styles.book_section}>
                              <button
                                className={styles.book_btn}
                                onClick={() => bookHostel(formData)}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
      <br></br>
      <PicassoFooter />
    </>
  );
};

export default BookingPage;
