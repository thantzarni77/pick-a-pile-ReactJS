import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ QuestionName, ImgPath, buttonFun }) => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  return (
    <div className="questionCard">
      <img
        //for netilify
        // src={`/img/${ImgPath}/${generateRandomNumber()}.jpg`}
        src={`../../../public/img/${ImgPath}/${generateRandomNumber()}.jpg`}
        alt={`img${ImgPath}`}
      />
      <div className="queDiv"></div>
      <div className="questionName">{QuestionName}</div>
      <button onClick={() => buttonFun(ImgPath)}>Pick Now</button>
    </div>
  );
};

export default QuestionCard;
