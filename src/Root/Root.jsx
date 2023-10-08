import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Root = () => {
  return (
    <div className=" font-event">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
