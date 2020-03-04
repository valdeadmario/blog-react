import React from "react";
import { useSelector } from "react-redux";

import NewsItem from "./NewsItem";

import "./style.css";

const News = () => {
  const posts = useSelector(state => state.news.posts);
  return (
    <div className="news">
      <p className="news-title">News</p>
      <ul className="news-list">
        {posts.map(it => (
          <NewsItem key={it.id} data={it} />
        ))}
      </ul>
    </div>
  );
};

export default News;
