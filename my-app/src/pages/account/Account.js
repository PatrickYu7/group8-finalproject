import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../../components/review-card/review-card";
import { ClassNames } from "@emotion/react";
import classes from "./account.module.css";

function Account() {
  const username = localStorage.getItem("username");
  const [currentReviews, setReviews] = useState("");
  const header = "Hi, " + username;

  useEffect(() => {
    axios
      .post(`http://localhost:8080/course/GetUserReviews`, {
        username: username,
      })
      .then((res) => {
        const fetchedReviews = res.data.reviews;
        setReviews(fetchedReviews);
      });
  }, []);

  if (!currentReviews) {
    return "Loading...";
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

  return (
    <div>
      <h1 className={classes.headerPos}>{header}</h1>
      <h1 className={classes.reviews}>{reviewCards}</h1>
      <h1 className={classes.myReviews}>My Reviews</h1>
    </div>
  );
}

export default Account;
