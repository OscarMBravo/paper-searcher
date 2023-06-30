import React from "react";
import PaperCard from "./PaperCard";
import { Paper } from "../data/PaperData";

interface PaperListProps {
  paperData: Paper[];
}

const PaperList: React.FC<PaperListProps> = ({ paperData }) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {paperData.map((paper, index) => (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <PaperCard {...paper} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PaperList;
