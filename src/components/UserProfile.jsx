"use client"
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Contact } from "../lib/types";
// import { editContact } from "../store/contactSlice";
 
const UserProfile  = ({contact="", setIsOpen }) => {
  //update the contacts details
  // const dispatch = useDispatch();
 

  // toggle the dialog box for edit contact details

  const toggleModal = () => {
    console.log("toggle modal");
    setIsOpen((prev) => !prev); // Toggle modal visibility
  };
  return (
    // <div
    //   id="authentication-modal"
    //   className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full
    // `}
    <div
      id="authentication-modal"  
      className={`text-black fixed  bg-backdrop-blur-sm flex  justify-center items-center z-50 bg-black/50 backdrop-blur-sm bg-blur  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] 
    max-md:left-0 max-md:top-0 max-md:min-w-[100%]  max-h-full
    
    `}
      // Use your condition to control the visibility
    >
      <div className="relative w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative text-black bg-white rounded-lg shadow   dark:bg-gray-700">
          {/* close modal button */}
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={toggleModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {/* this is the view contact detail div */}
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              View Contact Details
            </h3>
            <form
               
              className="bg-white w-full p-8 max-md:p-1 rounded shadow-md space-y-4  max-md:min-w-full"
            >
              <label className="block text-sm font-medium text-gray-800">
                Name:
              </label>
              <input
                className="mt-1 p-2 border rounded w-full"
                placeholder="Name"
                defaultValue={contact.name}
                // onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <label className="block text-sm font-medium text-gray-800">
                Email:
              </label>
              <input
                className="mt-1 p-2 border rounded w-full"
                placeholder="email"
                // Display the updated value from form state
                defaultValue={contact.email} // Display the default value when modal is opened
                // onChange={(e) => setForm({ ...form, email: e.target.value })} // Update the form state
              />

              <label className="block text-sm font-medium text-gray-800">
                Phone Number:
              </label>
              <input
                className="mt-1 p-2 border rounded w-full"
                placeholder="phone number"
                defaultValue={contact.phoneNumber}
                // onChange={(e) =>
                //   setForm({ ...form, phoneNumber: e.target.value })
                // }
              />

              <label className="block text-sm font-medium text-gray-800">
                Status:
              </label>
              <div className="flex space-x-4 justify-start">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    // checked={form.status === "Active"}
                    // onChange={(e) =>
                    //   setForm({ ...form, status: e.target.value })
                    // }
                  />
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    // checked={form.status === "Inactive"}
                    // onChange={(e) =>
                    //   setForm({ ...form, status: e.target.value })
                    // }
                  />
                  Inactive
                </label>
              </div>

              <button
                type="submit"
                className="px-5 py-1 w-full text-white bg-black"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;