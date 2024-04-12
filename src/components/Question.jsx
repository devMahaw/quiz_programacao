import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div>
      <p>Pergunta 0 de 10</p>
    </div>
  );
};

export default Question;
