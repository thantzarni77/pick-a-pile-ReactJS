import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import QuestionDescript from "./components/QuestionDescript/QuestionDescript";
import Questions from "./components/Questions/Questions";
import data from "./assets/PickAPile";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./components/Loading/Loading";

function App() {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const handleReadMore = (route) => {
    navigate(`/piles/${route}`);
  };

  const handleAnswer = (questionID, answerID) => {
    const foundAnswer = data.Answers.find(
      (single) =>
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

          {data.Questions.map((question) => (
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
}

export default App;
