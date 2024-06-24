import { useSelector } from "react-redux";
import HeroSection from "./pages/HeroSection";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((store) => store.registerReducer.isAuth);
  return isAuth ? children : <HeroSection />;
}
