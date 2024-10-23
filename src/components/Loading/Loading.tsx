import React from "react";
import loading from "../../../public/img/logo.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img className="loading" src={loading} alt="" />
    </div>
  );
};

export default Loading;
