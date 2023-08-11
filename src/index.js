import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Section from "./organisms/Section/Section";
import "./styles.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const { data } = await axios.get("http://localhost:8000/books");
    setBooks(data);
  };

  return (
    <div className="container-fluid">
      <Section sectionTitle={"Books"} books={books} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
