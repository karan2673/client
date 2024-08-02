// AboutPage.js
import React from "react";
import styles from "./AboutPage.module.css"; // Importing CSS module
import Navbar from "../Navbar/Navbar";
import PicassoFooter from "../HomePage/PicassoFooter/PicassoFooter";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.about_container}>
        <div className={styles.about_header}>
          <h3>Home / About</h3>
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles["about-page-container"]}>
        <div className={styles["about-section"]}>
          <div className={styles["about-image"]}>
            <img
              src="Hostel_Logo.png"
              width="500"
              height="200"
              alt="HostelHub About Image"
            />
          </div>

          <div className={styles["about-info"]}>
            <h2>Welcome to HostelHub</h2>

            <p>
              HostelHub is your ultimate platform for hassle-free hostel
              bookings. Whether you're a student planning your next adventure or
              a traveler seeking budget-friendly accommodations, HostelHub has
              got you covered.
            </p>

            <p>
              Our mission is to provide a seamless and enjoyable booking
              experience, offering a diverse range of hostels tailored to your
              preferences. With our user-friendly interface and comprehensive
              listings, finding the perfect hostel has never been easier.
            </p>

            <p>
              At HostelHub, we understand the importance of convenience and
              affordability. That's why we strive to offer competitive prices,
              exclusive deals, and unbeatable discounts, ensuring you get the
              best value for your money.
            </p>

            <p>
              Join us on this journey as we revolutionize the way you book
              hostels. Whether it's a solo adventure or a group getaway,
              HostelHub is here to make your travel dreams a reality.
            </p>

            <a
              href="/about"
              title="About HostelHub"
              className={styles["about-button"]}
            >
              Discover More
            </a>
          </div>
        </div>

        <div className={styles["history-section"]}>
          <div className={styles["history-image"]}>
            <img
              src="Hostel_History.png"
              width="700"
              height="550"
              alt="HostelHub History Image"
            />
          </div>

          <div className={styles["history-info"]}>
            <h2>Our Journey</h2>

            <p>
              HostelHub started its journey with a vision to simplify hostel
              booking experiences. Since our inception, we have been committed
              to providing quality service and ensuring customer satisfaction.
            </p>

            <p>
              Over the years, we have partnered with numerous hostels worldwide,
              offering a wide range of options to our users. Our dedication to
              innovation and excellence has made HostelHub a trusted name in the
              travel industry.
            </p>

            <p>
              As we continue to grow, we remain focused on our core values of
              transparency, reliability, and affordability. Join us as we embark
              on this exciting journey towards redefining hostel bookings.
            </p>

            <a
              href="/history"
              title="HostelHub History"
              className={styles["history-button"]}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <PicassoFooter />
    </>
  );
};

export default AboutPage;
