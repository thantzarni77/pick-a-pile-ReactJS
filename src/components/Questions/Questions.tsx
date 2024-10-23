import React, { useState } from "react";
import data from "../../assets/PickAPile.json";
import QuestionCard from "../question-card/QuestionCard";
import "./Questions.css";
import ReactPaginate from "react-paginate";

interface Props {
  handleReadMore: (route: string | number) => void;
}

interface Question {
  QuestionId: number;
  QuestionName: string;
  QuestionDesp: string;
}

const Questions = ({ handleReadMore }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(data.Questions.length / itemsPerPage);

  const handlePageChange = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentQuestions = data.Questions.slice(offset, offset + itemsPerPage);

  return (
    <div className="pilesContainer">
      {currentQuestions.map((question: Question) => (
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
