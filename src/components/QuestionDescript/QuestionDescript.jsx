import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./QuestionDescript.css";

const QuestionDescript = ({
  quesName,
  quesDes,
  quesID,
  handleAnswer,
  answer,
}) => {
  const [answerID, setAnswerID] = useState([]);

  useEffect(() => {
    // Data structure to match quesIDs with answerIDs
    const argumentsMap = {
      1: [1, 2, 3, 4],
      2: [5, 6, 7, 8],
      3: [9, 10, 11, 12],
      4: [13, 14, 15, 16],
      5: [17, 18, 19, 20],
      6: [21, 22, 23, 24],
      7: [25, 26, 27, 28],
      8: [29, 30, 31, 32],
      9: [33, 34, 35, 36],
      10: [37, 38, 39, 40],
      11: [41, 42, 43, 44],
      12: [45, 46, 47, 48],
      13: [49, 50, 51, 52],
      14: [53, 54, 55, 56],
      15: [57, 58, 59, 60],
    };

    // Update answerID
    setAnswerID(argumentsMap[quesID] || []);
  }, [quesID]);

  const handleImageClick = (index) => {
    const imgContainer = document.getElementById("imgContainer");
    handleAnswer(quesID, answerID[index]);
    const getImg = document.querySelector(`.img${index}`);
    imgContainer.innerHTML = "";
    imgContainer.style.justifyContent = "space-around";
    imgContainer.style.alignItems = "center";
    imgContainer.style.flexWrap = "nowrap";
    const pileAnswer = document.createElement("div");
    pileAnswer.classList.add("pileAnswer");
    const pileNo = index + 1;
    const pile = document.createElement("h1");
    const answer = document.getElementById("answer");
    answer.style.display = "flex";
    pile.append("Pile", pileNo);
    pileAnswer.append(pile, answer);
    setTimeout(() => {
      imgContainer.append(getImg);
      imgContainer.append(pileAnswer);
    }, 0);
  };

  return (
    <div className="insideQues">
      <Link className="link" to="/">
        Back
      </Link>
      <div className="quesName">{quesName}</div>
      <div className="quesDes">{quesDes}</div>
      <div className="imgContainer" id="imgContainer">
        {/* we have four images to display, so mapping over array with four elements */}
        {[1, 2, 3, 4].map((arg, index) => (
          <button key={index} onClick={() => handleImageClick(index)}>
            <img
              className={`img${index}`}
              //for netilify
              // src={`/img/${quesID}/${arg}.jpg`}
              src={`../../../public/img/${quesID}/${arg}.jpg`}
              alt={`img${quesID}`}
            />
          </button>
        ))}
      </div>
      <div className="answer" id="answer">
        {answer}
      </div>
    </div>
  );
};

export default QuestionDescript;
