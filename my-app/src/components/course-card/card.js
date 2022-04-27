import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import classes from "./card.module.css";

function CourseCard(props) {
  const id = "/courses/" + props.courseId;
  return (
    <Link to={id} className={classes.size}>
      <div className={classes.cardStyling}>
        <h1 className={classes.moveDown}>{props.courseId}</h1>
        <h4 className={classes.downGray}>{props.courseName}</h4>
        <div className={classes.innerDiv}>
          <h3>
            Workload:
            <ReactStars
              count={5}
              size={20}
              edit={false}
              value={props.workRating / 20}
            />
          </h3>
          <h3>
            Difficulty:
            <ReactStars
              count={5}
              size={20}
              edit={false}
              value={props.diffRating / 20}
            />
          </h3>
          <h3>
            Importance:{" "}
            <ReactStars
              count={5}
              size={20}
              edit={false}
              value={props.sigRating / 20}
            />
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
