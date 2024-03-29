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
    abstract.length > 300 ? `${abstract.slice(0, 300)}...` : abstract;
  const titleLines = 4; // Number of lines for the title

  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-colors duration-300 hover:bg-green-200">
      <a href={pdf_url} target="_blank" rel="noopener noreferrer">
        {/* <img src={imageUrl} alt="image1" className="card-image" /> */}
        <div className="card-content">
          <div
            className="title-area"
            style={{ height: `${titleLines * 1.2}em` }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {headline}
            </h2>
          </div>
          <div
            className="abstract-area"
            style={{ marginTop: `${titleLines * 1.2}em` }}
          >
            <p className="text-sm text-gray-600 mb-4">{subheading}</p>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-date">{year_published}</p>
          <span className="card-category">{category}</span>
        </div>
      </a>
    </div>
  );
};

export default PaperCard;
