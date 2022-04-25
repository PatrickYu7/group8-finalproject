import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import classes from "./card.module.css";

function CourseCard(props) {
  const id = "/courses/" + props.courseId;
  return (
    <Link to={id}>
      <div className={classes.cardStyling}>
        <h3 className={classes.moveDown}>{props.courseId}</h3>
        <h5 className={classes.downGray}>{props.courseName}</h5>
        <div className={classes.innerDiv}>
          <h6>
            Workload:
            <ReactStars
              count={5}
              size={15}
              edit={false}
              value={props.workRating / 20}
            />
          </h6>
          <h6>
            Difficulty:
            <ReactStars
              count={5}
              size={15}
              edit={false}
              value={props.workRating / 20}
            />
          </h6>
          <h6>
            Importance:{" "}
            <ReactStars
              count={5}
              size={15}
              edit={false}
              value={props.workRating / 20}
            />
          </h6>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
