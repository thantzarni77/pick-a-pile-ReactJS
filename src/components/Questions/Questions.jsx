import React, { useState } from "react";
import data from "../../assets/PickAPile";
import QuestionCard from "../question-card/QuestionCard";
import "./Questions.css";
import ReactPaginate from "react-paginate";

const Questions = ({ handleReadMore }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(data.Questions.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentQuestions = data.Questions.slice(offset, offset + itemsPerPage);

  return (
    <div className="pilesContainer">
      {currentQuestions.map((question) => (
        <QuestionCard
          key={question.QuestionId}
          QuestionName={question.QuestionName}
          ImgPath={question.QuestionId}
          buttonFun={handleReadMore}
        />
      ))}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Questions;
