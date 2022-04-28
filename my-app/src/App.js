import Navbar from "./components/Navigation/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/account/Account";
import Courses from "./pages/courses/Courses";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CourseReviews from "./components/coursereviews/course-reviews";
import AddReview from "./components/addreview/add-review";
import Login from "./components/login-signup/login";
import SignUp from "./components/login-signup/signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WIthoutNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/account" element={<Account />} />

          <Route path="/courses/:id" element={<CourseReviews />} />
          <Route path="/courses/:id/addreview" element={<AddReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
