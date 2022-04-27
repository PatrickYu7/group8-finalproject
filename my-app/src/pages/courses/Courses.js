import React from "react";
import axios from "axios";
import { useEffect, useState, Link } from "react";
import CourseCard from "../../components/course-card/card";
import classes from "./courses.module.css";

function Courses() {
  const [courses, setCourses] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8080/course`).then((res) => {
      const fetchedCourses = res.data.courses;

      setCourses(fetchedCourses);
    });
  }, []);

  const cards = [];

  for (var i = 0; i < courses.length; i++) {
    const id = courses[i].courseID;
    const diff = courses[i].difficulty;
    const work = courses[i].workload;
    const name = courses[i].courseName;
    const path = "/courses/" + id;
    console.log(path);
    cards.push(
      <CourseCard
        courseId={id}
        diffRating={diff}
        workRating={work}
        courseName={name}
      />
    );
  }

  return (
    <div className={classes.overall}>
      <div></div>
      <div className={classes.courses}>{cards}</div>
    </div>
  );
}

export default Courses;
