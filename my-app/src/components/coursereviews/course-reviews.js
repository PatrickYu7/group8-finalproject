import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "../review-card/review-card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import classes from "./course-reviews.module.css";

function CourseReviews() {
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

  const reviewCards = [];

  for (var j = 0; j < currentReviews.length; j++) {
    const getComment = currentReviews[j].comment;
    const getLikes = currentReviews[j].likes;
    const getDislikes = currentReviews[j].dislikes;
    const id = currentReviews[j]._id;
    const username = currentReviews[j].username;
    console.log(currentReviews[j]);
    reviewCards.push(
      <ReviewCard
        comments={getComment}
        likes={getLikes}
        dislikes={getDislikes}
        reviewID={id}
        username={username}
      />
    );
  }

  const path = "/courses/" + id + "/addreview";

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.text}>Rate Berkeley Classes</div>
      </div>
      <div className={classes.reviews}>{reviewCards}</div>
      <Link to={path}>
        <Button>
          <h1>CLICK TO MAKE REVIEW!!!!</h1>
        </Button>
      </Link>
    </div>
  );
}

export default CourseReviews;
