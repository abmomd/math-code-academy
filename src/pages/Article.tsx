import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loadArticles from "../routes/articlesIndex"; // Now using the async function
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Article.css";
import NavbarComponent from "../components/NavbarComponent";

const ArticlePage: React.FC = () => {
  const { moduleId, lectureId, articleId } = useParams<{
    moduleId?: string;
    lectureId?: string;
    articleId?: string;
  }>();

  const articleKey = `${moduleId}/${lectureId}/${articleId}`;
  console.log("Looking for article with key:", articleKey); // Debugging

  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLangs, setSelectedLangs] = useState<{ [key: number]: string }>({
    0: "cpp", // Default for Approach 1
    1: "java" // Default for Approach 2
  });

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const articles = await loadArticles();
      if (articles[articleKey]) {
        setArticle(articles[articleKey]);
      } else {
        console.error(`Article not found: ${articleKey}`);
        setArticle(null);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [articleKey]);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (!article) return <h2 className="text-center mt-5">Article Not Found</h2>;

  return (
    <>
      <NavbarComponent />

      <div className="article-container">
        <h1 className="article-title">{article.title}</h1>
        {/* <p>{article.content}</p> */}

        {/* Example Dropdown */}
        <div className="accordion mb-3" id="exampleAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
                Example
              </button>
            </h2>
            <div id="exampleCollapse" className="accordion-collapse collapse">
              <div className="accordion-body">
                <SyntaxHighlighter language="python" style={dracula}>
                  {article.example}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        {article.approaches.map((approach: any, index: number) => (
          <div key={index} className="mb-4">
            {/* Approach Dropdown */}
            <div className="accordion" id={`approachAccordion-${index}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#approachCollapse-${index}`}>
                    {approach.name}
                  </button>
                </h2>
                <div id={`approachCollapse-${index}`} className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>{approach.description}</p>

                    {/* Code & Time Complexity Accordion */}
                    <div className="accordion" id={`codeAccordion-${index}`}>
                      {/* Code Dropdown */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#codeCollapse-${index}`}>
                            Code
                          </button>
                        </h2>
                        <div id={`codeCollapse-${index}`} className="accordion-collapse collapse">
                          <div className="accordion-body">
                            {/* Language Tabs */}
                            <ul className="nav nav-tabs">
                              {["cpp", "java", "python"].map((lang) => (
                                <li className="nav-item" key={lang}>
                                  <button
                                    className={`nav-link ${selectedLangs[index] === lang ? "active" : ""}`}
                                    onClick={() => setSelectedLangs((prev) => ({ ...prev, [index]: lang }))}
                                  >
                                    {lang.toUpperCase()}
                                  </button>
                                </li>
                              ))}
                            </ul>

                            {/* Code Snippet */}
                            <div className="code-block">
                              <SyntaxHighlighter language={selectedLangs[index]} style={dracula}>
                                {approach.codeSnippets[selectedLangs[index]]}
                              </SyntaxHighlighter>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Time Complexity Dropdown */}
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#complexityCollapse-${index}`}>
                            Time Complexity
                          </button>
                        </h2>
                        <div id={`complexityCollapse-${index}`} className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p>{approach.timeComplexity}</p>
                          </div>
                        </div>
                      </div>
                    </div> {/* End of Code & Complexity Accordion */}
                  </div>
                </div>
              </div>
            </div> {/* End of Approach Dropdown */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
