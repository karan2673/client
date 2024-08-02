import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper_Slide } from "./Swiper/Swiper_Slide";
import PicassoFooter from "./PicassoFooter/PicassoFooter";

// Swiper Animaton
const HomePage = () => {
  // ------------------------------

  // ------------------------------
  const navigate = useNavigate();

  const bookNow = () => {
    navigate("/bookings");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.page_wrapper}>
      <Navbar />
      <div className={styles.home_container}>
        <div className={styles.home_heading}>
          <div className={styles.left_part} data-aos="fade-up">
            <div className={styles.card1}>
              <h2 className={styles.card1_head}>
                Discover HostelHub – Where Your Spirit Roams Free. Embrace
                Adventure, Unleash Wanderlust!
              </h2>
              <div className={styles.card1_text}>
                <div className={styles.vertical_line}></div>
                <p>
                  Discover HostelHub, where every traveler's journey comes
                  alive. Dive into a world of wanderlust, where adventure
                  beckons at every turn.
                </p>
                <div className={styles.card1_btn}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right_part} data-aos="fade-down">
            <img src="Hostel Room.jpg" />
          </div>
        </div>
        <div className={styles.rooms}>
          <div className={styles.rooms_left} data-aos="zoom-in">
            <div className={styles.rooms_heading}>
              <h1>Hostel Rooms</h1>
              <div className={styles.rooms_card}>
                <div className={styles.rcard1}>
                  <img src="Bunk_Bed.jpg" width={300} height={255} alt="" />
                  <div className={styles.rcard1_h}>
                    <p>3 Bunkbeds in Bed-room with 2 Shared Bathroom</p>
                  </div>
                  <div className={styles.rcard1_t}>
                    <img src="Profile_Icon.png" alt="gender-neutral-user--v1" />
                    <p>12 People</p>
                    <img src="Bunk_Bed_Icon.png" alt="Bunk_Beds_Icon" />
                    <p>3 Bunk-Beds</p>
                  </div>
                  <div className={styles.rcard1_last}>
                    <Link to="/bookings" className={styles.available_link}>
                      <p>Check Availability</p>
                    </Link>
                    <img src="Arrow_Icon.png" />
                  </div>
                </div>
                <div className={styles.rcard2}>
                  <img src="Twin_Beds.jpg" width={300} height={255} alt="" />
                  <div className={styles.rcard2_h}>
                    <p>Double Room with Private Bathroom</p>
                  </div>
                  <div className={styles.rcard2_t}>
                    <img src="Profile_Icon.png" alt="gender-neutral-user--v1" />
                    <p>2 People</p>
                    <img src="Bunk_Bed_Icon.png" alt="Bunk_Beds_Icon" />
                    <p>3 Beds</p>
                  </div>
                  <div className={styles.rcard2_last}>
                    <Link to="/bookings" className={styles.available_link}>
                      <p>Check Availability</p>
                    </Link>
                    <img src="Arrow_Icon.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rooms_right} data-aos="fade-down">
            <div className={styles.rooms_card}>
              <div className={styles.rcard}>
                <div className={styles.r1}>
                  <h1>Stay Longer,</h1>
                  <h1>Stay Happier</h1>
                </div>
                <div className={styles.r2}>
                  <h3>It's simple: the longer you stay, the more you save!</h3>
                </div>
                <div className={styles.r3}>
                  <div className={styles.vertical_line1}></div>
                  <p>
                    Save up to 30% on monthly for stays longer than 6 months,
                    <br />
                    <br />
                    Save up to 40% on monthly for stays longer than 1 year
                  </p>
                </div>
                <div className={styles.r4}>
                  <button className={styles.book_btn}>
                    <Link to="/bookings" className={styles.r_link}>
                      Check Room
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- About Everything ------------------ */}
        <div className={styles.about_everything}>
          <div className={styles.about_1}>
            <div></div>
            <div className={styles.about_t} data-aos="fade-up">
              <h1>We have everything you need</h1>
              <h4>
                Our hostel rooms for students offer spacious and well-furnished
                accommodations, providing a comfortable environment for studying
                and relaxation.
              </h4>
              <div className={styles.about_t2} data-aos="slide-down">
                <img src="Wifi.png" width="42" height="40" alt="" />
                <p>Free available high speed WiFi</p>
                <img src="Location.png" alt="" />
                <p>Convenient Location at the center</p>
                <img src="Cupboard.png" alt="" />
                <p>Free Storage of luggage of any size</p>
                <img src="Parking.png" alt="" />
                <p>Parking places allocated to you</p>
              </div>
              <div className={styles.about_t3} data-aos="zoom-in">
                <button className={styles.book} onClick={bookNow}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className={styles.about_2} data-aos="fade-down">
            <video src="Hostel_Tour.mp4" controls></video>
          </div>
        </div>
        {/* ---------------------- About Everything Ends ---------------------- */}
        <div className={styles.reviews}>
          <div className={styles.reviews1} data-aos="fade-up">
            <div></div>
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              autoPlay={true}
              interval={4000}
              dynamicHeight={true}
              showArrows={false} // Add this line to disable the side arrows
              className={styles.carousel}
            >
              <div>
                <img
                  src="Student1.jpg"
                  style={{ height: "450px" }} // Adjust the height as needed
                />
              </div>
              <div>
                <img
                  src="Student2.jpg"
                  style={{ height: "450px" }} // Adjust the height as needed
                />
              </div>
              <div>
                <img
                  src="Student3.jpg"
                  style={{ height: "450px" }} // Adjust the height as needed
                />
              </div>
            </Carousel>
          </div>
          <div className={styles.reviews2} data-aos="fade-down">
            <div className={styles.reviews2_heading}>What our Students Say</div>
            <div className={styles.reviews2_text}>
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                interval={4000}
                dynamicHeight={true}
                className={styles.carousel2}
                showArrows={false} // Add this line to disable the side arrows
              >
                <div
                  className={styles.carousel_card}
                  style={{ height: "320px" }} // Adjust the height as needed
                >
                  <div className={styles.carousel_reviews}>
                    <p>⭐⭐⭐⭐⭐ </p>
                  </div>
                  <div className={styles.text}>
                    <h3>
                      Year of Stay:
                      <span className={styles.year}> May, 2023</span>
                    </h3>
                    <h4>Budget-Friendly Haven for Student Explorers</h4>
                    <p>
                      Affordable and cozy, this hostel in the city center is
                      perfect for students looking to make new friends and
                      embark on adventures. With its welcoming vibe and
                      convenient location, it's a top pick for those seeking
                      comfort without breaking the bank.
                    </p>
                    <p className={styles.reviewer}>Mihir Pandya</p>
                  </div>
                </div>
                <div
                  className={styles.carousel_card}
                  style={{ height: "320px" }} // Adjust the height as needed
                >
                  <div className={styles.carousel_reviews}>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                  <div className={styles.text}>
                    <h3>
                      Year of Stay:
                      <span className={styles.year}> December, 2022</span>
                    </h3>
                    <h4>Your Student Sanctuary Away from Home</h4>
                    <p>
                      This hostel feels like a second home with its comfy beds
                      and study areas, providing a peaceful escape from student
                      life. Whether you're relaxing after classes or gearing up
                      for a night out, this spot offers the ideal blend of
                      coziness and convenience.
                    </p>
                    <p className={styles.reviewer}>Priyank Vyas</p>
                  </div>
                </div>
                <div
                  className={styles.carousel_card}
                  style={{ height: "320px" }} // Adjust the height as needed
                >
                  <div className={styles.carousel_reviews}>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                  <div className={styles.text}>
                    <h3>
                      Year of Stay:{" "}
                      <span className={styles.year}>December, 2021</span>
                    </h3>
                    <h4>Where Student Memories Are Born</h4>
                    <p>
                      More than just a place to crash, this hostel is a hub of
                      unforgettable experiences, from late-night chats to city
                      explorations. With its friendly staff and lively
                      atmosphere, it's guaranteed to be the backdrop for
                      countless cherished memories.
                    </p>
                    <p className={styles.reviewer}>Keval Solanki</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        {/* -------------------------------- Guest Reviews Ends ----------------------------------------*/}
        <div className={styles.locations}>
          <div className={styles.locations_heading} data-aos="zoom-out">
            Hostel Locations
          </div>
          <div className={styles.locations_container} data-aos="zoom-in">
            <div className={styles.locations_card}>
              {/* eslint-disable */}
              <img
                src="Ahmedabad.jpg"
                alt="Ahmedabad City Image"
                className={styles.card_img}
              />
              <h2 className={styles.card_h}>Ahmedabad</h2>
            </div>
            <div className={styles.locations_card}>
              <img
                src="Anand.jpg"
                alt="Anand City Image"
                className={styles.card_img}
              ></img>
              <h2 className={styles.card_h}>Anand</h2>
            </div>
            <div className={styles.locations_card}>
              <img
                src="Vadodara.jpg"
                alt="Vadodara City Image"
                className={styles.card_img}
              />
              <h2 className={styles.card_h}>Vadodara</h2>
            </div>
          </div>
        </div>
        {/* Photos of our Rooms */}
        <Swiper_Slide />
        <div className={styles.contact}>
          <div className={styles.contact_left} data-aos="fade-up">
            <div></div>
            <div className={styles.contact_left2}>
              <div></div>
              <div className={styles.contact_heading}>Contacts</div>
              <div className={styles.contact_details}>
                <div className={styles.details1}>
                  <p>
                    Get in touch with our team today to learn more about our
                    hostel rental system and how we can accommodate your stay.
                  </p>
                </div>
                <div className={styles.details2}>
                  <img src="./Phone_Icon.png" alt="" />
                  <p>+91 9687155397</p>
                  <div></div>
                  <img src="./Email_Icon.png" alt="" />
                  <p>smitdesai@gmail.com</p>
                </div>
                <div className={styles.details3}>
                  <img src="./Location.png" alt="" />
                  <p>Anand, Gujarat</p>
                  <div></div>
                  <img src="./Clock_Icon.png" alt="" />
                  <p>9 am - 5 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact_right} data-aos="blur">
            <iframe
              title="Anand Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9651782849767!2d72.9635974150218!3d22.565184385185125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e43c2f1bb4e0d%3A0xe6b908b0ee93a6fe!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662909063693!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* Footer Starts */}
        <PicassoFooter />
      </div>
    </div>
  );
};

export default HomePage;
