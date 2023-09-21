import { useEffect, useRef } from "react";

export default function NewError({ error, setError }) {
  let ref = useRef(null);
  let settingErrorStyle = {
    position: "absolute",
    color: "#136dbd",
    right: "43.5%",
  };

  useEffect(() => {
    ref.current = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(ref.current);
  }, [error]);

  let errorStyle = error
    ? { ...settingErrorStyle, zIndex: "1" }
    : { ...settingErrorStyle, zIndex: "0" };

  return <h4 style={errorStyle}>{error}</h4>;
}
