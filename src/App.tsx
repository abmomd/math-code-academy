
import ListGroup from "./components/ListGroup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ArticlePage from "./pages/Article.tsx";
function App(){

  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ListGroup></ListGroup>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/articles/:moduleId/:lectureId/:articleId" element={<ArticlePage />} />
          </Routes>
      </Router>
    );


};

export default App;
