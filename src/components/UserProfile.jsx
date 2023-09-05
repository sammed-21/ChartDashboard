 
import React, { useState } from "react";

const UserProfile = ({ setIsOpen, setUserProfileData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    instaLink: "",
    youTubeLink: "",
  });

  const [currentPage, setCurrentPage] = useState("basic"); // Initialize to "basic" page

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send the formData to the parent component through setUserProfileData
    setUserProfileData(formData);
    // Close the modal
    setIsOpen(false);
  };

  // Function to handle the modal close
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      id="authentication-modal"
      className={`text-black fixed bg-backdrop-blur-sm flex justify-center items-center z-50 bg-black/50 backdrop-blur-sm bg-blur w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-md:left-0 max-md:top-0 max-md:min-w-[100%]  max-h-full`}
    >
      <div className="relative w-full max-w-md max-h-full p-3">
        <div className="relative text-black bg-white rounded-lg shadow  ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
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

          {/* Buttons to toggle between "Basic" and "Contact" pages */}
            <div className="p-4">
          <h3 className="mb-4 text-xl border-b border-gray-400/40 font-medium text-gray-900  ">
             Add New Profile
            </h3>
          <div className="flex w-full justify-around space-x-4 p-4">
            <button
              className={`${
                currentPage === "basic"
                  ? "border-b-2 "
                  : "nonborder"
              } px-4 py-2  `}
              onClick={() => setCurrentPage("basic")}
            >
              Basic
            </button>
            <button
              className={`${
                currentPage === "contact"
                ? "border-b-2 "
                : "nonborder"
              } px-4 py-2  `}
              onClick={() => setCurrentPage("contact")}
              >
              Contact
            </button>
          </div>
          {/* Form with conditionally rendered fields */}
          <form
            onSubmit={handleSubmit}
            className="  w-full p-1 max-md:p-1 rounded  space-y-4 max-md:min-w-full"
            >

            {currentPage === "basic" && (
              <>
              <div className="flex flex-col gap-3 ">
            <label className="block text-sm font-medium text-gray-800">
              Name:
            </label>
            <input
            className="mt-1 p-2 border rounded w-full"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            />

            <label className="block text-sm font-medium text-gray-800">
              Email:
            </label>
            <input
              className="mt-1 p-2 border rounded w-full"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              />

            <label className="block text-sm font-medium text-gray-800">
              Phone Number:
            </label>
            <input
              className="mt-1 p-2 border rounded w-full"
              placeholder="Phone Number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              />
                  </div>
                  <div className="w-full flex items-end justify-end ">

                  <button
                    onClick={() => setCurrentPage("contact")}
                    className=" items-end py-1 text-sm w-fit px-2 rounded-md text-white bg-[#3E84F8]"
                    >
               Next
            </button>
                      </div>
              </>

          )  }
            {/* Conditional rendering of YouTube and Instagram links */}
            {currentPage === "contact" && (
                <>
                  <div className="flex flex-col gap-3">

                <label className="block text-sm font-medium text-gray-800">
                  Instagram Link:
                </label>
                <input
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="Instagram Link"
                  name="instaLink"
                  value={formData.instaLink}
                  onChange={handleInputChange}
                  />

                <label className="block text-sm font-medium text-gray-800">
                  YouTube Link:
                </label>
                <input
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="YouTube Link"
                  name="youTubeLink"
                  value={formData.youTubeLink}
                  onChange={handleInputChange}
                  />
                  </div>
                  <div className="w-full flex gap-4 items-end justify-end ">

                  <button
                    onClick={() => setCurrentPage("basic")}
                    className="border-2 border-black px-2 rounded-md"
                    >
               back
            </button>
                  <button
                     type="submit"
                    className=" items-end py-1 text-sm w-fit px-2 rounded-md text-white bg-[#3E84F8]"
                    >
               done
            </button>
                      </div>
              </>
            )}

            {/* <button
              type="submit"
              className="px-5 py-1 w-full text-white bg-black"
              >
              Edit
            </button> */}
          </form>
              </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
