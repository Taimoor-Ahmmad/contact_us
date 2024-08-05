"use client";

import React, { useState } from "react";
import UserInput from "./UserInput";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-25 shadow-md rounded-lg px-12 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 ml-16">
          <div className="space-x-4">
            <label
              className="block text-white text-2xl font-bold ml-3 mt-10"
              htmlFor="name"
            >
              Contact us
            </label>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <div className="flex flex-row ml-2 items-center mb-4">
            <h1 className="mr-2">First Name</h1>
          </div>
          <UserInput
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="flex flex-row items-center ml-2 mb-4">
            <h1 className="mr-2">Last Name</h1>
          </div>
          <UserInput
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="flex flex-row items-center ml-2 mb-4">
            <h1 className="mr-2">Email(Required)</h1>
          </div>
          <UserInput
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="flex flex-row items-center ml-2 mb-4">
            <h1 className="mr-2">Message</h1>
          </div>
          <UserInput
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-40" // Set the height to your desired value (e.g., 100px)
          />
        </div>
        <div className="mt-4 ml-20">
          <Button content={"Send"} />
        </div>

        <br />
      </form>
    </div>
  );
};

export default ContactForm;
