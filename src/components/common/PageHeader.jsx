import React from "react";
import "./PageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-container">
      <h1 className="page-header-title italiana-regular">{title}</h1>
    </div>
  );
};

export default PageHeader;
