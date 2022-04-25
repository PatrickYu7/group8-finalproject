import React from "react";
import { useState } from "react";
import axios from "axios";

//https://reactjsexample.com/a-simple-star-rating-component-with-react/
import { Rating } from "react-simple-star-rating";

function SetReview(props) {
  const [diffRating, setDiffRating] = useState(0);
  const [sigRating, setSigRating] = useState(0);
  const [workRating, setWorkRating] = useState(0);
  const [enteredReview, setReview] = useState("");

  const handleDiffRating = (rate) => {
    setDiffRating(rate);
  };

  const handleSigRating = (rate) => {
    setSigRating(rate);
  };

  const handleWorkRating = (rate) => {
    setWorkRating(rate);
  };

  const handleSubmit = async () => {
    const ratings = {
      difficulty: diffRating,
      workload: workRating,
      significance: sigRating,
      courseId: "",
    };

    const reviewData = {
      comment: enteredReview,
      courseId: "",
    };

    try {
      // make axios post request
      const response = await axios.post("http://localhost:8080/rate", ratings);
      console.log(response.data);
      setDiffRating(0);
      setSigRating(0);
      setWorkRating(0);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/course/addReview",
        reviewData
      );
      console.log(response.data);

      setReview("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>Importance</h2>
            <Rating
              onClick={handleSigRating}
              ratingValue={sigRating}
              size={20}
              transition
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>
          <div>
            <h2>Difficulty</h2>
            <Rating
              onClick={handleDiffRating}
              ratingValue={diffRating}
              size={20}
              transition
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>
          <div>
            <h2>Workload</h2>
            <Rating
              onClick={handleWorkRating}
              ratingValue={workRating}
              size={20}
              transition
              fillColor="orange"
              emptyColor="gray"
              className="foo" // Will remove the inline style if applied
            />
          </div>

          <label htmlFor="review"></label>
          <textarea
            id="review"
            rows="5"
            required
            value={enteredReview}
            onChange={(event) => setReview(event.target.value)}
            placeholder="Write your review about this class"
          ></textarea>
        </div>
        <div>
          <button>Submit Review</button>
        </div>
      </form>
    </div>
  );
}

export default SetReview;
