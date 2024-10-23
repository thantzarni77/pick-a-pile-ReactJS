import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import QuestionDescript from "./components/QuestionDescript/QuestionDescript";
import Questions from "./components/Questions/Questions";
import data from "./assets/PickAPile.json";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./components/Loading/Loading";

interface Answer {
  AnswerId: number;
  AnswerImageUrl: string;
  AnswerName: string;
  AnswerDesp: string;
  QuestionId: number;
}

interface Question {
  QuestionId: number;
  QuestionName: string;
  QuestionDesp: string;
}

const App: React.FC = () => {
  const [answer, setAnswer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const handleReadMore = (route: string | number) => {
    navigate(`/piles/${route}`);
  };

  const handleAnswer = (questionID: number, answerID: number) => {
    const foundAnswer: Answer = data.Answers.find(
      (single: Answer) =>
        single.QuestionId === questionID && single.AnswerId === answerID
    );

    if (foundAnswer) {
      setAnswer(foundAnswer.AnswerDesp);
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="home">
        <Routes>
          <Route
            path="/"
            element={<Questions handleReadMore={handleReadMore} />}
          />

          {data.Questions.map((question: Question) => (
            <Route
              key={question.QuestionId}
              path={`/piles/${question.QuestionId}`}
              element={
                <QuestionDescript
                  quesName={question.QuestionName}
                  quesID={question.QuestionId}
                  quesDes={question.QuestionDesp}
                  handleAnswer={handleAnswer}
                  answer={answer}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
