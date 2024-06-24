import React, { useEffect, useState } from "react";

export default function ErrorMessage({ message, duration }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration - 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-lg px-4 py-2 rounded shadow-lg transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: "1s" }}
    >
      {message}
    </div>
  );
}
