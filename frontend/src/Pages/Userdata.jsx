import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

const Userdata = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getuser")
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log("Error!!", error);
      });
  }, []);
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div className="pt-20 px-4">
      {" "}
      {/* top padding to avoid overlap with back button */}
      <h2 className="text-3xl font-semibold mb-6 text-center">User Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">E-mail</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-4 text-gray-500 dark:text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                  <td className="border px-4 py-2 text-black dark:text-white">
                    {user.name}
                  </td>
                  <td className="border px-4 py-2 text-black dark:text-white">
                    {user.email}
                  </td>
                  <td className="border px-4 py-2 text-black dark:text-white">
                    {user.address}
                  </td>
                  <td className="border px-4 py-2 text-black dark:text-white">
                    {user.contact}
                  </td>
                  <td className="border px-4 py-2 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userdata;
