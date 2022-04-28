import React from "react";
import classes from "./addcourse.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setDescription] = useState("");

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {
      courseID: enteredID,
      courseName: enteredName,
      description: enteredDescription,
    };

    console.log(info);

    axios
      .post("http://localhost:8080/course/addCourse", info)
      .then((res) => {
        const data = res.data;
        console.log(data);
        routeChange("/courses");
      })
      .catch((error) => console.error(error));
  };
  return (
    <section className={classes.contact}>
      <h1>Add Course</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="courseID">Course ID</label>
            <input
              type="text"
              id="courseID"
              value={enteredID}
              required
              onChange={(event) => setEnteredID(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Course Name</label>
            <input
              type="text"
              id="courseName"
              value={enteredName}
              required
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Course Description</label>
          <textarea
            id="description"
            rows="5"
            value={enteredDescription}
            required
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Course</button>
        </div>
      </form>
    </section>
  );
};

export default AddCourse;
