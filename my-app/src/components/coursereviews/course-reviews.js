import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "../review-card/review-card";
import axios from "axios";
import { useParams } from "react-router-dom";

function CourseReviews(props) {
  const [currentReviews, setReviews] = useState(null);
  const [currentCourses, setCourses] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/course/getReviews`, {
        courseID: id,
      })
      .then((res) => {
        const fetchedReviews = res.data.reviews;
        setReviews(fetchedReviews);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/course`).then((res) => {
      const fetchedCourses = res.data.courses;
      setCourses(fetchedCourses);
    });
  }, []);

  if (!currentReviews || !currentCourses) {
    return "Loading...";
  }

  var diff = 0;
  var work = 0;
  var sig = 0;
  var numRating = 0;

  for (var i = 0; i < currentCourses.length; i++) {
    if (currentCourses[i].courseID === id) {
      diff = currentCourses[i].difficulty;
      work = currentCourses[i].workload;
      sig = currentCourses[i].significance;
      numRating = currentCourses[i].numRating;
      break;
    }
  }

  const comment = currentReviews[0].comment;

  return (
    <div>
      <div>
        <h1>{comment}</h1>
        <h2>{diff}</h2>
      </div>
    </div>
  );
}

export default CourseReviews;
