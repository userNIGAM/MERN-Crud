import React, { useEffect } from "react";

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg text-white transition-transform duration-500 transform ${{
        success: "bg-green-600",
        error: "bg-red-600",
      }[type]} animate-slide-in`}
      style={{ minWidth: 250 }}
    >
      {message}
    </div>
  );
};

export default Notification;
