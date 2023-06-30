import React, { useState } from "react";
import "./App.css";
import PaperList from "./components/PaperList";
import PaperFilters from "./components/PaperFilters";
import { Paper, initialPaperData } from "./data/PaperData";

const App = () => {
  const [filteredData, setFilteredData] = useState(initialPaperData);

  const handleFilteredData = (data: Paper[]) => {
    setFilteredData(data);
  };

  return (
    <div>
      <PaperFilters
        paperData={initialPaperData}
        onFilteredData={handleFilteredData}
      />
      <PaperList paperData={filteredData} />
    </div>
  );
};

export default App;
