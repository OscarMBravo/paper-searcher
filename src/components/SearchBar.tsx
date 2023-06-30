import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={(e) => {
          onSearchQueryChange(e.target.value);
          console.log(e.target.value);
        }}
        style={{ height: "40px", marginLeft: "20px" }}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
