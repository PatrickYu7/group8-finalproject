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
        <div className={classes.wrapper_line}>
        </div>
        <div className={classes.line}>
        </div>
        <div className={classes.sub_text}>
        “Rate Berkeley Classes” is a website with a rating and review system of Berkeley classes allowing users to express their personal opinions and experiences regarding classes they took. Class scheduling can often be convoluted, as there are numerous factors to consider when deciding which classes to take (i.e., workload, average grade, difficulty, personal enjoyment). By compiling this information into one website, students will have a significantly easier time determining which classes to take and allow them to better prepare for these classes. Additionally, this can incentivize improvement in the courses themselves as the reviews and ratings can be utilized to determine both deficiencies and positives of these courses.
        </div>
      </div>
    </div>
  );
}

export default Home;
