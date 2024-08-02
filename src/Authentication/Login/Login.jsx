import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();
  axios.defaults.baseURL = "http://localhost:8000/";
  const handleLogin = async (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    try {
      const res = await axios.post("/api/v1/user/login", {
        email,
        password,
      });

      // For the admin user
      if (res.data.isAdmin) {
        // Admin Successful
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/admin");
        window.location.reload();
      } else {
        // ---------------------------
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          toast.success(res.data.message);
          navigate("/");
          window.location.reload();
        } else {
          console.log(res.data.message);
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("An error has been occured so please try again later");
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
              <label className={styles.label}>Email: </label>
              <input
                className={styles.input}
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <label className={styles.label}>Password: </label>
              <input
                className={styles.input}
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </form>
            <div className={styles.main_content}>
              <a href="/signup">Don't have an account?</a>
              <button className={styles.btn} onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
