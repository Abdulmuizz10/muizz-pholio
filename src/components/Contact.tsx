"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    setLoading(true);
    emailjs
      .send(
        "service_pf7mkfr",
        "template_q03k4xr",
        {
          from_name: formData.name.value,
          to_name: "Abdul Muizz",
          from_email: formData.email.value,
          to_email: "harrismuizz10@gmail.com",
          message: formData.message.value,
        },
        "TMafrinW0Sdo0R_V6"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for sending me a message, I will definitely reach out to you."
          );
          setFormData({
            name: {
              value: "",
              error: "",
            },
            email: {
              value: "",
              error: "",
            },
            message: {
              value: "",
              error: "",
            },
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
      {loading && (
        <>
          <p className="mt-2 text-center">Sending....</p>
        </>
      )}
    </form>
  );
};
