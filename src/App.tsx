import React, { useState } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import NewsFilters from "./components/NewsFilters";
import { News, initialNewsData } from "./data/NewsData";

const App = () => {
  const [filteredData, setFilteredData] = useState(initialNewsData);

  const handleFilteredData = (data: News[]) => {
    setFilteredData(data);
  };

  return (
    <div>
      <NewsFilters
        newsData={initialNewsData}
        onFilteredData={handleFilteredData}
      />
      <NewsList newsData={filteredData} />
    </div>
  );
};

export default App;
