import React, { useEffect, useState } from "react";

const SuccessMessage = ({ message, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer2 = setTimeout(() => setVisible(false), duration + 1000);
      return () => {
        clearTimeout(timer2);
      };
    }
  }, [message, duration]);

  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: visible ? "block" : "none" }}
    >
      {message}
    </div>
  );
};

export default SuccessMessage;
