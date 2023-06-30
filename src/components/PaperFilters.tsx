import React, { useState } from "react";
import { Paper } from "../data/PaperData";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortMenu from "./SortMenu";
import DateRangePicker from "./DateRangePicker";

interface PaperFiltersProps {
  paperData: Paper[];
  onFilteredData: (filteredData: Paper[]) => void;
}

const PaperFilters: React.FC<PaperFiltersProps> = ({
  paperData,
  onFilteredData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateRangeSelected, setDateRangeSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterPaperData = (
    category: string,
    sortOption: string,
    startDate: string,
    endDate: string,
    searchQuery: string
  ) => {
    let filteredData: Paper[] = paperData;

    if (startDate && endDate && dateRangeSelected) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      filteredData = filteredData.filter((paper) => {
        const paperDate = new Date(paper.year_published);
        return paperDate >= startDateObj && paperDate <= endDateObj;
      });
    }

    if (category !== "All" && category !== "") {
      filteredData = filteredData.filter(
        (paper) => paper.category === category
      );
    } else {
      filteredData = filteredData.filter((paper) => paper.title !== "");
    }

    filteredData.sort((a, b) => {
      const dateA = new Date(a.year_published).getTime();
      const dateB = new Date(b.year_published).getTime();
      return sortOption === "oldest" ? dateA - dateB : dateB - dateA;
    });

    if (searchQuery) {
      filteredData = filteredData.filter((paper) =>
        paper.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    onFilteredData(filteredData);
  };

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearch={() =>
          filterPaperData(
            selectedCategory,
            sortBy,
            startDate,
            endDate,
            searchQuery
          )
        }
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          filterPaperData(category, sortBy, startDate, endDate, searchQuery);
        }}
      />

      <SortMenu
        sortBy={sortBy}
        onSortChange={(sortOption) => {
          setSortBy(sortOption);
          filterPaperData(
            selectedCategory,
            sortOption,
            startDate,
            endDate,
            searchQuery
          );
        }}
      />

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => {
          setStartDate(date);
          setDateRangeSelected(true);
          filterPaperData(selectedCategory, sortBy, date, endDate, searchQuery);
        }}
        onEndDateChange={(date) => {
          setEndDate(date);
          setDateRangeSelected(true);
          filterPaperData(
            selectedCategory,
            sortBy,
            startDate,
            date,
            searchQuery
          );
        }}
        onApplyDateRange={() => {
          setDateRangeSelected(true);
          filterPaperData(
            selectedCategory,
            sortBy,
            startDate,
            endDate,
            searchQuery
          );
        }}
      />
    </div>
  );
};

export default PaperFilters;
