import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/", { name, email, message })
      .then((result) => {
        console.log(result);
        // alert("hello");
        toast.success("Data sent successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error submitting data", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  return (
    <div
      className="container-fluid text-white p-4"
      style={{ backgroundColor: "black" }}
    >
      <div
        className="row"
        style={{ marginTop: "80px", marginBottom: "80px", marginLeft: "40px" }}
      >
        <div className="col-md-5">
          <h2 className="heading">Contact Me</h2>
          <p style={{ color: "white", marginTop: "40px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              href="mailto:bindalvatsaljpr@gmail.com"
              style={{ color: "white" }}
            >
              bindalvatsaljpr@gmail.com
            </a>
          </p>
          <p
            href="tel:+1234567890"
            style={{ color: "white", marginTop: "40px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
            +91 8888888888
          </p>
          <div style={{ marginTop: "40px" }}>
            <a
              href="https://www.linkedin.com/in/vatsal-agarwall"
              target="_blank"
              style={{ color: "white" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/vatsalagarwall"
              target="_blank"
              style={{ color: "white", marginLeft: "30px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
          <br />
          <button
            type="submit"
            class="btn"
            style={{ borderColor: "red", color: "white", marginTop: "20px" }}
          >
            Download CV
          </button>
        </div>

        <div className="col-md-7 ">
          <div style={{ marginRight: "70px" }}>
            {/* <h2>Contact Me</h2> */}
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleMessage" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleMessage"
                  name="message"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn"
                style={{ borderColor: "red", color: "white" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
