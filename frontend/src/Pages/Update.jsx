import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  // Fetch user data on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/updateuser/" + id)
      .then((res) => setUser(res.data))
      // .then((res) => {
      //   console.log(res.data);
      // })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateduser/" + id, user)
      .then((result) => {
        // console.log(result.data);
        navigate("/userdata");
      })
      .catch((error) => {
        console.log("error adding the user!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Update User
        </h2>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          placeholder="Contact"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
