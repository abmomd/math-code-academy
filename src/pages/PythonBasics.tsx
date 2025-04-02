import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import Intro from "../components/Intro";
import NavbarComponent from "../components/NavbarComponent"; // Import the Navbar

const PythonBasicsPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Dark background
    document.body.style.color = "white"; // Default text color
  }, []);

  return (
    <>
      <NavbarComponent />
      <h1 className="text-center ">Coming Soon</h1>
    </>
  );
};

export default PythonBasicsPage;
