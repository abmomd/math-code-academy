import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { stepsData } from "../data/stepsData"; // Import the data
import "../App.css";

import NavbarComponent from "./NavbarComponent"; // Import the Navbar


const DSAAccordion = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openLecture, setOpenLecture] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Dark background
    document.body.style.color = "white"; // Default text color
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-success fw-bold"; // Green for Easy
      case "Medium":
        return "text-warning fw-bold"; // Yellow for Medium
      case "Hard":
        return "text-danger fw-bold"; // Red for Hard
      default:
        return "text-white";
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid min-vh-100 p-4">
        {stepsData.map((step, stepIndex) => (
          <div key={stepIndex} className="mb-3">
            {/* Step Title */}
            <div
              className={`step-title ${openStep === stepIndex ? "active" : ""}`}
              onClick={() =>
                setOpenStep(openStep === stepIndex ? null : stepIndex)
              }
            >
              <strong>{step.title}</strong>
              {openStep === stepIndex ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {/* Lectures */}
            {openStep === stepIndex &&
              step.lectures.map((lecture, lecIndex) => (
                <div key={lecIndex} className="lecture">
                  <div
                    className={`lecture-title ${
                      openLecture === lecIndex ? "active" : ""
                    }`}
                    onClick={() =>
                      setOpenLecture(openLecture === lecIndex ? null : lecIndex)
                    }
                  >
                    {lecture.title}
                    {openLecture === lecIndex ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>

                  {/* Questions Table */}
                  {openLecture === lecIndex && lecture.questions.length > 0 && (
                    <table className="table table-bordered table-hover text-white">
                      <thead className="table-dark">
                        <tr>
                          <th>Problem</th>
                          <th>Difficulty</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lecture.questions.map((q, qIndex) => (
                          <tr key={qIndex}>
                            <td>{q.name}</td>
                            <td className={getDifficultyColor(q.difficulty)}>
                              {q.difficulty}
                            </td>
                            <td>
                              <a
                                href={q.link}
                                className="btn btn-primary btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Open
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default DSAAccordion;
