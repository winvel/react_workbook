import { useHistory } from "react-router";
import classes from "./AboutUs.module.css";

const PageNotFound = () => {
  let history = useHistory();

  const clickHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.body}>
      <h1>Page Not Found</h1>
      <button type="button" onClick={clickHandler}>Go Back</button>
    </div>
  );
};

export default PageNotFound;
