import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//https://reactjsexample.com/a-simple-star-rating-component-with-react/
import { Rating } from "react-simple-star-rating";

function AddReview(props) {
  const [diffRating, setDiffRating] = useState(0);
  const [sigRating, setSigRating] = useState(0);
  const [workRating, setWorkRating] = useState(0);
  const [enteredReview, setReview] = useState("");
  const { id } = useParams();

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
      courseId: id,
    };

    const reviewData = {
      comment: enteredReview,
      courseId: id,
    };

    axios.post("http://localhost:8080/course/rate", ratings).then((res) => {
      console.log(res.data);
    });

    axios
      .post("http://localhost:8080/course/addReview", reviewData)
      .then((response) => {
        console.log(response.data);
      });
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

export default AddReview;
