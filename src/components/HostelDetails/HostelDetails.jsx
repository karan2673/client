import React from "react";
import styles from "./HostelDetails.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { HostelBook } from "../HostelBook/HostelBook";
import axios from "axios";

const HostelDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state;

  const handleBooking = async (formData) => {
    navigate(`/hostelbook/${formData._id}`);
  };

  return (
    <>
      <Navbar />
      <div className={styles.details_container}>
        <div className={styles.details_header}>
          <h3>
            Home / Rooms
            <span className={styles.span_text}> / {formData.name} </span>
          </h3>
          <h1 className={styles.h1_text}>{formData.name}</h1>
        </div>
        <div className={styles.booking_button}>
          <button onClick={() => handleBooking(formData)}>Book Now</button>
        </div>
      </div>
      <div className={styles.hostel_swiper}>
        <div className={styles.horizontal_swiper}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className={styles.myswiper}
          >
            <SwiperSlide>
              {formData.images &&
                formData.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className={styles.image_container}
                    style={{ height: "350px" }}
                  >
                    <img
                      src={`http://localhost:8000/Images/${image}`}
                      alt={`Image ${imageIndex}`}
                    />
                  </div>
                ))}
            </SwiperSlide>
            <SwiperSlide>
              <img src="Hostel_Room2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Hostel_Room3.avif" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Hostel_Room1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Hostel_Room5.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.details_data}>
          {/* Description Room */}
          <div className={styles.details_description}>
            <h2>Description</h2>
            <p>{formData.description}</p>
          </div>

          {/* Room Details */}
          <div>
            <div>
              <div className={styles.details_rooms}>
                <h2>Types of Rooms</h2>
                {formData.rooms &&
                  formData.rooms.map((room, roomIndex) => (
                    <div key={roomIndex} className={styles.rooms}>
                      <div className={styles.rooms_category}>
                        <img
                          src="Category_Icon.png"
                          width="30px"
                          height="30px"
                          alt="Category_Icon"
                        />
                        <span>{room.category}</span>
                      </div>
                      <div className={styles.rooms_price}>
                        <img
                          src="INR_Icon.png"
                          width="30px"
                          height="30px"
                          alt="Price_Icon"
                        />
                        <span>{room.price} / year</span>
                      </div>
                    </div>
                  ))}
              </div>
              <h2
                style={{ textAlign: "left", color: "#2596be", fontWeight: 600 }}
              >
                Location
              </h2>
              <div className={styles.details_address}>
                <img
                  src="Location.png"
                  width="30px"
                  height="30px"
                  alt="Location_Icon"
                />
                <span>{formData.address}</span>
              </div>

              <div className={styles.amenities}>
                <h2>Hostel Amenities</h2>
                <div className={styles.facilities}>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <img
                        src="Bed_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Bed-Icon"
                      />
                      <p>Large Bed</p>
                    </div>
                    <div className={styles.column}>
                      <img
                        src="Cupboard.png"
                        width="30px"
                        height="30px"
                        alt="Cupboard-Icon"
                      />
                      <p>Cupboard</p>
                    </div>
                    <div className={styles.column}>
                      <img
                        src="Gym_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Gym-Icon"
                      />
                      <p>Gym</p>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <img
                        src="Customer_Support_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Customer-Support"
                      />
                      <p>24/7 Support</p>
                    </div>
                    <div className={styles.column}>
                      <img
                        src="Shower_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Shower-Icon"
                      />
                      <p>Shower</p>
                    </div>
                    <div className={styles.column}>
                      <img
                        src="Study_Table_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Cupboard-Icon"
                      />
                      <p>Study_Table </p>
                    </div>
                  </div>
                  <div className={styles.row}>
                    {formData.rooms.map((room, index) => {
                      if (
                        room.category === "Deluxe Room" ||
                        room.category === "Deluxe Rooms"
                      ) {
                        return (
                          <>
                            <div className={styles.column}>
                              <img
                                key={index}
                                src="Refrigerator_Icon.png"
                                width="30px"
                                height="30px"
                                alt="Refrigerator-Icon"
                              />
                              <p>Refrigerator </p>
                            </div>
                          </>
                        );
                      }
                    })}
                    {formData.rooms.map((room, index) => {
                      if (
                        (room.category === "A.C Room" &&
                          room.category === "Non A.C Room") ||
                        (room.category === "A.C Rooms" &&
                          room.category === "Non A.C Rooms")
                      ) {
                        return (
                          <>
                            <div className={styles.column}>
                              <img
                                key="index"
                                src="AC_Icon.png"
                                width="30px"
                                height="30px"
                                alt="A.C-Icon"
                              />
                              <p>A.C</p>
                            </div>
                            <div className={styles.column}>
                              <img
                                key="index"
                                src="Ceiling_Fan_Icon.png"
                                width="30px"
                                height="30px"
                                alt="Ceiling-Fan-Icon"
                              />
                              <p>Ceiling Fan</p>
                            </div>
                          </>
                        );
                      } else if (
                        room.category === "A.C Room" ||
                        room.category === "A.C Rooms"
                      ) {
                        return (
                          <>
                            <div className={styles.column}>
                              <img
                                key="index"
                                src="AC_Icon.png"
                                width="30px"
                                height="30px"
                                alt="A.C-Icon"
                              />
                              <p>A.C</p>
                            </div>
                          </>
                        );
                      }
                    })}
                    <div className={styles.column}>
                      <img
                        src="Shoe_Rack_Icon.png"
                        width="30px"
                        height="30px"
                        alt="Shoe-Rack-Icon"
                      />
                      <p>Shoe Rack</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.hostel_rules}>
                <h2>Hostel Rules</h2>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <img
                      style={{ marginTop: "15px" }}
                      src="Tick_Icon.png"
                      width="30px"
                      height="30px"
                      alt="Tick-Icon"
                    />
                    <p>
                      The hostel's curfew time for entering the premises is
                      strictly enforced and is set at 11:00 pm. Students are
                      required to return to the hostel before this time.
                    </p>
                  </div>
                  <div className={styles.column}>
                    <img
                      style={{ marginTop: "15px" }}
                      src="Tick_Icon.png"
                      width="30px"
                      height="30px"
                      alt="Tick-Icon"
                    />
                    <p>
                      Students are welcome to utilize the hostel facilities such
                      as the garden, gym, playing area, and lobby at any time
                      during operational hours. These amenities are provided for
                      the enjoyment and convenience of all residents.
                    </p>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <img
                      style={{ marginTop: "20px" }}
                      src="Wrong_Icon.png"
                      width="30px"
                      height="30px"
                      alt="Wrong-Icon"
                    />
                    <p>
                      Respect quiet hours to ensure a conducive environment for
                      studying and resting. Avoid making loud noises or engaging
                      in disruptive activities during designated quiet times.
                    </p>
                  </div>
                  <div className={styles.column}>
                    <img
                      style={{ marginTop: "20px" }}
                      src="Wrong_Icon.png"
                      width="30px"
                      height="30px"
                      alt="Wrong-Icon"
                    />
                    <p>
                      Follow the hostel's policy on smoking, drugs, and alcohol.
                      Consumption of these substances is strictly prohibited
                      inside the hostel premises. Any violation will result in
                      immediate action taken by hostel representatives.
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact and Email of Hostel Owner */}
              <h2
                style={{ textAlign: "left", color: "#2596be", fontWeight: 600 }}
              >
                Contact
              </h2>
              <div className={styles.details_email}>
                <img
                  src="Email_Icon.png"
                  width="30px"
                  height="30px"
                  alt="Email_Icon"
                />
                <span>{formData.email}</span>
              </div>
              <div className={styles.details_contact}>
                <img
                  src="Phone_Icon.png"
                  width="30px"
                  height="30px"
                  alt="Phone-Icon"
                />
                <span>+91-{formData.contact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelDetails;
