import React from "react";
import classes from "./review-card.module.css";
import LikeButton from "../likeButton/like";

function ReviewCard(props) {
  console.log(props.comments);

  return (
    <div>
      <div className={classes.cardStyling}>
        <p>{props.comments}</p>
        <LikeButton
          likes={props.likes}
          dislikes={props.dislikes}
          reviewID={props.reviewID}
        />
      </div>
    </div>
  );
}

export default ReviewCard;
