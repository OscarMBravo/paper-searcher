import React from "react";
import NewsCard from "./NewsCard";
import { News } from "../data/NewsData";

interface NewsListProps {
  newsData: News[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsData.map((news, index) => (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <NewsCard {...news} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
