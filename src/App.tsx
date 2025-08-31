import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ArticlePage from "./pages/Article.tsx";
import Home from "./pages/HomePage.tsx";
import OurCouses from "./pages/OurCourses.tsx";
import Testimonial from "./pages/TestimonialsPage.tsx";
// import PythonBasicsPage from "./pages/PythonBasics.tsx"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/our-courses" element={<OurCouses></OurCouses>} />
        <Route path="/testimonials" element={<Testimonial></Testimonial>} />
        {/* <Route path="/python-basics" element={<PythonBasicsPage />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/articles/:moduleId/:lectureId/:articleId"
          element={<ArticlePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
