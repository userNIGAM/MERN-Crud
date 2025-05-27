import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
import { useNavigate } from "react-router-dom"; // import this

const Userdata = () => {
  const [users, setUser] = useState([]);
  const [edituser, setEditUser] = useState(null);
  const [deleteuser, setDeleteUser] = useState(null);
  const navigate = useNavigate(); // initialize it

  useEffect(() => {
    axios
      .get("http://localhost:5000/getuser")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleEdit = async (users) => {
    // setEditUser(users);
    // try {
    //   const response = await axios.put(
    //     `http://localhost:5000/updateuser/${users._id}`,
    //     {
    //       name: users.name,
    //       email: users.email,
    //       address: users.address,
    //       contact: users.contact,
    //     }
    //   );
    //   console.log("users updated", response.data);
    // } catch (error) {
    //   console.log("error updating user", error);
    // }
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/deleteuser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="pt-20 px-4">
      {" "}
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        ⬅ Back to Home
      </button>
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
                    <Link to={`/update/${user._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                        <MdEdit />
                      </button>
                    </Link>

                    <button
                      onClick={(e) => handleDelete(user._id)}
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
