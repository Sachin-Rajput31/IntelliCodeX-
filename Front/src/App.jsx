import React, { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism.css";

import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Switch from "./animatedButtons/Switch";
import Copybtn from "./animatedButtons/Copybtn";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/github.css";
import LogoutBtn from "./animatedButtons/LogoutBtn";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./animatedButtons/Loader";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [code, setCode] = useState(`function sum(){ return 1+1 }`);
  const [review, setReview] = useState("");
  const [copySuccessfully, setCopySuccessfully] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  // Function to Get Code Review
  async function CodeReview() {
    setisLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching code review:", error);
    } finally {
      setisLoading(false); // Ensure loading state is reset
    }
  }

  useEffect(() => {
    const darkModeOn = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkModeOn ? "dark" : "light");

    const themeListener = (e) => setTheme(e.matches ? "dark" : "light");

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", themeListener);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", themeListener);
    };
  }, []);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(review).then(() => {
      setCopySuccessfully(true);
      setTimeout(() => setCopySuccessfully(false), 2000);
    });
  };

  return (
    <>
      <main className={theme === "dark" ? "dark-mode" : "light-mode"}>
        <div className="logo">
          <h4>
          IntelliCodeX<span className="flash"> ⚡achin</span>
          </h4>
        </div>
        <div className="logout">
          <LogoutBtn />
        </div>

        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "0.7rem",
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <div onClick={CodeReview}>
            <Switch />
          </div>
        </div>

        <div className="right">
          <div onClick={copyToClipboard} className="copy-btn">
            <Copybtn copied={copySuccessfully} />
          </div>

          <ErrorBoundary>
            <div className={theme === "dark" ? "hljs-dark" : "hljs-light"}>
              {isLoading ? (
                <Loader />
              ) : (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
              )}
            </div>
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

export default App;
