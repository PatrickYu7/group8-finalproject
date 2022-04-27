import react from "react";
import { useState } from "react";
import axios from "axios";
import ReviewCard from "../review-card/review-card";

function CourseReviews(props) {
  /*
    const [reviews, setReviews] = useState('')

    useEffect( () => {
        axios.get(`https://localhost:8080/course/getReviews`)
            .then( res => {
                const reviews = res.data;
                setPerson(fetchedPerson);
            })
    }, []);
*/

  return (
    <div>
      <div>
        <h1>{props.CourseId}</h1>
        <h4>{props.courseName}</h4>
      </div>

      {/*flexbox for reviews*/}
      <div>
        <ReviewCard review="HHHHHAAHAHAHAEF" />
      </div>
    </div>
  );
}

export default CourseReviews;
