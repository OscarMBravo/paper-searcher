import React from "react";

interface SortMenuProps {
  sortBy: string;
  onSortChange: (sortOption: string) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ sortBy, onSortChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = event.target.value;
    onSortChange(sortOption);
  };

  return (
    <select
      className="border rounded px-3 py-2 ml-4"
      value={sortBy}
      onChange={handleSortChange}
    >
      <option value="">Sort by:</option>
      <option value="recent">Most Recent</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

export default SortMenu;
