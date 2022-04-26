import Navbar from "./components/Navigation/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/account/Account";
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SetReview from "./pages/setreview/set-review";
import axios from "axios";
import { useEffect, useState } from "react";
import CourseReviews from "./components/coursereviews/course-reviews";

function App() {
  /* connect to backend
  const [courses, setCourses] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/{#your github name}`)
      .then((res) => {
        const getCourses = res.data;
        setCourses(getCourses);
      });
  }, []);
  */

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/account" element={<Account />} />
          <Route path="/setreview" element={<SetReview />} />
          <Route
            path="/courses/adfadf"
            element={
              <CourseReviews courseId="adfadf" courseName="hahahahahaha" />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
