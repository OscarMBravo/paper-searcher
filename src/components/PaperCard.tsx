import React from "react";
import "../styles/PaperCard.css";

interface PaperCardProps {
  id: number;
  created_at: string;
  title: string;
  abstract: string;
  pdf_url: string;
  year_published: number;
  authors: string[];

  // new props

  category: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title,
  abstract,
  year_published,
  pdf_url,
  category,
}) => {
  const imageUrl =
    "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Neasa_UK_Speech_Keynote.JPG";
  const headline = title; // Use title_en as headline
  const subheading =
    abstract.length > 136 ? `${abstract.slice(0, 136)}...` : abstract;

  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-colors duration-300 hover:bg-green-200">
      <a href={pdf_url} target="_blank" rel="noopener noreferrer">
        {/*<img src={imageUrl} alt="image1" className="card-image" />*/}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h2>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        <div className="card-footer">
          <p className="card-date">{year_published}</p>
          <span className="card-category">{category}</span>
        </div>
      </a>
    </div>
  );
};

export default PaperCard;
