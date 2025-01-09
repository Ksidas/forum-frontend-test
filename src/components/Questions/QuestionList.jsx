import React, { useState, useEffect } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;

    fetch(`${API_URL}/api/questions`)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []); // Šis efektas veikia tik komponentui užsikrovus

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
