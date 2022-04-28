import { React, useState, useEffect } from "react";

import axios from "axios";
import CourseCard from "../../components/course-card/card";

function FilteredCourses(props) {
  const [courses, setCourses] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8080/course`).then((res) => {
      const fetchedCourses = res.data.courses;
      setCourses(fetchedCourses);
    });
  }, []);

  if (!courses) {
    return "Loading...";
  }
  console.log(courses);
  //create a new array by filtering the original array
  const filteredData = courses.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.courseID.toLowerCase().includes(props.input);
    }
  });
  return (
    <div>
      {filteredData.map((item) => (
        <CourseCard
          courseId={item.courseID}
          diffRating={item.difficulty}
          workRating={item.workload}
          sigRating={item.significance}
          courseName={item.courseName}
          numRating={item.numRating}
        />
      ))}
    </div>
  );
}

export default FilteredCourses;
