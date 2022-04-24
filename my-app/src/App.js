import Navbar from "./components/Navigation/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/account/account";
import Courses from "./pages/courses/courses";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import SetReview from "./pages/setreview/set-review";

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
          <Route path="/setreview" element={<SetReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
