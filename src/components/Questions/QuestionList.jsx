import React, { useEffect, useState } from "react";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id}>{question.title}</li>
      ))}
    </ul>
  );
};

export default QuestionList;
