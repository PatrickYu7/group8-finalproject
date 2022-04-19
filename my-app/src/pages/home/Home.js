import React from "react";
import classes from "./home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.top}>
        <div className={classes.topImage}></div>
        <div className={classes.text}>
          <h1>Rate Berkeley Classes</h1>
        </div>
      </div>
      <div className={classes.bottom}>GOODBYE</div>
    </div>
  );
}

export default Home;
