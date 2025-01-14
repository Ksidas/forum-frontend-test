import React, { useState, useEffect } from "react";

const Forum = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Forum!</h1>
      <p>Explore questions or ask your own.</p>
      <h2>Questions:</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
