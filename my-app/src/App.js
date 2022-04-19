import Navbar from "./components/Navigation/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import About from "./pages/About";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
