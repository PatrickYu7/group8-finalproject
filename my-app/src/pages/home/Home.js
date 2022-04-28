import React from "react";
import classes from "./home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.top}>
        <div className={classes.topImage}></div>
        <div className={classes.wrapper}>
          <div className={classes.text}>
            Rate Berkeley Classes
          </div>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.bottom}>
        Some Description of website and image
      </div>
    </div>
  );
}

export default Home;
