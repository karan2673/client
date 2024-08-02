import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to hold error message
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  axios.defaults.baseURL = "http://localhost:8000/";
  const handleSignup = async (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    try {
      const res = await axios.post("/api/v1/user/signup", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        console.log(res.data.message);
        toast.success(res.data.message);
        navigate("/login");
      } else {
        console.log(res.data.message);
        toast.error(res.data.message);
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      // Display error message to the user
      toast.error("An error occurred. Please try again later.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.main_container}>
          <div className={styles.logo} data-aos="fade-up">
            HostelHub
          </div>
          <div className={styles.main_card}>
            <h1 className={styles.header}>Welcome to HostelHub</h1>
            <form className={styles.form}>
              <label className={styles.label}>Name: </label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label className={styles.label}>Email: </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.label}>Password: </label>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles.main_content}>
                <a href="/login">Already have an account?</a>
                <button className={styles.btn} onClick={handleSignup}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
