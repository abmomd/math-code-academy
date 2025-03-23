import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { stepsData } from "../data/stepsData"; // Import the data


const DSAAccordion = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openLecture, setOpenLecture] = useState<number | null>(null);

  // Apply black background to body to cover entire page
  useEffect(() => {
    document.body.style.backgroundColor = "#000"; // Force black background
    document.body.style.color = "white"; // Set default text color to white
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-success"; // Green for Easy
      case "Medium":
        return "text-warning"; // Yellow for Medium
      case "Hard":
        return "text-danger"; // Red for Hard
      default:
        return "text-white";
    }
  };

  return (
    <div className="container-fluid min-vh-100 p-4 bg-black text-white">
          <h1 className="text-center text-primary mb-4">Code With Ashraf</h1> {/* Add this heading */}
      {stepsData.map((step, stepIndex) => (
        <div key={stepIndex} className="mb-3">
          {/* Step Title */}
          <div
            className="p-3 bg-black text-white d-flex justify-content-between border border-danger"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenStep(openStep === stepIndex ? null : stepIndex)}
          >
            <strong>{step.title}</strong>
            {openStep === stepIndex ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {/* Lectures */}
          {openStep === stepIndex &&
            step.lectures.map((lecture, lecIndex) => (
              <div key={lecIndex} className="ms-4 mt-2">
                <div
                  className="p-2 bg-black text-white d-flex justify-content-between border "
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenLecture(openLecture === lecIndex ? null : lecIndex)}
                >
                  {lecture.title}
                  {openLecture === lecIndex ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {/* Questions Table */}
                {openLecture === lecIndex && lecture.questions.length > 0 && (
                  <table className="table table-dark mt-2 border border-secondary">
                    <thead className="bg-black text-white">
                      <tr>
                        <th>Problem</th>
                        <th>Difficulty</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black text-white">
                      {lecture.questions.map((q, qIndex) => (
                        <tr key={qIndex} className="bg-black text-white border-bottom border-secondary">
                          <td>{q.name}</td>
                          <td className={getDifficultyColor(q.difficulty)}>{q.difficulty}</td>
                          <td>
                            <a href={q.link} className="text-primary" target="_blank" rel="noopener noreferrer">
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
  );
};

export default DSAAccordion;
