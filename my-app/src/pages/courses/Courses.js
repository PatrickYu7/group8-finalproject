import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../../components/course-card/card";
import classes from "./courses.module.css";

function Courses() {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/course`).then((res) => {
      const fetchedCourses = res;
      console.log("HELLO");
      setCourses(fetchedCourses);
    });
  }, []);

  return (
    <div className={classes.overall}>
      <div></div>
      <div className={classes.courses}>
        <CourseCard
          courseId="adfadf"
          courseName="aahahhhhh"
          workRating={90}
          sigRating={83}
          diffRating={93}
        />
        <CourseCard
          courseId="adfff"
          courseName="adsfadf"
          workRating={20}
          sigRating={63}
          diffRating={66}
        />
        <CourseCard
          courseId="adfadf"
          courseName="aahahhhhh"
          workRating={90}
          sigRating={83}
          diffRating={93}
        />
        <CourseCard
          courseId="adfff"
          courseName="adsfadf"
          workRating={20}
          sigRating={63}
          diffRating={66}
        />
        <CourseCard
          courseId="adfadf"
          courseName="aahahhhhh"
          workRating={90}
          sigRating={83}
          diffRating={93}
        />
        <CourseCard
          courseId="adfff"
          courseName="adsfadf"
          workRating={20}
          sigRating={63}
          diffRating={66}
        />
        <CourseCard
          courseId="adfadf"
          courseName="aahahhhhh"
          workRating={90}
          sigRating={83}
          diffRating={93}
        />
        <CourseCard
          courseId="adfff"
          courseName="adsfadf"
          workRating={20}
          sigRating={63}
          diffRating={66}
        />
        <CourseCard
          courseId="adfff"
          courseName="adsfadf"
          workRating={20}
          sigRating={63}
          diffRating={66}
        />
      </div>
    </div>
  );
}

export default Courses;
