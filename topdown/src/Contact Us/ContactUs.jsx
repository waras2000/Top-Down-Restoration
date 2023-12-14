import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Navbar from '../NavBar/Navbar'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <StyledContactForm>
        <StyledFormContainer>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledFormContainer>
      </StyledContactForm>
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const StyledFormContainer = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      outline: none;
      border-radius: 8px;
      border: 2px solid #3498db;

      &:focus {
        border: 2px solid #e74c3c;
      }
    }

    label {
      margin-top: 1rem;
      color: #333;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #27ae60;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      transition: background-color 0.3s ease;

      &:hover {
        background: #2ecc71;
      }
    }
  }
`;