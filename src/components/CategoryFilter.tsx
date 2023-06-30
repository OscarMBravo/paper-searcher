import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    onCategoryChange(category);
  };

  return (
    <select
      className="border rounded px-3 py-2 ml-4"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
      <option value="All">All Categories</option>
      <option value="launch">Launches</option>
      <option value="presentation">Presentations</option>
      <option value="misc">Misc.</option>
    </select>
  );
};

export default CategoryFilter;
