import Navbar from "./components/Navigation/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/account/Account";
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CourseReviews from "./components/coursereviews/course-reviews";
import AddReview from "./components/addreview/add-review";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/account" element={<Account />} />

          <Route path="/courses/:id" element={<CourseReviews />} />
          <Route path="/courses/:id/addreview" element={<AddReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
