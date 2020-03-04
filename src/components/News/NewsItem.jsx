import React from "react";

const NewsItem = ({ data }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>

      <p className="card-text">{data.descr}</p>
      <span className="card-subtitle mb-2 text-muted">{data.date}</span>
    </div>
  </div>
);

export default NewsItem;
