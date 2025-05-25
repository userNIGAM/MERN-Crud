import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/adduser", formdata)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log("error adding the user!");
      });
    setFormData({
      name: "",
      email: "",
      address: "",
      contact: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          User Management
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={formdata.name}
            onChange={(e) => {
              setFormData({
                ...formdata,
                [e.target.name]: e.target.value,
              });
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={formdata.email}
            onChange={(e) => {
              setFormData({
                ...formdata,
                [e.target.name]: e.target.value,
              });
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formdata.address}
            onChange={(e) => {
              setFormData({
                ...formdata,
                [e.target.name]: e.target.value,
              });
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            value={formdata.contact}
            onChange={(e) => {
              setFormData({
                ...formdata,
                [e.target.name]: e.target.value,
              });
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
