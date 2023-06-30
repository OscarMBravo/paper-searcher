import React from "react";
import "../styles/PaperCard.css";

interface PaperCardProps {
  id: number;
  created_at: string;
  date: string;
  title_en: string;
  blurb_en: string;
  body_en: null | string;
  images: { url: string }[];
  title_ga: string;
  blurb_ga: string;
  body_ga: null | string;
  video: null | string;
  link: string;
  category: string;
  altText: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title_en,
  blurb_en,
  date,
  images,
  link,
  category,
  altText,
}) => {
  const imageUrl = images[0]?.url; // Safely access the URL of the first image
  const headline = title_en; // Use title_en as headline
  const subheading =
    blurb_en.length > 136 ? `${blurb_en.slice(0, 136)}...` : blurb_en;

  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-colors duration-300 hover:bg-green-200">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} className="card-image" />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h2>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        <div className="card-footer">
          <p className="card-date">{date}</p>
          <span className="card-category">{category}</span>
        </div>
      </a>
    </div>
  );
};

export default PaperCard;
