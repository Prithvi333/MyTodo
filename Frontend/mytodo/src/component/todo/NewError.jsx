import { useEffect, useRef } from "react";

export default function NewError({ error, setError }) {
  let ref = useRef(null);
  let settingErrorStyle = {
    textAlign: "center",
    display: "block",
    position: "relative",
  };

  useEffect(() => {
    ref.current = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(ref.current);
  }, [error]);

  let errorStyle = error
    ? { ...settingErrorStyle, visiblity: "visible" }
    : { ...settingErrorStyle, visiblity: "hidden" };

  return <h3 style={errorStyle}>{error}</h3>;
}
