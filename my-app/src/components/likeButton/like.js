import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Button from "@mui/material/Button";
import axios from "axios";

function LikeButton(props) {
  const [countUp, setCountUp] = useState(props.likes);
  const [countDown, setCountDown] = useState(props.dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const id = props.reviewID;

  function LikeClicked() {
    if (!liked && !disliked) {
      setLiked(true);
      axios
        .post("http://localhost:8080/review/like", {
          review_id: id,
        })
        .then((res) => {
          setCountUp(countUp + 1);
        });
    }
  }

  function DislikeClicked() {
    if (!liked && !disliked) {
      setDisliked(true);
      axios
        .post("http://localhost:8080/review/dislike", {
          review_id: id,
        })
        .then((res) => {
          setCountDown(countDown + 1);
        });
    }
  }

  return (
    <div>
      <Button onClick={() => LikeClicked()}>
        <ThumbUpIcon />
        {`${countUp === 0 ? " " : countUp}`}
      </Button>
      <Button onClick={() => DislikeClicked()}>
        <ThumbDownIcon />
        {`${countDown === 0 ? " " : countDown}`}
      </Button>
    </div>
  );
}

export default LikeButton;
