import React, { useState, useEffect } from "react";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions") // Pakeiskite į savo backend adresą
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Forum!</h1>
      <p>Explore questions or ask your own.</p>
      <div>
        <h2>Questions:</h2>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
