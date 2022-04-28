import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./addreview.module.css";

//https://reactjsexample.com/a-simple-star-rating-component-with-react/
import { Rating } from "react-simple-star-rating";

function AddReview() {
  const [diffRating, setDiffRating] = useState(0);
  const [sigRating, setSigRating] = useState(0);
  const [workRating, setWorkRating] = useState(0);
  const [enteredReview, setReview] = useState("");
  const { id } = useParams();

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const handleDiffRating = (rate) => {
    setDiffRating(rate);
  };

  const handleSigRating = (rate) => {
    setSigRating(rate);
  };

  const handleWorkRating = (rate) => {
    setWorkRating(rate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ratings = {
      difficulty: diffRating,
      workload: workRating,
      significance: sigRating,
      courseID: id,
    };

    const reviewData = {
      comment: enteredReview,
      courseID: id,
      username: localStorage.getItem("username"),
    };

    console.log(ratings);
    axios
      .post("http://localhost:8080/course/rate", ratings)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));

    axios
      .post("http://localhost:8080/course/addReview", reviewData)
      .then((response) => {
        console.log(response.data);
      });
    routeChange("/courses");
  };

  return (
    <section className={classes.contact}>
      <h1>Add Review</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <h2>Importance</h2>
            <Rating
              onClick={handleSigRating}
              ratingValue={sigRating}
              size={30}
              transition
              label
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>
          <div className={classes.control}>
            <h2>Workload</h2>
            <Rating
              onClick={handleWorkRating}
              ratingValue={workRating}
              size={30}
              transition
              label
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>
          <div className={classes.control}>
            <h2>Difficulty</h2>
            <Rating
              onClick={handleDiffRating}
              ratingValue={diffRating}
              size={30}
              transition
              label
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Review</label>
          <textarea
            id="review"
            rows="5"
            value={enteredReview}
            required
            onChange={(event) => setReview(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Review</button>
        </div>
      </form>
    </section>
  );
}

export default AddReview;
