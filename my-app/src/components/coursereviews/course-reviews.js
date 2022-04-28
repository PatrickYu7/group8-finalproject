import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "../review-card/review-card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import classes from "./course-reviews.module.css";
import ReactStars from "react-stars";

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
  var description = "";
  var name = "";

  for (var i = 0; i < currentCourses.length; i++) {
    if (currentCourses[i].courseID === id) {
      diff = currentCourses[i].difficulty;
      work = currentCourses[i].workload;
      sig = currentCourses[i].significance;
      numRating = currentCourses[i].numRating;
      description = currentCourses[i].description;
      name = currentCourses[i].courseName;

      break;
    }
  }

  console.log(diff);
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
  const title = id + ": " + name;

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.text}>{title}</div>
      </div>
      <div className={classes.reviewBtn}>
        <Link to={path}>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Add Review
            </Button>{" "}
          </div>
        </Link>
      </div>

      <div className={classes.ratings}>
        <div>
          <div className={classes.textChild}>Workload:</div>
          <div className={classes.child}>
            <ReactStars count={5} size={50} edit={false} value={work / 20} />
          </div>
        </div>

        <div>
          <div className={classes.textChild}>Difficulty:</div>
          <div className={classes.child}>
            <ReactStars count={5} size={50} edit={false} value={diff / 20} />
          </div>
        </div>

        <div>
          <div className={classes.textChild}>Importance:</div>
          <div className={classes.child}>
            <ReactStars count={5} size={50} edit={false} value={sig / 20} />
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <h1 className={classes.decorate}>Course Description</h1>
        <p className={classes.size}>{description}</p>
      </div>

      <div className={classes.reviews}>{reviewCards}</div>
    </div>
  );
}

export default CourseReviews;
