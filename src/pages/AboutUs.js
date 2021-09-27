import { NavLink } from "react-router-dom";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.body}>
      <h2>About Us</h2>
      <p>A simple record to enter and view your basic work details.</p>
      <p>Click below to register.</p>
     <NavLink to="./register"><button>Register Now</button></NavLink>
    </div>
  );
};

export default AboutUs;
