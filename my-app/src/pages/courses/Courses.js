import React from "react";

import { useState } from "react";

import classes from "./courses.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FilteredCourses from "./filteredCourses";

function Courses() {
  const [enteredID, setID] = useState("");

  let inputHandler = (text) => {
    //convert input text to lower case
    var lowerCase = text.target.value.toLowerCase();
    setID(lowerCase);
  };

  return (
    <div className={classes.overall}>
      <div className={classes.courses}>
        <FilteredCourses input={enteredID} />
      </div>
      <div className={classes.search}>
        <h1>Search Courses</h1>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search for Courses"
          onChange={inputHandler}
        />
      </div>
      <div className={classes.courseBtn}>
        <Link to="/addcourse">
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Add Course
            </Button>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
