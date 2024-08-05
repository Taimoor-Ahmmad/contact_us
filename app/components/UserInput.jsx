"use client";
import React, { useState } from "react";

const UserInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="w-[300px] h-[45px] px-3 py-5 rounded-xl  border-white justify-start items-center gap-2.5 inline-flex">
        <div className="text-2xl font-normal font-['Roboto']">
          <input
            type="text"
            className="mb-4 border-none p-2 rounded-md w-full text-lg bg-white text-black placeholder-black"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
