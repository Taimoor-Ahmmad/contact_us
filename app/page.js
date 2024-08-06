"use client";
import React, { useState, useEffect } from "react";
import bannerImage from "../public/assets/Vector_image.png";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [width, setWidth] = useState(0); // Initialize state with 0 to avoid server-side issues

  useEffect(() => {
    // Function to set width state to the current window width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileOrTablet = width <= 768; // Define your breakpoint (768px is typical for tablets)

  return (
    <div
      className="background flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {isMobileOrTablet ? (
        // Mobile/Tablet View - Show only Contact Form
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full max-w-sm p-4">
            <ContactForm />
          </div>
        </div>
      ) : (
        // Desktop View - Show everything
        <>
          <div className="flex flex-col items-center justify-center p-4">
            <Image src={bannerImage} width={445} height={445} />
            <h1 className="text-white text-6xl mr-20 mt-10">Feeling Stuck?</h1>
            <br />
            <h1 className="text-white">
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - -
            </h1>
            <h2 className="text-white text-2xl mr-5">Don't worry</h2>
          </div>
          <div className="form-container justify-center items-center h-full">
            <ContactForm />
          </div>
        </>
      )}
    </div>
  );
}
