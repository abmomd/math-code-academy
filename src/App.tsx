
import ListGroup from "./components/ListGroup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
function App(){

  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ListGroup></ListGroup>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    );


};

export default App;
